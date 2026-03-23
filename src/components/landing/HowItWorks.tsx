"use client";

import { motion } from "framer-motion";
import { Upload, FileText, Rocket } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const steps = [
  {
    icon: Upload,
    label: "Upload Resume",
    description: "Paste or upload your existing resume",
  },
  {
    icon: FileText,
    label: "Add Job Description",
    description: "Paste the job posting you want to apply for",
  },
  {
    icon: Rocket,
    label: "Get Tailored Resume",
    description: "Receive an optimized resume in seconds",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-gray-400">
            Three simple steps to a perfectly tailored resume.
          </p>
        </motion.div>

        <motion.div
          className="relative flex flex-col items-center gap-12 sm:flex-row sm:gap-0 sm:justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connector line (desktop) */}
          <motion.div
            className="absolute left-[16%] right-[16%] top-10 hidden h-[2px] sm:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
          >
            <div className="h-full w-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-30" />
          </motion.div>

          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              variants={fadeInUp}
              className="relative z-10 flex flex-col items-center text-center sm:w-1/3"
            >
              {/* Step circle */}
              <motion.div
                className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/[0.1] bg-gray-900/80 backdrop-blur-xl"
                whileHover={{
                  boxShadow: "0 0 30px rgba(6,182,212,0.3)",
                  borderColor: "rgba(6,182,212,0.4)",
                }}
              >
                <step.icon className="h-8 w-8 text-neon-cyan" />
              </motion.div>

              {/* Step number */}
              <span className="mb-1 text-xs font-medium text-neon-cyan/60">
                STEP {index + 1}
              </span>

              {/* Label */}
              <h3 className="mb-1 text-lg font-semibold text-white">
                {step.label}
              </h3>
              <p className="max-w-[200px] text-sm text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
