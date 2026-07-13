import type { BreedContent } from '@/types/content';

export const angloNubian: BreedContent = {
  id: 'anglo-nubian',
  slug: 'anglo-nubian',
  contentType: 'breed',
  title: 'Anglo-Nubian',
  scientificName: 'Capra hircus',
  alternativeNames: ['Nubian'],
  category: 'Goat breed',
  summary:
    'The Anglo-Nubian is a large, lop-eared dual-purpose goat developed in England from British and lop-eared Asian and African goats. It is valued for rich, high-butterfat milk and tolerance of warm climates.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Anglo-Nubian was developed in nineteenth-century England by crossing native British goats with lop-eared goats of Indian (including Jamnapari-type), Middle-Eastern, and North African origin. The result is a large, striking breed with long pendulous ears and a strongly convex facial profile. In North America it is generally known simply as the Nubian.',
    },
    {
      type: 'paragraph',
      text: 'Although classed by some registries as a dairy breed and by others as dual-purpose, the Anglo-Nubian is best known for milk that is comparatively high in butterfat and protein rather than for high volume, and it is also used for meat. Its Asian and African ancestry contributes good tolerance of warm climates.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Goat (Capra hircus)' },
    { label: 'Breed type', value: 'Dual-purpose (dairy and meat)' },
    {
      label: 'Origin',
      value: 'England (from British and lop-eared Asian/African goats)',
    },
    {
      label: 'Appearance',
      value:
        'Large, long pendulous ears, convex "Roman" nose, short glossy coat',
    },
    {
      label: 'Milk character',
      value: 'Comparatively high butterfat and protein',
    },
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
          text: 'The breed arose in Britain from crosses between local goats and imported lop-eared goats from India, the Middle East, and North Africa, and was consolidated as the Anglo-Nubian. It was subsequently exported widely and is recognised in dairy-goat herd books internationally.',
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
            'Large-framed with a short, fine, glossy coat in a wide range of colours and patterns.',
            'Long, wide, pendulous ears that hang close to the head.',
            'Strongly convex ("Roman") facial profile, giving a distinctive head shape.',
          ],
        },
      ],
    },
    {
      id: 'production-and-adaptation',
      heading: 'Production and adaptation',
      body: [
        {
          type: 'paragraph',
          text: 'The Anglo-Nubian is prized for milk of comparatively high butterfat and protein, well suited to cheese and other products, though its milk volume tends to be lower than that of specialised Swiss-type breeds. It is also kept for meat, supporting its dual-purpose classification.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Reflecting its Asian and African ancestry, the breed generally tolerates warm conditions well. Milk yield and composition depend on nutrition, lactation stage, and management.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'goats' },
  species: 'Goat (Capra hircus)',
  breedType: 'Dual-purpose',
  originCountry: 'United Kingdom',
  originRegion: 'England',
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
  primaryUses: ['Milk production (high butterfat)', 'Meat', 'Crossbreeding'],
  physicalCharacteristics:
    'Large, short-coated dual-purpose goat with long, wide pendulous ears and a strongly convex "Roman" facial profile. Occurs in many colours and patterns; may be horned or polled.',
  productionCharacteristics:
    'Best known for milk that is comparatively high in butterfat and protein rather than for volume, and also raised for meat. Yield and composition are strongly influenced by feeding, lactation stage, and management.',
  climateAdaptation:
    'Carries lop-eared Asian and African ancestry associated with good tolerance of warm and hot climates, while remaining adaptable to temperate dairy systems with appropriate management.',
  managementContext:
    'Kept in dairy, dual-purpose, and smallholder systems worldwide, from specialised dairies to homesteads. Nutrition, milking, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Developed in England and now widely distributed, with large populations in the United Kingdom, the United States (as the Nubian), and many warm-climate regions of Africa, Asia, and the Americas.',
  connections: [
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'silvopasture' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; an English breed distributed internationally, with strong representation in warm climates. Husbandry and regulation vary by country.',
  climateContext:
    'Adaptable dual-purpose goat with notable tolerance of warm and hot conditions given adequate management.',
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
      citedFor: 'General background on the Anglo-Nubian (Nubian) goat',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Anglo-Nubian (goat breed)',
    description:
      'The Anglo-Nubian (Nubian): a large lop-eared, Roman-nosed dual-purpose goat known for high-butterfat milk and good tolerance of warm climates.',
    keywords: ['Anglo-Nubian', 'Nubian goat', 'dairy goat', 'goat breed'],
  },
  structuredData: { article: true },
};
