// Shared mark for favicon / apple-touch-icon / Android icons — the same
// plectrum used as the sidebar logomark, so the brand reads the same in a
// browser tab, a home screen, and the sidebar itself.
export function BrandMark({
  size,
  withFacet = true,
}: {
  size: number
  withFacet?: boolean
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        fill="#C4872A"
        d="M10 2.2c-4.1 0-7.1 3.6-7.1 7.6 0 4.3 3.2 7.5 7.1 8 3.9-.5 7.1-3.7 7.1-8 0-4-3-7.6-7.1-7.6z"
      />
      {withFacet && (
        <path
          d="M7.3 4.7c1.4-1 4-1 5.4 0"
          stroke="#2C4A2E"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
          opacity={0.6}
        />
      )}
    </svg>
  )
}

export function BrandIconTile({
  canvas,
  markRatio,
  withFacet = true,
}: {
  canvas: number
  markRatio: number
  withFacet?: boolean
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2C4A2E',
      }}
    >
      <BrandMark size={Math.round(canvas * markRatio)} withFacet={withFacet} />
    </div>
  )
}
