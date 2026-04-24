"use client";

import { motion } from "framer-motion";
import { Building2, Landmark, Cpu, Users } from "lucide-react";
import { t } from "@/lib/translations/site";
import { industryCards as industryTranslations } from "@/lib/translations/product-fort";

const industryIcons = [Landmark, Building2, Cpu, Users];

export function IndustryCards({ locale }: { locale: string }) {
  const ic = t(industryTranslations, locale);
  const industries = ic.items.map((item, i) => ({ icon: industryIcons[i], ...item }));

  return (
    <section className="py-24 px-6 relative z-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{ic.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight">{ic.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-surface-elevated border border-white/10 rounded-2xl p-6 hover:border-orange-500/20 transition-all overflow-hidden relative"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 text-orange-400">
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{ind.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{ind.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
