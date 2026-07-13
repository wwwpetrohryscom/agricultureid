import type { CountryAgricultureProfile } from '@/types/geo';

export const portugal: CountryAgricultureProfile = {
  countryCode: 'PRT',
  slug: 'portugal',
  name: 'Portugal',
  region: 'Europe & Central Asia',
  subregion: 'Iberian Peninsula',
  climateZones: [
    'Mediterranean',
    'Atlantic temperate (north)',
    'Subtropical Atlantic (Azores and Madeira)',
  ],
  agroecologicalZones: [
    'Northern minifundio smallholdings',
    'Alentejo montado and plains',
    'Douro terraces',
    'Atlantic islands',
  ],
  dominantCropSystems: [
    'Olive groves and vineyards',
    'Cork-oak montado agro-silvo-pasture',
    'Almonds and irrigated horticulture in the Alentejo',
    'Processing tomato and Algarve citrus',
    'Maize and rice in irrigated valleys',
  ],
  majorLivestockSystems: [
    'Extensive beef cattle, sheep, and goats',
    'Montado-raised Iberian (Alentejo) pigs',
    'Dairy in the Atlantic north and the Azores',
  ],
  irrigationContext:
    'Irrigation is expanding in the dry south, anchored by the large Alqueva reservoir in the Alentejo, while the humid north remains largely rainfed.',
  agriculturalInstitutions: [
    {
      name: 'National Institute for Agricultural and Veterinary Research (INIAV)',
      note: 'State agricultural, food, and veterinary research institute.',
      url: 'https://www.iniav.pt',
    },
    {
      name: 'Ministry of Agriculture and Fisheries',
      note: 'National agricultural policy and CAP implementation authority.',
    },
  ],
  overview:
    "Portugal's agriculture is quintessentially Mediterranean across the centre and south and Atlantic in the north. Olive groves, vineyards — including the terraced Douro that yields port — cork-oak montado, and expanding almond and horticultural plantations define the drier interior, while processing tomatoes and Algarve citrus feed a strong export trade. The humid north is a land of small mixed and dairy holdings, and the Atlantic islands of the Azores and Madeira add pasture-based dairy and subtropical crops. An EU member since 1986, Portugal farms under the Common Agricultural Policy, with water availability the defining constraint of the south.",
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised, so each figure must be read with its year, unit, and dataset version.',
    'National definitions, survey methods, and coverage differ between countries, so cross-country comparisons should be made with care.',
    'Strong dualism between northern smallholdings and southern estates, plus the distinct Azores and Madeira island regions, limits the meaning of national averages.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.LND.IRIG.AG.ZS',
    'AG.PRD.CROP.XD',
    'AG.PRD.FOOD.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.LND.FRST.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'ec-agri', citedFor: 'EU Common Agricultural Policy context' },
    { sourceId: 'fao', citedFor: 'Production and food-balance context' },
  ],
  connections: [
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'orange' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
