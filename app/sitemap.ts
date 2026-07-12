import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo/metadata';
import { allRoutes } from '@/lib/seo/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
