import type { Metadata } from 'next'
import { Titillium_Web, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// Titillium Web — progettato all'Accademia di Belle Arti di Urbino (IT)
// Carattere diretto e affidabile, non nella reflex-reject list
const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-titillium',
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
    <html lang="it" className={`${titillium.variable} ${jetbrains.variable}`}>
      <body className="antialiased bg-bg text-ink font-sans">{children}</body>
    </html>
  )
}
