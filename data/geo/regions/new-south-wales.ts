import type { RegionProfile } from '@/types/region';

export const newSouthWales: RegionProfile = {
  regionId: 'new-south-wales',
  slug: 'new-south-wales',
  countryCode: 'AUS',
  countrySlug: 'australia',
  name: 'New South Wales',
  alternativeNames: ['NSW'],
  adminLevel: 'State',
  officialCode: 'AU-NSW',
  climateContext:
    'Ranges from humid subtropical on the north coast and warm-temperate on the tablelands to semi-arid across the western slopes and plains; rainfall is summer-dominant in the north and more uniform in the south.',
  agroecologicalZones: ['Cfa', 'Cfb', 'BSk'],
  agriculturalLandContext:
    'The western slopes and plains form a large wheat-sheep belt of dryland cropping and grazing, with irrigated cotton and rice along the Murrumbidgee, Namoi, and Gwydir valleys of the Murray-Darling Basin.',
  majorCropSystems: [
    'Wheat',
    'Barley and canola (oilseed rape)',
    'Cotton (Namoi / Gwydir, irrigated)',
    'Rice (Murrumbidgee, irrigated)',
    'Sorghum (northern summer cropping)',
  ],
  majorLivestockSystems: ['Sheep (wool and meat / prime lambs)', 'Beef cattle'],
  irrigationContext:
    'Murray-Darling Basin irrigation from the Murrumbidgee and northern river valleys underpins cotton and rice, while the wheat-sheep zone is predominantly rainfed.',
  officialInstitutions: [
    {
      name: 'Australian Bureau of Agricultural and Resource Economics and Sciences (ABARES)',
      note: 'National agricultural research and statistics agency.',
    },
    {
      name: 'Australian Bureau of Statistics (ABS)',
      note: 'National statistical agency (agricultural census and surveys).',
    },
    {
      name: 'NSW Department of Primary Industries and Regional Development',
      note: 'State primary industries department.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics are published by ABARES and the Australian Bureau of Statistics and are not reproduced numerically here.',
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Crop and livestock system context' },
    {
      sourceId: 'faostat',
      citedFor: 'National agricultural production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'livestock', slug: 'sheep' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (AU-NSW).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'Canola is the commercial oilseed-rape crop.',
    'Irrigated cotton and rice areas depend on highly variable Murray-Darling water allocations.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
