import type { RegionProfile } from '@/types/region';

export const greaterPoland: RegionProfile = {
  regionId: 'greater-poland',
  slug: 'greater-poland',
  countryCode: 'POL',
  countrySlug: 'poland',
  name: 'Greater Poland',
  alternativeNames: ['Greater Poland Voivodeship', 'Wielkopolskie'],
  adminLevel: 'Voivodeship',
  officialCode: 'PL-30',
  climateContext:
    'Greater Poland, in the west-central lowlands around Poznań, has one of the mildest and driest climates in the country, with a relatively long growing season but low rainfall that makes it comparatively drought-prone.',
  agroecologicalZones: ['Cfb', 'Dfb'],
  agriculturalLandContext:
    'The gently rolling glacial plain carries a high share of arable land, farmed by relatively large and well-capitalised holdings, making Greater Poland one of the country’s most productive and intensively cropped agricultural regions.',
  majorCropSystems: [
    'Cereals — wheat, triticale, barley and rye — as the backbone of the arable rotation',
    'Sugar beet on the better soils, supporting a strong processing sector',
    'Potatoes, including for starch and feed',
    'Grain and silage maize and oilseed rape',
    'Forage crops linked to the intensive livestock sector',
  ],
  majorLivestockSystems: [
    'Pigs — Greater Poland holds Poland’s largest pig herd and is the centre of national pig production',
    'Dairy and beef cattle on mixed farms',
    'Poultry for meat and eggs',
  ],
  irrigationContext:
    'Cropping is predominantly rainfed, and the region’s low rainfall and falling groundwater levels make it one of the more drought-exposed parts of Poland, raising interest in water retention rather than large-scale irrigation.',
  officialInstitutions: [
    {
      name: 'Wielkopolski Ośrodek Doradztwa Rolniczego (WODR)',
      note: 'Greater Poland Agricultural Advisory Centre, Poznań.',
    },
    {
      name: 'GUS (Główny Urząd Statystyczny)',
      note: 'Statistics Poland — the central statistical office.',
    },
    {
      name: 'IUNG-PIB',
      note: 'Institute of Soil Science and Plant Cultivation, Puławy (national research institute).',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Greater Poland are published by Statistics Poland (GUS) and its regional office and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'ec-agri',
      citedFor:
        'EU Common Agricultural Policy framework and Eurostat regional farm statistics',
    },
    {
      sourceId: 'fao',
      citedFor: 'Global crop and livestock production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'triticale' },
    { type: 'crop', slug: 'potato' },
    { type: 'livestock', slug: 'pigs' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'The concentration of pig production creates localised nutrient-management pressures, and low rainfall makes yields sensitive to drought years rather than being stable from season to season.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
