import React, { useMemo } from "react";

export default function SoundWave() {
  const barCount = 50;

  const bars = useMemo(() => {
    return Array.from({ length: barCount }).map((_, i) => ({
      key: i,
      delay: (i % 10) * 0.1,
      duration: 0.7 + (i % 10) * 0.4,
      baseHeight: 15 + Math.random() * 45,
    }));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-evenly my-20">
      {bars.map(({ key, delay, duration, baseHeight }) => (
        <div
          key={key}
          className="w-[4px] rounded-3xl bg-gray-600 animate-wave  origin-center"
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
