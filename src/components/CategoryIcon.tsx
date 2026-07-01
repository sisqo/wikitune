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
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <circle cx="10" cy="10.5" r="6.75" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 10.5V5.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M10 3.4v1.15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'come-accordare':
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <path
            d="M7.25 2.75v5.4a2.75 2.75 0 0 0 5.5 0v-5.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M10 10.9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M7.75 16.9h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'accordature-di-base':
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <path
            d="M3.5 4.5h13M3.5 7.9h13M3.5 11.3h13M3.5 14.7h13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'accordature-alternative':
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <path d="M3.5 4.5h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M3.5 7.9h3.6l1.7-2.3 1.7 4.6 1.7-2.3h3.8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M3.5 11.3h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3.5 14.7h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}
