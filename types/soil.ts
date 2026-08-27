/**
 * Soil observations — what an official survey documents about the soil in a
 * place, kept strictly apart from three things it is constantly confused with.
 *
 * ## Four different statements
 *
 *   "Chernozem is a soil type"                    — a classification
 *   "Organic matter is a soil property"           — a property concept
 *   "Ackmore soils in Iowa hold 2% organic matter
 *    in the surface horizon, per SSURGO"          — an OBSERVATION
 *   "This soil is good for wheat"                 — a suitability interpretation
 *
 * The first two already exist in this corpus as editorial pages. The fourth is
 * an interpretation that requires a source making that relationship. This
 * module is only the third, and it refuses to become any of the others.
 *
 * ## A representative value is not a measurement
 *
 * This is the trap. A soil survey publishes a REPRESENTATIVE VALUE for a named
 * component of a mapped soil body: the surveyor's characterisation of that
 * body, informed by field description and laboratory work but not itself a
 * sample. A modelled raster is different again — a prediction for a grid cell,
 * from a model, with an uncertainty the model states.
 *
 * Presenting any of them as a field measurement would tell a farmer that a
 * number describes their field when it describes a polygon, a grid cell, or a
 * surveyor's judgement about a soil body. So {@link SoilEvidenceClass} is
 * required, never inferred, and every source declares which class it can
 * produce.
 *
 * ## Scale is part of the fact
 *
 * A value has a spatial basis and the basis travels with it. A point sample is
 * not the property of a county; a county's map units are not the property of a
 * state. {@link SpatialBasis} says which unit the value belongs to, and the
 * validator refuses a claim at a scale its source does not publish.
 *
 * ## Classification systems are not interchangeable
 *
 * USDA Soil Taxonomy and the World Reference Base classify the same ground
 * differently and are not translations of each other. A classification here
 * always names its system, and no crosswalk between systems is applied — a
 * fuzzy name match between an Order and a Reference Soil Group would produce
 * confident nonsense.
 */

/**
 * Properties this layer can carry.
 *
 * Deliberately only what a source in the corpus actually supplies. A soil
 * property vocabulary can be arbitrarily long — bulk density, cation exchange
 * capacity, electrical conductivity, rooting depth, erosion risk and a dozen
 * more are all real — and listing them here before anything produces them
 * would describe coverage that does not exist. They arrive with a source.
 */
export const SOIL_PROPERTIES = [
  'pH',
  'organicMatter',
  'clayContent',
  'sandContent',
  'siltContent',
  'drainageClass',
  'surfaceHorizonDepth',
] as const;
export type SoilProperty = (typeof SOIL_PROPERTIES)[number];

/** Properties whose value is a category, not a number. */
export const CATEGORICAL_PROPERTIES: readonly SoilProperty[] = [
  'drainageClass',
];

export const SOIL_PROPERTY_LABEL: Record<SoilProperty, string> = {
  pH: 'pH (1:1 water)',
  organicMatter: 'Organic matter',
  clayContent: 'Clay',
  sandContent: 'Sand',
  siltContent: 'Silt',
  drainageClass: 'Drainage class',
  surfaceHorizonDepth: 'Surface horizon depth',
};

/** The unit a numeric property is expressed in. Pinned per property. */
export const SOIL_PROPERTY_UNIT: Partial<Record<SoilProperty, string>> = {
  pH: 'pH',
  organicMatter: '% by weight',
  clayContent: '% by weight',
  sandContent: '% by weight',
  siltContent: '% by weight',
  surfaceHorizonDepth: 'cm',
};

/**
 * How the value came to exist. Never inferred; every source declares which of
 * these it can produce, and a source that produces none cannot be read.
 */
export const SOIL_EVIDENCE_CLASSES = [
  /** A sample was taken and analysed. */
  'measured',
  /** A model predicted it for a cell or point, with the model's own uncertainty. */
  'modeled',
  /** A survey characterised a mapped soil body. */
  'classified',
  /** Derived from other values by a documented rule. */
  'estimated',
] as const;
export type SoilEvidenceClass = (typeof SOIL_EVIDENCE_CLASSES)[number];

/**
 * The spatial unit a value belongs to. It travels with the value, because
 * without it a number is unattributable: 6.0 is the pH of *what*?
 */
export const SPATIAL_BASES = [
  'point',
  'map-unit',
  'survey-area',
  /** A summary of a source's own units across a larger administrative area. */
  'survey-area-aggregate',
  'raster-cell',
  'zone',
  'national',
] as const;
export type SpatialBasis = (typeof SPATIAL_BASES)[number];

