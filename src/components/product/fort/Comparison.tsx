"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { t } from "@/lib/translations/site";
import { comparison as compTranslations } from "@/lib/translations/product-fort";

export function Comparison({ locale }: { locale: string }) {
  const comp = t(compTranslations, locale);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{comp.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight">{comp.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-elevated border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold text-zinc-400 mb-6">{comp.left.title}</h3>
            <div className="space-y-4">
              {comp.left.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400/60 shrink-0 mt-1" />
                  <span className="text-sm text-zinc-500 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold text-white mb-6">{comp.right.title}</h3>
            <div className="space-y-4">
              {comp.right.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <span className="text-sm text-zinc-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
