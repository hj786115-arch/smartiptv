'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT } from '@/lib/constants';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
      );
      setMessage('Your message has been sent. We will reach out shortly.');
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setMessage('There was an issue sending your message. Please email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
        <span className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Contact</span>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to Transform Your Service?
        </h2>
        <p className="max-w-xl text-slate-300">
          Talk with our enterprise team to build IPTV services designed for carriers, hotels, hospitals, and OTT platforms.
        </p>
        <div className="space-y-4">
          <a href={CONTACT.whatsappLink} className="inline-flex items-center rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-green-600">
            Contact Sales on WhatsApp
          </a>
          <div className="text-sm text-slate-300">
            <p>WhatsApp: <a href={CONTACT.whatsappLink} className="text-cyan-300 hover:text-white">{CONTACT.whatsapp}</a></p>
            <p>Email: <a href={`mailto:${CONTACT.email}`} className="text-cyan-300 hover:text-white">{CONTACT.email}</a></p>
          </div>
        </div>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-200">Name</label>
          <input
            id="name"
            name="user_name"
            required
            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-200">Email</label>
          <input
            id="email"
            name="user_email"
            type="email"
            required
            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-slate-200">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
          />
        </div>
        <div className="space-y-4">
          <MagneticButton type="submit" disabled={submitting} className="w-full text-sm font-semibold">
            {submitting ? 'Sending Message...' : 'Send Message'}
          </MagneticButton>
          {message && <p className="text-sm text-cyan-200">{message}</p>}
        </div>
      </form>
    </section>
  );
}
