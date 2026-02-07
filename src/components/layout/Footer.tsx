"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-8 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-serif text-lg text-burgundy-700 dark:text-burgundy-400">
            {SITE_NAME}
          </p>
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
