"use client";

import { cn } from "@/lib/utils";

interface AlbumFilterProps {
  albums: string[];
  selected: string | null;
  onChange: (album: string | null) => void;
}

export function AlbumFilter({ albums, selected, onChange }: AlbumFilterProps) {
  if (albums.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
          !selected
            ? "bg-burgundy-700 text-white dark:bg-burgundy-600"
            : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-burgundy-100 dark:hover:bg-burgundy-950"
        )}
      >
        All
      </button>
      {albums.map((album) => (
        <button
          key={album}
          onClick={() => onChange(album)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            selected === album
              ? "bg-burgundy-700 text-white dark:bg-burgundy-600"
              : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-burgundy-100 dark:hover:bg-burgundy-950"
          )}
        >
          {album}
        </button>
      ))}
    </div>
  );
}
