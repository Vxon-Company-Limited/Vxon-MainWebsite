"use client";

import { useIsZen } from "@/hooks/useThemeAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  hue: number;
}

interface DataStream {
  id: number;
  x: number;
  height: number;
  duration: number;
  delay: number;
  hue: number;
}

interface Hexagon {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  hue: number;
  opacity: number;
}

function generateOrbs(count: number): Orb[] {
  const hues = [220, 260, 190, 170, 240, 200];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 100 + Math.random() * 200,
    opacity: 0.02 + Math.random() * 0.04,
    duration: 20 + Math.random() * 15,
    delay: Math.random() * -20,
    hue: hues[i % hues.length],
  }));
}

function generateStreams(count: number): DataStream[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 15 + (i * 35) + Math.random() * 15,
    height: 30 + Math.random() * 40,
    duration: 6 + Math.random() * 4,
    delay: Math.random() * -6,
    hue: [220, 260, 190][i % 3],
  }));
}

function generateHexagons(count: number): Hexagon[] {
  const hues = [220, 260, 190, 240];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 30 + Math.random() * 50,
    rotation: Math.random() * 360,
    duration: 30 + Math.random() * 20,
    delay: Math.random() * -25,
    hue: hues[i % hues.length],
    opacity: 0.015 + Math.random() * 0.025,
  }));
}

function HexSvg({ size, hue, opacity }: { size: number; hue: number; opacity: number }) {
  const r = size / 2;
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${r + r * Math.cos(angle)},${r + r * Math.sin(angle)}`;
  }).join(" ");

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon
        points={points}
        fill="none"
        stroke={`hsla(${hue}, 60%, 60%, ${opacity})`}
        strokeWidth="0.5"
      />
    </svg>
  );
}

export function DarkAtmosphere() {
  const isZen = useIsZen();
  const [orbs] = useState(() => generateOrbs(8));
  const [streams] = useState(() => generateStreams(3));
  const [hexagons] = useState(() => generateHexagons(6));

  return (
    <AnimatePresence>
      {!isZen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 z-[1] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Ambient glow orbs */}
          {orbs.map((o) => (
            <div
              key={o.id}
              className="absolute rounded-full dark-orb"
              style={{
                left: `${o.x}%`,
                top: `${o.y}%`,
                width: o.size,
                height: o.size,
                background: `radial-gradient(circle, hsla(${o.hue}, 60%, 50%, ${o.opacity}) 0%, transparent 70%)`,
                animationDuration: `${o.duration}s`,
                animationDelay: `${o.delay}s`,
              }}
            />
          ))}

          {/* Aurora gradient bands */}
          <div
            className="absolute inset-0 dark-aurora"
            style={{
              background: [
                "linear-gradient(135deg, transparent 0%, rgba(99,102,241,0.03) 20%, transparent 40%)",
                "linear-gradient(225deg, transparent 0%, rgba(139,92,246,0.025) 25%, transparent 50%)",
                "linear-gradient(315deg, transparent 10%, rgba(6,182,212,0.02) 30%, transparent 55%)",
              ].join(", "),
              animation: "darkAuroraPulse 20s ease-in-out infinite",
            }}
          />

          {/* Nebula gradient layer */}
          <div
            className="absolute inset-0"
            style={{
              background: [
                "radial-gradient(ellipse 120% 80% at 20% 30%, rgba(99,102,241,0.04) 0%, transparent 50%)",
                "radial-gradient(ellipse 80% 120% at 80% 70%, rgba(139,92,246,0.03) 0%, transparent 50%)",
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(6,182,212,0.02) 0%, transparent 60%)",
              ].join(", "),
              animation: "darkNebulaDrift 40s ease-in-out infinite",
            }}
          />

          {/* Floating hexagons */}
          {hexagons.map((hex) => (
            <div
              key={hex.id}
              className="absolute dark-hex"
              style={{
                left: `${hex.x}%`,
                top: `${hex.y}%`,
                width: hex.size,
                height: hex.size,
                transform: `rotate(${hex.rotation}deg)`,
                animationDuration: `${hex.duration}s`,
                animationDelay: `${hex.delay}s`,
              }}
            >
              <HexSvg size={hex.size} hue={hex.hue} opacity={hex.opacity} />
            </div>
          ))}

          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.3) 100%)",
            }}
          />

          {/* Data stream lines */}
          {streams.map((s) => (
            <div
              key={s.id}
              className="absolute top-0"
              style={{
                left: `${s.x}%`,
                width: "1px",
                height: `${s.height}%`,
                background: `linear-gradient(180deg, transparent, hsla(${s.hue}, 70%, 60%, 0.06), transparent)`,
                animation: `darkDataStream ${s.duration}s ease-in-out infinite`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}

          {/* Noise texture */}
          <div className="absolute inset-0 dark-noise opacity-[0.015]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
