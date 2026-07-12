import type { BreedContent } from '@/types/content';

export const leghorn: BreedContent = {
  id: 'leghorn',
  slug: 'leghorn',
  contentType: 'breed',
  title: 'Leghorn',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['Livorno', 'Livornese'],
  category: 'Chicken breed',
  summary:
    'The Leghorn is a light, active Mediterranean-class chicken breed originating in central Italy, renowned as a prolific layer of white-shelled eggs and as the foundation of most modern commercial white-egg laying strains.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Leghorn is a chicken breed of the Mediterranean class that takes its name from the Tuscan port of Livorno (historically anglicised as "Leghorn"), from which birds were exported to Britain and North America in the mid-19th century. It is a light, hardy, and notably active fowl selected over generations principally for egg production rather than meat.',
    },
    {
      type: 'paragraph',
      text: 'White Leghorn strains became the genetic backbone of the global commercial white-egg industry, and the breed remains widely kept in exhibition and smallholder flocks in many plumage colours. As with all breeds, populations and standards vary by country and registry.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    { label: 'Class / type', value: 'Mediterranean class; egg-laying breed' },
    { label: 'Origin', value: 'Italy (Tuscany, port of Livorno)' },
    { label: 'Egg colour', value: 'White' },
    {
      label: 'Temperament',
      value: 'Active, alert, good forager, rarely broody',
    },
    {
      label: 'Notable role',
      value: 'Foundation of commercial white-egg layer strains',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Leghorns descend from light landrace fowl of central Italy and were first exported through the port of Livorno. From the 1870s onward they were developed further by British and American breeders, who standardised several plumage varieties and intensified selection for laying performance. The breed is recognised by major poultry standards, including those maintained by the American Poultry Association and the Poultry Club of Great Britain.',
        },
      ],
    },
    {
      id: 'appearance-and-characteristics',
      heading: 'Appearance and characteristics',
      body: [
        {
          type: 'list',
          items: [
            'A relatively small, light-framed bird with a wedge-shaped body and long, flowing tail.',
            'A prominent single comb (folding to one side in hens) or, in some strains, a rose comb; bright white earlobes are characteristic.',
            'Yellow legs and skin; several recognised plumage colours, with white the most common in commercial contexts.',
            'Active and alert temperament, capable of flight and inclined to forage.',
          ],
        },
      ],
    },
    {
      id: 'use-and-management',
      heading: 'Use and management',
      body: [
        {
          type: 'paragraph',
          text: 'Leghorns are kept primarily for egg production. They mature early and are efficient converters of feed to eggs, and hens seldom go broody, which historically suited them to intensive laying systems. Their large single combs dissipate heat well, an advantage in warm climates, but can be prone to frostbite where winters are severe, so shelter and management are adapted accordingly.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Descriptions here are general breed characteristics. Actual performance, temperament, and hardiness depend on the specific strain, management, climate, and individual bird.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Egg-laying',
  originCountry: 'Italy',
  originRegion: 'Tuscany (port of Livorno)',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Chicken breed recorded in the global domestic animal diversity inventory.',
    },
    {
      registry: 'American Poultry Association (Standard of Perfection)',
      jurisdiction: 'United States',
      note: 'Recognised breed with multiple standardised plumage varieties.',
    },
  ],
  primaryUses: [
    'Egg production (white-shelled eggs)',
    'Foundation stock for commercial white-egg layer strains',
    'Exhibition and smallholder flocks',
  ],
  physicalCharacteristics:
    'A light, wedge-shaped bird with a long tail, prominent single or rose comb, white earlobes, and yellow legs. Several plumage colours are recognised, with white predominating commercially.',
  productionCharacteristics:
    'Prolific layer of white eggs relative to body size, early maturing, and an efficient feed converter. Hens are rarely broody, a trait favoured in dedicated laying systems.',
  climateAdaptation:
    'Well suited to warm and Mediterranean climates; the large comb aids heat loss. In very cold regions large single combs are susceptible to frostbite and benefit from shelter.',
  managementContext:
    'An active, flighty breed that forages readily and may need secure fencing. Widely used in extensive, free-range, and smallholder systems as well as historically in intensive laying operations.',
  geographicDistribution:
    'Distributed worldwide; White Leghorn genetics underpin much of the global commercial white-egg laying industry.',
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  geographicScope:
    'Global breed overview; standards, strains, and populations vary by country and registry.',
  climateContext:
    'Kept across warm to temperate regions; heat tolerance is a noted strength, while very cold climates require comb-frostbite management.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'Laying performance and temperament vary widely between commercial strains and traditional exhibition lines and are described only qualitatively.',
    'Conservation risk status is not asserted here because it varies by country and population in FAO DAD-IS.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed recording and global diversity status',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Breed origin, history, and general characteristics',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Leghorn (chicken breed)',
    description:
      'The Leghorn chicken: an Italian Mediterranean-class egg-laying breed behind most commercial white-egg strains — origin, traits, and management.',
    keywords: [
      'Leghorn chicken',
      'white egg layer',
      'Mediterranean class',
      'laying breed',
    ],
  },
  structuredData: { article: true },
};
