/**
 * Pinned contracts, one per soil dataset.
 *
 * The rule this program has arrived at four times now: a source with no
 * contract must fail closed. A rule written for SSURGO's representative values
 * would not merely stop applying to a modelled raster — it would stop firing,
 * and the raster would pass with no rules at all.
 *
 * So each dataset declares what it can produce: which properties, at which
 * spatial scale, in which evidence class, under which classification system.
 * A value outside its source's declaration is refused rather than absorbed.
 *
 * ## Reserved evidence classes
 *
 * `measured`, `modeled` and `estimated` are in the vocabulary and no dataset
 * here produces them. They are RESERVED rather than removed, and the reason is
 * recorded below, because the distinction they draw is the one this layer
 * exists to hold: dropping `modeled` would leave nothing to contrast
 * `classified` with, and a later dataset that predicts values would have
 * nowhere honest to go.
 */
import type {
  ClassificationSystem,
  SoilEvidenceClass,
  SoilProperty,
  SpatialBasis,
} from '@/types/soil';

export interface SoilDatasetContract {
  datasetId: string;
  label: string;
  snapshotPath: string;
  registryId: string;
  sourceIds: readonly string[];
  countryCode: string;
  /** Everything this dataset can produce. Anything else is refused. */
  properties: readonly SoilProperty[];
  evidenceClass: SoilEvidenceClass;
  spatialBasis: SpatialBasis;
  classificationSystem?: ClassificationSystem;
  /** The administrative codes the dataset covers, as it covers them. */
  jurisdictionIds: readonly string[];
  why: string;
}

export const SOIL_DATASET_CONTRACTS: readonly SoilDatasetContract[] = [
  {
    datasetId: 'ssurgo-component-surface-horizons',
    label: 'USDA NRCS Soil Survey Geographic Database (SSURGO)',
    snapshotPath:
      'data/snapshots/ssurgo__component-surface-horizons__2026-08-27.json',
    registryId: 'usda-nrcs-ssurgo',
    sourceIds: ['reg-usda-nrcs-ssurgo'],
    countryCode: 'USA',
    properties: [
      'pH',
      'organicMatter',
      'clayContent',
      'sandContent',
      'siltContent',
      'drainageClass',
      'surfaceHorizonDepth',
    ],
    // Representative values characterise a mapped soil body. They are informed
    // by field description and laboratory work and are not themselves samples.
    evidenceClass: 'classified',
    spatialBasis: 'survey-area-aggregate',
    classificationSystem: 'USDA Soil Taxonomy',
    jurisdictionIds: [
      'US-CA',
      'US-FL',
      'US-IA',
      'US-IL',
      'US-IN',
      'US-KS',
      'US-MN',
      'US-ND',
      'US-NE',
      'US-SD',
      'US-TX',
      'US-WA',
      'US-WI',
    ],
    why: 'Read through Soil Data Access, the survey’s own query service, at the survey’s own grain: survey area, map unit, component.',
  },
];

export const SOIL_DATASET_CONTRACT_MAP: ReadonlyMap<
  string,
  SoilDatasetContract
> = new Map(SOIL_DATASET_CONTRACTS.map((c) => [c.datasetId, c]));

/**
 * Vocabulary members that are deliberately not produced yet, and why.
 *
 * An unreachable member normally comes out — Waves 18 to 22 removed five of
 * them. These stay because they are the contrast that makes `classified`
 * meaningful, and the reasons are specific enough to act on.
 */
export const RESERVED_EVIDENCE_CLASSES: readonly {
  evidenceClass: SoilEvidenceClass;
  why: string;
}[] = [
  {
    evidenceClass: 'measured',
    why: 'No laboratory characterisation dataset is ingested. The USDA Kellogg Soil Survey Laboratory publishes one and it is a separate source from SSURGO’s tabular data.',
  },
  {
    evidenceClass: 'modeled',
    why: 'ISRIC SoilGrids was examined and not ingested. It predicts properties for 250 m raster cells, and placing those beside a survey’s mapped soil bodies as though both described the same thing is exactly the scale conflation this layer refuses. It needs its own spatial basis and its own contract, not a column next to SSURGO.',
  },
  {
    evidenceClass: 'estimated',
    why: 'Nothing here derives a soil property from other properties. A pedotransfer function would produce this class and none is applied.',
  },
];
