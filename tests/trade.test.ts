import { describe, expect, it } from 'vitest';
import {
  CERTIFICATE_INSTRUMENT,
  JURISDICTION_ROLES,
  ROLE_FOR_DIRECTION,
  CERTIFICATE_TYPES,
  RESERVED_CERTIFICATE_TYPES,
  TRADE_DIRECTIONS,
  TRADE_SUBJECT_TYPES,
} from '@/types/trade-requirement';
import {
  TRADE_REQUIREMENTS,
  jurisdictionsWithRequirements,
  requirementsFor,
  unresolvedConditionCount,
} from '@/lib/trade/registry';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { REGISTRIES } from '@/data/registries';
import { AUTHORITIES } from '@/data/authorities';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';
import { allMarketSeries } from '@/lib/markets/registry';

const R = TRADE_REQUIREMENTS;
const DOCS = buildSearchDocuments();

describe('trade — a conditional rule is never stated flatly', () => {
  it('makes every directory record name what it does not resolve', () => {
    // The conditions the official system decides are the whole point of the
    // form. Without them it is a flat rule wearing a pointer's clothes.
    const thin = R.filter(
      (r) => r.nature === 'directory' && r.unresolvedConditions.length < 2,
    ).map((r) => r.id);
    expect(thin).toEqual([]);
    expect(unresolvedConditionCount()).toBeGreaterThan(20);
  });

  it('never lets a directory record claim to be current', () => {
    // It states no requirement, so there is nothing for it to be current about.
    const wrong = R.filter(
      (r) => r.nature === 'directory' && r.status === 'current',
    ).map((r) => r.id);
    expect(wrong).toEqual([]);
  });

  it('requires operative text before anything may be stated flatly', () => {
    for (const r of R.filter((x) => x.nature === 'stated')) {
      expect(r.operativeText, r.id).toBeTruthy();
      expect(r.unresolvedConditions, r.id).toEqual([]);
    }
    // None of the systems examined published an unconditional condition.
    expect(R.filter((r) => r.nature === 'stated')).toHaveLength(0);
  });
});

describe('trade — direction and jurisdiction are part of the fact', () => {
  it('keeps import and export apart', () => {
    const used = new Set(R.map((r) => r.direction));
    for (const d of TRADE_DIRECTIONS) expect(used, d).toContain(d);
    // An import requirement whose title describes exporting would send a
    // reader to the wrong obligation on the wrong party.
    const confused = R.filter((r) => {
      const t = r.title.toLowerCase();
      if (r.direction === 'import')
        return /\bexport(ing)?\b/.test(t) && !/import/.test(t);
      return /\bimport(ing)?\b/.test(t) && !/export/.test(t);
    }).map((r) => r.id);
    expect(confused).toEqual([]);
  });

  it('belongs to a country or to a union above them, never both', () => {
    const bad = R.filter(
      (r) =>
        Boolean(r.jurisdictionCountryCode) ===
        Boolean(r.supranationalJurisdiction),
    ).map((r) => r.id);
    expect(bad).toEqual([]);
    // The EU legislates above the national level and gets no invented country
    // code, which would put a non-existent country in a filter.
    const eu = R.find((r) => r.supranationalJurisdiction === 'European Union')!;
    expect(eu.jurisdictionCountryCode).toBeUndefined();
  });
});

