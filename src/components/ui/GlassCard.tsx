"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
  glow?: "cyan" | "purple" | "pink";
}

export default function GlassCard({
  children,
  className,
  hover = false,
  glow,
  ...props
}: GlassCardProps) {
  const glowColors = {
    cyan: "0 0 30px rgba(6,182,212,0.15)",
    purple: "0 0 30px rgba(168,85,247,0.15)",
    pink: "0 0 30px rgba(236,72,153,0.15)",
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl",
        className
      )}
      whileHover={
        hover
          ? {
              scale: 1.02,
              boxShadow: glow
                ? glowColors[glow]
                : "0 0 30px rgba(6,182,212,0.15)",
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
