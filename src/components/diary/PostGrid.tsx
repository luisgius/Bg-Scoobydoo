"use client";

import { PostCard } from "./PostCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { BookOpen } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import type { Post } from "@/types";

interface PostGridProps {
  posts: Post[];
  isLoading: boolean;
}

export function PostGrid({ posts, isLoading }: PostGridProps) {
  const { language } = useLanguage();

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-card border p-6 space-y-3">
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 text-[var(--muted-foreground)]">
        <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-40" strokeWidth={1.5} />
        <p className="text-lg">
          {language === "bg" ? "Няма намерени записи." : "No entries found."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <PostCard key={post.id} post={post} index={i} />
      ))}
    </div>
  );
}
