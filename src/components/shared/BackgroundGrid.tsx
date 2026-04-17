"use client";

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundSize: "56px 56px",
          backgroundImage:
            "linear-gradient(to right, rgba(var(--theme-glow-rgb),1) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--theme-glow-rgb),1) 1px, transparent 1px)",
          animation: "gridScroll 30s linear infinite",
        }}
      />
    </div>
  );
}
