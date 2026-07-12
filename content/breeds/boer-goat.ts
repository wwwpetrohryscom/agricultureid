import type { BreedContent } from '@/types/content';

export const boerGoat: BreedContent = {
  id: 'boer-goat',
  slug: 'boer-goat',
  contentType: 'breed',
  title: 'Boer',
  scientificName: 'Capra hircus',
  category: 'Goat breed',
  summary:
    'The Boer is a South African meat goat known for rapid growth, heavy muscling, and a distinctive white body with a red-brown head. It is one of the most widely used specialised meat-goat breeds internationally.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Boer goat was developed in South Africa, principally in the Eastern Cape, where indigenous goats were selected over generations for meat production, conformation, and fertility. Its name derives from the Afrikaans word for farmer. It is now regarded as one of the premier specialised meat-goat breeds and has been exported widely for both purebred production and crossbreeding.',
    },
    {
      type: 'paragraph',
      text: 'Boer goats are valued for fast growth, a well-muscled carcass, hardiness, and a comparatively extended breeding season. They are commonly used as terminal sires over local or dairy-type does to improve the growth and carcass characteristics of meat kids.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Goat (Capra hircus)' },
    { label: 'Breed type', value: 'Meat' },
    { label: 'Origin', value: 'South Africa (Eastern Cape)' },
    {
      label: 'Appearance',
      value: 'White body with a red-brown head, pendulous ears, Roman nose',
    },
    {
      label: 'Primary use',
      value: 'Meat production and terminal crossbreeding',
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
          text: 'The Boer was developed in South Africa from indigenous goats selected specifically for meat, growth, and a robust, well-muscled frame. Dedicated breed societies later standardised the type and maintain herd books for purebred animals.',
        },
        {
          type: 'paragraph',
          text: 'From its southern African origin the breed was exported internationally in the late twentieth century and rapidly became a foundation breed for commercial meat-goat production and crossbreeding in many countries.',
        },
      ],
    },
    {
      id: 'physical-characteristics',
      heading: 'Physical characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Boer goats are large, deep-bodied, and heavily muscled. The typical colour pattern is a white body with a red to brown head, often with a white blaze.',
        },
        {
          type: 'list',
          items: [
            'Convex ("Roman") facial profile with broad, pendulous ears.',
            'Both sexes are usually horned, with a strong, deep frame.',
            'Selected for meat conformation and a robust constitution.',
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
          text: 'The breed is noted qualitatively for rapid growth, good carcass muscling and yield, high fertility, and a relatively long breeding season that supports flexible kidding schedules. Bucks are widely used as terminal sires over does of other breeds to raise the growth and carcass quality of crossbred meat kids.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Reported performance depends heavily on nutrition, management, parasite control, and environment, and varies widely between systems and regions. Figures quoted by breeders and registries are not reproduced here.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'goats' },
  species: 'Goat (Capra hircus)',
  breedType: 'Meat',
  originCountry: 'South Africa',
  originRegion: 'Eastern Cape',
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
  primaryUses: ['Meat production', 'Terminal sire in meat-goat crossbreeding'],
  physicalCharacteristics:
    'Large, deep-bodied, and heavily muscled, typically white with a red-to-brown head and a white blaze. Convex facial profile, broad pendulous ears, and usually horned in both sexes.',
  productionCharacteristics:
    'Noted qualitatively for rapid growth, good carcass yield and muscling, high fertility, and a comparatively long breeding season. Widely used as a terminal sire to improve crossbred meat kids; specific performance is highly management- and environment-dependent.',
  climateAdaptation:
    'Originated in semi-arid to subtropical southern Africa and tolerates heat and extensive, browse-based rangeland systems. Like all goats it performs best with adequate shelter, forage or browse, and clean water.',
  managementContext:
    'Kept in extensive rangeland, semi-intensive, and intensive meat systems as well as on smallholdings, commonly on browse and pasture and within structured crossbreeding programmes. Health, parasite, and welfare management follow local veterinary guidance.',
  geographicDistribution:
    'Exported widely from South Africa and now raised across Africa, the Americas (notably the United States), Australia, and parts of Asia and Europe, both as a purebred and as a crossing sire.',
  connections: [
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; a South African breed now distributed across many countries. Husbandry, regulation, and conservation status vary by country.',
  climateContext:
    'Adapted to semi-arid and subtropical rangeland but raised across a range of climates with appropriate management.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Performance figures (growth, carcass, fertility) are highly system- and management-dependent and are described only qualitatively here.',
    'FAO DAD-IS conservation status is assessed per national population; the not-at-risk assessment reflects the breed’s broad international distribution rather than any single country.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Boer goat',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Boer (goat breed)',
    description:
      'The Boer goat: a South African meat breed with a white body and red-brown head, valued for rapid growth, muscling, and use as a terminal crossbreeding sire.',
    keywords: ['Boer goat', 'meat goat', 'goat breed', 'terminal sire'],
  },
  structuredData: { article: true },
};
