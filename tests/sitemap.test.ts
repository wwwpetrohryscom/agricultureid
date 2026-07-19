import { describe, expect, it } from 'vitest';
import sitemap, * as sitemapModule from '@/app/sitemap';
import { allRoutes, sitemapPaths } from '@/lib/seo/routes';
import { absoluteUrl } from '@/lib/seo/metadata';
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

/**
 * Guards the /sitemap.xml ROUTE itself, not just the path model. The route used
 * Next.js `generateSitemaps`, which serves only `/sitemap/[id].xml` and emits NO
 * `/sitemap.xml` index — so the deployed `/sitemap.xml` (the URL robots.txt
 * points at) returned 404 while every path-model test stayed green. This asserts
 * the route is the single default sitemap, callable with no shard id, that
 * carries every indexable URL.
 */
describe('sitemap route (/sitemap.xml)', () => {
  const entries = sitemap();

  it('exports no `generateSitemaps` — the export that re-shards and 404s /sitemap.xml', () => {
    // The 404 is triggered by the mere PRESENCE of a `generateSitemaps` export
    // (Next.js then serves only /sitemap/[id].xml and emits no /sitemap.xml),
    // independent of what the default export returns. Guard the mechanism, not
    // just the payload: re-adding `generateSitemaps` while leaving the default
    // returning every URL would re-404 production yet keep the payload assertions
    // below green.
    expect(
      (sitemapModule as Record<string, unknown>).generateSitemaps,
    ).toBeUndefined();
  });

  it('is one un-sharded sitemap: a non-empty array, no shard id required', () => {
    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThan(0);
  });

  it('emits exactly one absolute-https entry per indexable route', () => {
    const expected = new Set(allRoutes().map((r) => absoluteUrl(r.path)));
    const got = entries.map((e) => String(e.url));
    for (const url of expected) expect(got).toContain(url);
    expect(new Set(got).size).toBe(got.length); // no duplicates
    expect(got.length).toBe(expected.size); // no extras, none missing
    for (const url of got) expect(url.startsWith('https://'), url).toBe(true); // crawlers need absolute URLs
  });
});
