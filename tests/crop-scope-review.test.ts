/**
 * Wave 41 — concept scope, checked independently of its validator.
 *
 * These recompute the relationships from the concept layer and ask the harder
 * versions of the questions: whether every constituent's recorded route status
 * matches the corpus, whether any crop is claimed by two concepts, and whether
 * a market series keyed to a concept has leaked to a child.
 */
import { describe, expect, it } from 'vitest';
import { CROP_SCOPE_REVIEWS } from '@/data/crop-scope-review';
import { CROP_CONCEPTS } from '@/data/crop-identity/concepts';
import { NAME_CROSSWALK } from '@/data/crop-identity/name-crosswalk';
import { CROP_RESEARCH } from '@/data/crop-research';
import { CROP_PUBLICATION_REVIEWS } from '@/data/crop-publication';
import { CROP_EXPANSION_CANDIDATES } from '@/data/crop-expansion';
import { COMMODITIES_BY_CROP } from '@/lib/crops/integration';
import { IDENTITY_BY_SLUG } from '@/lib/crops/identity';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';

const publishedCrops = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);

describe('nothing is left labelled complex', () => {
  it('reviews exactly the crops the three layers hand it', () => {
    const queue = new Set<string>();
    for (const r of CROP_RESEARCH)
      if (
        [
          'AGRICULTURAL_CONCEPT_COMPLEX',
          'TAXONOMY_COMPLEX',
          'DUPLICATES_EXISTING_CONCEPT',
        ].includes(r.outcome)
      )
        queue.add(r.slug);
    for (const r of CROP_PUBLICATION_REVIEWS)
      if (r.outcome !== 'PUBLISHED') queue.add(r.slug);
    for (const c of CROP_EXPANSION_CANDIDATES)
      if (c.recommendation === 'DECLINE_SCOPE_UNRESOLVED') queue.add(c.slug);
    expect(CROP_SCOPE_REVIEWS.map((r) => r.slug).sort()).toEqual(
      [...queue].sort(),
    );
  });

  it('gives every deferral something that would settle it', () => {
    for (const r of CROP_SCOPE_REVIEWS)
      if (r.outcome === 'DEFER_UNRESOLVED')
        expect(r.wouldChangeIf.length, r.slug).toBeGreaterThan(60);
  });
});

describe('the concept layer is internally consistent', () => {
  it('does not place one crop under two concepts', () => {
    const owner = new Map<string, string>();
    for (const k of CROP_CONCEPTS)
      for (const t of k.constituents) {
        if (!t.identitySlug) continue;
        expect(
          owner.get(t.identitySlug),
          `${t.identitySlug} claimed by ${owner.get(t.identitySlug)} and ${k.slug}`,
        ).toBeUndefined();
        owner.set(t.identitySlug, k.slug);
      }
  });

  it('records a route status that matches the corpus for every constituent', () => {
    for (const k of CROP_CONCEPTS)
      for (const t of k.constituents) {
        const actual = !t.identitySlug
          ? 'no-route'
          : publishedCrops.has(t.identitySlug)
            ? 'own-page'
            : 'taxon-row-only';
        expect(t.routeStatus, `${k.slug}/${t.identitySlug}`).toBe(actual);
      }
  });

  it('names a concept page that is published, and a constituent that is not the page', () => {
    for (const k of CROP_CONCEPTS) {
      expect(publishedCrops.has(k.slug), k.slug).toBe(true);
      for (const t of k.constituents)
        expect(t.identitySlug, k.slug).not.toBe(k.slug);
    }
  });

  it('does not leak concept-level market coverage to a child with its own page', () => {
    for (const k of CROP_CONCEPTS) {
      if (k.marketGranularity !== 'CONCEPT_LEVEL') continue;
      const parent = new Set(COMMODITIES_BY_CROP.get(k.slug) ?? []);
      for (const t of k.constituents) {
        if (!t.identitySlug || !publishedCrops.has(t.identitySlug)) continue;
        const child = [...(COMMODITIES_BY_CROP.get(t.identitySlug) ?? [])];
        expect(
          child.filter((c) => parent.has(c)),
          `${k.slug} → ${t.identitySlug}`,
        ).toEqual([]);
      }
    }
  });
});

describe('crosswalk destinations are current', () => {
  it('sends nobody to a taxon row for a crop that has a page', () => {
    const stale = NAME_CROSSWALK.filter(
      (n) =>
        n.resolvesTo?.type === 'crop-taxon' &&
        publishedCrops.has(n.resolvesTo.slug),
    ).map((n) => n.name);
    expect(stale).toEqual([]);
  });
});

describe('reviews describe an arrangement that exists', () => {
  it('places every concept-bound review where the concept layer places it', () => {
    const conceptOf = new Map<string, string>();
    for (const k of CROP_CONCEPTS)
      for (const t of k.constituents)
        if (t.identitySlug) conceptOf.set(t.identitySlug, k.slug);
    for (const r of CROP_SCOPE_REVIEWS) {
      if (!r.conceptSlug) continue;
      expect(conceptOf.get(r.slug), r.slug).toBe(r.conceptSlug);
    }
  });

  it('reviews only crops the corpus holds as identities', () => {
    for (const r of CROP_SCOPE_REVIEWS)
      expect(IDENTITY_BY_SLUG.has(r.slug), r.slug).toBe(true);
  });
});
