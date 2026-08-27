/**
 * Query layer over agricultural border requirements.
 *
 * There is no page per requirement. Eight records, each of which is a pointer
 * to an official system, do not become eight pages: they become one page that
 * shows which system decides what, grouped by the thing a reader actually
 * knows first — where the consignment is going.
 */
import { TRADE_REQUIREMENTS } from '@/data/trade';
import type {
  AgriculturalTradeRequirement,
  TradeDirection,
  TradeSubjectType,
} from '@/types/trade-requirement';

export { TRADE_REQUIREMENTS };
export { TRADE_HUB_PATH } from './paths';

/** Requirements for one jurisdiction, whichever way it is identified. */
export function requirementsFor(
  jurisdiction: string,
): AgriculturalTradeRequirement[] {
  return TRADE_REQUIREMENTS.filter(
    (r) =>
      r.jurisdictionCountryCode === jurisdiction ||
      r.supranationalJurisdiction === jurisdiction,
  );
}

export function byDirection(
  direction: TradeDirection,
): AgriculturalTradeRequirement[] {
  return TRADE_REQUIREMENTS.filter((r) => r.direction === direction);
}

/** Jurisdictions with requirements, in the order a reader scans them. */
export function jurisdictionsWithRequirements(): {
  key: string;
  name: string;
  requirements: AgriculturalTradeRequirement[];
}[] {
  const m = new Map<string, AgriculturalTradeRequirement[]>();
  for (const r of TRADE_REQUIREMENTS) {
    const key = r.jurisdictionCountryCode ?? r.supranationalJurisdiction!;
    m.set(key, [...(m.get(key) ?? []), r]);
  }
  return [...m]
    .map(([key, requirements]) => ({
      key,
      name: requirements[0]!.jurisdictionName,
      requirements: requirements.sort((a, b) =>
        a.direction.localeCompare(b.direction),
      ),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function subjectTypesCovered(): TradeSubjectType[] {
  return [...new Set(TRADE_REQUIREMENTS.flatMap((r) => r.subjectTypes))].sort();
}

/** Every condition the official systems resolve and this corpus does not. */
export function unresolvedConditionCount(): number {
  return TRADE_REQUIREMENTS.reduce(
    (n, r) => n + r.unresolvedConditions.length,
    0,
  );
}
