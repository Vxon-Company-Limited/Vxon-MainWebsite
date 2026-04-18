"use client";

import { motion } from "framer-motion";
import { Shield, Users, Puzzle } from "lucide-react";
import { t } from "@/lib/translations/site";
import { valueProps } from "@/lib/translations/product-ai";

const icons = [Shield, Users, Puzzle];

export function ValueProps({ locale }: { locale: string }) {
  const tx = t(valueProps, locale);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{tx.badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">{tx.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tx.items.map((v, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 text-blue-400">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">{v.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
