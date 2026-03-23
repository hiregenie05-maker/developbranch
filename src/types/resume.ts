export interface ResumeData {
  resumeText: string;
  jobDescription: string;
}

export interface TailoredResult {
  originalText: string;
  tailoredText: string;
  matchScore: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  suggestions: string[];
}
