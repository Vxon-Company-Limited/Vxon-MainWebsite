"use client";

import { ArrowRight, MessageSquareCode } from "lucide-react";
import Link from "next/link";

interface ProductCTAProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function ProductCTA({ title, subtitle, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: ProductCTAProps) {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10 text-center bg-card border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px] pointer-events-none" />
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight relative z-10">{title}</h2>
        <p className="text-xl text-zinc-400 mb-10 relative z-10">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <Link
            href={primaryHref}
            className="group/btn px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-full hover:bg-blue-500 hover:shadow-[0_0_24px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2"
          >
            {primaryLabel}
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white text-base font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquareCode className="w-5 h-5" />
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
