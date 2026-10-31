export type SubjectType = 'math' | 'vietnamese';

export interface StudentProfile {
  name: string;
  schoolClass: string;
  avatar: string;
  stars: number;
  streak: number;
  badges: string[];
  solvedCount: number;
}

export type QuestionType = 
  | 'multiple_choice' 
  | 'fill_blank' 
  | 'vertical_math' 
  | 'word_problem'
  | 'column_match'
  | 'true_false';

export interface QuestionChoice {
  id: string;
  text: string;
}

export interface MatchPair {
  leftId: string;
  leftText: string;
  rightId: string;
  rightText: string;
}

export interface VerticalMathStep {
  label: string;
  explanation: string;
  highlightRows?: number[];
}

export interface VerticalMathData {
  operation: 'add' | 'subtract' | 'multiply' | 'divide';
  num1: number | string;
  num2: number | string;
  result: number | string;
  remainder?: number | string;
  intermediateLines: {
    text: string;
    note?: string;
    isDivider?: boolean;
    align?: 'right' | 'left';
  }[];
}

export interface ExerciseQuestion {
  id: string;
  topicId: string;
  type: QuestionType;
  title?: string;
  prompt: string;
  readingPassageId?: string;
  // Multiple choice
  options?: QuestionChoice[];
  correctOptionId?: string;
  // Fill blank / exact answer
  correctAnswer?: string | string[];
  unit?: string;
  // True / False set
  tfItems?: {
    id: string;
    statement: string;
    isTrue: boolean;
  }[];
  // Column matching
  matchPairs?: MatchPair[];
  // Vertical math
  verticalMath?: VerticalMathData;
  // Word problem step-by-step
  wordProblemSteps?: {
    stepPrompt: string;
    correctFormula: string;
    correctResult: string;
    unit: string;
  }[];
  finalAnswer?: string;
  sectionTitle?: string;
  questionNumberLabel?: string;
  essayData?: {
    topicTitle: string;
    prompt: string;
    outlineGuide: string[];
    sampleEssay: string;
  };
  // Explanation & pedagogy
  explanation: string;
  hint?: string;
  commonMistake?: string;
  level: number;
}

export interface ReadingPassage {
  id: string;
  title: string;
  author?: string;
  content: string;
  summary?: string;
}

export interface MathTopicInfo {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  color: string;
  badge: string;
}

export interface VietnameseTopicInfo {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  color: string;
  badge: string;
}

export interface TheorySection {
  id: string;
  subject: SubjectType;
  title: string;
  summary: string;
  bullets: {
    heading: string;
    content: string;
    examples?: string[];
    rules?: string[];
  }[];
  memoryTip?: string;
}

export interface MockExam {
  id: string;
  title: string;
  subject: SubjectType | 'combo';
  durationMinutes: number;
  totalScore: number;
  description: string;
  questions: ExerciseQuestion[];
}

export interface ExamSubmission {
  examId: string;
  studentName: string;
  schoolClass: string;
  score: number;
  totalScore: number;
  timeSpentSeconds: number;
  completedAt: string;
  userAnswers: Record<string, any>;
  correctCount: number;
  totalQuestions: number;
}
