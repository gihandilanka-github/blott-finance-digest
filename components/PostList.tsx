'use client';

import React from 'react';
import type { NewsItem } from '@/types/news';
import PostCard from './PostCard';

export default function PostList({ items }: { items: NewsItem[] }) {
  if (!items || items.length === 0) return null;
  const rest = items.slice(3);
  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {rest.map((it) => (
        <PostCard key={it.id ?? it.url} item={it} variant="small" />
      ))}
    </section>
  );
}
