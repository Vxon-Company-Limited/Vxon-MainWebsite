"use client";

import { motion } from "framer-motion";
import { t } from "@/lib/translations/site";
import { comingSoon as comingSoonTranslations } from "@/lib/translations/product-fort";

export function ComingSoon({ locale }: { locale: string }) {
  const cs = t(comingSoonTranslations, locale);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-400 mb-8"
        >
          <span
            className="w-2 h-2 rounded-full bg-violet-500"
            style={{ animation: "pulseDot 2s ease-in-out infinite" }}
          />
          {cs.title}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
        >
          {cs.subtitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg text-zinc-400 mb-10"
        >
          {cs.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#demo"
            className="px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-full hover:bg-blue-500 hover:shadow-[0_0_24px_rgba(59,130,246,0.3)] transition-all"
          >
            {cs.buttons[0]}
          </a>
          <a
            href="#form"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white text-base font-medium rounded-full hover:bg-white/10 transition-all"
          >
            {cs.buttons[1]}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
