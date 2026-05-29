'use client';

export default function HeroCanvas() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_20%)]" />
      <div className="relative mx-auto flex h-full w-full items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/60 via-sky-500/30 to-slate-900/60 shadow-[0_0_80px_rgba(56,189,248,0.35)] backdrop-blur-xl" />
      </div>
      <div className="pointer-events-none absolute inset-0" />
    </div>
  );
}
