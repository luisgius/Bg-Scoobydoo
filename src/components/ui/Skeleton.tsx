import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg bg-[var(--muted)] animate-shimmer",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(90deg, var(--muted) 0%, var(--border) 50%, var(--muted) 100%)",
        backgroundSize: "200% 100%",
      }}
      {...props}
    />
  );
}
