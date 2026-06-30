import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'WikiTune — Accordature per chitarra e ukulele',
    template: '%s | WikiTune',
  },
  description:
    'Guide e risorse sulle accordature per chitarra e ukulele: standard, alternative, d\'autore e teoria.',
  metadataBase: new URL('https://wikitune.sisqo.dev'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className="antialiased">{children}</body>
    </html>
  )
}
