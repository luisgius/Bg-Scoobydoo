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
      {/* Warm gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1918] via-[#15130F] to-[#0F0E0D]" />
      {/* Decorative warm-toned blurs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "var(--accent)" }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl" style={{ background: "var(--copper)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-30" style={{ background: "var(--rose)" }} />
      </div>
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)] z-10" />
      {/* CSS grain texture overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </motion.div>
  );
}
