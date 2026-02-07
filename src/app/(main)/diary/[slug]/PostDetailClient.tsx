"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PostContent } from "@/components/diary/PostContent";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/providers/LanguageProvider";
import { formatDate } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";
import type { Post } from "@/types";

interface Props {
  post: Post;
}

export function PostDetailClient({ post }: Props) {
  const { language } = useLanguage();
  const cat = CATEGORIES.find((c) => c.value === post.category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 py-12"
    >
      <Link
        href="/diary"
        className="inline-flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {language === "bg" ? "Обратно към дневника" : "Back to Diary"}
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="accent">
            {language === "bg" ? cat?.labelBg : cat?.label}
          </Badge>
          <time className="text-sm text-[var(--muted-foreground)]">
            {formatDate(post.publishedAt)}
          </time>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-2">
          {post.title}
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--copper)] rounded-full mt-6" />
      </header>

      <PostContent post={post} />

      <footer className="mt-16 pt-8 border-t">
        <p className="text-sm text-[var(--muted-foreground)] italic text-center">
          {language === "bg"
            ? "Написано с любов от Луис"
            : "Written with love by Luis"}
        </p>
      </footer>
    </motion.article>
  );
}
