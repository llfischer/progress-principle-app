import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../app/index';
import { HOME_CONTENT } from '../constants/content';
import { Linking } from 'react-native';

jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.spyOn(Linking, 'openURL').mockResolvedValue(undefined);

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

  it('renders exactly two navigation cards', () => {
    const { getAllByRole } = render(<HomeScreen />);
    // buttons = two SectionCards + Agile Wings link
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('renders the Self-Assessment card first', () => {
    const { getAllByRole } = render(<HomeScreen />);
    const cards = getAllByRole('button');
    expect(cards[0].props.accessibilityLabel).toContain('Self-Assessment');
  });

  it('renders the About Progress Principle card second', () => {
    const { getAllByRole } = render(<HomeScreen />);
    const cards = getAllByRole('button');
    expect(cards[1].props.accessibilityLabel).toContain('About Progress Principle');
  });

  it('renders the About Agile Wings link', () => {
    const { getByRole } = render(<HomeScreen />);
    expect(getByRole('link', { name: 'About Agile Wings' })).toBeTruthy();
  });

  it('opens the Agile Wings URL when the link is pressed', () => {
    const { getByRole } = render(<HomeScreen />);
    fireEvent.press(getByRole('link', { name: 'About Agile Wings' }));
    expect(Linking.openURL).toHaveBeenCalledWith('https://agilewings.se/en/about-agile-wings');
  });
});
