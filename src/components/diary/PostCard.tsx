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
    >
      <Link href={`/diary/${post.slug}`}>
        <Card hover className="p-6 h-full group">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="burgundy">
              {language === "bg" ? cat?.labelBg : cat?.label}
            </Badge>
            <span className="text-xs text-[var(--muted-foreground)]">
              {formatDate(post.publishedAt)}
            </span>
          </div>
          <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-burgundy-600 dark:group-hover:text-burgundy-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-[var(--muted-foreground)] line-clamp-4 leading-relaxed">
            {content.substring(0, 250)}...
          </p>
        </Card>
      </Link>
    </motion.div>
  );
}
