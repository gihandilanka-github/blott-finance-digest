'use client'

import React from 'react';
import { Button } from './ui/button';

export default function CheckButton() {
  return (
    <Button onClick={() => alert('Tailwind is working 🎉')} className="px-6 py-2" variant="default">
      Check Tailwind
    </Button>
  );
}

