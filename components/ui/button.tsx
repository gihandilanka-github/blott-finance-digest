'use client'

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'default', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors';
  const variants: Record<string, string> = {
    default: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border border-input bg-transparent',
    ghost: 'bg-transparent hover:bg-accent',
  };
  return <button ref={ref} className={cn(base, variants[variant], className)} {...props} />;
});
Button.displayName = 'Button';

export { Button };

