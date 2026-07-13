import type { RegionProfile } from '@/types/region';

export const badenWurttemberg: RegionProfile = {
  regionId: 'baden-wurttemberg',
  slug: 'baden-wurttemberg',
  countryCode: 'DEU',
  countrySlug: 'germany',
  name: 'Baden-Württemberg',
  alternativeNames: ['Baden-Wurttemberg'],
  adminLevel: 'Land',
  officialCode: 'DE-BW',
  climateContext:
    'Baden-Württemberg ranges from the warm, sheltered Upper Rhine rift valley — one of the mildest parts of Germany — to the cold, high plateaus of the Black Forest and the Swabian Alb, giving a strong altitudinal contrast in growing season length.',
  agroecologicalZones: ['Cfb', 'Dfb'],
  agriculturalLandContext:
    'The warm Upper Rhine plain and Kraichgau support intensive arable, orchard and vineyard farming, while the cooler Swabian Alb, Black Forest and Allgäu foreland are dominated by grassland, forage and mixed livestock holdings that are typically small-scale.',
  majorCropSystems: [
    'Viticulture on the slopes of the Upper Rhine, Kaiserstuhl, Neckar and Tauber valleys — a leading German wine Land',
    'Top and stone fruit orchards (apples, cherries, plums) along the mild Rhine and around Lake Constance',
    'Winter wheat, barley and grain maize on the fertile Kraichgau and Rhine plain',
    'Field vegetables and asparagus in the warm Rhine valley',
    'Grassland and forage on the Swabian Alb, Black Forest and Allgäu',
  ],
  majorLivestockSystems: [
    'Dairy and beef cattle on the grassland of the Allgäu foreland, Black Forest and Swabian Alb',
    'Pig and poultry fattening on mixed holdings',
    'Extensive grazing that maintains the cultural landscapes of the uplands',
  ],
  irrigationContext:
    'Farming is mainly rainfed, with supplemental irrigation concentrated on the warm, free-draining soils of the Upper Rhine plain for vegetables, asparagus, orchards and hops.',
  officialInstitutions: [
    {
      name: 'Ministerium für Ernährung, Ländlichen Raum und Verbraucherschutz Baden-Württemberg (MLR)',
      note: 'Baden-Württemberg Ministry of Food, Rural Affairs and Consumer Protection.',
    },
    {
      name: 'Thünen Institute',
      note: 'Federal Research Institute for Rural Areas, Forestry and Fisheries.',
    },
    {
      name: 'Destatis',
      note: 'Federal Statistical Office of Germany; publishes agricultural statistics with the Land statistical offices.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Baden-Württemberg are published by the State Statistical Office (Statistisches Landesamt) and Destatis and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'wheat' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'crop', slug: 'maize' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'The Land’s agriculture is strongly differentiated by altitude, so warm-valley cropping and cool-upland grassland systems should not be averaged into a single representative pattern.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
