"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Static gradient orb instead of 3D */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-slate-700/30 via-slate-600/20 to-slate-900/30 blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
        >
          Your TV, Done Right — <br />
          10,000+ Channels Delivered
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-8"
        >
          We make it easy to watch the channels you love — sports, news, movies, kids, and more — on any screen, anywhere. Over 10,000 channels from around the world, ready to go.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <MagneticButton>
            <a
              href="https://wa.me/18607702368?text=I'm%20interested%20in%20your%20enterprise%20IPTV%20solution"
              className="block px-8 py-3 rounded-xl border border-slate-600 hover:bg-slate-800 transition font-semibold text-center"
            >
              Contact Sales on WhatsApp
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#solutions"
              className="inline-block px-8 py-3 rounded-xl border border-slate-600 hover:bg-slate-800 transition font-semibold"
            >
              View Technical Specs
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-6 justify-center text-sm"
        >
          <span className="bg-white/10 px-4 py-2 rounded-full">✅ 25+ Countries</span>
          <span className="bg-white/10 px-4 py-2 rounded-full">⚡ 99.99% Uptime SLA</span>
          <span className="bg-white/10 px-4 py-2 rounded-full">🚀 &lt;48hrs Deployment</span>
        </motion.div>
      </div>
    </section>
  );
}
