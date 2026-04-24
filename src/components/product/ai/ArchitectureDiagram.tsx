"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { t } from "@/lib/translations/site";
import { architectureDiagram } from "@/lib/translations/product-ai";

export function ArchitectureDiagram({ locale }: { locale: string }) {
  const tx = t(architectureDiagram, locale);

  return (
    <section className="py-24 px-6 relative z-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-semibold tracking-wider uppercase text-sm">{tx.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight">{tx.title}</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
            {/* Left: Enterprise Internal */}
            <div className="flex-1 space-y-3">
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-4 text-center">{tx.internalNetwork}</div>
              {tx.nodes.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-surface-elevated border border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-300 text-center hover:border-emerald-500/20 transition-colors"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            {/* Center: Connection lines + VxonAI node */}
            <div className="flex flex-col items-center mx-8 py-4">
              <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent to-emerald-500/30" />
              <div className="hidden md:flex flex-col items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-emerald-500/40" />
                ))}
              </div>
              <motion.div
                animate={{ boxShadow: [
                  "0 0 20px rgba(16,185,129,0.15)",
                  "0 0 40px rgba(16,185,129,0.25)",
                  "0 0 20px rgba(16,185,129,0.15)",
                ]}}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-emerald-600/20 border border-emerald-500/40 rounded-2xl px-8 py-6 text-center my-4"
              >
                <div className="text-lg font-bold text-white mb-1">VxonAI</div>
                <div className="text-xs text-emerald-400">{tx.deployNode}</div>
              </motion.div>
              <div className="hidden md:flex flex-col items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-emerald-500/40" />
                ))}
              </div>
              <div className="hidden md:block w-px h-8 bg-gradient-to-b from-emerald-500/30 to-transparent" />
            </div>

            {/* Right: External network blocked */}
            <div className="flex-1 flex items-center justify-center">
              <div className="border-2 border-dashed border-red-500/20 rounded-xl px-8 py-12 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface px-3">
                  <Lock className="w-4 h-4 text-red-400/60" />
                </div>
                <div className="text-red-400/60 text-sm font-medium mb-2">{tx.externalNetwork}</div>
                {tx.features.map((feat, i) => (
                  <div key={i} className="text-xs text-zinc-600">{feat}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
