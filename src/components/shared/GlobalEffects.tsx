"use client";

import { useEffect, useRef, useCallback } from "react";

function isZenTheme() {
  return document.documentElement.classList.contains("zen");
}

export function GlobalEffects() {
  const glowRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (glowRef.current) {
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const triggerGlitch = () => {
      if (isZenTheme()) return;
      const titles = document.querySelectorAll(".hero-title-glow");
      titles.forEach((el) => {
        el.classList.add("glitch-trigger");
        setTimeout(() => el.classList.remove("glitch-trigger"), 100);
      });
    };

    const scheduleNext = () => {
      const delay = 30000 + Math.random() * 30000;
      return setTimeout(() => {
        triggerGlitch();
        timerId = scheduleNext();
      }, delay);
    };

    let timerId = scheduleNext();
    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const triggerScan = () => {
      if (isZenTheme()) return;
      if (scanRef.current) {
        scanRef.current.style.display = "block";
        scanRef.current.style.animation = "scanLine 3s linear forwards";
        setTimeout(() => {
          if (scanRef.current) {
            scanRef.current.style.display = "none";
            scanRef.current.style.animation = "none";
          }
        }, 3000);
      }
    };

    const scheduleNext = () => {
      const delay = 8000 + Math.random() * 4000;
      return setTimeout(() => {
        triggerScan();
        timerId = scheduleNext();
      }, delay);
    };

    let timerId = scheduleNext();
    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow hidden md:block" aria-hidden="true" />
      <div
        ref={scanRef}
        className="fixed inset-x-0 top-0 h-[1px] pointer-events-none z-[2]"
        style={{
          display: "none",
          background: `linear-gradient(90deg, transparent, rgba(var(--theme-glow-rgb),0.03), transparent)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}
