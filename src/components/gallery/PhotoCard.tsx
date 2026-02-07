"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { formatDate } from "@/lib/utils";
import type { PhotoWithLocation } from "@/types";

interface PhotoCardProps {
  photo: PhotoWithLocation;
  onClick: () => void;
  index: number;
}

export function PhotoCard({ photo, onClick, index }: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="break-inside-avoid mb-4 cursor-pointer group relative overflow-hidden rounded-card"
      onClick={onClick}
    >
      <div className="relative aspect-auto">
        <Image
          src={photo.url}
          alt={photo.caption || "Photo"}
          width={photo.width || 400}
          height={photo.height || 300}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            {photo.caption && (
              <p className="text-sm font-medium mb-1">{photo.caption}</p>
            )}
            <div className="flex items-center gap-2 text-xs text-white/70">
              {photo.dateTaken && <span>{formatDate(photo.dateTaken)}</span>}
              {photo.location && (
                <>
                  <span>&bull;</span>
                  <span>{photo.location.name}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
