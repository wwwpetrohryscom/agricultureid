import type { RegionProfile } from '@/types/region';

export const gujarat: RegionProfile = {
  regionId: 'gujarat',
  slug: 'gujarat',
  countryCode: 'IND',
  countrySlug: 'india',
  name: 'Gujarat',
  adminLevel: 'State',
  officialCode: 'IN-GJ',
  climateContext:
    'Gujarat is largely semi-arid to arid, with the driest conditions in Kutch and the Rann, a short southwest monsoon, and more assured rainfall in the south. The Saurashtra peninsula and the mainland plains form the main farming zones.',
  agroecologicalZones: ['BSh', 'BWh'],
  agriculturalLandContext:
    'Cropland is concentrated in Saurashtra and the central and southern plains, combining rainfed groundnut and cotton with irrigated wheat and horticulture; the arid northwest is dominated by pastoralism.',
  majorCropSystems: [
    'Cotton',
    'Groundnut',
    'Wheat',
    'Castor',
    'Pearl millet (bajra) and pulses',
    'Tobacco and horticulture',
  ],
  majorLivestockSystems: [
    'Dairy (buffalo and cattle) under the Amul cooperative model',
    'Pastoral cattle, buffalo and camels in the arid northwest',
  ],
  irrigationContext:
    'Groundnut and cotton are substantially rainfed, while the Sardar Sarovar (Narmada) canal network, wells and micro-irrigation support wheat, castor and horticulture.',
  officialInstitutions: [
    {
      name: 'National Dairy Development Board (NDDB), Anand',
      note: 'Anchors the cooperative dairy model; the Amul brand is marketed by the Gujarat Cooperative Milk Marketing Federation.',
    },
    {
      name: 'Anand Agricultural University',
      note: 'A state agricultural university; others include Junagadh, Navsari and Sardarkrushinagar Dantiwada.',
    },
    {
      name: 'Indian Council of Agricultural Research (ICAR)',
      note: 'National agricultural research system coordinating research and variety development.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational agricultural statistics for Gujarat are published by ICAR, the state agricultural universities, the state Department of Agriculture, and (for dairy) NDDB, with national aggregates by FAO, and are not reproduced numerically here.',
  sourceReferences: [
    { sourceId: 'icar', citedFor: 'Crop and livestock systems context' },
    { sourceId: 'fao', citedFor: 'National agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'wheat' },
    { type: 'livestock', slug: 'water-buffalo' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Administrative boundaries and the region code follow the official ISO 3166-2 system; this profile does not redraw them.',
    'Any agricultural statistics are dated and source-specific; where an official figure is not reproduced here, consult ICAR, NDDB, and the state Department of Agriculture directly.',
    'Castor and some horticultural crops are noted qualitatively; no state-level output figures are asserted here.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
