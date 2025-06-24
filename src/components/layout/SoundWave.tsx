import React, { useMemo } from "react";

export default function SoundWave() {
  const barCount = 80;

  const bars = useMemo(() => {
    return Array.from({ length: barCount }).map((_, i) => ({
      key: i,
      delay: (i % 10) * 0.1,
      duration: 0.4 + (i % 10) * 0.15,
      baseHeight: 15 + Math.random() * 55,
    }));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-evenly my-20">
      {bars.map(({ key, delay, duration, baseHeight }) => (
        <div
          key={key}
          className="w-[2px] bg-gray-600 animate-wave  origin-center"
          style={{
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            height: `${baseHeight}px`,
            // boxShadow: "0 0 5px 1px rgba(135, 72, 226,0.6)",
          }}
        />
      ))}
    </div>
  );
}
