import type { PostHarvestContent } from '@/types/content';

export const modifiedAtmospherePackaging: PostHarvestContent = {
  id: 'post-harvest-modified-atmosphere-packaging',
  slug: 'modified-atmosphere-packaging',
  contentType: 'post-harvest',
  title: 'Modified Atmosphere Packaging',
  postHarvestClass: 'processing',
  alternativeNames: ['MAP', 'Modified-atmosphere packaging'],
  category: 'Post-harvest operation',
  subcategory: 'Packaging',
  summary:
    'Modified atmosphere packaging (MAP) seals fresh or fresh-cut produce in a package whose internal atmosphere becomes low in oxygen and high in carbon dioxide, slowing respiration and decay to extend shelf life.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Modified atmosphere packaging encloses produce in a film or container in which the mix of gases differs from ordinary air. For fresh and fresh-cut fruit and vegetables, the package is usually made from a plastic film of chosen permeability: as the produce respires inside the sealed pack, it lowers the oxygen and raises the carbon dioxide until an equilibrium atmosphere is reached that slows respiration, ripening, and decay.',
    },
    {
      type: 'paragraph',
      text: 'MAP is widely used for bagged salads, cut vegetables, and other short-shelf-life items sold chilled. Unlike controlled-atmosphere storage, the atmosphere in a MAP pack is not actively regulated by equipment; it is set by the balance between the produce’s respiration and the gas exchange allowed by the packaging. MAP works alongside, and depends on, an unbroken cold chain.',
    },
  ],
  keyFacts: [
    {
      label: 'Principle',
      value:
        'Sealed film pack develops a low-oxygen, high-carbon-dioxide atmosphere',
    },
    {
      label: 'Typical use',
      value: 'Bagged salads, fresh-cut and prepared fruit and vegetables',
    },
    {
      label: 'Set by',
      value: 'Balance of produce respiration and film gas permeability',
    },
    {
      label: 'Depends on',
      value: 'Refrigeration; MAP complements, not replaces, the cold chain',
    },
    {
      label: 'Difference from CA',
      value: 'Atmosphere is passive, not actively regulated by equipment',
    },
    {
      label: 'Food-safety note',
      value: 'Low oxygen must not favour spoilage or pathogenic microorganisms',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How MAP works',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh produce continues to respire after harvest, and cut surfaces respire even faster. In a sealed package the respiring produce consumes oxygen and releases carbon dioxide. If the packaging film lets gases pass at a rate matched to that respiration, the pack settles at an equilibrium atmosphere — lower in oxygen and higher in carbon dioxide than air — that slows metabolism and decay without starving the produce of oxygen entirely.',
        },
        {
          type: 'paragraph',
          text: 'The atmosphere can also be flushed with a chosen gas mixture at packing (active MAP), or allowed to develop from respiration alone (passive MAP). Matching the film, pack size, produce type, and temperature is essential, because the right atmosphere for one commodity can harm another.',
        },
      ],
    },
    {
      id: 'design',
      heading: 'Designing a MAP pack',
      body: [
        {
          type: 'list',
          items: [
            'Choose a film permeability that matches the respiration rate of the specific produce.',
            'Match pack fill weight and temperature, since respiration rises steeply as produce warms.',
            'Avoid oxygen so low that produce ferments or that anaerobic microbes are favoured.',
            'Keep packs chilled throughout distribution, because temperature abuse changes the atmosphere and shortens shelf life.',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'MAP does not sterilise produce',
          text: 'MAP slows spoilage but does not eliminate microorganisms; it must be combined with good hygiene and refrigeration, and packs still have a limited use-by life.',
        },
      ],
    },
    {
      id: 'safety',
      heading: 'Food safety considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because MAP deliberately lowers oxygen, package design must ensure that the atmosphere suppresses spoilage without favouring pathogens that tolerate or prefer low-oxygen conditions. Fresh-cut produce is handled extensively and eaten without cooking, so hygienic processing, validated temperatures, and clear use-by dating are integral to safe MAP, not optional extras.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Low oxygen and microbial safety',
          text: 'Reduced-oxygen packaging of fresh produce is regulated in many countries; atmosphere and temperature must be validated so that food-safety hazards are controlled.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'spinach' },
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'tomato' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'ethylene-management' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Modified-atmosphere packaging research for fresh produce',
    },
    { sourceId: 'fao', citedFor: 'Packaging of fresh horticultural produce' },
    {
      sourceId: 'efsa',
      citedFor:
        'Microbiological safety of minimally processed and packaged produce',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Common in chilled retail supply chains; effectiveness depends on film choice and an intact cold chain.',
  limitations: [
    'The correct atmosphere is commodity-specific; a film or gas mix suited to one product can damage another.',
    'MAP depends on refrigeration and does not eliminate microorganisms, so temperature control and hygiene remain essential.',
    'Reduced-oxygen packaging of fresh produce is subject to food-safety regulation that varies by country and product.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Modified Atmosphere Packaging (MAP) of Produce',
    description:
      'How modified atmosphere packaging (MAP) extends shelf life of fresh and fresh-cut produce with low-oxygen packs — film design and food-safety notes.',
    keywords: [
      'modified atmosphere packaging',
      'MAP',
      'fresh-cut produce',
      'bagged salad shelf life',
      'food packaging',
    ],
  },
  structuredData: { article: true },
};
