import type { RegionProfile } from '@/types/region';

export const lowerSaxony: RegionProfile = {
  regionId: 'lower-saxony',
  slug: 'lower-saxony',
  countryCode: 'DEU',
  countrySlug: 'germany',
  name: 'Lower Saxony',
  alternativeNames: ['Niedersachsen'],
  adminLevel: 'Land',
  officialCode: 'DE-NI',
  climateContext:
    'Lower Saxony has a temperate oceanic climate with mild winters, cool summers and reliable year-round rainfall, moderated by the North Sea coast; the fertile loess Börde belt in the south contrasts with the sandy Geest and reclaimed marsh and moor soils of the north.',
  agroecologicalZones: ['Cfb'],
  agriculturalLandContext:
    'The Land combines highly fertile loess soils of the Hildesheim and Braunschweig Börde with extensive light sandy Geest soils and drained peat and marsh in the northwest, supporting one of Germany’s most intensive mixed cropping and livestock economies.',
  majorCropSystems: [
    'Potatoes for food, starch and seed — Lower Saxony is Germany’s leading potato Land',
    'Winter wheat, barley and rye across the loess Börde and Geest',
    'Sugar beet on the fertile southern Börde soils',
    'Grain and silage maize supporting the dense livestock and biogas sector',
    'Winter rapeseed as the main oilseed',
  ],
  majorLivestockSystems: [
    'Intensive pig production concentrated in the Weser-Ems region (Oldenburg, Cloppenburg, Vechta) — Germany’s pig-farming heartland',
    'Poultry for meat and eggs, also concentrated in the northwest',
    'Dairy and beef cattle on the grassland of the coastal marshes and northern Geest',
  ],
  irrigationContext:
    'Supplemental sprinkler irrigation is comparatively widespread by German standards on the light, drought-prone sandy Geest soils, above all for potatoes, sugar beet and vegetables.',
  officialInstitutions: [
    {
      name: 'Niedersächsisches Ministerium für Ernährung, Landwirtschaft und Verbraucherschutz (ML)',
      note: 'Lower Saxony Ministry of Food, Agriculture and Consumer Protection.',
    },
    {
      name: 'Landwirtschaftskammer Niedersachsen',
      note: 'Chamber of Agriculture for Lower Saxony (advisory and statutory body).',
    },
    {
      name: 'Destatis',
      note: 'Federal Statistical Office of Germany; publishes agricultural statistics with the Land statistical offices.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Lower Saxony are published by the State Statistical Office (LSN) and Destatis and are not reproduced numerically here.',
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
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'chickens' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sugar-beet' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'The very high livestock density of the Weser-Ems region raises nutrient-management and water-quality issues that are specific to that area and not evenly distributed across the Land.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
