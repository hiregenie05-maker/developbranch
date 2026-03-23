"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import TextArea from "@/components/ui/TextArea";
import { scaleIn, staggerContainer } from "@/lib/animations";

interface JobDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  canGoNext: boolean;
}

function extractKeywords(text: string): string[] {
  if (!text.trim()) return [];
  const techTerms = text.match(
    /\b(?:React|Next\.js|TypeScript|JavaScript|Python|Java|Node\.js|AWS|Docker|Kubernetes|SQL|NoSQL|GraphQL|REST|API|CI\/CD|Git|Agile|Scrum|Machine Learning|AI|CSS|HTML|Tailwind|Redux|PostgreSQL|MongoDB|Firebase|Azure|GCP)\b/gi
  );
  const unique = [...new Set(techTerms?.map((t) => t.trim()) || [])];
  return unique.slice(0, 12);
}

export default function JobDescriptionInput({
  value,
  onChange,
  onNext,
  onBack,
  canGoNext,
}: JobDescriptionInputProps) {
  const keywords = useMemo(() => extractKeywords(value), [value]);

  return (
    <div className="mx-auto w-full max-w-2xl">
      <h2 className="mb-2 text-center text-2xl font-bold text-white">
        Job Description
      </h2>
      <p className="mb-6 text-center text-gray-400">
        Paste the job posting you want to tailor your resume for
      </p>

      <GlassCard className="p-6">
        <TextArea
          placeholder="Paste the job description here..."
          rows={12}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </GlassCard>

      {/* Keyword preview */}
      {keywords.length > 0 && (
        <motion.div
          className="mt-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <p className="mb-2 text-xs font-medium text-gray-500">
            Detected keywords:
          </p>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <motion.span
                key={keyword}
                variants={scaleIn}
                className="rounded-full border border-neon-cyan/20 bg-neon-cyan/[0.05] px-3 py-1 text-xs text-neon-cyan"
              >
                {keyword}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}

      <div className="mt-6 flex justify-between">
        <GlowButton variant="ghost" onClick={onBack}>
          Back
        </GlowButton>
        <GlowButton onClick={onNext} disabled={!canGoNext}>
          Tailor My Resume
        </GlowButton>
      </div>
    </div>
  );
}
