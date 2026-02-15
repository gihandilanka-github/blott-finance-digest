'use client'

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'outline' | 'ghost';
  href?: string;
}

const Button = React.forwardRef<any, ButtonProps>(
  ({ className, variant = 'default', href, children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors';
    const variants: Record<string, string> = {
      default: 'bg-primary text-white hover:bg-primary/90',
      outline: 'border border-input bg-transparent',
      ghost: 'bg-transparent hover:bg-accent',
    };

    const classNames = cn(base, variants[variant], className);

    if (href) {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a ref={ref} href={href} className={classNames} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classNames} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };

