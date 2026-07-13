import type { RegionProfile } from '@/types/region';

export const madhyaPradesh: RegionProfile = {
  regionId: 'madhya-pradesh',
  slug: 'madhya-pradesh',
  countryCode: 'IND',
  countrySlug: 'india',
  name: 'Madhya Pradesh',
  adminLevel: 'State',
  officialCode: 'IN-MP',
  climateContext:
    'Madhya Pradesh, in central India, has a tropical-to-subtropical climate with a hot summer, a June–September monsoon, and a dry winter. The Malwa plateau and the Narmada valley form its principal farming belts.',
  agroecologicalZones: ['Aw', 'Cwa'],
  agriculturalLandContext:
    'Cropland covers much of the plateau and river valleys, with a strong monsoon (kharif) soybean season followed by a winter (rabi) wheat and gram season, partly rainfed and partly irrigated.',
  majorCropSystems: [
    'Soybean — a leading producing state and a major soybean hub',
    'Wheat',
    'Gram (chickpea) and other pulses',
    'Maize',
    'Cotton in the west',
  ],
  majorLivestockSystems: ['Dairy (cattle and buffalo)', 'Goats'],
  irrigationContext:
    'The monsoon soybean crop is largely rainfed, while the winter wheat and gram crops depend on canal, tank and tubewell irrigation and on residual soil moisture.',
  officialInstitutions: [
    {
      name: 'Indian Council of Agricultural Research (ICAR)',
      note: 'National research system; ICAR–Indian Institute of Soybean Research is based at Indore.',
    },
    {
      name: 'Jawaharlal Nehru Krishi Vishwa Vidyalaya, Jabalpur',
      note: 'A state agricultural university serving Madhya Pradesh.',
    },
    {
      name: 'Department of Farmer Welfare and Agriculture Development, Government of Madhya Pradesh',
      note: 'State authority for agricultural administration and statistics.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational agricultural statistics for Madhya Pradesh are published by ICAR, the state agricultural universities, and the state Department of Farmer Welfare and Agriculture Development (with national aggregates by FAO) and are not reproduced numerically here.',
  sourceReferences: [
    { sourceId: 'icar', citedFor: 'Crop systems and soybean research context' },
    { sourceId: 'fao', citedFor: 'National agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'chickpea' },
    { type: 'crop', slug: 'maize' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Administrative boundaries and the region code follow the official ISO 3166-2 system; this profile does not redraw them.',
    'Any agricultural statistics are dated and source-specific; where an official figure is not reproduced here, consult ICAR and the state Department of Farmer Welfare and Agriculture Development directly.',
    'Descriptions of production leadership (e.g. soybean) are qualitative; ranking depends on the year and reporting source.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
