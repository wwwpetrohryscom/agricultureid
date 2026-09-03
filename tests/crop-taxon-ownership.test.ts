/**
 * Wave 43 — taxon scope ownership, checked independently of its validator.
 *
 * The rule these tests exist for is that a child has exactly one semantic
 * owner. They recompute the parent–child structure from the identity layer
 * rather than reading the ownership records, so a record describing an
 * arrangement the corpus does not have fails here as well as there.
 */
import { describe, expect, it } from 'vitest';
import { TAXON_SCOPE_OWNERSHIP } from '@/data/crop-taxon-ownership';
import { CROP_CONCEPTS } from '@/data/crop-identity/concepts';
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '@/lib/crops/identity';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { COMMODITIES_BY_CROP } from '@/lib/crops/integration';
import { allRoutes } from '@/lib/seo/routes';

const published = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
const routes = new Set(allRoutes().map((r) => r.path));

function parentTaxonOf(name: string): string | null {
  let m = name.match(/^(.*?)\s+(?:[A-Z][A-Za-z-]*\s+)+Group$/);
  if (m) return m[1]!.trim();
  m = name.match(/^(.*?)\s+(?:subsp\.|var\.|f\.)\s+\S+$/);
  if (m) return m[1]!.trim();
  return null;
}
const childrenByParent = new Map<string, string[]>();
for (const id of CROP_IDENTITIES) {
  const p = parentTaxonOf(id.acceptedScientificName);
  if (!p) continue;
  childrenByParent.set(p, [...(childrenByParent.get(p) ?? []), id.slug]);
}
const needsOwner = new Map(
  [...childrenByParent].filter(([, kids]) => kids.length >= 2),
);

describe('every shared parent taxon has exactly one owner', () => {
  it('covers the computed queue and nothing else', () => {
    expect(TAXON_SCOPE_OWNERSHIP.map((o) => o.parentTaxon).sort()).toEqual(
      [...needsOwner.keys()].sort(),
    );
  });

  it('gives no child two owners', () => {
    const owner = new Map<string, string>();
    for (const o of TAXON_SCOPE_OWNERSHIP)
      for (const c of [...o.publishedChildren, ...o.taxonOnlyChildren]) {
        expect(
          owner.get(c),
          `${c} owned by ${owner.get(c)} and ${o.parentTaxon}`,
        ).toBeUndefined();
        owner.set(c, o.parentTaxon);
      }
  });

  it('lists children that match what the identity layer computes', () => {
    for (const o of TAXON_SCOPE_OWNERSHIP) {
      const kids = needsOwner.get(o.parentTaxon) ?? [];
      expect([...o.publishedChildren].sort(), o.parentTaxon).toEqual(
        kids.filter((k) => published.has(k)).sort(),
      );
      expect([...o.taxonOnlyChildren].sort(), o.parentTaxon).toEqual(
        kids.filter((k) => !published.has(k)).sort(),
      );
    }
  });
});

describe('the owner is the kind of thing it says it is', () => {
  it('gives a record-owned taxon no route', () => {
    for (const o of TAXON_SCOPE_OWNERSHIP) {
      if (o.ownerKind !== 'taxon-scope-record') continue;
      expect(published.has(o.ownerSlug), o.ownerSlug).toBe(false);
      expect(routes.has(`/crops/${o.ownerSlug}`), o.ownerSlug).toBe(false);
    }
  });

  it('makes a concept owner list every published child as a constituent', () => {
    for (const o of TAXON_SCOPE_OWNERSHIP) {
      if (o.ownerKind !== 'crop-concept') continue;
      const k = CROP_CONCEPTS.find((c) => c.slug === o.ownerSlug);
      expect(k, o.ownerSlug).toBeDefined();
      const declared = new Set(k!.constituents.map((t) => t.identitySlug));
      for (const child of o.publishedChildren)
        expect(declared.has(child), `${o.ownerSlug} → ${child}`).toBe(true);
    }
  });

  it('names something at parent level for every owner', () => {
    for (const o of TAXON_SCOPE_OWNERSHIP)
      expect(o.conceptLevelEvidence.length, o.parentTaxon).toBeGreaterThan(0);
  });
});

describe('parent-level evidence stays at parent level', () => {
  it('does not key a concept owner’s commodity to one of its children', () => {
    for (const o of TAXON_SCOPE_OWNERSHIP) {
      if (o.ownerKind !== 'crop-concept') continue;
      const parent = new Set(COMMODITIES_BY_CROP.get(o.ownerSlug) ?? []);
      for (const child of o.publishedChildren) {
        const shared = [...(COMMODITIES_BY_CROP.get(child) ?? [])].filter((c) =>
          parent.has(c),
        );
        expect(shared, `${o.ownerSlug} → ${child}`).toEqual([]);
      }
    }
  });

  it('names only real crop identities as children', () => {
    for (const o of TAXON_SCOPE_OWNERSHIP)
      for (const c of [...o.publishedChildren, ...o.taxonOnlyChildren])
        expect(IDENTITY_BY_SLUG.has(c), c).toBe(true);
  });
});
