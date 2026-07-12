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
  return contentStaticParams('nutrient');
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return contentMetadata('nutrient', slug);
}

export default async function NutrientPage({ params }: Params) {
  const { slug } = await params;
  const item = getContent('nutrient', slug);
  if (!item) notFound();
  return <ContentArticle item={item} />;
}
