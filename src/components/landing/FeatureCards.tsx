"use client";

import { motion } from "framer-motion";
import { ScanSearch, Target, FileCheck } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { staggerContainer, scaleIn } from "@/lib/animations";

const features = [
  {
    icon: ScanSearch,
    title: "Smart Parsing",
    description:
      "Our AI deeply understands your resume structure, skills, and experience to find the best optimization opportunities.",
    color: "cyan" as const,
    borderColor: "border-t-neon-cyan",
  },
  {
    icon: Target,
    title: "Keyword Optimization",
    description:
      "Automatically identifies and integrates critical keywords from the job description into your resume naturally.",
    color: "purple" as const,
    borderColor: "border-t-neon-purple",
  },
  {
    icon: FileCheck,
    title: "ATS-Friendly Output",
    description:
      "Generates resumes optimized for Applicant Tracking Systems so your application never gets filtered out.",
    color: "pink" as const,
    borderColor: "border-t-neon-pink",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why TailorAI?
          </h2>
          <p className="mt-3 text-gray-400">
            Every feature is designed to maximize your chances.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={scaleIn}>
              <GlassCard
                hover
                glow={feature.color}
                className={`border-t-2 ${feature.borderColor} p-6`}
              >
                <feature.icon className="mb-4 h-8 w-8 text-neon-cyan" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
