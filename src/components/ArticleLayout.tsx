import Link from 'next/link'
import CTALink from './CTALink'
import type { FAQ, Categoria } from '@/lib/content'

type ArticleLayoutProps = {
  title: string
  categoria: Categoria
  tuning_ref?: string
  faqs?: FAQ[]
  children: React.ReactNode
}

export default function ArticleLayout({
  title,
  categoria,
  tuning_ref,
  faqs,
  children,
}: ArticleLayoutProps) {
  const ctaLabel = tuning_ref
    ? `Accorda in ${tuning_ref.replace(/-/g, ' ')} con EasyGuitarTuner — gratis, dal browser`
    : undefined

  const faqJsonLd = faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }
    : null

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="min-h-screen bg-white">
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-900">
                WikiTune
              </Link>
              <span>/</span>
              <Link href={`/${categoria.slug}`} className="hover:text-gray-900">
                {categoria.nome}
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-4 py-10">
          <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>

          <article className="prose prose-gray max-w-none">{children}</article>

          <CTALink label={ctaLabel} />

          {faqs && faqs.length > 0 && (
            <section className="mt-12 border-t border-gray-200 pt-10">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Domande frequenti</h2>
              <dl className="space-y-6">
                {faqs.map(({ q, a }) => (
                  <div key={q}>
                    <dt className="font-semibold text-gray-900">{q}</dt>
                    <dd className="mt-2 text-gray-600">{a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </main>

        <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-400">
          <p>
            WikiTune — Accordature per chitarra e ukulele.{' '}
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
    </>
  )
}
