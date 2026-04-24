import type { DrawFunction } from "@/components/shared/CanvasAnimation";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

let particles: Particle[] = [];
let initialized = false;

function init(w: number, h: number) {
  particles = [];
  const count = 80 + Math.floor(Math.random() * 41); // 80-120 particles
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: 2,
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

  // Draw background
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, w, h);

  // Update particle positions
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    // Bounce off edges
    if (p.x < 0 || p.x > w) {
      p.vx *= -1;
      p.x = Math.max(0, Math.min(w, p.x));
    }
    if (p.y < 0 || p.y > h) {
      p.vy *= -1;
      p.y = Math.max(0, Math.min(h, p.y));
    }

    // Slight random movement
    p.vx += (Math.random() - 0.5) * 0.02;
    p.vy += (Math.random() - 0.5) * 0.02;

    // Limit velocity
    const maxSpeed = 1;
    const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
    if (speed > maxSpeed) {
      p.vx = (p.vx / speed) * maxSpeed;
      p.vy = (p.vy / speed) * maxSpeed;
    }
  }

  // Mouse interaction - repel particles
  const mouseX = mouse.x;
  const mouseY = mouse.y;

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

  // Draw connections between particles
  const maxDist = 120;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        const alpha = 0.3 * (1 - dist / maxDist);
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  // Draw particles
  ctx.fillStyle = "#ffffff";
  for (const p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  }
};
