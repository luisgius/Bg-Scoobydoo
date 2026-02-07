"use client";

import { format } from "date-fns";
import { Button } from "@/components/ui/Button";

interface CalendarNavProps {
  year: number;
  month: number;
  onPrev: () => void;
  onNext: () => void;
}

export function CalendarNav({ year, month, onPrev, onNext }: CalendarNavProps) {
  const date = new Date(year, month - 1);

  return (
    <div className="flex items-center justify-between mb-6">
      <Button variant="ghost" size="sm" onClick={onPrev}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Button>
      <h2 className="font-serif text-2xl font-semibold">
        {format(date, "MMMM yyyy")}
      </h2>
      <Button variant="ghost" size="sm" onClick={onNext}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>
    </div>
  );
}
