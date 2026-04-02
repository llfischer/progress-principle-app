import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../app/index';
import { HOME_CONTENT } from '../constants/content';

jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

describe('HomeScreen', () => {
  it('renders the app title', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText(HOME_CONTENT.title)).toBeTruthy();
  });

  it('renders the author subtitle', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText(HOME_CONTENT.subtitle)).toBeTruthy();
  });

  it('renders the intro text', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText(HOME_CONTENT.intro)).toBeTruthy();
  });

  it('renders exactly four section cards', () => {
    const { getAllByRole } = render(<HomeScreen />);
    const cards = getAllByRole('button');
    expect(cards).toHaveLength(4);
  });

  it('renders cards for all four sections in order', () => {
    const { getAllByRole } = render(<HomeScreen />);
    const cards = getAllByRole('button');
    const labels = cards.map((c) => c.props.accessibilityLabel as string);
    expect(labels[0]).toContain('Catalysts');
    expect(labels[1]).toContain('Nourishers');
    expect(labels[2]).toContain('Inhibitors');
    expect(labels[3]).toContain('Toxins');
  });
});
