import Link from "next/link";
import { Crown, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <Crown className="w-16 h-16 mx-auto mb-6 text-[var(--accent)]" strokeWidth={1} />
        <h1 className="font-serif text-5xl font-bold mb-4">404</h1>
        <p className="text-lg text-[var(--muted-foreground)] mb-2 max-w-md mx-auto">
          This page seems to have gotten lost on one of our adventures.
        </p>
        <p className="text-base text-[var(--muted-foreground)] mb-8 max-w-md mx-auto">
          Тази страница изглежда се е загубила в едно от нашите приключения.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-button bg-[var(--accent)] text-white hover:brightness-110 transition-all"
        >
          <Home className="w-4 h-4" />
          Go Home
        </Link>
      </div>
    </div>
  );
}
