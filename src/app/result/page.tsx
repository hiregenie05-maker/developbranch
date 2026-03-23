"use client";

import { motion } from "framer-motion";
import MatchScore from "@/components/result/MatchScore";
import KeywordHighlights from "@/components/result/KeywordHighlights";
import TailoredResumeView from "@/components/result/TailoredResumeView";
import ExportActions from "@/components/result/ExportActions";
import { staggerContainer, fadeInUp } from "@/lib/animations";

// Mock data for UI-first phase — will be replaced with real AI output
const mockResult = {
  matchScore: 87,
  matchedKeywords: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "REST API",
    "Git",
    "Agile",
    "CI/CD",
  ],
  missingKeywords: ["GraphQL", "Docker", "AWS"],
  original: `John Doe
Software Developer

Experience:
- Built web applications using React and JavaScript
- Worked with REST APIs and databases
- Collaborated with team members using Agile methodology
- Implemented responsive designs with CSS frameworks
- Used version control with Git for code management

Skills:
JavaScript, React, HTML, CSS, Node.js, Git, SQL

Education:
B.S. Computer Science — State University, 2021`,

  tailored: `John Doe
Software Developer

Experience:
- Developed and maintained production React applications with TypeScript, delivering pixel-perfect UIs using Next.js and Tailwind CSS
- Architected and consumed REST API endpoints, implementing efficient data fetching patterns and error handling
- Drove Agile development practices including sprint planning, daily standups, and retrospectives across cross-functional teams
- Built responsive, accessible interfaces using Tailwind CSS with mobile-first design principles
- Managed codebase integrity through Git workflows, code reviews, and CI/CD pipeline contributions

Skills:
TypeScript, React, Next.js, Tailwind CSS, REST API, Node.js, Git, CI/CD, Agile, SQL

Education:
B.S. Computer Science — State University, 2021`,
};

export default function ResultPage() {
  return (
    <motion.div
      className="flex flex-1 flex-col items-center px-6 py-12"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Match Score */}
      <motion.div variants={fadeInUp} className="mb-10">
        <MatchScore score={mockResult.matchScore} />
      </motion.div>

      {/* Keywords */}
      <motion.div variants={fadeInUp} className="mb-8 w-full max-w-4xl">
        <KeywordHighlights
          matched={mockResult.matchedKeywords}
          missing={mockResult.missingKeywords}
        />
      </motion.div>

      {/* Side-by-side comparison */}
      <motion.div variants={fadeInUp} className="mb-10 w-full max-w-4xl">
        <TailoredResumeView
          original={mockResult.original}
          tailored={mockResult.tailored}
        />
      </motion.div>

      {/* Export Actions */}
      <ExportActions tailoredText={mockResult.tailored} />
    </motion.div>
  );
}
