/**
 * Wave 39 — the publication campaign, checked independently of its validator.
 *
 * The validator reconciles the records against the corpus. These tests ask
 * harder questions than the validator does, and recompute their own answers so
 * that a bug in the validator cannot make them pass:
 *
 *   - a differentiating claim must be absent from EVERY other crop article, not
 *     only from the one neighbour the record names;
 *   - no two crops may lean on the same claim;
 *   - the outcome distribution must reconcile with the number of articles the
 *     corpus actually gained.
 */
import { describe, expect, it } from 'vitest';
import { CROP_PUBLICATION_REVIEWS } from '@/data/crop-publication';
import { CROP_RESEARCH } from '@/data/crop-research';
import { CROP_EXPANSION_CANDIDATES } from '@/data/crop-expansion';
import {
  CROP_SCOPE_REVIEWS,
  SCOPE_REVIEW_BY_SLUG,
} from '@/data/crop-scope-review';
import { IDENTITY_BY_SLUG } from '@/lib/crops/identity';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { articleText } from '@/lib/crops/content-depth';
import { buildIndex, search } from '@/lib/search/engine';
import { buildSearchDocuments } from '@/lib/search/documents';
import { SYNONYMS } from '@/data/search/synonyms';

const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
const bySlug = new Map(crops.map((c) => [c.slug, c]));
const fullText = (slug: string) => {
  const c = bySlug.get(slug);
  if (!c) return '';
  return `${(c as unknown as { summary: string }).summary} ${articleText(c)}`;
};
const PUBLISHED = CROP_PUBLICATION_REVIEWS.filter(
  (r) => r.outcome === 'PUBLISHED',
);

describe('the ready queue was answered, not counted', () => {
  it('answers every ready crop exactly once and invents none', () => {
    const ready = CROP_RESEARCH.filter(
      (r) => r.outcome === 'READY_BUT_DEFER_EDITORIAL',
    ).map((r) => r.slug);
    expect([...CROP_PUBLICATION_REVIEWS].map((r) => r.slug).sort()).toEqual(
      [...ready].sort(),
    );
  });

  it('leaves no crop without a decision that says what happened', () => {
    for (const r of CROP_PUBLICATION_REVIEWS)
      expect(
        r.outcome === 'PUBLISHED'
          ? !!r.differentiator
          : !!r.blockedReason?.trim(),
        r.slug,
      ).toBe(true);
  });
});

describe('published means published', () => {
  it('has a page for every PUBLISHED decision, and for the others only where a later wave says so', () => {
    // Wave 43 promoted mandarin after building the citrus concept that Wave 39
    // had stopped it for. The stop stays recorded — it is what got the concept
    // built — and the scope review is where the lifting is stated.
    for (const r of CROP_PUBLICATION_REVIEWS) {
      if (r.outcome === 'PUBLISHED') {
        expect(bySlug.has(r.slug), r.slug).toBe(true);
        continue;
      }
      if (!bySlug.has(r.slug)) continue;
      expect(
        SCOPE_REVIEW_BY_SLUG.get(r.slug)?.outcome,
        `${r.slug} has a page after a ${r.outcome} decision`,
      ).toBe('PROMOTE_CHILD_PROFILE');
    }
  });

  it('accounts for the corpus growth it claims', () => {
    // 165 crop articles before Wave 39. Recomputed from the corpus rather than
    // asserted: subtract what each subsequent campaign says it published, and
    // what remains must be the pre-wave corpus. Later waves have to be
    // subtracted too, which is the point — an article nobody's campaign
    // accounts for would leave this number wrong.
    const later =
      CROP_EXPANSION_CANDIDATES.filter((c) => c.recommendation === 'PUBLISH')
        .length +
      CROP_SCOPE_REVIEWS.filter((r) => r.outcome === 'PROMOTE_CHILD_PROFILE')
        .length +
      // The citrus concept page, which is a crop page with no campaign record:
      // it was created to own a parent taxon rather than promoted from a queue.
      1;
    expect(crops.length - PUBLISHED.length - later).toBe(165);
  });
});

describe('a differentiating claim actually differentiates', () => {
  it('appears in its own article and in no other crop article', () => {
    for (const r of PUBLISHED) {
      const claim = r.differentiator!.claim;
      expect(fullText(r.slug).includes(claim), r.slug).toBe(true);
      const elsewhere = crops
        .filter((c) => c.slug !== r.slug && fullText(c.slug).includes(claim))
        .map((c) => c.slug);
      expect(
        elsewhere,
        `${r.slug} claim also on ${elsewhere.join(', ')}`,
      ).toEqual([]);
    }
  });

  it('is not reused between two crops', () => {
    const claims = PUBLISHED.map((r) => r.differentiator!.claim);
    expect(new Set(claims).size).toBe(claims.length);
  });

  it('names a neighbour that is a different published crop', () => {
    for (const r of PUBLISHED) {
      const n = r.differentiator!.falseFor;
      expect(n, r.slug).not.toBe(r.slug);
      expect(bySlug.has(n), `${r.slug} → ${n}`).toBe(true);
    }
  });
});

describe('declared scope survives the taxonomy', () => {
  it('claims EXACT_ENTITY only for a species nothing else shares', () => {
    const binomial = (n: string) => n.split(/\s+/).slice(0, 2).join(' ');
    const shared = new Map<string, number>();
    for (const [, id] of IDENTITY_BY_SLUG) {
      const b = binomial(id.acceptedScientificName);
      shared.set(b, (shared.get(b) ?? 0) + 1);
    }
    for (const r of CROP_PUBLICATION_REVIEWS) {
      if (r.scope.granularity !== 'EXACT_ENTITY') continue;
      const id = IDENTITY_BY_SLUG.get(r.slug)!;
      expect(id.taxonRank, r.slug).toBe('species');
      expect(shared.get(binomial(id.acceptedScientificName)), r.slug).toBe(1);
    }
  });

  it('records a collision list that matches what the corpus computes', () => {
    const binomial = (n: string) => n.split(/\s+/).slice(0, 2).join(' ');
    for (const r of CROP_PUBLICATION_REVIEWS) {
      if (r.scope.granularity !== 'NARROWER_THAN_ENTITY') continue;
      const id = IDENTITY_BY_SLUG.get(r.slug)!;
      const peers = [...IDENTITY_BY_SLUG.values()]
        .filter(
          (o) =>
            o.slug !== r.slug &&
            binomial(o.acceptedScientificName) ===
              binomial(id.acceptedScientificName),
        )
        .map((o) => o.slug)
        .sort();
      expect([...(r.scope.collidesWith ?? [])].sort(), r.slug).toEqual(peers);
    }
  });
});

describe('every published crop is reachable', () => {
  const index = buildIndex(buildSearchDocuments(), SYNONYMS);

  it('wins its own title', () => {
    for (const r of PUBLISHED) {
      const c = bySlug.get(r.slug)!;
      const top = search(index, c.title.toLowerCase(), { limit: 1 }).results[0];
      expect(top?.doc.title, r.slug).toBe(c.title);
    }
  });

  it('is linked to from at least one other crop page', () => {
    const inbound = new Set<string>();
    for (const c of PUBLISHED_CONTENT) {
      const o = c as unknown as Record<
        string,
        { type: string; slug: string }[]
      >;
      for (const f of ['relatedTopics', 'connections'])
        for (const ref of o[f] ?? [])
          if (ref.type === 'crop' && ref.slug !== c.slug) inbound.add(ref.slug);
    }
    for (const r of PUBLISHED) expect(inbound.has(r.slug), r.slug).toBe(true);
  });
});
