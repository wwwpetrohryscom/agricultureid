import { describe, expect, it } from 'vitest';
import { allRoutes, sitemapPaths } from '@/lib/seo/routes';
import { PUBLISHED_CONTENT, contentUrlPath } from '@/lib/content/registry';

describe('sitemap coverage', () => {
  const paths = sitemapPaths();

  it('includes the homepage and every content hub', () => {
    for (const hub of [
      '/',
      '/crops',
      '/soils',
      '/plant-diseases',
      '/pests',
      '/livestock',
    ]) {
      expect(paths.has(hub)).toBe(true);
    }
  });

  it('includes every published content page', () => {
    for (const item of PUBLISHED_CONTENT) {
      expect(paths.has(contentUrlPath(item)), contentUrlPath(item)).toBe(true);
    }
  });

  it('includes the trust and legal pages', () => {
    for (const legal of [
      '/about',
      '/editorial-policy',
      '/methodology',
      '/corrections',
      '/privacy',
      '/terms',
      '/disclaimer',
    ]) {
      expect(paths.has(legal)).toBe(true);
    }
  });

  it('never lists a route twice and uses valid priorities', () => {
    const routes = allRoutes();
    const all = routes.map((r) => r.path);
    expect(new Set(all).size).toBe(all.length);
    for (const route of routes) {
      expect(route.priority).toBeGreaterThanOrEqual(0);
      expect(route.priority).toBeLessThanOrEqual(1);
    }
  });
});
