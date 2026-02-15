'use client';

import React from 'react';
import type { NewsItem } from '@/types/news';
import PostCard from './PostCard';

export default function FeaturedGrid({ items }: { items: NewsItem[] }) {
  if (!items || items.length === 0) return null;

  const first = items[0];
  const second = items[1];
  const third = items[2];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-1">
        {first && <PostCard item={first} variant="large" />}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {second && <PostCard item={second} variant="small" />}
        {third && <PostCard item={third} variant="small" />}
      </div>
    </section>
  );
}
