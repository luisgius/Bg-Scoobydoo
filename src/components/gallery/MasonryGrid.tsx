"use client";

import { PhotoCard } from "./PhotoCard";
import { Skeleton } from "@/components/ui/Skeleton";
import type { PhotoWithLocation } from "@/types";

interface MasonryGridProps {
  photos: PhotoWithLocation[];
  isLoading: boolean;
  onPhotoClick: (index: number) => void;
}

export function MasonryGrid({ photos, isLoading, onPhotoClick }: MasonryGridProps) {
  if (isLoading) {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="break-inside-avoid mb-4">
            <Skeleton className={`w-full rounded-xl ${i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-60" : "h-72"}`} />
          </div>
        ))}
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-16 text-[var(--muted-foreground)]">
        <div className="text-5xl mb-4">&#x1F4F7;</div>
        <p className="text-lg">No photos yet. Upload some memories!</p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {photos.map((photo, i) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          index={i}
          onClick={() => onPhotoClick(i)}
        />
      ))}
    </div>
  );
}
