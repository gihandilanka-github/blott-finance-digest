import { describe, it, expect } from 'vitest';
import { cn } from '../../lib/utils';

describe('cn utility', () => {
  it('concats only truthy class names', () => {
    expect(cn('a', null, undefined, 'c')).toBe('a c');
  });
});

