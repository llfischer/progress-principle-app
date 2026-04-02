import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SectionCard from '../components/SectionCard';

// Mock expo-router so tests don't need a full navigation context
const mockPush = jest.fn();
jest.mock('expo-router', () => ({
  useRouter: () => ({ push: mockPush }),
}));

describe('SectionCard', () => {
  const defaultProps = {
    title: 'Catalysts',
    subtitle: 'Events that directly support the work',
    route: '/catalysts' as const,
  };

  beforeEach(() => {
    mockPush.mockClear();
  });

  it('renders the title', () => {
    const { getByText } = render(<SectionCard {...defaultProps} />);
    expect(getByText('Catalysts')).toBeTruthy();
  });

  it('renders the subtitle', () => {
    const { getByText } = render(<SectionCard {...defaultProps} />);
    expect(getByText('Events that directly support the work')).toBeTruthy();
  });

  it('navigates to the correct route when pressed', () => {
    const { getByRole } = render(<SectionCard {...defaultProps} />);
    fireEvent.press(getByRole('button'));
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('/catalysts');
  });

  it('is accessible — card has an accessible label combining title and subtitle', () => {
    const { getByRole } = render(<SectionCard {...defaultProps} />);
    const card = getByRole('button');
    expect(card.props.accessibilityLabel).toContain('Catalysts');
  });
});
