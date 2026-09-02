import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CropHubPage } from '@/components/crops/CropHubPage';
import { buildMetadata } from '@/lib/seo/metadata';
import { hubPath, hubsOfKind } from '@/lib/crops/hubs';

const KIND = 'AGRICULTURAL_CROP_GROUP_HUB' as const;

export function generateStaticParams() {
  return hubsOfKind(KIND).map((h) => ({ slug: h.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hub = hubsOfKind(KIND).find((h) => h.slug === slug);
  if (!hub) return {};
  return buildMetadata({
    title: hub.title,
    description: hub.definition,
    path: hubPath(hub),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hub = hubsOfKind(KIND).find((h) => h.slug === slug);
  if (!hub) notFound();
  return <CropHubPage hub={hub} />;
}
