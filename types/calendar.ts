/**
 * Crop calendar entries — when a crop is usually sown and harvested in a
 * particular jurisdiction.
 *
 * ## Why this is a separate layer, not a field on `crop`
 *
 * Planting timing is jurisdictional and system-specific: winter wheat in Kansas
 * is sown in September, spring wheat in North Dakota in April. A
 * `crop.plantingMonth` field would have to pick one and be wrong everywhere
 * else. The context belongs in the record, not on the crop.
 *
 * ## Precision is inherited, never manufactured
 *
 * Windows carry the precision of the SOURCE. USDA publishes "usual" begin,
 * most-active and end dates per state, so those are recorded as published. What
 * is never done is the reverse: deriving "plant on 14 March" from a general
 * statement that a crop is sown in spring. A window with only a month range
 * stays a month range.
 *
 * ## Confidence is about the evidence, not the agronomy
 *
 * `confidence` reflects how well the source supports the entry — its
 * granularity and vintage — not how reliable the farming advice is. A 2010
 * handbook is `moderate` however sound its agronomy, because the reader
 * deserves to know the vintage.
 */

/**
 * A seasonal window as published. Fields are month-day strings such as
 * "Apr 19"; a year is never attached because these are usual dates, not dated
 * events. Any part may be absent when the source does not publish it.
 */
export interface SeasonalWindow {
  begin?: string;
  mostActiveStart?: string;
  mostActiveEnd?: string;
  end?: string;
}

export const CALENDAR_CONFIDENCES = ['high', 'moderate', 'limited'] as const;
export type CalendarConfidence = (typeof CALENDAR_CONFIDENCES)[number];

export const PRODUCTION_SYSTEMS = [
  'rainfed',
  'irrigated',
  'mixed',
  'protected',
  'unknown',
] as const;
export type ProductionSystem = (typeof PRODUCTION_SYSTEMS)[number];

export interface CropCalendarEntry {
  id: string;
  /** Slug of a published crop in the content registry. */
  cropRef: string;
  /** ISO 3166-1 alpha-3 of the country. */
  countryCode: string;
  /** ISO 3166-2 canonical jurisdiction id, when the record is subnational. */
  jurisdictionId?: string;
  /** Human-readable jurisdiction label. */
  jurisdictionName: string;
  /**
   * The crop season this record describes — "Winter wheat", "Spring barley".
   * Absent where the source does not distinguish seasons. Conflating winter and
   * spring forms of the same species is the classic error here.
   */
  seasonType?: string;
  productionSystem?: ProductionSystem;

  sowingWindow?: SeasonalWindow;
  harvestWindow?: SeasonalWindow;

  productionContext?: string;
  sourceReferences: string[];
  lastVerifiedAt: string;
  confidence: CalendarConfidence;
  limitations: string[];
}

/** Shown wherever a calendar is displayed. */
/**
 * The sentence a group-level calendar page must carry, and an exact-entity one
 * must not.
 *
 * Held as a constant so the page renders it and the post-build audit looks for
 * this exact string. `granularity: 'CONCEPT_LEVEL'` was recorded in the match
 * layer from Wave 42 and checked by the calendars validator, and no reader ever
 * saw it: the coffee, cotton, banana, jute and pumpkin calendar pages read
 * exactly like the exact-entity ones. A distinction that only a validator can
 * see is not a disclosure.
 */
export const CALENDAR_GROUP_SCOPE_MARKER =
  'These windows are for the group, not for one species.';

export const CALENDAR_CAVEAT =
  'Actual timing varies by cultivar, local weather, soil conditions and production system. Use local extension or agronomic guidance for field decisions.';

/** A calendar entry is substantive enough to display when it has a window. */
export function hasTimingData(e: CropCalendarEntry): boolean {
  const filled = (w?: SeasonalWindow) =>
    Boolean(w && (w.begin || w.end || w.mostActiveStart || w.mostActiveEnd));
  return filled(e.sowingWindow) || filled(e.harvestWindow);
}
