"use client";

import { motion } from "framer-motion";
import { t, partners as partnersT } from "@/lib/translations/site";

const partners = [
  { name: "Google Gemini", short: "Gemini" },
  { name: "OpenAI", short: "OpenAI" },
  { name: "Anthropic Claude", short: "Claude" },
  { name: "DeepSeek", short: "DeepSeek" },
  { name: "阿里云 Qwen", short: "Qwen" },
  { name: "智谱AI GLM", short: "GLM" },
  { name: "月之暗面 Kimi", short: "Kimi" },
  { name: "SiliconFlow", short: "SiliconFlow" },
];

export function Partners({ locale }: { locale: string }) {
  const s = t(partnersT, locale);
  return (
    <section className="py-20 border-y border-white/5 bg-surface px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase text-center mb-12">
          {s.header}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ opacity: 1, scale: 1.02 }}
              className="flex items-center justify-center h-20 rounded-xl border border-white/5 bg-white/[0.02] cursor-default transition-all hover:border-white/10 hover:shadow-[0_0_12px_rgba(59,130,246,0.08)]"
            >
              <span className="text-lg font-bold text-zinc-500 hover:text-zinc-300 transition-colors select-none">
                {partner.short}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
