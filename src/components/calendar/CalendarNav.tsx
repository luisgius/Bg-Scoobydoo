"use client";

import { format } from "date-fns";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <h2 className="font-serif text-2xl font-semibold">
        {format(date, "MMMM yyyy")}
      </h2>
      <Button variant="ghost" size="sm" onClick={onNext}>
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
}
