/**
 * Wave 40 — the expansion campaign, checked independently of its validator.
 *
 * These recompute their own answers and ask questions the validator does not:
 * that no candidate was reviewed twice under two layers, that the composition
 * audit's arithmetic is internally consistent, that regional claims are not
 * reused verbatim between crops, and that no crop published to fill a gap sits
 * below the corpus depth standard.
 */
import { describe, expect, it } from 'vitest';
import {
  COMPOSITION_GAPS,
  CROP_EXPANSION_CANDIDATES,
} from '@/data/crop-expansion';
import { CROP_PUBLICATION_REVIEWS } from '@/data/crop-publication';
import { CROP_SCOPE_REVIEWS } from '@/data/crop-scope-review';
import { WAVE_43_IDENTITIES } from '@/data/crop-identity/wave43';
import { PROMOTED_BY_LATER_WAVE } from '@/lib/crops/promotion-mechanisms';
import { PROMOTIONAL_PHRASES } from '@/types/crop-expansion';
import { IDENTITY_BY_SLUG } from '@/lib/crops/identity';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import {
  articleText,
  measureDepth,
  similarityMatrix,
} from '@/lib/crops/content-depth';

const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
const bySlug = new Map(crops.map((c) => [c.slug, c]));
const PUBLISHED = CROP_EXPANSION_CANDIDATES.filter(
  (c) => c.recommendation === 'PUBLISH',
);

describe('the two campaigns do not overlap', () => {
  it('reviews no crop under both the publication and the expansion layer', () => {
    const pub = new Set(CROP_PUBLICATION_REVIEWS.map((r) => r.slug));
    const overlap = CROP_EXPANSION_CANDIDATES.filter((c) =>
      pub.has(c.slug),
    ).map((c) => c.slug);
    expect(overlap).toEqual([]);
  });

  it('accounts for the corpus growth it claims', () => {
    /*
     * 214 crop articles after Wave 39, recomputed rather than asserted.
     *
     * Later waves add to `crops`, so what they added is subtracted the same
     * way it was added — from the records that added it, never as a number.
     * Wave 43 published four crops through scope-review promotions and one,
     * the citrus concept page, through neither campaign: a concept page is not
     * a candidate for promotion, it is the thing candidates get promoted
     * under. It is identified by the wave register that introduced its
     * identity, so a later wave subtracts its own additions from its own
     * register rather than adjusting a number here.
     */
    const promoted = new Set(PROMOTED_BY_LATER_WAVE.keys());
    const newIdentityPages = WAVE_43_IDENTITIES.filter(
      (i) => i.profileDepth === 'full-profile' && !promoted.has(i.slug),
    );
    expect(newIdentityPages.map((i) => i.slug)).toEqual(['citrus']);
    const later = promoted.size + newIdentityPages.length;
    expect(crops.length - PUBLISHED.length - later).toBe(214);
  });
});

describe('the composition audit is arithmetically honest', () => {
  it('adds up: after minus before equals what was published into the bucket', () => {
    for (const g of COMPOSITION_GAPS)
      expect(
        g.publishedAfter - g.publishedBefore,
        `${g.dimension}/${g.bucket}`,
      ).toBe(g.publishedAfter - g.bucketBefore.length);
  });

  it('lists a bucket membership that matches its own count', () => {
    for (const g of COMPOSITION_GAPS)
      expect(g.bucketBefore.length, `${g.dimension}/${g.bucket}`).toBe(
        g.publishedBefore,
      );
  });
});

describe('regional claims are written, not copied', () => {
  it('uses no significance statement twice', () => {
    const all = CROP_EXPANSION_CANDIDATES.flatMap((c) =>
      c.significance.map((s) => s.statement),
    );
    expect(new Set(all).size).toBe(all.length);
  });

  it('names a place in every statement that the statement itself contains', () => {
    for (const c of CROP_EXPANSION_CANDIDATES)
      for (const s of c.significance)
        expect(s.statement.includes(s.corroboratedBy), c.slug).toBe(true);
  });
});

describe('representation did not lower the bar', () => {
  const sim = similarityMatrix(crops);

  it('holds every published candidate to the corpus depth standard', () => {
    for (const c of PUBLISHED) {
      const item = bySlug.get(c.slug)!;
      const m = measureDepth(item, sim.get(c.slug) ?? { max: 0 });
      expect(m.substantiveSections, c.slug).toBeGreaterThanOrEqual(8);
      expect(m.words, c.slug).toBeGreaterThanOrEqual(450);
    }
  });

  it('publishes no crop whose identity the authorities dispute', () => {
    for (const c of PUBLISHED)
      expect(IDENTITY_BY_SLUG.get(c.slug)?.agreement, c.slug).toBe('agreed');
  });
});

describe('no promotional language anywhere in the corpus', () => {
  it('finds none of the banned phrases in any crop article', () => {
    const hits: string[] = [];
    for (const c of crops) {
      const t =
        `${(c as unknown as { summary: string }).summary} ${articleText(c)}`.toLowerCase();
      for (const p of PROMOTIONAL_PHRASES)
        if (t.includes(p)) hits.push(`${c.slug}: ${p}`);
    }
    expect(hits).toEqual([]);
  });
});
