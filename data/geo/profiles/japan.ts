import type { CountryAgricultureProfile } from '@/types/geo';

export const japan: CountryAgricultureProfile = {
  countryCode: 'JPN',
  slug: 'japan',
  name: 'Japan',
  region: 'East Asia & Pacific',
  subregion: 'East Asia',
  climateZones: [
    'Humid subtropical (southern and lowland areas)',
    'Humid continental (north and highlands)',
    'Subarctic (interior Hokkaido)',
  ],
  agroecologicalZones: [
    'Hokkaido arable and dairy belt',
    'Honshu paddy plains',
    'Terraced mountain valleys',
    'Subtropical Kyushu and Okinawa',
  ],
  dominantCropSystems: [
    'Irrigated paddy rice as the staple system',
    'Intensive protected and open-field vegetable and fruit horticulture',
    'Upland and Hokkaido field crops (wheat, potato, sugar beet, soybean)',
    'Tea and orchard production on hill slopes',
  ],
  majorLivestockSystems: [
    'Intensive dairy concentrated in Hokkaido',
    'Wagyu and other beef-cattle fattening',
    'Confined pig and poultry production',
  ],
  irrigationContext:
    'Rice paddies are extensively irrigated through a dense network of small reservoirs, canals, and pumped systems, while abundant, seasonally reliable rainfall limits supplemental irrigation needs for most upland crops.',
  agriculturalInstitutions: [
    {
      name: 'Ministry of Agriculture, Forestry and Fisheries (MAFF)',
      note: 'National agriculture and food policy authority.',
      url: 'https://www.maff.go.jp/e/',
    },
    {
      name: 'National Agriculture and Food Research Organization (NARO)',
      note: 'Principal national agricultural research institute.',
      url: 'https://www.naro.go.jp/english/',
    },
    {
      name: 'Japan International Research Center for Agricultural Sciences (JIRCAS)',
      note: 'National institute for international agricultural research.',
      url: 'https://www.jircas.go.jp/en',
    },
  ],
  overview:
    "Japan's agriculture is intensive, high-value, and shaped by mountainous terrain that confines farming to limited lowland plains and terraced valleys. Irrigated paddy rice is the dietary and cultural staple and the backbone of the farm sector, complemented by high-quality horticulture, tea, fruit, and premium Wagyu beef and dairy. Farms are typically small and often part-time, the farming population is ageing, and the country relies heavily on imports for feed grains, oilseeds, and much of its food supply. Food self-sufficiency, farmland preservation, and support for an ageing rural workforce are enduring policy concerns.",
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their reference year and dataset version.',
    'National definitions of farm, cultivated land, and self-sufficiency differ from those used elsewhere.',
    "Japan's small average farm size and prevalence of part-time farming complicate comparison with land-extensive systems.",
    'Food self-sufficiency is often reported on a calorie basis, a national convention that differs from value-based measures.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.LVSK.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.CON.FERT.ZS',
    'AG.LND.FRST.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'fao',
      citedFor: 'Production systems and food-balance context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'crop', slug: 'tea' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
