import type { CountryAgricultureProfile } from '@/types/geo';

export const czechia: CountryAgricultureProfile = {
  countryCode: 'CZE',
  slug: 'czechia',
  name: 'Czechia',
  region: 'Europe & Central Asia',
  subregion: 'Central Europe',
  climateZones: ['Temperate oceanic-to-continental', 'Cooler montane uplands'],
  agroecologicalZones: [
    'Bohemian basin',
    'Moravian lowlands',
    'Bohemian-Moravian uplands',
  ],
  dominantCropSystems: [
    'Winter wheat and spring malting barley',
    'Oilseed rape and sugar beet on the lowlands',
    'Hops in the Saaz (Žatec) region',
    'Large-scale mechanised arable farms',
  ],
  majorLivestockSystems: ['Pig husbandry', 'Dairy and beef cattle', 'Poultry'],
  irrigationContext:
    'Agriculture is largely rainfed, with modest irrigation reserved for vegetables, orchards, hops, and vineyards in the drier lowlands.',
  agriculturalInstitutions: [
    {
      name: 'Crop Research Institute (VÚRV)',
      note: 'National public research institute for crop production and plant genetic resources at Prague-Ruzyně.',
      url: 'https://www.vurv.cz',
    },
    {
      name: 'Ministry of Agriculture of the Czech Republic',
      note: 'National agricultural policy and CAP implementation authority.',
    },
  ],
  overview:
    "Czechia's agriculture is built on large, highly mechanised arable farms — a structural legacy of twentieth-century collectivisation that left the country with some of the biggest average holdings in the European Union. Winter wheat, spring malting barley, oilseed rape and sugar beet dominate the fertile Bohemian and Moravian lowlands, while the historic Saaz (Žatec) region supplies hops to a deep national brewing tradition. Pig and cattle husbandry complement the cropping, and extensive uplands keep the country heavily forested. An EU member since 2004, its farm sector operates within the Common Agricultural Policy.",
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised, so each figure must be read with its year, unit, and dataset version.',
    'National definitions, survey methods, and coverage differ between countries, so cross-country comparisons should be made with care.',
    'Farm structure is dominated by large corporate and cooperative entities, which skews per-holding averages.',
    'Drought sensitivity of the rainfed lowlands drives year-to-year yield variability.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CROP.XD',
    'AG.PRD.LVSK.XD',
    'NV.AGR.TOTL.ZS',
    'AG.LND.FRST.ZS',
    'AG.CON.FERT.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'ec-agri', citedFor: 'EU Common Agricultural Policy context' },
    { sourceId: 'fao', citedFor: 'Production and food-balance context' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'livestock', slug: 'pigs' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
