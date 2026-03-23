"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import GlowButton from "@/components/ui/GlowButton";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-8 inline-block">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/[0.05] px-4 py-2 text-sm text-neon-cyan">
            <Sparkles className="h-4 w-4" />
            AI-Powered Resume Tailoring
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={fadeInUp}>
          <AnimatedGradientText
            as="h1"
            className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
          >
            Land Your Dream Job
          </AnimatedGradientText>
          <h2 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            With a Perfectly Tailored Resume
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl"
        >
          Paste your resume and a job description — our AI analyzes, optimizes,
          and tailors your resume to match exactly what recruiters are looking
          for.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/tailor">
            <GlowButton size="lg">
              <span className="flex items-center gap-2">
                Start Tailoring
                <ArrowRight className="h-5 w-5" />
              </span>
            </GlowButton>
          </Link>
          <a href="#how-it-works">
            <GlowButton variant="ghost" size="lg">
              See How It Works
            </GlowButton>
          </a>
        </motion.div>

        {/* Decorative mock UI preview */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-1 shadow-2xl backdrop-blur-xl">
            <div className="rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950/80 p-6">
              <div className="flex items-center gap-2 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded bg-white/[0.06]" />
                  <div className="h-3 w-full rounded bg-white/[0.04]" />
                  <div className="h-3 w-5/6 rounded bg-white/[0.04]" />
                  <div className="h-3 w-2/3 rounded bg-white/[0.06]" />
                  <div className="h-3 w-full rounded bg-white/[0.04]" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded bg-neon-cyan/10" />
                  <div className="h-3 w-full rounded bg-neon-cyan/[0.06]" />
                  <div className="h-3 w-5/6 rounded bg-neon-purple/[0.06]" />
                  <div className="h-3 w-2/3 rounded bg-neon-cyan/10" />
                  <div className="h-3 w-full rounded bg-neon-purple/[0.06]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
