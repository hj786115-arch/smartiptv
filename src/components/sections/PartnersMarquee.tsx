'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import { techPartners } from '@/lib/data';

export function PartnersMarquee() {
  const [paused, setPaused] = useState(false);
  const controls = useAnimationControls();
  const logos = [...techPartners, ...techPartners];

  useEffect(() => {
    controls.start({
      x: paused ? '0%' : ['0%', '-50%'],
      transition: paused
        ? { duration: 0 }
        : { duration: 18, repeat: Infinity, ease: 'linear' }
    });
  }, [controls, paused]);

  return (
    <section className="space-y-10">
      <div className="max-w-3xl">
        <span className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Technology Partners</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Trusted by leading cloud and device ecosystems.
        </h2>
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4">
        <motion.div
          className="flex w-[200%] items-center gap-8 px-4"
          animate={controls}
          onHoverStart={() => setPaused(true)}
          onHoverEnd={() => setPaused(false)}
        >
          {logos.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex min-w-[180px] items-center justify-center rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-5 text-center text-sm text-slate-100 shadow-glow">
              {partner.logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
