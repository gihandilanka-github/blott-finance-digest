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
          className={`w-full ${variant === 'large' ? 'h-[402px] md:h-[539px]' : 'h-[199px] md:h-[199px]'} bg-gray-800 rounded-md overflow-hidden relative`}
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

          {variant === 'large' && (
            // Gradient overlay at bottom with top border
            <div className="absolute left-0 right-0 bottom-0">
              <div className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r from-[#FF9D00] via-[#FF9D00]/30 to-transparent" />
              <div className="relative z-10 px-6 py-10 bg-gradient-to-r from-[#5f0a6e] via-[#510049]/90 to-transparent">
                <h3 className="text-white text-[24px] md:text-[26px] font-semibold mb-3">
                  {item.title}
                </h3>
                <div className="text-sm text-indigo-200">Read Article →</div>
              </div>
            </div>
          )}
        </div>
        {variant !== 'large' && (
          <div className="p-4 px-1 text-left">
            <h3 className="text-title text-[24px]">{item.title}</h3>
            <div className="mt-3 text-sm text-indigo-300">Read Article →</div>
          </div>
        )}
      </a>
    </article>
  );
}
