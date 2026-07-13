import type { RegionProfile } from '@/types/region';

export const occitanie: RegionProfile = {
  regionId: 'occitanie',
  slug: 'occitanie',
  countryCode: 'FRA',
  countrySlug: 'france',
  name: 'Occitanie',
  adminLevel: 'Region',
  officialCode: 'FR-OCC',
  climateContext:
    'A dual climate — hot-summer Mediterranean (Csa) along the Languedoc-Roussillon coast and milder oceanic (Cfb) conditions inland toward Gascony and the Pyrenean and Massif Central uplands.',
  agroecologicalZones: ['Csa', 'Cfb'],
  agriculturalLandContext:
    "A southern French region pairing one of the world's largest contiguous vineyard areas on the Mediterranean plain with mixed cropping in the Garonne basin and pastoral uplands.",
  majorCropSystems: [
    'Wine — the Languedoc-Roussillon coast is one of the largest vineyard areas in the world by planted area',
    'Durum wheat for semolina and pasta, notably in the Lauragais',
    'Fruit — apples, peaches, apricots and melons — in the Garonne and Tarn valleys',
    'Sunflower and other cereals and oilseeds in the west',
  ],
  majorLivestockSystems: [
    'Sheep, including the ewe-milk flocks supplying Roquefort in the Aveyron and meat sheep on the Causses and in the Pyrenees',
    'Beef and dairy cattle in the wetter uplands',
  ],
  irrigationContext:
    'Irrigation is important for Mediterranean fruit, vegetables and vineyards and for summer crops in the Garonne valley, where dry summers limit rainfed cropping.',
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
      name: "Chambre régionale d'agriculture Occitanie",
      note: 'Regional chamber of agriculture; farm advisory services and technical references.',
    },
  ],
  dataCoverage:
    "Descriptive profile; subnational statistics for Occitanie are published by Agreste (Ministère de l'Agriculture) and are not reproduced numerically here.",
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
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'livestock', slug: 'sheep' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code FR-OCC.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'The region spans Mediterranean, oceanic and mountain zones, so regional totals blend distinct farming systems.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
