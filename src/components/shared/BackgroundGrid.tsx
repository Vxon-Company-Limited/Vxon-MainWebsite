"use client";

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Primary grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundSize: "56px 56px",
          backgroundImage:
            "linear-gradient(to right, rgba(var(--theme-glow-rgb),1) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--theme-glow-rgb),1) 1px, transparent 1px)",
          animation: "gridScroll 30s linear infinite",
        }}
      />
      {/* Secondary grid for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundSize: "112px 112px",
          backgroundImage:
            "linear-gradient(to right, rgba(var(--theme-accent-violet-rgb),1) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--theme-accent-violet-rgb),1) 1px, transparent 1px)",
          transform: "rotate(2deg) scale(1.1)",
        }}
      />
      {/* Center spotlight gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(var(--theme-glow-rgb),0.02) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
