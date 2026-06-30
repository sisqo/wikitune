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

      <div className="px-6 py-10 max-w-3xl mx-auto">
        <header className="mb-10 pb-8 border-b border-border">
          <h1 className="text-4xl sm:text-5xl font-black text-ink leading-tight tracking-tight">
            {title}
          </h1>
        </header>

        <article className="prose prose-lg max-w-none">
          {children}
        </article>

        <CTALink label={ctaLabel} />

        {faqs && faqs.length > 0 && (
          <section className="mt-10 pt-10 border-t border-border">
            <h2 className="text-2xl font-black text-ink mb-8">
              Domande frequenti
            </h2>
            <dl className="space-y-8">
              {faqs.map(({ q, a }) => (
                <div key={q} className="grid sm:grid-cols-[2fr_3fr] gap-3 sm:gap-8">
                  <dt className="font-bold text-ink leading-snug">{q}</dt>
                  <dd className="text-muted leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </div>
    </>
  )
}
