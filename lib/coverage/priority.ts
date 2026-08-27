/**
 * Which gaps are worth working on next. Deterministic, and not a score.
 *
 * A number here would be false precision: the inputs are three yes/no questions
 * and a record count, and no weighting of those produces a meaningful ordering
 * between, say, 71 and 68. So a gap falls into one of three tiers, each of
 * which answers a question that is either true or false, and the report says
 * which question put it there.
 *
 *   ready       an official source is known and nothing is blocking it. This is
 *               work waiting to be done.
 *   blocked     an official source is known and something stops it being read.
 *               Doing this needs a different approach, not more effort.
 *   unexamined  nobody has looked for a source. Cheapest to change and the
 *               least informative to leave.
 *
 * Nothing here reads search volume or invents demand. A gap matters because a
 * source exists and the corpus does not have it.
 */
import type { CoverageCell, GapTier } from '@/types/coverage';
import { REGISTRIES } from '@/data/registries';
import { RESEARCH_LEDGER } from '@/data/coverage/research-ledger';

/** Registries the corpus already knows about, by country. */
const KNOWN_SOURCE = new Set(
  REGISTRIES.filter((r) => r.countryCode).map((r) => r.countryCode!),
);
const BLOCKED = new Set(
  RESEARCH_LEDGER.filter((r) => r.jurisdiction !== 'GLOBAL').map(
    (r) => `${r.layer}|${r.jurisdiction}`,
  ),
);

export interface Gap {
  cell: CoverageCell;
  tier: GapTier;
  because: string;
}

export function gapsFrom(cells: CoverageCell[]): Gap[] {
  const out: Gap[] = [];
  for (const cell of cells) {
    if (cell.status === 'verified' || cell.status === 'notApplicable') continue;
    const blocked = BLOCKED.has(`${cell.layer}|${cell.jurisdiction}`);
    const known = KNOWN_SOURCE.has(cell.jurisdiction);
    const tier: GapTier = blocked
      ? 'blocked'
      : known
        ? 'ready'
        : 'unexamined';
    out.push({
      cell,
      tier,
      because: blocked
        ? 'An official source was found and something stops it being read.'
        : known
          ? 'AgricultureID already records an official system for this country, so there is somewhere to start.'
          : 'No official system is recorded for this country in this layer, so the first step is looking for one.',
    });
  }
  // Stable and deterministic: tier, then layer, then jurisdiction.
  const order: Record<GapTier, number> = { ready: 0, blocked: 1, unexamined: 2 };
  return out.sort(
    (a, b) =>
      order[a.tier] - order[b.tier] ||
      a.cell.layer.localeCompare(b.cell.layer) ||
      a.cell.jurisdiction.localeCompare(b.cell.jurisdiction),
  );
}
