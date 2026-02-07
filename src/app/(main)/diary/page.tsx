"use client";

import { useState } from "react";
import { usePosts } from "@/hooks/usePosts";
import { CategoryFilter } from "@/components/diary/CategoryFilter";
import { PostGrid } from "@/components/diary/PostGrid";
import { PageTransition } from "@/components/layout/PageTransition";
import { useLanguage } from "@/providers/LanguageProvider";
import type { PostCategory } from "@/types";

export default function DiaryPage() {
  const [category, setCategory] = useState<PostCategory | null>(null);
  const { posts, isLoading } = usePosts(category ?? undefined);
  const { language } = useLanguage();

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {language === "bg" ? "Дневник" : "Diary"}
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
            {language === "bg"
              ? "Мисли, писма и размисли за нашата любов"
              : "Thoughts, letters, and reflections on our love"}
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <CategoryFilter selected={category} onChange={setCategory} />
        </div>

        <PostGrid posts={posts} isLoading={isLoading} />
      </div>
    </PageTransition>
  );
}
