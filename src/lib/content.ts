import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export type FAQ = {
  q: string
  a: string
}

export type ArticleMeta = {
  title: string
  slug: string
  categoria: string
  keyword: string
  description: string
  published: boolean
  tuning_ref?: string
  faqs?: FAQ[]
}

export type Article = ArticleMeta & {
  content: string
}

export type Categoria = {
  slug: string
  nome: string
  intro: string
}

export const categorie: Categoria[] = [
  {
    slug: 'accordatori',
    nome: 'Accordatori',
    intro: 'Confronti e guide per scegliere il miglior accordatore per chitarra, ukulele e chitarra 12 corde.',
  },
  {
    slug: 'come-accordare',
    nome: 'Come accordare',
    intro: 'Guide pratiche per accordare la chitarra a orecchio, con accordatore, con il diapason e molto altro.',
  },
  {
    slug: 'accordature-di-base',
    nome: 'Accordature di base',
    intro: "Lo standard EADGBE, l'accordatura ukulele GCEA e tutte le accordature fondamentali spiegate nel dettaglio.",
  },
  {
    slug: 'accordature-alternative',
    nome: 'Accordature alternative',
    intro: 'Drop D, Open G, DADGAD e tutte le accordature alternative: come ottenerle e quando usarle.',
  },
  {
    slug: 'accordature-autore',
    nome: "Accordature d'autore",
    intro: 'Le accordature dei grandi chitarristi, dal blues al fingerstyle, con suggerimenti pratici per riprodurle.',
  },
  {
    slug: 'teoria',
    nome: "Teoria sull'accordatura",
    intro: "Come funziona un accordatore, cosa sono gli Hz, temperamento equabile e tutto quello che c'è dietro l'accordatura.",
  },
]

export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return categorie.find((c) => c.slug === slug)
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(contentDir)) return []

  const cats = fs.readdirSync(contentDir)
  const articles: ArticleMeta[] = []

  for (const cat of cats) {
    const catPath = path.join(contentDir, cat)
    if (!fs.statSync(catPath).isDirectory()) continue

    const files = fs.readdirSync(catPath).filter((f) => f.endsWith('.mdx'))
    for (const file of files) {
      const source = fs.readFileSync(path.join(catPath, file), 'utf8')
      const { data } = matter(source)
      articles.push(data as ArticleMeta)
    }
  }

  return articles
}

export function getPublishedArticles(): ArticleMeta[] {
  return getAllArticles().filter((a) => a.published)
}

export function getArticlesByCategoria(categoria: string): ArticleMeta[] {
  return getPublishedArticles().filter((a) => a.categoria === categoria)
}

export function getArticleBySlug(categoria: string, slug: string): Article | null {
  const filePath = path.join(contentDir, categoria, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(source)

  return { ...(data as ArticleMeta), content }
}

export function getAllSlugs(): { categoria: string; slug: string }[] {
  return getPublishedArticles().map((a) => ({
    categoria: a.categoria,
    slug: a.slug,
  }))
}
