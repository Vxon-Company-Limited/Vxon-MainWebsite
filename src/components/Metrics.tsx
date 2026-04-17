"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { t, metrics as metricsT } from "@/lib/translations/site";

const metricData = [
  { value: 500, decimals: 0 },
  { value: 10, decimals: 0 },
  { value: 7, decimals: 0 },
  { value: 99.9, decimals: 1 },
  { value: 12, decimals: 0 },
];

export function Metrics({ locale }: { locale: string }) {
  const s = t(metricsT, locale);
  const metrics = metricData.map((d, i) => ({ ...d, ...s.items[i] }));
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tighter metric-number" style={{ animationDelay: `${idx * 2.5}s` }}>
                <AnimatedCounter to={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
              </div>
              {/* Dashboard progress indicator */}
              <div className="relative w-8 h-[2px] bg-zinc-800 rounded-full mb-3 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/30 rounded-full" />
              </div>
              <p className="text-sm text-zinc-400">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
