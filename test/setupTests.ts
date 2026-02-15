import React from 'react';
import { vi } from 'vitest';

// Mock next/image to a simple img element for tests
vi.mock('next/image', () => {
  return {
    __esModule: true,
    default: (props: Record<string, unknown>) => {
      return React.createElement('img', props);
    },
  };
});

