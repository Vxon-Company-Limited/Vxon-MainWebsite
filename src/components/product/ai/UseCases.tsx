"use client";

import { motion } from "framer-motion";
import { Code2, Building2, Network } from "lucide-react";
import { t } from "@/lib/translations/site";
import { useCases } from "@/lib/translations/product-ai";

const icons = [Code2, Building2, Network];

export function UseCases({ locale }: { locale: string }) {
  const tx = t(useCases, locale);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-semibold tracking-wider uppercase text-sm">{tx.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight">{tx.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tx.items.map((c, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-surface-elevated border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{c.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{c.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
