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
}

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

    let glowRgb = getGlowRgb();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      glowRgb = getGlowRgb();
    };

    const spawn = () => {
      const count = Math.min(20, Math.floor((window.innerWidth * window.innerHeight) / 60000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          alpha: Math.random() * 0.1,
          alphaDir: (Math.random() > 0.5 ? 1 : -1) * (0.002 + Math.random() * 0.003),
          size: 1 + Math.random(),
        });
      }
    };

    resize();
    spawn();
    window.addEventListener("resize", resize);

    const observer = new MutationObserver(() => { glowRgb = getGlowRgb(); });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const loop = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir;
        if (p.alpha <= 0) { p.alpha = 0; p.alphaDir = Math.abs(p.alphaDir); }
        if (p.alpha >= 0.15) { p.alpha = 0.15; p.alphaDir = -Math.abs(p.alphaDir); }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${glowRgb},${p.alpha})`;
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
