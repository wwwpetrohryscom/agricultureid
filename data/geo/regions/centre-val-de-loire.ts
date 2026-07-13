import type { RegionProfile } from '@/types/region';

export const centreValDeLoire: RegionProfile = {
  regionId: 'centre-val-de-loire',
  slug: 'centre-val-de-loire',
  countryCode: 'FRA',
  countrySlug: 'france',
  name: 'Centre-Val de Loire',
  adminLevel: 'Region',
  officialCode: 'FR-CVL',
  climateContext:
    'A mild oceanic (Cfb) climate with a slight continental influence over the open plains of the Beauce and the Loire valley.',
  agroecologicalZones: ['Cfb'],
  agriculturalLandContext:
    'Home to the Beauce, one of France\'s great cereal plains ("the granary of France"), the region is dominated by large, open-field arable farming.',
  majorCropSystems: [
    'Cereals — winter wheat and barley — across the Beauce and neighbouring plains',
    'Oilseed rape as the main break crop',
    'Wine in the Loire Valley (Sancerre, Touraine, Chinon and Vouvray)',
    'Maize, sunflower and seed and vegetable crops',
  ],
  majorLivestockSystems: [
    'Sheep in the Berry and on lighter ground',
    'Goats supplying the Loire Valley goat cheeses (such as Selles-sur-Cher and Sainte-Maure de Touraine)',
    'Some cattle',
  ],
  irrigationContext:
    'Irrigation from the underlying Beauce limestone aquifer supports maize and seed crops, and abstraction is actively managed to protect groundwater.',
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
      name: "Chambre régionale d'agriculture Centre-Val de Loire",
      note: 'Regional chamber of agriculture; farm advisory services and technical references.',
    },
  ],
  dataCoverage:
    "Descriptive profile; subnational statistics for Centre-Val de Loire are published by Agreste (Ministère de l'Agriculture) and are not reproduced numerically here.",
  sourceReferences: [
    {
      sourceId: 'ec-agri',
      citedFor: 'EU regional agriculture and market context',
    },
    { sourceId: 'fao', citedFor: 'Crop and livestock production context' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'sunflower' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code FR-CVL.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'Large-scale cereal cropping dominates land area, but Loire-valley wine and goat cheeses carry disproportionate value.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
