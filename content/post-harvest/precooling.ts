import type { PostHarvestContent } from '@/types/content';

export const precooling: PostHarvestContent = {
  id: 'post-harvest-precooling',
  slug: 'precooling',
  contentType: 'post-harvest',
  title: 'Precooling',
  postHarvestClass: 'cooling',
  processStage: 'field-handling',
  operatingPrinciple:
    'Field heat is removed as fast as is practical straight after harvest, because deterioration rates fall as temperature falls and the first hours after cutting are where most of the shelf life is either lost or saved.',
  riskFactors: [
    'Delay between harvest and cooling',
    'Chilling injury where cooling overshoots a sensitive commodity’s tolerance',
    'Uneven cooling within packed containers',
    'Water-borne contamination in hydro-cooling systems',
    'Re-warming before the onward cold chain picks the load up',
  ],
  alternativeNames: ['Pre-cooling', 'Rapid cooling'],
  category: 'Post-harvest operation',
  subcategory: 'Cooling & cold storage',
  summary:
    'Precooling is the rapid removal of field heat from freshly harvested produce, soon after picking, to slow respiration, ripening, water loss, and decay before the produce enters cold storage or transport.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Precooling is the fast cooling of produce immediately after harvest to remove the heat it carries from the field. Fresh fruit and vegetables are picked warm and continue to respire and deteriorate rapidly at field temperature, so the sooner they are cooled, the more of their potential shelf life is preserved. Precooling is distinguished from ordinary cold storage by its speed: it is designed to pull temperature down quickly rather than simply hold produce cold.',
    },
    {
      type: 'paragraph',
      text: 'For many perishables, the hours between harvest and cooling are the most damaging of their whole post-harvest life, so prompt precooling is often the single most effective step in preserving quality. Several methods exist — forced-air, hydrocooling, room cooling, package icing, and vacuum cooling — and each suits particular commodities and packaging.',
    },
  ],
  keyFacts: [
    {
      label: 'Purpose',
      value: 'Rapidly remove field heat soon after harvest',
    },
    {
      label: 'Effect',
      value: 'Slows respiration, ripening, water loss, and decay',
    },
    {
      label: 'Main methods',
      value:
        'Forced-air, hydrocooling, room cooling, package icing, vacuum cooling',
    },
    {
      label: 'Timing',
      value: 'The sooner after harvest, the greater the benefit',
    },
    {
      label: 'Method choice',
      value: 'Depends on the commodity, packaging, and cooling speed needed',
    },
    {
      label: 'Leads into',
      value: 'Cold storage and the cold chain',
    },
  ],
  sections: [
    {
      id: 'why-precool',
      heading: 'Why field heat must be removed quickly',
      body: [
        {
          type: 'paragraph',
          text: 'Respiration and the loss of water and quality all accelerate as produce warms, so produce left at field temperature ages fast. Cold storage slows this decline, but a store is generally not designed to remove large amounts of heat quickly; if warm produce is simply loaded into a cold room, the centre of the load can stay warm for a long time and deteriorate. Precooling uses methods built for rapid heat removal so the whole product reaches a safe temperature promptly.',
        },
        {
          type: 'paragraph',
          text: 'Removing field heat early also reduces water loss and wilting, slows the development of decay, and limits ripening in climacteric fruit. Because the benefit is greatest right after harvest, precooling capacity is often located close to the field or packhouse.',
        },
      ],
    },
    {
      id: 'methods',
      heading: 'Precooling methods',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Forced-air cooling',
              description:
                'Cold air is pulled through vented packages, cooling produce faster than still-air room cooling; widely used for many fruits and vegetables.',
            },
            {
              term: 'Hydrocooling',
              description:
                'Produce is showered or immersed in cold water; fast and effective for tolerant crops, but water must be kept clean to avoid spreading decay.',
            },
            {
              term: 'Room cooling',
              description:
                'Produce is cooled in a cold room by circulated air; simple but slower, and best suited to less perishable items.',
            },
            {
              term: 'Package icing and vacuum cooling',
              description:
                'Ice is added to packages, or leafy crops are cooled by evaporating water under vacuum; each suits particular commodities.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The right method depends on how perishable the crop is, how it is packed, and whether it tolerates wetting. Vacuum cooling, for instance, works well for leafy vegetables with a large surface area, while hydrocooling suits sturdy items that can be wetted.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice',
      body: [
        {
          type: 'list',
          items: [
            'Cool produce as soon as possible after harvest to capture the greatest benefit.',
            'Match the method to the commodity, packaging, and whether the crop tolerates water.',
            'Keep hydrocooling and icing water clean to avoid spreading decay organisms.',
            'Move precooled produce promptly into cold storage or refrigerated transport to hold the temperature gained.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Precooling then holding',
          text: 'Precooling removes heat quickly but does not maintain temperature by itself; produce must then be held cold in storage or transport.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'tomato' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'ethylene-management' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Precooling methods and field-heat removal research',
    },
    {
      sourceId: 'fao',
      citedFor: 'Precooling and cooling of fresh horticultural produce',
    },
    {
      sourceId: 'usda',
      citedFor: 'Post-harvest handling and cooling of fruits and vegetables',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Method choice and cooling speed depend on the commodity, packaging, and available infrastructure.',
  limitations: [
    'The best precooling method is commodity- and packaging-specific; there is no single method suited to all produce.',
    'Some crops are damaged by wetting or by too-rapid cooling, so methods must be selected accordingly.',
    'Precooling removes heat but does not maintain temperature; benefits are lost without prompt cold storage or refrigerated transport.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Precooling: Removing Field Heat After Harvest',
    description:
      'How precooling removes field heat from fresh produce to preserve shelf life — forced-air, hydrocooling, room cooling, icing, and vacuum cooling methods.',
    keywords: [
      'precooling',
      'field heat removal',
      'forced-air cooling',
      'hydrocooling',
      'vacuum cooling',
    ],
  },
  structuredData: { article: true },
};
