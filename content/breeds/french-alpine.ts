import type { BreedContent } from '@/types/content';

export const frenchAlpine: BreedContent = {
  id: 'french-alpine',
  slug: 'french-alpine',
  contentType: 'breed',
  title: 'French Alpine',
  scientificName: 'Capra hircus',
  alternativeNames: ['Alpine'],
  category: 'Goat breed',
  summary:
    'The French Alpine is a hardy, medium-to-large dairy goat of Alpine origin, valued for good milk yield, adaptability, and a wide range of coat-colour patterns described by traditional French terms.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The French Alpine is a dairy breed derived from goats of the French Alps and selected in France for milk production. It is a hardy, adaptable animal that thrives on varied terrain, and it has been exported internationally as a productive and robust dairy goat.',
    },
    {
      type: 'paragraph',
      text: 'The breed is notable for its diversity of coat colours and patterns, which French breeders describe with traditional names such as chamoisée, cou blanc, cou clair, sundgau, and pied. Alpines have erect ears and a straight facial profile, distinguishing them from the lop-eared, Roman-nosed Anglo-Nubian.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Goat (Capra hircus)' },
    { label: 'Breed type', value: 'Dairy' },
    { label: 'Origin', value: 'French Alps' },
    {
      label: 'Appearance',
      value: 'Medium-large, erect ears, straight face, many colour patterns',
    },
    { label: 'Primary use', value: 'Milk production' },
    {
      label: 'Conservation status',
      value: 'Not at risk (widely distributed internationally)',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'Selected in France from Alpine goat populations, the French Alpine was developed as a productive dairy breed and standardised in French herd books. It has since been exported widely, including to North America, where it is a mainstay of commercial dairy-goat production.',
        },
      ],
    },
    {
      id: 'physical-characteristics',
      heading: 'Physical characteristics',
      body: [
        {
          type: 'list',
          items: [
            'Medium-to-large frame with erect ears and a straight facial profile.',
            'Short coat occurring in many recognised colour patterns.',
            'Hardy and agile, well suited to varied and hilly terrain.',
          ],
        },
      ],
    },
    {
      id: 'production-and-management',
      heading: 'Production and management',
      body: [
        {
          type: 'paragraph',
          text: 'The French Alpine is selected for good milk yield and a long lactation, and is widely used in both purebred dairy herds and crossbreeding. Its hardiness and adaptability make it suited to a range of management systems.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Milk yield and composition depend on nutrition, lactation stage, genetics within the breed, and management, and are described here only in qualitative terms.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'goats' },
  species: 'Goat (Capra hircus)',
  breedType: 'Dairy',
  originCountry: 'France',
  originRegion: 'French Alps',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Breed recorded in the global inventory of livestock breeds.',
    },
  ],
  primaryUses: ['Milk production', 'Dairy crossbreeding'],
  physicalCharacteristics:
    'Medium-to-large dairy goat with erect ears, a straight facial profile, and a short coat in many recognised colour patterns (chamoisée, cou blanc, cou clair, sundgau, pied). Hardy and agile.',
  productionCharacteristics:
    'Selected for good milk yield and long lactation, used in purebred dairy herds and crossbreeding. Yield and composition are strongly influenced by feeding, lactation stage, within-breed genetics, and management.',
  climateAdaptation:
    'Hardy Alpine-origin dairy goat that adapts well to varied and hilly terrain and to temperate dairy systems, with appropriate shelter and management across other climates.',
  managementContext:
    'Kept in intensive and semi-intensive dairy systems and on smallholdings internationally. Nutrition, milking, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Originating in the French Alps and now widely distributed, with major populations in France and North America and a presence in many other dairy-goat regions.',
  connections: [
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; a French dairy breed distributed internationally. Husbandry and regulation vary by country.',
  climateContext:
    'Temperate Alpine-origin dairy goat, hardy and adaptable across a range of climates with management.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Milk yield and composition are highly management-dependent and are described only qualitatively here.',
    'FAO DAD-IS conservation status is assessed per national population; the not-at-risk assessment reflects broad international distribution rather than any single country.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Alpine goat',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'French Alpine (goat breed)',
    description:
      'The French Alpine: a hardy Alpine-origin dairy goat with erect ears and many coat-colour patterns, valued for good milk yield and adaptability.',
    keywords: ['French Alpine goat', 'Alpine goat', 'dairy goat', 'goat breed'],
  },
  structuredData: { article: true },
};
