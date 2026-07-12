import {
  ALL_CONTENT,
  PUBLISHED_CONTENT,
  refKey,
  resolveRef,
} from '@/lib/content/registry';
import { CONTENT_TYPES, type ContentType } from '@/lib/site';
import type { AnyContent, ContentRef } from '@/types/content';

/**
 * Extract every outgoing typed reference declared by a content item, across
 * both the generic `relatedTopics` field and the domain-specific relationship
 * fields. This is the single place that knows which fields hold references, so
 * validation and graph traversal stay in sync.
 */
export function outgoingRefs(item: AnyContent): ContentRef[] {
  const refs: ContentRef[] = [
    ...(item.relatedTopics ?? []),
    ...(item.connections ?? []),
  ];
  switch (item.contentType) {
    case 'crop':
      refs.push(
        ...item.commonDiseases,
        ...item.commonPests,
        ...item.suitableSoils,
        // Parent → child: the crop page enumerates its notable cultivars
        // (ParentSubEntities panel), so those are genuine navigation edges.
        ...childRefs('cultivar', item.slug),
      );
      break;
    case 'soil':
      refs.push(...item.suitedCrops);
      break;
    case 'plant-disease':
      refs.push(...item.hostCrops);
      break;
    case 'pest':
      refs.push(...item.hostCrops);
      break;
    case 'livestock':
      // Parent → child: the livestock page enumerates its notable breeds.
      refs.push(...childRefs('breed', item.slug));
      break;
    case 'cultivar':
      refs.push(item.parentCrop);
      break;
    case 'breed':
      refs.push(item.parentLivestock);
      break;
    default:
      // Newer content types (nutrient, fertilizer, soil-topic, machinery,
      // climate, farming-system, irrigation-method) and livestock express all
      // their relationships through `relatedTopics` and `connections`.
      break;
  }
  return refs;
}

/**
 * Child sub-entity refs (cultivars of a crop / breeds of a livestock species),
 * computed from parent links. Modeled as parent→child navigation edges because
 * the parent page renders them (see ParentSubEntities).
 */
function childRefs(
  childType: 'cultivar' | 'breed',
  parentSlug: string,
): ContentRef[] {
  const out: ContentRef[] = [];
  for (const c of ALL_CONTENT) {
    if (c.editorialStatus !== 'published') continue;
    if (c.contentType === 'cultivar' && childType === 'cultivar') {
      if (c.parentCrop.slug === parentSlug)
        out.push({ type: 'cultivar', slug: c.slug });
    } else if (c.contentType === 'breed' && childType === 'breed') {
      if (c.parentLivestock.slug === parentSlug)
        out.push({ type: 'breed', slug: c.slug });
    }
  }
  return out;
}

/** Reverse index: refKey(target) → items that reference it. */
const INBOUND: Map<string, AnyContent[]> = (() => {
  const map = new Map<string, AnyContent[]>();
  for (const item of ALL_CONTENT) {
    for (const ref of outgoingRefs(item)) {
      const key = refKey(ref.type, ref.slug);
      const list = map.get(key) ?? [];
      list.push(item);
      map.set(key, list);
    }
  }
  return map;
})();

/** Published items that reference the given item (reciprocal links). */
export function inboundRefs(item: AnyContent): AnyContent[] {
  return (INBOUND.get(refKey(item.contentType, item.slug)) ?? []).filter(
    (c) => c.editorialStatus === 'published',
  );
}

export interface RelatedGroup {
  type: ContentType;
  items: AnyContent[];
}

/**
 * Related published pages for display, grouped by content type. Combines
 * explicit outgoing references with reciprocal (inbound) references so that,
 * for example, a disease page shows every crop that lists it — even if the
 * disease did not enumerate that crop itself.
 */
export function relatedGroupsFor(item: AnyContent): RelatedGroup[] {
  const selfKey = refKey(item.contentType, item.slug);
  const seen = new Set<string>([selfKey]);
  const collected: AnyContent[] = [];

  const consider = (candidate: AnyContent | undefined) => {
    if (!candidate) return;
    const key = refKey(candidate.contentType, candidate.slug);
    if (seen.has(key)) return;
    if (candidate.editorialStatus !== 'published') return;
    seen.add(key);
    collected.push(candidate);
  };

  for (const ref of outgoingRefs(item)) consider(resolveRef(ref));
  for (const inbound of inboundRefs(item)) consider(inbound);

  const groups: RelatedGroup[] = [];
  for (const type of CONTENT_TYPES) {
    // Cultivars and breeds are surfaced through the dedicated ParentSubEntities
    // panel, not the generic related-content groups (avoids double-listing).
    if (type === 'cultivar' || type === 'breed') continue;
    const items = collected
      .filter((c) => c.contentType === type)
      .sort((a, b) => a.title.localeCompare(b.title));
    if (items.length > 0) groups.push({ type, items });
  }
  return groups;
}

/**
 * Reachability model. Each content type has a hub index page that enumerates
 * every published item of that type, and the homepage links to every hub. We
 * model those enumerations as edges from a virtual hub node so reachability
 * reflects the real navigation graph.
 */
export function computeReachable(): Set<string> {
  const reachable = new Set<string>();
  // Seed: hubs list all published items of their type.
  for (const item of PUBLISHED_CONTENT) {
    reachable.add(refKey(item.contentType, item.slug));
  }
  // Propagate cross-links (already all seeded, but keeps the model explicit
  // and future-proof if hubs ever stop enumerating everything).
  let changed = true;
  while (changed) {
    changed = false;
    for (const item of PUBLISHED_CONTENT) {
      if (!reachable.has(refKey(item.contentType, item.slug))) continue;
      for (const ref of outgoingRefs(item)) {
        const target = resolveRef(ref);
        if (!target || target.editorialStatus !== 'published') continue;
        const key = refKey(target.contentType, target.slug);
        if (!reachable.has(key)) {
          reachable.add(key);
          changed = true;
        }
      }
    }
  }
  return reachable;
}

/** Published items with no inbound cross-links (informational, not fatal). */
export function weaklyLinkedItems(): AnyContent[] {
  return PUBLISHED_CONTENT.filter((item) => inboundRefs(item).length === 0);
}
