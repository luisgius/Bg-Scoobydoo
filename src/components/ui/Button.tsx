"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-burgundy-700 text-white hover:bg-burgundy-800 dark:bg-burgundy-600 dark:hover:bg-burgundy-700 shadow-md hover:shadow-lg":
              variant === "primary",
            "bg-gold-500 text-white hover:bg-gold-600 dark:bg-gold-600 dark:hover:bg-gold-700 shadow-md hover:shadow-lg":
              variant === "secondary",
            "hover:bg-burgundy-50 dark:hover:bg-burgundy-950/50 text-foreground":
              variant === "ghost",
            "border-2 border-burgundy-300 dark:border-burgundy-700 text-burgundy-700 dark:text-burgundy-300 hover:bg-burgundy-50 dark:hover:bg-burgundy-950/30":
              variant === "outline",
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-sm": size === "md",
            "px-8 py-3 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
