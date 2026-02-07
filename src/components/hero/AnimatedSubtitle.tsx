"use client";

import { motion } from "motion/react";

export function AnimatedSubtitle({ text }: { text: string }) {
  const letters = text.split("");

  return (
    <span className="inline-flex flex-wrap justify-center font-body italic" aria-label={text}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.8 + i * 0.03,
            ease: "easeOut",
          }}
          className={letter === " " ? "w-2" : ""}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
