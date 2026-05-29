'use client';

import dynamic from 'next/dynamic';

const HomePageClient = dynamic(() => import('@/components/HomePageClient'), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center text-slate-500">Loading app…</div>
});

export default function ClientPageWrapper() {
  return <HomePageClient />;
}
