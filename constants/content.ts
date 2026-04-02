export type SectionKey = 'catalysts' | 'nourishers' | 'inhibitors' | 'toxins';

export interface SectionContent {
  title: string;
  tagline: string;
  body: string;
}

export const SECTIONS: Record<SectionKey, SectionContent> = {
  catalysts: {
    title: 'Catalysts',
    tagline: 'Events that directly support the work',
    body: 'Placeholder: Catalysts are actions that directly support work progress — clear goals, autonomy, resources, and open communication. They remove friction and create the conditions for meaningful progress.',
  },
  nourishers: {
    title: 'Nourishers',
    tagline: 'Interpersonal events that uplift people',
    body: 'Placeholder: Nourishers are interpersonal events that support the inner work lives of team members — respect, encouragement, emotional support, and camaraderie.',
  },
  inhibitors: {
    title: 'Inhibitors',
    tagline: 'Events that directly hinder the work',
    body: 'Placeholder: Inhibitors are actions that directly block work progress — lack of resources, unclear goals, meaningless tasks, and excessive bureaucracy.',
  },
  toxins: {
    title: 'Toxins',
    tagline: 'Interpersonal events that damage inner work life',
    body: 'Placeholder: Toxins are interpersonal events that damage the inner work lives of team members — disrespect, discouragement, and a culture of fear or blame.',
  },
};

export const HOME_CONTENT = {
  title: 'The Progress Principle',
  subtitle: 'Teresa Amabile & Steven Kramer',
  intro:
    'Placeholder: Of all the things that can boost emotions, motivation, and perceptions during a workday, the single most important is making progress in meaningful work. Even small wins can make a big difference in how people feel and perform.',
  menuLabel: 'Explore the framework',
};
