import type { RegionProfile } from '@/types/region';

export const hautsDeFrance: RegionProfile = {
  regionId: 'hauts-de-france',
  slug: 'hauts-de-france',
  countryCode: 'FRA',
  countrySlug: 'france',
  name: 'Hauts-de-France',
  adminLevel: 'Region',
  officialCode: 'FR-HDF',
  climateContext:
    "A mild, moist oceanic (Cfb) climate over flat, fertile loess (limon) plains in France's far north, with reliable rainfall and few extremes.",
  agroecologicalZones: ['Cfb'],
  agriculturalLandContext:
    "Deep, fertile silt soils make this one of France's most intensive arable regions, closely tied to the sugar, starch and food-processing industries.",
  majorCropSystems: [
    'Winter wheat as the dominant cereal',
    'Sugar beet — the region is a leading French beet and sugar area',
    'Potatoes, including large volumes for processing (fries and starch)',
    'Barley, oilseed rape, field peas, chicory and fibre flax (linen) in the Flanders and Somme belt',
  ],
  majorLivestockSystems: [
    'Dairy and beef cattle in the bocage of the Avesnois and Thiérache',
    'Pigs and some poultry',
  ],
  irrigationContext:
    'Reliable rainfall keeps most arable cropping rainfed; irrigation is limited and mainly supports potatoes and vegetables on lighter ground.',
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
      name: "Chambre régionale d'agriculture Hauts-de-France",
      note: 'Regional chamber of agriculture; farm advisory services and technical references.',
    },
  ],
  dataCoverage:
    "Descriptive profile; subnational statistics for Hauts-de-France are published by Agreste (Ministère de l'Agriculture) and are not reproduced numerically here.",
  sourceReferences: [
    {
      sourceId: 'ec-agri',
      citedFor: 'EU regional agriculture and market context',
    },
    { sourceId: 'fao', citedFor: 'Crop and livestock production context' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'flax' },
    { type: 'crop', slug: 'barley' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code FR-HDF.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'Output is closely tied to the sugar, starch and food-processing industries, so cropping patterns follow industrial contracts.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
