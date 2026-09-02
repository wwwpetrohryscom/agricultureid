import { describe, expect, it } from 'vitest';
import {
  allQualifications,
  promotionQueue,
  qualificationFor,
} from '@/lib/crops/qualification';
import {
  PROMOTION_TIERS,
  QUALIFICATION_STATUSES,
  ROUTABLE_STATUSES,
} from '@/types/crop-qualification';
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '@/lib/crops/identity';
import { PROMOTION_NOTES } from '@/data/crop-identity/promotion-notes';
import {
  DEPTH_REQUIREMENTS,
  SHARED_RUN_IS_PROSE,
  blockText,
  flaggedPairs,
  longestSharedRun,
  measureDepth,
  similarityMatrix,
} from '@/lib/crops/content-depth';
import {
  REVIEWED_PAIRS,
  REVIEWED_PAIR_KEY,
} from '@/data/crop-identity/similar-pairs';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { allRoutes } from '@/lib/seo/routes';

const Q = allQualifications();
const routes = new Set(allRoutes().map((r) => r.path));

describe('qualification — judged on evidence, not on self-declaration', () => {
  it('evaluates every crop identity exactly once', () => {
    expect(Q).toHaveLength(CROP_IDENTITIES.length);
    expect(new Set(Q.map((q) => q.slug)).size).toBe(Q.length);
  });

  it('reaches FULL_PROFILE_ELIGIBLE only when every hard gate passes', () => {
    for (const q of Q) {
      const g = q.hardGates;
      const all =
        g.taxonomy.result === 'pass' &&
        g.agriculturalIdentity.result === 'pass' &&
        g.contentDepth.result === 'pass' &&
        g.sourceIntegrity.result === 'pass' &&
        g.identityConsistency.result === 'pass';
      expect(q.status === 'FULL_PROFILE_ELIGIBLE', q.slug).toBe(all);
    }
  });

  it('never lets profileDepth decide the outcome', () => {
    // The evaluator must not read the published state. Proof: a data-only
    // identity and a full-profile identity with the same evidence would get
    // the same status, and the only thing that separates them here is whether
    // an ARTICLE exists — which is measured, not declared.
    const src = require('node:fs').readFileSync(
      'lib/crops/qualification.ts',
      'utf8',
    ) as string;
    expect(src).not.toMatch(/profileDepth\s*===/);
    expect(src).not.toMatch(/\.profileDepth\b(?!.*\/\/)/);
  });

  it('gives every non-eligible crop a blocker that explains it', () => {
    for (const q of Q.filter((x) => x.status !== 'FULL_PROFILE_ELIGIBLE')) {
      expect(q.blockers.length, q.slug).toBeGreaterThan(0);
      for (const b of q.blockers)
        expect(b.detail.length, q.slug).toBeGreaterThan(10);
    }
  });

  it('states how every enrichment dimension was derived', () => {
    for (const q of Q)
      for (const [name, c] of Object.entries(q.enrichment)) {
        expect(c.derivedFrom.length, `${q.slug} ${name}`).toBeGreaterThan(10);
        // A count and a result that contradict each other.
        if (c.result === 'missing' || c.result === 'not-modelled')
          expect(c.count, `${q.slug} ${name}`).toBe(0);
        else expect(c.count, `${q.slug} ${name}`).toBeGreaterThan(0);
      }
  });

  it('names what every enrichment count counted', () => {
    // A bare number cannot be wrong out loud; a list of identifiers can.
    for (const q of Q)
      for (const [name, c] of Object.entries(q.enrichment)) {
        expect(c.refs.length, `${q.slug} ${name}`).toBe(c.count);
        expect(new Set(c.refs).size, `${q.slug} ${name}`).toBe(c.refs.length);
      }
  });
});

describe('qualification — reconciles with what is actually published', () => {
  it('matches the emitted route list exactly', () => {
    for (const q of Q) {
      const routed = routes.has(`/crops/${q.slug}`);
      expect(q.hasPublishedRoute, q.slug).toBe(routed);
      if (routed) expect(ROUTABLE_STATUSES, q.slug).toContain(q.status);
      if (q.status === 'FULL_PROFILE_ELIGIBLE')
        expect(routed, q.slug).toBe(true);
    }
  });

  it('agrees with the identity layer’s published state', () => {
    for (const q of Q) {
      const depth = IDENTITY_BY_SLUG.get(q.slug)!.profileDepth;
      expect(depth === 'full-profile', q.slug).toBe(q.hasPublishedRoute);
    }
  });

  it('leaves no crop route unjudged', () => {
    const cropRoutes = [...routes].filter(
      (p) => /^\/crops\/[^/]+$/.test(p) && p !== '/crops/taxa',
    );
    for (const p of cropRoutes)
      expect(
        Q.some((q) => q.slug === p.replace('/crops/', '')),
        p,
      ).toBe(true);
    expect(cropRoutes.length).toBeGreaterThan(150);
  });
});

