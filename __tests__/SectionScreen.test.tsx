import React from 'react';
import { render } from '@testing-library/react-native';
import { SECTIONS, SectionKey } from '../constants/content';

// Each section screen is a thin wrapper — import them all
import CatalystsScreen from '../app/catalysts';
import NourishersScreen from '../app/nourishers';
import InhibitorsScreen from '../app/inhibitors';
import ToxinsScreen from '../app/toxins';

import { ComponentType } from 'react';

jest.mock('expo-router', () => ({
  useRouter: () => ({ back: jest.fn() }),
}));

const SCREEN_MAP: Record<SectionKey, ComponentType> = {
  catalysts: CatalystsScreen,
  nourishers: NourishersScreen,
  inhibitors: InhibitorsScreen,
  toxins: ToxinsScreen,
};

describe('Section screens', () => {
  it.each(Object.keys(SECTIONS) as SectionKey[])(
    '%s screen renders title and tagline from content',
    (key) => {
      const Screen = SCREEN_MAP[key];
      const { title, tagline } = SECTIONS[key];

      const { getByText } = render(<Screen />);

      expect(getByText(title)).toBeTruthy();
      expect(getByText(tagline)).toBeTruthy();
    },
  );

  it.each(Object.keys(SECTIONS) as SectionKey[])(
    '%s screen renders body text',
    (key) => {
      const Screen = SCREEN_MAP[key];
      const { body } = SECTIONS[key];

      const { getByText } = render(<Screen />);

      expect(getByText(body)).toBeTruthy();
    },
  );
});
