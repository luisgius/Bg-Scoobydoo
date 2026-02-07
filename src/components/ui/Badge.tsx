"use client";

import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "burgundy" | "gold" | "muted";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-[var(--muted)] text-[var(--muted-foreground)]": variant === "default" || variant === "muted",
          "bg-burgundy-100 text-burgundy-800 dark:bg-burgundy-950 dark:text-burgundy-300":
            variant === "burgundy",
          "bg-gold-100 text-gold-800 dark:bg-gold-950 dark:text-gold-300":
            variant === "gold",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
