import { PUBLISHED_CONTENT, contentUrlPath } from '@/lib/content/registry';

/** Stable last-modified date for static (non-content) routes. */
export const SITE_LAST_UPDATED = '2026-07-12';

export interface RouteEntry {
  path: string;
  lastModified: string;
  changeFrequency:
    'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

/**
 * Every indexable static route. Sections that are intentionally not built in
 * Phase 1 (machinery, tools) are absent — we do not publish empty shells.
 */
const STATIC_ROUTES: Omit<RouteEntry, 'lastModified'>[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  // Content hubs
  { path: '/crops', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/soils', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/plant-diseases', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/pests', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/livestock', changeFrequency: 'weekly', priority: 0.9 },
  // Overview sections
  { path: '/farm-systems', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/irrigation', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/plant-nutrition', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/agricultural-data', changeFrequency: 'monthly', priority: 0.6 },
  // Reference
  { path: '/glossary', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/sources', changeFrequency: 'monthly', priority: 0.6 },
  // Trust, editorial, legal
  { path: '/about', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/editorial-policy', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/methodology', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/corrections', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/disclaimer', changeFrequency: 'yearly', priority: 0.2 },
];

/** All indexable routes with resolved last-modified dates. */
export function allRoutes(): RouteEntry[] {
  const staticRoutes: RouteEntry[] = STATIC_ROUTES.map((r) => ({
    ...r,
    lastModified: SITE_LAST_UPDATED,
  }));

  const contentRoutes: RouteEntry[] = PUBLISHED_CONTENT.map((item) => ({
    path: contentUrlPath(item),
    lastModified: item.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...contentRoutes];
}

/** Set of every path present in the sitemap (for validation coverage checks). */
export function sitemapPaths(): Set<string> {
  return new Set(allRoutes().map((r) => r.path));
}
