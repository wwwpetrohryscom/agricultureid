import type { PostHarvestContent } from '@/types/content';

export const hermeticStorage: PostHarvestContent = {
  id: 'post-harvest-hermetic-storage',
  slug: 'hermetic-storage',
  contentType: 'post-harvest',
  title: 'Hermetic Storage',
  postHarvestClass: 'storage',
  alternativeNames: ['Airtight storage', 'Sealed storage', 'Hermetic bags'],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'Hermetic storage holds dry grain and seed in airtight containers so that respiration by the grain, insects, and moulds lowers oxygen and raises carbon dioxide, suppressing storage pests without chemicals.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Hermetic storage is the practice of holding grain, pulses, or seed in a sealed, effectively airtight enclosure. Once the container is closed, the living organisms inside — the grain itself and any insects and moulds — continue to respire, consuming oxygen and releasing carbon dioxide. Because little or no fresh air can enter, oxygen falls and carbon dioxide rises until the atmosphere becomes hostile to insects and, to a lesser degree, to moulds.',
    },
    {
      type: 'paragraph',
      text: 'This modified atmosphere lets grain be protected from insects without fumigants or insecticides, which makes hermetic storage attractive both for organic and residue-sensitive supply chains and for smallholders who lack access to chemicals. Common forms range from plastic liner bags and multi-layer grain bags to rigid cocoons and sealed metal or plastic silos.',
    },
  ],
  keyFacts: [
    {
      label: 'Principle',
      value:
        'Sealed container; respiration depletes oxygen and raises carbon dioxide',
    },
    {
      label: 'Main benefit',
      value:
        'Suppresses storage insects without chemical fumigants or insecticides',
    },
    {
      label: 'Depends on first',
      value: 'Grain being dried to a safe moisture content before sealing',
    },
    {
      label: 'Common forms',
      value:
        'Liner and multi-layer bags, cocoons, and sealed metal or plastic silos',
    },
    {
      label: 'Critical requirement',
      value:
        'An intact, airtight seal — punctures let air in and undo protection',
    },
    {
      label: 'Also protects',
      value:
        'Seed viability and grain quality by limiting insect and mould damage',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How airtight storage suppresses pests',
      body: [
        {
          type: 'paragraph',
          text: 'In a sealed store the biological activity of the contents changes the internal atmosphere. Insects and, to a lesser extent, grain and moulds use up oxygen through respiration and give off carbon dioxide. As oxygen becomes scarce and carbon dioxide accumulates, insects are stressed, stop developing, and eventually die, so populations decline rather than multiply. The effect is strongest when the grain is dry, because dryness limits the respiration of moulds that would otherwise raise moisture and heat.',
        },
        {
          type: 'paragraph',
          text: 'The approach is sometimes described as biogenerated modified atmosphere, to distinguish it from controlled-atmosphere storage where gases are added and regulated by equipment. Its great practical advantage is simplicity: no gas cylinders, power, or specialist skills are required, only a container that stays sealed.',
        },
      ],
    },
    {
      id: 'forms-and-use',
      heading: 'Container types and use',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Multi-layer plastic bags',
              description:
                'Grain is sealed inside one or more airtight plastic liners, often within an ordinary woven sack; low-cost and widely promoted for smallholder grain and seed.',
            },
            {
              term: 'Cocoons and flexible tanks',
              description:
                'Large gas-tight fabric enclosures that hold bagged or bulk grain, used for community and commercial-scale storage.',
            },
            {
              term: 'Sealed metal and plastic silos',
              description:
                'Rigid containers with airtight lids that store grain hermetically and also exclude rodents and re-wetting.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Hermetic systems are used for cereals, pulses, coffee, cocoa, and seed. For seed in particular, the low-oxygen, stable-moisture environment helps preserve germination as well as protect against insects.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice and limitations',
      body: [
        {
          type: 'list',
          items: [
            'Dry grain to a safe, uniform moisture content before sealing — hermetic storage controls insects, not excess moisture.',
            'Fill and seal cleanly, removing residual insects, and keep the container closed as much as possible.',
            'Inspect bags and seals for punctures or leaks, which admit air and defeat the low-oxygen effect.',
            'Protect thin bags from rodents and sharp objects that can tear the airtight layer.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Moisture must be controlled first',
          text: 'Sealing grain that is too moist can trap conditions that favour moulds and caking; hermetic storage complements drying but does not replace it.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'chickpea' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'grain-drying' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Hermetic storage for post-harvest loss reduction',
    },
    {
      sourceId: 'irri',
      citedFor: 'Hermetic grain and seed storage research and practice',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Modified-atmosphere and stored-grain protection research',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Widely used from smallholder to commercial scale; performance depends on grain dryness and seal integrity.',
  limitations: [
    'Hermetic storage controls insects but does not dry grain; grain must be at a safe moisture content before sealing.',
    'Protection depends on maintaining an airtight seal; punctures, leaks, or frequent opening reduce effectiveness.',
    'The speed and completeness of insect control depend on temperature, grain moisture, and the initial pest load, and are not guaranteed for a given store.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Hermetic Storage: Airtight, Chemical-Free Grain',
    description:
      'How hermetic (airtight) storage protects grain and seed — respiration lowers oxygen and raises carbon dioxide to suppress insects without chemicals.',
    keywords: [
      'hermetic storage',
      'airtight grain storage',
      'modified atmosphere',
      'chemical-free grain protection',
      'stored grain insects',
    ],
  },
  structuredData: { article: true },
};
