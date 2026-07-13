import type { RegionProfile } from '@/types/region';

export const washington: RegionProfile = {
  regionId: 'washington',
  slug: 'washington',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'Washington',
  adminLevel: 'State',
  officialCode: 'US-WA',
  climateContext:
    'Washington splits sharply at the Cascades: a mild, warm-summer Mediterranean/oceanic west (Csb) and a dry interior ranging from cold semi-arid steppe (BSk) in the Columbia Basin to Mediterranean-influenced continental (Dsb) on the Palouse. The dry interior summers make irrigation and stored soil moisture decisive.',
  agroecologicalZones: ['Csb', 'BSk', 'Dsb'],
  agriculturalLandContext:
    'The irrigated Columbia Basin and the Yakima, Wenatchee, and Okanogan valleys concentrate high-value tree fruit, wine grapes, hops, and potatoes, while the Palouse in the southeast is premier dryland wheat country.',
  majorCropSystems: [
    'Irrigated tree fruit — apples (the leading state), sweet cherries, and pears',
    'Dryland wheat on the Palouse',
    'Wine grapes, hops, potatoes, and irrigated forage',
  ],
  majorLivestockSystems: [
    'Dairy in the lower Yakima Valley and western lowlands',
    'Cattle feeding and cow–calf',
  ],
  irrigationContext:
    'Irrigation is decisive east of the Cascades — the Columbia Basin Project and the Yakima River supply orchards, vineyards, and row crops — while the Palouse produces wheat on stored winter soil moisture.',
  officialInstitutions: [
    {
      name: 'Washington State Department of Agriculture (WSDA)',
      note: 'State department for agriculture, plant and animal health, and marketing.',
    },
    {
      name: 'Washington State University (WSU) Extension',
      note: 'Land-grant research and extension for tree fruit, wheat, and irrigated crops.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Washington are published by USDA NASS and the Washington State Department of Agriculture and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'usda-nass',
      citedFor: 'Official state agricultural statistics',
    },
    { sourceId: 'usda', citedFor: 'Federal agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'cherry' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'potato' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'The Köppen classification of the dry interior (BSk versus Mediterranean-influenced Ds types) varies between sources; the zones listed reflect the main agricultural districts.',
    'The Cascade Range divides the state into a mild, wetter west and a dry, irrigation-dependent interior that a statewide profile cannot fully separate.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
