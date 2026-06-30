import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'WikiTune — Accordature per chitarra e ukulele',
    template: '%s | WikiTune',
  },
  description:
    "Guide e risorse sulle accordature per chitarra e ukulele: standard, alternative, d'autore e teoria.",
  metadataBase: new URL('https://wikitune.sisqo.dev'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased bg-ivory text-ink font-sans">{children}</body>
    </html>
  )
}
