import type { CountryAgricultureProfile } from '@/types/geo';

export const southKorea: CountryAgricultureProfile = {
  countryCode: 'KOR',
  slug: 'south-korea',
  name: 'Korea, Rep.',
  region: 'East Asia & Pacific',
  subregion: 'East Asia',
  climateZones: [
    'Humid continental',
    'Humid subtropical (southern coast and Jeju)',
  ],
  agroecologicalZones: [
    'Western and southern coastal plains',
    'Central mountainous uplands',
    'Jeju Island volcanic soils',
  ],
  dominantCropSystems: [
    'Irrigated paddy rice as the dominant staple',
    'Intensive greenhouse and open-field vegetables',
    'Orchard fruit (apple, pear, persimmon, and Jeju citrus)',
    'Upland barley, soybean, and pulses',
  ],
  majorLivestockSystems: [
    'Confined Hanwoo beef cattle',
    'Intensive pig production',
    'Large-scale broiler and layer poultry',
    'Dairy cattle',
  ],
  irrigationContext:
    'Paddy rice depends on well-developed irrigation from reservoirs and pumping stations, while summer-concentrated monsoon rainfall supplies most upland cropping.',
  agriculturalInstitutions: [
    {
      name: 'Ministry of Agriculture, Food and Rural Affairs (MAFRA)',
      note: 'National agriculture and rural policy authority.',
      url: 'https://www.mafra.go.kr',
    },
    {
      name: 'Rural Development Administration (RDA)',
      note: 'National agricultural research and extension agency.',
      url: 'https://www.rda.go.kr',
    },
    {
      name: 'Korea Rural Economic Institute (KREI)',
      note: 'Government think tank for agricultural and rural policy.',
      url: 'https://www.krei.re.kr',
    },
  ],
  overview:
    'South Korea has a compact, intensive agricultural sector constrained by mountainous topography and by rapid industrialisation that has drawn labour off the land. Irrigated paddy rice remains the staple crop and a focus of self-sufficiency policy, alongside intensive greenhouse horticulture, orchard fruit, and confined Hanwoo beef, pig, and poultry production. Farms are small and increasingly worked by an ageing population, and the country imports most of its feed grains and oilseeds. Rice self-sufficiency, farmland-conversion pressure, and rural depopulation are persistent policy themes.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their reference year and dataset version.',
    'National definitions of farm, cultivated land, and livestock categories differ from those used elsewhere.',
    'Very small average farm sizes complicate comparison with land-extensive systems.',
    'Heavy reliance on imported feed and oilseeds means domestic production statistics understate the food system as a whole.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.LVSK.XD',
    'AG.PRD.CROP.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.CON.FERT.ZS',
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
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
