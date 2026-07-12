import type { CountryAgricultureProfile } from '@/types/geo';

export const netherlands: CountryAgricultureProfile = {
  countryCode: 'NLD',
  slug: 'netherlands',
  name: 'Netherlands',
  region: 'Europe & Central Asia',
  subregion: 'Western Europe',
  climateZones: ['Temperate oceanic'],
  agroecologicalZones: [
    'Reclaimed polder and marine clay lowlands',
    'Sandy soils of the east and south',
    'Peat grasslands',
  ],
  dominantCropSystems: [
    'Intensive greenhouse horticulture (tomatoes, peppers, cucumbers) under glass',
    'Ornamental flowers, bulbs and nursery stock',
    'Seed, ware and starch potatoes',
    'Sugar beet and onions on fertile polder and clay soils',
    'Cereals and forage within arable rotations',
  ],
  majorLivestockSystems: [
    'Intensive dairy cattle on managed grassland and maize silage',
    'Large, export-oriented pig production',
    'Intensive poultry for meat and eggs',
    'Veal calf systems',
  ],
  irrigationContext:
    'In a wet maritime climate open-field irrigation is limited and water management centres on drainage and polders, while greenhouse systems use precise recirculating fertigation.',
  agriculturalInstitutions: [
    {
      name: 'Wageningen University & Research (WUR)',
      note: 'Leading agricultural and life-sciences university and research institute.',
      url: 'https://www.wur.nl',
    },
    {
      name: 'Ministry of Agriculture, Fisheries, Food Security and Nature',
      note: 'Netherlands national ministry responsible for agriculture and food policy.',
      url: 'https://www.rijksoverheid.nl',
    },
  ],
  overview:
    "The Netherlands is one of the world's most intensive and technologically advanced agricultural economies and, despite its small size, ranks among the largest agri-food exporters globally. Its strength lies in extremely high-value, knowledge-intensive systems: climate-controlled greenhouse horticulture, ornamental flowers and bulbs, seed potatoes, and a highly productive dairy sector, supported by a dense cluster of research, breeding and logistics expertise often called the 'Golden Triangle'. Farming operates within the EU Common Agricultural Policy (CAP), and the sector faces intense pressure to cut nitrogen emissions and other environmental impacts from concentrated livestock and fertiliser use. Wageningen University & Research anchors an internationally influential agricultural innovation system.",
  keyLimitations: [
    'Statistics are dated, versioned and periodically revised; always read the year and dataset version rather than treating a figure as current.',
    'National and EU statistical definitions (for example utilised agricultural area and livestock categories) differ from those of other countries, limiting direct cross-country comparison.',
    'A large share of agri-food trade is re-exported or processed from imported inputs, so headline export standing overstates domestic primary production.',
    'Nitrogen and environmental policy is reshaping livestock numbers, so recent figures may not reflect the current trajectory.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CROP.XD',
    'AG.PRD.LVSK.XD',
    'AG.CON.FERT.ZS',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'ec-agri',
      citedFor: 'EU Common Agricultural Policy framework and farm statistics',
    },
    {
      sourceId: 'fao',
      citedFor: 'Global agriculture and food production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'tomato' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'chickens' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
