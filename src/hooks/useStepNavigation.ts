"use client";

import { useState, useCallback } from "react";

export function useStepNavigation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 2));
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const canGoNext = useCallback(() => {
    if (currentStep === 0) return resumeText.trim().length > 0;
    if (currentStep === 1) return jobDescription.trim().length > 0;
    return false;
  }, [currentStep, resumeText, jobDescription]);

  return {
    currentStep,
    direction,
    resumeText,
    setResumeText,
    jobDescription,
    setJobDescription,
    goNext,
    goBack,
    canGoNext,
  };
}
