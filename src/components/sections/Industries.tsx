'use client';

import { industries } from '@/lib/data';
import { Card } from '@/components/ui/Card';
import { Briefcase, Tv, Building, HeartPulse } from 'lucide-react';

const icons = [Briefcase, Tv, Building, HeartPulse];

export function Industries() {
  const visibleIndustries = industries.filter(
    (industry) =>
      industry.title !== 'Hospitality (Hotels)' &&
      industry.title !== 'Healthcare (Hospitals)'
  );

  return (
    <section id="industries" className="space-y-10">
      <div className="max-w-3xl">
        <span className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Industries Served</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Designed for high-volume enterprise, deployments.
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visibleIndustries.map((industry, index) => {
          const Icon = icons[index] ?? Briefcase;
          return (
            <Card key={industry.title} className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{industry.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{industry.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
