type Props = {
  slug: string
  className?: string
}

// One consistent stroke system across all four marks: a tuner dial, a tuning
// fork, and two "string" variants (straight vs. bent) so the base/alternative
// pair reads as a matched set rather than unrelated pictograms.
export default function CategoryIcon({ slug, className }: Props) {
  switch (slug) {
    case 'accordatori':
      // A clip-tuner device (body + meter + needle), not a bare dial —
      // a circle-plus-line alone reads as the ISO power symbol.
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="2.4" width="12" height="15.2" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="10" cy="8.7" r="3.1" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 8.7V6.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7.3 14.35h5.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'come-accordare':
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <path
            d="M7.1 2.5v5.55a2.9 2.9 0 0 0 5.8 0V2.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M10 11.05v5.85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M7.6 16.9h4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'accordature-di-base':
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <path
            d="M3.2 4.3h13.6M3.2 7.85h13.6M3.2 11.4h13.6M3.2 14.95h13.6"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'accordature-alternative':
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <path d="M3.2 4.3h13.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          <path
            d="M3.2 7.85h3.4l1.7-2.35 1.7 4.7 1.7-2.35h3.7"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M3.2 11.4h13.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M3.2 14.95h13.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}
