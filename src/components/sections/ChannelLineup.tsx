'use client';

import { useMemo, useState } from 'react';
import { channelCategories } from '@/lib/data';
import { Dialog } from '@/components/ui/Dialog';
import { Card } from '@/components/ui/Card';
import { ChevronRight } from 'lucide-react';

export function ChannelLineup() {
  const [selected, setSelected] = useState<string | null>(null);
  const category = useMemo(
    () => channelCategories.find((item) => item.id === selected) ?? null,
    [selected]
  );

  return (
    <section id="channels" className="space-y-10">
      <div className="max-w-3xl">
        <span className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Global Channel Lineup</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          10,000+ Channels in One Package
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          '10,000+ Total Channels',
          '20+ Languages',
          '3,000+ HD / 4K Channels',
          '25+ Countries Covered'
        ].map((badge) => (
          <div key={badge} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-100">
            {badge}
          </div>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-4">
        {channelCategories.map((categoryCard) => (
          <Card key={categoryCard.id} className="group cursor-pointer transition hover:-translate-y-1" onClick={() => setSelected(categoryCard.id)}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{categoryCard.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{categoryCard.summary}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-cyan-300 transition group-hover:translate-x-1" />
            </div>
          </Card>
        ))}
      </div>
      <Dialog
        open={Boolean(category)}
        title={category?.title ?? ''}
        description={category?.summary ?? ''}
        onClose={() => setSelected(null)}
      >
        <div className="grid gap-3">
          {category?.channels.map((channel) => (
            <div key={channel} className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
              {channel}
            </div>
          ))}
        </div>
      </Dialog>
    </section>
  );
}
