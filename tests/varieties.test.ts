import { describe, expect, it } from 'vitest';
import { VARIETY_REGISTRATIONS } from '@/data/varieties';
import {
  CULTIVAR_MATCH_BASIS,
  REGISTRATION_INSTRUMENTS,
  VARIETY_REGISTRATION_STATUSES,
} from '@/types/variety';
import {
  registrationsForCultivar,
  cultivarsWithRegistrations,
  registrationsByInstrument,
  registerAuthoritiesFor,
  presentSpecies,
  isCurrent,
  VARIETY_REGISTRATION_HUB_PATH,
} from '@/lib/varieties/registry';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { REGISTRIES } from '@/data/registries';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const EXPECTED = 123;
const DOCS = buildSearchDocuments();
const CULTIVARS = new Map(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar').map((c) => [
    c.slug,
    c as { slug: string; title: string; botanicalTaxon?: string },
  ]),
);

/** Same derivation the validator uses: genus + epithet, authority stripped. */
const SKIP = new Set(['x', '×', 'subsp.', 'ssp.', 'var.', 'convar.', 'f.']);
function taxonKey(name: string | undefined): string | null {
  if (!name) return null;
  const t = name
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');
  const genus = (t[0] ?? '').toLowerCase();
  if (!/^[a-z]{3,}$/.test(genus)) return null;
  for (const raw of t.slice(1)) {
    const w = raw.toLowerCase().replace(/[.,]+$/, '');
    if (SKIP.has(raw.toLowerCase())) continue;
    if (raw !== raw.toLowerCase()) continue;
    if (!/^[a-z-]{3,}$/.test(w)) continue;
    return `${genus} ${w}`;
  }
  return null;
}
const EQUIV = new Map([['triticum durum', 'triticum turgidum']]);

describe('variety registration — a denomination is not a variety', () => {
  it('attaches every entry to a cultivar of the same botanical species', () => {
    expect(VARIETY_REGISTRATIONS).toHaveLength(EXPECTED);
    for (const r of VARIETY_REGISTRATIONS) {
      const cultivar = CULTIVARS.get(r.cultivarRef);
      expect(cultivar, r.id).toBeDefined();
      let registerKey = taxonKey(r.upovSpeciesName);
      if (registerKey && EQUIV.has(registerKey))
        registerKey = EQUIV.get(registerKey)!;
      expect(registerKey, r.id).toBe(taxonKey(cultivar!.botanicalTaxon));
    }
  });

  it('never records a match on any basis weaker than name plus species', () => {
    // The vocabulary has exactly one member on purpose: naming a weaker basis
    // would invite using it, and a name-only match is wrong 51% of the time
    // in this corpus.
    for (const r of VARIETY_REGISTRATIONS) {
      expect(r.cultivarMatchBasis, r.id).toBe(CULTIVAR_MATCH_BASIS);
    }
  });

  it('stores the denomination exactly as the cultivar is titled', () => {
    for (const r of VARIETY_REGISTRATIONS) {
      const cultivar = CULTIVARS.get(r.cultivarRef)!;
      expect(r.denomination.toLowerCase(), r.id).toBe(
        cultivar.title.toLowerCase(),
      );
      expect(r.denomination, r.id).toBe(r.denomination.trim());
    }
  });
});

describe('variety registration — a listing is not a right', () => {
  it('derives the instrument from the register identifier, not a label', () => {
    for (const r of VARIETY_REGISTRATIONS) {
      const prefix = r.registerUuid.split('/')[0];
      expect(REGISTRATION_INSTRUMENTS, r.id).toContain(r.instrument);
      expect(r.instrument, r.id).toBe(
        prefix === 'PBR' ? 'community-plant-variety-right' : 'national-list',
      );
    }
  });

  it('never gives an EU-wide right a member state', () => {
    for (const r of VARIETY_REGISTRATIONS) {
      if (r.instrument !== 'community-plant-variety-right') continue;
      expect(r.countryCode, r.id).toBeUndefined();
      expect(r.countryOrOrganisation, r.id).toBe('CPVO');
    }
  });

  it('keeps national list entries and rights in separate groups', () => {
    const groups = registrationsByInstrument();
    const total = [...groups.values()].reduce((n, g) => n + g.length, 0);
    expect(total).toBe(VARIETY_REGISTRATIONS.length);
    for (const [instrument, entries] of groups) {
      for (const e of entries) expect(e.instrument).toBe(instrument);
    }
  });
});

