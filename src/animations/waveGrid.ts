import type { DrawFunction } from "@/components/shared/CanvasAnimation";

interface GridBlock {
  x: number;
  y: number;
  baseY: number;
  phase: number;
  speed: number;
  size: number;
}

let blocks: GridBlock[] = [];
let initialized = false;
let lastGridCols = 0;

function init(w: number, h: number, cols: number) {
  blocks = [];
  const rows = Math.ceil(h / 60) + 2;
  const blockSize = Math.min(40, (w / cols) * 0.6);
  const spacing = w / cols;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      blocks.push({
        x: col * spacing + spacing / 2,
        y: row * 60,
        baseY: row * 60,
        phase: (col / cols) * Math.PI * 2 + (row / rows) * Math.PI,
        speed: 0.3 + Math.random() * 0.2,
        size: blockSize,
      });
    }
  }
  initialized = true;
  lastGridCols = cols;
}

export const drawWaveGrid: DrawFunction = (ctx, canvas, time) => {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;
  const t = time * 0.001;

  const cols = Math.max(8, Math.floor(w / 100));

  if (!initialized || Math.abs(cols - lastGridCols) > 2) {
    init(w, h, cols);
  }

  ctx.clearRect(0, 0, w, h);

  // Draw grid blocks with wave motion
  for (const block of blocks) {
    // Calculate wave offset based on time and position
    const waveOffset = Math.sin(t * block.speed + block.phase) * 15;
    const waveOffset2 = Math.cos(t * block.speed * 0.7 + block.phase * 1.3) * 8;

    block.y = block.baseY + waveOffset;

    // Calculate opacity based on wave position
    const wavePhase = (t * block.speed + block.phase) % (Math.PI * 2);
    const normalizedPhase = wavePhase / (Math.PI * 2);
    const alpha = 0.15 + Math.sin(normalizedPhase * Math.PI * 2) * 0.15;

    // Draw main block
    const x = block.x - block.size / 2 + waveOffset2;
    const y = block.y - block.size / 2;

    ctx.fillStyle = `rgba(59, 130, 246, ${alpha * 0.4})`;
    ctx.fillRect(x, y, block.size, block.size);

    // Draw block border
    ctx.strokeStyle = `rgba(99, 102, 241, ${alpha * 0.6})`;
    ctx.lineWidth = 0.5;
    ctx.strokeRect(x, y, block.size, block.size);

    // Draw glow effect for brighter blocks
    if (alpha > 0.25) {
      ctx.shadowColor = "rgba(99, 102, 241, 0.5)";
      ctx.shadowBlur = 10;
      ctx.fillStyle = `rgba(99, 102, 241, ${alpha * 0.2})`;
      ctx.fillRect(x, y, block.size, block.size);
      ctx.shadowBlur = 0;
    }
  }

  // Draw connection lines between nearby blocks
  for (let i = 0; i < blocks.length; i++) {
    for (let j = i + 1; j < blocks.length; j++) {
      const dx = blocks[i].x - blocks[j].x;
      const dy = blocks[i].y - blocks[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 80) {
        const lineAlpha = (1 - dist / 80) * 0.08;
        ctx.beginPath();
        ctx.moveTo(blocks[i].x, blocks[i].y);
        ctx.lineTo(blocks[j].x, blocks[j].y);
        ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
        ctx.lineWidth = 0.3;
        ctx.stroke();
      }
    }
  }
};
