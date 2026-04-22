import type { DrawFunction } from "@/components/shared/CanvasAnimation";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

let particles: Particle[] = [];
let inited = false;

function init(w: number, h: number) {
  particles = Array.from({ length: 30 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
    size: 1 + Math.random() * 2,
    opacity: 0.03 + Math.random() * 0.06,
    hue: Math.random() > 0.5 ? 140 : 35,
  }));
  inited = true;
}

export const drawGentleParticles: DrawFunction = (ctx, canvas) => {
  const { width: w, height: h } = canvas;
  if (!inited) init(w, h);

  ctx.clearRect(0, 0, w, h);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 30%, 45%, ${p.opacity})`;
    ctx.fill();
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(74, 124, 89, ${0.02 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
};
