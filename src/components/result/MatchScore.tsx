"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MatchScoreProps {
  score: number;
}

export default function MatchScore({ score }: MatchScoreProps) {
  const [mounted, setMounted] = useState(false);
  const springValue = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(springValue, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    setMounted(true);
    springValue.set(score);
    const unsubscribe = displayValue.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [score, springValue, displayValue]);

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (circumference * (mounted ? score : 0)) / 100;

  const getColor = (s: number) => {
    if (s >= 80) return { stroke: "#22c55e", glow: "rgba(34,197,94,0.3)" };
    if (s >= 60) return { stroke: "#eab308", glow: "rgba(234,179,8,0.3)" };
    return { stroke: "#ef4444", glow: "rgba(239,68,68,0.3)" };
  };

  const color = getColor(score);

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-36 w-36">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          {/* Background ring */}
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="8"
          />
          {/* Progress ring */}
          <motion.circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={color.stroke}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              filter: `drop-shadow(0 0 8px ${color.glow})`,
            }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">{display}%</span>
          <span className="text-xs text-gray-400">Match</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-400">
        Resume-to-Job Match Score
      </p>
    </div>
  );
}
