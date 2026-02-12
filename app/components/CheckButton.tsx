'use client'

import React from 'react';

export default function CheckButton() {
  return (
    <button
      type="button"
      onClick={() => alert('Tailwind is working 🎉')}
      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      Check Tailwind
    </button>
  );
}

