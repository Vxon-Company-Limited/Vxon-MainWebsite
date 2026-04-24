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

type AccentColor = "blue" | "emerald" | "violet" | "orange";

interface PricingPreviewProps {
  badge?: string;
  title: string;
  description?: string;
  plans: PricingPlan[];
  accentColor?: AccentColor;
}

const accentColorMap: Record<AccentColor, { badge: string; highlightBg: string; highlightBorder: string; shadow: string; icon: string }> = {
  blue: {
    badge: "bg-blue-500",
    highlightBg: "from-blue-500/15 to-transparent",
    highlightBorder: "border-blue-500/40",
    shadow: "shadow-blue-500/15",
    icon: "text-blue-400",
  },
  emerald: {
    badge: "bg-emerald-500",
    highlightBg: "from-emerald-500/15 to-transparent",
    highlightBorder: "border-emerald-500/40",
    shadow: "shadow-emerald-500/15",
    icon: "text-emerald-400",
  },
  violet: {
    badge: "bg-violet-500",
    highlightBg: "from-violet-500/15 to-transparent",
    highlightBorder: "border-violet-500/40",
    shadow: "shadow-violet-500/15",
    icon: "text-violet-400",
  },
  orange: {
    badge: "bg-orange-500",
    highlightBg: "from-orange-500/15 to-transparent",
    highlightBorder: "border-orange-500/40",
    shadow: "shadow-orange-500/15",
    icon: "text-orange-400",
  },
};

export function PricingPreview({ badge, title, description, plans, accentColor = "blue" }: PricingPreviewProps) {
  const colors = accentColorMap[accentColor];
  return (
    <section className="py-24 px-6 relative z-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {badge && <span className={clsx("font-semibold tracking-wider uppercase text-sm", colors.icon)}>{badge}</span>}
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
                "relative rounded-2xl p-8 flex flex-col h-full border transition-all duration-300",
                plan.highlight
                  ? clsx("bg-gradient-to-b", colors.highlightBg, colors.highlightBorder, "shadow-[0_0_40px_rgba(59,130,246,0.15)]")
                  : "bg-white/5 border-white/10 hover:border-white/20"
              )}
            >
              {plan.badge && (
                <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                  <span className={clsx("text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg", colors.badge)}>
                    {plan.badge}
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-zinc-400">{plan.description}</p>
              </div>
              <div className="mb-6 pb-6 border-b border-white/10">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <Check className={clsx("w-4 h-4 shrink-0 mt-0.5", colors.icon)} />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaHref}
                className={clsx(
                  "mt-auto w-full py-3.5 rounded-xl font-semibold text-center transition-all text-sm",
                  plan.highlight
                    ? "bg-white text-zinc-900 hover:bg-zinc-200"
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
