export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-10 text-white">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-800/80 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/40">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
        <p className="text-base font-medium">Loading page content…</p>
      </div>
    </div>
  );
}
