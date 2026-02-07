"use client";

import Image from "next/image";
import type { Photo } from "@/types";

interface MiniGalleryProps {
  photos: Photo[];
}

export function MiniGallery({ photos }: MiniGalleryProps) {
  if (photos.length === 0) return null;

  return (
    <div className="flex gap-1 mt-2 overflow-x-auto max-w-[250px] pb-1">
      {photos.slice(0, 5).map((photo) => (
        <Image
          key={photo.id}
          src={photo.url}
          alt={photo.caption || "Photo"}
          width={60}
          height={60}
          className="w-14 h-14 object-cover rounded-md flex-shrink-0"
        />
      ))}
      {photos.length > 5 && (
        <div className="w-14 h-14 rounded-md bg-burgundy-100 dark:bg-burgundy-900 flex items-center justify-center text-xs font-medium flex-shrink-0">
          +{photos.length - 5}
        </div>
      )}
    </div>
  );
}
