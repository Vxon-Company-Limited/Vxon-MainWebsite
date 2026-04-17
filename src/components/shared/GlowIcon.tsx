"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";

interface GlowIconProps {
  icon: LucideIcon;
  color?: string;
  size?: number;
  className?: string;
}

export function GlowIcon({ icon: Icon, color = "from-blue-400 to-blue-600", size = 48, className = "" }: GlowIconProps) {
  const [rgb, setRgb] = useState("59,130,246");

  useEffect(() => {
    const update = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--theme-glow-rgb").trim();
      if (v) setRgb(v);
    };
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      animate={{ boxShadow: [
        `0 0 8px rgba(${rgb},0.05)`,
        `0 0 16px rgba(${rgb},0.15)`,
        `0 0 8px rgba(${rgb},0.05)`,
      ]}}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={`bg-gradient-to-br ${color} rounded-xl flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon className="text-white" style={{ width: size * 0.5, height: size * 0.5 }} />
    </motion.div>
  );
}
