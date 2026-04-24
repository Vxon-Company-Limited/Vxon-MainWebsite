"use client";

import { motion } from "framer-motion";
import { t } from "@/lib/translations/site";
import { integrationLogos } from "@/lib/translations/product-claw";

const abbrs = ["ERP", "CRM", "OA", "FIN", "HR", "DB", "BI", "CS"];

export function IntegrationLogos({ locale }: { locale: string }) {
  const il = t(integrationLogos, locale);
  const systems = il.systems.map((name, i) => ({ name, abbr: abbrs[i] }));
  return (
    <section className="py-20 px-6 relative z-10 border-y border-white/5 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-violet-500 font-semibold tracking-wider uppercase text-sm">{il.badge}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 tracking-tight">{il.title}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {systems.map((sys, idx) => (
            <motion.div
              key={sys.name}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ opacity: 1, scale: 1.02 }}
              className="flex flex-col items-center justify-center h-20 rounded-xl border border-white/5 bg-white/[0.02] cursor-default transition-all hover:border-violet-500/20 hover:shadow-[0_0_12px_rgba(139,92,246,0.08)]"
            >
              <span className="text-sm font-bold text-zinc-500 hover:text-zinc-300 transition-colors select-none">
                {sys.abbr}
              </span>
              <span className="text-[10px] text-zinc-600 mt-1">{sys.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
