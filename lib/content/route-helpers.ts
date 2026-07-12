import type { Metadata } from 'next';
import {
  contentPath,
  getContent,
  getContentByType,
} from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';
import type { ContentType } from '@/lib/site';

/** `generateStaticParams` for any content-type `[slug]` route. */
export function contentStaticParams(type: ContentType): { slug: string }[] {
  return getContentByType(type).map((item) => ({ slug: item.slug }));
}

/** `generateMetadata` for any content-type `[slug]` route. */
export function contentMetadata(type: ContentType, slug: string): Metadata {
  const item = getContent(type, slug);
  if (!item) return {};
  return buildMetadata({
    title: item.seo.title,
    description: item.seo.description,
    path: contentPath(type, item.slug),
    keywords: item.seo.keywords,
    ogType: 'article',
  });
}
