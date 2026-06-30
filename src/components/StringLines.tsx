const STRINGS = [
  { strokeWidth: 2.6, opacity: 0.55, delay: 0 },    // E2 — la più bassa, più spessa
  { strokeWidth: 2.0, opacity: 0.50, delay: 90 },   // A2
  { strokeWidth: 1.5, opacity: 0.45, delay: 180 },  // D3
  { strokeWidth: 1.1, opacity: 0.40, delay: 270 },  // G3
  { strokeWidth: 0.7, opacity: 0.36, delay: 360 },  // B3
  { strokeWidth: 0.4, opacity: 0.30, delay: 450 },  // E4 — la più alta, più sottile
]

export default function StringLines() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 48 }} aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        fill="none"
      >
        {STRINGS.map((s, i) => {
          const y = 6 + i * 7
          return (
            <g
              key={i}
              className="string-pluck"
              style={{ animationDelay: `${s.delay}ms` }}
            >
              <line
                x1="0"
                y1={y}
                x2="1200"
                y2={y}
                stroke="#8B6340"
                strokeWidth={s.strokeWidth}
                opacity={s.opacity}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
