"use client";

import useSWR from "swr";
import type { CalendarMonth } from "@/types";

const fetcher = (url: string) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error("Failed to fetch");
    return r.json();
  });

export function useCalendarData(year: number, month: number) {
  const { data, error, isLoading } = useSWR<CalendarMonth>(
    `/api/calendar?year=${year}&month=${month}`,
    fetcher
  );

  return {
    calendarData: data,
    isLoading,
    isError: !!error,
  };
}
