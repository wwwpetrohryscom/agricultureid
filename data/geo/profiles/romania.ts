import type { CountryAgricultureProfile } from '@/types/geo';

export const romania: CountryAgricultureProfile = {
  countryCode: 'ROU',
  slug: 'romania',
  name: 'Romania',
  region: 'Europe & Central Asia',
  subregion: 'Southeastern Europe',
  climateZones: [
    'Temperate continental',
    'Montane (Carpathians)',
    'Semi-arid (southeast / Dobruja)',
  ],
  agroecologicalZones: [
    'Wallachian and Moldavian plains',
    'Transylvanian plateau',
    'Carpathian mountains',
    'Danube Delta',
  ],
  dominantCropSystems: [
    'Maize and wheat on the Danubian and Moldavian plains',
    'Sunflower, barley, and rapeseed',
    'Vineyards and orchards',
    'Dualistic large-commercial and semi-subsistence farming',
  ],
  majorLivestockSystems: [
    'Extensive sheep and goat flocks',
    'Cattle for dairy and beef',
    'Smallholder pigs and poultry',
  ],
  irrigationContext:
    'Extensive irrigation schemes built on the southern plains have partly decayed, leaving much cropping rainfed and exposed to summer drought, with rehabilitation ongoing.',
  agriculturalInstitutions: [
    {
      name: 'Academy of Agricultural and Forestry Sciences "Gheorghe Ionescu-Șișești" (ASAS)',
      note: 'Coordinates national agricultural and forestry research institutes.',
      url: 'https://www.asas.ro',
    },
    {
      name: 'Ministry of Agriculture and Rural Development',
      note: 'National agricultural policy and CAP implementation authority.',
    },
  ],
  overview:
    'Romania has one of the largest agricultural areas in the European Union, spanning the fertile Danubian and Moldavian plains, the Transylvanian basin, and the Carpathian pastures. Maize and wheat anchor the arable sector alongside sunflower, barley and rapeseed, and the country sustains a deep-rooted viticulture. Its farm structure is strongly dualistic, pairing large commercial operations with a very large number of small, semi-subsistence family holdings. An EU member since 2007, Romania farms under the Common Agricultural Policy, though much of the once-extensive irrigation on the southern plains has fallen into disrepair.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised, so each figure must be read with its year, unit, and dataset version.',
    'National definitions, survey methods, and coverage differ between countries, so cross-country comparisons should be made with care.',
    'A very large number of small, semi-subsistence farms produce substantial own-consumption output that is hard to capture in official statistics.',
    'Degraded irrigation infrastructure raises exposure to summer drought.',
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
    'SP.RUR.TOTL.ZS',
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
