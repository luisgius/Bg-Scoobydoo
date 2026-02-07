"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "relative inline-flex h-8 items-center rounded-full px-3 text-xs font-semibold transition-all duration-200",
        "border hover:bg-[var(--muted)]",
        className
      )}
      aria-label={`Switch to ${language === "en" ? "Bulgarian" : "English"}`}
    >
      <span className={cn("transition-opacity", language === "en" ? "opacity-100" : "opacity-50")}>EN</span>
      <span className="mx-1 text-[var(--muted-foreground)]">/</span>
      <span className={cn("transition-opacity", language === "bg" ? "opacity-100" : "opacity-50")}>BG</span>
    </button>
  );
}
