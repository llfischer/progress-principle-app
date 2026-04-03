export interface Question {
  id: string;
  text: string;
}

export interface ScoreRange {
  min: number;
  max: number;
  label: string;
  description: string;
}

export const QUESTIONNAIRE = {
  title: 'Self-Assessment',
  subtitle: 'How much do you agree with each statement?',
  scaleMin: 1,
  scaleMax: 6,
  scaleMinLabel: 'Strongly disagree',
  scaleMaxLabel: 'Strongly agree',
  // Add interpretation ranges here later, e.g.:
  // { min: 3, max: 9, label: 'Low', description: 'Consider...' }
  scoreRanges: [] as ScoreRange[],
};

export const QUESTIONS: Question[] = [
  { id: 'q1', text: 'Placeholder question 1' },
  { id: 'q2', text: 'Placeholder question 2' },
  { id: 'q3', text: 'Placeholder question 3' },
];
