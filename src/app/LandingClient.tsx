"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HeroSection } from "@/components/hero/HeroSection";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/providers/LanguageProvider";
import { formatDate } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constants";
import type { Post } from "@/types";

type PostPreview = Pick<Post, "id" | "title" | "slug" | "category" | "publishedAt" | "contentEn">;

function getCategoryLabel(category: string, language: string) {
  const cat = CATEGORIES.find((c) => c.value === category);
  return language === "bg" ? cat?.labelBg || category : cat?.label || category;
}

export function LandingClient({ posts }: { posts: PostPreview[] }) {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection />

      {/* Below-fold: Latest diary entries */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {language === "bg" ? "Последни записи" : "Latest Entries"}
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
              {language === "bg"
                ? "Мисли, чувства и размисли от сърцето"
                : "Thoughts, feelings, and reflections from the heart"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/diary/${post.slug}`}>
                  <Card hover className="h-full p-6 group">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="burgundy">
                        {getCategoryLabel(post.category, language)}
                      </Badge>
                      <span className="text-xs text-[var(--muted-foreground)]">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-burgundy-600 dark:group-hover:text-burgundy-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] line-clamp-3">
                      {post.contentEn.substring(0, 200)}...
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/diary">
              <Button variant="outline" size="lg">
                {language === "bg" ? "Виж всички записи" : "View All Entries"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature sections */}
      <section className="py-24 px-4 bg-[var(--muted)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-4">&#x1F4F8;</div>
              <h3 className="font-serif text-2xl font-semibold mb-2">
                {language === "bg" ? "Галерия" : "Gallery"}
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4">
                {language === "bg"
                  ? "Нашите любими моменти, заснети на камера"
                  : "Our favorite moments, captured on camera"}
              </p>
              <Link href="/gallery">
                <Button variant="ghost" size="sm">
                  {language === "bg" ? "Разгледай" : "Explore"} &rarr;
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">&#x1F5FA;</div>
              <h3 className="font-serif text-2xl font-semibold mb-2">
                {language === "bg" ? "Нашата карта" : "Our Map"}
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4">
                {language === "bg"
                  ? "Местата, които посетихме заедно"
                  : "The places we've visited together"}
              </p>
              <Link href="/map">
                <Button variant="ghost" size="sm">
                  {language === "bg" ? "Разгледай" : "Explore"} &rarr;
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">&#x1F4C5;</div>
              <h3 className="font-serif text-2xl font-semibold mb-2">
                {language === "bg" ? "Календар" : "Calendar"}
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4">
                {language === "bg"
                  ? "Нашата история, ден по ден"
                  : "Our story, day by day"}
              </p>
              <Link href="/calendar">
                <Button variant="ghost" size="sm">
                  {language === "bg" ? "Разгледай" : "Explore"} &rarr;
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
