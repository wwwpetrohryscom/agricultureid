import type { CountryAgricultureProfile } from '@/types/geo';

export const canada: CountryAgricultureProfile = {
  countryCode: 'CAN',
  slug: 'canada',
  name: 'Canada',
  region: 'North America',
  subregion: 'North America',
  climateZones: [
    'Humid continental',
    'Boreal / subarctic',
    'Cold semi-arid (Prairies)',
    'Temperate oceanic (Pacific coast)',
  ],
  agroecologicalZones: [
    'Canadian Prairies',
    'Great Lakes–St. Lawrence Lowlands',
    'Fraser Valley and Okanagan (British Columbia)',
    'Atlantic Canada',
  ],
  dominantCropSystems: [
    'Rainfed wheat, canola, barley, and pulses across the Prairies',
    'Maize and soybean in Ontario and Quebec',
    'Horticulture and tree fruit in British Columbia and the Niagara belt',
    'Short-season cereals and forages at the northern margin of cultivation',
  ],
  majorLivestockSystems: [
    'Extensive cow–calf beef cattle on the Prairies',
    'Supply-managed dairy concentrated in Ontario and Quebec',
    'Confined hog production',
    'Confined poultry under supply management',
  ],
  irrigationContext:
    'Most cropland is rainfed; irrigation is concentrated in the semi-arid southern Prairies (notably southern Alberta) and in intensive horticulture in British Columbia.',
  agriculturalInstitutions: [
    {
      name: 'Agriculture and Agri-Food Canada (AAFC)',
      note: 'Federal department responsible for agriculture and agri-food policy and research.',
      url: 'https://agriculture.canada.ca',
    },
    {
      name: 'Statistics Canada',
      note: 'National statistical agency; conducts the Census of Agriculture.',
      url: 'https://www.statcan.gc.ca',
    },
    {
      name: 'Canadian Food Inspection Agency (CFIA)',
      note: 'Food safety, plant, and animal health regulation.',
      url: 'https://inspection.canada.ca',
    },
  ],
  overview:
    'Canada is a major exporter of wheat, canola, barley, and pulses, with production dominated by the vast rainfed grain and oilseed systems of the Prairie provinces. A short but long-day growing season shapes crop choice, favouring cool-season cereals, oilseeds, and legumes, while livestock production centres on extensive beef cattle in the west and supply-managed dairy and poultry in the east. The sector is highly mechanised and strongly oriented toward international grain and oilseed markets.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their year and dataset version.',
    'National statistical definitions (of agricultural land, farm, and employment) differ from those of other countries, limiting strict cross-country comparison.',
    'A short frost-free season and the northern limit of cultivation constrain which systems the national aggregates represent.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.LND.ARBL.HA.PC',
    'AG.YLD.CREL.KG',
    'AG.PRD.CREL.MT',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.LND.FRST.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'fao', citedFor: 'Global production and food-systems context' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    {
      sourceId: 'usda-fas',
      citedFor: 'International grain and oilseed trade estimates',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'oats' },
    { type: 'crop', slug: 'lentil' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
