import { Bed, Bike, Croissant } from 'lucide-react';

export const iconMap = [
  { iconName: 'Bed', icon: Bed },
  { iconName: 'Bike', icon: Bike },
  { iconName: 'Croissant', icon: Croissant },
];

const iconMapReducer = iconMap.reduce((acc, { iconName, icon }) => {
  acc[iconName] = icon;
  return acc;
}, {} as { [key: string]: React.ComponentType });

export const getAccountIcon = (iconName: string) => {
  const IconComponent = iconMapReducer[iconName] || 'Bed';
  return IconComponent;
};
