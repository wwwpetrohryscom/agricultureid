/**
 * Every way a crop page can come to exist after a wave decided not to write it.
 *
 * Five layers record decisions about whether a crop should have an article, and
 * each of them fails when a page appears that its own record says should not be
 * there. That failure is correct: a decline and a page really are a
 * contradiction, and the fix is never to delete the decline, because the
 * decline is usually what caused the work that lifted it. Wave 39 stopped
 * mandarin for want of a parent concept and Wave 43 built the concept; Wave 36
 * judged nine taxa sufficiently served by a data record and Wave 44 found
 * enough FAO evidence and source depth to write them up.
 *
 * So the contradiction has to be ACCOUNTED FOR rather than avoided, and the
 * accounting lives here, enumerated by mechanism, in one place. A wave that
 * publishes by some new route fails every one of those validators until it
 * adds its route to this map — which is the point. The alternative, each
 * validator quietly allowing "a page exists anyway", is how a corpus stops
 * being able to tell a decision from a drift.
 */
import { CROP_SCOPE_REVIEWS } from '@/data/crop-scope-review';
import { FAO_ORPHAN_RESEARCH } from '@/data/fao-orphans';

export type PromotionMechanism =
  /** A parent-scope review that lifted a block on publishing a child. */
  | 'scope-review'
  /** FAO orphan research that found the evidence for an article. */
  | 'fao-orphan-research';

/** Crop slug → the mechanism whose record accounts for the page. */
export const PROMOTED_BY_LATER_WAVE: ReadonlyMap<string, PromotionMechanism> =
  (() => {
    const m = new Map<string, PromotionMechanism>();
    for (const r of CROP_SCOPE_REVIEWS)
      if (r.outcome === 'PROMOTE_CHILD_PROFILE') m.set(r.slug, 'scope-review');
    for (const o of FAO_ORPHAN_RESEARCH)
      if (o.outcome === 'PROMOTE_FULL_PROFILE' && o.resolvesTo?.slug)
        m.set(o.resolvesTo.slug, 'fao-orphan-research');
    return m;
  })();

export function promotedByLaterWave(slug: string): boolean {
  return PROMOTED_BY_LATER_WAVE.has(slug);
}
