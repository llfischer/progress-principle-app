import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ResultScreen from '../app/result';
import { LONG_PRIVACY_TEXT } from '../constants/questions';

const mockReplace = jest.fn();

jest.mock('expo-router', () => ({
  useRouter: () => ({ replace: mockReplace }),
  useLocalSearchParams: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { useLocalSearchParams } = require('expo-router');

beforeEach(() => {
  mockReplace.mockClear();
});

describe('ResultScreen — short version', () => {
  beforeEach(() => {
    useLocalSearchParams.mockReturnValue({ score: '24', version: 'short' });
  });

  it('displays the score', () => {
    const { getByText } = render(<ResultScreen />);
    expect(getByText('24')).toBeTruthy();
  });

  it('renders the Okay button', () => {
    const { getByRole } = render(<ResultScreen />);
    expect(getByRole('button', { name: 'Okay' })).toBeTruthy();
  });

  it('Okay button is enabled without any checkbox', () => {
    const { getByRole } = render(<ResultScreen />);
    const btn = getByRole('button', { name: 'Okay' });
    expect(btn.props.accessibilityState?.disabled).toBeFalsy();
  });

  it('navigates home when Okay is pressed', () => {
    const { getByRole } = render(<ResultScreen />);
    fireEvent.press(getByRole('button', { name: 'Okay' }));
    expect(mockReplace).toHaveBeenCalledWith('/');
  });

  it('does not show the privacy section', () => {
    const { queryByText } = render(<ResultScreen />);
    expect(queryByText(LONG_PRIVACY_TEXT)).toBeNull();
  });
});

describe('ResultScreen — long version', () => {
  beforeEach(() => {
    useLocalSearchParams.mockReturnValue({ score: '96', version: 'long' });
  });

  it('displays the score', () => {
    const { getByText } = render(<ResultScreen />);
    expect(getByText('96')).toBeTruthy();
  });

  it('shows the privacy text', () => {
    const { getByText } = render(<ResultScreen />);
    expect(getByText(LONG_PRIVACY_TEXT)).toBeTruthy();
  });

  it('shows the privacy checkbox', () => {
    const { getByRole } = render(<ResultScreen />);
    expect(getByRole('checkbox', { name: 'Accept privacy policy' })).toBeTruthy();
  });

  it('shows the email input field', () => {
    const { getByLabelText } = render(<ResultScreen />);
    expect(getByLabelText('Email address')).toBeTruthy();
  });

  it('Okay button is disabled before checkbox is ticked', () => {
    const { getByRole } = render(<ResultScreen />);
    const btn = getByRole('button', { name: 'Okay' });
    expect(btn.props.accessibilityState?.disabled).toBe(true);
  });

  it('Okay button becomes enabled after ticking the checkbox', () => {
    const { getByRole } = render(<ResultScreen />);
    fireEvent.press(getByRole('checkbox', { name: 'Accept privacy policy' }));
    const btn = getByRole('button', { name: 'Okay' });
    expect(btn.props.accessibilityState?.disabled).toBe(false);
  });

  it('navigates home when Okay is pressed after accepting privacy', () => {
    const { getByRole } = render(<ResultScreen />);
    fireEvent.press(getByRole('checkbox', { name: 'Accept privacy policy' }));
    fireEvent.press(getByRole('button', { name: 'Okay' }));
    expect(mockReplace).toHaveBeenCalledWith('/');
  });

  it('does not navigate home if Okay is pressed without accepting privacy', () => {
    const { getByRole } = render(<ResultScreen />);
    fireEvent.press(getByRole('button', { name: 'Okay' }));
    expect(mockReplace).not.toHaveBeenCalled();
  });
});
