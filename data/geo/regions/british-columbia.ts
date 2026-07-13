import type { RegionProfile } from '@/types/region';

export const britishColumbia: RegionProfile = {
  regionId: 'british-columbia',
  slug: 'british-columbia',
  countryCode: 'CAN',
  countrySlug: 'canada',
  name: 'British Columbia',
  alternativeNames: ['BC'],
  adminLevel: 'Province',
  officialCode: 'CA-BC',
  climateContext:
    'Highly varied climate shaped by mountains and the Pacific: mild, wet warm-summer conditions on the south coast, colder continental interior valleys and plateaus, and warm, dry summers in the sheltered Okanagan.',
  agroecologicalZones: ['Csb', 'Dfb', 'Dfc'],
  agriculturalLandContext:
    'Mountainous terrain limits arable land to river valleys and plateaus; the Fraser Valley concentrates dairy, poultry, and berries, while the warm, dry Okanagan is the province’s tree-fruit and wine centre.',
  majorCropSystems: [
    'Tree fruit — apples, cherries, peaches (Okanagan)',
    'Wine grapes (Okanagan / Similkameen)',
    'Berries and vegetables (Fraser Valley)',
    'Forage and hay',
  ],
  majorLivestockSystems: [
    'Dairy cattle (Fraser Valley)',
    'Poultry and eggs',
    'Beef cattle on interior rangeland',
  ],
  irrigationContext:
    'Irrigation is essential in the semi-arid Okanagan, Similkameen, and Thompson valleys for tree fruit, grapes, and forage; the wet coast relies mainly on natural rainfall.',
  officialInstitutions: [
    {
      name: 'Statistics Canada',
      note: 'National statistical agency (Census of Agriculture, crop and livestock estimates).',
    },
    {
      name: 'Agriculture and Agri-Food Canada (AAFC)',
      note: 'Federal agriculture department.',
    },
    {
      name: 'British Columbia Ministry of Agriculture and Food',
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
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'cherry' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (CA-BC).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'The dairy and poultry sectors operate under Canada’s supply-management system.',
    'Climate zones vary sharply over short distances; the coast, interior, and Okanagan differ markedly.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
