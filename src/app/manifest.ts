import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WikiTune — Accordature per chitarra e ukulele',
    short_name: 'WikiTune',
    description:
      "Guide e risorse sulle accordature per chitarra e ukulele: standard, alternative, d'autore e teoria.",
    start_url: '/',
    display: 'standalone',
    background_color: '#F2F5F8',
    theme_color: '#2C4A2E',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      {
        src: '/maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
