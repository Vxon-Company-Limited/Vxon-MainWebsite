"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const plans = [
  {
    name: "体验版",
    desc: "适合个人体验和轻量测试",
    price: "免费",
    features: ["送 100 元额度", "支持 ChatGPT 3.5", "1000 次调用/天", "基础社区支持"],
    buttonText: "立即注册",
    highlight: false,
  },
  {
    name: "专业版",
    desc: "适合个人开发者和小团队",
    price: "7折起",
    features: ["全模型覆盖", "无日调用限制", "API 优先响应", "余额实时查询", "技术支持"],
    buttonText: "免费试用",
    highlight: true,
    badge: "推荐",
  },
  {
    name: "企业版",
    desc: "适合企业团队和大规模使用",
    price: "联系报价",
    features: ["统一账户管理", "额度灵活分配", "专属技术支持", "SLA 保障", "私有化部署可选"],
    buttonText: "联系我们",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative z-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-4 mb-4">灵活的接入方案</h2>
          <p className="text-zinc-400 text-lg">从个人探索到企业私有化，满足不同发展阶段。</p>
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
              <p className="text-sm text-zinc-400 mb-6">{plan.desc}</p>

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
                href="#signup"
                className={clsx(
                  "mt-auto w-full py-3 rounded-xl font-medium text-center transition-colors text-sm",
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
