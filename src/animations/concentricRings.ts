import type { DrawFunction } from "@/components/shared/CanvasAnimation";

export const drawConcentricRings: DrawFunction = (ctx, canvas, time) => {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;
  const t = time * 0.001;
  const cx = w * 0.5;
  const cy = h * 0.5;
  const baseRadius = Math.min(w, h) * 0.15;

  const rings = [
    { radiusMul: 1, alpha: 0.25, color: "59,130,246", period: 6 },
    { radiusMul: 1.8, alpha: 0.15, color: "59,130,246", period: 7 },
    { radiusMul: 2.6, alpha: 0.08, color: "59,130,246", period: 8 },
  ];

  // Draw rings
  for (const ring of rings) {
    const breathe = 1 + 0.03 * Math.sin(t * (Math.PI * 2 / ring.period));
    const r = baseRadius * ring.radiusMul * breathe;
    const alpha = ring.alpha * (0.8 + 0.2 * Math.sin(t * 0.5 + ring.radiusMul));
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${ring.color},${alpha})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Core glow
  const coreAlpha = 0.5 + 0.2 * Math.sin(t * 0.8);
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 16);
  gradient.addColorStop(0, `rgba(255,255,255,${coreAlpha})`);
  gradient.addColorStop(0.5, `rgba(59,130,246,${coreAlpha * 0.3})`);
  gradient.addColorStop(1, "rgba(59,130,246,0)");
  ctx.beginPath();
  ctx.arc(cx, cy, 16, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cx, cy, 4, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255,255,255,${0.7 + 0.2 * Math.sin(t)})`;
  ctx.fill();
};
