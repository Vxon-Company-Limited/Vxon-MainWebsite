"use client";

import { motion } from "framer-motion";
import { t } from "@/lib/translations/site";
import { departmentCoverage } from "@/lib/translations/product-claw";

const angles = [0, 60, 120, 180, 240, 300];

export function DepartmentCoverage({ locale }: { locale: string }) {
  const dc = t(departmentCoverage, locale);
  const departments = dc.departments.map((d, i) => ({ ...d, angle: angles[i] }));
  return (
    <section className="py-24 px-6 relative z-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-500 font-semibold tracking-wider uppercase text-sm">{dc.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight">{dc.title}</h2>
          <p className="text-zinc-400 text-lg mt-4">{dc.subtitle}</p>
        </div>

        {/* Radial diagram */}
        <div className="relative w-full max-w-lg mx-auto aspect-square">
          {/* Center node */}
          <motion.div
            animate={{ boxShadow: [
              "0 0 20px rgba(139,92,246,0.1)",
              "0 0 40px rgba(139,92,246,0.2)",
              "0 0 20px rgba(139,92,246,0.1)",
            ]}}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-violet-600/20 border border-violet-500/40 flex items-center justify-center z-10"
          >
            <span className="text-sm font-bold text-white">{dc.center}</span>
          </motion.div>

          {/* Department nodes */}
          {departments.map((dept, idx) => {
            const rad = (dept.angle * Math.PI) / 180;
            const r = 42; // percentage from center
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="absolute z-10"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              >
                {/* Connection line (SVG would be better but this is simpler) */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-surface-elevated border border-white/10 flex flex-col items-center justify-center mx-auto mb-1">
                    <span className="text-xs font-semibold text-white">{dept.name}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">{dept.description}</span>
                </div>
              </motion.div>
            );
          })}

          {/* Connection lines using SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {departments.map((dept, idx) => {
              const rad = (dept.angle * Math.PI) / 180;
              const r = 42;
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              return (
                <motion.line
                  key={idx}
                  x1="50" y1="50" x2={x} y2={y}
                  stroke="rgba(139,92,246,0.2)"
                  strokeWidth="0.3"
                  animate={{ opacity: [0.1, 0.4, 0.1] }}
                  transition={{ duration: 3 + idx * 0.6, repeat: Infinity, ease: "easeInOut" }}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
