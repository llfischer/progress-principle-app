import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuestionnaireScreen from '../app/questionnaire';
import { SHORT_QUESTIONS, LONG_QUESTIONS } from '../constants/questions';

const mockReplace = jest.fn();

jest.mock('expo-router', () => ({
  useRouter: () => ({ replace: mockReplace }),
  useLocalSearchParams: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { useLocalSearchParams } = require('expo-router');

beforeEach(() => {
  mockReplace.mockClear();
  useLocalSearchParams.mockReturnValue({ version: 'short' });
});

describe('QuestionnaireScreen — short version', () => {
  it('starts at the first short question', () => {
    const { getByText } = render(<QuestionnaireScreen />);
    expect(getByText(SHORT_QUESTIONS[0].text)).toBeTruthy();
    expect(getByText(`Question 1 of ${SHORT_QUESTIONS.length}`)).toBeTruthy();
  });

  it('advances to the next question after an answer', () => {
    const { getByText, getByLabelText } = render(<QuestionnaireScreen />);
    fireEvent.press(getByLabelText('3'));
    expect(getByText(SHORT_QUESTIONS[1].text)).toBeTruthy();
  });

  it('navigates to result with correct score and version=short after last question', () => {
    const { getByLabelText } = render(<QuestionnaireScreen />);
    SHORT_QUESTIONS.forEach(() => fireEvent.press(getByLabelText('4')));
    const expectedScore = 4 * SHORT_QUESTIONS.length;
    expect(mockReplace).toHaveBeenCalledWith(`/result?score=${expectedScore}&version=short`);
  });

  it('does not navigate before the last question is answered', () => {
    const { getByLabelText } = render(<QuestionnaireScreen />);
    SHORT_QUESTIONS.slice(0, -1).forEach(() => fireEvent.press(getByLabelText('2')));
    expect(mockReplace).not.toHaveBeenCalled();
  });
});

describe('QuestionnaireScreen — long version', () => {
  beforeEach(() => {
    useLocalSearchParams.mockReturnValue({ version: 'long' });
  });

  it('starts at the first long question', () => {
    const { getByText } = render(<QuestionnaireScreen />);
    expect(getByText(LONG_QUESTIONS[0].text)).toBeTruthy();
    expect(getByText(`Question 1 of ${LONG_QUESTIONS.length}`)).toBeTruthy();
  });

  it('navigates to result with version=long after last question', () => {
    const { getByLabelText } = render(<QuestionnaireScreen />);
    LONG_QUESTIONS.forEach(() => fireEvent.press(getByLabelText('3')));
    const expectedScore = 3 * LONG_QUESTIONS.length;
    expect(mockReplace).toHaveBeenCalledWith(`/result?score=${expectedScore}&version=long`);
  });
});
