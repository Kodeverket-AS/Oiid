"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect, useMemo } from "react";

interface Bar {
  key: number;
  delay: number;
  duration: number;
  baseHeight: number;
}

export default function SoundWave() {
  const [mounted, setMounted] = useState(false);
  const [barCount, setBarCount] = useState<number>(40);

  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
    const updateBarCount = () => {
      const width = window.innerWidth;
      const count = Math.min(80, Math.max(40, Math.floor(width / 10)));
      setBarCount(count);
    };

    updateBarCount();
    window.addEventListener("resize", updateBarCount);
    return () => window.removeEventListener("resize", updateBarCount);
  }, []);

  const [bars] = useState<Bar[]>(() =>
    Array.from({ length: 80 }).map((_, i) => ({
      key: i,
      delay: (i % 10) * 0,
      duration: 0.7 + (i % 10) * 0.4,
      baseHeight: 15 + Math.random() * 45,
    }))
  );

  const visibleBars = useMemo(
    () => bars.slice(0, barCount - 15),
    [bars, barCount]
  );

  if (!mounted) return null;

  return (
    <div className="w-full h-full flex items-center justify-evenly my-20">
      {visibleBars.map(({ key, delay, duration, baseHeight }) => (
        <div
          key={key}
          className={`w-[4px] rounded-3xl bg-gray-600 origin-center   ${
            isDark ? "animate-wave-dark" : "animate-wave-light"
          }
  `}
          style={{
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            height: `${baseHeight}px`,
          }}
        />
      ))}
    </div>
  );
}
