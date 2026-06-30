import Link from 'next/link'
import type { Metadata } from 'next'
import { categorie } from '@/lib/content'
import StringLines from '@/components/StringLines'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'WikiTune — Accordature per chitarra e ukulele',
  description:
    'Tutte le accordature per chitarra e ukulele: standard, alternative, Drop D, Open G, DADGAD e molto altro. Guide pratiche e teoria.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-12 pb-10 px-6">
        <div className="mx-auto max-w-4xl">
          <StringLines />

          <div className="mt-8">
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight text-ink uppercase leading-none">
              Accordature
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-light text-muted">
              per chitarra e ukulele
            </p>
          </div>

          <p className="mt-8 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
            Dalla standard{' '}
            <code className="font-mono text-sm text-gold bg-gold-lt px-1.5 py-0.5 rounded-sm">
              EADGBE
            </code>{' '}
            al Drop D, dall'Open G al DADGAD: guide pratiche, tabelle di frequenze e teoria
            per ogni accordatura.
          </p>

          <p className="mt-3 text-sm text-muted/80">
            Per accordare subito:{' '}
            <a
              href="https://guitar.sisqo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline underline-offset-2 font-semibold"
            >
              EasyGuitarTuner
            </a>
            {' '}— accordatore web gratuito, nessuna installazione.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border mx-6 my-2" />

      {/* Category index */}
      <section className="flex-1 py-10 px-6">
        <div className="mx-auto max-w-4xl">
          <ul className="divide-y divide-border">
            {categorie.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/${cat.slug}`}
                  className="group grid sm:grid-cols-[2fr_3fr_24px] gap-x-8 gap-y-1 py-6 sm:py-7 items-start"
                >
                  <span className="font-bold text-lg text-ink group-hover:text-gold transition-colors duration-150 leading-snug">
                    {cat.nome}
                  </span>
                  <span className="text-muted text-sm sm:text-base leading-relaxed">
                    {cat.intro}
                  </span>
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
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
