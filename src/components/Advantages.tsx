"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Lock, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { t, advantages as advantagesT } from "@/lib/translations/site";

const advantages = [
  { id: "stability", value: 99.9, valueDecimals: 1, icon: Clock },
  { id: "price", value: 7, valueDecimals: 0, icon: DollarSign },
  { id: "security", value: 4, valueDecimals: 0, icon: Lock },
  { id: "flexibility", value: 5, valueDecimals: 0, icon: Zap },
];

export function Advantages({ locale }: { locale: string }) {
  const s = t(advantagesT, locale);
  return (
    <section className="py-24 bg-surface border-y border-white/5 relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{s.badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            {s.title} <span className="text-blue-500">Vxon</span>?
          </h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
            {s.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((adv, idx) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-surface-elevated border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-start gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <adv.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  {/* Metallic reflection line */}
                  <div className="w-12 h-px mb-2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="text-4xl font-extrabold text-white mb-3 tracking-tight metric-number" style={{ animationDelay: `${idx * 3}s` }}>
                    <AnimatedCounter to={adv.value} suffix={s.items[idx].valueSuffix} decimals={adv.valueDecimals} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.items[idx].title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{s.items[idx].description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
