"use client";

import { motion } from "motion/react";
import { ParallaxImage } from "./ParallaxImage";
import { AnimatedSubtitle } from "./AnimatedSubtitle";
import { useLanguage } from "@/providers/LanguageProvider";

export function HeroSection() {
  const { language } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParallaxImage />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-6xl md:text-7xl block mb-6">&#x1F451;</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance"
        >
          {language === "bg" ? "Моята Българска Принцеса" : "My Bulgarian Princess"}
        </motion.h1>

        <div className="text-lg md:text-xl text-white/70 font-light tracking-wide">
          <AnimatedSubtitle
            text={
              language === "bg"
                ? "Любовна история, разказана чрез думи и спомени"
                : "A love story told through words and memories"
            }
          />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs tracking-widest uppercase">
              {language === "bg" ? "Превъртете" : "Scroll"}
            </span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
