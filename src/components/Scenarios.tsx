"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import { t, scenarios as scenariosT } from "@/lib/translations/site";

const scenarios = [
  { id: "dev", icon: Code2, color: "text-blue-400 bg-blue-500/10", href: "/product/ai" },
  { id: "ops", icon: BarChart3, color: "text-violet-400 bg-violet-500/10", href: "/product/claw" },
  { id: "biz", icon: Briefcase, color: "text-emerald-400 bg-emerald-500/10", href: "/product/claw" },
];

export function Scenarios({ locale }: { locale: string }) {
  const s = t(scenariosT, locale);
  return (
    <section id="scenarios" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{s.badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">{s.title}</h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
            {s.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((scenario, idx) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-surface-elevated border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all flex flex-col h-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6 ${scenario.color}`}>
                <scenario.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{s.items[idx].title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed flex-grow mb-6">{s.items[idx].description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {s.items[idx].roles.map((role) => (
                  <span key={role} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[11px] text-zinc-300">
                    {role}
                  </span>
                ))}
              </div>

              <Link
                href={scenario.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-blue-400 transition-colors"
              >
                {s.learnMore}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
