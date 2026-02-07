"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";

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
          ? "border-burgundy-500 bg-burgundy-50 dark:bg-burgundy-950/30"
          : "border-[var(--border)] hover:border-burgundy-300 dark:hover:border-burgundy-700",
        className
      )}
    >
      <input {...getInputProps()} />
      <div className="text-4xl mb-4">&#x1F4E4;</div>
      {isDragActive ? (
        <p className="text-burgundy-600 dark:text-burgundy-400 font-medium">
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
