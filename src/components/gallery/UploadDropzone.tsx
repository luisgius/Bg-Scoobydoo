"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

interface UploadDropzoneProps {
  onFilesAccepted: (files: File[]) => void;
  className?: string;
}

export function UploadDropzone({ onFilesAccepted, className }: UploadDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFilesAccepted(acceptedFiles);
    },
    [onFilesAccepted]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpg", ".jpeg", ".png", ".webp", ".heic"] },
    maxSize: 10 * 1024 * 1024,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200",
        isDragActive
          ? "border-[var(--accent)] bg-[var(--accent)]/5"
          : "border-[var(--border)] hover:border-[var(--accent)]/50",
        className
      )}
    >
      <input {...getInputProps()} />
      <Upload className="w-10 h-10 mx-auto mb-4 text-[var(--muted-foreground)]" strokeWidth={1.5} />
      {isDragActive ? (
        <p className="text-[var(--accent)] font-medium">
          Drop your photos here...
        </p>
      ) : (
        <>
          <p className="font-medium mb-1">Drag & drop photos here</p>
          <p className="text-sm text-[var(--muted-foreground)]">
            or click to browse (JPG, PNG, WebP, HEIC up to 10MB)
          </p>
        </>
      )}
    </div>
  );
}
