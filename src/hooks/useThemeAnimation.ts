"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { DrawFunction } from "@/components/shared/CanvasAnimation";

export function useThemeAnimation(dark: DrawFunction, zen: DrawFunction): DrawFunction {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return dark;
  return resolvedTheme === "zen" ? zen : dark;
}

export function useIsZen(): boolean {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && resolvedTheme === "zen";
}
