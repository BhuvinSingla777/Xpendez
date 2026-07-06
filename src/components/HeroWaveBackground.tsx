export function HeroWaveBackground() {
  const lines = 50;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {Array.from({ length: lines }).map((_, i) => {
          const t = i / lines;
          const yStart = 80 + t * 640;
          const cpY = 350 + Math.sin(t * Math.PI) * 120;
          return (
            <path
              key={`wave-${i}`}
              d={`M-40 ${yStart} C 300 ${cpY}, 1140 ${cpY}, 1480 ${yStart}`}
              stroke="#A8C3B8"
              strokeWidth="0.6"
              opacity={0.25 + (i % 4) * 0.08}
            />
          );
        })}
      </svg>
    </div>
  );
}
