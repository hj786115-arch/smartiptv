'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { CONTACT, NAV_LINKS } from '@/lib/constants';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b border-white/10 transition backdrop-blur-xl ${scrolled ? 'bg-slate-950/95 shadow-glow' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-tight text-white">
          Smart IPTV
        </a>

        <nav className={`${open ? 'flex' : 'hidden'} flex-1 items-center justify-center gap-6 text-sm text-slate-300 md:flex md:justify-end`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-cyan-300">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <MagneticButton
            as="a"
            href={CONTACT.whatsappLink}
            className="hidden md:inline-flex"
            onClick={() => setOpen(false)}
          >
            Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
          </MagneticButton>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-400/40 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
