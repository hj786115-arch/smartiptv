'use client';

import { architectureItems } from '@/lib/data';
import { Card } from '@/components/ui/Card';
import { Monitor, Cloud, Network, Video, Settings2, Tv } from 'lucide-react';

const iconMap = {
  '4K Android STBs': Tv,
  'HD/SD Encoders': Video,
  'Streaming Servers': Cloud,
  'VOD Servers': Monitor,
  'Middleware Platform': Settings2,
  'Multi-Screen Delivery': Network
};

export function Architecture() {
  return (
    <section id="solutions" className="space-y-10">
      <div className="max-w-3xl">
        <span className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Technical Architecture</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Enterprise infrastructure designed for reliability and scale.
        </h2>
        <p className="mt-4 text-slate-300">
          A six-part architecture combining front-end devices, encoding, middleware, VOD, and delivery for modern IPTV and OTT products.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {architectureItems.map((item) => {
          const Icon = iconMap[item.title as keyof typeof iconMap] ?? Tv;
          return (
            <Card key={item.title} className="h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
