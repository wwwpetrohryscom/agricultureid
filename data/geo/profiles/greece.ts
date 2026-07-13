import type { CountryAgricultureProfile } from '@/types/geo';

export const greece: CountryAgricultureProfile = {
  countryCode: 'GRC',
  slug: 'greece',
  name: 'Greece',
  region: 'Europe & Central Asia',
  subregion: 'Southern Europe',
  climateZones: [
    'Mediterranean',
    'Continental / montane interior',
    'Semi-arid (southeast and islands)',
  ],
  agroecologicalZones: [
    'Thessaly and Macedonian plains',
    'Mediterranean coastal and island zones',
    'Pindus and interior mountains',
  ],
  dominantCropSystems: [
    'Olive groves for oil and table olives',
    'Vineyards for wine and raisins',
    'Irrigated cotton and horticulture on the Thessaly plain',
    'Durum wheat',
    'Citrus orchards',
  ],
  majorLivestockSystems: [
    'Extensive sheep and goat grazing for meat and milk',
    'Feta and other dairy from small ruminants',
    'Some cattle and poultry',
  ],
  irrigationContext:
    'A relatively large share of cropland is irrigated — for cotton, horticulture, and citrus on plains such as Thessaly — and water scarcity is a growing constraint.',
  agriculturalInstitutions: [
    {
      name: 'Hellenic Agricultural Organisation "DEMETER" (ELGO-DIMITRA)',
      note: 'National body for agricultural research, training, and produce certification.',
      url: 'https://www.elgo.gr',
    },
    {
      name: 'Ministry of Rural Development and Food',
      note: 'National agricultural policy and CAP implementation authority.',
    },
  ],
  overview:
    "Greece is a mountainous Mediterranean country whose agriculture concentrates on permanent tree and vine crops and on irrigated lowland fields. Olives and olive oil, grapes for wine and raisins, and citrus define the classic Mediterranean landscape, while the Thessaly plain makes Greece the European Union's principal cotton producer alongside durum wheat and intensive horticulture. Sheep and goats grazed across hills and islands underpin a dairy tradition famed for feta cheese. An EU member since 1981, Greece farms under the Common Agricultural Policy, with fragmented smallholdings and summer water scarcity as defining features.",
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised, so each figure must be read with its year, unit, and dataset version.',
    'National definitions, survey methods, and coverage differ between countries, so cross-country comparisons should be made with care.',
    'Highly fragmented smallholdings and terraced island parcels, together with irrigation water scarcity, shape production and complicate measurement.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.LND.IRIG.AG.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CROP.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.LND.PRCP.MM',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'ec-agri', citedFor: 'EU Common Agricultural Policy context' },
    { sourceId: 'fao', citedFor: 'Production and food-balance context' },
  ],
  connections: [
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'orange' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
