import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuestionCard from '../components/QuestionCard';
import { QUESTIONNAIRE } from '../constants/questions';

const defaultProps = {
  questionText: 'I feel my work has a clear purpose.',
  questionIndex: 1,
  totalQuestions: 5,
  onAnswer: jest.fn(),
};

beforeEach(() => {
  defaultProps.onAnswer.mockClear();
});

describe('QuestionCard', () => {
  it('renders the question text', () => {
    const { getByText } = render(<QuestionCard {...defaultProps} />);
    expect(getByText('I feel my work has a clear purpose.')).toBeTruthy();
  });

  it('renders the correct progress indicator', () => {
    const { getByText } = render(<QuestionCard {...defaultProps} />);
    expect(getByText('Question 2 of 5')).toBeTruthy();
  });

  it('renders all 6 rating buttons', () => {
    const { getAllByRole } = render(<QuestionCard {...defaultProps} />);
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(6);
  });

  it('renders scale endpoint labels', () => {
    const { getByText } = render(<QuestionCard {...defaultProps} />);
    expect(getByText(QUESTIONNAIRE.scaleMinLabel)).toBeTruthy();
    expect(getByText(QUESTIONNAIRE.scaleMaxLabel)).toBeTruthy();
  });

  it('calls onAnswer with the correct value when a rating button is pressed', () => {
    const { getByLabelText } = render(<QuestionCard {...defaultProps} />);
    fireEvent.press(getByLabelText('4'));
    expect(defaultProps.onAnswer).toHaveBeenCalledWith(4);
  });

  it('calls onAnswer once per press', () => {
    const { getByLabelText } = render(<QuestionCard {...defaultProps} />);
    fireEvent.press(getByLabelText('1'));
    expect(defaultProps.onAnswer).toHaveBeenCalledTimes(1);
  });
});
