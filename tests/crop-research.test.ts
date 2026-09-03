import { describe, expect, it } from 'vitest';
import { PUBLICATION_BY_SLUG } from '@/data/crop-publication';
import { CROP_EXPANSION_CANDIDATES } from '@/data/crop-expansion';
import { CROP_SCOPE_REVIEWS } from '@/data/crop-scope-review';
import { CROP_RESEARCH, RESEARCH_BY_SLUG } from '@/data/crop-research';
import {
  EVIDENCE_SUFFICIENT_OUTCOMES,
  PROMOTING_OUTCOMES,
  RESEARCH_OUTCOMES,
} from '@/types/crop-research';
import { allQualifications } from '@/lib/crops/qualification';
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '@/lib/crops/identity';
import { PROMOTION_NOTES } from '@/data/crop-identity/promotion-notes';
import { CROP_CONCEPTS } from '@/data/crop-identity/concepts';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { benchmarkIndex } from '@/lib/search/benchmark';
import { search } from '@/lib/search/engine';
import {
  articleText,
  measureDepth,
  similarityMatrix,
} from '@/lib/crops/content-depth';

const Q = allQualifications();
const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
const published = new Set(crops.map((c) => c.slug));
const noted = new Set(PROMOTION_NOTES.map((n) => n.slug));
const PROMOTED = CROP_RESEARCH.filter((r) =>
  PROMOTING_OUTCOMES.includes(r.outcome),
);

describe('the campaign answered its whole queue', () => {
  it('leaves no candidate unreviewed', () => {
    const unreviewed = Q.filter(
      (q) =>
        q.promotionTier && !noted.has(q.slug) && !RESEARCH_BY_SLUG.has(q.slug),
    );
    expect(unreviewed.map((q) => q.slug)).toEqual([]);
  });

  it('gives every record an outcome from the vocabulary and a finding', () => {
    expect(CROP_RESEARCH.length).toBe(189);
    for (const r of CROP_RESEARCH) {
      expect(RESEARCH_OUTCOMES, r.slug).toContain(r.outcome);
      expect(r.finding.length, r.slug).toBeGreaterThan(60);
      expect(IDENTITY_BY_SLUG.has(r.slug), r.slug).toBe(true);
    }
  });

  it('records a route back for every crop that was not promoted', () => {
    for (const r of CROP_RESEARCH)
      if (!PROMOTING_OUTCOMES.includes(r.outcome))
        expect(r.wouldChangeIf?.length ?? 0, r.slug).toBeGreaterThan(20);
  });

  it('covers no crop twice', () => {
    expect(new Set(CROP_RESEARCH.map((r) => r.slug)).size).toBe(
      CROP_RESEARCH.length,
    );
  });
});

describe('promotion required a source, not a queue position', () => {
  it('promoted only crops with a source consulted for them', () => {
    for (const r of PROMOTED) {
      expect(r.evidenceBasis, r.slug).toContain('SOURCE_CONSULTED');
      expect(r.sourceIds?.length ?? 0, r.slug).toBeGreaterThanOrEqual(4);
    }
  });

  it('never claims a source without naming one', () => {
    for (const r of CROP_RESEARCH)
      expect(
        r.evidenceBasis.includes('SOURCE_CONSULTED') === !!r.sourceIds?.length,
        r.slug,
      ).toBe(true);
  });

  it('published exactly the promoted crops, plus the ones a later wave accounts for', () => {
    // Wave 39 wrote 49 of the crops this campaign returned as
    // READY_BUT_DEFER_EDITORIAL. That is the deferral being taken up, not the
    // campaign being contradicted: it deferred on editorial capacity and said
    // so, which is the whole reason that outcome is distinct from an evidence
    // failure. What must still be impossible is a page that nothing accounts
    // for, so the assertion is not relaxed — it now requires that every
    // published crop is claimed either by this campaign or, in checkable form,
    // by a later one.
    const laterWaves = new Set([
      ...[...PUBLICATION_BY_SLUG.values()]
        .filter((r) => r.outcome === 'PUBLISHED')
        .map((r) => r.slug),
      ...CROP_EXPANSION_CANDIDATES.filter(
        (c) => c.recommendation === 'PUBLISH',
      ).map((c) => c.slug),
      ...CROP_SCOPE_REVIEWS.filter(
        (r) => r.outcome === 'PROMOTE_CHILD_PROFILE',
      ).map((r) => r.slug),
    ]);
    for (const r of CROP_RESEARCH)
      expect(published.has(r.slug), r.slug).toBe(
        PROMOTING_OUTCOMES.includes(r.outcome) || laterWaves.has(r.slug),
      );
  });

  it('holds every promoted article to the corpus standard', () => {
    const sim = similarityMatrix(crops);
    for (const r of PROMOTED) {
      const c = crops.find((x) => x.slug === r.slug)!;
      const m = measureDepth(c, sim.get(r.slug) ?? { max: 0 });
      expect(m.substantiveSections, r.slug).toBeGreaterThanOrEqual(8);
      expect(m.sources, r.slug).toBeGreaterThanOrEqual(4);
      expect(m.limitations, r.slug).toBeGreaterThanOrEqual(2);
      expect(Q.find((q) => q.slug === r.slug)!.status, r.slug).toBe(
        'FULL_PROFILE_ELIGIBLE',
      );
    }
  });

  it('wrote articles that carry their own distinguishing facts', () => {
    const t = (s: string) =>
      articleText(crops.find((c) => c.slug === s)!).toLowerCase();
    expect(t('white-clover')).toContain('stolon');
    expect(t('hops')).toContain('dioecious');
    expect(t('guar')).toContain('galactomannan');
    expect(t('castor-bean')).toContain('ricinoleic');
    expect(t('african-rice')).toContain('nerica');
  });
});

