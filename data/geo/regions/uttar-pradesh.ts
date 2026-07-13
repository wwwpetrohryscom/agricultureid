import type { RegionProfile } from '@/types/region';

export const uttarPradesh: RegionProfile = {
  regionId: 'uttar-pradesh',
  slug: 'uttar-pradesh',
  countryCode: 'IND',
  countrySlug: 'india',
  name: 'Uttar Pradesh',
  alternativeNames: ['UP'],
  adminLevel: 'State',
  officialCode: 'IN-UP',
  climateContext:
    'Uttar Pradesh occupies the central Indo-Gangetic plain, with a hot dry summer, a July–September monsoon, and a cool winter. The drier west grades toward semi-arid conditions, while the east and the terai are more humid and subtropical.',
  agroecologicalZones: ['Cwa', 'BSh'],
  agriculturalLandContext:
    'A very large share of the state is fertile alluvial cropland farmed intensively by smallholders, with widespread double-cropping across the kharif (monsoon) and rabi (winter) seasons.',
  majorCropSystems: [
    'Rice–wheat rotation on the Gangetic alluvium',
    'Sugarcane — a leading producing state in India',
    'Pulses and gram',
    'Potatoes',
    'Maize and millets',
  ],
  majorLivestockSystems: [
    'Dairy (buffalo and cattle) — India’s leading milk-producing state',
    'Backyard and commercial poultry',
    'Goats',
  ],
  irrigationContext:
    'Cropping relies on canal and extensive tubewell irrigation across the Ganga–Yamuna plain, supplemented by monsoon rainfall.',
  officialInstitutions: [
    {
      name: 'Indian Council of Agricultural Research (ICAR)',
      note: 'National agricultural research system coordinating research and variety development.',
    },
    {
      name: 'Chandra Shekhar Azad University of Agriculture and Technology, Kanpur',
      note: 'A state agricultural university serving Uttar Pradesh.',
    },
    {
      name: 'Department of Agriculture, Government of Uttar Pradesh',
      note: 'State authority for agricultural administration and statistics.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational agricultural statistics for Uttar Pradesh are published by ICAR, the state agricultural universities, and the state Department of Agriculture (with national aggregates by FAO) and are not reproduced numerically here.',
  sourceReferences: [
    { sourceId: 'icar', citedFor: 'Crop and livestock systems context' },
    { sourceId: 'fao', citedFor: 'National agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'chickpea' },
    { type: 'livestock', slug: 'water-buffalo' },
  ],
  limitations: [
    'Administrative boundaries and the region code follow the official ISO 3166-2 system; this profile does not redraw them.',
    'Any agricultural statistics are dated and source-specific; where an official figure is not reproduced here, consult ICAR and the state Department of Agriculture directly.',
    'Descriptions of production leadership (e.g. sugarcane and milk) are qualitative; ranking depends on the year and reporting source.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
