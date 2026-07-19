import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo/metadata';
import { allRoutes } from '@/lib/seo/routes';

/**
 * The site's sitemap, served by Next.js at `/sitemap.xml`.
 *
 * One file with every indexable route. At ~1.4k URLs this is far under the
 * sitemaps.org ceiling (50,000 URLs / 50 MB uncompressed), so a single sitemap
 * is both sufficient and exactly what `robots.txt` advertises and crawlers fetch
 * first.
 *
 * DO NOT reintroduce `generateSitemaps` here. Next.js serves those shards at
 * `/sitemap/[id].xml` and does **not** emit a `/sitemap.xml` index — which is
 * exactly why the deployed `/sitemap.xml` (the URL robots.txt points to) 404'd.
 * If the corpus ever nears 50,000 URLs, add a real `<sitemapindex>` at
 * `/sitemap.xml` via a route handler rather than trusting `generateSitemaps` to
 * create one.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
