"use client";

import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "gold" | "muted" | "rose";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-[var(--muted)] text-[var(--muted-foreground)]": variant === "default" || variant === "muted",
          "bg-[var(--accent)]/15 text-[var(--accent)]":
            variant === "accent",
          "bg-warm-100 text-warm-800 dark:bg-warm-950 dark:text-warm-300":
            variant === "gold",
          "bg-[var(--rose)]/15 text-[var(--rose)]":
            variant === "rose",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
