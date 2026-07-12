import type { CountryAgricultureProfile } from '@/types/geo';

export const argentina: CountryAgricultureProfile = {
  countryCode: 'ARG',
  slug: 'argentina',
  name: 'Argentina',
  region: 'Latin America & Caribbean',
  subregion: 'Southern Cone',
  climateZones: [
    'Temperate (Pampas)',
    'Humid subtropical (northeast)',
    'Semi-arid (west and Gran Chaco)',
    'Arid and cold (Patagonia)',
  ],
  agroecologicalZones: [
    'Pampas',
    'Gran Chaco',
    'Cuyo (Andean foothills)',
    'Patagonia',
  ],
  dominantCropSystems: [
    'Rainfed soybean, maize, wheat, and sunflower on the Pampas, widely under no-till',
    'Expanding rainfed grain and oilseed cropping in the northern Chaco',
    'Irrigated viticulture and horticulture in Cuyo (Mendoza, San Juan)',
    'Irrigated fruit in the northern Patagonian river valleys',
  ],
  majorLivestockSystems: [
    'Extensive grass-fed beef cattle on the Pampas',
    'Feedlot finishing of cattle',
    'Extensive sheep grazing in Patagonia',
    'Dairy in the central Pampas',
  ],
  irrigationContext:
    'The core Pampas cropping belt is essentially rainfed; irrigation is concentrated in the arid west (Cuyo viticulture) and the Patagonian valleys, where it is essential.',
  agriculturalInstitutions: [
    {
      name: 'Instituto Nacional de Tecnología Agropecuaria (INTA)',
      note: 'National institute for agricultural technology, research, and extension.',
      url: 'https://www.argentina.gob.ar/inta',
    },
    {
      name: 'Servicio Nacional de Sanidad y Calidad Agroalimentaria (SENASA)',
      note: 'National agri-food health and quality service.',
      url: 'https://www.argentina.gob.ar/senasa',
    },
    {
      name: 'Bolsa de Cereales de Buenos Aires',
      note: 'Grain exchange publishing widely used crop-progress and production estimates.',
      url: 'https://www.bolsadecereales.com',
    },
  ],
  overview:
    'Argentina is a leading exporter of soybean and its processed products, maize, wheat, sunflower, and beef, with production concentrated on the fertile temperate Pampas. The country was an early and widespread adopter of no-till farming, which underpins its rainfed grain and oilseed systems. Extensive grass-fed and feedlot cattle, Patagonian sheep, and irrigated viticulture in the arid west round out a sector strongly oriented toward export markets.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their year and dataset version.',
    'National statistical definitions (of agricultural land, farm, and employment) differ from those of other countries, limiting strict cross-country comparison.',
    'National output is highly sensitive to interannual rainfall variability on the Pampas and to shifting trade and macroeconomic policy.',
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
    'AG.CON.FERT.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'fao', citedFor: 'Global production and food-systems context' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    {
      sourceId: 'usda-fas',
      citedFor: 'International grain, oilseed, and beef trade estimates',
    },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
