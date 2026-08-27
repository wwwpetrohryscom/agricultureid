/**
 * Deriving coverage from what the corpus actually holds. Pure — no I/O.
 *
 * Nothing here is asserted by hand. A cell's record count is counted from the
 * layer it describes, so a cell cannot claim coverage the corpus does not have,
 * and cannot go stale when the corpus grows. The only hand-written inputs are
 * the research ledger — findings that are not derivable, because "nobody has
 * looked" and "we looked and the register publishes nothing readable" are
 * indistinguishable from a record count of zero.
 */
import {
  COVERAGE_LAYERS,
  PUBLIC_COVERAGE_LABEL,
  type CoverageCell,
  type CoverageLayer,
  type CoverageStatus,
} from '@/types/coverage';
import {
  NOT_APPLICABLE_RULES,
  RESEARCH_LEDGER,
} from '@/data/coverage/research-ledger';
import { TARGET_SETS } from '@/data/coverage/targets';
import { AUTHORITIES } from '@/data/authorities';
import { REGISTRIES } from '@/data/registries';
import { COMPLIANCE_TOPICS } from '@/data/compliance';
import { SUPPORT_PROGRAMS } from '@/data/support';
import { BIOSECURITY_STATUS } from '@/data/biosecurity';
import { VARIETY_REGISTRATIONS } from '@/data/varieties';
import { allAuthorizations } from '@/lib/inputs/registry';
import { allMarketSeries } from '@/lib/markets/registry';
import { EXTENSION_RESOURCES } from '@/data/extension';
import { COUNTRY_PROFILES } from '@/lib/geo/registry';
import { allSoilObservations } from '@/lib/soils/registry';
import { TRADE_REQUIREMENTS } from '@/lib/trade/registry';

type Counter = (iso3: string) => number;

const countBy = <T,>(rows: readonly T[], get: (row: T) => string | undefined) => {
  const m = new Map<string, number>();
  for (const r of rows) {
    const k = get(r);
    if (k) m.set(k, (m.get(k) ?? 0) + 1);
  }
  return (iso3: string) => m.get(iso3) ?? 0;
};

/** One counter per layer, reading that layer's own records. */
export function layerCounters(): Record<CoverageLayer, Counter> {
  return {
    authorities: countBy(AUTHORITIES, (a) => a.countryCode),
    registries: countBy(REGISTRIES, (r) => r.countryCode),
    regulations: countBy(
      COMPLIANCE_TOPICS as readonly { countryCode?: string }[],
      (t) => t.countryCode,
    ),
    support: countBy(
      SUPPORT_PROGRAMS as readonly { countryCode?: string }[],
      (p) => p.countryCode,
    ),
    biosecurity: countBy(
      BIOSECURITY_STATUS as readonly { countryCode?: string }[],
      (b) => b.countryCode,
    ),
    varieties: countBy(VARIETY_REGISTRATIONS, (v) => v.countryCode),
    inputs: countBy(allAuthorizations(), (a) => a.countryCode),
    extension: countBy(
      EXTENSION_RESOURCES as readonly { countryCode?: string }[],
      (e) => e.countryCode,
    ),
    markets: countBy(allMarketSeries(), (s) => s.countryCode),
    soils: countBy(allSoilObservations(), (o) => o.countryCode),
    trade: countBy(TRADE_REQUIREMENTS, (r) => r.jurisdictionCountryCode),
  };
}

/**
 * Subnational completeness for the one layer that has it, measured against the
 * independent list rather than against the corpus.
 *
 * Wave 4C recorded agricultural authorities for 31 of the 50 US states, 8 of
 * 13 Canadian subdivisions and 6 of 8 Australian ones. Reporting the United
 * States as simply "covered" for authorities would be true of the federal body
 * and misleading about everything below it, so a country whose subdivisions are
 * incompletely covered is `partial` — and the shortfall is counted against the
 * states themselves, not against the list of states the corpus happens to hold.
 */
const SUBNATIONAL_TARGETS: Record<string, string> = {
  USA: 'us-states',
  CAN: 'ca-subdivisions',
  AUS: 'au-subdivisions',
};

