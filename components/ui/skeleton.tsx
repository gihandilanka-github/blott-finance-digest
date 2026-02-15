'use client'

import * as React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  className?: string;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, width = '100%', height = '100%', ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        style={{ width, height }}
        className={cn('animate-pulse bg-white/10', className)}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';

export default Skeleton;

