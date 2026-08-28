/**
 * Climate risk, drought and agricultural water.
 *
 * ## The distinction the whole layer exists for
 *
 * Four kinds of statement arrive here looking alike, and they are not alike:
 *
 *   a **normal** is what 1991–2020 averaged to. It is not a measurement of any
 *   year, and a season matching it is ordinary rather than predicted.
 *
 *   an **assessment** is what an author judged, weighing several indicators and
 *   local reports. The Drought Monitor is drawn, not read off an instrument.
 *
 *   a **reported statistic** is what a country officially told FAO.
 *
 *   an **agency estimate** is what FAO estimated or imputed when a country did
 *   not report. It sits in the same table, in the same column, flagged.
 *
 * Nothing here is a forecast or a projection. Both are reserved with reasons
 * rather than left as empty vocabulary, because the gap between "this is what
 * the record shows" and "this is what will happen" is the one a climate page
 * is most likely to be read across.
 *
 * ## What this layer will not do
 *
 * It will not turn exposure into impact. Knowing a state was 32% in D2 and that
 * maize grows there does not license a sentence about maize losses: the step
 * from exposure to damage needs crop stage, soil moisture, irrigation and
 * management, and a corpus that took it would be inventing the most consequential
 * part of the claim.
 */

/** Where a value's authority comes from. */
export const CLIMATE_EVIDENCE_CLASSES = [
  'climate-normal',
  'assessment',
  'reported-statistic',
  'agency-estimate',
  'measurement',
  'forecast',
  'projection',
] as const;
export type ClimateEvidenceClass = (typeof CLIMATE_EVIDENCE_CLASSES)[number];

export const CLIMATE_EVIDENCE_LABEL: Record<ClimateEvidenceClass, string> = {
  'climate-normal': 'A 1991–2020 average, not a measurement of any year',
  assessment: 'A judgement drawn by an author from several indicators',
  'reported-statistic': 'A figure the country officially reported',
  'agency-estimate': 'A figure the agency estimated or imputed',
  measurement: 'A reading taken by an instrument',
  forecast: 'An expectation for a period that has not happened',
  projection: 'A modelled outcome under a stated scenario',
};

/** What kind of place a value is about. Never interchangeable. */
export const CLIMATE_SPATIAL_BASES = ['station', 'state', 'country'] as const;
export type ClimateSpatialBasis = (typeof CLIMATE_SPATIAL_BASES)[number];

/**
 * Whether a basis may stand for the area around it.
 *
 * A station normal describes the station. Averaging stations into a county
 * figure is a spatial model, and this corpus does not run one.
 */
export const BASIS_REPRESENTS_AREA: Record<ClimateSpatialBasis, boolean> = {
  station: false,
  state: true,
  country: true,
};

/** Every quantity published here, and nothing else. */
export const CLIMATE_METRICS = [
  // Climate normals — station, 1991–2020
  'annualMeanTemperature',
  'annualPrecipitation',
  'growingDegreeDaysBase50',
  'daysMinimumAtOrBelow32F',
  'daysMaximumAtOrAbove90F',
  // Drought assessment — state, weekly
  'droughtAreaShare',
  // Agricultural water — country, annual
  'areaEquippedForIrrigation',
  'agricultureAreaActuallyIrrigated',
  'croplandAreaActuallyIrrigated',
  'landAreaActuallyIrrigated',
] as const;
export type ClimateMetric = (typeof CLIMATE_METRICS)[number];

/**
 * Irrigation capacity is not irrigation use.
 *
 * Land equipped for irrigation is infrastructure that could be watered. Area
 * actually irrigated is what was. For many countries the two differ widely, and
 * publishing the first as the second overstates agricultural water use.
 */
export const WATER_METRIC_KIND: Record<string, 'capacity' | 'use'> = {
  areaEquippedForIrrigation: 'capacity',
  agricultureAreaActuallyIrrigated: 'use',
  croplandAreaActuallyIrrigated: 'use',
  landAreaActuallyIrrigated: 'use',
};

/**
 * How a degree-day figure was accumulated.
 *
 * A degree-day total means nothing without its base, and two totals on
 * different bases cannot be compared or added. NCEI publishes nine bases and
 * two ceiling variants; one is published here and it says which it is.
 */
export const DEGREE_DAY_METHOD: Record<string, string> = {
  growingDegreeDaysBase50:
    'Accumulated above a 50°F base with no upper limit (NCEI element ANN-GRDD-BASE50).',
};

