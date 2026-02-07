"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Language } from "@/types";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (en: string, bg?: string | null) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null;
    if (stored) setLanguage(stored);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "bg" : "en";
      localStorage.setItem("language", next);
      return next;
    });
  };

  const t = (en: string, bg?: string | null) => {
    if (language === "bg" && bg) return bg;
    return en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
