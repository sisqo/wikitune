import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import ArticleLayout from '@/components/ArticleLayout'
import {
  getArticleBySlug,
  getCategoriaBySlug,
  getAllSlugs,
} from '@/lib/content'

type Props = {
  params: Promise<{ categoria: string; slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria, slug } = await params
  const article = getArticleBySlug(categoria, slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/${categoria}/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { categoria, slug } = await params
  const article = getArticleBySlug(categoria, slug)
  if (!article || !article.published) notFound()

  const cat = getCategoriaBySlug(categoria)
  if (!cat) notFound()

  return (
    <ArticleLayout
      title={article.title}
      categoria={cat}
      tuning_ref={article.tuning_ref}
      faqs={article.faqs}
    >
      <MDXRemote
        source={article.content}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </ArticleLayout>
  )
}
