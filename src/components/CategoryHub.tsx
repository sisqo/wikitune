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

      <main className="flex-1 mx-auto w-full max-w-4xl px-6 py-10">
        <header className="mb-10 pb-8 border-b border-border">
          <h1 className="text-4xl sm:text-5xl font-black text-ink leading-tight tracking-tight">
            {categoria.nome}
          </h1>
          <p className="mt-4 text-muted max-w-2xl leading-relaxed">{categoria.intro}</p>
        </header>

        {articles.length === 0 ? (
          <p className="text-muted/60 text-sm">
            Nessun articolo pubblicato in questa categoria.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/${a.categoria}/${a.slug}`}
                  className="group grid sm:grid-cols-[2fr_3fr_24px] gap-x-8 gap-y-1 py-6 items-start"
                >
                  <h2 className="font-bold text-lg text-ink group-hover:text-gold transition-colors duration-150 leading-snug">
                    {a.title}
                  </h2>
                  {a.description && (
                    <p className="text-muted text-sm sm:text-base leading-relaxed line-clamp-2">
                      {a.description}
                    </p>
                  )}
                  <span
                    className="hidden sm:block text-border group-hover:text-gold transition-colors duration-150 text-lg self-center"
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
