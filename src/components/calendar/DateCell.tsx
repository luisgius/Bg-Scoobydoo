"use client";

import { cn } from "@/lib/utils";
import type { CalendarDay } from "@/types";

interface DateCellProps {
  day: number;
  data?: CalendarDay;
  isCurrentMonth: boolean;
  isToday: boolean;
  onClick: () => void;
}

export function DateCell({ day, data, isCurrentMonth, isToday, onClick }: DateCellProps) {
  const hasPosts = data && data.posts.length > 0;
  const hasPhotos = data && data.photos.length > 0;
  const hasContent = hasPosts || hasPhotos;

  return (
    <button
      onClick={onClick}
      disabled={!hasContent}
      className={cn(
        "relative h-24 md:h-28 p-2 border rounded-lg text-left transition-all duration-200",
        isCurrentMonth
          ? "bg-[var(--card)]"
          : "bg-[var(--muted)]/30 text-[var(--muted-foreground)]",
        isToday && "ring-2 ring-burgundy-500",
        hasContent && "cursor-pointer hover:bg-[var(--muted)] hover:shadow-sm",
        !hasContent && "cursor-default"
      )}
    >
      <span
        className={cn(
          "text-sm font-medium",
          isToday && "text-burgundy-600 dark:text-burgundy-400"
        )}
      >
        {day}
      </span>

      {hasContent && (
        <div className="absolute bottom-2 left-2 flex gap-1">
          {hasPosts && (
            <span className="w-2 h-2 rounded-full bg-burgundy-500" title="Diary entry" />
          )}
          {hasPhotos && (
            <span className="w-2 h-2 rounded-full bg-gold-500" title="Photos" />
          )}
        </div>
      )}
    </button>
  );
}
