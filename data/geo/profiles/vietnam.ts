import type { CountryAgricultureProfile } from '@/types/geo';

/**
 * Viet Nam — country agriculture profile (evergreen).
 * Volatile statistics are resolved from dated World Bank snapshots at render
 * time and are never written into this descriptive prose.
 */
export const vietnam: CountryAgricultureProfile = {
  countryCode: 'VNM',
  slug: 'vietnam',
  name: 'Viet Nam',
  region: 'East Asia & Pacific',
  subregion: 'Southeast Asia',
  climateZones: [
    'Tropical monsoon (south)',
    'Humid subtropical (north)',
    'Distinct wet and dry seasons with typhoon exposure',
  ],
  agroecologicalZones: [
    'Mekong River Delta (southern rice and aquaculture bowl)',
    'Red River Delta (northern intensive rice)',
    'Central Highlands perennial tree-crop belt',
    'Northern and central mountainous uplands',
  ],
  dominantCropSystems: [
    'Intensive multi-cropped irrigated rice in the Mekong and Red River deltas',
    'Perennial tree crops in the Central Highlands — robusta coffee, pepper, tea, and rubber',
    'Cashew and fruit orchards',
    'Integrated rice-aquaculture systems in the Mekong Delta',
  ],
  majorLivestockSystems: [
    'Smallholder pigs, the dominant source of meat',
    'Expanding commercial and household poultry',
    'Buffalo and cattle for draft, meat, and increasingly dairy',
  ],
  irrigationContext:
    'Dense delta irrigation and drainage networks enable double- and triple-cropping of rice, but the Mekong Delta is increasingly threatened by salinity intrusion, upstream dams, and land subsidence.',
  agriculturalInstitutions: [
    {
      name: 'Ministry of Agriculture and Rural Development (MARD)',
      note: 'National ministry responsible for agriculture, forestry, fisheries, irrigation, and rural development.',
      url: 'https://www.mard.gov.vn',
    },
    {
      name: 'Vietnam Academy of Agricultural Sciences (VAAS)',
      note: 'National agricultural research network of institutes coordinating crop and farming-systems research.',
      url: 'https://vaas.vn',
    },
  ],
  overview:
    'Viet Nam is one of the world’s leading agricultural exporters, transformed since the Doi Moi reforms of the 1980s from food deficit to a major exporter of rice, coffee, and other commodities. Rice grown intensively in the Mekong and Red River deltas underpins food security, while the Central Highlands make the country a dominant global source of robusta coffee, alongside significant tea, pepper, cashew, and rubber. Production is dominated by smallholders farming small, fragmented plots at high cropping intensity.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; single-year figures should not be read as a fixed baseline.',
    'National definitions of agricultural land, holdings, and commodities differ from those used by other countries, limiting direct comparison.',
    'National aggregates hide the concentration of robusta coffee in the Central Highlands and of rice in the two deltas.',
    'Farm structure is dominated by very small, fragmented smallholdings, and the Mekong Delta faces mounting climate and salinity risks.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CREL.MT',
    'AG.PRD.CROP.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'SP.RUR.TOTL.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'fao',
      citedFor: 'Production, land-use, and commodity context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'tea' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
