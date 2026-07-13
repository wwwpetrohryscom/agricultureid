import type { RegionProfile } from '@/types/region';

export const nouvelleAquitaine: RegionProfile = {
  regionId: 'nouvelle-aquitaine',
  slug: 'nouvelle-aquitaine',
  countryCode: 'FRA',
  countrySlug: 'france',
  name: 'Nouvelle-Aquitaine',
  adminLevel: 'Region',
  officialCode: 'FR-NAQ',
  climateContext:
    "A mild, moist oceanic (Cfb) climate along France's southwestern Atlantic seaboard, with warm summers and abundant, well-distributed rainfall.",
  agroecologicalZones: ['Cfb'],
  agriculturalLandContext:
    "France's largest region by area and a leading farm region, combining the sandy Landes and Adour plains, the Garonne valley and extensive livestock uplands.",
  majorCropSystems: [
    'Grain maize on the Adour and Garonne plains and the sandy Landes — a core French maize area, often irrigated',
    'Wine, including the internationally renowned Bordeaux (Gironde) vineyards and the Cognac vineyards of the Charentes',
    'Cereals, oilseeds and, locally, tobacco and vegetables',
    'Fruit and specialty crops in the river valleys',
  ],
  majorLivestockSystems: [
    'Beef and dairy cattle, including the Limousin beef breed of the central uplands',
    'Poultry, notably Label Rouge free-range and Landes birds, plus foie-gras ducks and geese in the southwest',
    'Sheep, including dairy sheep in the Pyrenees',
  ],
  irrigationContext:
    'Irrigation is significant for grain maize on the sandy Landes and in the Adour and Garonne basins, where summer water demand is high.',
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
      name: "Chambre régionale d'agriculture Nouvelle-Aquitaine",
      note: 'Regional chamber of agriculture; farm advisory services and technical references.',
    },
  ],
  dataCoverage:
    "Descriptive profile; subnational statistics for Nouvelle-Aquitaine are published by Agreste (Ministère de l'Agriculture) and are not reproduced numerically here.",
  sourceReferences: [
    {
      sourceId: 'ec-agri',
      citedFor: 'EU regional agriculture and market context',
    },
    { sourceId: 'fao', citedFor: 'Crop and livestock production context' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'grape' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'chickens' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code FR-NAQ.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'The region is very large and internally varied — Atlantic maize plains, prestige vineyards and livestock uplands — so regional totals blend distinct systems.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
