import type { CountryAgricultureProfile } from '@/types/geo';

export const peru: CountryAgricultureProfile = {
  countryCode: 'PER',
  slug: 'peru',
  name: 'Peru',
  region: 'Latin America & Caribbean',
  subregion: 'Andes',
  climateZones: [
    'Arid coastal desert',
    'Tropical highland (Andean sierra, by altitude)',
    'Tropical rainforest (Amazon selva)',
  ],
  agroecologicalZones: [
    'Coastal irrigated valleys (costa)',
    'Andean highland terraces and valleys (sierra)',
    'Amazon lowland and high jungle (selva)',
  ],
  dominantCropSystems: [
    'Irrigated export horticulture on the arid coast (asparagus, grapes, avocado, blueberries)',
    'Rainfed and terraced Andean staples (potato, maize, quinoa, highland cereals)',
    'Amazonian coffee, cacao, oil palm, and plantain',
    'Irrigated rice and sugarcane in coastal and jungle valleys',
  ],
  majorLivestockSystems: [
    'Andean camelids (alpaca and llama) for fibre and meat',
    'Smallholder and dairy cattle in highland and coastal valleys',
    'Sheep and goats in the sierra',
    'Intensive coastal poultry and pigs',
  ],
  irrigationContext:
    'Coastal agriculture depends almost entirely on irrigation from rivers descending the Andes and from large state irrigation schemes, while highland farming is largely rainfed and Amazon cropping relies on abundant rainfall.',
  agriculturalInstitutions: [
    {
      name: 'Ministry of Agrarian Development and Irrigation (MIDAGRI)',
      note: 'National agriculture, irrigation, and rural policy authority.',
      url: 'https://www.gob.pe/midagri',
    },
    {
      name: 'National Institute of Agrarian Innovation (INIA)',
      note: 'National agricultural research and innovation institute.',
      url: 'https://www.gob.pe/inia',
    },
    {
      name: 'National Agrarian Health Service (SENASA)',
      note: 'National plant and animal health authority.',
      url: 'https://www.gob.pe/senasa',
    },
    {
      name: 'International Potato Center (CIP)',
      note: 'CGIAR research center headquartered in Lima.',
      url: 'https://cipotato.org',
    },
  ],
  overview:
    "Peru's agriculture spans three sharply contrasting environments: an arid Pacific coast, the high Andean sierra, and the Amazon basin. Irrigated coastal valleys drive a booming agro-export sector in asparagus, grapes, avocados, and berries, while the Andes remain the smallholder heartland of potato, maize, and quinoa and the domain of alpaca and llama herding. Tropical coffee and cacao from the eastern slopes and jungle are important export and livelihood crops. Water access on the desert coast, altitude-driven crop diversity, and the divide between modern export agriculture and traditional highland farming are enduring structural features.",
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their reference year and dataset version.',
    'National definitions of farm, cultivated land, and livestock categories differ from those used elsewhere.',
    'A strong dualism between capital-intensive coastal export agriculture and subsistence highland farming makes national aggregates hard to interpret.',
    'Smallholder and informal highland production may be under-recorded.',
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
    'AG.LND.IRIG.AG.ZS',
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
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'sugarcane' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
