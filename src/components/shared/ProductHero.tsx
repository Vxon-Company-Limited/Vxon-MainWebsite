"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CanvasAnimation, type DrawFunction } from "./CanvasAnimation";
import { drawNatureScene } from "@/animations/zen/natureScene";
import { useThemeAnimation, useIsZen } from "@/hooks/useThemeAnimation";

interface HeroButton {
  label: string;
  href: string;
  primary?: boolean;
}

interface ProductHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  buttons: HeroButton[];
  draw: DrawFunction;
}

export function ProductHero({ badge, title, subtitle, buttons, draw }: ProductHeroProps) {
  const themedDraw = useThemeAnimation(draw, drawNatureScene);
  const isZen = useIsZen();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-background" />
      <CanvasAnimation draw={themedDraw} className={`${isZen ? 'opacity-[0.35]' : 'opacity-[0.15]'} pointer-events-none`} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          {badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          style={{ textShadow: "0 0 60px rgba(var(--theme-glow-rgb),0.12)" }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {buttons.map((btn) =>
            btn.primary ? (
              <Link
                key={btn.label}
                href={btn.href}
                className="group w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-full hover:bg-blue-500 hover:shadow-[0_0_24px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2"
              >
                {btn.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link
                key={btn.label}
                href={btn.href}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-white text-base font-medium rounded-full hover:bg-white/5 hover:border-zinc-500 transition-all flex items-center justify-center gap-2"
              >
                {btn.label}
              </Link>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
