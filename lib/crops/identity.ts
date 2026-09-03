/**
 * Queries over the verified crop identity layer.
 *
 * This is the only module that reads `data/crop-identity` directly. It holds no
 * prose and imports no content: an identity is a fact about a plant, and it must
 * be usable from a listing, a validator or a report without dragging the
 * encyclopedia in behind it.
 */
import { CROP_IDENTITIES } from '@/data/crop-identity';
import { CROP_TAXA_PATH } from '@/lib/crops/paths';
import type {
  CropGroup,
  CropIdentity,
  HarvestedPart,
  AgriculturalUse,
} from '@/types/crop-identity';

export { CROP_IDENTITIES };

export const IDENTITY_BY_SLUG = new Map(
  CROP_IDENTITIES.map((c) => [c.slug, c]),
);

/** The identity for a published crop page, where one has been verified. */
export function identityForCrop(slug: string): CropIdentity | undefined {
  const c = IDENTITY_BY_SLUG.get(slug);
  return c?.profileDepth === 'full-profile' ? c : undefined;
}

/** Verified taxa with no page of their own. */
export function dataOnlyIdentities(): CropIdentity[] {
  return CROP_IDENTITIES.filter((c) => c.profileDepth === 'data-only');
}

export function identitiesInGroup(group: CropGroup): CropIdentity[] {
  return CROP_IDENTITIES.filter((c) => c.cropGroups.includes(group)).sort(
    (a, b) => a.primaryCommonName.localeCompare(b.primaryCommonName),
  );
}

export function identitiesInFamily(family: string): CropIdentity[] {
  return CROP_IDENTITIES.filter((c) => c.family === family);
}

export function identitiesWithPart(part: HarvestedPart): CropIdentity[] {
  return CROP_IDENTITIES.filter((c) => c.harvestedParts.includes(part));
}

export function identitiesWithUse(use: AgriculturalUse): CropIdentity[] {
  return CROP_IDENTITIES.filter((c) => c.agriculturalUses.includes(use));
}

/** Families represented, with how many identities sit in each. */
export function familyCounts(): { family: string; count: number }[] {
  const m = new Map<string, number>();
  for (const c of CROP_IDENTITIES) m.set(c.family, (m.get(c.family) ?? 0) + 1);
  return [...m]
    .map(([family, count]) => ({ family, count }))
    .sort((a, b) => b.count - a.count || a.family.localeCompare(b.family));
}

export function groupCounts(): { group: CropGroup; count: number }[] {
  const m = new Map<CropGroup, number>();
  for (const c of CROP_IDENTITIES)
    for (const g of c.cropGroups) m.set(g, (m.get(g) ?? 0) + 1);
  return [...m]
    .map(([group, count]) => ({ group, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Identities whose two authorities did not agree, or where only one spoke.
 *
 * Surfaced as a first-class query because the disagreements are a finding, not
 * a backlog: POWO sinks the cultivated Brassica and Citrus forms into broader
 * species while WFO keeps them apart, and a reader comparing this corpus with
 * either source needs to know which reading they are looking at.
 */
export function contestedIdentities(): CropIdentity[] {
  return CROP_IDENTITIES.filter((c) => c.agreement !== 'agreed');
}

/** Genera represented. */
export function genusCount(): number {
  return new Set(CROP_IDENTITIES.map((c) => c.genus)).size;
}

/**
 * Where a concept's constituent taxon should send a reader.
 *
 * A concept scope table names taxa the corpus holds. Holding a taxon and
 * publishing a page about it are different things, and until Wave 43 the table
 * linked every held constituent to `/crops/<slug>` regardless — thirty-seven
 * links across sixteen concept pages pointed at pages that do not exist,
 * because the slug resolved in the identity layer and nobody asked whether it
 * resolved to a URL. That is the technical-resolution trap in one line.
 *
 * A data-only taxon is not a dead end: it is listed in the verified-taxa
 * register, grouped by crop group, so the register anchor is a real
 * destination and the reader is told which kind of destination they are
 * getting.
 */
export type ConstituentDestination =
  | { kind: 'page'; href: string }
  | { kind: 'register'; href: string }
  | { kind: 'unheld' };

export function constituentDestination(
  identitySlug: string | undefined,
): ConstituentDestination {
  if (!identitySlug) return { kind: 'unheld' };
  const id = IDENTITY_BY_SLUG.get(identitySlug);
  if (!id) return { kind: 'unheld' };
  if (id.profileDepth === 'full-profile' && id.cropPageSlug)
    return { kind: 'page', href: `/crops/${id.cropPageSlug}` };
  return {
    kind: 'register',
    href: `${CROP_TAXA_PATH}#${id.cropGroups[0] ?? ''}`.replace(/#$/, ''),
  };
}
