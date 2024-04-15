import { BadgeCheck, Lightbulb, LucideIcon, SquareArrowUp } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const featuresList: Feature[] = [
  {
    icon: BadgeCheck,
    title: 'Increased Accountability',
    desc: 'By categorizing and scheduling your habits, you are more likely to stick to them.',
  },
  {
    icon: SquareArrowUp,
    title: 'Enhanced Motivation',
    desc: 'Visual progress tracking transforms your habits into tangible achievements.',
  },
  {
    icon: Lightbulb,
    title: 'Improved Self-Awareness',
    desc: 'Through habit categorization and flexible scheduling, you gain valuable insights into your habits and routines.',
  },
];
