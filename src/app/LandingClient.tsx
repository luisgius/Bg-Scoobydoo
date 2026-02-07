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
import { Camera, MapPin, CalendarDays, ArrowRight } from "lucide-react";
import type { Post } from "@/types";

type PostPreview = Pick<Post, "id" | "title" | "slug" | "category" | "publishedAt" | "contentEn">;

function getCategoryLabel(category: string, language: string) {
  const cat = CATEGORIES.find((c) => c.value === category);
  return language === "bg" ? cat?.labelBg || category : cat?.label || category;
}

const features = [
  {
    icon: Camera,
    titleEn: "Gallery",
    titleBg: "Галерия",
    descEn: "Our favorite moments, captured on camera",
    descBg: "Нашите любими моменти, заснети на камера",
    href: "/gallery",
  },
  {
    icon: MapPin,
    titleEn: "Our Map",
    titleBg: "Нашата карта",
    descEn: "The places we've visited together",
    descBg: "Местата, които посетихме заедно",
    href: "/map",
  },
  {
    icon: CalendarDays,
    titleEn: "Calendar",
    titleBg: "Календар",
    descEn: "Our story, day by day",
    descBg: "Нашата история, ден по ден",
    href: "/calendar",
  },
];

export function LandingClient({ posts }: { posts: PostPreview[] }) {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection />

      {/* Below-fold: Latest diary entries */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
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
                      <Badge variant="accent">
                        {getCategoryLabel(post.category, language)}
                      </Badge>
                      <span className="text-xs text-[var(--muted-foreground)]">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors">
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

      {/* Feature sections — alternating panels */}
      {features.map((feature, i) => {
        const Icon = feature.icon;
        const isReversed = i % 2 === 1;

        return (
          <section
            key={feature.href}
            className={`py-20 px-4 sm:px-6 lg:px-8 ${i % 2 === 0 ? "bg-[var(--muted)]" : ""}`}
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${isReversed ? "md:flex-row-reverse" : ""}`}
              >
                {/* Icon side */}
                <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-[var(--accent)]/10">
                  <Icon className="w-12 h-12 text-[var(--accent)]" strokeWidth={1.5} />
                </div>

                {/* Text side */}
                <div className={`flex-1 ${isReversed ? "text-right md:text-right" : ""} text-center md:text-left`}>
                  <h3 className="font-serif text-3xl font-semibold mb-3">
                    {language === "bg" ? feature.titleBg : feature.titleEn}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-lg mb-6 max-w-lg">
                    {language === "bg" ? feature.descBg : feature.descEn}
                  </p>
                  <Link href={feature.href}>
                    <Button variant="ghost" size="sm" className="gap-2">
                      {language === "bg" ? "Разгледай" : "Explore"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      <Footer />
    </div>
  );
}
