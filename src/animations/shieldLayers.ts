import type { DrawFunction } from "@/components/shared/CanvasAnimation";

export const drawShieldLayers: DrawFunction = (ctx, canvas, time) => {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;
  const t = time * 0.001;
  const cx = w * 0.5;
  const cy = h * 0.5;

  // Layer 3: Outer rotating circle
  const outerR = Math.min(w, h) * 0.28;
  const outerAlpha = 0.12 + 0.04 * Math.sin(t * 0.3);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(t * (Math.PI * 2 / 75)); // 75s per revolution
  ctx.beginPath();
  ctx.arc(0, 0, outerR, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(59,130,246,${outerAlpha})`;
  ctx.lineWidth = 0.8;
  ctx.stroke();
  ctx.restore();

  // Intercepted lines from outside
  const lineCount = 5;
  for (let i = 0; i < lineCount; i++) {
    const angle = (Math.PI * 2 * i) / lineCount + t * 0.02;
    const startR = outerR * 1.5;
    const endR = outerR * 0.7; // intercepted at ~70% of outer radius
    const sx = cx + Math.cos(angle) * startR;
    const sy = cy + Math.sin(angle) * startR;
    const ex = cx + Math.cos(angle) * endR;
    const ey = cy + Math.sin(angle) * endR;
    const alpha = 0.06 + 0.04 * Math.sin(t * 0.4 + i);
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
    ctx.lineWidth = 0.6;
    ctx.stroke();
    // Intercept dot
    ctx.beginPath();
    ctx.arc(ex, ey, 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(59,130,246,${0.2 + 0.15 * Math.sin(t * 0.6 + i)})`;
    ctx.fill();
  }

  // Layer 2: Shield polygon (hexagon)
  const shieldR = Math.min(w, h) * 0.16;
  const sides = 6;
  const shieldAlpha = 0.25 + 0.1 * Math.sin(t * 0.8);
  ctx.beginPath();
  for (let i = 0; i <= sides; i++) {
    const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
    const x = cx + Math.cos(angle) * shieldR;
    const y = cy + Math.sin(angle) * shieldR;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = `rgba(59,130,246,${shieldAlpha})`;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Core glow
  const coreAlpha = 0.6 + 0.15 * Math.sin(t * 0.5);
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 24);
  gradient.addColorStop(0, `rgba(255,255,255,${coreAlpha})`);
  gradient.addColorStop(0.4, `rgba(59,130,246,${coreAlpha * 0.3})`);
  gradient.addColorStop(1, "rgba(59,130,246,0)");
  ctx.beginPath();
  ctx.arc(cx, cy, 24, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cx, cy, 4, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255,255,255,${0.8 + 0.15 * Math.sin(t * 0.7)})`;
  ctx.fill();
};
