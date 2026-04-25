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
  type: number;
  hue: number;
  saturation: number;
  lightness: number;
}

interface Firefly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  glowPhase: number;
  glowSpeed: number;
  maxOpacity: number;
  trail: { x: number; y: number; alpha: number }[];
}

interface LightRay {
  x: number;
  angle: number;
  width: number;
  opacity: number;
  speed: number;
  phase: number;
}

interface Pollen {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  wobblePhase: number;
}

interface Butterfly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  wingPhase: number;
  wingSpeed: number;
  hue: number;
  opacity: number;
  targetX: number;
  targetY: number;
}

let leaves: Leaf[] = [];
let fireflies: Firefly[] = [];
let rays: LightRay[] = [];
let pollen: Pollen[] = [];
let butterflies: Butterfly[] = [];
let inited = false;
let windGust = 0;
let windTarget = 0;
let windTimer = 0;

function init(w: number, h: number) {
  const leafColors = [
    { hue: 120, saturation: 35, lightness: 40 },
    { hue: 140, saturation: 30, lightness: 35 },
    { hue: 95, saturation: 40, lightness: 45 },
    { hue: 35, saturation: 45, lightness: 50 },
    { hue: 25, saturation: 50, lightness: 45 },
    { hue: 150, saturation: 25, lightness: 38 },
  ];

  leaves = Array.from({ length: 18 }, () => {
    const color = leafColors[Math.floor(Math.random() * leafColors.length)];
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      size: 6 + Math.random() * 16,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.006,
      driftX: (Math.random() - 0.5) * 0.12,
      driftY: 0.08 + Math.random() * 0.18,
      swayPhase: Math.random() * Math.PI * 2,
      swaySpeed: 0.002 + Math.random() * 0.003,
      opacity: 0.06 + Math.random() * 0.12,
      type: Math.floor(Math.random() * 4),
      ...color,
    };
  });

  fireflies = Array.from({ length: 15 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.2,
    size: 1.5 + Math.random() * 2.5,
    glowPhase: Math.random() * Math.PI * 2,
    glowSpeed: 0.002 + Math.random() * 0.003,
    maxOpacity: 0.15 + Math.random() * 0.25,
    trail: [],
  }));

  rays = Array.from({ length: 4 }, (_, i) => ({
    x: w * 0.3 + (i / 4) * w * 0.5,
    angle: -0.3 + Math.random() * 0.15,
    width: 60 + Math.random() * 100,
    opacity: 0.015 + Math.random() * 0.02,
    speed: 0.0003 + Math.random() * 0.0003,
    phase: Math.random() * Math.PI * 2,
  }));

  pollen = Array.from({ length: 25 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.08,
    vy: -0.02 + Math.random() * 0.04,
    size: 0.8 + Math.random() * 1.5,
    opacity: 0.04 + Math.random() * 0.08,
    wobblePhase: Math.random() * Math.PI * 2,
  }));

  butterflies = Array.from({ length: 4 }, () => ({
    x: Math.random() * w,
    y: h * 0.3 + Math.random() * h * 0.4,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.3,
    size: 5 + Math.random() * 6,
    wingPhase: Math.random() * Math.PI * 2,
    wingSpeed: 0.08 + Math.random() * 0.04,
    hue: [40, 30, 320, 200][Math.floor(Math.random() * 4)],
    opacity: 0.12 + Math.random() * 0.1,
    targetX: Math.random() * w,
    targetY: h * 0.2 + Math.random() * h * 0.5,
  }));

  inited = true;
}

