'use client';

import { useEffect } from 'react';

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-10 text-white">
      <div className="w-full max-w-xl rounded-3xl border border-slate-800/80 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/40">
        <h1 className="text-4xl font-semibold mb-4">Something went wrong</h1>
        <p className="text-slate-300 mb-8">
          An unexpected error occurred while loading the page. Please try again, or refresh the browser.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-6 py-3 text-base font-medium text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
