/**
 * One contract per dataset, declaring what it is entitled to say.
 *
 * A rule written against a single source stops FAILING — not merely stops
 * applying — the moment a second source arrives without one. So a dataset with
 * no contract here fails validation rather than passing through unchecked.
 */
import type {
  ClimateEvidenceClass,
  ClimateMetric,
  ClimateSpatialBasis,
} from '@/types/climate-water';

export interface ClimateDatasetContract {
  datasetId: string;
  label: string;
  snapshotPath: string;
  registryId: string;
  sourceIds: readonly string[];
  metrics: readonly ClimateMetric[];
  /**
   * The evidence class every value from this dataset has — unless the dataset
   * flags its values individually, in which case `evidenceClassByFlag` decides
   * and this is the class the unflagged case would take.
   */
  evidenceClass: ClimateEvidenceClass;
  /** Where the source itself says which values it stands behind. */
  evidenceClassByFlag?: Record<string, ClimateEvidenceClass>;
  spatialBasis: ClimateSpatialBasis;
  /** What kind of place these values describe, in words. */
  geographyNote: string;
  /** The units the source publishes in. Nothing is converted. */
  units: readonly string[];
  /** What a reader must not conclude from this dataset. */
  limitations: readonly string[];
  why: string;
}

export const CLIMATE_CONTRACTS: readonly ClimateDatasetContract[] = [
  {
    datasetId: 'ncei-us-climate-normals',
    label: 'NOAA NCEI — U.S. Climate Normals, 1991–2020 (annual, by station)',
    snapshotPath:
      'data/snapshots/ncei__us-climate-normals-1991-2020__2026-08-27.json',
    registryId: 'noaa-ncei-climate-normals',
    sourceIds: ['reg-noaa-ncei-normals'],
    metrics: [
      'annualMeanTemperature',
      'annualPrecipitation',
      'growingDegreeDaysBase50',
      'daysMinimumAtOrBelow32F',
      'daysMaximumAtOrAbove90F',
    ],
    evidenceClass: 'climate-normal',
    spatialBasis: 'station',
    geographyNote:
      'One weather station, at its own coordinates. A station normal describes the station and nothing around it; no county, state or field figure is derived from it here.',
    units: ['Degrees Fahrenheit', 'Inches', 'Degree days (base 50°F)', 'Days'],
    limitations: [
      'A normal is an average of 1991–2020. It is not a measurement of any year and not a forecast of any year.',
      'Only NCEI’s Standard tier is published here: at least 24 of the 30 years available at the station itself.',
      'Values are in the source’s units. Nothing is converted to metric.',
      'Growing degree days are published on one base only. NCEI’s base-50 ceiling-86 element is discarded here: it runs the wrong way against temperature and in places exceeds what that accumulation can reach.',
    ],
    why: 'Climate normals are the baseline every statement about an unusual season is implicitly made against, and they are the one climate quantity that can be published without predicting anything.',
  },
  {
    datasetId: 'usdm-state-drought-area',
    label: 'U.S. Drought Monitor — state drought area, categorical',
    snapshotPath: 'data/snapshots/usdm__state-drought-area__2026-08-27.json',
    registryId: 'usdm-drought-monitor',
    sourceIds: ['reg-usdm'],
    metrics: ['droughtAreaShare'],
    evidenceClass: 'assessment',
    spatialBasis: 'state',
    geographyNote:
      'A whole state, as a share of its land area. Not a share of its farms, its cropland or its population, and not a statement about any particular place inside it.',
    units: ['Percent of state area'],
    limitations: [
      'The map is an assessment drawn by an author, not an instrument reading and not a model output.',
      'D0 is “abnormally dry” and is not drought.',
      'Each map is valid for one week; outside that week it is history.',
      'A share of a state’s area says nothing about what any farm in it experienced.',
    ],
    why: 'Drought is the climate risk with the most immediate agricultural consequence, and the Drought Monitor is the authoritative weekly account of it in the United States — provided it is presented as the assessment it is.',
  },
  {
    datasetId: 'faostat-land-use-irrigation',
    label: 'FAOSTAT — land use: irrigation (by country, annual)',
    snapshotPath:
      'data/snapshots/faostat__land-use-irrigation__2026-08-27.json',
    registryId: 'faostat',
    sourceIds: ['reg-faostat-land-use'],
    metrics: [
      'areaEquippedForIrrigation',
      'agricultureAreaActuallyIrrigated',
      'croplandAreaActuallyIrrigated',
      'landAreaActuallyIrrigated',
    ],
    evidenceClass: 'agency-estimate',
    // FAOSTAT says on every value who produced it. "A" is the country's own
    // official figure; the others are FAO's estimate, imputation, or a value
    // taken from another organisation. They are the same column and they are
    // not the same claim.
    evidenceClassByFlag: {
      A: 'reported-statistic',
      E: 'agency-estimate',
      I: 'agency-estimate',
      X: 'agency-estimate',
    },
    spatialBasis: 'country',
    geographyNote:
      'A whole country or territory. Regional and world aggregates are excluded, because including them alongside the countries inside them would count the same land twice.',
    units: ['1000 ha'],
    limitations: [
      'Area equipped for irrigation is infrastructure. Area actually irrigated is use. They are different numbers and are never merged.',
      'Fewer than half of these values are figures a country officially reported; the rest carry FAO’s own flag saying it estimated or imputed them.',
      'A national area says nothing about which crops were watered or when.',
    ],
    why: 'Agricultural water is where climate risk becomes an agronomic constraint, and irrigation area is the one water quantity published consistently enough across countries to compare at all.',
  },
];

