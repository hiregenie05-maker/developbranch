"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { staggerContainer, scaleIn } from "@/lib/animations";

interface KeywordHighlightsProps {
  matched: string[];
  missing: string[];
}

export default function KeywordHighlights({
  matched,
  missing,
}: KeywordHighlightsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <h3 className="mb-3 text-sm font-medium text-gray-400">
        Keyword Analysis
      </h3>
      <div className="flex flex-wrap gap-2">
        {matched.map((keyword) => (
          <motion.span
            key={keyword}
            variants={scaleIn}
            className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/[0.05] px-3 py-1 text-xs font-medium text-green-400"
          >
            <Check className="h-3 w-3" />
            {keyword}
          </motion.span>
        ))}
        {missing.map((keyword) => (
          <motion.span
            key={keyword}
            variants={scaleIn}
            className="inline-flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/[0.05] px-3 py-1 text-xs font-medium text-red-400/70"
          >
            <X className="h-3 w-3" />
            {keyword}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
