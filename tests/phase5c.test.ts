import { describe, it, expect } from 'vitest';
import {
  PROCESSING_METHODS,
  COMMODITY_PRODUCTS,
  contentUrlPath,
  getContentByType,
  resolveRef,
} from '@/lib/content/registry';
import { processingIssues } from '@/lib/processing/validate-processing';
import { semanticEdges, RELATION_TYPES } from '@/lib/content/relations';
import { sitemapPaths, sectionedRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';
import { CONTENT_TYPES, CONTENT_TYPE_ROUTE } from '@/lib/site';
import { SOURCES } from '@/data/sources';
import {
  PROCESSING_CLASSES,
  PROCESSING_STAGES,
  TRANSFORMATION_BASES,
} from '@/types/processing';

const SOURCE_IDS = new Set(SOURCES.map((s) => s.id));
const STAGE_ORDER = new Map(PROCESSING_STAGES.map((s, i) => [s, i]));

describe('Phase 5C — type wiring', () => {
  it('registers processing-method with its own route', () => {
    expect(CONTENT_TYPES).toContain('processing-method');
    expect(CONTENT_TYPE_ROUTE['processing-method']).toBe('processing');
  });

  it('does NOT create duplicate product types (5A commodity-product is the home)', () => {
    // The brief's PrimaryProduct/CoProduct/ByProduct entries are productClass
    // values on the existing commodity-product type, not separate page types.
    for (const t of ['primary-product', 'co-product', 'by-product'])
      expect(CONTENT_TYPES).not.toContain(t);
    expect(CONTENT_TYPE_ROUTE['commodity-product']).toBe('commodity-products');
    const classes = new Set(COMMODITY_PRODUCTS.map((p) => p.productClass));
    expect(classes.has('primary-product')).toBe(true);
    expect(classes.has('co-product')).toBe(true);
    expect(classes.has('by-product')).toBe(true);
  });

  it('has a substantive processing corpus', () => {
    expect(PROCESSING_METHODS.length).toBeGreaterThanOrEqual(25);
  });

  it('reports zero processing validation errors', () => {
    expect(processingIssues().filter((i) => i.level === 'error')).toEqual([]);
  });
});

describe('Phase 5C — transformation integrity', () => {
  it('gives every method a resolving input and at least one output', () => {
    for (const m of PROCESSING_METHODS) {
      expect(m.inputCommodities.length, `${m.slug} inputs`).toBeGreaterThan(0);
      for (const ref of m.inputCommodities) {
        expect(ref.type).toBe('commodity');
        expect(resolveRef(ref), `${m.slug} → ${ref.slug}`).toBeDefined();
      }
      const outputs =
        (m.primaryOutputs?.length ?? 0) +
        (m.coProductOutputs?.length ?? 0) +
        (m.byProductOutputs?.length ?? 0);
      expect(outputs, `${m.slug} has no output`).toBeGreaterThan(0);
    }
  });

  it('never breaks the chain: an output derives from one of the inputs', () => {
    for (const m of PROCESSING_METHODS) {
      const inputs = new Set(m.inputCommodities.map((r) => r.slug));
      const all = [
        ...(m.primaryOutputs ?? []),
        ...(m.coProductOutputs ?? []),
        ...(m.byProductOutputs ?? []),
      ];
      for (const ref of all) {
        const p = resolveRef(ref) as (typeof COMMODITY_PRODUCTS)[number];
        expect(p, `${m.slug} → ${ref.slug}`).toBeDefined();
        expect(
          inputs.has(p.derivedFrom.slug),
          `${m.slug}: output ${ref.slug} derives from ${p.derivedFrom.slug}, not an input`,
        ).toBe(true);
      }
    }
  });

  it('matches every output to its declared product class', () => {
    const buckets = [
      ['primaryOutputs', 'primary-product'],
      ['coProductOutputs', 'co-product'],
      ['byProductOutputs', 'by-product'],
    ] as const;
    for (const m of PROCESSING_METHODS) {
      for (const [field, cls] of buckets) {
        for (const ref of m[field] ?? []) {
          const p = resolveRef(ref) as (typeof COMMODITY_PRODUCTS)[number];
          expect(p.productClass, `${m.slug}.${field} → ${ref.slug}`).toBe(cls);
        }
      }
    }
  });

  it('keeps method↔product reciprocal in both directions', () => {
    for (const m of PROCESSING_METHODS) {
      const outs = [
        ...(m.primaryOutputs ?? []),
        ...(m.coProductOutputs ?? []),
        ...(m.byProductOutputs ?? []),
      ];
      for (const ref of outs) {
        const p = resolveRef(ref) as (typeof COMMODITY_PRODUCTS)[number];
        expect(
          (p.producedBy ?? []).some((r) => r.slug === m.slug),
          `${ref.slug} does not list ${m.slug} in producedBy`,
        ).toBe(true);
      }
    }
    for (const p of COMMODITY_PRODUCTS) {
      for (const ref of p.producedBy ?? []) {
        const m = resolveRef(ref) as (typeof PROCESSING_METHODS)[number];
        expect(m, `${p.slug} → ${ref.slug}`).toBeDefined();
        const declared = [
          ...(m.primaryOutputs ?? []),
          ...(m.coProductOutputs ?? []),
          ...(m.byProductOutputs ?? []),
        ].some((r) => r.slug === p.slug);
        expect(declared, `${ref.slug} does not output ${p.slug}`).toBe(true);
      }
    }
  });

  it('declares no output twice and no self-referencing sequence', () => {
    for (const m of PROCESSING_METHODS) {
      const outs = [
        ...(m.primaryOutputs ?? []),
        ...(m.coProductOutputs ?? []),
        ...(m.byProductOutputs ?? []),
      ].map((r) => r.slug);
      expect(new Set(outs).size, `${m.slug} duplicate output`).toBe(
        outs.length,
      );
      for (const ref of [...(m.precededBy ?? []), ...(m.followedBy ?? [])])
        expect(ref.slug, `${m.slug} self-sequence`).not.toBe(m.slug);
    }
  });

  it('has no cycle in the processing sequence graph', () => {
    const bySlug = new Map(PROCESSING_METHODS.map((m) => [m.slug, m]));
    const colour = new Map<string, number>();
    const visit = (slug: string): boolean => {
      colour.set(slug, 1);
      for (const ref of bySlug.get(slug)?.followedBy ?? []) {
        const c = colour.get(ref.slug);
        if (c === 1) return true;
        if (c === undefined && bySlug.has(ref.slug) && visit(ref.slug))
          return true;
      }
      colour.set(slug, 2);
      return false;
    };
    for (const m of PROCESSING_METHODS)
      if (!colour.has(m.slug))
        expect(visit(m.slug), `cycle through ${m.slug}`).toBe(false);
  });

  it('runs declared sequences forwards through the stage order', () => {
    const bySlug = new Map(PROCESSING_METHODS.map((m) => [m.slug, m]));
    for (const m of PROCESSING_METHODS) {
      for (const ref of m.followedBy ?? []) {
        const next = bySlug.get(ref.slug);
        if (!next) continue;
        const a = STAGE_ORDER.get(m.processStage)!;
        const b = STAGE_ORDER.get(next.processStage)!;
        expect(
          b,
          `${m.slug} → ${ref.slug} runs backwards`,
        ).toBeGreaterThanOrEqual(a);
      }
    }
  });
});

describe('Phase 5C — vocabulary, safety, and provenance', () => {
  it('uses only the controlled vocabularies', () => {
    for (const m of PROCESSING_METHODS) {
      expect(PROCESSING_CLASSES, m.slug).toContain(m.processingClass);
      expect(PROCESSING_STAGES, m.slug).toContain(m.processStage);
      if (m.transformationBasis)
        expect(TRANSFORMATION_BASES, m.slug).toContain(m.transformationBasis);
    }
  });

  it('requires objective, principle, and safety limitations everywhere', () => {
    for (const m of PROCESSING_METHODS) {
      expect(m.processObjective.trim().length, m.slug).toBeGreaterThan(0);
      expect(m.operatingPrinciple.trim().length, m.slug).toBeGreaterThan(0);
      expect(m.safetyLimitations.length, `${m.slug} safety`).toBeGreaterThan(0);
    }
  });

  it('states that processing pages are not operating instructions', () => {
    // Every method must disclaim operating-instruction status somewhere in its
    // safety framing — this is the boundary the whole phase rests on.
    for (const m of PROCESSING_METHODS) {
      const text = [...m.safetyLimitations, ...m.limitations]
        .join(' ')
        .toLowerCase();
      expect(
        /not an operating instruction|educational reference|not an? .*instruction/.test(
          text,
        ),
        `${m.slug} lacks an operating-instruction disclaimer`,
      ).toBe(true);
    }
  });

  it('cites only registered sources and is substantive', () => {
    for (const m of PROCESSING_METHODS) {
      expect(m.sourceReferences.length, m.slug).toBeGreaterThanOrEqual(2);
      for (const r of m.sourceReferences)
        expect(SOURCE_IDS.has(r.sourceId), `${m.slug}: ${r.sourceId}`).toBe(
          true,
        );
      expect(m.limitations.length, m.slug).toBeGreaterThan(0);
      expect(m.sections.length, m.slug).toBeGreaterThanOrEqual(3);
    }
  });
});

describe('Phase 5C — graph, routes, discovery', () => {
  it('derives correctly-directed processing edges', () => {
    const m = PROCESSING_METHODS.find((x) => (x.primaryOutputs ?? []).length);
    if (m) {
      const edges = semanticEdges(m);
      expect(edges.find((e) => e.field === 'inputCommodities')?.relation).toBe(
        'processInputOf',
      );
      expect(edges.find((e) => e.field === 'primaryOutputs')?.relation).toBe(
        'producesPrimaryProduct',
      );
    }
    for (const x of PROCESSING_METHODS)
      for (const e of semanticEdges(x))
        expect(RELATION_TYPES.has(e.relation), `${x.slug}: ${e.relation}`).toBe(
          true,
        );
  });

  it('routes every method into the sitemap and post-harvest shard', () => {
    const paths = sitemapPaths();
    expect(paths.has('/processing')).toBe(true);
    for (const m of PROCESSING_METHODS)
      expect(paths.has(contentUrlPath(m)), m.slug).toBe(true);
    const shard = sectionedRoutes()['post-harvest'];
    const inShard = new Set(shard.map((r) => r.path));
    for (const m of PROCESSING_METHODS)
      expect(inShard.has(contentUrlPath(m)), `${m.slug} not in shard`).toBe(
        true,
      );
  });

  it('keeps route intent unique (processing methods never collide with products)', () => {
    const methodPaths = new Set(
      PROCESSING_METHODS.map((m) => contentUrlPath(m)),
    );
    for (const p of COMMODITY_PRODUCTS)
      expect(methodPaths.has(contentUrlPath(p)), p.slug).toBe(false);
  });

  it('indexes methods for search', () => {
    const docs = buildSearchDocuments();
    expect(docs.filter((d) => d.type === 'processing-method').length).toBe(
      getContentByType('processing-method' as never).length,
    );
  });
});
