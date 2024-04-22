import { Clock, Home, ListChecks, LucideIcon } from 'lucide-react';

interface SidebarLinks {
  icon: LucideIcon;
  title: string;
  href: string;
}

export const sidebarLinks: SidebarLinks[] = [
  {
    icon: Home,
    title: 'Home ',
    href: '/dashboard',
  },
  {
    icon: ListChecks,
    title: 'Habits',
    href: '/habits',
  },
  {
    icon: Clock,
    title: 'Reminders',
    href: '/reminders',
  },
];
