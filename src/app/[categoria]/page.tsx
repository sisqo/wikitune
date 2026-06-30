import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CategoryHub from '@/components/CategoryHub'
import {
  getCategoriaBySlug,
  getArticlesByCategoria,
  categorie,
} from '@/lib/content'

type Props = {
  params: Promise<{ categoria: string }>
}

export async function generateStaticParams() {
  return categorie.map((c) => ({ categoria: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria: slug } = await params
  const cat = getCategoriaBySlug(slug)
  if (!cat) return {}
  return {
    title: cat.nome,
    description: cat.intro,
  }
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria: slug } = await params
  const cat = getCategoriaBySlug(slug)
  if (!cat) notFound()

  const articles = getArticlesByCategoria(slug)

  return <CategoryHub categoria={cat} articles={articles} />
}
