/**
 * Query layer over variety registrations.
 *
 * A registration is DATA attached to a cultivar in a jurisdiction, not a page
 * of its own: it renders on the cultivar page it concerns, and in aggregate on
 * the hub. There is no `/variety-registration/[entry]` route, because a page
 * whose whole content is one register row would be thinner than the cultivar
 * page it duplicates — 123 such pages would be 123 thin pages.
 *
 * Authorities are DERIVED here from the linked registries rather than stored on
 * each entry, following `lib/jurisdictions/registry.ts`. They are named for
 * what they actually are: the bodies that operate the REGISTER an entry was
 * read from. The portal aggregates national registers, so the body responsible
 * for, say, the Austrian national list is not established by reading the
 * portal, and this layer does not pretend otherwise.
 */
import { REGISTRIES } from '@/data/registries';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { VARIETY_REGISTRATIONS } from '@/data/varieties';
import {
  CURRENT_VARIETY_REGISTRATION_STATUSES,
  INSTRUMENT_KIND,
  type InstrumentKind,
  type RegistrationInstrument,
  type VarietyRegistrationEntry,
} from '@/types/variety';
import { REGISTER_CONTRACTS } from './registers';

export { VARIETY_REGISTRATIONS };

export const VARIETY_REGISTRATION_HUB_PATH = '/variety-registration';

/** True when the register still lists the entry. Never assume from presence. */
export function isCurrent(entry: VarietyRegistrationEntry): boolean {
  return CURRENT_VARIETY_REGISTRATION_STATUSES.includes(entry.status);
}

const byJurisdiction = (
  a: VarietyRegistrationEntry,
  b: VarietyRegistrationEntry,
) =>
  a.countryOrOrganisation.localeCompare(b.countryOrOrganisation) ||
  (a.registerEntryId ?? a.id).localeCompare(b.registerEntryId ?? b.id);

/** Every recorded registration for one cultivar, current and historical. */
export function registrationsForCultivar(
  cultivarRef: string,
): VarietyRegistrationEntry[] {
  return VARIETY_REGISTRATIONS.filter(
    (r) => r.cultivarRef === cultivarRef,
  ).sort(byJurisdiction);
}

/** Cultivars with at least one recorded registration. */
export function cultivarsWithRegistrations(): string[] {
  return [...new Set(VARIETY_REGISTRATIONS.map((r) => r.cultivarRef))].sort();
}

/**
 * Entries grouped by instrument, because a national list entry and a plant
 * breeder's right are different legal facts and must never be summed.
 */
export function registrationsByInstrument(): Map<
  RegistrationInstrument,
  VarietyRegistrationEntry[]
> {
  const out = new Map<RegistrationInstrument, VarietyRegistrationEntry[]>();
  for (const r of VARIETY_REGISTRATIONS) {
    out.set(r.instrument, [...(out.get(r.instrument) ?? []), r]);
  }
  return out;
}

/** Registers present in the corpus, so no empty grouping is ever rendered. */
export function presentJurisdictions(): string[] {
  return [
    ...new Set(VARIETY_REGISTRATIONS.map((r) => r.countryOrOrganisation)),
  ].sort();
}

/**
 * Species present in the corpus, keyed by the CULTIVAR's botanical taxon.
 *
 * Grouping by what the register printed would scatter one species across
 * several groups: the United Kingdom writes `SOLANUM LYCOPERSICUM L. VAR.
 * LYCOPERSICUM` in capitals, the EU portal writes `Solanum lycopersicum L.`,
 * Canada writes `Potato`, and the United States still writes `Lycopersicon
 * esculentum Mill.` A reader looking for tomatoes wants one group, and the
 * corpus taxon is the thing every entry has been PROVEN to match.
 */
export function presentSpecies(): { taxon: string; cultivars: string[] }[] {
  const out = new Map<string, Set<string>>();
  for (const r of VARIETY_REGISTRATIONS) {
    const cultivar = PUBLISHED_CONTENT.find(
      (c) => c.contentType === 'cultivar' && c.slug === r.cultivarRef,
    ) as { botanicalTaxon?: string } | undefined;
    const taxon = cultivar?.botanicalTaxon ?? 'Unresolved';
    out.set(taxon, (out.get(taxon) ?? new Set()).add(r.cultivarRef));
  }
  return [...out]
    .map(([taxon, cultivars]) => ({ taxon, cultivars: [...cultivars].sort() }))
    .sort((a, b) => a.taxon.localeCompare(b.taxon));
}

/**
 * Entries grouped by what an instrument fundamentally IS. Permission to market
 * and ownership of a variety are different facts, and a page that totals them
 * tells a reader a variety is "registered in 12 places" when four of those are
 * patents-in-all-but-name.
 */
export function registrationsByKind(): Map<
  InstrumentKind,
  VarietyRegistrationEntry[]
> {
  const out = new Map<InstrumentKind, VarietyRegistrationEntry[]>();
  for (const r of VARIETY_REGISTRATIONS) {
    const kind = INSTRUMENT_KIND[r.instrument];
    out.set(kind, [...(out.get(kind) ?? []), r]);
  }
  return out;
}

/** Registers that actually feed entries, with their counts. */
export function presentRegisters(): {
  id: string;
  registerName: string;
  countryOrOrganisation: string;
  entries: VarietyRegistrationEntry[];
}[] {
  return REGISTER_CONTRACTS.map((c) => ({
    id: c.id,
    registerName: c.registerName,
    countryOrOrganisation: c.countryOrOrganisation,
    entries: VARIETY_REGISTRATIONS.filter((r) => r.registerId === c.id),
  })).filter((r) => r.entries.length > 0);
}

/**
 * Authorities that operate the REGISTERS this entry was read from — not the
 * authority that granted it, which the portal does not publish. Empty when no
 * linked registry names one: an honest gap, never a guess.
 */
export function registerAuthoritiesFor(
  entry: VarietyRegistrationEntry,
): string[] {
  const ids = new Set<string>();
  for (const registryId of entry.relatedRegistryIds) {
    const registry = REGISTRIES.find((r) => r.id === registryId);
    for (const a of registry?.responsibleAuthorityIds ?? []) ids.add(a);
  }
  return [...ids].sort();
}
