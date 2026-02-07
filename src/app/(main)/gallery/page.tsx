"use client";

import { useState, useMemo } from "react";
import { usePhotos } from "@/hooks/usePhotos";
import { MasonryGrid } from "@/components/gallery/MasonryGrid";
import { Lightbox } from "@/components/gallery/Lightbox";
import { AlbumFilter } from "@/components/gallery/AlbumFilter";
import { PageTransition } from "@/components/layout/PageTransition";
import { useLanguage } from "@/providers/LanguageProvider";

export default function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const { photos, isLoading } = usePhotos(selectedAlbum ?? undefined);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const { language } = useLanguage();

  const albums = useMemo(() => {
    const allAlbums = photos.map((p) => p.album).filter(Boolean) as string[];
    return Array.from(new Set(allAlbums));
  }, [photos]);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {language === "bg" ? "Галерия" : "Gallery"}
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
            {language === "bg"
              ? "Нашите любими моменти, заснети на камера"
              : "Our favorite moments, captured on camera"}
          </p>
        </div>

        {albums.length > 0 && (
          <div className="mb-8 flex justify-center">
            <AlbumFilter
              albums={albums}
              selected={selectedAlbum}
              onChange={setSelectedAlbum}
            />
          </div>
        )}

        <MasonryGrid
          photos={photos}
          isLoading={isLoading}
          onPhotoClick={setLightboxIndex}
        />

        <Lightbox
          photos={photos}
          index={lightboxIndex}
          isOpen={lightboxIndex >= 0}
          onClose={() => setLightboxIndex(-1)}
        />
      </div>
    </PageTransition>
  );
}
