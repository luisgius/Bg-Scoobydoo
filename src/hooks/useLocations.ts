"use client";

import useSWR from "swr";
import type { LocationWithPhotos } from "@/types";

const fetcher = (url: string) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error("Failed to fetch");
    return r.json();
  });

export function useLocations() {
  const { data, error, isLoading, mutate } = useSWR<LocationWithPhotos[]>(
    "/api/locations",
    fetcher
  );

  return {
    locations: data ?? [],
    isLoading,
    isError: !!error,
    mutate,
  };
}
