import type { CountryAgricultureProfile } from '@/types/geo';

export const chile: CountryAgricultureProfile = {
  countryCode: 'CHL',
  slug: 'chile',
  name: 'Chile',
  region: 'Latin America & Caribbean',
  subregion: 'Andes',
  climateZones: [
    'Arid (Atacama, north)',
    'Mediterranean (central)',
    'Temperate oceanic (south)',
    'Alpine and cold (Andes and far south)',
  ],
  agroecologicalZones: [
    'Norte Chico transitional valleys',
    'Central Valley (Mediterranean core)',
    'Southern temperate zone',
    'Patagonia (Aysén and Magallanes)',
  ],
  dominantCropSystems: [
    'Irrigated fruit and viticulture in the Mediterranean Central Valley — table and wine grapes, pome and stone fruit',
    'Counter-seasonal fresh fruit and nuts grown for the Northern Hemisphere export market',
    'Rainfed and irrigated cereals in the wetter south',
    'Intensive vegetable horticulture near the central valleys',
  ],
  majorLivestockSystems: [
    'Confined poultry and pigs in the central zone',
    'Dairy and beef in the temperate south',
    'Extensive sheep grazing in Patagonia (Magallanes)',
  ],
  irrigationContext:
    'Irrigation is fundamental to the productive Mediterranean heartland, largely fed by snowmelt from the Andes, and multi-year drought has made water availability a central constraint.',
  agriculturalInstitutions: [
    {
      name: 'Instituto de Investigaciones Agropecuarias (INIA Chile)',
      note: 'National agricultural research institute.',
      url: 'https://www.inia.cl',
    },
    {
      name: 'Oficina de Estudios y Políticas Agrarias (ODEPA)',
      note: 'Agricultural studies and policy office; official sector statistics and analysis.',
      url: 'https://www.odepa.gob.cl',
    },
    {
      name: 'Servicio Agrícola y Ganadero (SAG)',
      note: 'Agricultural and livestock service; plant and animal health and phytosanitary control.',
      url: 'https://www.sag.gob.cl',
    },
  ],
  overview:
    'Chile is a major Southern Hemisphere fruit exporter, supplying table grapes, apples, cherries, berries, and tree nuts counter-seasonally to Northern Hemisphere markets, alongside an internationally recognised wine industry. Its long, climatically varied territory concentrates commercial production in the irrigated Mediterranean Central Valley, with cereals and dairy in the wetter south and extensive sheep grazing in Patagonia. Strict phytosanitary controls and Pacific and Atlantic trade agreements underpin the export orientation of the sector.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; always read them with their year and dataset version.',
    'National statistical definitions (of agricultural land, farm, and employment) differ from those of other countries, limiting strict cross-country comparison.',
    'A narrow, climatically diverse territory means national aggregates blend Mediterranean, temperate, and cold-zone systems with very different water constraints.',
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
    'AG.LND.IRIG.AG.ZS',
    'AG.LND.FRST.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'fao', citedFor: 'Global production and food-systems context' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-fas', citedFor: 'Fresh-fruit and wine trade estimates' },
  ],
  connections: [
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'livestock', slug: 'sheep' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
