import type { DrawFunction } from "@/components/shared/CanvasAnimation";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  pulsePhase: number;
  pulseSpeed: number;
  baseAlpha: number;
}

let particles: Particle[] = [];
let initialized = false;

const PARTICLE_HUES = [
  { h: 220, s: 80, l: 65 },
  { h: 260, s: 70, l: 60 },
  { h: 190, s: 75, l: 55 },
  { h: 0, s: 0, l: 100 },
  { h: 240, s: 60, l: 70 },
];

function init(w: number, h: number) {
  particles = [];
  const count = 80 + Math.floor(Math.random() * 41);
  for (let i = 0; i < count; i++) {
    const colorIdx = Math.floor(Math.random() * PARTICLE_HUES.length);
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: 1.5 + Math.random() * 1.5,
      hue: colorIdx,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.001 + Math.random() * 0.002,
      baseAlpha: 0.5 + Math.random() * 0.5,
    });
  }
  initialized = true;
}

export const drawParticleMesh: DrawFunction = (ctx, canvas, time, mouse) => {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;

  if (!initialized) {
    init(w, h);
  }

  const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.7);
  bgGrad.addColorStop(0, "#0f172a");
  bgGrad.addColorStop(0.6, "#0a0e1a");
  bgGrad.addColorStop(1, "#050510");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  const mouseX = mouse.x;
  const mouseY = mouse.y;

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > w) {
      p.vx *= -1;
      p.x = Math.max(0, Math.min(w, p.x));
    }
    if (p.y < 0 || p.y > h) {
      p.vy *= -1;
      p.y = Math.max(0, Math.min(h, p.y));
    }

    p.vx += (Math.random() - 0.5) * 0.02;
    p.vy += (Math.random() - 0.5) * 0.02;

    const maxSpeed = 1;
    const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
    if (speed > maxSpeed) {
      p.vx = (p.vx / speed) * maxSpeed;
      p.vy = (p.vy / speed) * maxSpeed;
    }
  }

  if (mouseX > 0 && mouseY > 0) {
    for (const p of particles) {
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200 && dist > 0) {
        const force = (200 - dist) / 200 * 0.5;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }
    }
  }

  const maxDist = 120;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        const alpha = 0.25 * (1 - dist / maxDist);
        const ci = PARTICLE_HUES[particles[i].hue];
        const cj = PARTICLE_HUES[particles[j].hue];
        const grad = ctx.createLinearGradient(
          particles[i].x, particles[i].y,
          particles[j].x, particles[j].y
        );
        grad.addColorStop(0, `hsla(${ci.h}, ${ci.s}%, ${ci.l}%, ${alpha})`);
        grad.addColorStop(1, `hsla(${cj.h}, ${cj.s}%, ${cj.l}%, ${alpha})`);
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  for (const p of particles) {
    const pulse = Math.sin(p.pulsePhase + time * p.pulseSpeed) * 0.3 + 0.7;
    const alpha = p.baseAlpha * pulse;
    const c = PARTICLE_HUES[p.hue];

    if (c.s > 0 && p.radius > 2) {
      const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
      glowGrad.addColorStop(0, `hsla(${c.h}, ${c.s}%, ${c.l}%, ${alpha * 0.15})`);
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(p.x - p.radius * 4, p.y - p.radius * 4, p.radius * 8, p.radius * 8);
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${c.h}, ${c.s}%, ${c.l}%, ${alpha})`;
    ctx.fill();
  }

  if (mouseX > 0 && mouseY > 0) {
    const glowGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);
    glowGrad.addColorStop(0, "rgba(99, 102, 241, 0.05)");
    glowGrad.addColorStop(0.4, "rgba(139, 92, 246, 0.025)");
    glowGrad.addColorStop(0.7, "rgba(6, 182, 212, 0.01)");
    glowGrad.addColorStop(1, "transparent");
    ctx.fillStyle = glowGrad;
    ctx.fillRect(mouseX - 200, mouseY - 200, 400, 400);
  }
};
