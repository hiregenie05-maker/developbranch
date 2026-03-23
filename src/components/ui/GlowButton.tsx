"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function GlowButton({
  children,
  className,
  variant = "primary",
  size = "md",
  disabled,
  ...props
}: GlowButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      className={cn(
        "relative rounded-xl font-medium transition-all duration-300",
        sizes[size],
        variant === "primary" && [
          "bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink",
          "text-white shadow-lg",
          "hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]",
          disabled && "opacity-40 grayscale cursor-not-allowed",
        ],
        variant === "ghost" && [
          "border border-white/[0.15] bg-white/[0.03] text-gray-200",
          "hover:border-neon-cyan/50 hover:text-white",
          "hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
          disabled && "opacity-40 cursor-not-allowed",
        ],
        className
      )}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      disabled={disabled}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {variant === "primary" && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
