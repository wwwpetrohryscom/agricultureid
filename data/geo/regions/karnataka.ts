import type { RegionProfile } from '@/types/region';

export const karnataka: RegionProfile = {
  regionId: 'karnataka',
  slug: 'karnataka',
  countryCode: 'IND',
  countrySlug: 'india',
  name: 'Karnataka',
  adminLevel: 'State',
  officialCode: 'IN-KA',
  climateContext:
    'Karnataka ranges from the humid Western Ghats and coastal strip, through the transitional malnad, to a large semi-arid interior plateau. The Ghats receive very heavy monsoon rain, while much of the interior is dry and drought-prone.',
  agroecologicalZones: ['Am', 'Aw', 'BSh'],
  agriculturalLandContext:
    'A mix of rainfed plateau farming and irrigated command areas, with distinctive perennial plantation agriculture (coffee and spices) on the Western Ghats and extensive horticulture.',
  majorCropSystems: [
    'Finger millet (ragi) and other millets',
    'Maize',
    'Irrigated sugarcane',
    'Coffee and spices in the Western Ghats',
    'Pulses, cotton and horticulture',
  ],
  majorLivestockSystems: [
    'Dairy (cattle and buffalo)',
    'Sheep and goats',
    'Poultry',
  ],
  irrigationContext:
    'Rainfed dryland cropping predominates across the interior, with irrigation from the Krishna and Cauvery basins and tank systems supporting paddy, sugarcane and horticulture.',
  officialInstitutions: [
    {
      name: 'Indian Council of Agricultural Research (ICAR)',
      note: 'National agricultural research system coordinating research and variety development.',
    },
    {
      name: 'University of Agricultural Sciences, Bangalore',
      note: 'A state agricultural university; UAS institutions also serve Dharwad and Raichur.',
    },
    {
      name: 'Department of Agriculture, Government of Karnataka',
      note: 'State authority for agricultural administration and statistics.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational agricultural statistics for Karnataka are published by ICAR, the state agricultural universities, and the state Department of Agriculture (with national aggregates by FAO) and are not reproduced numerically here.',
  sourceReferences: [
    { sourceId: 'icar', citedFor: 'Crop and plantation systems context' },
    { sourceId: 'fao', citedFor: 'National agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'coffee' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Administrative boundaries and the region code follow the official ISO 3166-2 system; this profile does not redraw them.',
    'Any agricultural statistics are dated and source-specific; where an official figure is not reproduced here, consult ICAR and the state Department of Agriculture directly.',
    'The state combines Western Ghats plantation agroecology with a semi-arid interior; statewide descriptions necessarily generalise across them.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
