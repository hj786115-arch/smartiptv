'use client';

import { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursorStore } from '@/store/cursorStore';
import { useMousePosition } from '@/hooks/useMousePosition';

export function CustomCursor() {
  const { position, active } = useMousePosition();
  const hover = useCursorStore((state) => state.hover);
  const click = useCursorStore((state) => state.click);
  const isEnabled = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(pointer:fine)').matches, []);

  useEffect(() => {
    const interactiveEls = ['a', 'button', 'input', 'textarea', 'select'];

    const handleEnter = (event: Event) => {
      const target = event.target as HTMLElement;
      if (interactiveEls.includes(target.tagName.toLowerCase()) || target.dataset.cursor === 'hover') {
        useCursorStore.getState().setHover(true);
      }
    };

    const handleLeave = (event: Event) => {
      const target = event.target as HTMLElement;
      if (interactiveEls.includes(target.tagName.toLowerCase()) || target.dataset.cursor === 'hover') {
        useCursorStore.getState().setHover(false);
      }
    };

    const handleDown = () => useCursorStore.getState().setClick(true);
    const handleUp = () => useCursorStore.getState().setClick(false);

    document.addEventListener('mouseover', handleEnter);
    document.addEventListener('mouseout', handleLeave);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);

    return () => {
      document.removeEventListener('mouseover', handleEnter);
      document.removeEventListener('mouseout', handleLeave);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
    };
  }, []);

  if (!isEnabled || !active) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-[9999] h-4 w-4 rounded-full border border-cyan-400/70 bg-cyan-300/30 shadow-[0_0_20px_rgba(56,189,248,0.18)] pointer-events-none"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: hover ? (click ? 1.6 : 1.4) : click ? 1.1 : 1,
          opacity: 1
        }}
        transition={{ type: 'tween', duration: 0.02, ease: 'linear' }}
        style={{ translateX: 0, translateY: 0 }}
        key="cursor"
      />
    </AnimatePresence>
  );
}
