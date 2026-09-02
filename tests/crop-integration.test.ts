import { describe, expect, it } from 'vitest';
import {
  COMMODITIES_BY_CROP,
  COMMODITIES_WITHOUT_CROP,
  INTEGRATION_LAYERS,
  SHARED_HOST_THRESHOLD,
  allIntegrations,
  coverageFor,
  relatedCrops,
} from '@/lib/crops/integration';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { seriesForCommodity } from '@/lib/markets/registry';
import { IDENTITY_BY_SLUG } from '@/lib/crops/identity';
import { qualificationFor } from '@/lib/crops/qualification';

const I = allIntegrations();
const crops = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);

describe('the concordance Wave 31 said was missing', () => {
  it('reverses sourceCrop into a usable index', () => {
    expect(COMMODITIES_BY_CROP.size).toBeGreaterThan(50);
    const commodities = PUBLISHED_CONTENT.filter(
      (c) => c.contentType === 'commodity',
    ) as unknown as { slug: string; sourceCrop?: { slug?: string } }[];
    for (const c of commodities) {
      if (!c.sourceCrop?.slug) continue;
      expect(COMMODITIES_BY_CROP.get(c.sourceCrop.slug), c.slug).toContain(
        c.slug,
      );
    }
  });

  it('leaves only animal products without a crop', () => {
    expect(COMMODITIES_WITHOUT_CROP.length).toBe(6);
    for (const s of COMMODITIES_WITHOUT_CROP)
      expect(/milk|egg|wool|hide/.test(s), s).toBe(true);
  });

  it('reaches price series from the crop side', () => {
    // The specific claim Wave 31 got wrong: that no commodity with market data
    // resolves to a crop.
    const withData = (
      PUBLISHED_CONTENT.filter(
        (c) => c.contentType === 'commodity',
      ) as unknown as {
        slug: string;
        sourceCrop?: { slug?: string };
      }[]
    ).filter((c) => seriesForCommodity(c.slug).length > 0);
    const resolving = withData.filter((c) => c.sourceCrop?.slug);
    expect(resolving.length).toBeGreaterThan(withData.length * 0.9);
    expect(
      coverageFor('wheat').find((c) => c.layer === 'markets')!.refs.length,
    ).toBeGreaterThan(0);
  });

  it('reports markets as real coverage in the qualification view', () => {
    const q = qualificationFor('wheat')!;
    expect(q.enrichment.markets.result).not.toBe('not-modelled');
    expect(q.enrichment.markets.refs.length).toBe(q.enrichment.markets.count);
  });
});

describe('the coverage matrix', () => {
  it('judges every published crop across every layer', () => {
    expect(I.length).toBe(crops.size);
    for (const x of I) {
      expect(x.coverage.map((c) => c.layer).sort()).toEqual(
        [...INTEGRATION_LAYERS].sort(),
      );
    }
  });

  it('counts a layer as reached only when it resolved something', () => {
    for (const x of I) {
      expect(x.layersReached).toBe(
        x.coverage.filter((c) => c.refs.length > 0).length,
      );
      for (const g of x.gaps) {
        const c = x.coverage.find((y) => y.layer === g)!;
        expect(c.refs.length, `${x.slug}/${g}`).toBe(0);
        expect(c.linkage.via, `${x.slug}/${g}`).not.toBe('unkeyed');
      }
    }
  });

  it('says how every layer is joined', () => {
    for (const c of coverageFor('wheat')) {
      if (c.linkage.via === 'unkeyed')
        expect(c.linkage.reason.length, c.layer).toBeGreaterThan(20);
      else if (c.linkage.via === 'indirect')
        expect(c.linkage.through.length, c.layer).toBeGreaterThan(0);
      else expect(c.linkage.field.length, c.layer).toBeGreaterThan(0);
    }
  });

  it('never claims coverage for a layer declared unkeyed', () => {
    for (const x of I)
      for (const c of x.coverage)
        if (c.linkage.via === 'unkeyed')
          expect(c.refs.length, `${x.slug}/${c.layer}`).toBe(0);
  });
});

describe('related crops are derived, not permuted', () => {
  it('stays far below every possible pairing', () => {
    const total = I.reduce((n, x) => n + relatedCrops(x.slug).length, 0);
    expect(total).toBeLessThan(crops.size * 4);
  });

  it('names a true basis for every relation', () => {
    for (const x of I)
      for (const r of relatedCrops(x.slug)) {
        expect(r.slug, x.slug).not.toBe(x.slug);
        expect(crops.has(r.slug), r.slug).toBe(true);
        if (r.basis === 'same-genus')
          expect(
            IDENTITY_BY_SLUG.get(r.slug)?.genus,
            `${x.slug}/${r.slug}`,
          ).toBe(IDENTITY_BY_SLUG.get(x.slug)?.genus);
        if (r.basis === 'shared-host-pressure')
          expect(
            Number(/^(\d+)/.exec(r.detail)?.[1] ?? 0),
            `${x.slug}/${r.slug}`,
          ).toBeGreaterThanOrEqual(SHARED_HOST_THRESHOLD);
      }
  });

  it('is symmetric wherever the basis is', () => {
    for (const x of I)
      for (const r of relatedCrops(x.slug)) {
        if (r.basis === 'same-concept') continue;
        expect(
          relatedCrops(r.slug).some((y) => y.slug === x.slug),
          `${x.slug} → ${r.slug}`,
        ).toBe(true);
      }
  });

  it('relates the species promoted in Wave 32 to their concept page', () => {
    for (const [child, parent] of [
      ['arabica-coffee', 'coffee'],
      ['robusta-coffee', 'coffee'],
      ['upland-cotton', 'cotton'],
    ] as const)
      expect(
        relatedCrops(child).some((r) => r.slug === parent),
        `${child} → ${parent}`,
      ).toBe(true);
  });
});
