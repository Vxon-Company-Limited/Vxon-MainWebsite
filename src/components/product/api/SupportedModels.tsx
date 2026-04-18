"use client";

import { motion } from "framer-motion";
import { t } from "@/lib/translations/site";
import { supportedModels } from "@/lib/translations/product-api";

const modelDefs = [
  { key: "OpenAI", versions: "GPT-4o / GPT-4.1 / o1", color: "from-green-400 to-emerald-600" },
  { key: "Anthropic", versions: "Claude Opus 4 / Sonnet 4 / Haiku", color: "from-orange-400 to-amber-600" },
  { key: "Google", versions: "Gemini 2.5 Pro / Gemini 2.5 Flash", color: "from-blue-400 to-cyan-600" },
  { key: "DeepSeek", versions: "DeepSeek-V3 / DeepSeek-R1", color: "from-indigo-400 to-blue-600" },
  { key: "alibabaCloud", versions: "Qwen-Max / Qwen-Plus / Qwen-Turbo", color: "from-violet-400 to-purple-600" },
  { key: "zhipuAI", versions: "GLM-4 / GLM-Z1", color: "from-sky-400 to-blue-600" },
  { key: "moonshot", versions: "Kimi K2.5 / Moonshot", color: "from-pink-400 to-rose-600" },
  { key: "SiliconFlow", versions: null, color: "from-teal-400 to-emerald-600" },
];

export function SupportedModels({ locale }: { locale: string }) {
  const s = t(supportedModels, locale);
  const providerNames = s.providerNames as Record<string, string>;
  const models = modelDefs.map((m) => ({
    name: providerNames[m.key] ?? m.key,
    versions: m.versions ?? s.moreModels,
    color: m.color,
  }));
  return (
    <section className="py-24 px-6 relative z-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Supported Models</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">{s.title}</h2>
          <p className="text-zinc-400 text-lg mt-4">{s.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {models.map((model, idx) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group bg-surface-elevated border border-white/10 rounded-xl p-5 hover:border-white/20 hover:shadow-[0_0_16px_rgba(59,130,246,0.08)] transition-all text-center"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${model.color} mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm`}>
                {model.name[0]}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{model.name}</h3>
              <p className="text-xs text-zinc-500">{model.versions}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
