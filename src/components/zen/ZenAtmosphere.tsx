"use client";

import { useIsZen } from "@/hooks/useThemeAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Bokeh {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  hue: number;
}

function generateBokeh(count: number): Bokeh[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 40 + Math.random() * 160,
    opacity: 0.03 + Math.random() * 0.06,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * -20,
    hue: Math.random() > 0.6 ? 35 : 140,
  }));
}

export function ZenAtmosphere() {
  const isZen = useIsZen();
  const [bokeh] = useState(() => generateBokeh(12));

  return (
    <AnimatePresence>
      {isZen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 z-[1] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Bokeh circles */}
          {bokeh.map((b) => (
            <div
              key={b.id}
              className="absolute rounded-full zen-bokeh"
              style={{
                left: `${b.x}%`,
                top: `${b.y}%`,
                width: b.size,
                height: b.size,
                background: `radial-gradient(circle, hsla(${b.hue}, 40%, 55%, ${b.opacity}) 0%, transparent 70%)`,
                animationDuration: `${b.duration}s`,
                animationDelay: `${b.delay}s`,
              }}
            />
          ))}

          {/* God rays from top-right */}
          <div className="absolute inset-0 zen-god-rays" />

          {/* Warm light vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 70% 20%, rgba(255,220,160,0.06) 0%, transparent 70%)`,
            }}
          />

          {/* Mist layers */}
          <div className="absolute inset-0 zen-mist-1" />
          <div className="absolute inset-0 zen-mist-2" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
