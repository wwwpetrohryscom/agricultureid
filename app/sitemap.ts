import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo/metadata';
import {
  sectionedRoutes,
  SITEMAP_SECTIONS,
  type SitemapSection,
} from '@/lib/seo/routes';

/**
 * Sharded sitemap. `generateSitemaps` emits one sitemap per section plus a
 * sitemap index at /sitemap.xml, so the sitemap scales cleanly and crawlers
 * can fetch sections independently. Each shard stays far under the 50,000-URL
 * limit. `id` is the section's index in SITEMAP_SECTIONS.
 */
export async function generateSitemaps(): Promise<{ id: number }[]> {
  return SITEMAP_SECTIONS.map((_, id) => ({ id }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const section = (SITEMAP_SECTIONS[id] ?? 'pages') as SitemapSection;
  const routes = sectionedRoutes()[section] ?? [];
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
