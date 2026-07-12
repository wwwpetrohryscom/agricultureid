import type { AgriculturalIndicator } from '@/types/geo';

/**
 * Curated agricultural indicators (World Bank WDI). Units and methodology live
 * here so every observation renders consistently. `comparable: false` marks
 * indicators that must NOT be framed as cross-country rankings (index bases,
 * modeled estimates, or context-dependent measures).
 */
export const INDICATORS: AgriculturalIndicator[] = [
  {
    id: 'AG.LND.AGRI.ZS',
    name: 'Agricultural land',
    slug: 'agricultural-land-share',
    unit: '% of land area',
    category: 'land',
    description:
      'Share of land area that is arable, under permanent crops, or under permanent pasture.',
    methodology:
      'FAO definition of agricultural land as a share of total land area; compiled by the World Bank.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'AG.LND.AGRI.K2',
    name: 'Agricultural land area',
    slug: 'agricultural-land-area',
    unit: 'sq. km',
    category: 'land',
    description: 'Total agricultural land area in square kilometres.',
    methodology: 'FAO land-use accounts compiled by the World Bank.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'AG.LND.ARBL.ZS',
    name: 'Arable land',
    slug: 'arable-land-share',
    unit: '% of land area',
    category: 'land',
    description:
      'Land under temporary crops, temporary meadows, market/kitchen gardens, and temporarily fallow, as a share of land area.',
    methodology:
      'FAO definition of arable land; excludes land left fallow long-term.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'AG.LND.ARBL.HA.PC',
    name: 'Arable land per person',
    slug: 'arable-land-per-person',
    unit: 'hectares per person',
    category: 'land',
    description: 'Arable land in hectares divided by total population.',
    methodology:
      'Arable land (FAO) divided by World Bank population estimates.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'AG.YLD.CREL.KG',
    name: 'Cereal yield',
    slug: 'cereal-yield',
    unit: 'kg per hectare',
    category: 'yield',
    description:
      'Cereal yield (kg/ha of harvested land) for wheat, rice, maize, barley, and other cereals.',
    methodology:
      'Cereal production divided by harvested area (FAO), compiled by the World Bank.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'AG.PRD.CREL.MT',
    name: 'Cereal production',
    slug: 'cereal-production',
    unit: 'metric tons',
    category: 'production',
    description:
      'Total cereal production in metric tons (grain crops harvested for dry grain).',
    methodology: 'FAO production accounts compiled by the World Bank.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'AG.PRD.CROP.XD',
    name: 'Crop production index',
    slug: 'crop-production-index',
    unit: 'index (2014–2016 = 100)',
    category: 'production',
    description:
      'Agricultural crop production relative to the 2014–2016 base period.',
    methodology:
      'FAO index of crop production relative to a rolling base period; an index, not an absolute quantity.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: false,
  },
  {
    id: 'AG.PRD.FOOD.XD',
    name: 'Food production index',
    slug: 'food-production-index',
    unit: 'index (2014–2016 = 100)',
    category: 'production',
    description: 'Food crop production relative to the 2014–2016 base period.',
    methodology:
      'FAO index relative to a base period; comparable over time within a country, not across countries as an absolute.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: false,
  },
  {
    id: 'AG.PRD.LVSK.XD',
    name: 'Livestock production index',
    slug: 'livestock-production-index',
    unit: 'index (2014–2016 = 100)',
    category: 'production',
    description: 'Livestock production relative to the 2014–2016 base period.',
    methodology:
      'FAO index relative to a base period; an index, not an absolute quantity.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: false,
  },
  {
    id: 'NV.AGR.TOTL.ZS',
    name: 'Agriculture value added',
    slug: 'agriculture-value-added-gdp',
    unit: '% of GDP',
    category: 'economy',
    description:
      'Value added by agriculture, forestry, and fishing as a share of GDP.',
    methodology:
      'National accounts value added (ISIC A) as a share of GDP; World Bank/OECD data.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'SL.AGR.EMPL.ZS',
    name: 'Employment in agriculture',
    slug: 'employment-in-agriculture',
    unit: '% of total employment',
    category: 'economy',
    description:
      'Share of total employment in agriculture, forestry, and fishing.',
    methodology:
      'ILO modelled estimates. A modeled indicator — treat as an estimate, not an observed count.',
    estimateFlag: true,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'AG.CON.FERT.ZS',
    name: 'Fertilizer consumption',
    slug: 'fertilizer-consumption',
    unit: 'kg per hectare of arable land',
    category: 'inputs',
    description: 'Fertilizer nutrient consumption per hectare of arable land.',
    methodology:
      'FAO fertilizer accounts (N, P₂O₅, K₂O) per hectare of arable land.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'AG.LND.FRST.ZS',
    name: 'Forest area',
    slug: 'forest-area-share',
    unit: '% of land area',
    category: 'environment',
    description: 'Forest area as a share of land area.',
    methodology:
      'FAO Global Forest Resources Assessment, compiled by the World Bank.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'AG.LND.IRIG.AG.ZS',
    name: 'Irrigated agricultural land',
    slug: 'irrigated-agricultural-land',
    unit: '% of agricultural land',
    category: 'inputs',
    description:
      'Agricultural land equipped for irrigation, as a share of agricultural land.',
    methodology:
      'FAO AQUASTAT-derived; sparse coverage — many country-years are missing.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'AG.LND.PRCP.MM',
    name: 'Average precipitation',
    slug: 'average-precipitation',
    unit: 'mm per year',
    category: 'environment',
    description: 'Long-term average precipitation in depth (mm per year).',
    methodology:
      'Long-term climatological average; effectively a stable geographic fact, updated infrequently.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
  {
    id: 'SP.RUR.TOTL.ZS',
    name: 'Rural population',
    slug: 'rural-population-share',
    unit: '% of total population',
    category: 'population',
    description: 'Share of the population living in rural areas.',
    methodology:
      'National statistical offices’ urban/rural definitions differ; compiled by the World Bank.',
    estimateFlag: false,
    sourceId: 'worldbank',
    comparable: true,
  },
];

export const INDICATOR_BY_ID: ReadonlyMap<string, AgriculturalIndicator> =
  new Map(INDICATORS.map((i) => [i.id, i]));

export const INDICATOR_BY_SLUG: ReadonlyMap<string, AgriculturalIndicator> =
  new Map(INDICATORS.map((i) => [i.slug, i]));
