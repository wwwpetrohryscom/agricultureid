import type { RegionProfile } from '@/types/region';

export const grandEst: RegionProfile = {
  regionId: 'grand-est',
  slug: 'grand-est',
  countryCode: 'FRA',
  countrySlug: 'france',
  name: 'Grand Est',
  adminLevel: 'Region',
  officialCode: 'FR-GES',
  climateContext:
    'A semi-continental climate — oceanic (Cfb) in the west grading to warm-summer humid continental (Dfb) toward the Vosges and the Alsace plain, with colder winters than western France.',
  agroecologicalZones: ['Cfb', 'Dfb'],
  agriculturalLandContext:
    'A northeastern region combining the chalk plains of Champagne, the Lorraine plateau and the Rhine-valley plain of Alsace, supporting large-scale arable farming and prestige viticulture.',
  majorCropSystems: [
    'Wine — the Champagne vineyards of the Marne and the Alsace white-wine vineyards along the Rhine',
    'Cereals (wheat and barley) on the Champagne chalk (Champagne crayeuse) and the Lorraine plateau',
    'Sugar beet',
    'Oilseed rape and, locally, potatoes',
  ],
  majorLivestockSystems: [
    'Dairy and beef cattle in the Vosges and Lorraine, linked to mountain cheeses such as Munster',
    'Some mixed livestock on the wetter uplands',
  ],
  irrigationContext:
    'Arable cropping is largely rainfed; irrigation is limited and mainly serves specialty crops on lighter soils.',
  officialInstitutions: [
    {
      name: "Agreste — Ministère de l'Agriculture (SSP)",
      note: 'Official French agricultural statistics service; regional crop, livestock and land-use data.',
    },
    {
      name: "INRAE (Institut national de recherche pour l'agriculture, l'alimentation et l'environnement)",
      note: 'National agricultural, food and environmental research institute.',
    },
    {
      name: "Chambre régionale d'agriculture Grand Est",
      note: 'Regional chamber of agriculture; farm advisory services and technical references.',
    },
  ],
  dataCoverage:
    "Descriptive profile; subnational statistics for Grand Est are published by Agreste (Ministère de l'Agriculture) and are not reproduced numerically here.",
  sourceReferences: [
    {
      sourceId: 'ec-agri',
      citedFor: 'EU regional agriculture and market context',
    },
    { sourceId: 'fao', citedFor: 'Crop and livestock production context' },
  ],
  connections: [
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'barley' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code FR-GES.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'Prestige viticulture (Champagne, Alsace) coexists with commodity arable farming, so regional averages mask very different value structures.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
