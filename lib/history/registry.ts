/**
 * Query layer over change events.
 *
 * Events are derived on demand from corpus state, so nothing here can disagree
 * with what a page says is true now. Grouping is by jurisdiction and instrument
 * because that is what a history IS: a cultivar does not have "a history", it
 * has a history in Ireland under a national listing and another in the United
 * States under a certificate, and they are unrelated.
 */
import {
  allChangeEvents,
  authorityEvents,
  varietyRegistrationEvents,
} from './derive';
import type {
  AgriculturalChangeEvent,
  ChangeEntityType,
} from '@/types/history';

export const CHANGE_HUB_PATH = '/agricultural-changes';

let cache: AgriculturalChangeEvent[] | null = null;
export function changeEvents(): AgriculturalChangeEvent[] {
  cache ??= allChangeEvents();
  return cache;
}

/** Newest first, by whatever date the event actually has. */
const byRecency = (a: AgriculturalChangeEvent, b: AgriculturalChangeEvent) =>
  (b.occurredAt ?? b.detectedAt).localeCompare(a.occurredAt ?? a.detectedAt) ||
  a.id.localeCompare(b.id);

export function eventsForEntity(
  entityType: ChangeEntityType,
  entityId: string,
): AgriculturalChangeEvent[] {
  return changeEvents()
    .filter((e) => e.entityType === entityType && e.entityId === entityId)
    .sort(byRecency);
}

/**
 * One entity's history, split by the things that must never be combined.
 *
 * The key is instrument first, then jurisdiction: a Community right and an
 * Irish national listing are different legal facts before they are different
 * places.
 */
export function historyGroups(events: AgriculturalChangeEvent[]): {
  instrument?: string;
  jurisdictionName: string;
  events: AgriculturalChangeEvent[];
}[] {
  const map = new Map<string, AgriculturalChangeEvent[]>();
  for (const e of events) {
    const k = `${e.instrument ?? ''}|${e.jurisdictionName}`;
    map.set(k, [...(map.get(k) ?? []), e]);
  }
  return [...map.entries()]
    .map(([k, evs]) => {
      const [instrument, jurisdictionName] = k.split('|') as [string, string];
      return {
        instrument: instrument || undefined,
        jurisdictionName,
        events: evs.sort(byRecency),
      };
    })
    .sort(
      (a, b) =>
        (a.instrument ?? '').localeCompare(b.instrument ?? '') ||
        a.jurisdictionName.localeCompare(b.jurisdictionName),
    );
}

export function eventsByType(): Map<
  ChangeEntityType,
  AgriculturalChangeEvent[]
> {
  const out = new Map<ChangeEntityType, AgriculturalChangeEvent[]>();
  for (const e of changeEvents())
    out.set(e.entityType, [...(out.get(e.entityType) ?? []), e]);
  return out;
}

/** Events whose date the SOURCE states, by the year the source states. */
export function officiallyDatedByYear(): { year: string; count: number }[] {
  const m = new Map<string, number>();
  for (const e of changeEvents()) {
    if (!e.occurredAt) continue;
    const y = e.occurredAt.slice(0, 4);
    m.set(y, (m.get(y) ?? 0) + 1);
  }
  return [...m]
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => b.year.localeCompare(a.year));
}

export function byJurisdiction(): {
  jurisdictionName: string;
  count: number;
}[] {
  const m = new Map<string, number>();
  for (const e of changeEvents())
    m.set(e.jurisdictionName, (m.get(e.jurisdictionName) ?? 0) + 1);
  return [...m]
    .map(([jurisdictionName, count]) => ({ jurisdictionName, count }))
    .sort((a, b) => b.count - a.count);
}

/** The events small enough in number to show individually, in full. */
export const namedEvents = () => [
  ...authorityEvents(),
  ...varietyRegistrationEvents(),
];

export const officiallyDated = () =>
  changeEvents().filter((e) => e.provenance === 'source-dated');
export const detectionOnly = () =>
  changeEvents().filter((e) => e.provenance !== 'source-dated');
