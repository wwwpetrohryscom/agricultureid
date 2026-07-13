import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentArticle } from '@/components/content/ContentArticle';
import {
  getContent,
  getContentByType,
  contentPath,
} from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getContentByType('breed').map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = getContent('breed', slug);
  if (!item) return {};
  return buildMetadata({
    title: item.seo.title,
    description: item.seo.description,
    path: contentPath('breed', item.slug),
    keywords: item.seo.keywords,
    ogType: 'article',
  });
}

export default async function BreedPage({ params }: Params) {
  const { slug } = await params;
  const item = getContent('breed', slug);
  if (!item) notFound();
  return <ContentArticle item={item} />;
}
