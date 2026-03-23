"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Download, RotateCcw } from "lucide-react";
import Link from "next/link";
import GlowButton from "@/components/ui/GlowButton";
import { fadeInUp } from "@/lib/animations";

interface ExportActionsProps {
  tailoredText: string;
}

export default function ExportActions({ tailoredText }: ExportActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(tailoredText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([tailoredText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tailored-resume.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center justify-center gap-3"
    >
      <GlowButton onClick={handleCopy}>
        <span className="flex items-center gap-2">
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy to Clipboard
            </>
          )}
        </span>
      </GlowButton>

      <GlowButton variant="ghost" onClick={handleDownload}>
        <span className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download as TXT
        </span>
      </GlowButton>

      <Link href="/tailor">
        <GlowButton variant="ghost">
          <span className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Start Over
          </span>
        </GlowButton>
      </Link>
    </motion.div>
  );
}
