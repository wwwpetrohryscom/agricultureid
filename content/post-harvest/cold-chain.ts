import type { PostHarvestContent } from '@/types/content';

export const coldChain: PostHarvestContent = {
  id: 'post-harvest-cold-chain',
  slug: 'cold-chain',
  contentType: 'post-harvest',
  title: 'Cold Chain',
  postHarvestClass: 'cooling',
  alternativeNames: ['Cool chain', 'Refrigerated supply chain'],
  category: 'Post-harvest operation',
  subcategory: 'Cooling & cold storage',
  summary:
    'The cold chain is an unbroken sequence of temperature-controlled steps — from precooling through cold storage and refrigerated transport to retail — that keeps perishable produce cold from harvest to consumer to preserve quality and safety.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The cold chain is the continuous, temperature-controlled handling of perishable products from the point of harvest or production to the point of consumption. For fresh produce it links precooling, cold storage, refrigerated transport, and chilled display so that the product is kept near its ideal temperature at every stage. The defining idea is continuity: the chain is only as good as its weakest link, and a single warm interval can undo the benefit of all the others.',
    },
    {
      type: 'paragraph',
      text: 'Keeping perishables cold throughout their journey slows respiration, ripening, water loss, and the growth of decay and, for some foods, food-poisoning organisms. An effective cold chain therefore both extends shelf life and protects food safety, and it is essential for supplying distant markets with fresh fruit, vegetables, and other perishables.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'Unbroken temperature control from harvest to consumer',
    },
    {
      label: 'Typical links',
      value:
        'Precooling, cold storage, refrigerated transport, and chilled retail',
    },
    {
      label: 'Core principle',
      value: 'Continuity — the chain is only as strong as its weakest link',
    },
    {
      label: 'Benefits',
      value: 'Longer shelf life, less loss, and improved food safety',
    },
    {
      label: 'Main threat',
      value: 'Temperature abuse — warm gaps and fluctuations',
    },
    {
      label: 'Depends on',
      value: 'Reliable refrigeration, power, and monitoring',
    },
  ],
  sections: [
    {
      id: 'why-continuity',
      heading: 'Why continuity matters',
      body: [
        {
          type: 'paragraph',
          text: 'Perishable produce deteriorates fastest when warm, so every interval spent above its ideal temperature shortens its life and can compromise safety. Because these effects accumulate and are not reversed by later cooling, the value of cold storage or refrigerated transport is lost if the product is allowed to warm up in between — for example while waiting on a loading dock or during transfer. Maintaining temperature at each handover, not just within each facility, is what makes the cold chain effective.',
        },
        {
          type: 'paragraph',
          text: 'The chain usually begins with precooling to remove field heat quickly, because the greatest damage often occurs in the first hours after harvest. From there, cold storage, refrigerated vehicles, and chilled display each hold the temperature that precooling achieved.',
        },
      ],
    },
    {
      id: 'links',
      heading: 'Links in the cold chain',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Precooling',
              description:
                'Rapid removal of field heat soon after harvest, setting the product’s temperature at the start of the chain.',
            },
            {
              term: 'Cold storage',
              description:
                'Holding produce at its commodity-specific temperature and humidity between chain stages.',
            },
            {
              term: 'Refrigerated transport',
              description:
                'Insulated, refrigerated vehicles and containers that maintain temperature over distance, including sea and land freight.',
            },
            {
              term: 'Chilled handling and retail',
              description:
                'Cold rooms, chilled display, and careful transfers at wholesale and retail that keep produce cold to the point of sale.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Monitoring temperature along the chain — with sensors and data loggers — helps identify where warming occurs so that weak links can be fixed. Each commodity has its own target temperature, and chilling-sensitive crops must not be held too cold.',
        },
      ],
    },
    {
      id: 'challenges',
      heading: 'Requirements and challenges',
      body: [
        {
          type: 'list',
          items: [
            'Reliable refrigeration and power at every stage, which is not available everywhere.',
            'Careful management of transfers, where produce is most likely to warm.',
            'Correct, commodity-specific temperatures, avoiding chilling injury in sensitive crops.',
            'Temperature monitoring to detect and correct breaks in the chain.',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Weakest link governs the outcome',
          text: 'A break anywhere in the cold chain — a warm dock, an unrefrigerated leg, a failed unit — can spoil produce despite good cooling elsewhere.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'tomato' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cold chain for perishable food and loss reduction',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Cold-chain and temperature-management research',
    },
    {
      sourceId: 'usda',
      citedFor: 'Temperature management of fresh fruits and vegetables',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Cold-chain coverage and reliability vary widely with infrastructure and energy access.',
  limitations: [
    'Cold-chain benefits depend on continuity; a single warm interval can undo cooling done elsewhere.',
    'Target temperatures are commodity-specific, and chilling-sensitive crops can be damaged by too-cold conditions.',
    'Reliable refrigeration and power are not available everywhere, which limits cold-chain reach in some regions.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cold Chain: Temperature Control Harvest to Sale',
    description:
      'How the cold chain keeps perishables cold from harvest to consumer — precooling, cold storage, refrigerated transport, chilled retail, and unbroken continuity.',
    keywords: [
      'cold chain',
      'refrigerated transport',
      'temperature management',
      'perishable logistics',
      'cold storage',
    ],
  },
  structuredData: { article: true },
};
