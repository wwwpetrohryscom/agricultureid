import { describe, expect, it } from 'vitest';
import {
  computeReachable,
  outgoingRefs,
  relatedGroupsFor,
} from '@/lib/content/graph';
import {
  PUBLISHED_CONTENT,
  getContent,
  refKey,
  resolveRef,
} from '@/lib/content/registry';

describe('knowledge graph — relationship resolution', () => {
  it('resolves every outgoing relationship reference', () => {
    for (const item of PUBLISHED_CONTENT) {
      for (const ref of outgoingRefs(item)) {
        expect(
          resolveRef(ref),
          `${item.slug} → ${refKey(ref.type, ref.slug)}`,
        ).toBeDefined();
      }
    }
  });

  it('leaves no published page orphaned (all reachable from a hub)', () => {
    const reachable = computeReachable();
    for (const item of PUBLISHED_CONTENT) {
      expect(reachable.has(refKey(item.contentType, item.slug))).toBe(true);
    }
  });

  it('generates reciprocal relationships', () => {
    // Potato lists late-blight as a common disease; the disease page should
    // surface potato among its related crops via reciprocity.
    const lateBlight = getContent('plant-disease', 'late-blight');
    expect(lateBlight).toBeDefined();
    const related = relatedGroupsFor(lateBlight!);
    const crops = related.find((g) => g.type === 'crop');
    expect(crops?.items.some((c) => c.slug === 'potato')).toBe(true);
  });

  it('never includes a page in its own related set', () => {
    for (const item of PUBLISHED_CONTENT) {
      const related = relatedGroupsFor(item);
      for (const group of related) {
        expect(group.items.some((i) => i.id === item.id)).toBe(false);
      }
    }
  });
});
