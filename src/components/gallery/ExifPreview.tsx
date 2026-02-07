"use client";

import type { ExifData } from "@/lib/exif";
import { formatDate } from "@/lib/utils";

interface ExifPreviewProps {
  exif: ExifData;
}

export function ExifPreview({ exif }: ExifPreviewProps) {
  const hasData = exif.dateTaken || exif.latitude || exif.camera;
  if (!hasData) return null;

  return (
    <div className="rounded-lg bg-[var(--muted)] p-3 text-sm space-y-1">
      <p className="font-medium text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2">
        EXIF Data
      </p>
      {exif.dateTaken && (
        <p>
          <span className="text-[var(--muted-foreground)]">Date:</span>{" "}
          {formatDate(exif.dateTaken)}
        </p>
      )}
      {exif.latitude && exif.longitude && (
        <p>
          <span className="text-[var(--muted-foreground)]">Location:</span>{" "}
          {exif.latitude.toFixed(4)}, {exif.longitude.toFixed(4)}
        </p>
      )}
      {exif.width && exif.height && (
        <p>
          <span className="text-[var(--muted-foreground)]">Size:</span>{" "}
          {exif.width} x {exif.height}
        </p>
      )}
      {exif.camera && (
        <p>
          <span className="text-[var(--muted-foreground)]">Camera:</span>{" "}
          {exif.camera}
        </p>
      )}
    </div>
  );
}
