'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variantStyles =
      variant === 'ghost'
        ? 'bg-white/5 text-slate-100 border border-white/10 hover:bg-white/10'
        : 'bg-cyan-500 text-slate-950 shadow-glow hover:bg-cyan-400';

    return (
      <button ref={ref} className={`${baseStyles} ${variantStyles} ${className}`} {...props} />
    );
  }
);

Button.displayName = 'Button';

export { Button };
