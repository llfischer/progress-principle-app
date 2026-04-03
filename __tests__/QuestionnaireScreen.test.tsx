import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuestionnaireScreen from '../app/questionnaire';
import { QUESTIONS } from '../constants/questions';

const mockReplace = jest.fn();
jest.mock('expo-router', () => ({
  useRouter: () => ({ replace: mockReplace }),
}));

beforeEach(() => {
  mockReplace.mockClear();
});

describe('QuestionnaireScreen', () => {
  it('starts at the first question', () => {
    const { getByText } = render(<QuestionnaireScreen />);
    expect(getByText(QUESTIONS[0].text)).toBeTruthy();
    expect(getByText(`Question 1 of ${QUESTIONS.length}`)).toBeTruthy();
  });

  it('advances to the next question after an answer', () => {
    const { getByText, getByLabelText } = render(<QuestionnaireScreen />);
    fireEvent.press(getByLabelText('3'));
    expect(getByText(QUESTIONS[1].text)).toBeTruthy();
    expect(getByText(`Question 2 of ${QUESTIONS.length}`)).toBeTruthy();
  });

  it('navigates to result screen with correct score after last question', () => {
    const { getByLabelText } = render(<QuestionnaireScreen />);
    // Answer all questions with value 4 each
    QUESTIONS.forEach(() => {
      fireEvent.press(getByLabelText('4'));
    });
    const expectedScore = 4 * QUESTIONS.length;
    expect(mockReplace).toHaveBeenCalledWith(`/result?score=${expectedScore}`);
  });

  it('does not navigate before the last question is answered', () => {
    const { getByLabelText } = render(<QuestionnaireScreen />);
    // Answer all but the last question
    QUESTIONS.slice(0, -1).forEach(() => {
      fireEvent.press(getByLabelText('2'));
    });
    expect(mockReplace).not.toHaveBeenCalled();
  });
});
