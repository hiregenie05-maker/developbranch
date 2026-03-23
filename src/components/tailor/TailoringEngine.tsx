"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { fadeInUp } from "@/lib/animations";

const processingMessages = [
  "Analyzing your experience...",
  "Matching keywords to job requirements...",
  "Optimizing for ATS compatibility...",
  "Restructuring key achievements...",
  "Polishing final draft...",
];

export default function TailoringEngine() {
  const router = useRouter();
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) =>
        prev < processingMessages.length - 1 ? prev + 1 : prev
      );
    }, 1200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 100);

    const timer = setTimeout(() => {
      router.push("/result");
    }, 5500);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <LoadingSpinner size={100} />
      </motion.div>

      <div className="mt-10 h-8 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
            className="text-gray-300"
          >
            {processingMessages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="mt-8 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-1.5 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">{Math.min(progress, 100)}%</p>

      {/* Floating keyword sparks */}
      <div className="relative mt-8 flex flex-wrap justify-center gap-2">
        {["Skills", "Experience", "Keywords", "Impact", "Results"].map(
          (word, i) => (
            <motion.span
              key={word}
              className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-xs text-gray-500"
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {word}
            </motion.span>
          )
        )}
      </div>
    </div>
  );
}
