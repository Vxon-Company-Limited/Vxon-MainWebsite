"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CanvasAnimation, type DrawFunction } from "./CanvasAnimation";
import { drawNatureScene } from "@/animations/zen/natureScene";
import { useThemeAnimation, useIsZen } from "@/hooks/useThemeAnimation";
import clsx from "clsx";

interface HeroButton {
  label: string;
  href: string;
  primary?: boolean;
}

interface HeroStat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

type ProductColor = "blue" | "emerald" | "violet" | "orange";

interface ProductHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  buttons: HeroButton[];
  draw: DrawFunction;
  stats?: HeroStat[];
  accentColor?: ProductColor;
}

const defaultStats: HeroStat[] = [];

const colorMap: Record<ProductColor, {
  dot: string;
  statIcon: string;
  statBg: string;
  statBorder: string;
  statValue: string;
  glow: string;
  glowRgb: string;
}> = {
  blue: {
    dot: "bg-blue-500",
    statIcon: "text-blue-400",
    statBg: "bg-blue-500/10",
    statBorder: "border-blue-500/20 hover:border-blue-500/30",
    statValue: "text-blue-400",
    glow: "rgba(59, 130, 246, 0.12)",
    glowRgb: "59, 130, 246",
  },
  emerald: {
    dot: "bg-emerald-500",
    statIcon: "text-emerald-400",
    statBg: "bg-emerald-500/10",
    statBorder: "border-emerald-500/20 hover:border-emerald-500/30",
    statValue: "text-emerald-400",
    glow: "rgba(16, 185, 129, 0.12)",
    glowRgb: "16, 185, 129",
  },
  violet: {
    dot: "bg-violet-500",
    statIcon: "text-violet-400",
    statBg: "bg-violet-500/10",
    statBorder: "border-violet-500/20 hover:border-violet-500/30",
    statValue: "text-violet-400",
    glow: "rgba(139, 92, 246, 0.12)",
    glowRgb: "139, 92, 246",
  },
  orange: {
    dot: "bg-orange-500",
    statIcon: "text-orange-400",
    statBg: "bg-orange-500/10",
    statBorder: "border-orange-500/20 hover:border-orange-500/30",
    statValue: "text-orange-400",
    glow: "rgba(249, 115, 22, 0.12)",
    glowRgb: "249, 115, 22",
  },
};

export function ProductHero({ badge, title, subtitle, buttons, draw, stats = defaultStats, accentColor = "blue" }: ProductHeroProps) {
  const themedDraw = useThemeAnimation(draw, drawNatureScene);
  const isZen = useIsZen();
  const colors = colorMap[accentColor];
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
          <span className={clsx("flex h-2 w-2 rounded-full animate-pulse", colors.dot)} />
          {badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          style={{ textShadow: `0 0 60px ${colors.glow}` }}
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

        {/* Stats Section */}
        {stats && stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                className={clsx(
                  "flex items-center gap-3 px-5 py-3 rounded-xl border transition-colors",
                  colors.statBg,
                  colors.statBorder
                )}
              >
                <stat.icon className={clsx("w-5 h-5", colors.statIcon)} />
                <div className="text-left">
                  <div className={clsx("text-xl font-bold text-white metric-number", colors.statValue)}>{stat.value}</div>
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {buttons.map((btn) =>
            btn.primary ? (
              <Link
                key={btn.label}
                href={btn.href}
                className="group w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 text-base font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
              >
                {btn.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link
                key={btn.label}
                href={btn.href}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white text-base font-medium rounded-full hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
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