/**
 * The source's flag and the words the source uses for it, pinned together.
 *
 * A flag is a single letter and its meaning is a sentence, and an ingest can
 * change one without the other. Checking that the class matches the flag while
 * the flag itself carries the wrong words checks the FORM of the mapping while
 * the error sits in what it means — so both halves are pinned to what FAOSTAT
 * publishes.
 */
export const FAOSTAT_FLAG_MEANINGS: Record<string, string> = {
  A: 'Official value',
  E: 'Estimated value',
  I: 'Value imputed by a receiving agency',
  L: 'Missing value; data exist but were not collected',
  X: 'Value from external organization',
};

export const CLIMATE_CONTRACT_MAP = new Map(
  CLIMATE_CONTRACTS.map((c) => [c.datasetId, c]),
);

/**
 * Evidence classes held in the vocabulary but not produced.
 *
 * They exist so that the day one of these datasets is joined by a forecast, the
 * word already means something specific and cannot be quietly applied to a
 * normal. Absence with a reason is a statement; an unused vocabulary member is
 * an accident waiting to be filled.
 */
export const RESERVED_EVIDENCE_CLASSES: readonly {
  evidenceClass: ClimateEvidenceClass;
  why: string;
}[] = [
  {
    evidenceClass: 'measurement',
    why: 'Daily and hourly station observations exist and are freely published, but a corpus that carried them would be carrying a weather record rather than a reference, and every page would need a freshness guarantee this project cannot make. The normals derived from those measurements are published instead.',
  },
  {
    evidenceClass: 'forecast',
    why: 'Seasonal outlooks are published by NOAA’s Climate Prediction Center as probabilities, not as values, and a probability shift rendered beside a normal reads as a prediction of the number next to it. Nothing here forecasts a season.',
  },
  {
    evidenceClass: 'projection',
    why: 'Climate projections are conditional on emissions scenarios, and a projection shown without its scenario is a prediction. AgricultureID publishes no climate projection, and in particular publishes no deterministic statement about future agricultural loss.',
  },
];

/**
 * Claims this layer will not make, and why each one is missing.
 *
 * Every one of these is a step from exposure to impact, and every one needs
 * something no dataset here carries.
 */
export const ABSENT_CLIMATE_CLAIMS: readonly {
  name: string;
  label: string;
  why: string;
}[] = [
  {
    name: 'cropLossFromDrought',
    label: 'Crop loss attributed to drought',
    why: 'Requires crop stage at the time of stress, soil moisture, whether the field was irrigated and how it was managed. Knowing a state was in D2 and that a crop grows there establishes exposure, not damage, and the step between them is the whole of the claim.',
  },
  {
    name: 'yieldImpactOfClimate',
    label: 'Yield impact of a climate condition',
    why: 'Requires a yield model with its assumptions, its calibration and its error. None is published here, and a number produced without one would be an opinion wearing a statistic’s clothes.',
  },
  {
    name: 'waterStressIndexForFarm',
    label: 'Water stress for a farm or field',
    why: 'Every water figure here is national and every drought figure is state-wide. Nothing in this corpus resolves to a farm, and presenting an area statistic as one would tell a reader something about their own land that no source said.',
  },
  {
    name: 'futureDroughtRisk',
    label: 'Future drought risk',
    why: 'Would require a forecast or a projection, and this corpus holds neither. A past frequency is not a future probability, and computing one from 140 weeks of assessments would be a model this project has not built and could not defend.',
  },
];
