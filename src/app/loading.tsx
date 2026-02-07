export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-4 border-burgundy-200 dark:border-burgundy-800 border-t-burgundy-600 dark:border-t-burgundy-400 animate-spin" />
        </div>
        <p className="text-sm text-[var(--muted-foreground)] animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
