"use client";

import { useState } from "react";
import { useCalendarData } from "@/hooks/useCalendarData";
import { CalendarGrid } from "@/components/calendar/CalendarGrid";
import { CalendarNav } from "@/components/calendar/CalendarNav";
import { DateModal } from "@/components/calendar/DateModal";
import { Skeleton } from "@/components/ui/Skeleton";
import { PageTransition } from "@/components/layout/PageTransition";
import { useLanguage } from "@/providers/LanguageProvider";
import type { CalendarDay } from "@/types";

export default function CalendarPage() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const { calendarData, isLoading } = useCalendarData(year, month);
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
  const { language } = useLanguage();

  const handlePrev = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNext = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {language === "bg" ? "Календар на спомените" : "Memory Calendar"}
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg">
            {language === "bg"
              ? "Нашата история, ден по ден"
              : "Our story, day by day"}
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
              {language === "bg" ? "Дневник" : "Diary"}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--copper)]" />
              {language === "bg" ? "Снимки" : "Photos"}
            </span>
          </div>
        </div>

        <CalendarNav year={year} month={month} onPrev={handlePrev} onNext={handleNext} />

        {isLoading ? (
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 35 }).map((_, i) => (
              <Skeleton key={i} className="h-24 md:h-28 rounded-lg" />
            ))}
          </div>
        ) : (
          <CalendarGrid
            year={year}
            month={month}
            days={calendarData?.days ?? []}
            onDateClick={setSelectedDay}
          />
        )}

        <DateModal
          isOpen={!!selectedDay}
          onClose={() => setSelectedDay(null)}
          data={selectedDay}
        />
      </div>
    </PageTransition>
  );
}
