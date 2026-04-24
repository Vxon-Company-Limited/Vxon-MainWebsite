"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, Zap, Shield, Users, Building2, Code2, BarChart3 } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import type { Locale } from "@/lib/translations/site";

const comparisonData = {
  zh: {
    badge: "产品对比",
    title: "找到最适合你的 AI 解决方案",
    subtitle: "四大产品覆盖从大模型聚合到企业级私有化部署的全部场景",
    products: [
      { name: "VxonAPI", subtitle: "大模型聚合平台", icon: Zap, color: "blue" },
      { name: "VxonAI", subtitle: "企业级AI私有化部署", icon: Shield, color: "emerald" },
      { name: "VxonClaw", subtitle: "企业智能体平台", icon: BarChart3, color: "violet" },
      { name: "VxonFort ZT", subtitle: "零信任AI编码堡垒机", icon: Code2, color: "orange" },
    ],
    criteria: [
      {
        category: "核心定位",
        items: [
          { label: "适用场景", values: ["API调用", "私有化部署", "业务流程", "代码安全"] },
          { label: "目标用户", values: ["开发者/小团队", "大型企业", "业务部门", "研发团队"] },
        ],
      },
      {
        category: "价格模式",
        items: [
          { label: "起步价格", values: ["免费额度", "联系报价", "免费体验", "预约报价"] },
          { label: "计费方式", values: ["按量计费", "定制方案", "按量计费", "定制方案"] },
        ],
      },
      {
        category: "核心能力",
        items: [
          { label: "多模型支持", values: [true, true, true, true] },
          { label: "私有化部署", values: [false, true, true, true] },
          { label: "数据不出内网", values: [false, true, true, true] },
          { label: "统一账户管理", values: [true, true, true, true] },
          { label: "SLA保障", values: [false, true, true, true] },
        ],
      },
      {
        category: "适用行业",
        items: [
          { label: "互联网/科技", values: [true, true, true, true] },
          { label: "金融/银行", values: [false, true, true, true] },
          { label: "政务/教育", values: [false, true, true, true] },
          { label: "制造/零售", values: [true, true, true, false] },
        ],
      },
    ],
    cta: {
      title: "不知道选哪个产品？",
      subtitle: "我们的专家团队可以帮你选择最适合的解决方案",
      button: "咨询专家",
    },
  },
  en: {
    badge: "Compare Products",
    title: "Find the Perfect AI Solution",
    subtitle: "Four products covering everything from LLM aggregation to enterprise private deployment",
    products: [
      { name: "VxonAPI", subtitle: "LLM Aggregation Platform", icon: Zap, color: "blue" },
      { name: "VxonAI", subtitle: "Enterprise AI Private Deployment", icon: Shield, color: "emerald" },
      { name: "VxonClaw", subtitle: "Enterprise Agent Platform", icon: BarChart3, color: "violet" },
      { name: "VxonFort ZT", subtitle: "Zero-Trust AI Coding Bastion", icon: Code2, color: "orange" },
    ],
    criteria: [
      {
        category: "Core Focus",
        items: [
          { label: "Use Case", values: ["API Access", "Private Deploy", "Business Process", "Code Security"] },
          { label: "Target Users", values: ["Developers/Small Teams", "Large Enterprises", "Business Teams", "R&D Teams"] },
        ],
      },
      {
        category: "Pricing Model",
        items: [
          { label: "Starting Price", values: ["Free credits", "Custom quote", "Free trial", "Reserve quote"] },
          { label: "Billing", values: ["Pay-as-you-go", "Custom plan", "Pay-as-you-go", "Custom plan"] },
        ],
      },
      {
        category: "Core Capabilities",
        items: [
          { label: "Multi-model Support", values: [true, true, true, true] },
          { label: "Private Deployment", values: [false, true, true, true] },
          { label: "Data Stays Intranet", values: [false, true, true, true] },
          { label: "Unified Account Mgmt", values: [true, true, true, true] },
          { label: "SLA Guarantee", values: [false, true, true, true] },
        ],
      },
      {
        category: "Industries",
        items: [
          { label: "Tech/Internet", values: [true, true, true, true] },
          { label: "Finance/Banking", values: [false, true, true, true] },
          { label: "Government/Education", values: [false, true, true, true] },
          { label: "Manufacturing/Retail", values: [true, true, true, false] },
        ],
      },
    ],
    cta: {
      title: "Not sure which product?",
      subtitle: "Our experts can help you choose the best solution",
      button: "Consult Experts",
    },
  },
};

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", icon: "text-blue-500" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", icon: "text-emerald-500" },
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-400", icon: "text-violet-500" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", icon: "text-orange-500" },
};

export function ComparePage({ locale }: { locale: string }) {
  const s = comparisonData[locale as keyof typeof comparisonData] || comparisonData.en;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500" />
            {s.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 hero-title-glow"
          >
            {s.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400"
          >
            {s.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="px-6 relative z-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {s.products.map((product, idx) => {
              const colors = colorMap[product.color];
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={clsx(
                    "relative rounded-2xl p-6 border bg-surface text-center",
                    colors.border
                  )}
                >
                  <div className={clsx("w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center", colors.bg)}>
                    <product.icon className={clsx("w-6 h-6", colors.icon)} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-sm text-zinc-400">{product.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 relative z-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-surface overflow-hidden">
            {s.criteria.map((section, sectionIdx) => (
              <div key={section.category}>
                {/* Category Header */}
                <div className="px-6 py-4 bg-white/[0.02] border-b border-white/5">
                  <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">{section.category}</h3>
                </div>

                {/* Items */}
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (sectionIdx * section.items.length + itemIdx) * 0.03 }}
                    className={clsx(
                      "grid grid-cols-5 border-b border-white/5 last:border-b-0",
                      itemIdx % 2 === 0 ? "bg-white/[0.01]" : ""
                    )}
                  >
                    {/* Label */}
                    <div className="px-6 py-4 flex items-center">
                      <span className="text-sm text-zinc-300">{item.label}</span>
                    </div>

                    {/* Values */}
                    {item.values.map((value, valIdx) => (
                      <div
                        key={valIdx}
                        className={clsx(
                          "px-4 py-4 flex items-center justify-center text-center",
                          sectionIdx === 2 && typeof value === "boolean" ? "" : "border-l border-white/5"
                        )}
                      >
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check className={clsx("w-5 h-5", colorMap[s.products[valIdx].color].icon)} />
                          ) : (
                            <X className="w-5 h-5 text-zinc-600" />
                          )
                        ) : (
                          <span className={clsx("text-sm", colorMap[s.products[valIdx].color].text)}>
                            {value}
                          </span>
                        )}
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 relative z-10 pb-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/30 via-surface to-surface p-10 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{s.cta.title}</h2>
              <p className="text-zinc-400 mb-6">{s.cta.subtitle}</p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-all"
              >
                {s.cta.button}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
