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
            <span className="text-2xl" role="img" aria-label="crown">
              &#x1F451;
            </span>
            <span className="font-serif text-lg font-semibold hidden sm:block group-hover:text-burgundy-600 dark:group-hover:text-burgundy-400 transition-colors">
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
                    ? "bg-burgundy-100 text-burgundy-800 dark:bg-burgundy-950 dark:text-burgundy-300"
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
                      ? "bg-gold-100 text-gold-800 dark:bg-gold-950 dark:text-gold-300"
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
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
