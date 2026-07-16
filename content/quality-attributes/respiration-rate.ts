import type { QualityAttributeContent } from '@/types/content';

export const respirationRate: QualityAttributeContent = {
  id: 'quality-attribute-respiration-rate',
  slug: 'respiration-rate',
  contentType: 'quality-attribute',
  title: 'Respiration Rate',
  alternativeNames: ['Respiratory rate', 'Postharvest respiration'],
  category: 'Quality attribute',
  subcategory: 'Fresh produce',
  attributeClass: 'biological',
  qualityDomain: 'storage-stability',
  notAnIndicatorOf: [
    'Ripeness: respiration is also high in young, actively growing tissue and in wounded tissue, so a high rate does not by itself mean a commodity is ripe.',
    'A climacteric verdict on its own: a respiratory rise after harvest is what identifies climacteric behaviour; a high but steady rate does not — see Maturity Index and Ethylene Production.',
    'A measure of quality or of remaining shelf life in absolute terms: respiration rate indicates how fast a commodity is using its reserves, not how large those reserves are.',
    'An ethylene measurement: respiration and ethylene production rise together in climacteric fruit but are distinct processes measured separately, and the two are routinely and incorrectly conflated — see Ethylene Production.',
  ],
  typicalUnits: [
    'mL carbon dioxide per kilogram per hour',
    'mg carbon dioxide per kilogram per hour',
  ],
  appliesToCommodities: [
    { type: 'commodity', slug: 'fresh-broccoli' },
    { type: 'commodity', slug: 'fresh-sweetcorn' },
    { type: 'commodity', slug: 'fresh-lettuce' },
    { type: 'commodity', slug: 'fresh-carrots' },
    { type: 'commodity', slug: 'head-cabbage' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'walnuts' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'respiration-measurement' },
  ],
  summary:
    'Respiration rate is the rate at which a harvested commodity consumes oxygen and evolves carbon dioxide, releasing heat and using up its own stored reserves. It is essentially the clock on shelf life, and nearly every post-harvest cooling and atmosphere-control practice exists to slow it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A harvested fruit, vegetable, or tuber is still alive. It continues to respire — consuming oxygen and evolving carbon dioxide as it breaks down its own stored sugars, starches, and organic acids — and it can no longer replace what it spends, because it is no longer attached to the plant that supplied it. Respiration rate is the pace of that spending. It is the underlying clock that everything else in the post-harvest chain, from precooling to controlled-atmosphere storage, is an attempt to slow.',
    },
    {
      type: 'paragraph',
      text: 'Respiration rate is a biological property of the living tissue, not a food-safety verdict, a ripeness reading, or a stand-in for ethylene production. It rises with temperature, falls when oxygen is reduced and carbon dioxide is raised, and varies enormously between commodities — differences that together explain much of why some produce keeps for months and other produce keeps for days.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'The rate at which a commodity consumes oxygen and evolves carbon dioxide after harvest',
      note: 'Reported as a rate per unit mass per unit time',
    },
    {
      label: 'Why it matters',
      value:
        'Harvested produce is still alive and cannot replace the reserves it spends respiring — respiration is the clock on shelf life',
    },
    {
      label: 'Temperature sensitivity',
      value:
        'Rate rises steeply with temperature — commonly two- to three-fold for every ten-degree increase, a pattern generally described as the Q-ten relationship',
      note: 'This is why cooling is the single most effective post-harvest intervention available',
    },
    {
      label: 'Vital heat',
      value:
        'The heat respiration releases must be removed by the refrigeration system and is part of how that system is sized',
    },
    {
      label: 'Atmosphere modification',
      value:
        'Reducing oxygen and raising carbon dioxide suppresses respiration — the basis of controlled-atmosphere and modified-atmosphere storage',
      note: 'Pushed too far it forces fermentation and off-flavours instead of further slowing',
    },
    {
      label: 'Commodity variation',
      value:
        'Leafy greens, broccoli, and sweetcorn respire fast; onions, potatoes, and nuts respire slowly',
      note: 'A major reason storage life differs so much between commodities',
    },
    {
      label: 'Where targets are set',
      value:
        'Commodity-specific storage guidance sets the temperature and atmosphere targets used to manage respiration for a given commodity',
    },
  ],
  sections: [
    {
      id: 'respiration-the-clock-on-shelf-life',
      heading: 'Respiration: the clock on shelf life',
      body: [
        {
          type: 'paragraph',
          text: 'Once a commodity is detached from the plant, it is cut off from the water, minerals, and photosynthetic sugars that once sustained it, but its cells remain alive and metabolically active. Respiration continues to consume the sugars, starches, and organic acids already stored in the tissue, releasing carbon dioxide, water, and heat as by-products. Because those reserves cannot be replenished after harvest, respiration rate is effectively a countdown: the faster a commodity respires, the sooner its stored reserves, and with them its eating quality, are used up.',
        },
      ],
    },
    {
      id: 'temperature-and-the-q-ten-relationship',
      heading: 'Temperature and the Q-ten relationship',
      body: [
        {
          type: 'paragraph',
          text: 'Respiration rate is highly sensitive to temperature. As a general biological pattern, the rate commonly rises two- to three-fold for every ten-degree increase in temperature, a relationship often described in biology as the Q-ten relationship. This is a general pattern, not a fixed factor that applies identically to every commodity across every temperature band, but it explains why cooling is the single most effective intervention available in the entire post-harvest chain — see Precooling, Cold Chain, and Cold Storage. The heat that respiration releases, sometimes called vital heat, does not disappear; it must be removed by the refrigeration system, and the amount of heat a commodity is expected to generate is itself a factor the system is sized around.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Cooling slows the clock; it does not stop it',
          text: 'Lowering temperature slows respiration dramatically, which is why prompt, thorough cooling after harvest has an outsized effect on shelf life. It does not stop respiration altogether, and a commodity held too warm for even a short period can lose disproportionate storage life.',
        },
      ],
    },
    {
      id: 'modifying-the-atmosphere',
      heading: 'Modifying the atmosphere to slow respiration',
      body: [
        {
          type: 'paragraph',
          text: 'Reducing the oxygen available to a commodity and raising the carbon dioxide around it both suppress respiration further, beyond what temperature alone achieves. This is the physiological basis of controlled-atmosphere storage and modified-atmosphere packaging, which deliberately manage the surrounding gas mixture to extend storage life — see Controlled-Atmosphere Storage and Modified-Atmosphere Packaging.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Too little oxygen is its own failure mode',
          text: 'Pushed too far, low oxygen and high carbon dioxide do not simply slow respiration further — they force the tissue into fermentation, producing off-flavours and other physiological damage. The gas mixture that benefits a commodity is commodity-specific and is set by storage guidance, not by pushing the atmosphere as far as it will go.',
        },
      ],
    },
    {
      id: 'respiration-rate-varies-by-commodity',
      heading: 'Respiration rate varies enormously by commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Different commodities respire at very different paces even under identical conditions. Leafy greens, broccoli, and sweetcorn are among the fastest-respiring fresh commodities and correspondingly have short potential storage lives. Onions, potatoes, and tree nuts respire slowly and can be held for months under suitable conditions. This inherent variation is a major reason why blanket storage-life expectations do not transfer between commodities, and why storage guidance is written commodity by commodity rather than as a single rule.',
        },
      ],
    },
    {
      id: 'what-respiration-rate-does-not-tell-you',
      heading: 'What respiration rate does not tell you',
      body: [
        {
          type: 'paragraph',
          text: 'A measured respiration rate reflects the sampled tissue’s recent history as much as its species. Wounding, exposure to ethylene, and disease all raise the measured rate, so two lots of the same commodity can show different rates for reasons that have nothing to do with genetics or ripeness.',
        },
        {
          type: 'list',
          items: [
            'Not ripeness — young, growing tissue and wounded tissue both respire fast, independent of ripeness.',
            'Not a climacteric verdict on its own — a rise after harvest identifies climacteric behaviour; a high but steady rate does not.',
            'Not a measure of remaining shelf life in absolute terms — it shows the pace of use, not the size of the reserve.',
            'Not an ethylene measurement — the two are related in climacteric fruit but are distinct processes, measured separately.',
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'ethylene-production' },
    { type: 'quality-attribute', slug: 'maturity-index' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Respiration rate physiology and storage-condition guidance for fresh commodities',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Commodity-specific respiration behaviour and storage guidance',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Post-harvest physiology and cooling practice',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Respiration, cold chain, and controlled-atmosphere storage principles',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Respiration rate is a physiological property measurable anywhere; the temperature and atmosphere used to manage it are set by commodity-specific storage guidance that varies by market and climate.',
  limitations: [
    'This entry states no temperature or gas-concentration values. Commodity-specific storage guidance sets the targets that manage respiration for a given commodity, cultivar, and storage duration.',
    'A measured rate reflects the sampled commodity’s recent history — wounding, ethylene exposure, and disease all raise it — not only its species or genotype.',
    'Respiration rate indicates how fast reserves are being used, not how large those reserves are; it is not, by itself, a measure of remaining shelf life.',
    'A high steady respiration rate does not identify climacteric behaviour; only a respiratory rise after harvest does — see Maturity Index and Ethylene Production.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Respiration Rate: The Clock on Shelf Life',
    description:
      'Respiration rate is the pace harvested produce uses oxygen and its own reserves — the biological clock that cooling and atmosphere control exist to slow.',
    keywords: [
      'respiration rate',
      'postharvest physiology',
      'shelf life',
      'controlled atmosphere storage',
      'vital heat',
    ],
  },
  structuredData: { article: true },
};