describe('an outcome describes what is actually in the way', () => {
  it('keeps an editorial backlog out of the evidence-failure bucket', () => {
    const EVIDENCE_IS_THIN =
      /(evidence|sources?|literature|documentation|record)[^.]{0,48}(thin|limited|insufficient|not enough|lacking|sparse|absent)/i;
    for (const r of CROP_RESEARCH)
      if (r.outcome === 'READY_BUT_DEFER_EDITORIAL')
        expect(EVIDENCE_IS_THIN.test(r.finding), r.slug).toBe(false);
    // And that the distinction is actually used rather than collapsed.
    expect(
      CROP_RESEARCH.filter((r) => r.outcome === 'READY_BUT_DEFER_EDITORIAL')
        .length,
    ).toBeGreaterThan(10);
  });

  it('files concept-complex only for real concept constituents', () => {
    const inConcept = new Set(
      CROP_CONCEPTS.flatMap((k) =>
        k.constituents.map((t) => t.identitySlug),
      ).filter(Boolean),
    );
    for (const r of CROP_RESEARCH)
      if (r.outcome === 'AGRICULTURAL_CONCEPT_COMPLEX')
        expect(inConcept.has(r.slug), r.slug).toBe(true);
  });

  it('files taxonomy-complex only where the authorities differ', () => {
    for (const r of CROP_RESEARCH)
      if (r.outcome === 'TAXONOMY_COMPLEX')
        expect(IDENTITY_BY_SLUG.get(r.slug)!.agreement, r.slug).not.toBe(
          'agreed',
        );
  });

  it('records a kind of significance wherever it says evidence suffices', () => {
    for (const r of CROP_RESEARCH)
      if (EVIDENCE_SUFFICIENT_OUTCOMES.includes(r.outcome))
        expect(r.significance.length, r.slug).toBeGreaterThan(0);
  });
});

describe('search after the promotions', () => {
  const idx = benchmarkIndex();
  const top = (q: string) => search(idx, q, { limit: 1 }).results[0]?.doc;

  it.each([
    ['hops', 'Hops'],
    ['white clover', 'White Clover'],
    ['guar', 'Guar'],
    ['castor bean', 'Castor Bean'],
    ['african rice', 'African Rice'],
    ['cluster bean', 'Guar'],
  ])('“%s” returns %s', (q, expected) => {
    expect(top(q)?.title).toBe(expected);
  });

  it('does not let a promotion take an established crop’s term', () => {
    expect(top('rice')?.title).toBe('Rice');
    expect(top('clover')?.title).toBe('Red Clover');
    expect(top('barley')?.title).toBe('Barley');
  });

  it('reaches every promoted crop from another published page', () => {
    for (const r of PROMOTED) {
      const inbound = crops.filter(
        (c) =>
          c.slug !== r.slug &&
          (
            (c as unknown as { relatedTopics?: { slug?: string }[] })
              .relatedTopics ?? []
          ).some((t) => t.slug === r.slug),
      );
      expect(inbound.length, `${r.slug} has no inbound link`).toBeGreaterThan(
        0,
      );
    }
  });
});
