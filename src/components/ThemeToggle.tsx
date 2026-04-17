"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Leaf, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isZen = theme === "zen";

  return (
    <button
      onClick={() => setTheme(isZen ? "dark" : "zen")}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-colors hover:bg-white/5"
      aria-label={isZen ? "Switch to dark theme" : "Switch to zen theme"}
    >
      {isZen ? <Moon className="w-4 h-4" /> : <Leaf className="w-4 h-4" />}
    </button>
  );
}
