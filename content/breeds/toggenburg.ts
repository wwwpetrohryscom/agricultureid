import type { BreedContent } from '@/types/content';

export const toggenburg: BreedContent = {
  id: 'toggenburg',
  slug: 'toggenburg',
  contentType: 'breed',
  title: 'Toggenburg',
  scientificName: 'Capra hircus',
  category: 'Goat breed',
  summary:
    'The Toggenburg is a Swiss dairy goat, often cited as one of the oldest registered goat breeds. It is recognised by its brown coat with distinctive white facial stripes, ears, legs, and rump.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Toggenburg takes its name from the Toggenburg region of the St. Gallen canton in Switzerland and is frequently described as one of the oldest registered dairy-goat breeds, with a long-established herd book. It is a hardy, medium-sized dairy goat exported widely for milk production.',
    },
    {
      type: 'paragraph',
      text: 'Its colour pattern is highly characteristic: a solid coat ranging from light fawn to dark chocolate, marked with white ears (often with a dark central spot), two white stripes down the face, white lower legs, and a white rump and tail area.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Goat (Capra hircus)' },
    { label: 'Breed type', value: 'Dairy' },
    { label: 'Origin', value: 'Switzerland (Toggenburg region)' },
    {
      label: 'Appearance',
      value: 'Brown coat with white facial stripes, ears, lower legs, and rump',
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
          text: 'The Toggenburg was developed in eastern Switzerland and is often cited as among the oldest goat breeds to have a formal herd book. It was exported to Britain, North America, and elsewhere, where it remains an established dairy-goat breed.',
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
            'Medium-sized with a solid fawn-to-chocolate coat and fixed white markings.',
            'White ears (frequently with a dark spot), two white facial stripes, white lower legs, and white rump.',
            'Erect ears and a straight or dished profile; may be horned or polled.',
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
          text: 'The Toggenburg is a productive dairy goat, valued for steady milk yield and a persistent lactation. As a breed of Alpine origin it is hardy and tolerates cool, temperate conditions well.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Milk yield and composition depend on nutrition, lactation stage, and management, and are described here only qualitatively.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'goats' },
  species: 'Goat (Capra hircus)',
  breedType: 'Dairy',
  originCountry: 'Switzerland',
  originRegion: 'Toggenburg, St. Gallen canton',
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
    'Medium-sized dairy goat with a solid fawn-to-chocolate coat and fixed white markings: white ears (often dark-spotted), two facial stripes, white lower legs, and a white rump. Erect ears; may be horned or polled.',
  productionCharacteristics:
    'A productive dairy goat valued for steady yield and a persistent lactation. Yield and composition are strongly influenced by feeding, lactation stage, and management.',
  climateAdaptation:
    'Hardy Alpine-origin dairy goat well suited to cool, temperate conditions, and adaptable to other climates with appropriate shelter and management.',
  managementContext:
    'Kept in dairy and smallholder systems internationally, from commercial dairies to homesteads. Nutrition, milking, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Originating in Switzerland and now distributed internationally, with established populations in the United Kingdom, North America, and other temperate dairy-goat regions.',
  connections: [
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; a Swiss dairy breed distributed internationally. Husbandry and regulation vary by country.',
  climateContext:
    'Temperate, cool-climate-tolerant dairy goat kept across a range of climates with management.',
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
      citedFor: 'General background on the Toggenburg goat',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Toggenburg (goat breed)',
    description:
      'The Toggenburg: a Swiss dairy goat, often called one of the oldest registered breeds, marked by a brown coat with white facial stripes, legs, and rump.',
    keywords: ['Toggenburg goat', 'dairy goat', 'goat breed', 'Swiss goat'],
  },
  structuredData: { article: true },
};
