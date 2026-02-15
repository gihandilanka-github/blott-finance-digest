'use client';

import React from 'react';
import Skeleton from './ui/skeleton';

export default function SkeletonPost({
  variant = 'small',
}: {
  variant?: 'small' | 'large';
}) {
  const height = variant === 'large' ? '32rem' : '16rem';
  return <Skeleton className="rounded-md" width="100%" height={height} />;
}
