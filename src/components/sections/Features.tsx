'use client';

import { featureCards } from '@/lib/data';
import { Card } from '@/components/ui/Card';
import { Sparkles, ServerCog, Rocket, Cpu } from 'lucide-react';

const icons = {
  connect: Sparkles,
  server: ServerCog,
  rocket: Rocket
};

export function Features() {
  return (
    <section id="platform" className="space-y-10">
      <div className="max-w-3xl">
        <span className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Start IPTV Services Instantly</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Everything you need for a complete enterprise IPTV rollout.
        </h2>
        <p className="mt-4 text-slate-300">
          Deploy a modern IPTV platform with automation, middleware management, and rapid provisioning built for carriers and hospitality.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {featureCards.map((card) => {
          const Icon = icons[card.icon as keyof typeof icons] ?? Cpu;
          return (
            <Card key={card.title} className="group hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
