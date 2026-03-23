"use client";

import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function TypingEffect({
  text,
  className,
  speed = 0.03,
}: TypingEffectProps) {
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: speed,
          },
        },
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={`${i}-${char}`}
          variants={{
            hidden: { opacity: 0, y: 4 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
