import type { CountryAgricultureProfile } from '@/types/geo';

export const colombia: CountryAgricultureProfile = {
  countryCode: 'COL',
  slug: 'colombia',
  name: 'Colombia',
  region: 'Latin America & Caribbean',
  subregion: 'Andes',
  climateZones: [
    'Tropical rainforest',
    'Tropical savanna',
    'Tropical highland (Andean, by altitude)',
    'Arid (Caribbean north)',
  ],
  agroecologicalZones: [
    'Andean coffee belt (temperate mountain slopes)',
    'Caribbean lowland plains',
    'Cauca and Magdalena river valleys',
    'Eastern Llanos savanna',
    'Amazon and Pacific forests',
  ],
  dominantCropSystems: [
    'Shade and sun Arabica coffee on Andean slopes',
    'Irrigated sugarcane in the Cauca valley',
    'Banana and plantain for export and domestic use',
    'Rice, maize, and oil palm in lowland valleys and plains',
    'Tropical fruit, cut flowers, and cacao horticulture',
  ],
  majorLivestockSystems: [
    'Extensive dual-purpose and beef cattle on lowland and savanna pastures',
    'Dairy in the cool Andean highlands',
    'Intensive poultry and pig production near urban centres',
  ],
  irrigationContext:
    'Abundant rainfall means most Colombian cropping is rainfed, with irrigation concentrated in the Cauca valley sugarcane belt, lowland rice districts, and the drier Caribbean and inter-Andean valleys.',
  agriculturalInstitutions: [
    {
      name: 'Ministry of Agriculture and Rural Development (MinAgricultura)',
      note: 'National agriculture and rural development authority.',
      url: 'https://www.minagricultura.gov.co',
    },
    {
      name: 'Colombian Agricultural Research Corporation (AGROSAVIA)',
      note: 'Principal national agricultural research organisation.',
      url: 'https://www.agrosavia.co',
    },
    {
      name: 'Colombian Agricultural Institute (ICA)',
      note: 'National plant and animal health and sanitary authority.',
      url: 'https://www.ica.gov.co',
    },
    {
      name: 'National Federation of Coffee Growers (FNC / Cenicafe)',
      note: 'Coffee-grower federation and its Cenicafe research center.',
      url: 'https://www.federaciondecafeteros.org',
    },
  ],
  overview:
    "Colombia's tropical, mountainous geography gives it a wide altitudinal range of production, from Caribbean lowlands to cool Andean highlands. Its agriculture is defined by high-quality Arabica coffee grown across the Andean slopes, alongside irrigated sugarcane in the Cauca valley, banana and plantain, rice, oil palm, and a growing cut-flower and tropical-fruit export sector. Extensive cattle ranching occupies large areas of lowland and savanna pasture. Rural land distribution, the legacy of armed conflict in the countryside, and the coexistence of export agribusiness with smallholder farming are enduring features of the sector.",
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their reference year and dataset version.',
    'National definitions of farm, cultivated land, and livestock categories differ from those used elsewhere.',
    'Decades of rural conflict have affected land use and the completeness of data collection in some regions.',
    'Extensive cattle grazing and dispersed smallholder production complicate land-use accounting.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CROP.XD',
    'AG.PRD.FOOD.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.LND.FRST.ZS',
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
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'rice' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
