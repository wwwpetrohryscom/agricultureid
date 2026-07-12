import type { CountryAgricultureProfile } from '@/types/geo';

export const mexico: CountryAgricultureProfile = {
  countryCode: 'MEX',
  slug: 'mexico',
  name: 'Mexico',
  region: 'Latin America & Caribbean',
  subregion: 'Mesoamerica',
  climateZones: [
    'Arid and semi-arid (north)',
    'Tropical wet (south and Gulf)',
    'Tropical savanna',
    'Subtropical highland (central plateau)',
  ],
  agroecologicalZones: [
    'Northwest irrigation districts (Sinaloa, Sonora)',
    'Central highland plateau (Bajío)',
    'Gulf and southern tropical lowlands',
    'Southern highlands (Chiapas, Oaxaca)',
  ],
  dominantCropSystems: [
    'Rainfed smallholder maize–bean (milpa) systems',
    'Irrigated wheat, maize, and horticulture in the northwest',
    'Export horticulture — tomato, chilli, berries, and avocado',
    'Coffee and sugarcane in the tropical south',
  ],
  majorLivestockSystems: [
    'Extensive beef cattle ranching in the arid north',
    'Backyard and intensive confined poultry',
    'Dairy in the central highlands and north',
    'Smallholder pigs and small ruminants',
  ],
  irrigationContext:
    'Irrigation is decisive for the commercial north and northwest, where large public irrigation districts support wheat and horticulture, while much of the centre and south remains rainfed and rainfall-variable.',
  agriculturalInstitutions: [
    {
      name: 'Secretaría de Agricultura y Desarrollo Rural (SADER)',
      note: 'Federal ministry of agriculture and rural development.',
      url: 'https://www.gob.mx/agricultura',
    },
    {
      name: 'Instituto Nacional de Investigaciones Forestales, Agrícolas y Pecuarias (INIFAP)',
      note: 'National institute for forestry, crop, and livestock research.',
      url: 'https://www.gob.mx/inifap',
    },
    {
      name: 'International Maize and Wheat Improvement Center (CIMMYT)',
      note: 'CGIAR maize and wheat research center, headquartered near Mexico City.',
      url: 'https://www.cimmyt.org',
    },
  ],
  overview:
    'Mexico combines a dualistic farm structure: rainfed smallholder maize and bean cultivation, rooted in Mesoamerican milpa traditions, alongside highly commercial irrigated grain and export-horticulture systems in the northwest. It is a leading exporter of fresh produce — including tomato, chilli, avocado, and berries — while remaining a major importer of feed grain. Coffee, sugarcane, and tropical crops anchor the wetter south, and extensive cattle ranching dominates the arid north.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their year and dataset version.',
    'National statistical definitions (of agricultural land, farm, and employment) differ from those of other countries, limiting strict cross-country comparison.',
    'National aggregates mask a sharp divide between commercial irrigated agriculture and rainfed subsistence farming.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CREL.MT',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.LND.IRIG.AG.ZS',
    'SP.RUR.TOTL.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'fao', citedFor: 'Global production and food-systems context' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    {
      sourceId: 'usda-fas',
      citedFor: 'Horticultural and grain trade estimates',
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
