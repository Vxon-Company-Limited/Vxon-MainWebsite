import type { DrawFunction } from "@/components/shared/CanvasAnimation";

interface Line {
  angle: number;
  speed: number;
  phase: number;
}

interface Dot {
  lineIdx: number;
  progress: number;
  speed: number;
}

const lines: Line[] = [];
const dots: Dot[] = [];
let inited = false;

function init() {
  lines.length = 0;
  dots.length = 0;
  const count = 7;
  for (let i = 0; i < count; i++) {
    lines.push({
      angle: (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3,
      speed: 0.2 + Math.random() * 0.3,
      phase: Math.random() * Math.PI * 2,
    });
  }
  inited = true;
}

export const drawApiConvergence: DrawFunction = (ctx, canvas, time) => {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;
  const t = time * 0.001;
  const cx = w * 0.5;
  const cy = h * 0.55;

  if (!inited) init();

  const radius = Math.min(w, h) * 0.4;

  // Draw convergence lines
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const alpha = 0.05 + 0.15 * (0.5 + 0.5 * Math.sin(t * line.speed + line.phase));
    const ex = cx + Math.cos(line.angle) * radius;
    const ey = cy + Math.sin(line.angle) * radius;
    ctx.beginPath();
    ctx.moveTo(ex, ey);
    ctx.lineTo(cx, cy);
    ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }

  // Center glow
  const coreAlpha = 0.4 + 0.2 * Math.sin(t * 0.5);
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20);
  gradient.addColorStop(0, `rgba(59,130,246,${coreAlpha})`);
  gradient.addColorStop(1, "rgba(59,130,246,0)");
  ctx.beginPath();
  ctx.arc(cx, cy, 20, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cx, cy, 3, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255,255,255,${0.6 + 0.3 * Math.sin(t * 0.8)})`;
  ctx.fill();

  // Spawn dots
  if (Math.random() < 0.03 && dots.length < 5) {
    dots.push({
      lineIdx: Math.floor(Math.random() * lines.length),
      progress: 0,
      speed: 0.08 + Math.random() * 0.08,
    });
  }

  // Draw dots moving toward center
  for (let i = dots.length - 1; i >= 0; i--) {
    const d = dots[i];
    d.progress += d.speed * 0.016;
    if (d.progress >= 1) { dots.splice(i, 1); continue; }
    const line = lines[d.lineIdx];
    const ex = cx + Math.cos(line.angle) * radius;
    const ey = cy + Math.sin(line.angle) * radius;
    const x = ex + (cx - ex) * d.progress;
    const y = ey + (cy - ey) * d.progress;
    const alpha = Math.sin(d.progress * Math.PI) * 0.7;
    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(147,197,253,${alpha})`;
    ctx.fill();
  }
};
