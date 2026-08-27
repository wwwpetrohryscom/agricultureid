import { describe, expect, it } from 'vitest';
import { SUPPORT_PROGRAMS } from '@/data/support';
import {
  isPublishableSupportProgram,
  SUPPORT_PROGRAM_TYPES,
  SUPPORT_STATUSES,
} from '@/types/support';
import {
  publishedSupportPrograms,
  supportProgramsForAuthority,
  supportPath,
  SUPPORT_HUB_PATH,
} from '@/lib/support/registry';
import { AUTHORITIES } from '@/data/authorities';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const EXPECTED = 8;
const DOCS = buildSearchDocuments();
const S_DOCS = DOCS.filter((d) => d.type === 'agricultural-support');
const VERIFICATION_HORIZON = '2026-08-20';

describe('support — nothing time-sensitive is guessed', () => {
  it('records no funding figure that was not established', () => {
    // Zero is the honest state after this pass. If a figure is ever added it
    // must carry a basis and a citation, which the next test enforces.
    expect(
      SUPPORT_PROGRAMS.flatMap((p) => p.fundingAmounts ?? []),
    ).toHaveLength(0);
  });

  it('requires a basis and a citation on any funding figure', () => {
    for (const p of SUPPORT_PROGRAMS) {
      for (const f of p.fundingAmounts ?? []) {
        expect(f.basis, p.id).toBeTruthy();
        expect(SOURCE_MAP.has(f.sourceId), `${p.id} → ${f.sourceId}`).toBe(
          true,
        );
      }
    }
  });

  it('records no application window that was not established', () => {
    expect(SUPPORT_PROGRAMS.filter((p) => p.applicationWindow)).toHaveLength(0);
  });

  it('never closes an application window before it opens', () => {
    for (const p of SUPPORT_PROGRAMS) {
      const w = p.applicationWindow;
      if (w?.opens && w?.closes) expect(w.opens <= w.closes, p.id).toBe(true);
    }
  });

  it('cites every eligibility requirement', () => {
    for (const p of SUPPORT_PROGRAMS) {
      for (const r of p.requirements ?? []) {
        expect(SOURCE_MAP.has(r.sourceId), `${p.id} → ${r.id}`).toBe(true);
      }
    }
  });

  it('never claims freshness later than the verification pass', () => {
    for (const p of SUPPORT_PROGRAMS) {
      expect(p.lastVerifiedAt, p.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(p.lastVerifiedAt <= VERIFICATION_HORIZON, p.id).toBe(true);
    }
  });
});

describe('support — a closed programme is never shown as available', () => {
  it('excludes closed programmes from publication and listing', () => {
    for (const p of SUPPORT_PROGRAMS) {
      if (p.status === 'closed') {
        expect(isPublishableSupportProgram(p), p.id).toBe(false);
      }
    }
  });

  it('uses only the controlled status vocabulary, never defaulting to active', () => {
    for (const p of SUPPORT_PROGRAMS) {
      expect(SUPPORT_STATUSES as readonly string[]).toContain(p.status);
      expect(SUPPORT_PROGRAM_TYPES as readonly string[]).toContain(
        p.programType,
      );
    }
    // Every current record is `recurring` — the official pages present these as
    // standing programmes, and none was asserted `active` without evidence of
    // an open window.
    expect(
      SUPPORT_PROGRAMS.filter((p) => p.status === 'recurring'),
    ).toHaveLength(EXPECTED);
    expect(SUPPORT_PROGRAMS.filter((p) => p.status === 'active')).toHaveLength(
      0,
    );
  });

  it('surfaces status in the search result category', () => {
    for (const d of S_DOCS) {
      expect(d.category, d.id).toMatch(/Support programme · /);
    }
  });
});

describe('support — linkage and provenance', () => {
  it('holds the expected corpus, all publishable', () => {
    expect(SUPPORT_PROGRAMS).toHaveLength(EXPECTED);
    expect(publishedSupportPrograms()).toHaveLength(EXPECTED);
  });

  it('names a real administering authority for every programme', () => {
    const ids = new Set(AUTHORITIES.map((a) => a.id));
    for (const p of SUPPORT_PROGRAMS) {
      expect(p.administeringAuthorityIds.length, p.id).toBeGreaterThan(0);
      for (const aid of p.administeringAuthorityIds) {
        expect(ids.has(aid), `${p.id} → ${aid}`).toBe(true);
      }
    }
  });

  it('is reachable from the authority that administers it', () => {
    expect(
      supportProgramsForAuthority('us-usda-nrcs').length,
    ).toBeGreaterThanOrEqual(4);
    expect(supportProgramsForAuthority('does-not-exist')).toHaveLength(0);
  });

  it('never lets two programmes share one official URL', () => {
    const urls = SUPPORT_PROGRAMS.map((p) => p.officialUrl);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it('states limitations on every programme', () => {
    for (const p of SUPPORT_PROGRAMS) {
      expect(p.limitations.length, p.id).toBeGreaterThan(0);
    }
  });
});

describe('support — routing and search', () => {
  it('gives every published programme one route, plus the hub', () => {
    const paths = allRoutes().map((r) => r.path);
    const detail = paths.filter((x) => /^\/agricultural-support\/.+/.test(x));
    expect(new Set(detail).size).toBe(detail.length);
    expect(detail.length).toBe(EXPECTED);
    expect(paths).toContain(SUPPORT_HUB_PATH);
  });

  it('indexes every listed programme and routes it to a real page', () => {
    const routes = new Set(allRoutes().map((r) => r.path));
    expect(S_DOCS.length).toBe(EXPECTED);
    for (const d of S_DOCS) expect(routes.has(d.route), d.id).toBe(true);
    for (const p of publishedSupportPrograms()) {
      const d = S_DOCS.find((x) => x.id === `support:${p.id}`)!;
      expect(d.route).toBe(supportPath(p.slug));
    }
  });

  it('ships no verification payload into the client index', () => {
    const blob = JSON.stringify(S_DOCS);
    for (const leak of [
      'evidenceNote',
      'lastVerifiedAt',
      'sourceReferences',
      'verification',
    ]) {
      expect(blob.includes(leak), leak).toBe(false);
    }
  });
});
