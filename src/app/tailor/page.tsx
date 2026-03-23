"use client";

import { AnimatePresence, motion } from "framer-motion";
import StepIndicator from "@/components/tailor/StepIndicator";
import ResumeInput from "@/components/tailor/ResumeInput";
import JobDescriptionInput from "@/components/tailor/JobDescriptionInput";
import TailoringEngine from "@/components/tailor/TailoringEngine";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import { stepSlide } from "@/lib/animations";

export default function TailorPage() {
  const {
    currentStep,
    direction,
    resumeText,
    setResumeText,
    jobDescription,
    setJobDescription,
    goNext,
    goBack,
    canGoNext,
  } = useStepNavigation();

  return (
    <div className="flex flex-1 flex-col px-6 py-12">
      <StepIndicator currentStep={currentStep} />

      <AnimatePresence mode="wait" custom={direction}>
        {currentStep === 0 && (
          <motion.div
            key="step-0"
            variants={stepSlide(direction)}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ResumeInput
              value={resumeText}
              onChange={setResumeText}
              onNext={goNext}
              canGoNext={canGoNext()}
            />
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            key="step-1"
            variants={stepSlide(direction)}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <JobDescriptionInput
              value={jobDescription}
              onChange={setJobDescription}
              onNext={goNext}
              onBack={goBack}
              canGoNext={canGoNext()}
            />
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step-2"
            variants={stepSlide(direction)}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <TailoringEngine />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
