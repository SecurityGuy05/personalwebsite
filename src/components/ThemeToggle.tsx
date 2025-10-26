"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  
  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border bg-foreground/5" style={{ borderColor: 'var(--border)' }} />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      className="btn relative flex h-9 w-9 items-center justify-center rounded-lg border bg-foreground/5 text-lg shadow-sm transition-all hover:bg-foreground/10 hover:shadow-md active:scale-95"
      style={{ borderColor: 'var(--border)' }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{ opacity: isDark ? 0 : 1, transform: isDark ? 'rotate(180deg) scale(0)' : 'rotate(0deg) scale(1)' }}>
        ☀️
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{ opacity: isDark ? 1 : 0, transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0)' }}>
        🌙
      </span>
    </button>
  );
}
