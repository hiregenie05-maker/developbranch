"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

interface TailoredResumeViewProps {
  original: string;
  tailored: string;
}

export default function TailoredResumeView({
  original,
  tailored,
}: TailoredResumeViewProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="grid w-full gap-6 lg:grid-cols-2"
    >
      {/* Original */}
      <motion.div variants={slideInLeft} initial="hidden" animate="visible">
        <GlassCard className="h-full border-t-2 border-t-gray-600/30 p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gray-500" />
            <h3 className="text-sm font-medium text-gray-400">Original</h3>
          </div>
          <div className="max-h-[400px] overflow-y-auto pr-2">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-gray-500">
              {original}
            </pre>
          </div>
        </GlassCard>
      </motion.div>

      {/* Tailored */}
      <motion.div variants={slideInRight} initial="hidden" animate="visible">
        <GlassCard className="h-full border-t-2 border-t-neon-cyan/50 p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-neon-cyan" />
            <h3 className="text-sm font-medium text-neon-cyan">Tailored</h3>
          </div>
          <div className="max-h-[400px] overflow-y-auto pr-2">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-gray-200">
              {tailored}
            </pre>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
