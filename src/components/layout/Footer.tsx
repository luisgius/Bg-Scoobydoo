"use client";

import Link from "next/link";
import { useLanguage } from "@/providers/LanguageProvider";
import { SITE_NAME, NAV_LINKS } from "@/lib/constants";
import { Heart } from "lucide-react";

export function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Decorative divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-[var(--accent)]/30" />
          <Heart className="mx-4 h-4 w-4 text-[var(--accent)]" strokeWidth={1.5} />
          <div className="h-px w-12 bg-[var(--accent)]/30" />
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-serif text-lg text-[var(--accent)]">
            {SITE_NAME}
          </p>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--muted-foreground)]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[var(--accent)] transition-colors"
              >
                {language === "bg" ? link.labelBg : link.label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-[var(--muted-foreground)]">
            {language === "bg"
              ? `Направено с любов за Мария`
              : `Made with love for Maria`}
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            &copy; {year} Luis & Maria
          </p>
        </div>
      </div>
    </footer>
  );
}
