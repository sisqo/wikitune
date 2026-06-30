import Link from 'next/link'

type Crumb = { label: string; href: string }

type SiteHeaderProps = {
  crumbs?: Crumb[]
}

export default function SiteHeader({ crumbs }: SiteHeaderProps) {
  return (
    <header className="bg-spruce text-ivory/90">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-baseline gap-6">
        <Link
          href="/"
          className="font-display italic text-xl text-ivory tracking-tight hover:text-gold transition-colors shrink-0"
        >
          WikiTune
        </Link>

        {crumbs && crumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-ivory/50 min-w-0">
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-2 min-w-0">
                {i > 0 && <span className="text-ivory/30">/</span>}
                <Link
                  href={c.href}
                  className="hover:text-ivory/80 transition-colors truncate"
                >
                  {c.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
