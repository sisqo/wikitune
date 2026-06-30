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

const CATEGORY_ICONS: Record<string, string> = {
  'accordatori':           '♩',
  'come-accordare':        '♪',
  'accordature-di-base':   '♫',
  'accordature-alternative': '♬',
  'accordature-autore':    '𝄞',
  'teoria':                '𝄢',
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-ivory pt-16 pb-10 px-6">
        <div className="mx-auto max-w-4xl">
          <StringLines />

          <div className="mt-8">
            <h1 className="font-display italic text-6xl sm:text-7xl lg:text-8xl text-ink leading-none tracking-tight">
              Accordature
            </h1>
            <p className="mt-3 font-display italic text-2xl sm:text-3xl text-resin">
              per chitarra e ukulele
            </p>
          </div>

          <p className="mt-8 text-base sm:text-lg text-resin max-w-xl leading-relaxed">
            Dalla standard{' '}
            <code className="font-mono text-sm text-gold bg-gold-lt px-1.5 py-0.5 rounded">
              EADGBE
            </code>{' '}
            al Drop D, dall'Open G al DADGAD: guide pratiche, tabelle delle frequenze e teoria
            per ogni accordatura.
          </p>

          <p className="mt-4 text-sm text-resin/70">
            Per accordare subito:{' '}
            <a
              href="https://guitar.sisqo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline underline-offset-2 font-medium"
            >
              EasyGuitarTuner
            </a>
            {' '}— accordatore web, gratis, nessuna installazione.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border mx-6" />

      {/* Categories */}
      <section className="flex-1 bg-ivory py-14 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-resin/50 mb-8">
            Categorie
          </p>

          <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 border border-border">
            {categorie.map((cat) => (
              <li key={cat.slug} className="bg-ivory">
                <Link
                  href={`/${cat.slug}`}
                  className="group flex flex-col gap-2 p-6 h-full hover:bg-gold-lt transition-colors duration-200"
                >
                  <span className="text-2xl text-resin/40 group-hover:text-gold transition-colors" aria-hidden="true">
                    {CATEGORY_ICONS[cat.slug] ?? '♩'}
                  </span>
                  <span className="font-display italic text-xl text-ink group-hover:text-spruce transition-colors leading-snug">
                    {cat.nome}
                  </span>
                  <span className="text-sm text-resin leading-relaxed">
                    {cat.intro}
                  </span>
                  <span className="mt-auto pt-3 text-xs font-mono tracking-wider text-gold/0 group-hover:text-gold transition-colors">
                    Esplora →
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
