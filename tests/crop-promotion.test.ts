import { describe, expect, it } from 'vitest';
import { PROMOTION_NOTES } from '@/data/crop-identity/promotion-notes';
import { allQualifications } from '@/lib/crops/qualification';
import { IDENTITY_BY_SLUG } from '@/lib/crops/identity';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import {
  flaggedPairs,
  measureDepth,
  similarityMatrix,
} from '@/lib/crops/content-depth';
import {
  REVIEWED_PAIRS,
  REVIEWED_PAIR_KEY,
} from '@/data/crop-identity/similar-pairs';
import {
  BENCHMARKS,
  benchmarkIndex,
  runBenchmark,
} from '@/lib/search/benchmark';
import { buildIndex, search } from '@/lib/search/engine';
import { buildSearchDocuments } from '@/lib/search/documents';
import { SYNONYMS } from '@/data/search/synonyms';

const PROMOTED = PROMOTION_NOTES.filter((n) => n.promotedAt);
const Q = allQualifications();
const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
const bySlug = new Map(crops.map((c) => [c.slug, c]));

describe('promotion — every promoted crop was reviewed, not counted', () => {
  it('promoted exactly the crops with a recorded review', () => {
    expect(PROMOTED.length).toBe(7);
    for (const n of PROMOTED) {
      expect(n.promotionReview, n.slug).toBeDefined();
      expect(n.promotionReview!.materialSufficient, n.slug).toBe(true);
      expect(n.promotionReview!.finding.length, n.slug).toBeGreaterThan(80);
    }
  });

  it('records the refusals too', () => {
    const refused = PROMOTION_NOTES.filter(
      (n) => !n.promotedAt && n.promotionReview,
    );
    expect(refused.length).toBeGreaterThan(0);
    for (const n of refused) {
      expect(n.promotionReview!.materialSufficient, n.slug).toBe(false);
      // A refusal has to say what stopped it, not merely that it stopped.
      expect(n.promotionReview!.finding.length, n.slug).toBeGreaterThan(120);
      expect(Q.find((q) => q.slug === n.slug)?.hasPublishedRoute, n.slug).toBe(
        false,
      );
    }
  });

  it('leaves no promoted crop short of the published standard', () => {
    const sim = similarityMatrix(crops);
    for (const n of PROMOTED) {
      const q = Q.find((x) => x.slug === n.slug)!;
      expect(q.status, n.slug).toBe('FULL_PROFILE_ELIGIBLE');
      expect(q.hasPublishedRoute, n.slug).toBe(true);
      expect(IDENTITY_BY_SLUG.get(n.slug)!.profileDepth, n.slug).toBe(
        'full-profile',
      );
      const m = measureDepth(
        bySlug.get(n.slug)!,
        sim.get(n.slug) ?? { max: 0 },
      );
      // Not merely over the gate — at the standard the corpus already holds.
      expect(m.substantiveSections, n.slug).toBeGreaterThanOrEqual(8);
      expect(m.sources, n.slug).toBeGreaterThanOrEqual(4);
      expect(m.limitations, n.slug).toBeGreaterThanOrEqual(2);
    }
  });

  it('adds no reused prose to the corpus', () => {
    // The whole risk of writing seven articles at once is that they become a
    // template. Every flagged pair must still be one a human reviewed BEFORE
    // this wave — a promoted crop appearing in a new pair is the failure.
    for (const p of flaggedPairs(crops)) {
      expect(
        REVIEWED_PAIRS.get(REVIEWED_PAIR_KEY(p.a, p.b)),
        `${p.a}/${p.b}`,
      ).toBeDefined();
      const promotedSlugs = new Set(PROMOTED.map((n) => n.slug));
      expect(
        promotedSlugs.has(p.a) || promotedSlugs.has(p.b),
        `${p.a}/${p.b} is a new pair created by this wave`,
      ).toBe(false);
    }
  });

  it('links each promoted species to and from what it was split out of', () => {
    for (const n of PROMOTED) {
      const parentSlug = n.promotionReview!.distinctFromSlug;
      if (!parentSlug) continue;
      const parent = bySlug.get(parentSlug) as
        { relatedTopics?: { slug?: string }[] } | undefined;
      const child = bySlug.get(n.slug) as
        { relatedTopics?: { slug?: string }[] } | undefined;
      expect(parent, parentSlug).toBeDefined();
      expect(
        (parent!.relatedTopics ?? []).some((t) => t.slug === n.slug),
        `${parentSlug} → ${n.slug}`,
      ).toBe(true);
      expect(
        (child!.relatedTopics ?? []).some((t) => t.slug === parentSlug),
        `${n.slug} → ${parentSlug}`,
      ).toBe(true);
    }
  });
});

