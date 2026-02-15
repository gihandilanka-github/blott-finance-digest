import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import '@/styles/globals.css';
import { siteName } from '@/lib/config';

const roboto = Roboto({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: {
    template: `${siteName} - %s`,
    default: siteName,
  },
  description: `${siteName} application`,
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <header className="pt-11 pb-6 mb-10">
          <div className="container mx-auto">
            <Image
              src="/assets/logo.png"
              alt={siteName}
              width={200}
              height={48}
              className="mx-auto object-contain"
            />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
