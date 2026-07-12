import type { CountryAgricultureProfile } from '@/types/geo';

export const ukraine: CountryAgricultureProfile = {
  countryCode: 'UKR',
  slug: 'ukraine',
  name: 'Ukraine',
  region: 'Europe & Central Asia',
  subregion: 'Eastern Europe',
  climateZones: ['Temperate continental', 'Semi-arid steppe (south)'],
  agroecologicalZones: [
    'Polissia mixed woodland (north)',
    'Forest-steppe',
    'Steppe',
  ],
  dominantCropSystems: [
    'Rainfed winter wheat and barley on chernozem black soils',
    'Maize in the forest-steppe',
    'Sunflower and rapeseed across the steppe',
    'Sugar beet in the central belt',
  ],
  majorLivestockSystems: [
    'Dairy and beef cattle',
    'Intensive pig and poultry production',
    'Smallholder household livestock',
  ],
  irrigationContext:
    'Farming is overwhelmingly rainfed on moisture-retentive black soils, with irrigation historically concentrated in the semi-arid south around the lower Dnipro.',
  agriculturalInstitutions: [
    {
      name: 'National Academy of Agrarian Sciences of Ukraine (NAAS)',
      note: 'Coordinates the state network of agricultural research institutes.',
      url: 'https://naas.gov.ua',
    },
    {
      name: 'Ministry of Agrarian Policy and Food of Ukraine',
      note: 'National agricultural policy, land, and food-security authority.',
    },
  ],
  overview:
    "Ukraine farms some of the world's most fertile chernozem black-earth soils, spread across its forest-steppe and steppe belts, and ranks among the leading global exporters of grain and oilseeds. Winter wheat, maize, barley, sunflower and rapeseed dominate a largely rainfed, highly mechanised cropping sector organised around both large agroholdings and smallholder household plots. As a major supplier of wheat, maize and sunflower oil shipped through Black Sea ports, the country occupies an outsized place in world food security. It is an EU candidate country rather than a member, so its agriculture lies outside the Common Agricultural Policy.",
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised, so each figure must be read with its year, unit, and dataset version.',
    'National definitions, survey methods, and coverage differ between countries, so cross-country comparisons should be made with care.',
    "Russia's full-scale invasion since 2022 has disrupted production, exports, and statistical collection, and occupied or mined farmland further complicates coverage.",
    'A substantial share of output comes from informal household plots that are difficult to measure precisely.',
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
    {
      sourceId: 'fao',
      citedFor: 'Production, trade, and food-balance context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'barley' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
