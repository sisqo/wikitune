type Props = {
  // Accepts a string ("4.5") because MDX JSX expression attributes
  // (value={4.5}) don't evaluate through this project's MDX pipeline —
  // only string-literal attributes do. Numbers still work for JSX callers
  // outside MDX.
  value: string | number
  max?: number
  size?: number
  className?: string
}

// Plump 10-point star, hand-drawn to match the site's other custom icons
// rather than pulled from an icon library.
const STAR_PATH =
  'M10 1L12.53 6.52L18.56 7.22L14.09 11.33L15.29 17.28L10 14.3L4.71 17.28L5.91 11.33L1.44 7.22L7.47 6.52Z'

export default function StarRating({ value, max = 5, size = 16, className }: Props) {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value
  const clamped = Math.max(0, Math.min(numericValue, max))
  const formatted = clamped.toLocaleString('it-IT', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })

  return (
    <span
      className={`not-prose inline-flex items-center gap-1.5 align-middle whitespace-nowrap ${className ?? ''}`}
      role="img"
      aria-label={`${formatted} su ${max} stelle`}
    >
      <span className="inline-flex gap-px">
        {Array.from({ length: max }, (_, i) => {
          const fillPx = Math.round(Math.max(0, Math.min(clamped - i, 1)) * size)
          return (
            <span
              key={i}
              className="relative inline-block shrink-0"
              style={{ width: size, height: size }}
            >
              <svg viewBox="0 0 20 20" width={size} height={size} className="absolute inset-0 text-border">
                <path d={STAR_PATH} fill="currentColor" />
              </svg>
              <span className="absolute inset-0 overflow-hidden" style={{ width: fillPx }}>
                <svg viewBox="0 0 20 20" width={size} height={size} className="text-gold">
                  <path d={STAR_PATH} fill="currentColor" />
                </svg>
              </span>
            </span>
          )
        })}
      </span>
      <span className="text-ink font-semibold tabular-nums">{formatted}</span>
    </span>
  )
}
