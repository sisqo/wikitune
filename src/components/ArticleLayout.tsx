import CTALink from './CTALink'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
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
    ? `Accorda in ${tuning_ref.replace(/-/g, ' ')} con EasyGuitarTuner`
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

      <div className="min-h-screen flex flex-col">
        <SiteHeader
          crumbs={[
            { label: categoria.nome, href: `/${categoria.slug}` },
            { label: title, href: `/${categoria.slug}` },
          ]}
        />

        <main className="flex-1 mx-auto w-full max-w-3xl px-6 py-12">
          {/* Title */}
          <header className="mb-10">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-resin/50 mb-4">
              {categoria.nome}
            </p>
            <h1 className="font-display italic text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight tracking-tight">
              {title}
            </h1>
            <div className="mt-6 h-px bg-gradient-to-r from-gold via-border to-transparent" />
          </header>

          {/* Body */}
          <article className="prose prose-lg max-w-none font-sans">
            {children}
          </article>

          {/* CTA */}
          <CTALink label={ctaLabel} />

          {/* FAQ */}
          {faqs && faqs.length > 0 && (
            <section className="mt-10 pt-10 border-t border-border">
              <h2 className="font-display italic text-3xl text-ink mb-8">
                Domande frequenti
              </h2>
              <dl className="space-y-7">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="grid sm:grid-cols-[1fr_2fr] gap-3 sm:gap-8">
                    <dt className="font-medium text-ink leading-snug">{q}</dt>
                    <dd className="text-resin leading-relaxed">{a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
