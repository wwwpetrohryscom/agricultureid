import { describe, expect, it } from 'vitest';
import { CROP_HUBS, HUB_REFUSALS } from '@/data/crop-hubs';
import {
  FAMILY_HUB_MIN_PUBLISHED,
  GENUS_HUB_MIN_PUBLISHED,
  GROUP_HUB_MIN_PUBLISHED,
  HUB_KINDS,
  HUB_MIN_TOTAL_MEMBERS,
} from '@/types/crop-hubs';
import {
  hubPath,
  hubsForCrop,
  membersOf,
  membershipOf,
} from '@/lib/crops/hubs';
import { CROP_IDENTITIES } from '@/lib/crops/identity';
import { CROP_CONCEPTS } from '@/data/crop-identity/concepts';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { allRoutes } from '@/lib/seo/routes';
import { benchmarkIndex } from '@/lib/search/benchmark';
import { search } from '@/lib/search/engine';

const routes = new Set(allRoutes().map((r) => r.path));
const publishedCrops = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
const MIN = {
  BOTANICAL_FAMILY_HUB: FAMILY_HUB_MIN_PUBLISHED,
  BOTANICAL_GENUS_HUB: GENUS_HUB_MIN_PUBLISHED,
  AGRICULTURAL_CROP_GROUP_HUB: GROUP_HUB_MIN_PUBLISHED,
} as const;

describe('hubs are qualified, not enumerated', () => {
  it('publishes far fewer hubs than the taxonomy offers slugs', () => {
    const families = new Set(CROP_IDENTITIES.map((c) => c.family)).size;
    const genera = new Set(CROP_IDENTITIES.map((c) => c.genus)).size;
    expect(families + genera).toBeGreaterThan(250);
    expect(CROP_HUBS.length).toBeLessThan(20);
  });

  it('clears its own membership floors', () => {
    for (const h of CROP_HUBS) {
      const m = membershipOf(h);
      expect(m.published.length, h.slug).toBeGreaterThanOrEqual(MIN[h.kind]);
      expect(m.total, h.slug).toBeGreaterThanOrEqual(HUB_MIN_TOTAL_MEMBERS);
    }
  });

  it('carries group-level content, not a filtered list', () => {
    for (const h of CROP_HUBS) {
      expect(h.sections.length, h.slug).toBeGreaterThanOrEqual(4);
      for (const s of h.sections)
        expect(
          s.body.split(/\s+/).length,
          `${h.slug}/${s.heading}`,
        ).toBeGreaterThanOrEqual(40);
      // The three things an author with nothing group-level to say cannot do.
      expect(h.contrasts.length, h.slug).toBeGreaterThan(0);
      expect(h.limitations.length, h.slug).toBeGreaterThan(0);
      expect(h.sourceIds.length, h.slug).toBeGreaterThan(0);
    }
  });

  it('never publishes a family hub covering one genus', () => {
    for (const h of CROP_HUBS)
      if (h.kind === 'BOTANICAL_FAMILY_HUB')
        expect(membershipOf(h).genera.length, h.slug).toBeGreaterThan(1);
  });

  it('never duplicates a crop concept page', () => {
    const conceptGenera = new Set(
      CROP_CONCEPTS.map((k) =>
        CROP_IDENTITIES.find((c) => c.slug === k.slug)
          ?.genus.replace(/×/g, '')
          .trim(),
      ).filter(Boolean),
    );
    for (const h of CROP_HUBS)
      if (h.kind === 'BOTANICAL_GENUS_HUB')
        expect(conceptGenera.has(h.memberKey), h.slug).toBe(false);
  });
});

describe('membership is derived, never listed', () => {
  it('matches what the identity layer says, for every hub', () => {
    for (const h of CROP_HUBS) {
      const derived = membersOf(h)
        .map((c) => c.slug)
        .sort();
      const recomputed = CROP_IDENTITIES.filter((c) =>
        h.kind === 'BOTANICAL_FAMILY_HUB'
          ? c.family === h.memberKey
          : h.kind === 'BOTANICAL_GENUS_HUB'
            ? c.genus.replace(/×/g, '').trim() === h.memberKey
            : (c.cropGroups as readonly string[]).includes(h.memberKey),
      )
        .map((c) => c.slug)
        .sort();
      expect(derived, h.slug).toEqual(recomputed);
    }
  });

  it('counts a member as published only when it has an article', () => {
    for (const h of CROP_HUBS)
      for (const c of membershipOf(h).published)
        expect(
          publishedCrops.has(c.cropPageSlug ?? c.slug),
          `${h.slug}/${c.slug}`,
        ).toBe(true);
  });

  it('emits a route for every hub and no others', () => {
    for (const h of CROP_HUBS)
      expect(routes.has(hubPath(h)), h.slug).toBe(true);
    const hubRoutes = [...routes].filter((p) =>
      /^\/crops\/(families|genera|groups)\//.test(p),
    );
    expect(hubRoutes.length).toBe(CROP_HUBS.length);
  });
});

describe('refusals are decisions, not omissions', () => {
  it('records a reason and a note for each', () => {
    expect(HUB_REFUSALS.length).toBeGreaterThan(10);
    for (const r of HUB_REFUSALS) {
      expect(HUB_KINDS, r.memberKey).toContain(r.kind);
      expect(r.note.length, r.memberKey).toBeGreaterThan(40);
    }
  });

  it('never refuses something it also published', () => {
    const published = new Set(CROP_HUBS.map((h) => `${h.kind}:${h.memberKey}`));
    for (const r of HUB_REFUSALS)
      expect(published.has(`${r.kind}:${r.memberKey}`), r.memberKey).toBe(
        false,
      );
  });

  it('only cites the membership floor when the candidate is actually below it', () => {
    for (const r of HUB_REFUSALS)
      if (r.reason === 'BELOW_MEMBERSHIP_FLOOR') {
        const m = membershipOf({ kind: r.kind, memberKey: r.memberKey });
        expect(
          m.published.length < MIN[r.kind] || m.total < HUB_MIN_TOTAL_MEMBERS,
          r.memberKey,
        ).toBe(true);
      }
  });
});

describe('hub search semantics', () => {
  const idx = benchmarkIndex();
  const top = (q: string) => search(idx, q, { limit: 1 }).results[0]?.doc;

  it.each([
    ['cereals', 'Cereals'],
    ['pulses', 'Pulses and grain legumes'],
    ['grass family', 'Poaceae — the grass family'],
    ['legume family', 'Fabaceae — the legume family'],
    ['brassica crops', 'Brassica — one genus, many crops'],
  ])('group query “%s” reaches %s', (q, expected) => {
    expect(top(q)?.title).toBe(expected);
  });

  it('never lets a hub take an exact crop name', () => {
    for (const q of ['wheat', 'maize', 'cabbage', 'potato', 'rice', 'barley'])
      expect(top(q)?.type, q).not.toBe('crop-hub');
  });

  it('links a crop back to every hub that contains it', () => {
    for (const slug of ['wheat', 'cabbage', 'potato']) {
      const hubs = hubsForCrop(slug);
      expect(hubs.length, slug).toBeGreaterThan(0);
      for (const h of hubs)
        expect(
          membersOf(h).some((m) => m.slug === slug),
          `${slug} in ${h.slug}`,
        ).toBe(true);
    }
  });
});
