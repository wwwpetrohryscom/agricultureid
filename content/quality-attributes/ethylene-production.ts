import type { QualityAttributeContent } from '@/types/content';

export const ethyleneProduction: QualityAttributeContent = {
  id: 'quality-attribute-ethylene-production',
  slug: 'ethylene-production',
  contentType: 'quality-attribute',
  title: 'Ethylene Production',
  alternativeNames: ['Ethylene evolution', 'Ethylene generation rate'],
  category: 'Quality attribute',
  subcategory: 'Fresh produce',
  attributeClass: 'biological',
  qualityDomain: 'storage-stability',
  notAnIndicatorOf: [
    'Ripeness stage itself: production rate rises with ripening in climacteric fruit, but the relationship is neither linear nor consistent across commodities, and non-climacteric commodities produce ethylene at a low, steady rate without ever ripening in response.',
    'A respiration measurement: production and respiration rise together in climacteric fruit but are distinct processes that are measured separately — see Respiration Rate.',
    'A measure of a commodity’s sensitivity to ethylene: production and sensitivity are independent properties. A commodity can be a heavy producer, a sensitive receiver, both, or neither, and knowing one tells you nothing about the other.',
    'A store-atmosphere measurement: a fruit’s own production rate is not the same as the ethylene concentration inside a store, which also depends on the store’s volume, ventilation, scrubbing, and load.',
  ],
  typicalUnits: [
    'µL ethylene per kilogram per hour',
    'nL ethylene per gram per hour',
  ],
  appliesToCommodities: [
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-lettuce' },
    { type: 'commodity', slug: 'fresh-broccoli' },
    { type: 'commodity', slug: 'cucumbers' },
    { type: 'commodity', slug: 'fresh-carrots' },
  ],
  measuredBy: [{ type: 'quality-measurement', slug: 'ethylene-measurement' }],
  summary:
    'Ethylene production is the rate at which a commodity releases ethylene, a gaseous plant hormone active at trace concentration. In climacteric fruit, production becomes self-reinforcing at the onset of ripening, and the practical consequence is that heavy producers and ethylene-sensitive commodities cannot safely share a store or a truck.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ethylene is a simple gaseous hormone that plants produce and respond to at trace concentration. Nearly all plant tissue produces some ethylene, but the rate becomes agriculturally decisive in commodities where it drives ripening: in these climacteric commodities, ethylene production rises sharply at the onset of ripening and, because ethylene induces the tissue to produce still more ethylene, the process becomes autocatalytic. Once that threshold is crossed, ripening proceeds as a self-accelerating, effectively irreversible commitment.',
    },
    {
      type: 'paragraph',
      text: 'The practical consequences follow directly from that biology. Heavy ethylene producers and ethylene-sensitive commodities must be kept apart in storage and transport, because a producer’s exhaust can ripen, yellow, or cause abscission in a sensitive commodity sharing the same space. Ethylene also comes from sources other than the fruit itself — wounded or stressed tissue, and combustion engines and some equipment — so a store’s ethylene level can rise from causes that have nothing to do with the commodity stored inside it.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'The rate at which a commodity produces ethylene, a gaseous plant hormone active at trace concentration',
    },
    {
      label: 'Autocatalytic in climacteric fruit',
      value:
        'At the onset of ripening, ethylene induces more ethylene production, making ripening self-accelerating and effectively irreversible once triggered',
    },
    {
      label: 'Heavy producers',
      value: 'Apple, banana, avocado, and ripening tomato are high producers',
      note: 'See Fruit Ripening',
    },
    {
      label: 'Sensitive commodities',
      value:
        'Lettuce, broccoli, cucumber, carrot, kiwifruit, and cut flowers are readily damaged by ethylene exposure',
    },
    {
      label: 'Mixed-load risk',
      value:
        'Storing or transporting producers alongside sensitive commodities is a routine and costly cause of ripening, yellowing, and abscission damage',
    },
    {
      label: 'Non-fruit sources',
      value:
        'Wounded or stressed tissue, combustion engines, and some equipment also release ethylene, so a store can accumulate it from sources other than the fruit',
    },
    {
      label: 'Production is not sensitivity',
      value:
        'Whether a commodity produces ethylene and whether it is harmed by ethylene are independent properties',
    },
  ],
  sections: [
    {
      id: 'a-trace-hormone-with-an-outsized-effect',
      heading: 'A trace-level hormone with an outsized effect',
      body: [
        {
          type: 'paragraph',
          text: 'Ethylene is active in plant tissue at trace concentration, yet it governs some of the most commercially consequential events in the post-harvest chain: ripening, senescence, yellowing, and abscission. Ethylene production is simply the rate at which a given commodity releases this gas, and it is measured because it predicts — imperfectly, and only for the commodities that respond to it — how soon and how strongly that commodity will ripen, and how much risk it poses to other commodities nearby.',
        },
      ],
    },
    {
      id: 'autocatalysis-and-a-one-way-commitment',
      heading: 'Autocatalysis: why ripening self-accelerates',
      body: [
        {
          type: 'paragraph',
          text: 'In climacteric fruit, ethylene production at the onset of ripening becomes autocatalytic: exposure to ethylene causes the tissue to produce still more ethylene, in a feedback loop rather than a fixed response. This is why climacteric ripening, once it begins, tends to proceed to completion rather than pausing or reversing — the commitment is effectively one-way. See Maturity Index for how this separates harvest timing from eating quality, and Fruit Ripening for how the process is managed after harvest.',
        },
      ],
    },
    {
      id: 'producers-sensitive-commodities-and-mixed-loads',
      heading: 'Producers, sensitive commodities, and mixed-load damage',
      body: [
        {
          type: 'paragraph',
          text: 'Heavy ethylene producers — apple, banana, avocado, and ripening tomato among them — release enough gas to affect nearby commodities even in ordinary storage or transport conditions. Ethylene-sensitive commodities — lettuce, broccoli, cucumber, carrot, kiwifruit, and cut flowers among them — respond to that exposure with yellowing, premature ripening, bitterness, russet spotting, or abscission of leaves and florets. Storing or transporting a heavy producer alongside a sensitive commodity is a routine and expensive failure mode in commercial handling, because the damage often is not visible until well after the load has moved on. See Ethylene Management for how facilities are designed to prevent it.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The fruit is not the only source',
          text: 'A store or truck can accumulate ethylene from wounded or stressed tissue in the load and from combustion engines and some equipment operating nearby — not only from ripening fruit. Ethylene management therefore has to account for the whole environment, not just the commodities being stored.',
        },
      ],
    },
    {
      id: 'production-versus-sensitivity',
      heading: 'Production and sensitivity are not the same property',
      body: [
        {
          type: 'paragraph',
          text: 'The most consequential and most often confused distinction on this topic is that ethylene production and ethylene sensitivity are independent properties. A commodity can produce a great deal of ethylene while being largely unaffected by exposure to more of it, or produce almost none while being severely damaged by trace exposure from something else nearby. A commodity can also be both a heavy producer and highly sensitive, or neither. Knowing a commodity’s production rate says nothing on its own about how it will respond to ethylene it receives from elsewhere.',
        },
      ],
    },
    {
      id: 'what-ethylene-production-does-not-tell-you',
      heading: 'What ethylene production does not tell you',
      body: [
        {
          type: 'list',
          items: [
            'Not ripeness stage itself — the relationship between production rate and ripening stage is neither linear nor consistent across commodities.',
            'Not a respiration measurement — the two rise together in climacteric fruit but are distinct, separately measured processes.',
            'Not a measure of sensitivity — production and sensitivity are independent properties, and one cannot be inferred from the other.',
            'Not a store-atmosphere measurement — the concentration inside a store depends on volume, ventilation, scrubbing, and load, not on any single commodity’s production rate alone.',
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'respiration-rate' },
    { type: 'quality-attribute', slug: 'maturity-index' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Ethylene physiology, production rates, and mixed-load compatibility research',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Commodity ethylene production and sensitivity guidance',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Post-harvest ethylene management practice',
    },
    {
      sourceId: 'fao',
      citedFor: 'Ethylene physiology and post-harvest handling principles',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Ethylene production is a physiological property measurable anywhere; the concentrations and exposure limits used to manage it in stores, trucks, and ripening rooms are set by commodity guidance and facility procedures that vary by market.',
  limitations: [
    'This entry states no ethylene concentration, exposure limit, or ripening-room gas procedure. Commodity guidance and facility procedures govern them, and ripening rooms are operated to documented facility procedures by trained staff.',
    'Production rate and ripening stage are related in climacteric fruit but not in a linear or commodity-general way; the relationship should not be read as a fixed schedule.',
    'Ethylene production and ethylene sensitivity are independent properties; this entry describes production only, not how readily a given commodity is damaged by exposure.',
    'A store’s ethylene concentration is not the same as any one fruit’s production rate — it also depends on the store’s volume, ventilation, scrubbing, and load.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Ethylene Production: Producers vs Sensitive Crops',
    description:
      'Ethylene production drives ripening in climacteric fruit and endangers sensitive crops nearby. Learn why production and sensitivity are separate properties.',
    keywords: [
      'ethylene production',
      'climacteric ripening',
      'ethylene sensitivity',
      'mixed load damage',
      'ethylene management',
    ],
  },
  structuredData: { article: true },
};
