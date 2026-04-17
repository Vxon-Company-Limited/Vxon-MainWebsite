import type { DrawFunction } from "@/components/shared/CanvasAnimation";

interface Node {
  x: number;
  y: number;
  phase: number;
  period: number;
}

interface FlowDot {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

let nodes: Node[] = [];
let edges: [number, number][] = [];
let flowDots: FlowDot[] = [];
let inited = false;

function init(w: number, h: number) {
  nodes = [];
  edges = [];
  flowDots = [];
  const cx = w * 0.5;
  const cy = h * 0.5;
  // Center node
  nodes.push({ x: cx, y: cy, phase: 0, period: 4 });
  // Surrounding nodes in a star+chain pattern
  const count = 5;
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
    const r = Math.min(w, h) * 0.22;
    nodes.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
      phase: Math.random() * Math.PI * 2,
      period: 2 + Math.random() * 3,
    });
    edges.push([0, i + 1]); // connect to center
    if (i > 0) edges.push([i, i + 1]); // chain neighbors
  }
  inited = true;
}

export const drawConnectedNodes: DrawFunction = (ctx, canvas, time) => {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;
  const t = time * 0.001;

  if (!inited) init(w, h);

  // Draw edges
  for (const [a, b] of edges) {
    const alpha = 0.08 + 0.06 * Math.sin(t * 0.5 + a + b);
    ctx.beginPath();
    ctx.moveTo(nodes[a].x, nodes[a].y);
    ctx.lineTo(nodes[b].x, nodes[b].y);
    ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }

  // Draw nodes
  for (const node of nodes) {
    const alpha = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * (Math.PI * 2 / node.period) + node.phase));
    ctx.beginPath();
    ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(59,130,246,${alpha})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(59,130,246,${alpha * 0.1})`;
    ctx.fill();
  }

  // Spawn flow dots
  if (Math.random() < 0.015 && flowDots.length < 3) {
    const edge = edges[Math.floor(Math.random() * edges.length)];
    flowDots.push({ from: edge[0], to: edge[1], progress: 0, speed: 0.1 + Math.random() * 0.1 });
  }

  // Draw flow dots
  for (let i = flowDots.length - 1; i >= 0; i--) {
    const d = flowDots[i];
    d.progress += d.speed * 0.016;
    if (d.progress >= 1) { flowDots.splice(i, 1); continue; }
    const from = nodes[d.from];
    const to = nodes[d.to];
    const x = from.x + (to.x - from.x) * d.progress;
    const y = from.y + (to.y - from.y) * d.progress;
    const alpha = Math.sin(d.progress * Math.PI) * 0.6;
    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(147,197,253,${alpha})`;
    ctx.fill();
  }
};
