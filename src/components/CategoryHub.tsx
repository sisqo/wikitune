import Link from 'next/link'
import type { ArticleMeta, Categoria } from '@/lib/content'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

type CategoryHubProps = {
  categoria: Categoria
  articles: ArticleMeta[]
}

export default function CategoryHub({ categoria, articles }: CategoryHubProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader crumbs={[{ label: categoria.nome, href: `/${categoria.slug}` }]} />

      <main className="flex-1 mx-auto w-full max-w-4xl px-6 py-12">
        <header className="mb-10 pb-8 border-b border-border">
          <h1 className="font-display italic text-5xl sm:text-6xl text-ink leading-none tracking-tight">
            {categoria.nome}
          </h1>
          <p className="mt-4 text-resin max-w-xl leading-relaxed">{categoria.intro}</p>
        </header>

        {articles.length === 0 ? (
          <p className="text-resin/60 font-mono text-sm">
            — Nessun articolo pubblicato in questa categoria.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/${a.categoria}/${a.slug}`}
                  className="group flex items-start justify-between gap-6 py-6 hover:text-ink transition-colors"
                >
                  <div className="min-w-0">
                    <h2 className="font-display italic text-xl sm:text-2xl text-ink group-hover:text-spruce leading-snug transition-colors">
                      {a.title}
                    </h2>
                    {a.description && (
                      <p className="mt-1.5 text-sm text-resin leading-relaxed line-clamp-2">
                        {a.description}
                      </p>
                    )}
                  </div>
                  <span
                    className="shrink-0 mt-1 text-border group-hover:text-gold transition-colors text-lg"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
