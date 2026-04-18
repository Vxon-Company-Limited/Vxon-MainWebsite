"use client";

import { motion } from "framer-motion";
import { Shield, Wifi, FileSearch, ClipboardCheck } from "lucide-react";
import { t } from "@/lib/translations/site";
import { coreCapabilities } from "@/lib/translations/product-fort";

const capIcons = [Shield, Wifi, FileSearch, ClipboardCheck];

export function CoreCapabilities({ locale }: { locale: string }) {
  const cc = t(coreCapabilities, locale);
  const capabilities = cc.items.map((item, i) => ({ icon: capIcons[i], ...item }));

  return (
    <section className="py-24 px-6 relative z-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{cc.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight">{cc.title}</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-6 items-start bg-surface-elevated border border-white/10 rounded-xl p-6"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <cap.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
