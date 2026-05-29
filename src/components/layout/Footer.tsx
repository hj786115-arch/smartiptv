'use client';

import { CONTACT } from '@/lib/constants';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 px-6 py-12 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <p className="text-xl font-semibold text-white">Smart IPTV</p>
          <p className="max-w-xl text-sm leading-7">
            Enterprise IPTV delivered with carrier-grade reliability, global channel lineup, and rapid deployment to your service network.
          </p>
          <p className="text-sm text-slate-300">{CONTACT.address}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href="#platform" className="hover:text-white">Platform</a></li>
              <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
              <li><a href="#industries" className="hover:text-white">Industries</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href={CONTACT.whatsappLink} className="block hover:text-white">WhatsApp</a>
              <a href={`mailto:${CONTACT.email}`} className="block hover:text-white">{CONTACT.email}</a>
              <div className="flex items-center gap-3 pt-2 text-slate-400">
                <a href="#" aria-label="LinkedIn" className="transition hover:text-cyan-300"><Linkedin className="h-4 w-4" /></a>
                <a href="#" aria-label="Twitter" className="transition hover:text-cyan-300"><Twitter className="h-4 w-4" /></a>
                <a href="#" aria-label="Facebook" className="transition hover:text-cyan-300"><Facebook className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Smart IPTV. All rights reserved.
      </div>
    </footer>
  );
}
