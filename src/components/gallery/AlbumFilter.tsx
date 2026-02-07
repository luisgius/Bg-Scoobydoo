"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";

interface AlbumFilterProps {
  albums: string[];
  selected: string | null;
  onChange: (album: string | null) => void;
}

export function AlbumFilter({ albums, selected, onChange }: AlbumFilterProps) {
  const { language } = useLanguage();

  if (albums.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={cn(
          "px-4 py-2 rounded-pill text-sm font-medium transition-all duration-200",
          !selected
            ? "bg-[var(--accent)] text-white"
            : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--accent)]/10"
        )}
      >
        {language === "bg" ? "Всички" : "All"}
      </button>
      {albums.map((album) => (
        <button
          key={album}
          onClick={() => onChange(album)}
          className={cn(
            "px-4 py-2 rounded-pill text-sm font-medium transition-all duration-200",
            selected === album
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--accent)]/10"
          )}
        >
          {album}
        </button>
      ))}
    </div>
  );
}
