import type { Metadata, Viewport } from 'next'
import { Titillium_Web, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SidebarShell from '@/components/SidebarShell'
import { categorie, getPublishedArticles } from '@/lib/content'

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
  applicationName: 'WikiTune',
  appleWebApp: {
    capable: true,
    title: 'WikiTune',
    statusBarStyle: 'default',
  },
}

export const viewport: Viewport = {
  themeColor: '#2C4A2E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const articles = getPublishedArticles()

  return (
    <html lang="it" className={`${titillium.variable} ${jetbrains.variable}`}>
      <body className="antialiased bg-bg text-ink font-sans">
        <SidebarShell categorie={categorie} articles={articles}>
          {children}
        </SidebarShell>
      </body>
    </html>
  )
}
