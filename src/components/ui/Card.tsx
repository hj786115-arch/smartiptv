'use client';

import { HTMLAttributes } from 'react';

export function Card({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl ${className ?? ''}`}
      {...props}
    >
      {children}
    </div>
  );
}
