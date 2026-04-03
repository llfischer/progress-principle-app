import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ResultScreen from '../app/result';

const mockReplace = jest.fn();
jest.mock('expo-router', () => ({
  useRouter: () => ({ replace: mockReplace }),
  useLocalSearchParams: () => ({ score: '24' }),
}));

beforeEach(() => {
  mockReplace.mockClear();
});

describe('ResultScreen', () => {
  it('displays the score from route params', () => {
    const { getByText } = render(<ResultScreen />);
    expect(getByText('24')).toBeTruthy();
  });

  it('renders the Okay button', () => {
    const { getByRole } = render(<ResultScreen />);
    expect(getByRole('button', { name: 'Okay' })).toBeTruthy();
  });

  it('navigates to home when Okay is pressed', () => {
    const { getByRole } = render(<ResultScreen />);
    fireEvent.press(getByRole('button', { name: 'Okay' }));
    expect(mockReplace).toHaveBeenCalledWith('/');
  });
});
