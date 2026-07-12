import type { CountryAgricultureProfile } from '@/types/geo';

export const kenya: CountryAgricultureProfile = {
  countryCode: 'KEN',
  slug: 'kenya',
  name: 'Kenya',
  region: 'Sub-Saharan Africa',
  subregion: 'East Africa',
  climateZones: [
    'Tropical coast',
    'Arid and semi-arid lowlands (ASALs)',
    'Temperate central highlands',
    'Equatorial (altitude-moderated)',
  ],
  agroecologicalZones: [
    'High-potential tea and coffee highlands',
    'Rift Valley cereal and dairy zone',
    'Arid and semi-arid pastoral rangelands',
    'Coastal lowland cropping',
  ],
  dominantCropSystems: [
    'Smallholder rainfed maize, the dominant food staple, across the highlands and Rift Valley',
    'Tea grown in the cooler highlands, a leading export from both smallholders and estates',
    'Arabica coffee in the central highlands',
    'Export horticulture — cut flowers, vegetables and fruit — around the highlands and Rift Valley lakes',
    'Smallholder mixed cropping integrating staples, legumes and cash crops',
  ],
  majorLivestockSystems: [
    'Extensive pastoral and agro-pastoral cattle, goats, sheep and camels in the arid and semi-arid lands',
    'Smallholder dairy cattle in the highlands, often zero-grazing or mixed with cropping',
    'Smallholder poultry and small ruminants throughout the farmed areas',
  ],
  irrigationContext:
    'Irrigation is limited and concentrated in public schemes (such as Mwea for rice) and in export horticulture; the great majority of cropping is rainfed and exposed to erratic rainfall, especially in the arid and semi-arid lands.',
  agriculturalInstitutions: [
    {
      name: 'Kenya Agricultural and Livestock Research Organization (KALRO)',
      note: 'National coordinating body for crop and livestock research.',
      url: 'https://www.kalro.org',
    },
    {
      name: 'International Livestock Research Institute (ILRI)',
      note: 'CGIAR livestock research centre headquartered in Nairobi.',
      url: 'https://www.ilri.org',
    },
    {
      name: 'Agriculture and Food Authority (AFA)',
      note: 'State regulator for scheduled crops such as tea, coffee and horticulture.',
    },
  ],
  overview:
    'Kenyan agriculture is predominantly smallholder and rainfed, and it remains a backbone of the economy and of rural livelihoods. Farming is sharply shaped by altitude and rainfall: the cooler, wetter central highlands and Rift Valley support tea, coffee, maize and dairy, while the arid and semi-arid lowlands that make up most of the country are dominated by pastoralism. Tea and horticulture — cut flowers, vegetables and fruit — are leading export earners, whereas maize is the key food staple and a recurrent focus of food-security concern. Frequent droughts and variable rainfall make production volatile from one season to the next.',
  keyLimitations: [
    'Statistics are dated, versioned and periodically revised as new survey results arrive.',
    'National definitions and crop categories differ from those used elsewhere, limiting cross-country comparison.',
    'Heavy dependence on rainfed smallholder systems makes output highly sensitive to rainfall and drought.',
    'Pastoral production in the arid and semi-arid lands is inherently difficult to measure precisely.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'SP.RUR.TOTL.ZS',
    'AG.CON.FERT.ZS',
    'AG.LND.IRIG.AG.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'fao',
      citedFor: 'Production, land use and food-balance context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'tea' },
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'maize' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
