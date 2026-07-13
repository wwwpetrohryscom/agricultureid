import type { RegionAgricultureProfile } from '@/types/geo';

/**
 * World Bank region groupings (names match the country-metadata `region` field
 * so profiles group automatically). `countryCodes` is filled at runtime from the
 * published country profiles.
 */
export const REGIONS: Omit<RegionAgricultureProfile, 'countryCodes'>[] = [
  {
    slug: 'east-asia-pacific',
    name: 'East Asia & Pacific',
    regionCode: 'EAS',
    overview:
      'A climatically diverse region spanning monsoon rice systems, temperate cereal and livestock production, and intensive horticulture, with some of the world’s largest agricultural producers.',
    keyLimitations: [
      'Groupings follow World Bank regional classifications, which are administrative, not agroecological.',
    ],
    sourceReferences: [
      { sourceId: 'worldbank', citedFor: 'Regional classification' },
    ],
    updatedAt: '2026-07-12',
  },
  {
    slug: 'europe-central-asia',
    name: 'Europe & Central Asia',
    regionCode: 'ECS',
    overview:
      'Temperate and continental systems dominated by cereals, oilseeds, livestock, and horticulture, with highly mechanised production in Western Europe and extensive systems across Central Asia.',
    keyLimitations: [
      'Groupings follow World Bank regional classifications, not agroecological zones.',
    ],
    sourceReferences: [
      { sourceId: 'worldbank', citedFor: 'Regional classification' },
    ],
    updatedAt: '2026-07-12',
  },
  {
    slug: 'latin-america-caribbean',
    name: 'Latin America & Caribbean',
    regionCode: 'LCN',
    overview:
      'From tropical export crops and vast grain–oilseed–cattle systems to Andean and Caribbean smallholder agriculture; a major global exporter of soybean, maize, coffee, and beef.',
    keyLimitations: [
      'Groupings follow World Bank regional classifications, not agroecological zones.',
    ],
    sourceReferences: [
      { sourceId: 'worldbank', citedFor: 'Regional classification' },
    ],
    updatedAt: '2026-07-12',
  },
  {
    slug: 'middle-east-north-africa',
    name: 'Middle East, North Africa, Afghanistan & Pakistan',
    regionCode: 'MEA',
    overview:
      'Water-limited systems where irrigation is decisive; cereals, dates, olives, and horticulture alongside significant food-import dependence. (This is the World Bank’s current regional grouping, which now includes Afghanistan and Pakistan.)',
    keyLimitations: [
      'Groupings follow World Bank regional classifications, not agroecological zones.',
    ],
    sourceReferences: [
      { sourceId: 'worldbank', citedFor: 'Regional classification' },
    ],
    updatedAt: '2026-07-12',
  },
  {
    slug: 'north-america',
    name: 'North America',
    regionCode: 'NAC',
    overview:
      'Highly mechanised, large-scale grain, oilseed, and livestock production, with advanced input use and strong export orientation.',
    keyLimitations: [
      'Groupings follow World Bank regional classifications, not agroecological zones.',
    ],
    sourceReferences: [
      { sourceId: 'worldbank', citedFor: 'Regional classification' },
    ],
    updatedAt: '2026-07-12',
  },
  {
    slug: 'south-asia',
    name: 'South Asia',
    regionCode: 'SAS',
    overview:
      'Densely populated monsoon systems with intensive rice and wheat cultivation, large livestock populations, and predominantly smallholder farming.',
    keyLimitations: [
      'Groupings follow World Bank regional classifications, not agroecological zones.',
    ],
    sourceReferences: [
      { sourceId: 'worldbank', citedFor: 'Regional classification' },
    ],
    updatedAt: '2026-07-12',
  },
  {
    slug: 'sub-saharan-africa',
    name: 'Sub-Saharan Africa',
    regionCode: 'SSF',
    overview:
      'Predominantly rainfed smallholder systems across a wide range of agroecologies, with staple roots, tubers, cereals, and pastoral livestock, and rapid demand growth.',
    keyLimitations: [
      'Groupings follow World Bank regional classifications, not agroecological zones.',
    ],
    sourceReferences: [
      { sourceId: 'worldbank', citedFor: 'Regional classification' },
    ],
    updatedAt: '2026-07-12',
  },
];