/** Named soil classification systems. Never equated with one another. */
export const CLASSIFICATION_SYSTEMS = [
  'USDA Soil Taxonomy',
  'World Reference Base for Soil Resources',
] as const;
export type ClassificationSystem = (typeof CLASSIFICATION_SYSTEMS)[number];

/**
 * The closed vocabulary of each system's top level.
 *
 * Naming a system is not enough. A dataset that relabels its own values as
 * belonging to another system passes every consistency check — the record and
 * the contract agree, they are just both wrong — and the result is a page
 * presenting Mollisols as Reference Soil Groups. The values themselves have to
 * be checked against the system that claims them, which is possible because
 * both vocabularies are closed and short.
 */
export const CLASSIFICATION_VALUES: Record<
  ClassificationSystem,
  readonly string[]
> = {
  'USDA Soil Taxonomy': [
    'Alfisols',
    'Andisols',
    'Aridisols',
    'Entisols',
    'Gelisols',
    'Histosols',
    'Inceptisols',
    'Mollisols',
    'Oxisols',
    'Spodosols',
    'Ultisols',
    'Vertisols',
  ],
  // The Reference Soil Groups of the World Reference Base. Listed so that a
  // dataset claiming this system can be checked against it, not because
  // anything currently produces one.
  'World Reference Base for Soil Resources': [
    'Acrisols',
    'Albeluvisols',
    'Alisols',
    'Andosols',
    'Anthrosols',
    'Arenosols',
    'Calcisols',
    'Cambisols',
    'Chernozems',
    'Cryosols',
    'Durisols',
    'Ferralsols',
    'Fluvisols',
    'Gleysols',
    'Gypsisols',
    'Histosols',
    'Kastanozems',
    'Leptosols',
    'Lixisols',
    'Luvisols',
    'Nitisols',
    'Phaeozems',
    'Planosols',
    'Plinthosols',
    'Podzols',
    'Regosols',
    'Retisols',
    'Solonchaks',
    'Solonetz',
    'Stagnosols',
    'Technosols',
    'Umbrisols',
    'Vertisols',
  ],
};

/**
 * Whether a spatial basis may summarise more than one of a source's own units.
 *
 * A contract can declare any basis it likes and every record will agree with
 * it, because records take the basis from the contract. What cannot be faked
 * is the arithmetic: a value derived from 61 map units in 35 survey areas is
 * not a point observation, whatever the contract says.
 */
export const BASIS_MAY_AGGREGATE: Record<SpatialBasis, boolean> = {
  point: false,
  'raster-cell': false,
  'map-unit': false,
  'survey-area': true,
  'survey-area-aggregate': true,
  zone: true,
  national: true,
};

/** A range as the source publishes it. A mean without its range is not shown. */
export interface SoilValueRange {
  min: number;
  max: number;
  mean: number;
}

export interface SoilObservation {
  id: string;
  /** The source's own name for the soil body, e.g. a series name. */
  soilBody: string;
  /** ISO 3166-2 code of the administrative area the observation summarises. */
  jurisdictionId: string;
  countryCode: string;
  /** Slug of an existing region profile. Never invented for this layer. */
  regionRef?: string;

  property: SoilProperty;
  /** Present for numeric properties. */
  range?: SoilValueRange;
  /** Present for categorical properties, in the source's own wording. */
  categoricalValue?: string;
  /** True where the source records more than one category for this soil body. */
  categoryVaries?: boolean;
  unit?: string;

  depthRange?: { minCm: number; maxCm: number };
  evidenceClass: SoilEvidenceClass;
  spatialBasis: SpatialBasis;
  /** How many of the source's own units the summary covers. */
  unitsCovered: { surveyAreas: number; mapUnits: number };

  /** Classification of the soil body, where the source gives one. */
  classification?: {
    system: ClassificationSystem;
    value: string;
    varies: boolean;
  };

  sourceDatasetId: string;
  sourceReferences: string[];
  lastVerifiedAt: string;
}

/** Shown wherever soil observations are displayed. */
export const SOIL_CAVEAT =
  'These values describe soil bodies a survey has mapped, not samples taken in a particular field. A measurement on one farm may differ from the representative value of the map unit containing it.';

/** Shown wherever a soil observation appears near a crop. */
export const SOIL_SUITABILITY_CAVEAT =
  'AgricultureID does not infer crop suitability from soil observations. That a crop is grown where a soil occurs is not evidence that the soil suits it, and no such link is published without a source that makes it.';
