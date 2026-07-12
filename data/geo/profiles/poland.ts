import type { CountryAgricultureProfile } from '@/types/geo';

export const poland: CountryAgricultureProfile = {
  countryCode: 'POL',
  slug: 'poland',
  name: 'Poland',
  region: 'Europe & Central Asia',
  subregion: 'Central Europe',
  climateZones: [
    'Temperate transitional maritime-continental',
    'Cooler montane (Carpathian south)',
  ],
  agroecologicalZones: [
    'North European lowland plain',
    'Carpathian and Sudeten foothills',
  ],
  dominantCropSystems: [
    'Mixed cereal and root cropping (wheat, rye, triticale, barley)',
    'Potatoes and sugar beet',
    'Oilseed rape',
    'Intensive apple and fruit orchards',
  ],
  majorLivestockSystems: [
    'Intensive pig production',
    'Dairy and beef cattle',
    'Large-scale poultry',
  ],
  irrigationContext:
    'Cropping is predominantly rainfed, with irrigation limited and used mainly to supplement orchards and field vegetables during dry spells.',
  agriculturalInstitutions: [
    {
      name: 'Institute of Soil Science and Plant Cultivation (IUNG-PIB)',
      note: 'National soil, fertilisation, and crop-production research institute at Puławy.',
      url: 'https://www.iung.pl',
    },
    {
      name: 'Ministry of Agriculture and Rural Development',
      note: 'National agricultural policy and CAP implementation authority.',
    },
  ],
  overview:
    "Poland has one of the largest and most diversified farm sectors in Central Europe, worked by a dense fabric of small and medium family farms across the glacial lowland plains. Cereals — wheat, rye, triticale and barley — share the land with potatoes, sugar beet and oilseed rape, while the country is the European Union's leading apple grower and a major producer of pork and poultry. Soils are frequently light and acidic, making liming and balanced fertilisation long-standing management priorities. An EU member since 2004, Poland farms under the Common Agricultural Policy's direct payments and rural-development programmes.",
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised, so each figure must be read with its year, unit, and dataset version.',
    'National definitions, survey methods, and coverage differ between countries, so cross-country comparisons should be made with care.',
    'A very large number of small family holdings and household production makes structural and output reporting challenging.',
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
    'SL.AGR.EMPL.ZS',
    'AG.CON.FERT.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'ec-agri', citedFor: 'EU Common Agricultural Policy context' },
    { sourceId: 'fao', citedFor: 'Production and food-balance context' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'apple' },
    { type: 'livestock', slug: 'pigs' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
