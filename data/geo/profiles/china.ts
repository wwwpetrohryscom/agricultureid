import type { CountryAgricultureProfile } from '@/types/geo';

export const china: CountryAgricultureProfile = {
  countryCode: 'CHN',
  slug: 'china',
  name: 'China',
  region: 'East Asia & Pacific',
  subregion: 'East Asia',
  climateZones: [
    'Temperate continental (north and northeast)',
    'Subtropical monsoon (centre and south)',
    'Tropical monsoon (far south and Hainan)',
    'Arid and semi-arid (northwest)',
    'Alpine cold (Tibetan Plateau)',
  ],
  agroecologicalZones: [
    'North China Plain',
    'Northeast (Songliao) Plain',
    'Middle and Lower Yangtze basin',
    'Loess Plateau',
    'Sichuan Basin',
    'Southern hills and terraces',
  ],
  dominantCropSystems: [
    'Irrigated paddy rice across the south and the Yangtze basin',
    'Winter wheat and summer maize double cropping on the North China Plain',
    'Rainfed spring maize and soybean in the Northeast',
    'Irrigated cotton in Xinjiang',
    'Intensive vegetable, orchard, and protected horticulture near cities',
  ],
  majorLivestockSystems: [
    'Intensive and smallholder pig production',
    'Large-scale broiler and layer poultry',
    'Pastoral sheep and goats on northern and western grasslands',
    'Dairy and beef cattle concentrated in the north',
  ],
  irrigationContext:
    'One of the largest irrigated agricultures in the world, combining canal and groundwater irrigation on the North China Plain with paddy systems in the south, under growing water-scarcity pressure across the arid north.',
  agriculturalInstitutions: [
    {
      name: 'Ministry of Agriculture and Rural Affairs (MARA)',
      note: 'National agriculture, rural policy, and food-security authority.',
      url: 'http://english.moa.gov.cn',
    },
    {
      name: 'Chinese Academy of Agricultural Sciences (CAAS)',
      note: 'National agricultural research system.',
      url: 'https://www.caas.cn',
    },
    {
      name: 'China Agricultural University (CAU)',
      note: 'Leading agricultural teaching and research university.',
      url: 'https://www.cau.edu.cn',
    },
  ],
  overview:
    "China operates one of the world's largest and most intensive agricultural systems, stretching from the tropical far south to the cold northeastern plains and the arid northwest. Irrigated rice dominates the warm, wet south while a winter-wheat and summer-maize rotation anchors the North China Plain, and the country is simultaneously the leading producer of pork and a major grower of cotton, soybean, and horticultural crops. Grain self-sufficiency, protection of cultivated land, and rural revitalisation are enduring pillars of national policy. Numerous smallholder farms coexist with rapid consolidation, mechanisation, and the growth of vertically integrated livestock operations.",
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their reference year and dataset version.',
    'National definitions of cultivated area, farm, and livestock categories differ from those used elsewhere and have changed across successive agricultural censuses.',
    'Official Chinese agricultural series have historically been subject to revision, and provincial aggregation masks enormous agroecological diversity.',
    'Some indicators are modeled or estimated where direct reporting is incomplete.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CREL.MT',
    'AG.PRD.FOOD.XD',
    'AG.PRD.LVSK.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'faostat',
      citedFor: 'Crop and livestock production statistics',
    },
    {
      sourceId: 'fao',
      citedFor: 'Production systems and food-security context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'chickens' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
