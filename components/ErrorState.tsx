'use client'

import React from 'react';
import { Button } from './ui/button';

export default function ErrorState({ message, onRetry }: { message?: string; onRetry?: () => void }) {
  return (
    <div className="p-6 text-center">
      <p className="text-red-400 mb-4">Error: {message || 'Failed to load news.'}</p>
      <Button onClick={onRetry} className="px-4 py-2" variant="default">
        Retry
      </Button>
    </div>
  );
}

