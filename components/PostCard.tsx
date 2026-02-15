'use client';

import React from 'react';
import type { NewsItem } from '@/types/news';

export default function PostCard({
  item,
  variant = 'small',
}: Readonly<{
  item: NewsItem;
  variant?: 'small' | 'large';
}>) {
  return (
    <article
      className={`group overflow-hidden rounded-md bg-black ${
        variant === 'large' ? 'md:col-span-2' : ''
      }`}
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className={`w-full ${variant === 'large' ? 'h-[539px]' : 'h-[199px]'} bg-gray-800 rounded-b-md overflow-hidden`}
        >
          {item.thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-700" />
          )}
        </div>
        <div className="p-4 px-1 text-left rounded-b-md bg-black">
          <h3
            className={`text-white ${variant === 'large' ? 'text-xl' : 'text-sm'} font-semibold`}
          >
            {item.title}
          </h3>

          <div className="mt-3 text-sm text-indigo-300">Read Article →</div>
        </div>
      </a>
    </article>
  );
}
