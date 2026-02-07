"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "relative inline-flex h-8 items-center rounded-pill bg-[var(--muted)] p-0.5",
        className
      )}
    >
      <button
        onClick={language === "bg" ? toggleLanguage : undefined}
        className={cn(
          "relative z-10 rounded-pill px-3 py-1 text-xs font-semibold transition-all duration-200",
          language === "en"
            ? "bg-[var(--accent)] text-white shadow-sm"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={language === "en" ? toggleLanguage : undefined}
        className={cn(
          "relative z-10 rounded-pill px-3 py-1 text-xs font-semibold transition-all duration-200",
          language === "bg"
            ? "bg-[var(--accent)] text-white shadow-sm"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        )}
        aria-label="Switch to Bulgarian"
      >
        BG
      </button>
    </div>
  );
}
