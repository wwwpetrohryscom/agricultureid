/**
 * Hub membership, derived from the corpus rather than maintained beside it.
 *
 * Nothing here holds a list of members. A family hub's members are every crop
 * identity whose verified family matches; a genus hub's are every identity in
 * that genus; a crop-group hub's are every identity carrying that group. If a
 * crop is reclassified, the hub follows, because there is no second copy to
 * drift.
 */
import { CROP_IDENTITIES } from '@/lib/crops/identity';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { CROP_HUBS } from '@/data/crop-hubs';
import type { CropHub, HubKind } from '@/types/crop-hubs';
import type { CropIdentity } from '@/types/crop-identity';

export const HUB_BASE = '/crops';
export const FAMILY_HUB_BASE = `${HUB_BASE}/families`;
export const GENUS_HUB_BASE = `${HUB_BASE}/genera`;
export const GROUP_HUB_BASE = `${HUB_BASE}/groups`;

export function hubPath(hub: CropHub): string {
  switch (hub.kind) {
    case 'BOTANICAL_FAMILY_HUB':
      return `${FAMILY_HUB_BASE}/${hub.slug}`;
    case 'BOTANICAL_GENUS_HUB':
      return `${GENUS_HUB_BASE}/${hub.slug}`;
    case 'AGRICULTURAL_CROP_GROUP_HUB':
      return `${GROUP_HUB_BASE}/${hub.slug}`;
  }
}

const publishedSlugs = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);

/** Every identity a hub covers, derived. Never a stored list. */
export function membersOf(hub: {
  kind: HubKind;
  memberKey: string;
}): CropIdentity[] {
  const key = hub.memberKey;
  const match =
    hub.kind === 'BOTANICAL_FAMILY_HUB'
      ? (c: CropIdentity) => c.family === key
      : hub.kind === 'BOTANICAL_GENUS_HUB'
        ? (c: CropIdentity) => c.genus.replace(/×/g, '').trim() === key
        : (c: CropIdentity) =>
            (c.cropGroups as readonly string[]).includes(key);
  return CROP_IDENTITIES.filter(match).sort((a, b) =>
    a.primaryCommonName.localeCompare(b.primaryCommonName),
  );
}

export interface HubMembership {
  published: CropIdentity[];
  taxaOnly: CropIdentity[];
  total: number;
  /** Distinct genera represented — a family with one genus is a genus hub. */
  genera: string[];
  families: string[];
}

export function membershipOf(hub: {
  kind: HubKind;
  memberKey: string;
}): HubMembership {
  const all = membersOf(hub);
  return {
    published: all.filter((c) => publishedSlugs.has(c.slug)),
    taxaOnly: all.filter((c) => !publishedSlugs.has(c.slug)),
    total: all.length,
    genera: [...new Set(all.map((c) => c.genus))].sort(),
    families: [...new Set(all.map((c) => c.family))].sort(),
  };
}

export const HUB_BY_SLUG = new Map(CROP_HUBS.map((h) => [h.slug, h]));

export function hubsOfKind(kind: HubKind): CropHub[] {
  return CROP_HUBS.filter((h) => h.kind === kind);
}

/** Hubs a given crop belongs to, for rendering links back from a crop page. */
export function hubsForCrop(slug: string): CropHub[] {
  const id = CROP_IDENTITIES.find((c) => c.slug === slug);
  if (!id) return [];
  return CROP_HUBS.filter((h) =>
    membersOf(h).some((m) => m.slug === id.slug),
  ).sort((a, b) => a.title.localeCompare(b.title));
}
