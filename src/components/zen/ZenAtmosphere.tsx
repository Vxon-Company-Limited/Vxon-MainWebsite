"use client";

import { useIsZen } from "@/hooks/useThemeAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

interface DandelionSeed {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  driftAngle: number;
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

function generateSeeds(count: number): DandelionSeed[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: 20 + Math.random() * 60,
    size: 3 + Math.random() * 4,
    opacity: 0.06 + Math.random() * 0.08,
    duration: 20 + Math.random() * 15,
    delay: Math.random() * -15,
    driftAngle: -30 + Math.random() * 60,
  }));
}

export function ZenAtmosphere() {
  const isZen = useIsZen();
  const [bokeh] = useState(() => generateBokeh(12));
  const [seeds] = useState(() => generateSeeds(8));

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

          {/* Floating dandelion seeds */}
          {seeds.map((s) => (
            <div
              key={`seed-${s.id}`}
              className="absolute zen-seed"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                animationDuration: `${s.duration}s`,
                animationDelay: `${s.delay}s`,
              }}
            >
              <svg width={s.size * 6} height={s.size * 8} viewBox="0 0 24 32" style={{ opacity: s.opacity }}>
                {/* Seed body */}
                <ellipse cx="12" cy="26" rx="1.5" ry="3" fill="rgba(120,100,70,0.4)" />
                {/* Stem */}
                <line x1="12" y1="23" x2="12" y2="12" stroke="rgba(120,100,70,0.3)" strokeWidth="0.5" />
                {/* Pappus (fluffy top) */}
                {Array.from({ length: 8 }, (_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const len = 8 + Math.random() * 3;
                  return (
                    <line
                      key={i}
                      x1="12"
                      y1="12"
                      x2={12 + Math.cos(angle) * len}
                      y2={12 + Math.sin(angle) * len}
                      stroke="rgba(200,190,160,0.35)"
                      strokeWidth="0.3"
                    />
                  );
                })}
                <circle cx="12" cy="12" r="1.5" fill="rgba(200,190,160,0.2)" />
              </svg>
            </div>
          ))}

          {/* Water shimmer at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[15%] zen-water-shimmer" />

          {/* Mist layers */}
          <div className="absolute inset-0 zen-mist-1" />
          <div className="absolute inset-0 zen-mist-2" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
