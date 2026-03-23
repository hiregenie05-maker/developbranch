"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import GlowButton from "@/components/ui/GlowButton";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-gray-950/60 backdrop-blur-xl"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple">
            <span className="text-sm font-bold text-white">T</span>
          </div>
          <AnimatedGradientText className="text-xl font-bold">
            TailorAI
          </AnimatedGradientText>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link href="/tailor">
            <GlowButton size="sm">Start Tailoring</GlowButton>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
