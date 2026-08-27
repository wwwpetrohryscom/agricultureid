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
import { VARIETY_REGISTRATIONS } from '@/data/varieties';
import {
  CURRENT_VARIETY_REGISTRATION_STATUSES,
  type RegistrationInstrument,
  type VarietyRegistrationEntry,
} from '@/types/variety';

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
  a.registerUuid.localeCompare(b.registerUuid);

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

/** Species present in the corpus, keyed by the register's own UPOV code. */
export function presentSpecies(): { code: string; name: string }[] {
  const out = new Map<string, string>();
  for (const r of VARIETY_REGISTRATIONS)
    out.set(r.upovSpeciesCode, r.upovSpeciesName);
  return [...out]
    .map(([code, name]) => ({ code, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
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
