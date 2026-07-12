import type { CountryAgricultureProfile } from '@/types/geo';

export const unitedStates: CountryAgricultureProfile = {
  countryCode: 'USA',
  slug: 'united-states',
  name: 'United States',
  region: 'North America',
  subregion: 'North America',
  climateZones: [
    'Humid continental',
    'Humid subtropical',
    'Mediterranean (California)',
    'Semi-arid (Great Plains)',
    'Arid (Southwest)',
  ],
  agroecologicalZones: [
    'Corn Belt (Upper Midwest)',
    'Great Plains wheat belt',
    'Mississippi Delta',
    'Central Valley of California',
    'Pacific Northwest',
  ],
  dominantCropSystems: [
    'Rainfed maize–soybean rotations across the Corn Belt',
    'Rainfed and irrigated wheat on the Great Plains',
    'Irrigated horticulture, tree nuts, and permanent crops in California',
    'Cotton and rice in the South and Mississippi Delta',
  ],
  majorLivestockSystems: [
    'Cow–calf ranching and cattle feedlot finishing',
    'Intensive confined broiler and layer poultry',
    'Confined swine concentrated in the Midwest',
    'Large-scale dairy',
  ],
  irrigationContext:
    'Irrigation is regionally decisive — extensive in the arid and semi-arid West (drawing on rivers and the Ogallala/High Plains aquifer) while eastern production remains largely rainfed.',
  agriculturalInstitutions: [
    {
      name: 'United States Department of Agriculture (USDA)',
      note: 'Federal department for agriculture, food, and rural policy.',
      url: 'https://www.usda.gov',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official U.S. agricultural statistics and the Census of Agriculture.',
      url: 'https://www.nass.usda.gov',
    },
    {
      name: 'USDA Agricultural Research Service (ARS)',
      note: 'Principal in-house research agency of the USDA.',
      url: 'https://www.ars.usda.gov',
    },
  ],
  overview:
    'The United States is one of the world’s largest and most mechanised agricultural producers and a leading exporter of maize, soybean, wheat, and cotton. Production is highly capitalised and specialised by region, from the rainfed maize–soybean systems of the Corn Belt to irrigated horticulture in California and extensive cattle ranching across the Great Plains and West. A dense infrastructure of federal research, extension, statistics, and crop-insurance institutions underpins the sector.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their year and dataset version.',
    'National statistical definitions (of agricultural land, farm, and employment) differ from those of other countries, limiting strict cross-country comparison.',
    'National aggregates conceal very large regional differences in climate, water availability, and farm structure.',
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
    'AG.CON.FERT.ZS',
    'AG.LND.IRIG.AG.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'fao', citedFor: 'Global production and food-systems context' },
    {
      sourceId: 'usda-nass',
      citedFor: 'Official U.S. agricultural statistics',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'International trade and production estimates',
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'cotton' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'chickens' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
