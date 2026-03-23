"use client";

import { cn } from "@/lib/cn";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

export default function AnimatedGradientText({
  children,
  className,
  as: Tag = "span",
}: AnimatedGradientTextProps) {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-gradient-shift",
        className
      )}
    >
      {children}
    </Tag>
  );
}
