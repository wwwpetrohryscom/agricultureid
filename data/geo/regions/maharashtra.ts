import type { RegionProfile } from '@/types/region';

export const maharashtra: RegionProfile = {
  regionId: 'maharashtra',
  slug: 'maharashtra',
  countryCode: 'IND',
  countrySlug: 'india',
  name: 'Maharashtra',
  adminLevel: 'State',
  officialCode: 'IN-MH',
  climateContext:
    'Maharashtra spans the narrow humid Konkan coast, the high Western Ghats, and a large semi-arid Deccan plateau interior. Rainfall is heavy on the coast and Ghats but sharply lower and monsoon-dependent across the rain-shadow interior.',
  agroecologicalZones: ['Am', 'Aw', 'BSh'],
  agriculturalLandContext:
    'Farming is dominated by rainfed cultivation on the drought-prone Deccan plateau, alongside pockets of intensive irrigated agriculture in river valleys and canal command areas.',
  majorCropSystems: [
    'Cotton',
    'Irrigated sugarcane',
    'Soybean',
    'Pulses (pigeon pea and gram)',
    'Sorghum (jowar) and pearl millet (bajra)',
    'Grapes, onions and horticulture',
  ],
  majorLivestockSystems: [
    'Dairy (cattle and buffalo)',
    'Goats and sheep',
    'Poultry',
  ],
  irrigationContext:
    'A large share of the cropped area is rainfed and vulnerable to monsoon variability, with irrigation concentrated in sugarcane-growing canal command areas and lift-irrigation schemes.',
  officialInstitutions: [
    {
      name: 'Indian Council of Agricultural Research (ICAR)',
      note: 'National agricultural research system coordinating research and variety development.',
    },
    {
      name: 'Mahatma Phule Krishi Vidyapeeth, Rahuri',
      note: 'A state agricultural university serving the western Maharashtra plateau.',
    },
    {
      name: 'Department of Agriculture, Government of Maharashtra',
      note: 'State authority for agricultural administration and statistics.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational agricultural statistics for Maharashtra are published by ICAR, the state agricultural universities, and the state Department of Agriculture (with national aggregates by FAO) and are not reproduced numerically here.',
  sourceReferences: [
    { sourceId: 'icar', citedFor: 'Crop and livestock systems context' },
    { sourceId: 'fao', citedFor: 'National agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'onion' },
  ],
  limitations: [
    'Administrative boundaries and the region code follow the official ISO 3166-2 system; this profile does not redraw them.',
    'Any agricultural statistics are dated and source-specific; where an official figure is not reproduced here, consult ICAR and the state Department of Agriculture directly.',
    'The state combines very different agroecologies (coastal, Ghats, and rain-shadow plateau); statewide descriptions necessarily generalise across them.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
