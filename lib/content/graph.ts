import {
  ALL_CONTENT,
  PUBLISHED_CONTENT,
  refKey,
  resolveRef,
} from '@/lib/content/registry';
import { CONTENT_TYPES, type ContentType } from '@/lib/site';
import { cultivarsForCrop, breedsForLivestock } from '@/lib/content/registry';
import { declaredRefs } from '@/lib/content/graph-coverage';
import { isRefField } from '@/lib/content/ref-fields';
import type { AnyContent, ContentRef } from '@/types/content';

/**
 * Every outgoing reference an item declares, for navigation and reachability.
 *
 * ## This used to be a second, divergent copy of the same switch
 *
 * It carried its own `switch (item.contentType)` over seven types, and a
 * `default` case asserting that "newer content types express all their
 * relationships through relatedTopics and connections" — false since Phase 5A,
 * and catastrophically so by 5D, where `logistics-concept` really has 784 typed
 * edges and this function reported none.
 *
 * Its docstring claimed to be "the single place that knows which fields hold
 * references, so validation and graph traversal stay in sync". It was not: the
 * semantic graph had its own discovery, so the two modules gave different
 * answers about the same content, and the SEO audit's link model was built on
 * the stale one.
 *
 * It now shares the ONE discovery path — structural walk, declared mapping (see
 * lib/content/ref-fields.ts) — so there is nothing left to keep in sync.
 *
 * The one thing it adds over the semantic graph is parent→child navigation:
 * a crop page renders its cultivars (ParentSubEntities), so those are genuine
 * navigation edges even though the child declares the parent, not the reverse.
 */
export function outgoingRefs(item: AnyContent): ContentRef[] {
  const refs: ContentRef[] = declaredRefs(item)
    .filter((d) => isRefField(d.field))
    .map((d) => d.ref);

  // Parent → child, which no field declares: the child names its parent, and
  // the parent page renders the list.
  if (item.contentType === 'crop')
    refs.push(...childRefs('cultivar', item.slug));
  if (item.contentType === 'livestock')
    refs.push(...childRefs('breed', item.slug));

  // De-duplicate: a target named by several fields is one navigation edge.
  const seen = new Set<string>();
  return refs.filter((r) => {
    const k = refKey(r.type, r.slug);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

/**
 * Child sub-entity refs (cultivars of a crop / breeds of a livestock species).
 *
 * Delegates to the SAME registry functions the semantic graph and the
 * ParentSubEntities panel use. There is exactly one definition of "the cultivars
 * of a crop"; nav, graph, and page cannot disagree because they read the same
 * source (§4).
 */
function childRefs(
  childType: 'cultivar' | 'breed',
  parentSlug: string,
): ContentRef[] {
  if (childType === 'cultivar')
    return cultivarsForCrop(parentSlug).map((c) => ({
      type: 'cultivar' as const,
      slug: c.slug,
    }));
  return breedsForLivestock(parentSlug).map((b) => ({
    type: 'breed' as const,
    slug: b.slug,
  }));
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
