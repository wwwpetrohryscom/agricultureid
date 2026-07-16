import { describe, it, expect } from 'vitest';
import {
  COMMODITIES,
  COMMODITY_PRODUCTS,
  COMMODITY_GRADES,
  PUBLISHED_CONTENT,
  contentUrlPath,
  getContentByType,
  resolveRef,
} from '@/lib/content/registry';
import {
  commoditiesForCrop,
  productsForCommodity,
  gradesForCommodity,
} from '@/lib/commodity/registry';
import { commodityIssues } from '@/lib/commodity/validate-commodity';
import { semanticEdges, RELATION_TYPES } from '@/lib/content/relations';
import { sitemapPaths, sectionedRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';
import { CONTENT_TYPES, CONTENT_TYPE_ROUTE } from '@/lib/site';
import { SOURCES } from '@/data/sources';
import {
  COMMODITY_CLASSES,
  COMMODITY_USES,
  PRODUCT_CLASSES,
} from '@/types/commodity';

const SOURCE_IDS = new Set(SOURCES.map((s) => s.id));

describe('Phase 5A — content-type wiring', () => {
  it('registers commodity, commodity-product, and commodity-grade types', () => {
    for (const t of ['commodity', 'commodity-product', 'commodity-grade']) {
      expect(CONTENT_TYPES).toContain(t);
    }
    expect(CONTENT_TYPE_ROUTE['commodity']).toBe('commodities');
    expect(CONTENT_TYPE_ROUTE['commodity-product']).toBe('commodity-products');
    expect(CONTENT_TYPE_ROUTE['commodity-grade']).toBe('commodity-grades');
  });

  it('has a substantive commodity cluster', () => {
    expect(COMMODITIES.length).toBeGreaterThanOrEqual(60);
    expect(COMMODITY_PRODUCTS.length).toBeGreaterThanOrEqual(30);
    expect(COMMODITY_GRADES.length).toBeGreaterThanOrEqual(5);
  });

  it('reports zero commodity-taxonomy validation errors', () => {
    expect(commodityIssues().filter((i) => i.level === 'error')).toEqual([]);
  });
});

describe('Phase 5A — crop and commodity are never conflated', () => {
  it('anchors every commodity to exactly one published crop or livestock parent', () => {
    for (const c of COMMODITIES) {
      const hasCrop = Boolean(c.sourceCrop);
      const hasLivestock = Boolean(c.sourceLivestock);
      // Exactly one parent.
      expect(hasCrop !== hasLivestock, `${c.slug} parent cardinality`).toBe(
        true,
      );
      const ref = c.sourceCrop ?? c.sourceLivestock;
      expect(ref, c.slug).toBeDefined();
      expect(ref!.type, `${c.slug} parent type`).toBe(
        hasCrop ? 'crop' : 'livestock',
      );
      const parent = resolveRef(ref!);
      expect(parent, `${c.slug} → ${ref!.slug}`).toBeDefined();
      expect(parent!.editorialStatus).toBe('published');
    }
  });

  it('never models a commodity as a crop or a product as a crop', () => {
    for (const c of COMMODITIES) expect(c.contentType).toBe('commodity');
    for (const p of COMMODITY_PRODUCTS) {
      expect(p.contentType).toBe('commodity-product');
      // A processed product derives from a commodity — never directly a crop.
      expect(p.derivedFrom.type, `${p.slug} derivedFrom`).toBe('commodity');
    }
  });

  it('gives commodities a distinct canonical namespace from crops', () => {
    for (const c of COMMODITIES) {
      expect(contentUrlPath(c)).toMatch(/^\/commodities\//);
    }
    for (const p of COMMODITY_PRODUCTS) {
      expect(contentUrlPath(p)).toMatch(/^\/commodity-products\//);
    }
  });

  it('does not duplicate a commodity title under the same parent', () => {
    const seen = new Map<string, Set<string>>();
    for (const c of COMMODITIES) {
      const ref = c.sourceCrop ?? c.sourceLivestock;
      if (!ref) continue;
      const key = `${ref.type}:${ref.slug}`;
      const set = seen.get(key) ?? new Set<string>();
      const title = c.title.trim().toLowerCase();
      expect(set.has(title), `duplicate "${title}" under ${key}`).toBe(false);
      set.add(title);
      seen.set(key, set);
    }
  });
});

describe('Phase 5A — transformation pathways', () => {
  it('makes every pathway reciprocal and class-consistent', () => {
    const buckets = [
      ['primaryProducts', 'primary-product'],
      ['coProducts', 'co-product'],
      ['byProducts', 'by-product'],
    ] as const;
    for (const c of COMMODITIES) {
      for (const [field, cls] of buckets) {
        for (const ref of c[field] ?? []) {
          expect(ref.type).toBe('commodity-product');
          const target = resolveRef(ref);
          expect(target, `${c.slug}.${field} → ${ref.slug}`).toBeDefined();
          const product = target as (typeof COMMODITY_PRODUCTS)[number];
          expect(product.productClass, `${ref.slug} class`).toBe(cls);
          expect(product.derivedFrom.slug, `${ref.slug} derivedFrom`).toBe(
            c.slug,
          );
        }
      }
    }
  });

  it('lists every product in its parent commodity (no one-way edges)', () => {
    for (const p of COMMODITY_PRODUCTS) {
      const parent = resolveRef(p.derivedFrom) as
        (typeof COMMODITIES)[number] | undefined;
      expect(parent, `${p.slug} parent`).toBeDefined();
      const bucket =
        p.productClass === 'primary-product'
          ? parent!.primaryProducts
          : p.productClass === 'co-product'
            ? parent!.coProducts
            : parent!.byProducts;
      expect(
        (bucket ?? []).some((r) => r.slug === p.slug),
        `${parent!.slug} does not list ${p.productClass} ${p.slug}`,
      ).toBe(true);
    }
  });

  it('uses only the controlled class and use vocabularies', () => {
    for (const c of COMMODITIES) {
      expect(COMMODITY_CLASSES).toContain(c.commodityClass);
      expect(c.primaryUses.length).toBeGreaterThan(0);
      for (const u of [...c.primaryUses, ...(c.secondaryUses ?? [])])
        expect(COMMODITY_USES).toContain(u);
    }
    for (const p of COMMODITY_PRODUCTS) {
      expect(PRODUCT_CLASSES).toContain(p.productClass);
      for (const u of [...p.primaryUses, ...(p.secondaryUses ?? [])])
        expect(COMMODITY_USES).toContain(u);
    }
  });

  it('derives correctly-directed semantic edges for the cluster', () => {
    const commodity = COMMODITIES.find((c) => (c.primaryProducts ?? []).length);
    expect(commodity).toBeDefined();
    const edges = semanticEdges(commodity!);
    const toProduct = edges.find((e) => e.field === 'primaryProducts');
    expect(toProduct?.relation).toBe('processedInto');
    const toParent = edges.find(
      (e) => e.field === 'sourceCrop' || e.field === 'sourceLivestock',
    );
    expect(toParent?.relation).toBe('harvestedFrom');
    for (const e of edges) expect(RELATION_TYPES.has(e.relation)).toBe(true);

    const product = COMMODITY_PRODUCTS[0]!;
    const pEdge = semanticEdges(product).find((e) => e.field === 'derivedFrom');
    expect(pEdge?.relation).toBe('derivedFromCommodity');
  });
});

describe('Phase 5A — grading standards', () => {
  it('always carries body, jurisdiction, edition, legal status, and limits', () => {
    for (const g of COMMODITY_GRADES) {
      expect(g.standardBody.trim().length, g.slug).toBeGreaterThan(0);
      expect(g.jurisdiction.trim().length, g.slug).toBeGreaterThan(0);
      expect(g.edition.trim().length, g.slug).toBeGreaterThan(0);
      expect(
        ['mandatory', 'voluntary', 'contractual', 'unknown'],
        g.slug,
      ).toContain(g.legalStatus);
      expect(g.reproductionLimitations.length, g.slug).toBeGreaterThan(0);
      expect(g.gradedCommodity.type).toBe('commodity');
      expect(resolveRef(g.gradedCommodity), g.slug).toBeDefined();
    }
  });

  it('never states a quantitative criterion without a unit', () => {
    for (const g of COMMODITY_GRADES) {
      for (const c of g.gradeCriteria ?? []) {
        if (c.value?.trim()) {
          expect(c.unit?.trim(), `${g.slug}: ${c.attribute}`).toBeTruthy();
        }
      }
    }
  });

  it('cites only registered sources', () => {
    for (const g of COMMODITY_GRADES) {
      expect(g.sourceReferences.length).toBeGreaterThan(0);
      for (const r of g.sourceReferences)
        expect(SOURCE_IDS.has(r.sourceId), `${g.slug}: ${r.sourceId}`).toBe(
          true,
        );
    }
  });
});

describe('Phase 5A — classification codes', () => {
  it('versions every HS/CN code and cites known sources', () => {
    const all = [...COMMODITIES, ...COMMODITY_PRODUCTS];
    for (const item of all) {
      for (const code of item.commodityCodes ?? []) {
        expect(code.code.trim().length, item.slug).toBeGreaterThan(0);
        if (code.system === 'HS' || code.system === 'CN') {
          expect(
            code.version?.trim(),
            `${item.slug}: ${code.code}`,
          ).toBeTruthy();
        }
        if (code.sourceId) {
          expect(SOURCE_IDS.has(code.sourceId), item.slug).toBe(true);
        }
      }
    }
  });
});

describe('Phase 5A — registry, routes, and discovery', () => {
  it('exposes commodities through their parent crop', () => {
    const withCrop = COMMODITIES.filter((c) => c.sourceCrop);
    expect(withCrop.length).toBeGreaterThan(0);
    const sample = withCrop[0]!;
    expect(
      commoditiesForCrop(sample.sourceCrop!.slug).some(
        (c) => c.slug === sample.slug,
      ),
    ).toBe(true);
    expect(commoditiesForCrop('__nope__')).toEqual([]);
  });

  it('resolves products and grades for a commodity', () => {
    const withProducts = COMMODITIES.find(
      (c) => (c.primaryProducts ?? []).length,
    );
    expect(productsForCommodity(withProducts!.slug).length).toBeGreaterThan(0);
    const withGrade = COMMODITY_GRADES[0]!;
    expect(
      gradesForCommodity(withGrade.gradedCommodity.slug).length,
    ).toBeGreaterThan(0);
  });

  it('includes every cluster page in the sitemap and its own shard', () => {
    const paths = sitemapPaths();
    for (const hub of [
      '/commodities',
      '/commodity-products',
      '/commodity-grades',
    ])
      expect(paths.has(hub), hub).toBe(true);
    const cluster = [
      ...COMMODITIES,
      ...COMMODITY_PRODUCTS,
      ...COMMODITY_GRADES,
    ];
    for (const item of cluster)
      expect(paths.has(contentUrlPath(item)), item.slug).toBe(true);

    const shard = sectionedRoutes().commodities;
    expect(shard.length).toBe(
      cluster.filter((i) => i.editorialStatus === 'published').length,
    );
  });

  it('indexes the cluster for search', () => {
    const docs = buildSearchDocuments();
    for (const t of ['commodity', 'commodity-product', 'commodity-grade']) {
      const n = docs.filter((d) => d.type === t).length;
      expect(n, t).toBe(getContentByType(t as never).length);
    }
  });

  it('keeps every published cluster page reachable and sourced', () => {
    const cluster = PUBLISHED_CONTENT.filter((i) =>
      ['commodity', 'commodity-product', 'commodity-grade'].includes(
        i.contentType,
      ),
    );
    for (const item of cluster) {
      expect(item.sourceReferences.length, item.slug).toBeGreaterThan(0);
      expect(item.limitations.length, item.slug).toBeGreaterThan(0);
      expect(item.sections.length, item.slug).toBeGreaterThanOrEqual(2);
    }
  });
});
