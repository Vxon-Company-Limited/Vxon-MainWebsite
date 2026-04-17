"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeader({ badge, title, description, center = false, className = "" }: SectionHeaderProps) {
  const align = center ? "text-center mx-auto" : "";
  return (
    <div className={`mb-16 ${align} ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-500 font-semibold tracking-wider uppercase text-sm"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-zinc-400 text-lg mt-4 ${center ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
