"use client";

import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  format,
} from "date-fns";
import { DateCell } from "./DateCell";
import type { CalendarDay } from "@/types";

interface CalendarGridProps {
  year: number;
  month: number;
  days: CalendarDay[];
  onDateClick: (data: CalendarDay) => void;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function CalendarGrid({ year, month, days, onDateClick }: CalendarGridProps) {
  const monthStart = startOfMonth(new Date(year, month - 1));
  const monthEnd = endOfMonth(monthStart);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  const allDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const dayMap = new Map<string, CalendarDay>();
  for (const d of days) {
    dayMap.set(d.date, d);
  }

  return (
    <div>
      <div className="grid grid-cols-7 gap-1 mb-1">
        {WEEKDAYS.map((wd) => (
          <div
            key={wd}
            className="text-center text-xs font-semibold text-[var(--muted-foreground)] py-2"
          >
            {wd}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {allDays.map((day) => {
          const key = format(day, "yyyy-MM-dd");
          const data = dayMap.get(key);
          return (
            <DateCell
              key={key}
              day={day.getDate()}
              data={data}
              isCurrentMonth={isSameMonth(day, monthStart)}
              isToday={isToday(day)}
              onClick={() => data && onDateClick(data)}
            />
          );
        })}
      </div>
    </div>
  );
}