describe('promotion — the umbrella pages keep their own terms', () => {
  const idx = benchmarkIndex();
  const top = (q: string) => search(idx, q, { limit: 1 }).results[0]?.doc;

  it.each([
    ['wheat', 'Wheat'],
    ['coffee', 'Coffee'],
    ['cotton', 'Cotton'],
    ['millet', 'Millet'],
  ])('“%s” still returns %s, not the promoted species', (q, expected) => {
    expect(top(q)?.title).toBe(expected);
  });

  it.each([
    ['durum wheat', 'Durum Wheat'],
    ['arabica coffee', 'Arabica Coffee'],
    ['robusta coffee', 'Robusta Coffee'],
    ['upland cotton', 'Upland Cotton'],
    ['finger millet', 'Finger Millet'],
    ['perennial ryegrass', 'Perennial Ryegrass'],
    ['red clover', 'Red Clover'],
  ])('“%s” returns %s', (q, expected) => {
    expect(top(q)?.title).toBe(expected);
  });

  /*
   * Wave 46 corrected the first of these.
   *
   * "Triticum turgidum" is the species Wave 43 gave to the WHEAT page as the
   * parent taxon durum wheat and emmer share, and the benchmark carried it as a
   * known issue: the two children beat the page whose accepted name it is,
   * because each carried the binomial inside a longer scientific name and the
   * field weights summed. Saturating field frequency fixed it, and this
   * expectation had encoded the defect. Every other row is a child's own
   * binomial and still resolves to the child.
   */
  it.each([
    ['triticum turgidum', 'Wheat'],
    ['triticum turgidum subsp. durum', 'Durum Wheat'],
    ['coffea arabica', 'Arabica Coffee'],
    ['coffea canephora', 'Robusta Coffee'],
    ['gossypium hirsutum', 'Upland Cotton'],
    ['eleusine coracana', 'Finger Millet'],
    ['lolium perenne', 'Perennial Ryegrass'],
    ['trifolium pratense', 'Red Clover'],
  ])('“%s” returns %s', (q, expected) => {
    expect(top(q)?.title).toBe(expected);
  });

  it('puts an article above a row in the taxon table', () => {
    // The rank rule promotion exposed: at equal relevance, a page a reader can
    // open beats an anchor into a shared list.
    for (const q of ['ryegrass', 'clover']) {
      expect(top(q)?.type, q).not.toBe('crop-taxon');
      expect(top(q)?.route.includes('#'), q).toBe(false);
    }
  });

  it('would actually catch cannibalisation if it happened', () => {
    // The guards above assert that "coffee" does not return a promoted
    // species. They pass — but they pass on a corpus where displacing the
    // umbrella page turns out to be very hard: it holds the bare term in its
    // title, its names, its scientific name and its summary, and no realistic
    // mutation of a species page reaches that score. A guard that cannot fail
    // is not evidence, so the condition is constructed here instead: with the
    // coffee article removed from the index, "coffee" DOES return Arabica, and
    // the guard must report it.
    const without = buildIndex(
      buildSearchDocuments().filter((d) => d.id !== 'crop:coffee'),
      SYNONYMS,
    );
    const top = search(without, 'coffee', { limit: 1 }).results[0]?.doc;
    expect(top?.title).toContain('Arabica');

    const guarded = BENCHMARKS.find(
      (b) => b.query === 'coffee' && b.mustNotTop?.includes('arabica'),
    );
    expect(guarded, 'the coffee guard must exist').toBeDefined();
    const result = runBenchmark(without).find((r) => r.query === 'coffee')!;
    expect(result.falsePositive, 'the guard must fire').toBe(true);
    expect(result.pass).toBe(false);
  });

  it('keeps a taxon reachable by its own synonym', () => {
    // Moving synonyms out of relationLabels must not cost discoverability.
    // Wave 39 published the article, so the answer is now the page rather than
    // the taxon row — which is the direction this corpus wants: a row in a
    // table is what a reader gets when there is nothing better to give them.
    expect(top('annual ryegrass')?.title).toBe('Italian Ryegrass');
  });
});