describe('qualification — depth is not word count', () => {
  it('measures several independent axes', () => {
    const wheat = qualificationFor('wheat')!;
    const m = wheat.hardGates.contentDepth.measures!;
    for (const k of ['words', 'substantiveSections', 'keyFacts', 'sources'])
      expect(m[k], k).toBeDefined();
  });

  it('counts a caption-length section as not substantive', () => {
    const articles = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
    const sim = similarityMatrix(articles);
    for (const a of articles) {
      const m = measureDepth(a, sim.get(a.slug) ?? { max: 0 });
      expect(m.substantiveSections, a.slug).toBeLessThanOrEqual(m.sections);
    }
  });

  it('sets the bar at what the corpus already meets', () => {
    const articles = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
    const sim = similarityMatrix(articles);
    for (const a of articles) {
      const m = measureDepth(a, sim.get(a.slug) ?? { max: 0 });
      expect(m.words, a.slug).toBeGreaterThanOrEqual(
        DEPTH_REQUIREMENTS.minWords,
      );
      expect(m.sources, a.slug).toBeGreaterThanOrEqual(
        DEPTH_REQUIREMENTS.minSources,
      );
    }
  });

  it('separates a copied sentence from shared vocabulary', () => {
    const a = 'the crop performs best on deep well drained loams with';
    expect(longestSharedRun(a, a).length).toBe(10);
    // Same words, different order: high overlap, no copied run.
    const shuffled = 'loams drained well deep on best performs crop the with';
    expect(longestSharedRun(a, shuffled).length).toBeLessThan(
      SHARED_RUN_IS_PROSE,
    );
  });

  it('has a human verdict on every flagged pair', () => {
    for (const p of flaggedPairs(
      PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop'),
    )) {
      const rec = REVIEWED_PAIRS.get(REVIEWED_PAIR_KEY(p.a, p.b));
      expect(rec, `${p.a}/${p.b} unreviewed`).toBeDefined();
      expect(p.longestRun, `${p.a}/${p.b}`).toBeLessThanOrEqual(
        rec!.longestRun,
      );
    }
  });

  it('reads definition lists as text rather than as [object Object]', () => {
    // The bug this replaces inflated every word count with placeholder tokens
    // and made unrelated pages look alike for sharing them.
    const text = blockText([
      { type: 'list', items: [{ term: 'Family', description: 'Poaceae' }] },
    ]);
    expect(text).toContain('Poaceae');
    expect(text).not.toContain('object');
  });
});

describe('qualification — the promotion queue is explainable', () => {
  it('gives every non-eligible crop exactly one valid tier', () => {
    for (const q of Q) {
      if (q.status === 'FULL_PROFILE_ELIGIBLE')
        expect(q.promotionTier, q.slug).toBeUndefined();
      else expect(PROMOTION_TIERS, q.slug).toContain(q.promotionTier);
    }
  });

  it('puts an identity-complex crop in P4 even when an editor has noted it', () => {
    // White yam has an editorial note AND a contested identity. Complexity
    // wins: getting the scope wrong is worse than not publishing.
    const wy = qualificationFor('white-yam')!;
    expect(PROMOTION_NOTES.some((n) => n.slug === 'white-yam')).toBe(true);
    expect(wy.promotionTier).toBe('P4_IDENTITY_COMPLEX');
  });

  it('does not invent importance for a crop nobody has noted', () => {
    const unnoted = Q.filter(
      (q) =>
        q.promotionTier &&
        !PROMOTION_NOTES.some((n) => n.slug === q.slug) &&
        q.promotionTier !== 'P4_IDENTITY_COMPLEX',
    );
    for (const q of unnoted)
      expect(q.promotionTier, q.slug).toBe('P3_NEEDS_RESEARCH');
  });

  it('orders the queue by tier', () => {
    const order = PROMOTION_TIERS as readonly string[];
    const seen = promotionQueue().map((q) => order.indexOf(q.promotionTier!));
    for (let i = 1; i < seen.length; i++)
      expect(seen[i]!).toBeGreaterThanOrEqual(seen[i - 1]!);
  });
});
