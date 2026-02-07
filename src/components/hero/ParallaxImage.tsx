"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export function ParallaxImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="absolute inset-0 z-0"
    >
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[var(--background)] z-10" />
      {/* Decorative pattern instead of real image (can be replaced with actual hero image) */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/80 via-burgundy-950/90 to-black" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-burgundy-500/20 rounded-full blur-3xl" />
      </div>
    </motion.div>
  );
}