describe('trade — the documents are not interchangeable', () => {
  it('names the instrument behind every certificate type', () => {
    for (const c of CERTIFICATE_TYPES) {
      expect(CERTIFICATE_INSTRUMENT[c].instrument, c).toBeTruthy();
      expect(CERTIFICATE_INSTRUMENT[c].attests, c).toBeTruthy();
    }
  });

  it('never attaches a plant certificate to an animal movement', () => {
    const wrong = R.filter((r) => {
      if (!r.certificateType) return false;
      const plantCert = r.certificateType.includes('phytosanitary');
      const plantSubjects = r.subjectTypes.some((s) =>
        ['plant', 'plant-product', 'seed'].includes(s),
      );
      return plantCert && !plantSubjects;
    }).map((r) => r.id);
    expect(wrong).toEqual([]);
  });

  it('reserves the types nothing uses, with a reason', () => {
    const used = new Set(R.map((r) => r.certificateType).filter(Boolean));
    const reserved = new Set(
      RESERVED_CERTIFICATE_TYPES.map((r) => r.certificateType),
    );
    for (const c of CERTIFICATE_TYPES)
      expect(used.has(c) || reserved.has(c), c).toBe(true);
    // The check that refuses a phytosanitary certificate on an animal movement
    // needs the animal certificate to exist in order to mean anything.
    expect(reserved.has('export-health-certificate')).toBe(true);
  });
});

describe('trade — no procedure, no invented commodity', () => {
  it('publishes no treatment procedure', () => {
    const procedure =
      /\b(\d+\s*(g|kg|mg|ml|l|ppm|°c)\b|apply(?:ing)? at|dosage|rate of|concentration of)/i;
    const leaked = R.filter((r) =>
      procedure.test(
        `${r.title} ${r.summary} ${r.unresolvedConditions.join(' ')}`,
      ),
    ).map((r) => r.id);
    expect(leaked).toEqual([]);
  });

  it('expands no category into individual commodities', () => {
    // "Plants for planting" is not every crop in this corpus.
    const leaked = R.filter((r) =>
      ['cropRef', 'commodityRef', 'livestockRef'].some(
        (k) => k in (r as unknown as Record<string, unknown>),
      ),
    ).map((r) => r.id);
    expect(leaked).toEqual([]);
  });
});

describe('trade — a requirement is not a statistic', () => {
  it('shares no identity with the market trade series', () => {
    // "How much wheat did France export" and "what must accompany a wheat
    // shipment into Australia" are different questions with different sources.
    const marketIds = new Set(
      allMarketSeries()
        .slice(0, 500)
        .map((s) => s.id),
    );
    expect(R.some((r) => marketIds.has(r.id))).toBe(false);
    const doc = DOCS.find((d) => d.type === 'trade-requirement')!;
    // The border hub must not take the trade-statistics vocabulary.
    expect(
      doc.names.some((n) =>
        /tonnes|export value|trade volume|statistics/i.test(n),
      ),
    ).toBe(false);
  });
});

describe('trade — provenance, wiring and scale', () => {
  it('resolves every source, registry and authority it names', () => {
    const regs = new Set(REGISTRIES.map((x) => x.id));
    const auths = new Set(AUTHORITIES.map((a) => a.id));
    for (const r of R) {
      expect(r.officialSourceIds.length, r.id).toBeGreaterThan(0);
      for (const s of r.officialSourceIds)
        expect(SOURCE_MAP.has(s), s).toBe(true);
      for (const x of r.registryIds) expect(regs.has(x), x).toBe(true);
      for (const a of r.authorityIds) expect(auths.has(a), a).toBe(true);
      expect(r.limitations.length, r.id).toBeGreaterThan(0);
    }
  });

  it('reaches every direction and subject type in the vocabulary', () => {
    const subjects = new Set(R.flatMap((r) => r.subjectTypes));
    for (const s of TRADE_SUBJECT_TYPES) expect(subjects, s).toContain(s);
  });

  it('publishes one hub and no page per requirement', () => {
    const paths = allRoutes().map((p) => p.path);
    expect(paths).toContain('/agricultural-trade');
    expect(
      paths.filter((p) => p.startsWith('/agricultural-trade/')),
    ).toHaveLength(0);
  });

  it('answers by jurisdiction, which is what a reader knows first', () => {
    expect(jurisdictionsWithRequirements().length).toBe(7);
    expect(requirementsFor('AUS')).toHaveLength(1);
    expect(requirementsFor('European Union')).toHaveLength(1);
    expect(requirementsFor('ZZZ')).toEqual([]);
  });
});
