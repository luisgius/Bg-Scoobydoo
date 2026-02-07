"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { UploadDropzone } from "@/components/gallery/UploadDropzone";
import { ExifPreview } from "@/components/gallery/ExifPreview";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { extractExif, type ExifData } from "@/lib/exif";

interface FileWithPreview {
  file: File;
  preview: string;
  exif: ExifData;
}

export function PhotoUploadForm() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [caption, setCaption] = useState("");
  const [album, setAlbum] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(0);

  const onFilesAccepted = useCallback(async (acceptedFiles: File[]) => {
    const filesWithPreview = await Promise.all(
      acceptedFiles.map(async (file) => {
        const exif = await extractExif(file);
        return {
          file,
          preview: URL.createObjectURL(file),
          exif,
        };
      })
    );
    setFiles((prev) => [...prev, ...filesWithPreview]);
  }, []);

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    setUploading(true);
    setUploaded(0);

    for (const { file, exif } of files) {
      try {
        // 1. Upload file to Supabase Storage
        const formData = new FormData();
        formData.append("file", file);

        const uploadRes = await fetch("/api/photos/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) throw new Error("Upload failed");
        const { url, storagePath } = await uploadRes.json();

        // 2. Create photo record
        await fetch("/api/photos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url,
            storagePath,
            dateTaken: exif.dateTaken || null,
            caption: caption || null,
            album: album || null,
            width: exif.width || null,
            height: exif.height || null,
          }),
        });

        setUploaded((prev) => prev + 1);
      } catch (err) {
        console.error("Failed to upload:", file.name, err);
      }
    }

    setUploading(false);
    setFiles([]);
    setCaption("");
    setAlbum("");
  };

  return (
    <div className="space-y-6">
      <UploadDropzone onFilesAccepted={onFilesAccepted} />

      {files.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {files.map((f, i) => (
              <div key={i} className="relative group">
                <Image
                  src={f.preview}
                  alt={`Preview ${i + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <button
                  onClick={() => removeFile(i)}
                  className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  &times;
                </button>
                <ExifPreview exif={f.exif} />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input
              id="caption"
              label="Caption (shared for all photos)"
              placeholder="Enter caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <Input
              id="album"
              label="Album name"
              placeholder="e.g., Romania Trip"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <Button onClick={handleUpload} disabled={uploading} size="lg">
              {uploading
                ? `Uploading ${uploaded}/${files.length}...`
                : `Upload ${files.length} photo${files.length > 1 ? "s" : ""}`}
            </Button>
            {!uploading && (
              <Button
                variant="ghost"
                onClick={() => {
                  files.forEach((f) => URL.revokeObjectURL(f.preview));
                  setFiles([]);
                }}
              >
                Clear all
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
