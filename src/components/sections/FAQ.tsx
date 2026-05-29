'use client';

import { faqItems } from '@/lib/data';
import { Accordion } from '@/components/ui/Accordion';

export function FAQ() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl">
        <span className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">FAQ</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Questions we answer for enterprise operators.
        </h2>
      </div>
      <Accordion items={faqItems} />
    </section>
  );
}
