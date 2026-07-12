import { SOURCES } from '@/data/sources';
import type { Source } from '@/types/sources';

/** Map of source id → Source for O(1) lookup. */
export const SOURCE_MAP: ReadonlyMap<string, Source> = new Map(
  SOURCES.map((s) => [s.id, s]),
);

/** Returns the source for an id, or undefined when it does not exist. */
export function getSource(id: string): Source | undefined {
  return SOURCE_MAP.get(id);
}

/** Returns a source, throwing if the id is unknown (use in trusted paths). */
export function requireSource(id: string): Source {
  const source = SOURCE_MAP.get(id);
  if (!source) {
    throw new Error(`Unknown source id: "${id}"`);
  }
  return source;
}

/** All sources sorted by organization then title, for the /sources page. */
export function allSourcesSorted(): Source[] {
  return [...SOURCES].sort(
    (a, b) =>
      a.organization.localeCompare(b.organization) ||
      a.title.localeCompare(b.title),
  );
}

export { SOURCES };
