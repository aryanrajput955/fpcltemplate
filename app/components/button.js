'use client';
import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none bg-green-600 hover:bg-green-700 text-white px-6 py-3 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}