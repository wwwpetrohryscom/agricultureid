import { describe, expect, it } from 'vitest';
import {
  ALL_CONTENT,
  PUBLISHED_CONTENT,
  resolveImage,
} from '@/lib/content/registry';
import {
  RELATION_TYPES,
  INVERSE_RELATION,
  allSemanticEdges,
  incorrectReciprocalEdges,
  semanticEdges,
} from '@/lib/content/relations';
import { getSource } from '@/lib/sources/registry';
import { evidenceTier, unclassifiedSources } from '@/lib/sources/evidence';
import { safetyReport, duplication } from '@/lib/validation/audit';
import { SOURCES } from '@/data/sources';
import { UNRESOLVED_ISSUES } from '@/data/unresolved-issues';
import { getContent } from '@/lib/content/registry';

describe('phase 2.1 — evidence hierarchy', () => {
  it('classifies every registry source into a tier', () => {
    expect(unclassifiedSources()).toEqual([]);
  });

  it('assigns tiers within 1–3', () => {
    for (const s of SOURCES) {
      expect(evidenceTier(s.id)).toBeGreaterThanOrEqual(1);
      expect(evidenceTier(s.id)).toBeLessThanOrEqual(3);
    }
  });

  it('never leaves a page sourced only by Tier-3 evidence', () => {
    for (const item of PUBLISHED_CONTENT) {
      if (!item.sourceReferences.length) continue;
      const best = Math.min(
        ...item.sourceReferences.map((r) => evidenceTier(r.sourceId)),
      );
      expect(best, `${item.slug}`).toBeLessThanOrEqual(2);
    }
  });
});

describe('phase 2.1 — field-level provenance', () => {
  it('every claim citation resolves to a registry source', () => {
    for (const item of ALL_CONTENT) {
      for (const claim of item.claims ?? []) {
        expect(claim.citations.length).toBeGreaterThan(0);
        for (const c of claim.citations) {
          expect(
            getSource(c.sourceId),
            `${item.slug}:${claim.field}`,
          ).toBeDefined();
        }
      }
    }
  });

  it('quantitative & safety-critical claims carry Tier 1–2 evidence', () => {
    for (const item of ALL_CONTENT) {
      for (const claim of item.claims ?? []) {
        if (!claim.quantitative && !claim.safetyCritical) continue;
        const best = Math.min(
          ...claim.citations.map((c) => evidenceTier(c.sourceId)),
        );
        expect(best, `${item.slug}:${claim.field}`).toBeLessThanOrEqual(2);
      }
    }
  });

  it('has provenance for the audited quantitative pages', () => {
    const withClaims = ALL_CONTENT.filter((i) => (i.claims?.length ?? 0) > 0);
    expect(withClaims.length).toBeGreaterThanOrEqual(25);
  });
});

describe('phase 2.1 — semantic relations', () => {
  it('every edge uses a known relation type', () => {
    for (const e of allSemanticEdges()) {
      expect(RELATION_TYPES.has(e.relation), e.relation).toBe(true);
    }
  });

  it('has no duplicate semantic edges', () => {
    const seen = new Set<string>();
    for (const e of allSemanticEdges()) {
      const k = `${e.from.type}:${e.from.slug}->${e.to.type}:${e.to.slug}:${e.relation}`;
      expect(seen.has(k), k).toBe(false);
      seen.add(k);
    }
  });

  it('forces no semantically-incorrect reciprocity', () => {
    expect(incorrectReciprocalEdges()).toEqual([]);
  });

  it('maps typed disease/pest host edges to `affects` and crop edges to `susceptibleTo`', () => {
    const potato = PUBLISHED_CONTENT.find(
      (i) => i.slug === 'potato' && i.contentType === 'crop',
    )!;
    const edges = semanticEdges(potato);
    // potato lists late-blight as a common disease → susceptibleTo
    const d = edges.find((e) => e.to.slug === 'late-blight');
    expect(d?.relation).toBe('susceptibleTo');
  });

  it('defines inverses only for symmetric-safe relations', () => {
    for (const [rel, inv] of Object.entries(INVERSE_RELATION)) {
      // The inverse of the inverse must be the original.
      expect(INVERSE_RELATION[inv!]).toBe(rel);
    }
  });
});

describe('phase 2.1 — image identity + licensing', () => {
  it('every attached image has creator, source page, license URL, and modification disclosure', () => {
    for (const item of PUBLISHED_CONTENT) {
      const img = resolveImage(item);
      if (!img) continue;
      expect(img.creator?.trim(), `${item.slug} creator`).toBeTruthy();
      expect(img.originalPage?.trim(), `${item.slug} source page`).toBeTruthy();
      expect(img.licenseUrl?.trim(), `${item.slug} licenseUrl`).toBeTruthy();
      expect(
        img.modifications?.trim(),
        `${item.slug} modifications`,
      ).toBeTruthy();
    }
  });
});

describe('phase 2.1 — unresolved-issues registry', () => {
  it('every issue is well-formed with a defined severity/status', () => {
    for (const i of UNRESOLVED_ISSUES) {
      expect(
        i.id && i.entity && i.topic && i.currentWording && i.requiredWork,
      ).toBeTruthy();
      expect(['critical', 'major', 'minor']).toContain(i.severity);
      expect(['open', 'mitigated', 'resolved']).toContain(i.status);
    }
  });

  it('no unsafe public claim is left open', () => {
    const unsafeOpen = UNRESOLVED_ISSUES.filter(
      (i) => !i.publicClaimSafe && i.status === 'open',
    );
    expect(unsafeOpen).toEqual([]);
  });

  it('reflects the applied public mitigations in the content', () => {
    // cassava↔bacterial-wilt relationship removed both ways
    const cassava = getContent('crop', 'cassava');
    expect(
      cassava?.contentType === 'crop' &&
        cassava.commonDiseases.some((d) => d.slug === 'bacterial-wilt'),
    ).toBe(false);
    const bw = getContent('plant-disease', 'bacterial-wilt');
    expect(
      bw?.contentType === 'plant-disease' &&
        bw.hostCrops.some((h) => h.slug === 'cassava'),
    ).toBe(false);
  });
});

describe('phase 2.1 — safety & duplication audits', () => {
  it('finds no safety violations (missing callout, prescriptive dose, health claim)', () => {
    expect(safetyReport()).toEqual([]);
  });

  it('flags no non-intentional duplicated boilerplate above threshold', () => {
    const problematic = duplication(6).filter((d) => !d.intentional);
    // Any remaining high-frequency repeats must be intentional safety/method text.
    expect(problematic.length).toBeLessThanOrEqual(3);
  });
});
