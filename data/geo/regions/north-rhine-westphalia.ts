import type { RegionProfile } from '@/types/region';

export const northRhineWestphalia: RegionProfile = {
  regionId: 'north-rhine-westphalia',
  slug: 'north-rhine-westphalia',
  countryCode: 'DEU',
  countrySlug: 'germany',
  name: 'North Rhine-Westphalia',
  alternativeNames: ['Nordrhein-Westfalen'],
  adminLevel: 'Land',
  officialCode: 'DE-NW',
  climateContext:
    'North Rhine-Westphalia has a mild temperate oceanic climate with ample year-round rainfall; the warm, fertile lowlands of the Lower Rhine and the Cologne Bay contrast with the cooler, wetter uplands of the Sauerland and Eifel.',
  agroecologicalZones: ['Cfb'],
  agriculturalLandContext:
    'Despite being Germany’s most populous and industrialised Land, it retains highly productive farmland on the loess soils of the Cologne–Aachen Börde and the Soest Börde, alongside grassland-dominated farming in the Münsterland and the low mountain ranges.',
  majorCropSystems: [
    'Winter wheat and barley on the loess Börde soils of the Cologne Bay and Soester Börde',
    'Sugar beet in the fertile Rhineland Börde',
    'Grain and silage maize for the intensive livestock sector',
    'Potatoes and field vegetables near urban markets',
    'Winter rapeseed as the principal oilseed',
  ],
  majorLivestockSystems: [
    'Intensive pig production concentrated in the sandy Münsterland (Borken, Coesfeld, Steinfurt)',
    'Dairy cattle on the grassland of the Münsterland and the Sauerland/Eifel uplands',
    'Poultry for meat and eggs alongside the pig sector',
  ],
  irrigationContext:
    'Agriculture is overwhelmingly rainfed; supplemental irrigation is limited to vegetables and lighter soils on the Lower Rhine.',
  officialInstitutions: [
    {
      name: 'Ministerium für Landwirtschaft und Verbraucherschutz des Landes Nordrhein-Westfalen',
      note: 'North Rhine-Westphalia Ministry of Agriculture and Consumer Protection.',
    },
    {
      name: 'Landwirtschaftskammer Nordrhein-Westfalen',
      note: 'Chamber of Agriculture for North Rhine-Westphalia (advisory and statutory body).',
    },
    {
      name: 'Destatis',
      note: 'Federal Statistical Office of Germany; publishes agricultural statistics with the Land statistical offices.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for North Rhine-Westphalia are published by the State Statistical Office (IT.NRW) and Destatis and are not reproduced numerically here.',
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
    { type: 'livestock', slug: 'cattle' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'maize' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'High urbanisation and competition for land make the Land’s agricultural profile spatially uneven, with intensive farming concentrated in the Börde and Münsterland districts.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
