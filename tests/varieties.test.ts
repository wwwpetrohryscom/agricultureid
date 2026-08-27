import { describe, expect, it } from 'vitest';
import { VARIETY_REGISTRATIONS } from '@/data/varieties';
import {
  CULTIVAR_MATCH_BASIS,
  INSTRUMENT_KIND,
  INSTRUMENT_KINDS,
  REGISTER_SUBTYPES,
  REGISTRATION_INSTRUMENTS,
  VARIETY_REGISTRATION_STATUSES,
} from '@/types/variety';
import {
  CROP_KIND_TAXA,
  REGISTER_CONTRACTS,
  REGISTER_CONTRACT_MAP,
  TAXON_EQUIVALENCES,
} from '@/lib/varieties/registers';
import {
  registrationsForCultivar,
  cultivarsWithRegistrations,
  registrationsByInstrument,
  registrationsByKind,
  registerAuthoritiesFor,
  presentRegisters,
  presentSpecies,
  isCurrent,
  VARIETY_REGISTRATION_HUB_PATH,
} from '@/lib/varieties/registry';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { REGISTRIES } from '@/data/registries';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const EXPECTED = 147;
const DOCS = buildSearchDocuments();
const CULTIVARS = new Map(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar').map((c) => [
    c.slug,
    c as { slug: string; title: string; botanicalTaxon?: string },
  ]),
);

/**
 * Same derivation the validator uses: genus + epithet, authority stripped.
 *
 * The epithet is the first following word that is neither a rank marker nor an
 * abbreviation ending in a full stop. Identifying authorities by capitalisation
 * instead returns null for every register that publishes in upper case, and the
 * United Kingdom publishes `SOLANUM LYCOPERSICUM L. VAR. LYCOPERSICUM`.
 */
const SKIP = new Set([
  'x',
  '×',
  'subsp.',
  'ssp.',
  'var.',
  'convar.',
  'f.',
  'group',
  'sp.',
  'spp.',
]);
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
    const w = raw.toLowerCase();
    if (SKIP.has(w)) continue;
    if (w.endsWith('.')) continue;
    if (!/^[a-z][a-z-]{2,}$/.test(w)) continue;
    return `${genus} ${w}`;
  }
  return null;
}
const EQUIV = new Map(
  TAXON_EQUIVALENCES.map((e) => [e.registerTaxon, e.corpusTaxon]),
);
const CROP_KIND = new Map(
  CROP_KIND_TAXA.map((e) => [
    `${e.registerId}|${e.cropKind}|${e.subCropKind}`,
    e.taxon,
  ]),
);
/** The taxon an entry's register actually establishes, however it expresses it. */
function registerTaxonOf(r: (typeof VARIETY_REGISTRATIONS)[number]) {
  const contract = REGISTER_CONTRACT_MAP.get(r.registerId)!;
  if (contract.speciesForm === 'botanical') return r.registerSpeciesName;
  return CROP_KIND.get(
    `${r.registerId}|${r.registerSpeciesName}|${r.registerSpeciesSubGroup}`,
  );
}

