"use client";

import { PhotoCard } from "./PhotoCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { ImageIcon } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import type { PhotoWithLocation } from "@/types";

interface MasonryGridProps {
  photos: PhotoWithLocation[];
  isLoading: boolean;
  onPhotoClick: (index: number) => void;
}

export function MasonryGrid({ photos, isLoading, onPhotoClick }: MasonryGridProps) {
  const { language } = useLanguage();

  if (isLoading) {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="break-inside-avoid mb-4">
            <Skeleton className={`w-full rounded-card ${i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-60" : "h-72"}`} />
          </div>
        ))}
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-16 text-[var(--muted-foreground)]">
        <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-40" strokeWidth={1.5} />
        <p className="text-lg">
          {language === "bg"
            ? "Все още няма снимки. Качете спомени!"
            : "No photos yet. Upload some memories!"}
        </p>
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