/**
 * A degree-day accumulation cannot be smaller than the plain temperature
 * surplus over its base.
 *
 * Annual GDD is the sum of max(0, Tᵢ − base) over the year, and dropping the
 * max() only lowers it, so GDD ≥ 365 × (mean temperature − base) whenever the
 * mean is above the base. This holds for any station in any climate, which
 * makes it the check that catches a degree-day column that has been inverted,
 * swapped or ingested from the wrong element — the failure that produced a
 * value of zero at the warmest station in the United States.
 *
 * The tolerance exists because the source computes its temperature normal and
 * its degree-day normal on slightly different daily series; across 1,370
 * published stations the largest disagreement is 0.2 percent.
 */
export const DEGREE_DAY_BASE: Record<string, number> = {
  growingDegreeDaysBase50: 50,
};
export const DEGREE_DAY_BOUND_TOLERANCE = 0.005;

/** The Drought Monitor's categories, and which of them are drought. */
export const DROUGHT_CATEGORIES = [
  'none',
  'D0',
  'D1',
  'D2',
  'D3',
  'D4',
] as const;
export type DroughtCategory = (typeof DROUGHT_CATEGORIES)[number];

export const DROUGHT_CATEGORY_LABEL: Record<DroughtCategory, string> = {
  none: 'No drought category',
  D0: 'Abnormally dry',
  D1: 'Moderate drought',
  D2: 'Severe drought',
  D3: 'Extreme drought',
  D4: 'Exceptional drought',
};

/**
 * D0 is not drought.
 *
 * The Drought Monitor describes D0 as a precursor to drought and a category
 * areas pass through while recovering. Counting it as drought inflates every
 * summary it appears in, and it appears in most of them.
 */
export const CATEGORY_IS_DROUGHT: Record<DroughtCategory, boolean> = {
  none: false,
  D0: false,
  D1: true,
  D2: true,
  D3: true,
  D4: true,
};

/**
 * How the Drought Monitor's area percentages are expressed.
 *
 * Categorical: D1 means the area in D1 and no worse. Cumulative: D1 means D1 or
 * worse. For Nebraska on 2025-02-25 the two say 43.09 and 90.79 about the same
 * map. Only categorical is ingested, and it is checked by the property that
 * distinguishes it: categorical shares sum to 100 and cumulative shares do not.
 */
export const STATISTIC_FORMATS = ['categorical', 'cumulative'] as const;
export type StatisticFormat = (typeof STATISTIC_FORMATS)[number];

/** One published climate, drought or water value. */
export interface ClimateObservation {
  id: string;
  metric: ClimateMetric;
  /** The source's own name for the quantity. */
  publishedItem: string;
  value: number;
  /** The source's unit, never converted. */
  unit: string;
  /** The year, or the averaging period for a normal. */
  period: string;
  evidenceClass: ClimateEvidenceClass;
  spatialBasis: ClimateSpatialBasis;
  /** Set for a station value; the station describes itself and nowhere else. */
  stationId?: string;
  stationName?: string;
  latitude?: number;
  longitude?: number;
  stateCode?: string;
  countryCode?: string;
  jurisdictionName: string;
  /** Drought values only. */
  droughtCategory?: DroughtCategory;
  statisticFormat?: StatisticFormat;
  /** A weekly assessment is current only inside this window. */
  validFrom?: string;
  validTo?: string;
  /** How many of the thirty years a normal actually used. */
  yearsUsed?: number;
  /** The source's own quality or completeness flag, in the source's words. */
  sourceFlag?: string;
  sourceFlagMeaning?: string;
  sourceDatasetId: string;
  sourceReferenceIds: readonly string[];
  limitations?: readonly string[];
  lastVerifiedAt: string;
}

/** Shown wherever climate, drought or water values appear. */
export const CLIMATE_CAVEAT =
  'These are averages, assessments and reported statistics about places. None of them is a measurement of a field, a prediction of a season, or a statement about what a crop will yield.';

/** Shown wherever a climate normal appears. */
export const NORMAL_CAVEAT =
  'A climate normal is what 1991–2020 averaged to at that station. It is not what any year was and not what any year will be; a season that matches it is ordinary, not forecast.';

/** Shown wherever a drought assessment appears. */
export const DROUGHT_CAVEAT =
  'The Drought Monitor is drawn each week by an author who weighs several indicators together with reports from local observers. It is an assessment of conditions, not an instrument reading, and each map applies to one week.';
