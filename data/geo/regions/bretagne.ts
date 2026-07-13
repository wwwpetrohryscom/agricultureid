import type { RegionProfile } from '@/types/region';

export const bretagne: RegionProfile = {
  regionId: 'bretagne',
  slug: 'bretagne',
  countryCode: 'FRA',
  countrySlug: 'france',
  name: 'Bretagne',
  alternativeNames: ['Brittany'],
  adminLevel: 'Region',
  officialCode: 'FR-BRE',
  climateContext:
    "A mild, wet oceanic (Cfb) climate on France's northwestern Atlantic peninsula, with cool summers, mild winters and few frosts.",
  agroecologicalZones: ['Cfb'],
  agriculturalLandContext:
    "Brittany is France's foremost intensive-livestock region, with a dense network of farms tightly integrated with feed, meat and dairy processing.",
  majorCropSystems: [
    'Forage crops — maize silage and grassland — grown to feed livestock',
    'Field vegetables of the northern "ceinture dorée" (golden belt): cauliflower, artichoke, shallot and early potato',
    'Cereals grown largely as animal feed',
  ],
  majorLivestockSystems: [
    "Pigs — Brittany is France's leading pig-producing region",
    'Poultry (broilers and eggs) in intensive confined systems',
    "Dairy cattle, a mainstay of the region's milk and cheese industry",
  ],
  irrigationContext:
    'Abundant, reliable rainfall means farming is overwhelmingly rainfed; irrigation is limited to some high-value vegetable ground.',
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
      name: "Chambre régionale d'agriculture de Bretagne",
      note: 'Regional chamber of agriculture; farm advisory services and technical references.',
    },
  ],
  dataCoverage:
    "Descriptive profile; subnational statistics for Bretagne are published by Agreste (Ministère de l'Agriculture) and are not reproduced numerically here.",
  sourceReferences: [
    {
      sourceId: 'ec-agri',
      citedFor: 'EU regional agriculture and market context',
    },
    { sourceId: 'fao', citedFor: 'Crop and livestock production context' },
  ],
  connections: [
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'crop', slug: 'cauliflower' },
    { type: 'crop', slug: 'maize' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code FR-BRE.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'The high density of confined pig and poultry units makes nutrient management and water quality significant regional considerations.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
