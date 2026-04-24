"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

type AccentColor = "blue" | "emerald" | "violet" | "orange";

interface FeatureGridProps {
  badge?: string;
  title: string;
  description?: string;
  features: FeatureItem[];
  accentColor?: AccentColor;
}

const accentColorMap: Record<AccentColor, { badge: string; border: string; icon: string; iconBg: string }> = {
  blue: { badge: "text-blue-500", border: "bg-blue-500", icon: "text-blue-400", iconBg: "bg-blue-500/10 border-blue-500/20" },
  emerald: { badge: "text-emerald-500", border: "bg-emerald-500", icon: "text-emerald-400", iconBg: "bg-emerald-500/10 border-emerald-500/20" },
  violet: { badge: "text-violet-500", border: "bg-violet-500", icon: "text-violet-400", iconBg: "bg-violet-500/10 border-violet-500/20" },
  orange: { badge: "text-orange-500", border: "bg-orange-500", icon: "text-orange-400", iconBg: "bg-orange-500/10 border-orange-500/20" },
};

export function FeatureGrid({ badge, title, description, features, accentColor = "blue" }: FeatureGridProps) {
  const colors = accentColorMap[accentColor];
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
            {badge && <span className={clsx("font-semibold tracking-wider uppercase text-sm", colors.badge)}>{badge}</span>}
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight">{title}</h2>
            {description && <p className="text-zinc-400 text-base mt-4 leading-relaxed">{description}</p>}
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative bg-surface-elevated border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all"
              >
                <div className={clsx("absolute left-0 top-0 bottom-0 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity", colors.border)} />
                <div className={clsx("w-10 h-10 rounded-lg border flex items-center justify-center mb-4", colors.iconBg, colors.icon)}>
                  <feat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
