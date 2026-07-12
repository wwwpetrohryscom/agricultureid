import type { BreedContent } from '@/types/content';

export const rambouillet: BreedContent = {
  id: 'rambouillet',
  slug: 'rambouillet',
  contentType: 'breed',
  title: 'Rambouillet',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Wool',
  originCountry: 'France',
  originRegion: 'Rambouillet, developed from imported Spanish Merinos',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  summary:
    'The Rambouillet is a large fine-wool sheep breed developed in France from Spanish Merinos, sometimes called the French Merino; it became a foundation of range sheep production in the western United States.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Rambouillet is a fine-wool breed descended from Spanish Merinos imported to the royal farm at Rambouillet in France in the late eighteenth century. Developed into a larger-framed fine-wool sheep, it is sometimes referred to as the French Merino.',
    },
    {
      type: 'paragraph',
      text: 'Exported to other countries, the Rambouillet became especially important in the United States, where it is a foundation breed of the extensive range flocks of the western states, valued for fine wool, size, and a strong flocking instinct suited to herded range management.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    { label: 'Origin', value: 'France; developed from Spanish Merinos' },
    {
      label: 'Breed type',
      value: 'Wool (fine wool); range dual-purpose in some systems',
    },
    { label: 'Primary uses', value: 'Fine wool; meat and range production' },
    { label: 'Notable trait', value: 'Large frame; strong flocking instinct' },
    {
      label: 'Registry',
      value: 'American Rambouillet Sheep Breeders Association; FAO DAD-IS',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The breed traces to Spanish Merinos imported to Rambouillet in France, where they were bred into a distinct, larger fine-wool type. Rambouillets were later imported to the United States in the nineteenth century and became central to the development of the western range sheep industry, contributing fine wool and size to both purebred flocks and crossbred range ewes.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Rambouillets are large, white fine-wool sheep; rams may be horned and ewes are typically polled, and some animals carry body-skin development characteristic of Merino-derived breeds. They are selected chiefly for fine wool, with size and hardiness making them useful in range meat and crossbreeding systems as well.',
        },
        {
          type: 'paragraph',
          text: 'A strong flocking instinct is often cited as a practical advantage for herded management on open range.',
        },
      ],
    },
    {
      id: 'adaptation-and-distribution',
      heading: 'Adaptation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'The Rambouillet is associated with extensive rangeland systems, including arid and semi-arid conditions of the western United States, and is kept in other countries as well. Management centres on wool production alongside range grazing and, in many systems, meat and crossbred ewe production.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Wool, size, and horn characteristics vary among strains and bloodlines; descriptions here are general rather than exact for a particular flock.',
        },
      ],
    },
  ],
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Rambouillet and its national populations are recorded in the global breed inventory.',
    },
    {
      registry: 'American Rambouillet Sheep Breeders Association',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'US breed association maintaining the registry; the breed also has registries in other countries.',
    },
  ],
  primaryUses: [
    'Fine wool',
    'Meat and range production',
    'Crossbreeding on the range',
  ],
  physicalCharacteristics:
    'Large, white fine-wool sheep; rams may be horned and ewes typically polled, with Merino-type body characteristics in some animals.',
  productionCharacteristics:
    'Selected chiefly for fine wool, with size and hardiness supporting range meat and crossbred ewe production; noted for a strong flocking instinct.',
  climateAdaptation:
    'Associated with extensive rangeland, including arid and semi-arid conditions of the western United States.',
  managementContext:
    'Managed on extensive range for wool and, in many systems, meat and crossbred ewe production.',
  geographicDistribution:
    'A foundation range breed in the western United States, and kept in France and other countries.',
  connections: [
    { type: 'breed', slug: 'merino' },
    { type: 'climate', slug: 'drought' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; French in development from Spanish Merinos, with a major presence in the western United States.',
  climateContext:
    'Extensive rangeland, including arid and semi-arid environments.',
  limitations: [
    'Wool, size, and horn characteristics vary among strains and bloodlines; general descriptions are indicative only.',
    'Conservation and registry status is date- and source-specific and differs between national populations and registries.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor:
        'Breed record, origin, and characteristics in the global inventory',
    },
    { sourceId: 'cabi', citedFor: 'Breed characterization and background' },
    {
      sourceId: 'britannica',
      citedFor: 'General historical and background context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rambouillet (sheep breed)',
    description:
      'The Rambouillet, a large fine-wool breed developed in France from Spanish Merinos and a foundation of US western range flocks: origin, wool, and range use.',
    keywords: [
      'Rambouillet sheep',
      'French Merino',
      'fine wool breed',
      'range sheep',
    ],
  },
  structuredData: { article: true },
};
