"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  alphaDir: number;
  size: number;
  hueIndex: number;
}

const DARK_HUES = [
  "59, 130, 246",
  "139, 92, 246",
  "6, 182, 212",
];

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;

    const getGlowRgb = () => {
      const style = getComputedStyle(document.documentElement);
      return style.getPropertyValue("--theme-glow-rgb").trim() || "59, 130, 246";
    };

    const isZen = () => document.documentElement.classList.contains("zen");

    let glowRgb = getGlowRgb();
    let zenMode = isZen();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      glowRgb = getGlowRgb();
      zenMode = isZen();
    };

    const spawn = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = zenMode
        ? Math.min(20, Math.floor((w * h) / 60000))
        : Math.min(50, Math.floor((w * h) / 30000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          alpha: Math.random() * 0.1,
          alphaDir: (Math.random() > 0.5 ? 1 : -1) * (0.002 + Math.random() * 0.003),
          size: zenMode ? 1 + Math.random() : 1 + Math.random() * 2.5,
          hueIndex: Math.floor(Math.random() * DARK_HUES.length),
        });
      }
    };

    resize();
    spawn();
    window.addEventListener("resize", resize);

    const observer = new MutationObserver(() => {
      glowRgb = getGlowRgb();
      const wasZen = zenMode;
      zenMode = isZen();
      if (wasZen !== zenMode) spawn();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const loop = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const maxAlpha = zenMode ? 0.15 : 0.25;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir;
        if (p.alpha <= 0) { p.alpha = 0; p.alphaDir = Math.abs(p.alphaDir); }
        if (p.alpha >= maxAlpha) { p.alpha = maxAlpha; p.alphaDir = -Math.abs(p.alphaDir); }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      if (!zenMode) {
        const maxDist = 100;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDist) {
              const lineAlpha = 0.04 * (1 - dist / maxDist);
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(${glowRgb},${lineAlpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const rgb = zenMode ? glowRgb : DARK_HUES[p.hueIndex];
        ctx.fillStyle = `rgba(${rgb},${p.alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
      style={{ willChange: "transform" }}
    />
  );
}
