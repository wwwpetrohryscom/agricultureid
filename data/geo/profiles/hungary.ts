import type { CountryAgricultureProfile } from '@/types/geo';

export const hungary: CountryAgricultureProfile = {
  countryCode: 'HUN',
  slug: 'hungary',
  name: 'Hungary',
  region: 'Europe & Central Asia',
  subregion: 'Central Europe',
  climateZones: ['Temperate continental (warm, dry summers)'],
  agroecologicalZones: [
    'Great Hungarian Plain (Alföld)',
    'Transdanubian hills',
    'Little Plain',
  ],
  dominantCropSystems: [
    'Maize and wheat on the Great Plain',
    'Sunflower and rapeseed oilseeds',
    'Seed-maize and sunflower-seed production',
    'Historic vineyards (Tokaj, Eger)',
  ],
  majorLivestockSystems: [
    'Intensive pig production',
    'Poultry',
    'Cattle, with heritage grey-cattle and Mangalica pig breeds',
  ],
  irrigationContext:
    'Most cropping is rainfed despite recurrent summer drought, with irrigation limited and concentrated along the Tisza and Danube and in horticulture.',
  agriculturalInstitutions: [
    {
      name: 'Hungarian University of Agriculture and Life Sciences (MATE)',
      note: 'Principal agricultural research and education institution, incorporating former NAIK institutes.',
      url: 'https://uni-mate.hu',
    },
    {
      name: 'HUN-REN Hungarian Research Network',
      note: 'National public research network coordinating state research institutes.',
      url: 'https://hun-ren.hu',
    },
    {
      name: 'Ministry of Agriculture',
      note: 'National agricultural policy and CAP implementation authority.',
    },
  ],
  overview:
    'Hungary is a classic Central European arable nation, its agriculture founded on the fertile loess and chernozem soils of the Great Hungarian Plain. Maize and wheat lead the cropping, complemented by sunflower, rapeseed and barley, and the country is well known for seed-maize and sunflower-seed production as well as historic wine regions such as Tokaj and Eger. Pig and poultry husbandry are the mainstays of livestock. An EU member since 2004, Hungary farms within the Common Agricultural Policy, with recurrent summer drought on the plains a defining management concern.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised, so each figure must be read with its year, unit, and dataset version.',
    'National definitions, survey methods, and coverage differ between countries, so cross-country comparisons should be made with care.',
    'Continental summer drought and limited irrigation drive marked year-to-year variability in crop yields.',
    'Farm structure spans large estates and many small holdings, complicating aggregate reporting.',
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
    'AG.CON.FERT.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'ec-agri', citedFor: 'EU Common Agricultural Policy context' },
    { sourceId: 'fao', citedFor: 'Production and food-balance context' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'grape' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
