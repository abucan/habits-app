import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'text-white duration-150 rounded-lg active:shadow-lg',
  {
    variants: {
      variant: {
        default: 'bg-primary_main hover:bg-indigo-700 text-white',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        secondary: 'text-gray-700 border hover:border-primary_main',
        shadow:
          'shadow-md focus:shadow-none ring-offset-2 ring-primary_main focus:ring-2 text-white bg-primary_main',
        footer:
          'block text-center text-white font-medium bg-primary_main duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        default: 'px-4 py-2',
        md: 'px-5 py-3',
        lg: 'px-6 py-3.5',
        xl: 'px-7 py-4',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton, buttonVariants };
