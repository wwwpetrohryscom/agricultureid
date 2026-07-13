import type { CountryAgricultureProfile } from '@/types/geo';

export const brazil: CountryAgricultureProfile = {
  countryCode: 'BRA',
  slug: 'brazil',
  name: 'Brazil',
  region: 'Latin America & Caribbean',
  subregion: 'South America',
  climateZones: [
    'Tropical wet',
    'Tropical savanna (Cerrado)',
    'Semi-arid (Northeast Sertão)',
    'Humid subtropical (south)',
  ],
  agroecologicalZones: [
    'Cerrado (central savanna)',
    'Amazon basin',
    'Atlantic Forest coastal belt',
    'Southern subtropical plains and Pampa',
  ],
  dominantCropSystems: [
    'Large-scale rainfed soybean and maize, often double-cropped (safrinha), across the Cerrado and south',
    'Sugarcane for sugar and ethanol in the Center-South',
    'Arabica coffee in the southeastern highlands',
    'Rainfed cotton and tropical fruit',
  ],
  majorLivestockSystems: [
    'Extensive and semi-intensive beef cattle on pasture',
    'Integrated crop–livestock–forest systems',
    'Intensive confined poultry and swine in the south',
    'Dairy across the southeast and south',
  ],
  irrigationContext:
    'Production is overwhelmingly rainfed given generally abundant tropical rainfall; irrigation is important locally for horticulture, rice in the south, and fruit in the semi-arid Northeast river valleys.',
  agriculturalInstitutions: [
    {
      name: 'Brazilian Agricultural Research Corporation (Embrapa)',
      note: 'State agricultural research corporation; central to tropical-crop and Cerrado technology.',
      url: 'https://www.embrapa.br',
    },
    {
      name: 'Companhia Nacional de Abastecimento (CONAB)',
      note: 'National supply company; official crop production surveys and food-supply policy.',
      url: 'https://www.conab.gov.br',
    },
    {
      name: 'Instituto Brasileiro de Geografia e Estatística (IBGE)',
      note: 'National statistical institute; agricultural census and production surveys.',
      url: 'https://www.ibge.gov.br',
    },
  ],
  overview:
    'Brazil is a global agricultural powerhouse and among the largest exporters of soybean, sugar, coffee, beef, and poultry. The opening of the acidic Cerrado savanna to large-scale rainfed grain and oilseed farming, supported by tropical-adapted research, transformed the country into a leading soybean and maize producer, frequently double-cropping within a single season. Extensive pasture-based cattle, intensive southern poultry and swine, and tropical export crops such as coffee and sugarcane complete a highly diversified sector.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their year and dataset version.',
    'National statistical definitions (of agricultural land, farm, and employment) differ from those of other countries, limiting strict cross-country comparison.',
    'National totals span very different systems, from Amazon-frontier expansion to established southern mechanised farming, and land-use change is a significant environmental consideration.',
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
    'AG.LND.FRST.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'fao', citedFor: 'Global production and food-systems context' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    {
      sourceId: 'embrapa',
      citedFor: 'Tropical-crop research and agronomy context',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'International soybean, sugar, and meat trade estimates',
    },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'cotton' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
