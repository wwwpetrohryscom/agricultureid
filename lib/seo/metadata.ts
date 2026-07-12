import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Full browser/OG title with the brand suffix, deterministically applied. */
export function fullTitle(title?: string): string {
  if (!title || title === SITE.name) {
    return `${SITE.name} — ${SITE.tagline}`;
  }
  return `${title} · ${SITE.name}`;
}

export interface BuildMetadataOptions {
  title: string;
  description: string;
  /** Site-relative canonical path, e.g. "/crops/wheat". */
  path: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  /** Set false only for intentionally non-indexable utility routes. */
  index?: boolean;
}

/**
 * Deterministic per-page metadata: canonical URL, Open Graph, and Twitter
 * cards. The site-wide branded image (app/opengraph-image.png) is applied by
 * the App Router automatically, so we do not repeat it here.
 */
export function buildMetadata(options: BuildMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    keywords,
    ogType = 'website',
    index = true,
  } = options;

  const resolvedTitle = fullTitle(title);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      type: ogType,
      url: absoluteUrl(path),
      siteName: SITE.name,
      title: resolvedTitle,
      description,
      locale: 'en_US',
      // Explicitly carry the branded image so per-page openGraph does not drop
      // the site-wide file-based Open Graph image.
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
      images: ['/twitter-image.png'],
    },
  };
}