describe('variety registration — status is what the register says', () => {
  it('agrees with the published wording in every record', () => {
    const map: Record<string, string> = {
      Registered: 'registered',
      Application: 'application',
      Expired: 'expired',
      Surrendered: 'surrendered',
    };
    for (const r of VARIETY_REGISTRATIONS) {
      expect(VARIETY_REGISTRATION_STATUSES, r.id).toContain(r.status);
      expect(map[r.publishedStatusWording], r.id).toBe(r.status);
    }
  });

  it('counts only registered entries as current', () => {
    for (const r of VARIETY_REGISTRATIONS) {
      expect(isCurrent(r), r.id).toBe(r.status === 'registered');
    }
    expect(VARIETY_REGISTRATIONS.filter(isCurrent).length).toBeLessThan(
      VARIETY_REGISTRATIONS.length,
    );
  });

  it('says so on every entry that is no longer listed', () => {
    for (const r of VARIETY_REGISTRATIONS) {
      if (isCurrent(r)) continue;
      expect(
        r.limitations.some((l) => l.includes(r.publishedStatusWording)),
        r.id,
      ).toBe(true);
    }
  });
});

describe('variety registration — provenance and wiring', () => {
  it('carries a real source and registry on every entry', () => {
    const registryIds = new Set(REGISTRIES.map((x) => x.id));
    for (const r of VARIETY_REGISTRATIONS) {
      expect(r.sourceReferences.length, r.id).toBeGreaterThan(0);
      for (const s of r.sourceReferences)
        expect(SOURCE_MAP.has(s), s).toBe(true);
      expect(r.relatedRegistryIds.length, r.id).toBeGreaterThan(0);
      for (const x of r.relatedRegistryIds)
        expect(registryIds.has(x), x).toBe(true);
      expect(r.limitations.length, r.id).toBeGreaterThan(0);
    }
  });

  it('derives register authorities instead of storing them', () => {
    // The portal aggregates national registers, so an entry names the body that
    // runs the REGISTER, never an inferred granting authority.
    for (const r of VARIETY_REGISTRATIONS) {
      expect(r).not.toHaveProperty('responsibleAuthorityIds');
    }
    const french = VARIETY_REGISTRATIONS.find((r) => r.countryCode === 'FRA')!;
    expect(registerAuthoritiesFor(french)).toContain('fr-masa');
  });

  it('publishes one hub route and no page per register entry', () => {
    // 123 entry pages would be 123 pages thinner than the cultivar they cite.
    const paths = allRoutes().map((r) => r.path);
    expect(paths).toContain(VARIETY_REGISTRATION_HUB_PATH);
    expect(
      paths.filter((p) => p.startsWith(`${VARIETY_REGISTRATION_HUB_PATH}/`)),
    ).toHaveLength(0);
  });

  it('indexes registration as a single searchable hub document', () => {
    const docs = DOCS.filter((d) => d.type === 'variety-registration');
    expect(docs).toHaveLength(1);
    expect(docs[0]!.route).toBe(VARIETY_REGISTRATION_HUB_PATH);
    expect(docs[0]!.names).toContain('variety registration');
  });

  it('keeps denominations and species off the hub name weight', () => {
    // Regression: carrying them at name weight made this hub outrank the wheat
    // page for "triticum aestivum" and the potato page for "solanum tuberosum".
    // They stay discoverable at relation weight, where the entity pages win.
    const doc = DOCS.find((d) => d.type === 'variety-registration')!;
    expect(doc.names).not.toContain('Bintje');
    expect(doc.names.some((n) => n.includes('Triticum'))).toBe(false);
    expect(doc.relationLabels).toContain('Bintje');
    expect(doc.relationLabels).toContain('Triticum aestivum L.');
  });
});

describe('variety registration — query layer', () => {
  it('returns every jurisdiction recorded for a cultivar', () => {
    const bintje = registrationsForCultivar('bintje');
    expect(bintje.length).toBeGreaterThan(1);
    expect(new Set(bintje.map((r) => r.cultivarRef))).toEqual(
      new Set(['bintje']),
    );
    expect(bintje.some(isCurrent)).toBe(true);
    expect(bintje.some((r) => !isCurrent(r))).toBe(true);
  });

  it('reports nothing for a cultivar with no recorded entry', () => {
    expect(registrationsForCultivar('b73-maize')).toEqual([]);
    expect(cultivarsWithRegistrations()).not.toContain('b73-maize');
  });

  it('lists only species that actually appear', () => {
    const codes = new Set(VARIETY_REGISTRATIONS.map((r) => r.upovSpeciesCode));
    expect(new Set(presentSpecies().map((s) => s.code))).toEqual(codes);
  });
});
