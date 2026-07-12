import type { CountryAgricultureProfile } from '@/types/geo';

export const nigeria: CountryAgricultureProfile = {
  countryCode: 'NGA',
  slug: 'nigeria',
  name: 'Nigeria',
  region: 'Sub-Saharan Africa',
  subregion: 'West Africa',
  climateZones: [
    'Humid tropical (southern rainforest)',
    'Guinea savanna (middle belt)',
    'Sudan savanna',
    'Semi-arid Sahel (far north)',
  ],
  agroecologicalZones: [
    'Southern forest root-crop and tree-crop zone',
    'Middle-belt cereal and root-crop transition',
    'Northern cereal and grain-legume savanna',
    'Sahelian and Lake Chad margin',
  ],
  dominantCropSystems: [
    'Smallholder rainfed roots and tubers in the humid south — cassava and yam',
    'Rainfed savanna cereals in the north — sorghum, millet and maize',
    'Cowpea, groundnut and other grain legumes in the north',
    'Oil palm and cocoa tree crops in the south',
    'Rice in inland valleys and seasonally flooded fadama land',
  ],
  majorLivestockSystems: [
    'Extensive pastoral and agro-pastoral cattle across the northern savanna and Sahel, often transhumant',
    'Smallholder sheep, goats and poultry kept throughout the country',
    'Growing intensive commercial poultry near major cities',
  ],
  irrigationContext:
    'Irrigation is limited relative to the vast cultivated area; smallholder farming is overwhelmingly rainfed, with localised dry-season and fadama (floodplain) irrigation and some large public schemes in the north.',
  agriculturalInstitutions: [
    {
      name: 'Agricultural Research Council of Nigeria (ARCN)',
      note: 'Coordinates and supervises the national agricultural research system.',
    },
    {
      name: 'International Institute of Tropical Agriculture (IITA)',
      note: 'CGIAR centre headquartered in Ibadan, working on roots and tubers, legumes and maize.',
      url: 'https://www.iita.org',
    },
    {
      name: 'National Root Crops Research Institute (NRCRI)',
      note: 'National institute at Umudike mandated for cassava, yam and other root and tuber crops.',
    },
  ],
  overview:
    "Nigeria is Africa's most populous country, and its agriculture is predominantly smallholder and rainfed, spanning a strong north–south ecological gradient. The humid south is dominated by roots and tubers — Nigeria is the world's largest producer of both cassava and yam — alongside tree crops such as oil palm and cocoa, while the savanna north grows sorghum, millet, maize, cowpea and groundnut and supports extensive, often transhumant cattle herding. Despite very large output of staple foods, the country remains a major food importer, notably of rice and wheat, and productivity is constrained by low input use and rainfed dependence. Competition between herders and farmers over land and water is a significant and recurring pressure in the middle belt.",
  keyLimitations: [
    'Statistics are dated, versioned and periodically revised as new surveys and censuses are released.',
    'National definitions differ, and the very large informal smallholder sector makes official production figures uncertain.',
    'Production estimates carry wide uncertainty given the scale of informal, dispersed smallholder farming.',
    'Output is rainfed and therefore sensitive to both drought and flooding.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CROP.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'SP.RUR.TOTL.ZS',
    'AG.CON.FERT.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'fao',
      citedFor: 'Production, land use and food-balance context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'yam' },
    { type: 'crop', slug: 'millet' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
