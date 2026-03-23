"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

const steps = ["Resume", "Job Description", "Results"];

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="mx-auto mb-10 flex max-w-md items-center justify-between">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          {/* Step dot + label */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-500",
                  index < currentStep &&
                    "border-green-400 bg-green-400/10 text-green-400",
                  index === currentStep &&
                    "border-neon-cyan bg-neon-cyan/10 text-neon-cyan",
                  index > currentStep &&
                    "border-white/[0.15] bg-white/[0.03] text-gray-500"
                )}
              >
                {index < currentStep ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              {/* Glow ring on active */}
              {index === currentStep && (
                <motion.div
                  className="absolute -inset-1 rounded-full border border-neon-cyan/30"
                  animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </div>
            <span
              className={cn(
                "text-xs font-medium transition-colors duration-300",
                index === currentStep ? "text-white" : "text-gray-500"
              )}
            >
              {step}
            </span>
          </div>

          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="mx-4 h-[2px] w-12 overflow-hidden rounded-full bg-white/[0.08] sm:w-20">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                initial={{ width: "0%" }}
                animate={{
                  width: index < currentStep ? "100%" : "0%",
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
