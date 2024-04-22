import { LucideIcon } from 'lucide-react';

export interface FormTextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
}

export interface AuthHeaderProps {
  title: string;
  description: string;
}

export interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface BenefitItemProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface SidebarRouteItemProps {
  icon: LucideIcon;
  title: string;
  href: string;
}

export interface AddHabitDialogProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
}
