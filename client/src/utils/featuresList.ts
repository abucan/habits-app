import {
  CalendarDays,
  LineChart,
  LucideIcon,
  TabletSmartphone,
} from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const featuresList: Feature[] = [
  {
    icon: LineChart,
    title: 'Visual Progress Tracking',
    desc: 'Track your habits and routines with a visual progress chart that updates in real-time.',
  },
  {
    icon: CalendarDays,
    title: 'Track Your Habits',
    desc: 'Categorize and schedule your habits to keep yourself accountable and motivated.',
  },
  {
    icon: TabletSmartphone,
    title: 'Responsive Design',
    desc: 'Access your habit tracker on any device, from your desktop to your smartphone.',
  },
];
