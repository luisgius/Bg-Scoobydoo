"use client";

import YetAnotherLightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { PhotoWithLocation } from "@/types";

interface LightboxProps {
  photos: PhotoWithLocation[];
  index: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ photos, index, isOpen, onClose }: LightboxProps) {
  if (!isOpen) return null;

  const slides = photos.map((photo) => ({
    src: photo.url,
    width: photo.width || 1920,
    height: photo.height || 1080,
    alt: photo.caption || "Photo",
    title: photo.caption || undefined,
  }));

  return (
    <YetAnotherLightbox
      open={isOpen}
      close={onClose}
      index={index}
      slides={slides}
      styles={{
        container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
      }}
    />
  );
}
