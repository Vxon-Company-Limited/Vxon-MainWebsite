import type { DrawFunction } from "@/components/shared/CanvasAnimation";

interface Node {
  x: number;
  y: number;
  phase: number;
  speed: number;
}

interface Particle {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
}

let nodes: Node[] = [];
let particles: Particle[] = [];
let initialized = false;

function init(w: number, h: number) {
  nodes = [];
  particles = [];
  const count = Math.min(35, Math.floor((w * h) / 25000));
  for (let i = 0; i < count; i++) {
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      phase: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.5,
    });
  }
  initialized = true;
}

export const drawNeuralNetwork: DrawFunction = (ctx, canvas, time) => {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;
  const t = time * 0.001;

  if (!initialized || Math.abs(nodes.length - Math.min(35, Math.floor((w * h) / 25000))) > 5) {
    init(w, h);
  }

  const maxDist = Math.min(w, h) * 0.35;

  // Draw connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        const alpha = (1 - dist / maxDist) * 0.12;
        const breathe = 0.5 + 0.5 * Math.sin(t * 0.3 + i * 0.5);
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(59,130,246,${alpha * breathe})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  // Draw nodes with breathing
  for (const node of nodes) {
    const alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * node.speed + node.phase));
    const radius = 1.5 + alpha * 1;
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(59,130,246,${alpha * 0.8})`;
    ctx.fill();
    // Glow
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius + 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(59,130,246,${alpha * 0.1})`;
    ctx.fill();
  }

  // Spawn particles
  if (Math.random() < 0.02 && particles.length < 8) {
    const fromIdx = Math.floor(Math.random() * nodes.length);
    let toIdx = Math.floor(Math.random() * nodes.length);
    if (toIdx === fromIdx) toIdx = (toIdx + 1) % nodes.length;
    const dx = nodes[fromIdx].x - nodes[toIdx].x;
    const dy = nodes[fromIdx].y - nodes[toIdx].y;
    if (Math.sqrt(dx * dx + dy * dy) < maxDist) {
      particles.push({ fromIdx, toIdx, progress: 0, speed: 0.15 + Math.random() * 0.15 });
    }
  }

  // Draw and update particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.progress += p.speed * 0.016;
    if (p.progress >= 1) { particles.splice(i, 1); continue; }
    const from = nodes[p.fromIdx];
    const to = nodes[p.toIdx];
    const x = from.x + (to.x - from.x) * p.progress;
    const y = from.y + (to.y - from.y) * p.progress;
    const alpha = Math.sin(p.progress * Math.PI) * 0.8;
    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(147,197,253,${alpha})`;
    ctx.fill();
  }
};
