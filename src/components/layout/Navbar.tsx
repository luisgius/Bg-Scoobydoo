"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { NAV_LINKS, ADMIN_NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";
import { Crown, Menu } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { language } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAdmin = session?.user?.role === "ADMIN";

  return (
    <nav className="sticky top-0 z-40 glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Crown className="h-6 w-6 text-[var(--accent)]" strokeWidth={1.5} />
            <span className="font-serif text-lg font-semibold hidden sm:block group-hover:text-[var(--accent)] transition-colors">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "bg-[var(--accent)]/15 text-[var(--accent)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
                )}
              >
                {language === "bg" ? link.labelBg : link.label}
              </Link>
            ))}
            {isAdmin &&
              ADMIN_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "bg-warm-100 text-warm-800 dark:bg-warm-950 dark:text-warm-300"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
                  )}
                >
                  {language === "bg" ? link.labelBg : link.label}
                </Link>
              ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            {session?.user && (
              <div className="hidden md:flex items-center gap-2 ml-2">
                <span className="text-sm text-[var(--muted-foreground)]">
                  {session.user.name}
                </span>
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  {language === "bg" ? "Изход" : "Sign out"}
                </button>
              </div>
            )}
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden rounded-lg p-2 hover:bg-[var(--muted)] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
