"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { CanvasAnimation } from "@/components/shared/CanvasAnimation";
import { drawNeuralNetwork } from "@/animations/neuralNetwork";
import { drawNatureScene } from "@/animations/zen/natureScene";
import { useThemeAnimation, useIsZen } from "@/hooks/useThemeAnimation";
import { t, hero as heroT } from "@/lib/translations/site";

export function Hero({ locale }: { locale: string }) {
  const s = t(heroT, locale);
  const draw = useThemeAnimation(drawNeuralNetwork, drawNatureScene);
  const isZen = useIsZen();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 2: Neural network canvas */}
      <CanvasAnimation draw={draw} className={`${isZen ? 'opacity-[0.35]' : 'opacity-[0.15]'} pointer-events-none`} />

      {/* Layer 3: Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          {s.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight hero-title-glow"
        >
          {s.title1} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
            {s.title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {s.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#signup"
            className="group w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-full hover:bg-blue-500 hover:shadow-[0_0_24px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2"
          >
            {s.cta1}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#products"
            className="group w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-white text-base font-medium rounded-full hover:bg-white/5 hover:border-zinc-500 transition-all flex items-center justify-center gap-2"
          >
            {s.cta2}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        aria-label={s.scrollLabel}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-zinc-500"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
