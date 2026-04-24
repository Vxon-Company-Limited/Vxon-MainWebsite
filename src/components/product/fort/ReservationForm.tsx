"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { t } from "@/lib/translations/site";
import { reservationForm as rfTranslations } from "@/lib/translations/product-fort";

export function ReservationForm({ locale }: { locale: string }) {
  const [submitted, setSubmitted] = useState(false);
  const rf = t(rfTranslations, locale);

  return (
    <section id="form" className="py-24 px-6 relative z-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            {rf.title}
          </h2>
          <p className="text-zinc-400">{rf.subtitle}</p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 bg-surface-elevated border border-white/10 rounded-2xl"
          >
            <div className="text-2xl mb-2">&#10003;</div>
            <p className="text-white font-semibold">{rf.success.title}</p>
            <p className="text-sm text-zinc-400 mt-2">{rf.success.description}</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-elevated border border-white/10 rounded-2xl p-8 space-y-5"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">{rf.fields.name}</label>
                <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors" placeholder={rf.fields.name} />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">{rf.fields.company}</label>
                <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors" placeholder={rf.fields.company} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">{rf.fields.email}</label>
                <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors" placeholder="work@company.com" />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">{rf.fields.phone}</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors" placeholder={rf.fields.phone} />
              </div>
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">{rf.fields.description}</label>
              <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors resize-none" placeholder={rf.fields.description} />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-200 transition-all"
            >
              {rf.submit}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
