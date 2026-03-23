"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function TextArea({
  className,
  label,
  ...props
}: TextAreaProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-400">
          {label}
        </label>
      )}
      <div className="relative rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition-all duration-300">
        <textarea
          className={cn(
            "w-full resize-none rounded-xl bg-transparent px-4 py-3 text-gray-100 placeholder-gray-500 outline-none",
            "transition-all duration-300",
            focused && "border-neon-cyan/50",
            className
          )}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
          initial={{ width: "0%" }}
          animate={{ width: focused ? "90%" : "0%" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      {focused && (
        <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.1)]" />
      )}
    </div>
  );
}
