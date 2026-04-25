"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Shield, BrainCircuit, Box } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { t, products as productsT } from "@/lib/translations/site";

const products = [
  { id: "api", title: "VxonAPI", icon: Server, color: "from-sky-400 to-blue-600", soon: false },
  { id: "ai", title: "VxonAI", icon: Box, color: "from-blue-400 to-indigo-600", soon: false },
  { id: "claw", title: "VxonClaw", icon: BrainCircuit, color: "from-indigo-400 to-violet-600", soon: false },
  { id: "fort", title: "VxonFort ZT", icon: Shield, color: "from-violet-400 to-purple-600", soon: true },
];

export function Products({ locale }: { locale: string }) {
  const s = t(productsT, locale);
  return (
    <section id="products" className="py-24 relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{s.badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">{s.title}</h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-2xl">{s.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className={clsx(
                "group relative bg-surface-elevated border rounded-2xl p-6 overflow-hidden transition-all flex flex-col h-full card-shimmer",
                product.soon
                  ? "border-violet-500/10 hover:border-violet-500/25"
                  : "border-white/10 hover:border-white/20"
              )}
              style={product.soon ? { animation: "borderHeartbeat 3.5s ease-in-out infinite" } : undefined}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-50 transition-opacity`} />

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Icon with glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 8px rgba(59,130,246,0.05)",
                    "0 0 16px rgba(59,130,246,0.15)",
                    "0 0 8px rgba(59,130,246,0.05)",
                  ],
                }}
                transition={{ duration: 5 + idx, repeat: Infinity, ease: "easeInOut" }}
                className={clsx("w-12 h-12 rounded-xl flex items-center justify-center mb-6", `bg-gradient-to-br ${product.color}`)}
              >
                <product.icon className="w-6 h-6 text-white" />
              </motion.div>

              {product.soon && (
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <span
                    className="w-[6px] h-[6px] rounded-full bg-violet-500"
                    style={{ animation: "pulseDot 2s ease-in-out infinite" }}
                  />
                  <span className="px-2 py-1 rounded bg-white/10 text-xs text-white/70">{s.comingSoon}</span>
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{product.title}</h3>
              <p className="text-sm font-medium text-zinc-500 mb-4">{s.items[idx].subtitle}</p>

              <p className="text-sm text-zinc-400 leading-relaxed flex-grow mb-6">{s.items[idx].description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {s.items[idx].tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[11px] text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 mt-auto">
                <Link
                  href={`/product/${product.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-blue-400 transition-colors"
                >
                  {product.soon ? s.learnMore : s.enterProduct}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
