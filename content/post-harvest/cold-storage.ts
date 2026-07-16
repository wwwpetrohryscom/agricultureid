import type { PostHarvestContent } from '@/types/content';

export const coldStorage: PostHarvestContent = {
  id: 'post-harvest-cold-storage',
  slug: 'cold-storage',
  contentType: 'post-harvest',
  title: 'Cold Storage',
  postHarvestClass: 'cooling',
  processStage: 'storage',
  operatingPrinciple:
    'Refrigeration lowers produce temperature, which slows respiration, ripening, water loss, and the growth of decay organisms. Humidity and air circulation are managed alongside temperature so the store stays uniform and the produce does not dry out.',
  riskFactors: [
    'Chilling injury in sensitive commodities held below their tolerance',
    'Freezing damage near the evaporator',
    'Water loss and shrivel where humidity is too low',
    'Uneven temperature from poor air circulation or overloading',
    'Ethylene accumulation where producing and sensitive commodities share a store',
    'Cold-chain breaks during loading and unloading',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
  ],
  alternativeNames: ['Refrigerated storage', 'Cool storage'],
  category: 'Post-harvest operation',
  subcategory: 'Cooling & cold storage',
  summary:
    'Cold storage holds perishable produce at low temperature and controlled humidity to slow respiration, ripening, water loss, and decay, extending shelf life and preserving quality between harvest and market.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cold storage is the use of refrigeration to hold fresh produce — fruits, vegetables, and other perishables — at a low, controlled temperature. Harvested produce is still alive: it respires, ripens, loses water, and is vulnerable to decay. Lowering its temperature slows all of these processes, which is the single most effective way to extend the storage and shelf life of most perishables.',
    },
    {
      type: 'paragraph',
      text: 'Effective cold storage combines the right temperature with appropriate humidity and air circulation, and usually begins with rapid removal of field heat soon after harvest. The optimum temperature differs by commodity, and some crops are damaged by temperatures that are too low, so cold storage is matched to each product rather than applied uniformly.',
    },
  ],
  keyFacts: [
    {
      label: 'Purpose',
      value: 'Slow respiration, ripening, water loss, and decay of perishables',
    },
    {
      label: 'Key variables',
      value: 'Temperature, relative humidity, and air circulation',
    },
    {
      label: 'Starts with',
      value: 'Rapid removal of field heat (pre-cooling) after harvest',
    },
    {
      label: 'Optimum temperature',
      value:
        'Commodity-specific; some crops suffer chilling injury if too cold',
    },
    {
      label: 'Common risk',
      value:
        'Chilling injury, freezing damage, water loss, and decay if mismanaged',
    },
    {
      label: 'Often paired with',
      value: 'Controlled- or modified-atmosphere storage for some fruits',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How cold storage preserves produce',
      body: [
        {
          type: 'paragraph',
          text: 'Respiration — the process by which harvested produce uses up its sugars and reserves — roughly slows as temperature falls, and with it the pace of ripening, softening, and ageing. Cooling also slows the growth of most decay organisms and reduces water loss, which is what causes wilting and shrivelling. Together these effects can extend usable life from days to weeks or months, depending on the crop.',
        },
        {
          type: 'paragraph',
          text: 'Because cooling is most valuable early, produce is often pre-cooled to remove field heat quickly — by forced air, hydro-cooling, or room cooling — before being held in cold storage. Maintaining high humidity in store limits water loss, while good air circulation keeps temperature uniform and carries away heat of respiration.',
        },
      ],
    },
    {
      id: 'chilling-injury',
      heading: 'Chilling injury and commodity differences',
      body: [
        {
          type: 'paragraph',
          text: 'Not all produce tolerates the same temperatures. Temperate crops such as apples and many leafy vegetables store best just above freezing, while many tropical and subtropical crops — including bananas and many other warm-climate fruits and vegetables — suffer chilling injury if held too cold, showing symptoms such as pitting, discolouration, or failure to ripen. Matching the storage temperature to the commodity is therefore essential.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'One size does not fit all',
          text: 'Optimum storage temperature and humidity are specific to each commodity and sometimes cultivar; there is no universal cold-storage setting.',
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
            'Cool produce promptly after harvest to remove field heat.',
            'Hold each commodity near its own optimum temperature and humidity.',
            'Avoid temperatures that cause chilling injury in sensitive crops.',
            'Maintain uniform temperature and good air circulation throughout the store.',
            'Keep ethylene-producing and ethylene-sensitive produce apart where relevant.',
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'tomato' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Optimum storage conditions and cold-chain research',
    },
    {
      sourceId: 'fao',
      citedFor: 'Cold storage and cold-chain guidance for perishables',
    },
    {
      sourceId: 'usda',
      citedFor: 'Post-harvest handling of fruits and vegetables',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Optimum conditions and chilling sensitivity are commodity-specific.',
  limitations: [
    'Optimum temperature, humidity, and storage life are commodity- and sometimes cultivar-specific; this entry does not give per-crop settings.',
    'Chilling-sensitive crops can be damaged by cold storage; temperatures must be selected accordingly.',
    'Effective cold storage depends on an unbroken cold chain and reliable power, which are not available everywhere.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cold Storage of Fresh Produce: How It Works',
    description:
      'How cold storage extends the life of perishable produce by slowing respiration, ripening, and decay — pre-cooling, humidity, chilling injury, and good practice.',
    keywords: [
      'cold storage',
      'pre-cooling',
      'chilling injury',
      'cold chain',
      'fresh produce storage',
    ],
  },
  structuredData: { article: true },
};
