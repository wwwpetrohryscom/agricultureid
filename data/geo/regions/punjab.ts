import type { RegionProfile } from '@/types/region';

export const punjab: RegionProfile = {
  regionId: 'punjab',
  slug: 'punjab',
  countryCode: 'IND',
  countrySlug: 'india',
  name: 'Punjab',
  adminLevel: 'State',
  officialCode: 'IN-PB',
  climateContext:
    'Punjab lies in the northwestern Indo-Gangetic plain, with hot summers, cool winters, and most rainfall arriving with the southwest monsoon between July and September. The southwest (Malwa) is semi-arid, while the northeast is a wetter, monsoon-influenced subtropical belt.',
  agroecologicalZones: ['BSh', 'Cwa'],
  agriculturalLandContext:
    'One of India’s most intensively farmed states: almost the entire cultivable area is cropped, very largely irrigated, and double-cropped through the wheat–rice cycle, leaving little fallow or natural vegetation.',
  majorCropSystems: [
    'Irrigated wheat–rice (paddy) rotation — the Green Revolution belt',
    'Basmati and non-basmati rice',
    'Cotton in the semi-arid Malwa belt',
    'Maize',
    'Sugarcane',
  ],
  majorLivestockSystems: [
    'Dairy (buffalo and crossbred cattle)',
    'Commercial poultry',
  ],
  irrigationContext:
    'Agriculture is overwhelmingly irrigated through an extensive canal network and dense tubewell pumping, and sustained groundwater over-extraction for paddy is a widely recognised concern.',
  officialInstitutions: [
    {
      name: 'Indian Council of Agricultural Research (ICAR)',
      note: 'National agricultural research system coordinating research and variety development.',
    },
    {
      name: 'Punjab Agricultural University (PAU), Ludhiana',
      note: 'State agricultural university; a lead institution of the Green Revolution.',
    },
    {
      name: 'Department of Agriculture and Farmers’ Welfare, Government of Punjab',
      note: 'State authority for agricultural administration and statistics.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational agricultural statistics for Punjab are published by ICAR, Punjab Agricultural University, and the state Department of Agriculture (with national aggregates by FAO) and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'icar',
      citedFor: 'Crop systems and agricultural research context',
    },
    { sourceId: 'fao', citedFor: 'National agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'maize' },
    { type: 'livestock', slug: 'water-buffalo' },
  ],
  limitations: [
    'Administrative boundaries and the region code follow the official ISO 3166-2 system; this profile does not redraw them.',
    'Any agricultural statistics are dated and source-specific; where an official figure is not reproduced here, consult ICAR and the state Department of Agriculture directly.',
    'Punjab’s intensive wheat–rice system is highly productive but is associated with falling water tables and paddy-residue management challenges; this profile describes the system qualitatively rather than assessing its sustainability.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
