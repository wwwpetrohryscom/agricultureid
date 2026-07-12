import type { CountryAgricultureProfile } from '@/types/geo';

export const newZealand: CountryAgricultureProfile = {
  countryCode: 'NZL',
  slug: 'new-zealand',
  name: 'New Zealand',
  region: 'East Asia & Pacific',
  subregion: 'Australasia',
  climateZones: [
    'Temperate oceanic',
    'Cool temperate (South Island interior and highlands)',
    'Subtropical (far north)',
  ],
  agroecologicalZones: [
    'North Island pastoral hill country and dairy plains',
    'Canterbury Plains arable and irrigated land',
    'Central Otago horticulture and viticulture',
    'High-country tussock grasslands',
  ],
  dominantCropSystems: [
    'Perennial ryegrass and clover pasture underpinning grazing',
    'Arable cropping (wheat, barley, maize, herbage seed) on the Canterbury Plains',
    'Horticulture: kiwifruit, apples, and wine grapes',
    'Forage and fodder crops supporting livestock',
  ],
  majorLivestockSystems: [
    'Pasture-based dairy',
    'Extensive sheep for meat and wool',
    'Beef cattle on hill country',
    'Deer farming',
  ],
  irrigationContext:
    'Most pastoral farming is rainfed, but irrigation — concentrated on the Canterbury Plains and in Otago — has expanded to support dairy conversion and arable and horticultural production in the drier eastern districts.',
  agriculturalInstitutions: [
    {
      name: 'Ministry for Primary Industries (MPI)',
      note: 'National authority for agriculture, biosecurity, and food.',
      url: 'https://www.mpi.govt.nz',
    },
    {
      name: 'AgResearch',
      note: 'Crown Research Institute for pastoral and agricultural science.',
      url: 'https://www.agresearch.co.nz',
    },
    {
      name: 'The New Zealand Institute for Plant and Food Research',
      note: 'Crown Research Institute for horticulture, arable, and food science.',
      url: 'https://www.plantandfood.com',
    },
  ],
  overview:
    "New Zealand's agriculture is overwhelmingly pasture-based and export-oriented, built on a temperate oceanic climate that supports year-round outdoor grazing. Pasture-fed dairy, sheep, and beef dominate, complemented by a fast-growing horticulture sector — kiwifruit, apples, and wine — and arable cropping concentrated on the Canterbury Plains. The sector is highly efficient, trade-exposed, and a cornerstone of the national economy, exporting the large majority of its output. Managing the environmental footprint of intensive dairying — nutrient runoff, freshwater quality, and greenhouse-gas emissions — is a defining long-term challenge.",
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their reference year and dataset version.',
    'National definitions of farm, land use, and stock classes differ from those used elsewhere.',
    'A small domestic market means output is dominated by export flows, so national figures are strongly trade-driven.',
    'Pasture-based livestock systems are not directly comparable with grain-fed systems in other countries.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.LVSK.XD',
    'AG.PRD.FOOD.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.LND.FRST.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'fao', citedFor: 'Production systems and land-use context' },
    { sourceId: 'woah', citedFor: 'Animal health status for export livestock' },
  ],
  connections: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
    { type: 'crop', slug: 'grape' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
