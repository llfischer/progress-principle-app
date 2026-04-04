export interface Question {
  id: string;
  text: string;
  variable: string; // analysis code e.g. 'C1', 'N3' — placeholder 'x' for now
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

export const LONG_PRIVACY_TEXT =
  'By providing your email address you agree to be contacted with information about your results and relevant resources. Your data will be handled in accordance with applicable data protection regulations and will not be shared with third parties.';

export const SHORT_QUESTIONS: Question[] = [
  { id: 'sq1',  text: 'Placeholder short question 1',  variable: 'x' },
  { id: 'sq2',  text: 'Placeholder short question 2',  variable: 'x' },
  { id: 'sq3',  text: 'Placeholder short question 3',  variable: 'x' },
  { id: 'sq4',  text: 'Placeholder short question 4',  variable: 'x' },
  { id: 'sq5',  text: 'Placeholder short question 5',  variable: 'x' },
  { id: 'sq6',  text: 'Placeholder short question 6',  variable: 'x' },
  { id: 'sq7',  text: 'Placeholder short question 7',  variable: 'x' },
  { id: 'sq8',  text: 'Placeholder short question 8',  variable: 'x' },
  { id: 'sq9',  text: 'Placeholder short question 9',  variable: 'x' },
  { id: 'sq10', text: 'Placeholder short question 10', variable: 'x' },
];

export const LONG_QUESTIONS: Question[] = [
  { id: 'lq1',  text: 'Placeholder long question 1',  variable: 'x' },
  { id: 'lq2',  text: 'Placeholder long question 2',  variable: 'x' },
  { id: 'lq3',  text: 'Placeholder long question 3',  variable: 'x' },
  { id: 'lq4',  text: 'Placeholder long question 4',  variable: 'x' },
  { id: 'lq5',  text: 'Placeholder long question 5',  variable: 'x' },
  { id: 'lq6',  text: 'Placeholder long question 6',  variable: 'x' },
  { id: 'lq7',  text: 'Placeholder long question 7',  variable: 'x' },
  { id: 'lq8',  text: 'Placeholder long question 8',  variable: 'x' },
  { id: 'lq9',  text: 'Placeholder long question 9',  variable: 'x' },
  { id: 'lq10', text: 'Placeholder long question 10', variable: 'x' },
  { id: 'lq11', text: 'Placeholder long question 11', variable: 'x' },
  { id: 'lq12', text: 'Placeholder long question 12', variable: 'x' },
  { id: 'lq13', text: 'Placeholder long question 13', variable: 'x' },
  { id: 'lq14', text: 'Placeholder long question 14', variable: 'x' },
  { id: 'lq15', text: 'Placeholder long question 15', variable: 'x' },
  { id: 'lq16', text: 'Placeholder long question 16', variable: 'x' },
  { id: 'lq17', text: 'Placeholder long question 17', variable: 'x' },
  { id: 'lq18', text: 'Placeholder long question 18', variable: 'x' },
  { id: 'lq19', text: 'Placeholder long question 19', variable: 'x' },
  { id: 'lq20', text: 'Placeholder long question 20', variable: 'x' },
  { id: 'lq21', text: 'Placeholder long question 21', variable: 'x' },
  { id: 'lq22', text: 'Placeholder long question 22', variable: 'x' },
  { id: 'lq23', text: 'Placeholder long question 23', variable: 'x' },
  { id: 'lq24', text: 'Placeholder long question 24', variable: 'x' },
  { id: 'lq25', text: 'Placeholder long question 25', variable: 'x' },
  { id: 'lq26', text: 'Placeholder long question 26', variable: 'x' },
  { id: 'lq27', text: 'Placeholder long question 27', variable: 'x' },
  { id: 'lq28', text: 'Placeholder long question 28', variable: 'x' },
  { id: 'lq29', text: 'Placeholder long question 29', variable: 'x' },
  { id: 'lq30', text: 'Placeholder long question 30', variable: 'x' },
  { id: 'lq31', text: 'Placeholder long question 31', variable: 'x' },
  { id: 'lq32', text: 'Placeholder long question 32', variable: 'x' },
  { id: 'lq33', text: 'Placeholder long question 33', variable: 'x' },
  { id: 'lq34', text: 'Placeholder long question 34', variable: 'x' },
  { id: 'lq35', text: 'Placeholder long question 35', variable: 'x' },
  { id: 'lq36', text: 'Placeholder long question 36', variable: 'x' },
  { id: 'lq37', text: 'Placeholder long question 37', variable: 'x' },
  { id: 'lq38', text: 'Placeholder long question 38', variable: 'x' },
  { id: 'lq39', text: 'Placeholder long question 39', variable: 'x' },
  { id: 'lq40', text: 'Placeholder long question 40', variable: 'x' },
];
