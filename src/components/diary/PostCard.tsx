"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/providers/LanguageProvider";
import { formatDate } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constants";
import type { Post } from "@/types";

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  const { language } = useLanguage();
  const cat = CATEGORIES.find((c) => c.value === post.category);
  const content = language === "bg" && post.contentBg ? post.contentBg : post.contentEn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ rotateY: 2 }}
    >
      <Link href={`/diary/${post.slug}`}>
        <Card hover className="p-0 h-full group overflow-hidden">
          <div className="flex h-full">
            {/* Left accent bar */}
            <div
              className="w-1 flex-shrink-0 rounded-l-card"
              style={{ backgroundColor: cat?.color || "var(--accent)" }}
            />
            <div className="p-6 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="accent">
                  {language === "bg" ? cat?.labelBg : cat?.label}
                </Badge>
                <time className="text-xs text-[var(--muted-foreground)] font-sans">
                  {formatDate(post.publishedAt)}
                </time>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] line-clamp-4 leading-relaxed font-body italic">
                {content.substring(0, 250)}...
              </p>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
