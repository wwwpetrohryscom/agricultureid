import type { RegionProfile } from '@/types/region';

export const florida: RegionProfile = {
  regionId: 'florida',
  slug: 'florida',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'Florida',
  adminLevel: 'State',
  officialCode: 'US-FL',
  climateContext:
    'Florida is humid subtropical (Cfa) across the north and center and tropical savanna (Aw) in the south, with hot, wet summers, mild winters, and a long frost-free season that supports winter production. Periodic frost in the north and center still shapes where cold-sensitive crops are grown.',
  agroecologicalZones: ['Cfa', 'Aw'],
  agriculturalLandContext:
    'Sandy flatwoods and the organic muck soils of the Everglades Agricultural Area around Lake Okeechobee support distinctive high-value systems; large areas are also improved pasture for cattle.',
  majorCropSystems: [
    'Citrus — oranges (largely for juice) and grapefruit',
    'Sugarcane in the Everglades Agricultural Area',
    'Winter fresh-market vegetables (tomatoes, peppers, sweet corn) and strawberries',
  ],
  majorLivestockSystems: [
    'Beef cow–calf ranching on improved pasture — among the larger cow herds east of the Mississippi',
    'Dairy',
    'Poultry',
  ],
  irrigationContext:
    'High-value horticulture is widely irrigated — micro-irrigation on citrus and seepage irrigation on the muck soils of the Everglades Agricultural Area.',
  officialInstitutions: [
    {
      name: 'Florida Department of Agriculture and Consumer Services (FDACS)',
      note: 'State department for agriculture, food safety, and consumer services.',
    },
    {
      name: 'University of Florida Institute of Food and Agricultural Sciences (UF/IFAS) Extension',
      note: 'Land-grant research and extension for citrus, vegetables, and livestock.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Florida are published by USDA NASS and the Florida Department of Agriculture and Consumer Services and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'usda-nass',
      citedFor: 'Official state agricultural statistics',
    },
    { sourceId: 'usda', citedFor: 'Federal agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'grapefruit' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'tomato' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'Florida citrus output has fallen sharply since the mid-2000s owing to citrus greening (HLB), disease-management costs, and hurricanes; longstanding rankings can overstate current production.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
