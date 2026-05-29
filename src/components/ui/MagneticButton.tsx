'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, RefObject, useRef } from 'react';
import { Button } from './Button';

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  as?: 'button' | 'a';
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export function MagneticButton({ children, className, as = 'button', ...props }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-40, 40], [-5, 5]);
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    x.set(dx / 4);
    y.set(dy / 4);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (as === 'a') {
    return (
      <motion.div style={{ x, y, rotate }} className={className}>
        <a
          ref={ref as RefObject<HTMLAnchorElement>}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className ?? ''}`}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div style={{ x, y, rotate }} className={className}>
      <Button
        ref={ref as React.RefObject<HTMLButtonElement>}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </Button>
    </motion.div>
  );
}
