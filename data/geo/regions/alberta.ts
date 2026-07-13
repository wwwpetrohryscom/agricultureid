import type { RegionProfile } from '@/types/region';

export const alberta: RegionProfile = {
  regionId: 'alberta',
  slug: 'alberta',
  countryCode: 'CAN',
  countrySlug: 'canada',
  name: 'Alberta',
  adminLevel: 'Province',
  officialCode: 'CA-AB',
  climateContext:
    'Cold continental to cold semi-arid climate with a short frost-free season; warm, dry chinook winds moderate the southern foothills, while the drier Palliser Triangle of the southeast is the province’s most moisture-limited zone.',
  agroecologicalZones: ['Dfb', 'BSk'],
  agriculturalLandContext:
    'Dryland grain on prairie chernozemic soils across the central and southern plains, combined with extensive foothills and prairie rangeland; Alberta is the heart of Canada’s cattle-feeding sector.',
  majorCropSystems: [
    'Wheat (spring and durum)',
    'Canola (oilseed rape)',
    'Barley (feed and malt)',
    'Field peas and other pulses',
  ],
  majorLivestockSystems: [
    'Beef cattle — cow-calf on foothills and prairie rangeland',
    'Large commercial feedlots (southern Alberta / “Feedlot Alley” around Lethbridge)',
  ],
  irrigationContext:
    'Southern Alberta holds Canada’s largest concentration of irrigation districts, drawing on the St. Mary, Bow, and Oldman river systems to support forages, specialty crops, and horticulture.',
  officialInstitutions: [
    {
      name: 'Statistics Canada',
      note: 'National statistical agency (Census of Agriculture, livestock and crop estimates).',
    },
    {
      name: 'Agriculture and Agri-Food Canada (AAFC)',
      note: 'Federal agriculture department.',
    },
    {
      name: 'Alberta Ministry of Agriculture and Irrigation',
      note: 'Provincial agriculture ministry.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics are published by Statistics Canada and Agriculture and Agri-Food Canada and are not reproduced numerically here.',
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Crop and livestock system context' },
    {
      sourceId: 'faostat',
      citedFor: 'National agricultural production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'barley' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (CA-AB).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'Canola is the commercial oilseed-rape crop; beef cattle numbers concentrate in the south.',
    'The semi-arid southeast (Palliser Triangle) is markedly drier than the central parkland.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