export function subnationalAuthorityCoverage(iso3: string) {
  const targetId = SUBNATIONAL_TARGETS[iso3];
  if (!targetId) return undefined;
  const target = TARGET_SETS.find((t) => t.id === targetId);
  if (!target) return undefined;
  const held = new Set(
    AUTHORITIES.filter(
      (a) => a.countryCode === iso3 && a.jurisdictionId,
    ).map((a) => a.jurisdictionId!.split('-').slice(1).join('-')),
  );
  const covered = target.members.filter((m) => held.has(m));
  return {
    targetSetId: target.id,
    label: target.label,
    covered,
    missing: target.members.filter((m) => !held.has(m)),
    total: target.members.length,
  };
}

const LEDGER = new Map(
  RESEARCH_LEDGER.map((r) => [`${r.layer}|${r.jurisdiction}`, r]),
);

/**
 * A cell's status.
 *
 * Order matters. Records win over everything: a layer with data is covered
 * whatever anyone wrote down about it. Below that, a research finding beats
 * silence, and silence is `notResearched` — which is not a judgement, only the
 * absence of one.
 */
function statusFor(count: number, layer: CoverageLayer, iso3: string): CoverageStatus {
  if (count > 0) {
    // Covered nationally is not covered throughout. Where an independent list
    // says how many subdivisions there are, a country that holds records for
    // some of them is partly covered, not covered.
    if (layer === 'authorities') {
      const sub = subnationalAuthorityCoverage(iso3);
      if (sub && sub.missing.length > 0) return 'partial';
    }
    return 'verified';
  }
  // Only a finding about THIS jurisdiction may decide this cell. A finding
  // about a global aggregator — UPOV's database covers sixty members at once —
  // says nothing about whether any one country's own register was looked for,
  // and letting it fall through would report twenty-five countries as
  // researched on the strength of one robots.txt.
  return LEDGER.get(`${layer}|${iso3}`)?.status ?? 'notResearched';
}

export function countryCoverage(iso3: string, name: string): CoverageCell[] {
  const counters = layerCounters();
  return COVERAGE_LAYERS.map((layer) => {
    const recordCount = counters[layer](iso3);
    const status = statusFor(recordCount, layer, iso3);
    const found = LEDGER.get(`${layer}|${iso3}`);
    return {
      layer,
      jurisdiction: iso3,
      jurisdictionName: name,
      status,
      recordCount,
      publicLabel: PUBLIC_COVERAGE_LABEL[status],
      evidence:
        recordCount === 0 && found
          ? {
              note: found.note,
              sourceIds: found.sourceIds,
              verifiedAt: found.verifiedAt,
              internalNote: found.internalNote,
            }
          : undefined,
    };
  });
}

/** Every profiled country, in the corpus's own order. */
export function allCountryCoverage(): CoverageCell[] {
  return COUNTRY_PROFILES.flatMap((c) =>
    countryCoverage(c.countryCode, c.name),
  );
}

/**
 * Completeness against an INDEPENDENT list.
 *
 * The target comes from `data/coverage/targets.ts`, which is written from the
 * instruments constituting those sets. Measuring the corpus against a list
 * derived from the corpus would always report full completeness.
 */
export function targetCompleteness(): {
  targetSetId: string;
  label: string;
  layer: CoverageLayer;
  covered: string[];
  missing: string[];
  total: number;
}[] {
  const counters = layerCounters();
  const eu = TARGET_SETS.find((t) => t.id === 'eu-member-states')!;
  const out: ReturnType<typeof targetCompleteness> = [];
  for (const layer of ['authorities', 'varieties'] as const) {
    const covered = eu.members.filter((m) => counters[layer](m) > 0);
    out.push({
      targetSetId: eu.id,
      label: eu.label,
      layer,
      covered,
      missing: eu.members.filter((m) => !covered.includes(m)),
      total: eu.members.length,
    });
  }
  return out;
}

/**
 * Findings that are not about any one jurisdiction.
 *
 * A database covering sixty members at once is a fact about a source, not
 * about a country, and it belongs in the report rather than in a country's row.
 */
export const globalFindings = () =>
  RESEARCH_LEDGER.filter((r) => r.jurisdiction === 'GLOBAL');

/** Subnational cells: authorities are evaluated, everything else has a rule. */
export function subnationalRuleFor(layer: CoverageLayer) {
  return NOT_APPLICABLE_RULES.find(
    (r) => r.layer === layer && r.level === 'subnational',
  );
}
