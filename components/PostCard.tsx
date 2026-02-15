'use client';

import React from 'react';
import Image from 'next/image';
import type { NewsItem } from '@/types/news';
import { Button } from '@/components/ui/button';

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
            <div className="relative w-full h-full">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
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
                <div className="flex items-baseline gap-2">
                  <Button
                    href={item.url}
                    variant="ghost"
                    className="px-0 py-0 gap-2"
                  >
                    <span className="text-[15px] underline underline-offset-12 decoration-white">
                      Read Article
                    </span>
                    <span className="self-end flex items-center justify-center w-7 h-7 pb-2">
                      <Image
                        src="/assets/arrow.svg"
                        alt="arrow"
                        width={36}
                        height={36}
                        className="w-7 h-7"
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        {variant !== 'large' && (
          <div className="p-4 px-1 text-left">
            <h3 className="text-title text-[24px]">{item.title}</h3>
            <div className="mt-3 flex items-center gap-2">
              <Button
                href={item.url}
                variant="ghost"
                className="px-0 py-0 gap-2"
              >
                <span className="text-[15px] underline underline-offset-12 decoration-white">
                  Read Article
                </span>
                <span className="self-end flex items-center justify-center w-7 h-7 pb-2">
                  <Image
                    src="/assets/arrow.svg"
                    alt="arrow"
                    width={36}
                    height={36}
                    className="w-7 h-7"
                  />
                </span>
              </Button>
            </div>
          </div>
        )}
      </a>
    </article>
  );
}
