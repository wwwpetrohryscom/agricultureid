import { describe, it, expect } from 'vitest';
import {
  POST_HARVEST,
  QUALITY_ATTRIBUTES,
  POST_HARVEST_DEFECTS,
  QUALITY_MEASUREMENTS,
  COMMODITIES,
  contentUrlPath,
  getContentByType,
  resolveRef,
} from '@/lib/content/registry';
import { postHarvestIssues } from '@/lib/post-harvest/validate-post-harvest';
import { semanticEdges, RELATION_TYPES } from '@/lib/content/relations';
import { sitemapPaths, sectionedRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';
import { CONTENT_TYPES, CONTENT_TYPE_ROUTE } from '@/lib/site';
import { SOURCES } from '@/data/sources';
import {
  ATTRIBUTE_CLASSES,
  DEFECT_CLASSES,
  MEASUREMENT_CLASSES,
  QUALITY_DOMAINS,
  STORAGE_LIKE_CLASSES,
} from '@/types/post-harvest';

const SOURCE_IDS = new Set(SOURCES.map((s) => s.id));
const STORAGE_LIKE = new Set<string>(STORAGE_LIKE_CLASSES);

describe('Phase 5B — type wiring', () => {
  it('registers the three new post-harvest quality types', () => {
    for (const t of [
      'quality-attribute',
      'post-harvest-defect',
      'quality-measurement',
    ]) {
      expect(CONTENT_TYPES).toContain(t);
    }
    expect(CONTENT_TYPE_ROUTE['quality-attribute']).toBe('quality-attributes');
    expect(CONTENT_TYPE_ROUTE['post-harvest-defect']).toBe(
      'post-harvest-defects',
    );
    expect(CONTENT_TYPE_ROUTE['quality-measurement']).toBe(
      'quality-measurements',
    );
  });

  it('has a substantive post-harvest quality cluster', () => {
    expect(QUALITY_ATTRIBUTES.length).toBeGreaterThanOrEqual(25);
    expect(POST_HARVEST_DEFECTS.length).toBeGreaterThanOrEqual(20);
    expect(QUALITY_MEASUREMENTS.length).toBeGreaterThanOrEqual(15);
    // Processes + storage + packaging all live in the post-harvest type.
    expect(POST_HARVEST.length).toBeGreaterThanOrEqual(55);
  });

  it('reports zero post-harvest validation errors', () => {
    expect(postHarvestIssues().filter((i) => i.level === 'error')).toEqual([]);
  });
});

describe('Phase 5B — the five quality domains stay separate', () => {
  it('gives every attribute exactly one domain and an anti-conflation statement', () => {
    for (const a of QUALITY_ATTRIBUTES) {
      expect(ATTRIBUTE_CLASSES, a.slug).toContain(a.attributeClass);
      expect(QUALITY_DOMAINS, a.slug).toContain(a.qualityDomain);
      // Every attribute must say what it is NOT an indicator of.
      expect(
        a.notAnIndicatorOf.length,
        `${a.slug} notAnIndicatorOf`,
      ).toBeGreaterThan(0);
      for (const s of a.notAnIndicatorOf)
        expect(s.trim().length, a.slug).toBeGreaterThan(0);
    }
  });

  it('covers more than one domain across the corpus', () => {
    const domains = new Set(QUALITY_ATTRIBUTES.map((a) => a.qualityDomain));
    expect(domains.size).toBeGreaterThanOrEqual(3);
  });

  it('never smuggles a threshold into typicalUnits (labels only, no digits)', () => {
    for (const a of QUALITY_ATTRIBUTES) {
      for (const u of a.typicalUnits ?? []) {
        expect(
          /\d/.test(u),
          `${a.slug}: typicalUnits "${u}" contains a value`,
        ).toBe(false);
      }
    }
  });
});

describe('Phase 5B — defects admit the limits of diagnosis', () => {
  it('requires diagnosticLimitations on every defect', () => {
    for (const d of POST_HARVEST_DEFECTS) {
      expect(DEFECT_CLASSES, d.slug).toContain(d.defectClass);
      expect(d.diagnosticLimitations.length, `${d.slug}`).toBeGreaterThan(0);
    }
  });

  it('resolves every defect reference to a real published page', () => {
    for (const d of POST_HARVEST_DEFECTS) {
      for (const ref of d.affectedCommodities ?? []) {
        expect(ref.type).toBe('commodity');
        expect(resolveRef(ref), `${d.slug} → ${ref.slug}`).toBeDefined();
      }
      for (const ref of d.reducedByProcesses ?? []) {
        expect(ref.type).toBe('post-harvest');
        expect(resolveRef(ref), `${d.slug} → ${ref.slug}`).toBeDefined();
      }
    }
  });
});

describe('Phase 5B — measurements', () => {
  it('declares what it measures and where it misleads', () => {
    for (const m of QUALITY_MEASUREMENTS) {
      expect(MEASUREMENT_CLASSES, m.slug).toContain(m.measurementClass);
      expect(m.measures.length, `${m.slug} measures`).toBeGreaterThan(0);
      expect(
        m.measurementLimitations.length,
        `${m.slug} measurementLimitations`,
      ).toBeGreaterThan(0);
      for (const ref of m.measures) {
        expect(ref.type).toBe('quality-attribute');
        expect(resolveRef(ref), `${m.slug} → ${ref.slug}`).toBeDefined();
      }
    }
  });

  it('keeps attribute↔measurement reciprocal', () => {
    for (const a of QUALITY_ATTRIBUTES) {
      for (const ref of a.measuredBy ?? []) {
        const m = resolveRef(ref) as (typeof QUALITY_MEASUREMENTS)[number];
        expect(m, `${a.slug} → ${ref.slug}`).toBeDefined();
        expect(
          m.measures.some((r) => r.slug === a.slug),
          `${ref.slug} does not list ${a.slug} in measures`,
        ).toBe(true);
      }
    }
  });
});

describe('Phase 5B — storage systems', () => {
  it('requires an operating principle and risks from every storage/cooling system', () => {
    const systems = POST_HARVEST.filter(
      (p) => p.postHarvestClass && STORAGE_LIKE.has(p.postHarvestClass),
    );
    expect(systems.length).toBeGreaterThanOrEqual(15);
    for (const s of systems) {
      expect(
        s.operatingPrinciple?.trim().length,
        `${s.slug} principle`,
      ).toBeGreaterThan(0);
      expect(s.riskFactors?.length, `${s.slug} riskFactors`).toBeGreaterThan(0);
    }
  });

  it('only lets a commodity be stored in a real storage/cooling system', () => {
    const bySlug = new Map(POST_HARVEST.map((p) => [p.slug, p]));
    for (const c of COMMODITIES) {
      for (const ref of c.storageSystems ?? []) {
        const target = bySlug.get(ref.slug);
        expect(target, `${c.slug} → ${ref.slug}`).toBeDefined();
        expect(
          STORAGE_LIKE.has(target!.postHarvestClass ?? ''),
          `${c.slug}.storageSystems → ${ref.slug} is "${target!.postHarvestClass}", not a storage/cooling system`,
        ).toBe(true);
      }
    }
  });
});

describe('Phase 5B — graph, routes, and discovery', () => {
  it('derives correctly-directed post-harvest quality edges', () => {
    const attr = QUALITY_ATTRIBUTES.find((a) => (a.measuredBy ?? []).length);
    if (attr) {
      const e = semanticEdges(attr).find((x) => x.field === 'measuredBy');
      expect(e?.relation).toBe('measuredBy');
    }
    const defect = POST_HARVEST_DEFECTS.find(
      (d) => (d.affectedCommodities ?? []).length,
    );
    if (defect) {
      const e = semanticEdges(defect).find(
        (x) => x.field === 'affectedCommodities',
      );
      expect(e?.relation).toBe('damagesCommodity');
    }
    for (const item of [
      ...QUALITY_ATTRIBUTES,
      ...POST_HARVEST_DEFECTS,
      ...QUALITY_MEASUREMENTS,
    ]) {
      for (const e of semanticEdges(item))
        expect(
          RELATION_TYPES.has(e.relation),
          `${item.slug}: ${e.relation}`,
        ).toBe(true);
    }
  });

  it('routes the whole cluster into the sitemap and its own shard', () => {
    const paths = sitemapPaths();
    for (const hub of [
      '/post-harvest',
      '/quality-attributes',
      '/post-harvest-defects',
      '/quality-measurements',
    ])
      expect(paths.has(hub), hub).toBe(true);

    const cluster = [
      ...POST_HARVEST,
      ...QUALITY_ATTRIBUTES,
      ...POST_HARVEST_DEFECTS,
      ...QUALITY_MEASUREMENTS,
    ];
    for (const item of cluster)
      expect(paths.has(contentUrlPath(item)), item.slug).toBe(true);

    const shard = sectionedRoutes()['post-harvest'];
    expect(shard.length).toBe(
      cluster.filter((i) => i.editorialStatus === 'published').length,
    );
  });

  it('indexes the cluster for search', () => {
    const docs = buildSearchDocuments();
    for (const t of [
      'quality-attribute',
      'post-harvest-defect',
      'quality-measurement',
    ]) {
      expect(docs.filter((d) => d.type === t).length, t).toBe(
        getContentByType(t as never).length,
      );
    }
  });

  it('keeps every cluster page sourced and substantive', () => {
    const cluster = [
      ...QUALITY_ATTRIBUTES,
      ...POST_HARVEST_DEFECTS,
      ...QUALITY_MEASUREMENTS,
    ];
    for (const item of cluster) {
      expect(item.sourceReferences.length, item.slug).toBeGreaterThanOrEqual(2);
      for (const r of item.sourceReferences)
        expect(SOURCE_IDS.has(r.sourceId), `${item.slug}: ${r.sourceId}`).toBe(
          true,
        );
      expect(item.limitations.length, item.slug).toBeGreaterThan(0);
      expect(item.sections.length, item.slug).toBeGreaterThanOrEqual(2);
    }
  });
});
