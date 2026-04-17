"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  badge?: string;
  title: string;
  description?: string;
  features: FeatureItem[];
}

export function FeatureGrid({ badge, title, description, features }: FeatureGridProps) {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
            {badge && <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{badge}</span>}
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
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-blue-400">
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
