import type { RegionProfile } from '@/types/region';

export const normandie: RegionProfile = {
  regionId: 'normandie',
  slug: 'normandie',
  countryCode: 'FRA',
  countrySlug: 'france',
  name: 'Normandie',
  alternativeNames: ['Normandy'],
  adminLevel: 'Region',
  officialCode: 'FR-NOR',
  climateContext:
    'A mild, moist oceanic (Cfb) climate on the English Channel coast, favouring permanent grassland in the western bocage and arable cropping on the eastern chalk plains.',
  agroecologicalZones: ['Cfb'],
  agriculturalLandContext:
    'A region of two faces — grassland-based dairy and orchards in the western bocage, and intensive arable farming on the fertile Pays de Caux plateau in the east.',
  majorCropSystems: [
    'Cereals (wheat and barley) on the eastern chalk plains of the Pays de Caux',
    "Cider apples in the bocage, notably the Pays d'Auge (cider and Calvados)",
    "Fibre flax (linen) — the Caux and lower Seine are among the world's prime flax-fibre areas",
    'Sugar beet and oilseed rape',
  ],
  majorLivestockSystems: [
    "Dairy cattle, including the Normande breed, supplying butter, cream and cheeses such as Camembert, Livarot and Pont-l'Évêque",
    'Beef cattle on the western grasslands',
  ],
  irrigationContext:
    'Reliable Atlantic rainfall keeps grassland and arable cropping predominantly rainfed, with little need for irrigation.',
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
      name: "Chambre régionale d'agriculture de Normandie",
      note: 'Regional chamber of agriculture; farm advisory services and technical references.',
    },
  ],
  dataCoverage:
    "Descriptive profile; subnational statistics for Normandie are published by Agreste (Ministère de l'Agriculture) and are not reproduced numerically here.",
  sourceReferences: [
    {
      sourceId: 'ec-agri',
      citedFor: 'EU regional agriculture and market context',
    },
    { sourceId: 'fao', citedFor: 'Crop and livestock production context' },
  ],
  connections: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'flax' },
    { type: 'crop', slug: 'sugar-beet' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code FR-NOR.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'The grassland-and-orchard bocage west and the arable chalk east are distinct systems that regional totals combine.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
