"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlight?: boolean;
  badge?: string;
}

interface PricingPreviewProps {
  badge?: string;
  title: string;
  description?: string;
  plans: PricingPlan[];
}

export function PricingPreview({ badge, title, description, plans }: PricingPreviewProps) {
  return (
    <section className="py-24 px-6 relative z-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {badge && <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{badge}</span>}
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-3 mb-4">{title}</h2>
          {description && <p className="text-zinc-400 text-lg">{description}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={clsx(
                "relative rounded-2xl p-8 flex flex-col h-full border transition-colors",
                plan.highlight
                  ? "bg-blue-500/10 border-blue-500/30"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              )}
            >
              {plan.badge && (
                <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                  <span className="bg-blue-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-zinc-400 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-white">{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaHref}
                className={clsx(
                  "mt-auto w-full py-3 rounded-xl font-medium text-center transition-colors text-sm",
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
