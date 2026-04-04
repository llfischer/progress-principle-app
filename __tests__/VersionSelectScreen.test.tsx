import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuestionnaireSelectScreen from '../app/questionnaire-select';
import { SHORT_QUESTIONS, LONG_QUESTIONS } from '../constants/questions';

const mockPush = jest.fn();
jest.mock('expo-router', () => ({
  useRouter: () => ({ push: mockPush }),
}));

beforeEach(() => {
  mockPush.mockClear();
});

describe('QuestionnaireSelectScreen', () => {
  it('renders the short version button', () => {
    const { getByRole } = render(<QuestionnaireSelectScreen />);
    expect(getByRole('button', { name: 'Short version' })).toBeTruthy();
  });

  it('renders the long version button', () => {
    const { getByRole } = render(<QuestionnaireSelectScreen />);
    expect(getByRole('button', { name: 'Long version' })).toBeTruthy();
  });

  it('displays correct question counts', () => {
    const { getByText } = render(<QuestionnaireSelectScreen />);
    expect(getByText(`${SHORT_QUESTIONS.length} questions`)).toBeTruthy();
    expect(getByText(`${LONG_QUESTIONS.length} questions`)).toBeTruthy();
  });

  it('navigates to short questionnaire on short version press', () => {
    const { getByRole } = render(<QuestionnaireSelectScreen />);
    fireEvent.press(getByRole('button', { name: 'Short version' }));
    expect(mockPush).toHaveBeenCalledWith('/questionnaire?version=short');
  });

  it('navigates to long questionnaire on long version press', () => {
    const { getByRole } = render(<QuestionnaireSelectScreen />);
    fireEvent.press(getByRole('button', { name: 'Long version' }));
    expect(mockPush).toHaveBeenCalledWith('/questionnaire?version=long');
  });
});