function drawLeafShape(ctx: CanvasRenderingContext2D, size: number, type: number) {
  ctx.beginPath();
  switch (type) {
    case 0:
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.6, -size * 0.6, size * 0.5, size * 0.3, 0, size);
      ctx.bezierCurveTo(-size * 0.5, size * 0.3, -size * 0.6, -size * 0.6, 0, -size);
      break;
    case 1:
      ctx.ellipse(0, 0, size * 0.35, size * 0.8, 0, 0, Math.PI * 2);
      break;
    case 2:
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(size * 0.8, 0, 0, size);
      ctx.quadraticCurveTo(-size * 0.8, 0, 0, -size);
      break;
    case 3:
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const r = size * 0.7;
        if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
        else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      }
      break;
  }
  ctx.closePath();
}

function drawButterflyWing(ctx: CanvasRenderingContext2D, size: number, wingOpen: number) {
  const wingW = size * wingOpen;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(wingW * 0.5, -size * 0.8, wingW, -size * 0.6, wingW * 0.8, 0);
  ctx.bezierCurveTo(wingW, size * 0.4, wingW * 0.3, size * 0.5, 0, size * 0.2);
  ctx.closePath();
}

export const drawNatureScene: DrawFunction = (ctx, canvas, time, mouse) => {
  const { width: w, height: h } = canvas;
  if (!inited || leaves.length === 0) init(w, h);

  ctx.clearRect(0, 0, w, h);

  windTimer += 1;
  if (windTimer > 300 + Math.random() * 600) {
    windTarget = (Math.random() - 0.3) * 0.8;
    windTimer = 0;
  }
  windGust += (windTarget - windGust) * 0.005;
  if (Math.abs(windGust - windTarget) < 0.01) windTarget *= 0.5;

  for (const ray of rays) {
    const pulse = Math.sin(ray.phase + time * ray.speed) * 0.5 + 0.5;
    const alpha = ray.opacity * (0.6 + pulse * 0.4);
    const grad = ctx.createLinearGradient(
      ray.x, 0,
      ray.x + Math.sin(ray.angle) * h, h
    );
    grad.addColorStop(0, `rgba(255, 235, 180, ${alpha})`);
    grad.addColorStop(0.5, `rgba(255, 235, 180, ${alpha * 0.4})`);
    grad.addColorStop(1, "transparent");

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(ray.x - ray.width / 2, 0);
    ctx.lineTo(ray.x + ray.width / 2, 0);
    ctx.lineTo(ray.x + Math.sin(ray.angle) * h + ray.width, h);
    ctx.lineTo(ray.x + Math.sin(ray.angle) * h - ray.width, h);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
  }

  for (const leaf of leaves) {
    const sway = Math.sin(leaf.swayPhase + time * leaf.swaySpeed) * 0.5;
    leaf.x += leaf.driftX + sway + windGust;
    leaf.y += leaf.driftY;
    leaf.rotation += leaf.rotationSpeed + windGust * 0.01;

    if (leaf.y > h + 30) { leaf.y = -30; leaf.x = Math.random() * w; }
    if (leaf.x < -30) leaf.x = w + 30;
    if (leaf.x > w + 30) leaf.x = -30;

    ctx.save();
    ctx.translate(leaf.x, leaf.y);
    ctx.rotate(leaf.rotation);
    ctx.globalAlpha = leaf.opacity;
    ctx.fillStyle = `hsl(${leaf.hue}, ${leaf.saturation}%, ${leaf.lightness}%)`;
    drawLeafShape(ctx, leaf.size, leaf.type);
    ctx.fill();

    ctx.globalAlpha = leaf.opacity * 0.4;
    ctx.strokeStyle = `hsl(${leaf.hue}, ${leaf.saturation - 10}%, ${leaf.lightness - 10}%)`;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(0, -leaf.size * 0.7);
    ctx.lineTo(0, leaf.size * 0.7);
    ctx.stroke();

    ctx.restore();
  }

  for (const p of pollen) {
    const wobble = Math.sin(p.wobblePhase + time * 0.002) * 0.3;
    p.x += p.vx + wobble + windGust * 0.3;
    p.y += p.vy;

    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 240, 200, ${p.opacity})`;
    ctx.fill();
  }

  for (const b of butterflies) {
    const dx = b.targetX - b.x;
    const dy = b.targetY - b.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 30) {
      b.targetX = Math.random() * w;
      b.targetY = h * 0.15 + Math.random() * h * 0.5;
    }

    b.vx += (dx / dist) * 0.01 + windGust * 0.02;
    b.vy += (dy / dist) * 0.01;
    b.vx += (Math.random() - 0.5) * 0.03;
    b.vy += (Math.random() - 0.5) * 0.02;
    b.vx *= 0.98;
    b.vy *= 0.98;
    b.x += b.vx;
    b.y += b.vy;

    if (b.x < 0) b.x = w;
    if (b.x > w) b.x = 0;
    if (b.y < 0) b.y = h * 0.3;
    if (b.y > h) b.y = h * 0.3;

    b.wingPhase += b.wingSpeed;
    const wingOpen = 0.4 + Math.sin(b.wingPhase) * 0.6;
    const angle = Math.atan2(b.vy, b.vx);

    ctx.save();
    ctx.translate(b.x, b.y);
    ctx.rotate(angle);
    ctx.globalAlpha = b.opacity;

    ctx.fillStyle = `hsla(${b.hue}, 50%, 55%, 0.8)`;
    ctx.save();
    ctx.scale(1, wingOpen);
    drawButterflyWing(ctx, b.size, 1);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.scale(1, -wingOpen);
    drawButterflyWing(ctx, b.size, 1);
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.ellipse(0, 0, b.size * 0.15, b.size * 0.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${b.hue}, 30%, 30%, ${b.opacity})`;
    ctx.fill();

    ctx.restore();
  }

  for (const ff of fireflies) {
    ff.vx += (Math.random() - 0.5) * 0.02;
    ff.vy += (Math.random() - 0.5) * 0.02;
    ff.vx *= 0.99;
    ff.vy *= 0.99;
    ff.x += ff.vx;
    ff.y += ff.vy;

    if (ff.x < 0) ff.x = w;
    if (ff.x > w) ff.x = 0;
    if (ff.y < 0) ff.y = h;
    if (ff.y > h) ff.y = 0;

    const glow = (Math.sin(ff.glowPhase + time * ff.glowSpeed) + 1) * 0.5;
    const alpha = glow * ff.maxOpacity;

    ff.trail.push({ x: ff.x, y: ff.y, alpha: alpha * 0.5 });
    if (ff.trail.length > 8) ff.trail.shift();

    for (let i = 0; i < ff.trail.length; i++) {
      const t = ff.trail[i];
      const trailAlpha = t.alpha * (i / ff.trail.length) * 0.3;
      if (trailAlpha > 0.005) {
        ctx.beginPath();
        ctx.arc(t.x, t.y, ff.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 230, 150, ${trailAlpha})`;
        ctx.fill();
      }
    }

    if (alpha > 0.02) {
      const grad = ctx.createRadialGradient(ff.x, ff.y, 0, ff.x, ff.y, ff.size * 6);
      grad.addColorStop(0, `rgba(200, 230, 150, ${alpha})`);
      grad.addColorStop(0.3, `rgba(180, 220, 120, ${alpha * 0.4})`);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(ff.x - ff.size * 6, ff.y - ff.size * 6, ff.size * 12, ff.size * 12);

      ctx.beginPath();
      ctx.arc(ff.x, ff.y, ff.size * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 250, 170, ${alpha * 1.5})`;
      ctx.fill();
    }
  }

  if (mouse.x > 0 && mouse.y > 0) {
    const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100);
    grad.addColorStop(0, "rgba(255, 240, 200, 0.03)");
    grad.addColorStop(0.5, "rgba(200, 230, 150, 0.015)");
    grad.addColorStop(1, "transparent");
    ctx.fillStyle = grad;
    ctx.fillRect(mouse.x - 100, mouse.y - 100, 200, 200);
  }
};
