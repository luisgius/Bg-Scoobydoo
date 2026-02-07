"use client";

import useSWR from "swr";
import type { Post, PostCategory } from "@/types";

const fetcher = (url: string) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error("Failed to fetch");
    return r.json();
  });

export function usePosts(category?: PostCategory) {
  const params = category ? `?category=${category}` : "";
  const { data, error, isLoading, mutate } = useSWR<Post[]>(
    `/api/posts${params}`,
    fetcher
  );

  return {
    posts: data ?? [],
    isLoading,
    isError: !!error,
    mutate,
  };
}
