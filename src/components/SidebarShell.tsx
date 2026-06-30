'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import type { ArticleMeta, Categoria } from '@/lib/content'

type Props = {
  categorie: Categoria[]
  articles: ArticleMeta[]
  children: React.ReactNode
}

export default function SidebarShell({ categorie, articles, children }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const navContent = (
    <nav className="flex-1 overflow-y-auto py-3" aria-label="Navigazione principale">
      {categorie.map((cat) => {
        const catArticles = articles.filter((a) => a.categoria === cat.slug)
        const isCatActive =
          pathname === `/${cat.slug}` || pathname.startsWith(`/${cat.slug}/`)

        return (
          <div key={cat.slug} className="mb-3">
            <Link
              href={`/${cat.slug}`}
              className={`block px-4 py-1.5 text-sm font-bold tracking-tight transition-colors duration-100 ${
                isCatActive ? 'text-gold' : 'text-surface/70 hover:text-surface'
              }`}
            >
              {cat.nome}
            </Link>
            {catArticles.length > 0 && (
              <ul>
                {catArticles.map((a) => {
                  const href = `/${a.categoria}/${a.slug}`
                  const isActive = pathname === href
                  return (
                    <li key={a.slug}>
                      <Link
                        href={href}
                        className={`block pl-6 pr-4 py-1 text-xs leading-snug transition-colors duration-100 ${
                          isActive
                            ? 'text-gold font-semibold'
                            : 'text-surface/45 hover:text-surface/75'
                        }`}
                      >
                        {a.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )
      })}
    </nav>
  )

  const sidebarInner = (
    <div className="flex flex-col h-full bg-spruce">
      <div className="shrink-0 px-4 py-5 border-b border-surface/10">
        <Link
          href="/"
          className={`font-black text-xl tracking-tight transition-colors duration-100 ${
            pathname === '/' ? 'text-gold' : 'text-surface hover:text-gold'
          }`}
        >
          WikiTune
        </Link>
      </div>
      {navContent}
    </div>
  )

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-60 lg:w-64 shrink-0 overflow-hidden border-r border-surface/10">
        {sidebarInner}
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink/50 md:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col md:hidden transition-transform duration-200 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Menu laterale"
      >
        {sidebarInner}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-surface/50 hover:text-surface"
          aria-label="Chiudi menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
          </svg>
        </button>
      </aside>

      {/* Content column */}
      <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
        {/* Mobile top bar */}
        <div className="sticky top-0 z-30 flex items-center gap-3 px-4 py-3 bg-spruce border-b border-surface/10 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="text-surface/70 hover:text-surface transition-colors"
            aria-label="Apri menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <rect y="3" width="20" height="2" rx="1" />
              <rect y="9" width="20" height="2" rx="1" />
              <rect y="15" width="20" height="2" rx="1" />
            </svg>
          </button>
          <Link
            href="/"
            className="font-black text-surface text-lg tracking-tight hover:text-gold transition-colors"
          >
            WikiTune
          </Link>
        </div>

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
