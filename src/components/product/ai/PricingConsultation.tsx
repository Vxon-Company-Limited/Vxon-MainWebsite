"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import Link from "next/link";
import { t } from "@/lib/translations/site";
import { pricingConsultation } from "@/lib/translations/product-ai";

export function PricingConsultation({ locale }: { locale: string }) {
  const tx = t(pricingConsultation, locale);

  return (
    <section className="py-24 px-6 relative z-10 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-500 font-semibold tracking-wider uppercase text-sm">{tx.badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight mb-4">
            {tx.title}
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            {tx.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#demo"
            className="group w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 text-base font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
          >
            {tx.primaryLabel}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#whitepaper"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white text-base font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <FileDown className="w-4 h-4" />
            {tx.secondaryLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
