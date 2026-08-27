/**
 * Query layer over biosecurity status.
 *
 * Status is DATA attached to an organism in a jurisdiction, not a page of its
 * own: it renders on the pest or disease page it concerns. There is no
 * `/biosecurity/[organism]` route, because a page whose whole content is "this
 * organism is on a list" would be thinner than the pest page it duplicates.
 */
import { BIOSECURITY_STATUS } from '@/data/biosecurity';
import type { BiosecurityStatusEntry } from '@/types/biosecurity';

export { BIOSECURITY_STATUS };

export const BIOSECURITY_HUB_PATH = '/agricultural-biosecurity';

/** Every recorded status for one organism, across jurisdictions. */
export function statusForOrganism(
  organismRef: string,
): BiosecurityStatusEntry[] {
  return BIOSECURITY_STATUS.filter((s) => s.organismRef === organismRef).sort(
    (a, b) => a.officialListName.localeCompare(b.officialListName),
  );
}

/** Organisms with any recorded regulatory status. */
export function organismsWithStatus(): string[] {
  return [...new Set(BIOSECURITY_STATUS.map((s) => s.organismRef))].sort();
}

/** Entries grouped by the official list they come from. */
export function statusByList(): Map<string, BiosecurityStatusEntry[]> {
  const out = new Map<string, BiosecurityStatusEntry[]>();
  for (const s of BIOSECURITY_STATUS) {
    out.set(s.officialListName, [...(out.get(s.officialListName) ?? []), s]);
  }
  return out;
}

/** Lists present in the corpus, so no empty grouping is ever rendered. */
export function presentLists(): string[] {
  return [...new Set(BIOSECURITY_STATUS.map((s) => s.officialListName))].sort();
}
