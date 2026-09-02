import { describe, expect, it } from 'vitest';
import {
  CONCORDANCE,
  LAYER_ASSESSMENTS,
  TRADE_MAPPING,
} from '@/data/crop-evidence';
import {
  CONCORDANCE_KINDS,
  GAP_REASONS,
  RESEARCHED_GAP_REASONS,
  TRADE_MAPPING_OUTCOMES,
} from '@/types/crop-evidence';
import { INTEGRATION_LAYERS, allIntegrations } from '@/lib/crops/integration';
import { CROP_CONCEPTS } from '@/data/crop-identity/concepts';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { SOURCE_MAP } from '@/lib/sources/registry';

const I = allIntegrations();
const reach = (layer: string) =>
  I.filter((x) => x.coverage.find((c) => c.layer === layer)!.refs.length > 0)
    .length;

describe('every coverage figure is accounted for', () => {
  it('assesses every layer the matrix reports', () => {
    const assessed = new Set(LAYER_ASSESSMENTS.map((a) => a.layer));
    for (const l of INTEGRATION_LAYERS) expect(assessed.has(l), l).toBe(true);
  });

  it('never says "missing" — every gap has a reason from the vocabulary', () => {
    for (const a of LAYER_ASSESSMENTS) {
      expect(GAP_REASONS, a.layer).toContain(a.reason);
      expect(a.finding.length, a.layer).toBeGreaterThan(120);
      expect(a.wouldRaiseCoverageBy.length, a.layer).toBeGreaterThan(40);
    }
  });

  it('records a reach that matches the live matrix', () => {
    // The part that makes this more than prose. An assessment written against
    // one coverage figure and left behind while coverage moved is stale.
    for (const a of LAYER_ASSESSMENTS)
      expect(a.reachesAtAssessment, a.layer).toBe(reach(a.layer));
  });

  it('names a source wherever it claims somebody looked', () => {
    for (const a of LAYER_ASSESSMENTS)
      if (RESEARCHED_GAP_REASONS.includes(a.reason)) {
        expect(a.sourceIds?.length ?? 0, a.layer).toBeGreaterThan(0);
        for (const s of a.sourceIds!)
          expect(SOURCE_MAP.has(s), `${a.layer}/${s}`).toBe(true);
      }
  });

  it('does not record a gap reason for a layer with no gap', () => {
    for (const a of LAYER_ASSESSMENTS)
      if (reach(a.layer) === I.length)
        expect(a.reason, a.layer).toBe('NOT_APPLICABLE');
  });
});

describe('the concordance distinguishes a crop from a concept', () => {
  const commodities = PUBLISHED_CONTENT.filter(
    (c) => c.contentType === 'commodity',
  ) as unknown as { slug: string; sourceCrop?: { slug?: string } }[];
  const conceptSlugs = new Set(CROP_CONCEPTS.map((k) => k.slug));

  it('classifies every non-exact mapping', () => {
    const classified = new Set(CONCORDANCE.map((c) => c.commoditySlug));
    for (const x of commodities) {
      const named = x.sourceCrop?.slug;
      if (!named || conceptSlugs.has(named))
        expect(classified.has(x.slug), x.slug).toBe(true);
    }
  });

  it('agrees with what each commodity actually names', () => {
    for (const c of CONCORDANCE) {
      expect(CONCORDANCE_KINDS, c.commoditySlug).toContain(c.kind);
      const named = commodities.find((x) => x.slug === c.commoditySlug)
        ?.sourceCrop?.slug;
      if (c.kind === 'ANIMAL_PRODUCT')
        expect(named, c.commoditySlug).toBeUndefined();
      else expect(c.cropSlug, c.commoditySlug).toBe(named);
    }
  });

  it('files a multi-taxon concept as broader, never as exact', () => {
    for (const c of CONCORDANCE)
      if (c.cropSlug && conceptSlugs.has(c.cropSlug))
        expect(c.kind, c.commoditySlug).toBe('BROADER_CROP_CONCEPT');
  });

  it('leaves the coffee species without market data, correctly', () => {
    // Green coffee names the concept. If arabica ever shows market data, either
    // a species-level commodity was published or the concordance was loosened.
    const arabica = I.find((x) => x.slug === 'arabica-coffee')!;
    expect(
      arabica.coverage.find((c) => c.layer === 'markets')!.refs.length,
    ).toBe(0);
    const coffee = I.find((x) => x.slug === 'coffee')!;
    expect(
      coffee.coverage.find((c) => c.layer === 'markets')!.refs.length,
    ).toBeGreaterThan(0);
  });
});

describe('trade', () => {
  it('records an outcome, what was examined, and what would change it', () => {
    expect(TRADE_MAPPING_OUTCOMES).toContain(TRADE_MAPPING.outcome);
    expect(TRADE_MAPPING.examined.length).toBeGreaterThanOrEqual(2);
    expect(TRADE_MAPPING.finding.length).toBeGreaterThan(200);
    expect(TRADE_MAPPING.wouldChangeIf.length).toBeGreaterThan(40);
  });

  it('leaves trade coverage at zero rather than inventing a mapping', () => {
    expect(reach('trade')).toBe(0);
    // And the outcome must not claim a key the corpus can use, since it has none.
    expect(['CROP_KEY_AVAILABLE', 'COMMODITY_KEY_AVAILABLE']).not.toContain(
      TRADE_MAPPING.outcome,
    );
  });
});
