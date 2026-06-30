import Link from 'next/link'
import type { Metadata } from 'next'
import { categorie } from '@/lib/content'

export const metadata: Metadata = {
  title: 'WikiTune — Accordature per chitarra e ukulele',
  description:
    'Tutte le accordature per chitarra e ukulele: standard, alternative, Drop D, Open G, DADGAD e molto altro. Guide pratiche e teoria.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">WikiTune</h1>
          <p className="mt-1 text-sm text-gray-500">Accordature per chitarra e ukulele</p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12">
        <section className="mb-12">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            La guida completa alle accordature
          </h2>
          <p className="text-lg text-gray-600">
            Che tu stia cercando l'accordatura standard EADGBE, il Drop D per il rock o il DADGAD
            per il fingerstyle celtico: qui trovi guide pratiche, tabelle delle frequenze e
            spiegazioni teoriche su ogni accordatura per chitarra e ukulele.
          </p>
          <p className="mt-3 text-gray-600">
            Per accordare subito il tuo strumento puoi usare{' '}
            <a
              href="https://guitar.sisqo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              EasyGuitarTuner
            </a>
            , accordatore web gratuito per chitarra 6 corde, 12 corde e ukulele.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Categorie</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {categorie.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/${cat.slug}`}
                  className="group block rounded-lg border border-gray-200 p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">
                    {cat.nome}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{cat.intro}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
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
  )
}
