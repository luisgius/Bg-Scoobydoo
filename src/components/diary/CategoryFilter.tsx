"use client";

import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";
import type { PostCategory } from "@/types";

interface CategoryFilterProps {
  selected: PostCategory | null;
  onChange: (category: PostCategory | null) => void;
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  const { language } = useLanguage();

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
        {language === "bg" ? "Всички" : "All"}
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value as PostCategory)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            selected === cat.value
              ? "bg-burgundy-700 text-white dark:bg-burgundy-600"
              : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-burgundy-100 dark:hover:bg-burgundy-950"
          )}
        >
          {language === "bg" ? cat.labelBg : cat.label}
        </button>
      ))}
    </div>
  );
}
