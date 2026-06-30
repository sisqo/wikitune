import Link from 'next/link'
import type { ArticleMeta, Categoria } from '@/lib/content'

type CategoryHubProps = {
  categoria: Categoria
  articles: ArticleMeta[]
}

export default function CategoryHub({ categoria, articles }: CategoryHubProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              WikiTune
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">{categoria.nome}</h1>
        <p className="mb-10 text-gray-600">{categoria.intro}</p>

        {articles.length === 0 ? (
          <p className="text-gray-400">Nessun articolo pubblicato in questa categoria.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {articles.map((a) => (
              <li key={a.slug} className="py-5">
                <Link
                  href={`/${a.categoria}/${a.slug}`}
                  className="group block"
                >
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {a.title}
                  </h2>
                  {a.description && (
                    <p className="mt-1 text-sm text-gray-500">{a.description}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-400">
        <p>
          WikiTune —{' '}
          <a
            href="https://guitar.sisqo.dev"
            className="underline hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            EasyGuitarTuner
          </a>
        </p>
      </footer>
    </div>
  )
}
