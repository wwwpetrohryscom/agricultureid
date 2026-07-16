import type { CommodityContent } from '@/types/content';

export const brownRice: CommodityContent = {
  id: 'commodity-brown-rice',
  slug: 'brown-rice',
  contentType: 'commodity',
  title: 'Brown Rice',
  alternativeNames: ['Husked rice', 'Cargo rice', 'Dehulled rice', 'Loonzain'],
  category: 'Cereal grain commodity',
  subcategory: 'Husked (brown) rice',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart:
    'Caryopsis with the hull removed and the bran layers and germ intact',
  sourceCrop: { type: 'crop', slug: 'rice' },
  summary:
    'Brown rice is rice with the hull stripped off but the bran layers and germ still in place. It is a traded commodity in its own right — the intermediate state between paddy and milled rice, and a food grain sold as it is.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Brown rice is what a rice huller produces: paddy with its hull removed and nothing else taken away. The grain that emerges is the intact caryopsis — bran layers, germ, and endosperm — and its brown colour comes from the bran, not from any treatment. In the trade it is often called husked or cargo rice, the latter name a reminder that this is the form in which rice has long been shipped for milling at destination.',
    },
    {
      type: 'paragraph',
      text: 'It occupies a genuine commercial position rather than being a mere waypoint. Brown rice has its own tariff subheading, its own price, and two distinct outlets: onward milling into white rice, and direct sale as a wholegrain food. It is also the point in the chain where rice becomes fragile — the hull that protected the grain is gone, and the oil-rich bran is now exposed.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    { label: 'Parent crop', value: 'Rice (Oryza sativa)' },
    { label: 'What has been removed', value: 'The hull only' },
    {
      label: 'What remains',
      value: 'Bran layers, germ, and starchy endosperm',
    },
    {
      label: 'Position in the chain',
      value: 'Produced by hulling paddy; milled onward into milled rice',
    },
    {
      label: 'Principal constraint',
      value: 'Exposed bran oil goes rancid, so keeping quality is limited',
    },
    { label: 'Co-product of milling it', value: 'Rice bran' },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Hulling is a shearing operation: rubber rolls or an impact huller strip the lemma and palea from the grain without, ideally, abrading the kernel underneath. The output is brown rice plus rice husk, and the husk is a by-product of that step — a bulky, abrasive, silica-rich residual. What matters about brown rice as a commodity is that the caryopsis is complete: nothing nutritionally significant has been removed, and the grain remains, in principle, a viable seed.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Hulling (husking)',
              description:
                'Removal of the outer floral covering from paddy. Produces brown rice and rice husk.',
            },
            {
              term: 'Whitening (milling)',
              description:
                'The separate, later abrasion step that removes the bran layers and germ from brown rice to give milled rice, with rice bran as a co-product.',
            },
            {
              term: 'Cargo rice',
              description:
                'A trade name for brown rice, reflecting its historical role as the form shipped for milling in the importing country.',
            },
          ],
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Most brown rice is an intermediate: it goes straight from the huller to the whitening machines within the same mill, and never exists as a stored commodity at all. The volume that is traded moves for two reasons — because a buyer wants to mill it themselves, which historically underpinned the cargo rice trade and still suits importers with milling capacity, or because it is destined for sale as wholegrain brown rice to consumers.',
        },
        {
          type: 'paragraph',
          text: 'Milling brown rice yields milled rice as the next traded commodity and rice bran as a co-product with substantial feed and oil value. Because the bran fraction is deliberate and marketed rather than residual, it is modelled here as a co-product of this commodity, while the husk belongs to the earlier hulling step and therefore to the paddy page.',
        },
        {
          type: 'list',
          items: [
            'Food — sold and cooked as wholegrain brown rice',
            'Food — milled onward to milled rice, the dominant global rice form',
            'Feed — off-specification and discoloured lots',
            'Seed — brown rice is not normally used for sowing; paddy is',
          ],
        },
      ],
    },
    {
      id: 'quality-and-keeping',
      heading: 'Quality attributes and keeping behaviour',
      body: [
        {
          type: 'paragraph',
          text: 'Brown rice is assessed on whole-kernel proportion, uniformity, and the visible condition of the bran surface — discoloured, red-streaked, chalky, and immature grains all count against a lot, as do broken kernels carried over from hulling. Much of this is inherited: fissures set during paddy drying show up as breakage here, and hulling that is set too aggressively adds its own.',
        },
        {
          type: 'paragraph',
          text: 'The commodity-defining constraint is rancidity. The bran layers contain oil and, alongside it, the lipase enzymes that break that oil down. In an intact paddy grain the two coexist quietly; once the hull is off and the surface is exposed to air, oxidation and enzymatic breakdown progress, and free fatty acids rise. Brown rice therefore has a shorter practical life than either paddy or well-milled white rice, and this — not any nutritional argument — is why the rice trade holds stock as paddy and mills to order.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Storability falls at the huller',
          text: 'Hulling improves handling density and removes the insect barrier at the same time. A lot that would have been safe as paddy for a long holding period is a different storage proposition the moment it becomes brown rice.',
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage and transport context',
      body: [
        {
          type: 'paragraph',
          text: 'Where brown rice is held, it is held cool, dry, and for a defined period rather than indefinitely, and sealed or controlled systems are used to slow oxidation and exclude the storage insects that the missing hull no longer keeps out. It ships in bulk and in bags, and it is denser and less bulky per unit of edible grain than paddy, which is what made the cargo trade economic in the first place.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Whole-kernel proportion',
    'Broken kernels',
    'Chalky and immature grains',
    'Discoloured and red-streaked grains',
    'Moisture content',
    'Free fatty acid development',
  ],
  commonDefects: [
    'Breakage inherited from paddy fissuring or aggressive hulling',
    'Rancidity and rising free fatty acids',
    'Discoloured and heat-damaged grains',
    'Chalky and immature kernels',
    'Insect infestation in store',
    'Residual unhulled paddy grains',
  ],
  moistureContext:
    'Held at a moisture suited to cool, defined-period storage; without the hull the grain equilibrates with the surrounding air faster than paddy does.',
  storageContext:
    'Shorter-keeping than paddy because the exposed bran oil oxidises and the insect barrier is gone; stored cool and dry, often in sealed systems, and normally for limited periods.',
  transportContext:
    'Ships in bulk and bags; denser per unit of edible grain than paddy, which historically favoured shipping rice in this form for milling at destination.',
  majorProducingRegions: [
    'South Asia',
    'Southeast Asia',
    'East Asia',
    'Mediterranean Europe',
    'South America',
  ],
  majorTradingRegions: [
    'Southeast Asia',
    'South America',
    'Europe (importing for domestic milling)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1006.20',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Husked (brown) rice.',
    },
  ],
  coProducts: [{ type: 'commodity-product', slug: 'rice-bran' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'milled-rice' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Hulling, brown rice keeping quality, and rice milling stages',
    },
    {
      sourceId: 'fao',
      citedFor: 'Husked rice as a distinct traded form and its uses',
    },
    {
      sourceId: 'usda',
      citedFor: 'Brown rice grading attributes and defect categories',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item coverage across rice forms',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, trade names, and tariff subheadings for husked rice are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes a traded commodity state, not the rice crop, and is not a grading determination or customs classification.',
    'No storage-life, moisture, or free-fatty-acid figures are given; keeping quality depends on temperature, packaging, and the condition of the incoming grain.',
    'Brown rice is modelled as a commodity, not as a product of rice paddy: hulling changes the traded state of the grain rather than transforming it into a manufactured product.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Brown Rice: The Husked Rice Commodity',
    description:
      'Brown rice as a commodity: hull removed, bran and germ intact. Covers hulling, why exposed bran oil limits keeping quality, grading, and the milling pathway.',
    keywords: [
      'brown rice',
      'husked rice',
      'cargo rice',
      'rice hulling',
      'rice bran rancidity',
    ],
  },
  structuredData: { article: true },
};
