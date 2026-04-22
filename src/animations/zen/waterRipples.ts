import type { DrawFunction } from "@/components/shared/CanvasAnimation";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
}

let ripples: Ripple[] = [];
let lastSpawn = 0;

export const drawWaterRipples: DrawFunction = (ctx, canvas, time) => {
  const { width: w, height: h } = canvas;
  ctx.clearRect(0, 0, w, h);

  if (time - lastSpawn > 2500 + Math.random() * 2000) {
    if (ripples.length < 5) {
      ripples.push({
        x: w * 0.15 + Math.random() * w * 0.7,
        y: h * 0.15 + Math.random() * h * 0.7,
        radius: 0,
        maxRadius: 80 + Math.random() * 120,
        opacity: 0.06 + Math.random() * 0.04,
        speed: 0.3 + Math.random() * 0.2,
      });
    }
    lastSpawn = time;
  }

  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i];
    r.radius += r.speed;
    const life = r.radius / r.maxRadius;

    if (life >= 1) {
      ripples.splice(i, 1);
      continue;
    }

    const fade = 1 - life;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(74, 124, 89, ${r.opacity * fade})`;
    ctx.lineWidth = 1.5 * fade;
    ctx.stroke();

    if (r.radius > 20) {
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(74, 124, 89, ${r.opacity * fade * 0.5})`;
      ctx.lineWidth = 1 * fade;
      ctx.stroke();
    }
  }
};
