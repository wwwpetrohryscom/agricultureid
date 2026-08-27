/**
 * Query layer over indexed extension resources.
 *
 * There is no page per resource. A page whose whole content is a title, a
 * publisher and a link would be thinner than the entry it points at, and 99 of
 * them would be a thin-page farm. Resources render as rows on the hub and as a
 * short list on the entity pages they concern, and the link goes to the
 * publisher — which is where the guidance actually lives and gets revised.
 */
import { EXTENSION_RESOURCES } from '@/data/extension';
import { EXTENSION_INSTITUTIONS } from '@/data/extension/institutions';
import { CANONICAL_JURISDICTIONS } from '@/data/jurisdictions';
import type {
  ExtensionInstitution,
  ExtensionResource,
  ExtensionTopic,
} from '@/types/extension';

export { EXTENSION_RESOURCES, EXTENSION_INSTITUTIONS };

export const EXTENSION_HUB_PATH = '/extension-resources';

const BY_ID = new Map(EXTENSION_INSTITUTIONS.map((i) => [i.id, i]));

export function institutionFor(id: string): ExtensionInstitution | undefined {
  return BY_ID.get(id);
}

/** True when the publisher itself states a date. Never inferred. */
export function isDated(resource: ExtensionResource): boolean {
  return Boolean(resource.publicationDate ?? resource.revisionDate);
}

/** The publisher's own date, whichever kind it gave. */
export function statedDate(resource: ExtensionResource): string | undefined {
  return resource.revisionDate ?? resource.publicationDate;
}

const byTitle = (a: ExtensionResource, b: ExtensionResource) =>
  a.officialTitle.localeCompare(b.officialTitle);

/**
 * Resources that address one corpus entity.
 *
 * Matches the reference arrays only — never a free-text search of titles — so
 * a resource appears on a crop page because it was recorded as addressing that
 * crop, not because the two share a word.
 */
export function resourcesForEntity(slug: string): ExtensionResource[] {
  return EXTENSION_RESOURCES.filter(
    (r) =>
      r.cropRefs.includes(slug) ||
      r.livestockRefs.includes(slug) ||
      r.pestRefs.includes(slug) ||
      r.diseaseRefs.includes(slug) ||
      r.topicRefs.includes(slug),
  ).sort(byTitle);
}

/** Entities with at least one indexed resource. */
export function entitiesWithResources(): string[] {
  return [
    ...new Set(
      EXTENSION_RESOURCES.flatMap((r) => [
        ...r.cropRefs,
        ...r.livestockRefs,
        ...r.pestRefs,
        ...r.diseaseRefs,
        ...r.topicRefs,
      ]),
    ),
  ].sort();
}

export function resourcesForInstitution(id: string): ExtensionResource[] {
  return EXTENSION_RESOURCES.filter((r) => r.institutionId === id).sort(
    byTitle,
  );
}

/** Resources grouped by topic. A resource with three topics appears in three. */
export function resourcesByTopic(): Map<ExtensionTopic, ExtensionResource[]> {
  const out = new Map<ExtensionTopic, ExtensionResource[]>();
  for (const r of EXTENSION_RESOURCES) {
    for (const t of r.topics) {
      out.set(t, [...(out.get(t) ?? []), r]);
    }
  }
  return out;
}

/** Topics that actually occur, so no empty grouping is ever rendered. */
export function presentTopics(): ExtensionTopic[] {
  return [...new Set(EXTENSION_RESOURCES.flatMap((r) => r.topics))].sort();
}

/** Resources grouped by the jurisdiction their publisher serves. */
export function resourcesByJurisdiction(): Map<string, ExtensionResource[]> {
  const out = new Map<string, ExtensionResource[]>();
  for (const r of EXTENSION_RESOURCES) {
    const key = r.jurisdictionId ?? r.countryCode;
    out.set(key, [...(out.get(key) ?? []), r]);
  }
  return out;
}

/**
 * A jurisdiction's human label.
 *
 * Resolved from the canonical jurisdiction registry rather than printed as an
 * ISO code: "Ohio" is what a reader searches for and what the guidance says it
 * was written for, and "US-OH" on a page is an identifier leaking into prose.
 */
export function jurisdictionLabel(key: string): string {
  const canonical = CANONICAL_JURISDICTIONS.find((j) => j.id === key);
  if (canonical) return canonical.name;
  if (key === 'GBR') return 'Great Britain';
  return key;
}

/** Jurisdictions represented, as the institutions define them. */
export function presentJurisdictions(): string[] {
  return [
    ...new Set(
      EXTENSION_INSTITUTIONS.map((i) => i.jurisdictionId ?? i.countryCode),
    ),
  ].sort();
}
