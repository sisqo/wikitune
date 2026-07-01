'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import type { ArticleMeta, Categoria } from '@/lib/content'
import CategoryIcon from '@/components/CategoryIcon'

type Props = {
  categorie: Categoria[]
  articles: ArticleMeta[]
  children: React.ReactNode
}

function PickMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 2.2c-4.1 0-7.1 3.6-7.1 7.6 0 4.3 3.2 7.5 7.1 8 3.9-.5 7.1-3.7 7.1-8 0-4-3-7.6-7.1-7.6z"
      />
    </svg>
  )
}

export default function SidebarShell({ categorie, articles, children }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const navContent = (
    <nav className="flex-1 overflow-y-auto py-4 space-y-5" aria-label="Navigazione principale">
      {categorie.map((cat) => {
        const catArticles = articles.filter((a) => a.categoria === cat.slug)
        const isCatActive =
          pathname === `/${cat.slug}` || pathname.startsWith(`/${cat.slug}/`)

        return (
          <div key={cat.slug}>
            <Link
              href={`/${cat.slug}`}
              className={`group mx-2 flex items-center gap-2.5 rounded-lg px-3 py-2 text-base font-bold tracking-tight transition-colors duration-150 ${
                isCatActive
                  ? 'bg-gold/15 text-gold-dark'
                  : 'text-surface/85 hover:bg-surface/8 hover:text-surface'
              }`}
            >
              <CategoryIcon
                slug={cat.slug}
                className={`h-[18px] w-[18px] shrink-0 ${
                  isCatActive ? 'text-gold-dark' : 'text-surface/55 group-hover:text-surface/85'
                }`}
              />
              <span>{cat.nome}</span>
            </Link>
            {catArticles.length > 0 && (
              <ul className="mt-1">
                {catArticles.map((a) => {
                  const href = `/${a.categoria}/${a.slug}`
                  const isActive = pathname === href
                  return (
                    <li key={a.slug}>
                      <Link
                        href={href}
                        className={`block mx-2 rounded-md py-1.5 pl-10 pr-3 text-sm leading-snug transition-colors duration-150 ${
                          isActive
                            ? 'bg-gold/10 font-semibold text-gold-dark'
                            : 'text-surface/70 hover:bg-surface/8 hover:text-surface/95'
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
          className={`flex items-center gap-2 text-2xl font-black tracking-tight transition-colors duration-150 ${
            pathname === '/' ? 'text-gold-dark' : 'text-surface hover:text-gold-dark'
          }`}
        >
          <PickMark className="h-5 w-5 shrink-0 text-gold" />
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
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col md:hidden transition-transform duration-200 ease-out motion-reduce:transition-none ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Menu laterale"
      >
        {sidebarInner}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3.5 right-3.5 rounded-md p-1.5 text-surface/60 transition-colors hover:bg-surface/8 hover:text-surface"
          aria-label="Chiudi menu"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
          </svg>
        </button>
      </aside>

      {/* Content column */}
      <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
        {/* Mobile top bar */}
        <div className="sticky top-0 z-30 flex items-center gap-2 px-3 py-3 bg-spruce border-b border-surface/10 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="rounded-md p-1.5 text-surface/70 transition-colors hover:bg-surface/8 hover:text-surface"
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
            className="flex items-center gap-2 text-xl font-black text-surface tracking-tight hover:text-gold-dark transition-colors"
          >
            <PickMark className="h-[18px] w-[18px] shrink-0 text-gold" />
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
