"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Upload } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import TextArea from "@/components/ui/TextArea";
import { cn } from "@/lib/cn";

interface ResumeInputProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  canGoNext: boolean;
}

export default function ResumeInput({
  value,
  onChange,
  onNext,
  canGoNext,
}: ResumeInputProps) {
  const [tab, setTab] = useState<"paste" | "upload">("paste");

  return (
    <div className="mx-auto w-full max-w-2xl">
      <h2 className="mb-2 text-center text-2xl font-bold text-white">
        Your Resume
      </h2>
      <p className="mb-6 text-center text-gray-400">
        Paste your current resume text or upload a file
      </p>

      {/* Tab switcher */}
      <div className="relative mb-6 flex rounded-xl border border-white/[0.08] bg-white/[0.03] p-1">
        <motion.div
          className="absolute inset-y-1 rounded-lg bg-white/[0.08]"
          layoutId="tab-indicator"
          style={{ width: "50%" }}
          animate={{ x: tab === "paste" ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <button
          onClick={() => setTab("paste")}
          className={cn(
            "relative z-10 flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors",
            tab === "paste" ? "text-white" : "text-gray-500"
          )}
        >
          <FileText className="h-4 w-4" />
          Paste Text
        </button>
        <button
          onClick={() => setTab("upload")}
          className={cn(
            "relative z-10 flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors",
            tab === "upload" ? "text-white" : "text-gray-500"
          )}
        >
          <Upload className="h-4 w-4" />
          Upload File
        </button>
      </div>

      <GlassCard className="p-6">
        {tab === "paste" ? (
          <TextArea
            placeholder="Paste your resume content here..."
            rows={12}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/[0.1] px-6 py-16 transition-colors hover:border-neon-cyan/30">
            <Upload className="mb-4 h-10 w-10 text-gray-500" />
            <p className="mb-1 text-sm font-medium text-gray-300">
              Drag & drop your resume here
            </p>
            <p className="text-xs text-gray-500">PDF, DOCX, or TXT</p>
            <GlowButton variant="ghost" size="sm" className="mt-4">
              Browse Files
            </GlowButton>
          </div>
        )}
      </GlassCard>

      <div className="mt-6 flex justify-end">
        <GlowButton onClick={onNext} disabled={!canGoNext}>
          Next Step
        </GlowButton>
      </div>
    </div>
  );
}
