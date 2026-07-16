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
  return contentStaticParams('commodity-grade');
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return contentMetadata('commodity-grade', slug);
}

export default async function CommodityGradePage({ params }: Params) {
  const { slug } = await params;
  const item = getContent('commodity-grade', slug);
  if (!item) notFound();
  return <ContentArticle item={item} />;
}
