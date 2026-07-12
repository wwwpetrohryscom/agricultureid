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
  return getContentByType('soil').map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = getContent('soil', slug);
  if (!item) return {};
  return buildMetadata({
    title: item.seo.title,
    description: item.seo.description,
    path: contentPath('soil', item.slug),
    keywords: item.seo.keywords,
    ogType: 'article',
  });
}

export default async function SoilPage({ params }: Params) {
  const { slug } = await params;
  const item = getContent('soil', slug);
  if (!item) notFound();
  return <ContentArticle item={item} />;
}
