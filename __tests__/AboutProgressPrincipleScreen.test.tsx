import React from 'react';
import { render } from '@testing-library/react-native';
import AboutProgressPrincipleScreen from '../app/about-progress-principle';
import { SECTIONS } from '../constants/content';

jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

describe('AboutProgressPrincipleScreen', () => {
  it('renders exactly four section cards', () => {
    const { getAllByRole } = render(<AboutProgressPrincipleScreen />);
    expect(getAllByRole('button')).toHaveLength(4);
  });

  it('renders all four section titles', () => {
    const { getByText } = render(<AboutProgressPrincipleScreen />);
    expect(getByText(SECTIONS.catalysts.title)).toBeTruthy();
    expect(getByText(SECTIONS.nourishers.title)).toBeTruthy();
    expect(getByText(SECTIONS.inhibitors.title)).toBeTruthy();
    expect(getByText(SECTIONS.toxins.title)).toBeTruthy();
  });

  it('renders cards in order: Catalysts, Nourishers, Inhibitors, Toxins', () => {
    const { getAllByRole } = render(<AboutProgressPrincipleScreen />);
    const labels = getAllByRole('button').map((c) => c.props.accessibilityLabel as string);
    expect(labels[0]).toContain('Catalysts');
    expect(labels[1]).toContain('Nourishers');
    expect(labels[2]).toContain('Inhibitors');
    expect(labels[3]).toContain('Toxins');
  });
});
