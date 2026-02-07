"use client";

import useSWR from "swr";
import type { PhotoWithLocation } from "@/types";

const fetcher = (url: string) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error("Failed to fetch");
    return r.json();
  });

export function usePhotos(album?: string, locationId?: string) {
  const params = new URLSearchParams();
  if (album) params.set("album", album);
  if (locationId) params.set("locationId", locationId);
  const query = params.toString() ? `?${params.toString()}` : "";

  const { data, error, isLoading, mutate } = useSWR<PhotoWithLocation[]>(
    `/api/photos${query}`,
    fetcher
  );

  return {
    photos: data ?? [],
    isLoading,
    isError: !!error,
    mutate,
  };
}
