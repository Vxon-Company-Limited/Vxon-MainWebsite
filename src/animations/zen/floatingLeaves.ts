import type { DrawFunction } from "@/components/shared/CanvasAnimation";

interface Leaf {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  driftX: number;
  driftY: number;
  swayPhase: number;
  swaySpeed: number;
  opacity: number;
}

let leaves: Leaf[] = [];
let inited = false;

function initLeaves(w: number, h: number) {
  leaves = Array.from({ length: 10 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    size: 8 + Math.random() * 14,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.008,
    driftX: (Math.random() - 0.5) * 0.15,
    driftY: 0.12 + Math.random() * 0.2,
    swayPhase: Math.random() * Math.PI * 2,
    swaySpeed: 0.003 + Math.random() * 0.004,
    opacity: 0.04 + Math.random() * 0.08,
  }));
  inited = true;
}

function drawLeafShape(ctx: CanvasRenderingContext2D, size: number) {
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.bezierCurveTo(size * 0.6, -size * 0.6, size * 0.5, size * 0.3, 0, size);
  ctx.bezierCurveTo(-size * 0.5, size * 0.3, -size * 0.6, -size * 0.6, 0, -size);
  ctx.closePath();
}

export const drawFloatingLeaves: DrawFunction = (ctx, canvas, time) => {
  const { width: w, height: h } = canvas;
  if (!inited || leaves.length === 0) initLeaves(w, h);

  ctx.clearRect(0, 0, w, h);

  for (const leaf of leaves) {
    const sway = Math.sin(leaf.swayPhase + time * leaf.swaySpeed) * 0.4;
    leaf.x += leaf.driftX + sway;
    leaf.y += leaf.driftY;
    leaf.rotation += leaf.rotationSpeed;

    if (leaf.y > h + 30) {
      leaf.y = -30;
      leaf.x = Math.random() * w;
    }
    if (leaf.x < -30) leaf.x = w + 30;
    if (leaf.x > w + 30) leaf.x = -30;

    ctx.save();
    ctx.translate(leaf.x, leaf.y);
    ctx.rotate(leaf.rotation);
    ctx.globalAlpha = leaf.opacity;
    ctx.fillStyle = "rgb(74, 124, 89)";
    drawLeafShape(ctx, leaf.size);
    ctx.fill();

    ctx.strokeStyle = "rgba(74, 124, 89, 0.3)";
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(0, -leaf.size * 0.8);
    ctx.lineTo(0, leaf.size * 0.8);
    ctx.stroke();

    ctx.restore();
  }
};
