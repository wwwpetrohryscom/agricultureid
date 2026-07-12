import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentArticle } from '@/components/content/ContentArticle';
import { getContent } from '@/lib/content/registry';
import {
  contentMetadata,
  contentStaticParams,
} from '@/lib/content/route-helpers';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return contentStaticParams('soil-topic');
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return contentMetadata('soil-topic', slug);
}

export default async function SoilTopicPage({ params }: Params) {
  const { slug } = await params;
  const item = getContent('soil-topic', slug);
  if (!item) notFound();
  return <ContentArticle item={item} />;
}
