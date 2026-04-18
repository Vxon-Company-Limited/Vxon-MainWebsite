"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { t } from "@/lib/translations/site";
import { gettingStarted } from "@/lib/translations/product-api";

const codeExample = `curl https://api.vxon.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`;

export function GettingStarted({ locale }: { locale: string }) {
  const s = t(gettingStarted, locale);
  const steps = s.steps.map((title, i) => ({ num: i + 1, title }));
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Steps */}
          <div className="lg:w-2/5">
            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Getting Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight mb-8">{s.title}</h2>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    {step.num}
                  </div>
                  <span className="text-zinc-300 text-base">{step.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Code block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/5 w-full"
          >
            <div className="relative bg-surface-elevated border border-white/10 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <button
                  onClick={handleCopy}
                  className="text-xs text-zinc-500 hover:text-white transition-colors px-2 py-1 rounded bg-white/5 hover:bg-white/10"
                >
                  {copied ? s.copied : s.copyCode}
                </button>
              </div>
              <pre className="p-6 text-sm text-zinc-300 overflow-x-auto font-mono leading-relaxed">
                <code>{codeExample}</code>
                <span className="code-cursor" />
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
