import { describe, expect, it } from 'vitest';
import {
  CULTIVARS,
  BREEDS,
  cultivarsForCrop,
  breedsForLivestock,
  getContent,
  resolveRef,
} from '@/lib/content/registry';
import { semanticEdges } from '@/lib/content/relations';
import { getSource } from '@/lib/sources/registry';
import { evidenceTier } from '@/lib/sources/evidence';

const publishedCultivars = CULTIVARS.filter(
  (c) => c.editorialStatus === 'published',
);
const publishedBreeds = BREEDS.filter((b) => b.editorialStatus === 'published');

describe('phase 3A — corpus presence', () => {
  it('has a non-trivial cultivar and breed corpus', () => {
    expect(publishedCultivars.length).toBeGreaterThanOrEqual(40);
    expect(publishedBreeds.length).toBeGreaterThanOrEqual(40);
  });
});

describe('phase 3A — parent resolution', () => {
  it('every cultivar resolves to a published parent crop', () => {
    for (const c of publishedCultivars) {
      expect(c.parentCrop.type, `${c.slug}`).toBe('crop');
      const parent = resolveRef(c.parentCrop);
      expect(parent, `${c.slug} → ${c.parentCrop.slug}`).toBeDefined();
      expect(parent?.editorialStatus, `${c.slug}`).toBe('published');
    }
  });

  it('every breed resolves to a published parent livestock', () => {
    for (const b of publishedBreeds) {
      expect(b.parentLivestock.type, `${b.slug}`).toBe('livestock');
      const parent = resolveRef(b.parentLivestock);
      expect(parent, `${b.slug} → ${b.parentLivestock.slug}`).toBeDefined();
      expect(parent?.editorialStatus, `${b.slug}`).toBe('published');
    }
  });
});

describe('phase 3A — registry status semantics', () => {
  it('listed/registered/protected cultivars declare a jurisdiction', () => {
    const need = new Set(['listed', 'registered', 'protected']);
    for (const c of publishedCultivars) {
      if (!need.has(c.registrationStatus)) continue;
      expect(
        c.registrationJurisdiction?.trim(),
        `${c.slug} status=${c.registrationStatus}`,
      ).toBeTruthy();
    }
  });

  it('a registered/listed/protected status is backed by a registry ref or claim', () => {
    const need = new Set(['listed', 'registered', 'protected']);
    for (const c of publishedCultivars) {
      if (!need.has(c.registrationStatus)) continue;
      const hasReg = (c.registryReferences?.length ?? 0) > 0;
      const hasClaim = (c.claims ?? []).some((cl) =>
        /regist|listed|protect|catalogue/i.test(cl.field),
      );
      expect(hasReg || hasClaim, `${c.slug}`).toBe(true);
    }
  });

  it('registry references resolve to known sources when a sourceId is given', () => {
    for (const item of [...publishedCultivars, ...publishedBreeds]) {
      for (const reg of item.registryReferences ?? []) {
        expect(reg.registry?.trim(), `${item.slug}`).toBeTruthy();
        if (reg.sourceId)
          expect(
            getSource(reg.sourceId),
            `${item.slug}:${reg.sourceId}`,
          ).toBeDefined();
      }
    }
  });
});

describe('phase 3A — evidence + claims', () => {
  it('every sub-entity has ≥2 sourceReferences with a Tier 1–2 best source', () => {
    for (const item of [...publishedCultivars, ...publishedBreeds]) {
      expect(
        item.sourceReferences.length,
        `${item.slug}`,
      ).toBeGreaterThanOrEqual(2);
      const best = Math.min(
        ...item.sourceReferences.map((r) => evidenceTier(r.sourceId)),
      );
      expect(best, `${item.slug}`).toBeLessThanOrEqual(2);
    }
  });

  it('resistance/yield claims (if present) carry Tier 1–2 provenance', () => {
    for (const c of publishedCultivars) {
      const resClaims = [
        ...(c.diseaseResistanceClaims ?? []),
        ...(c.pestResistanceClaims ?? []),
      ];
      if (resClaims.length) {
        const ok = (c.claims ?? []).some(
          (cl) =>
            /resist/i.test(cl.field) &&
            cl.citations.some((ci) => evidenceTier(ci.sourceId) <= 2),
        );
        expect(ok, `${c.slug} resistance`).toBe(true);
      }
      if (c.yieldCharacteristics?.trim()) {
        const ok = (c.claims ?? []).some(
          (cl) =>
            /yield/i.test(cl.field) &&
            cl.citations.some((ci) => evidenceTier(ci.sourceId) <= 2),
        );
        expect(ok, `${c.slug} yield`).toBe(true);
      }
    }
  });
});

describe('phase 3A — graph integration', () => {
  it('emits a cultivarOf/breedOf edge to the parent for each sub-entity', () => {
    for (const c of publishedCultivars) {
      const edges = semanticEdges(c);
      expect(
        edges.some(
          (e) => e.to.slug === c.parentCrop.slug && e.relation === 'cultivarOf',
        ),
        `${c.slug}`,
      ).toBe(true);
    }
    for (const b of publishedBreeds) {
      const edges = semanticEdges(b);
      expect(
        edges.some(
          (e) =>
            e.to.slug === b.parentLivestock.slug && e.relation === 'breedOf',
        ),
        `${b.slug}`,
      ).toBe(true);
    }
  });

  it('parent-panel queries return each sub-entity from its parent', () => {
    for (const c of publishedCultivars) {
      expect(
        cultivarsForCrop(c.parentCrop.slug).some((x) => x.slug === c.slug),
        `${c.slug}`,
      ).toBe(true);
    }
    for (const b of publishedBreeds) {
      expect(
        breedsForLivestock(b.parentLivestock.slug).some(
          (x) => x.slug === b.slug,
        ),
        `${b.slug}`,
      ).toBe(true);
    }
  });
});

describe('phase 3A — image identity honesty', () => {
  it('any attached sub-entity image declares identityConfidence', () => {
    for (const item of [...publishedCultivars, ...publishedBreeds]) {
      if (item.image)
        expect(item.image.identityConfidence, `${item.slug}`).toBeDefined();
    }
  });

  it('routes exist for every published sub-entity', () => {
    for (const c of publishedCultivars)
      expect(getContent('cultivar', c.slug), `${c.slug}`).toBeDefined();
    for (const b of publishedBreeds)
      expect(getContent('breed', b.slug), `${b.slug}`).toBeDefined();
  });
});