describe('variety registration — a denomination is not a variety', () => {
  it('attaches every entry to a cultivar of the same botanical species', () => {
    expect(VARIETY_REGISTRATIONS).toHaveLength(EXPECTED);
    for (const r of VARIETY_REGISTRATIONS) {
      const cultivar = CULTIVARS.get(r.cultivarRef);
      expect(cultivar, r.id).toBeDefined();
      let registerKey = taxonKey(registerTaxonOf(r));
      if (registerKey && EQUIV.has(registerKey))
        registerKey = EQUIV.get(registerKey)!;
      expect(registerKey, r.id).toBe(taxonKey(cultivar!.botanicalTaxon));
    }
  });

  it('never records a match on any basis weaker than name plus species', () => {
    // The vocabulary has exactly one member on purpose: naming a weaker basis
    // would invite using it, and a name-only match is wrong more often than
    // not — 51% across the EU portal, 57% across the four registers added
    // since.
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
  it('lets no entry claim an instrument its register cannot issue', () => {
    for (const r of VARIETY_REGISTRATIONS) {
      const contract = REGISTER_CONTRACT_MAP.get(r.registerId);
      expect(contract, r.id).toBeDefined();
      expect(REGISTRATION_INSTRUMENTS, r.id).toContain(r.instrument);
      expect(contract!.instruments, r.id).toContain(r.instrument);
    }
  });

  it('derives the instrument from the register identifier where it encodes one', () => {
    for (const r of VARIETY_REGISTRATIONS) {
      const prefixes = REGISTER_CONTRACT_MAP.get(
        r.registerId,
      )!.entryIdPrefixInstrument;
      if (!prefixes || !r.registerEntryId) continue;
      const prefix = r.registerEntryId.split('/')[0]!;
      expect(r.instrument, r.id).toBe(prefixes[prefix]);
    }
  });

  it('keeps permission to market and ownership of a variety apart', () => {
    // A reader who totals these gets "registered in seven places" for a variety
    // listed in five countries and owned in two, which is two different facts
    // added together.
    const kinds = registrationsByKind();
    expect([...kinds.keys()].sort()).toEqual([...INSTRUMENT_KINDS].sort());
    for (const [kind, entries] of kinds) {
      for (const e of entries) expect(INSTRUMENT_KIND[e.instrument]).toBe(kind);
    }
    expect(kinds.get('variety-registration')!.length).toBeGreaterThan(0);
    expect(kinds.get('plant-variety-protection-right')!.length).toBeGreaterThan(
      0,
    );
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
    for (const r of VARIETY_REGISTRATIONS) {
      const contract = REGISTER_CONTRACT_MAP.get(r.registerId)!;
      expect(VARIETY_REGISTRATION_STATUSES, r.id).toContain(r.status);
      expect(contract.statuses[r.publishedStatusWording], r.id).toBe(r.status);
    }
  });

  it('lets no register invent a status wording its contract does not pin', () => {
    for (const r of VARIETY_REGISTRATIONS) {
      const contract = REGISTER_CONTRACT_MAP.get(r.registerId)!;
      expect(
        Object.keys(contract.statuses),
        `${r.id}: ${r.publishedStatusWording}`,
      ).toContain(r.publishedStatusWording);
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
    // 147 entry pages would be 147 pages thinner than the cultivar they cite.
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
    expect(doc.relationLabels).toContain('Triticum aestivum');
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

  it('groups species by the cultivar taxon, not by what a register printed', () => {
    // Five registers write the tomato five ways — `Solanum lycopersicum L.`,
    // `SOLANUM LYCOPERSICUM L. VAR. LYCOPERSICUM`, `Lycopersicon esculentum
    // Mill.` — and grouping on those would scatter one species across three
    // headings.
    const covered = new Set(VARIETY_REGISTRATIONS.map((r) => r.cultivarRef));
    const grouped = new Set(presentSpecies().flatMap((s) => s.cultivars));
    expect(grouped).toEqual(covered);
    expect(presentSpecies().every((s) => s.taxon !== 'Unresolved')).toBe(true);
  });

  it('reports only registers that actually feed entries', () => {
    const present = presentRegisters();
    expect(present.length).toBe(
      new Set(VARIETY_REGISTRATIONS.map((r) => r.registerId)).size,
    );
    for (const r of present) expect(r.entries.length).toBeGreaterThan(0);
  });
});

describe('variety registration — nothing in the vocabulary is decorative', () => {
  // A register sub-type named `vine-species` sat unreachable in this vocabulary
  // until this wave: the only register feeding the layer has no vine species at
  // all. An unreachable member reads as coverage that exists.
  it('reaches every register contract with real entries', () => {
    const used = new Set(VARIETY_REGISTRATIONS.map((r) => r.registerId));
    for (const c of REGISTER_CONTRACTS) expect(used, c.id).toContain(c.id);
    expect(used.size).toBe(REGISTER_CONTRACTS.length);
  });

  it('reaches every instrument and every register sub-type', () => {
    const instruments = new Set(VARIETY_REGISTRATIONS.map((r) => r.instrument));
    for (const i of REGISTRATION_INSTRUMENTS)
      expect(instruments, i).toContain(i);
    const subTypes = new Set(
      VARIETY_REGISTRATIONS.map((r) => r.registerSubType).filter(Boolean),
    );
    for (const s of REGISTER_SUBTYPES) expect(subTypes, s).toContain(s);
  });

  it('maps every normalised status from some register’s own wording', () => {
    const targets = new Set(
      REGISTER_CONTRACTS.flatMap((c) => Object.values(c.statuses)),
    );
    for (const s of VARIETY_REGISTRATION_STATUSES)
      expect(targets, s).toContain(s);
  });

  it('uses every documented equivalence', () => {
    // An equivalence nothing exercises is one nothing has tested.
    const registerKeys = new Set(
      VARIETY_REGISTRATIONS.map((r) => taxonKey(registerTaxonOf(r))),
    );
    for (const e of TAXON_EQUIVALENCES)
      expect(registerKeys, e.registerTaxon).toContain(e.registerTaxon);
    const cropKeys = new Set(
      VARIETY_REGISTRATIONS.filter((r) => r.registerSpeciesSubGroup).map(
        (r) =>
          `${r.registerId}|${r.registerSpeciesName}|${r.registerSpeciesSubGroup}`,
      ),
    );
    for (const e of CROP_KIND_TAXA)
      expect(
        cropKeys,
        `${e.registerId}|${e.cropKind}|${e.subCropKind}`,
      ).toContain(`${e.registerId}|${e.cropKind}|${e.subCropKind}`);
  });
});

describe('variety registration — registers that publish a crop kind', () => {
  it('requires the sub-kind that resolves a crop kind to one species', () => {
    for (const r of VARIETY_REGISTRATIONS) {
      const contract = REGISTER_CONTRACT_MAP.get(r.registerId)!;
      if (contract.speciesForm !== 'crop-kind') {
        expect(r.registerSpeciesSubGroup, r.id).toBeUndefined();
        continue;
      }
      expect(r.registerSpeciesSubGroup, r.id).toBeTruthy();
      expect(registerTaxonOf(r), r.id).toBeTruthy();
    }
  });

  it('says on the entry itself that the register published no botanical name', () => {
    for (const r of VARIETY_REGISTRATIONS) {
      if (!r.registerSpeciesSubGroup) continue;
      expect(
        r.limitations.some((l) => l.includes('crop kind')),
        r.id,
      ).toBe(true);
    }
  });
});
