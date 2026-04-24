"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Clock, Shield, Server, Bot, Users, TrendingUp, Award, Zap } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { ProductHero } from "@/components/shared/ProductHero";
import { ProductCTA } from "@/components/shared/ProductCTA";
import { drawConcentricRings } from "@/animations/concentricRings";
import { t } from "@/lib/translations/site";
import { pricingPage } from "@/lib/translations/pricing";

export function PricingPage({ locale }: { locale: string }) {
  const s = t(pricingPage, locale);

  const apiPlans = s.apiPlans.map((p) => ({
    ...p,
    features: [...p.features],
    ctaHref: "badge" in p && p.badge ? "#signup" : p.price === s.apiPlans[2].price ? "#contact" : "#signup",
    highlight: "badge" in p && !!p.badge,
  }));

  return (
    <>
      <ProductHero
        badge={s.hero.badge}
        title={s.hero.title}
        subtitle={s.hero.subtitle}
        buttons={[
          { label: s.hero.buttons[0], href: "#signup", primary: true },
          { label: s.hero.buttons[1], href: "#contact" },
        ]}
        draw={drawConcentricRings}
      />

      {/* Trust Indicators */}
      <section className="py-16 px-6 relative z-10 bg-surface border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[Users, TrendingUp, Award, Zap].map((Icon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <Icon className="w-6 h-6 text-blue-500 mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{s.trustIndicators[idx].value}</div>
                <div className="text-sm text-zinc-500">{s.trustIndicators[idx].label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VxonAPI Pricing Cards - Enhanced */}
      <section className="py-24 px-6 relative z-10 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{s.apiSection.badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-3 mb-4">{s.apiSection.title}</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{s.apiSection.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {apiPlans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={clsx(
                  "relative rounded-2xl p-8 flex flex-col h-full border transition-all duration-300",
                  plan.highlight
                    ? "bg-gradient-to-b from-blue-500/15 to-transparent border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                )}
              >
                {/* Recommended Badge */}
                {plan.highlight && "badge" in plan && plan.badge && (
                  <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-zinc-400">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  {plan.price !== s.apiPlans[0].price && plan.price !== s.apiPlans[2].price && (
                    <span className="text-zinc-500 text-sm ml-2">{s.perMonth}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <Check className={clsx("w-4 h-4 shrink-0 mt-0.5", plan.highlight ? "text-blue-400" : "text-blue-500")} />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
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

          {/* Money Back Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center justify-center gap-3 text-zinc-500 text-sm"
          >
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>{s.guarantee}</span>
          </motion.div>
        </div>
      </section>

      {/* VxonAI Enterprise Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/20 via-[#09090b] to-[#09090b] p-10 md:p-16 overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-6 h-6 text-blue-500" />
                <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{s.aiSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">{s.aiSection.title}</h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl">{s.aiSection.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {s.aiSection.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
              >
                {s.aiSection.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section className="py-24 px-6 relative z-10 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{s.comingSoonSection.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-3">{s.comingSoonSection.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {s.comingSoonSection.products.map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1.5 text-xs text-zinc-500 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                    <Clock className="w-3 h-3" />
                    {s.comingSoonSection.badge}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  {idx === 0 ? <Bot className="w-5 h-5 text-blue-500" /> : <Shield className="w-5 h-5 text-blue-500" />}
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                </div>
                <p className="text-sm text-blue-400 mb-2">{product.subtitle}</p>
                <p className="text-zinc-400 text-sm">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">{s.faq.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-3">{s.faq.title}</h2>
          </div>
          <div className="space-y-6">
            {s.faq.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductCTA
        title={s.cta.title}
        subtitle={s.cta.subtitle}
        primaryLabel={s.cta.primaryLabel}
        primaryHref="#signup"
      />
    </>
  );
}
