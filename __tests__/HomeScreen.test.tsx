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

  it('renders exactly five cards (questionnaire + four sections)', () => {
    const { getAllByRole } = render(<HomeScreen />);
    const cards = getAllByRole('button');
    expect(cards).toHaveLength(5);
  });

  it('renders the questionnaire card first', () => {
    const { getAllByRole } = render(<HomeScreen />);
    const cards = getAllByRole('button');
    expect(cards[0].props.accessibilityLabel).toContain('Self-Assessment');
  });

  it('renders section cards after the questionnaire card in order', () => {
    const { getAllByRole } = render(<HomeScreen />);
    const cards = getAllByRole('button');
    const labels = cards.map((c) => c.props.accessibilityLabel as string);
    expect(labels[1]).toContain('Catalysts');
    expect(labels[2]).toContain('Nourishers');
    expect(labels[3]).toContain('Inhibitors');
    expect(labels[4]).toContain('Toxins');
  });
});
