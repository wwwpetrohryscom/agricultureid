import { readdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import type { CommodityTradeProfile, TradeSnapshot } from '@/types/trade-data';

/**
 * Server-only loader for the immutable FAOSTAT Detailed Trade Matrix snapshot.
 * Read from data/snapshots/ at build time (static generation) — never bundled
 * into client JS. A changed dataset version is a NEW file, so the latest version
 * is selected deterministically and prior versions are never overwritten.
 *
 * Mirrors lib/geo/snapshots.ts: fail soft (a missing or malformed file yields
 * null/empty rather than a build crash; the validator reports it separately).
 */
const SNAP_DIR = join(process.cwd(), 'data', 'snapshots');
const PREFIX = 'faostat__trade-matrix__';

function loadLatest(): TradeSnapshot | null {
  let files: string[] = [];
  try {
    files = readdirSync(SNAP_DIR).filter(
      (f) => f.startsWith(PREFIX) && f.endsWith('.json'),
    );
  } catch {
    return null;
  }
  const snaps: TradeSnapshot[] = [];
  for (const f of files) {
    try {
      const snap = JSON.parse(
        readFileSync(join(SNAP_DIR, f), 'utf8'),
      ) as TradeSnapshot;
      if (snap.snapshotId && Array.isArray(snap.commodities)) snaps.push(snap);
    } catch {
      // ignore malformed file; validator reports it separately
    }
  }
  if (!snaps.length) return null;
  // Highest datasetVersion wins (ISO dates sort lexicographically).
  return snaps.reduce((a, b) => (b.datasetVersion > a.datasetVersion ? b : a));
}

const SNAPSHOT: TradeSnapshot | null = loadLatest();

const BY_SLUG: ReadonlyMap<string, CommodityTradeProfile> = new Map(
  (SNAPSHOT?.commodities ?? []).map((c) => [c.commoditySlug, c]),
);

/** The latest trade snapshot, or null when none is present/parseable. */
export function tradeSnapshot(): TradeSnapshot | null {
  return SNAPSHOT;
}

/**
 * The trade profile for a commodity, or undefined when that commodity has no
 * mapped FAOSTAT trade item. Most commodities have none — undefined means "not
 * mapped", never "no trade".
 */
export function tradeProfileFor(
  commoditySlug: string,
): CommodityTradeProfile | undefined {
  return BY_SLUG.get(commoditySlug);
}

/** Commodity slugs that have a trade profile, sorted. */
export function tradeCommoditySlugs(): string[] {
  return [...BY_SLUG.keys()].sort();
}

/** Snapshot filenames present, newest last (all versions). */
export function tradeSnapshotFiles(): string[] {
  try {
    return readdirSync(SNAP_DIR)
      .filter((f) => f.startsWith(PREFIX) && f.endsWith('.json'))
      .sort();
  } catch {
    return [];
  }
}

/**
 * Recompute the snapshot's checksum from its own contents.
 *
 * The basis is the whole file with the `checksum` key removed, serialised with
 * `JSON.stringify(value, null, 2)` — exactly what
 * scripts/fetch-faostat-trade.mjs hashes, and what the snapshot's own
 * `checksumBasis` field states. Recording a checksum nobody can reproduce is
 * decoration; this makes it an actual integrity check.
 */
export function tradeChecksumValid(snap: TradeSnapshot): boolean {
  const { checksum, ...basis } = snap as TradeSnapshot & {
    checksum: string;
  };
  if (!checksum) return false;
  return (
    createHash('sha256')
      .update(JSON.stringify(basis, null, 2))
      .digest('hex') === checksum
  );
}
