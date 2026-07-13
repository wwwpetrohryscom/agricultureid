import { describe, it, expect } from 'vitest';
import {
  ALL_CONTENT,
  PUBLISHED_CONTENT,
  POST_HARVEST,
  getContentByType,
  getContent,
  contentUrlPath,
  resolveRef,
} from '@/lib/content/registry';
import { outgoingRefs } from '@/lib/content/graph';
import {
  CONTENT_TYPES,
  CONTENT_TYPE_ROUTE,
  CONTENT_TYPE_LABEL,
  SECTIONS,
} from '@/lib/site';
import { SOURCES } from '@/data/sources';
import { buildSearchDocuments } from '@/lib/search/documents';
import { sitemapPaths } from '@/lib/seo/routes';
import type { PostHarvestContent } from '@/types/content';

const SOURCE_IDS = new Set(SOURCES.map((s) => s.id));
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

describe('Phase 4D — post-harvest content type wiring', () => {
  it('registers "post-harvest" as a first-class content type', () => {
    expect(CONTENT_TYPES).toContain('post-harvest');
    expect(CONTENT_TYPE_ROUTE['post-harvest']).toBe('post-harvest');
    expect(CONTENT_TYPE_LABEL['post-harvest']).toBe('Post-Harvest');
    expect(SECTIONS.some((s) => s.href === '/post-harvest' && s.active)).toBe(
      true,
    );
  });

  it('has a substantive set of post-harvest entries, all published', () => {
    expect(POST_HARVEST.length).toBeGreaterThanOrEqual(20);
    expect(getContentByType('post-harvest').length).toBe(POST_HARVEST.length);
    for (const item of POST_HARVEST) {
      expect(item.contentType).toBe('post-harvest');
      expect(item.editorialStatus).toBe('published');
    }
  });

  it('gives every post-harvest entry the required, substantive fields', () => {
    for (const item of POST_HARVEST) {
      expect(SLUG.test(item.slug)).toBe(true);
      expect(item.id).toBe(`post-harvest-${item.slug}`);
      expect(item.title.trim().length).toBeGreaterThan(0);
      expect(item.summary.trim().length).toBeGreaterThan(0);
      expect(item.sections.length).toBeGreaterThanOrEqual(2);
      expect(item.keyFacts.length).toBeGreaterThanOrEqual(4);
      expect(item.limitations.length).toBeGreaterThan(0);
      expect(item.sourceReferences.length).toBeGreaterThanOrEqual(2);
      expect(item.geographicScope.trim().length).toBeGreaterThan(0);
    }
  });

  it('cites only registered sources across post-harvest entries', () => {
    for (const item of POST_HARVEST) {
      for (const ref of item.sourceReferences) {
        expect(SOURCE_IDS.has(ref.sourceId)).toBe(true);
      }
    }
  });

  it('resolves every post-harvest cross-reference to a real page', () => {
    for (const item of POST_HARVEST) {
      for (const ref of outgoingRefs(item)) {
        expect(resolveRef(ref)).toBeDefined();
      }
    }
  });

  it('routes and indexes post-harvest pages', () => {
    const paths = sitemapPaths();
    expect(paths.has('/post-harvest')).toBe(true);
    for (const item of POST_HARVEST) {
      expect(contentUrlPath(item)).toBe(`/post-harvest/${item.slug}`);
      expect(paths.has(contentUrlPath(item))).toBe(true);
      expect(getContent('post-harvest', item.slug)).toBeDefined();
    }
    const docs = buildSearchDocuments();
    const phDocs = docs.filter((d) => d.type === 'post-harvest');
    expect(phDocs.length).toBe(POST_HARVEST.length);
  });
});

describe('Phase 4D — knowledge-base expansion', () => {
  it('grew the corpus well beyond the pre-4D baseline', () => {
    // Pre-4D published content was 493; 4D added ~154 across clusters.
    expect(PUBLISHED_CONTENT.length).toBeGreaterThanOrEqual(640);
  });

  it('expanded every targeted cluster to a healthy minimum', () => {
    const min: Record<string, number> = {
      crop: 150,
      'plant-disease': 48,
      pest: 55,
      fertilizer: 42,
      'soil-topic': 28,
      soil: 20,
      machinery: 25,
      climate: 19,
      'farming-system': 19,
      'irrigation-method': 15,
      'post-harvest': 20,
    };
    for (const [type, n] of Object.entries(min)) {
      expect(getContentByType(type as never).length).toBeGreaterThanOrEqual(n);
    }
  });

  it('keeps ids and canonical paths globally unique across the whole corpus', () => {
    const ids = new Set<string>();
    const paths = new Set<string>();
    for (const item of ALL_CONTENT) {
      expect(ids.has(item.id)).toBe(false);
      ids.add(item.id);
      const p = contentUrlPath(item);
      expect(paths.has(p)).toBe(false);
      paths.add(p);
    }
  });

  it('keeps SEO titles and descriptions unique across published content', () => {
    const titles = new Set<string>();
    const descs = new Set<string>();
    for (const item of PUBLISHED_CONTENT) {
      const t = item.seo.title.trim().toLowerCase();
      const d = item.seo.description.trim().toLowerCase();
      expect(titles.has(t)).toBe(false);
      titles.add(t);
      expect(descs.has(d)).toBe(false);
      descs.add(d);
    }
  });
});
