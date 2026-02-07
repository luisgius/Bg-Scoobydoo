"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS, ADMIN_NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { language } = useLanguage();
  const isAdmin = session?.user?.role === "ADMIN";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-72 bg-[var(--card)] border-l shadow-2xl md:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-serif text-lg font-semibold">Menu</span>
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-[var(--muted)] transition-colors"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "bg-burgundy-100 text-burgundy-800 dark:bg-burgundy-950 dark:text-burgundy-300"
                      : "text-[var(--muted-foreground)] hover:bg-[var(--muted)]"
                  )}
                >
                  {language === "bg" ? link.labelBg : link.label}
                </Link>
              ))}

              {isAdmin && (
                <>
                  <div className="my-3 border-t" />
                  <p className="px-4 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                    Admin
                  </p>
                  {ADMIN_NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "bg-gold-100 text-gold-800 dark:bg-gold-950 dark:text-gold-300"
                          : "text-[var(--muted-foreground)] hover:bg-[var(--muted)]"
                      )}
                    >
                      {language === "bg" ? link.labelBg : link.label}
                    </Link>
                  ))}
                </>
              )}
            </div>

            {session?.user && (
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
                <p className="text-sm text-[var(--muted-foreground)] mb-2">
                  {session.user.name}
                </p>
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="text-sm text-burgundy-600 dark:text-burgundy-400 hover:underline"
                >
                  {language === "bg" ? "Изход" : "Sign out"}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
