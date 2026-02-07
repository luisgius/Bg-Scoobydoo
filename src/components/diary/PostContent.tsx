"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import type { Post } from "@/types";

interface PostContentProps {
  post: Post;
}

export function PostContent({ post }: PostContentProps) {
  const { language } = useLanguage();

  const content = language === "bg" && post.contentBg ? post.contentBg : post.contentEn;
  const showFallback = language === "bg" && !post.contentBg;

  // Split content into paragraphs
  const paragraphs = content.split("\n\n").filter((p) => p.trim());

  return (
    <div className="prose-diary max-w-none font-body">
      {showFallback && (
        <div className="mb-6 px-4 py-3 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-sm text-[var(--accent)]">
          Bulgarian translation not available yet. Showing English version.
        </div>
      )}
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="mb-6 leading-relaxed text-base md:text-lg">
          {paragraph.trim()}
        </p>
      ))}
    </div>
  );
}
