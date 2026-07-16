import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentArticle } from '@/components/content/ContentArticle';
import { CommodityTradePanel } from '@/components/trade/CommodityTradePanel';
import { getContent } from '@/lib/content/registry';
import {
  contentMetadata,
  contentStaticParams,
} from '@/lib/content/route-helpers';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return contentStaticParams('commodity');
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return contentMetadata('commodity', slug);
}

export default async function CommodityPage({ params }: Params) {
  const { slug } = await params;
  const item = getContent('commodity', slug);
  if (!item) notFound();
  return (
    <>
      <ContentArticle item={item} />
      {/* Reported-trade figures are a view over the commodity that already owns
          this subject, so they render here rather than on a competing route. */}
      <CommodityTradePanel commoditySlug={slug} />
    </>
  );
}
