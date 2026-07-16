import type { PostHarvestContent } from '@/types/content';

export const rootCellar: PostHarvestContent = {
  id: 'post-harvest-root-cellar',
  slug: 'root-cellar',
  contentType: 'post-harvest',
  title: 'Root Cellar',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'A space below ground, or banked into earth, borrows the thermal stability of the soil. Soil at depth barely responds to daily temperature swings and lags the seasons by weeks, so a cellar stays cool in summer and above freezing in winter without any machinery. The same earth contact keeps the air humid, which is what roots and tubers need: they are living organs that lose water through their skins, and shrivel is their principal storage loss. Vents at high and low level drive slow air exchange by the difference in density between cellar and outside air, carrying away the heat and carbon dioxide of respiration while the earth holds the temperature steady. The cellar does not make cold — it borrows it, and gives back nothing but stability.',
  riskFactors: [
    'No control at all when the season turns: a cellar follows the soil, so an unseasonably warm autumn or a hard frost simply arrives',
    'Freezing damage in shallow cellars or near vents and doors during severe weather',
    'Sprouting as stored roots and tubers break dormancy, which a passive cellar cannot suppress',
    'Rots spreading through a stored crop from damaged, diseased, or uncured units placed into store',
    'Condensation on cool surfaces, and free water on the produce, which is what rot organisms need to establish',
    'Water ingress and flooding, since the structure is in contact with wet ground',
    'Rodents, which find a cool humid store of edible roots ideal and are hard to exclude from an earth structure',
    'Ethylene accumulating in a poorly vented cellar, since apples and other producers stored alongside roots will sprout or damage them',
    'Poor air exchange, letting respiration heat build up and start a self-accelerating warming in the crop',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
  ],
  applicableCommodityClasses: ['root-tuber', 'vegetable', 'fruit'],
  applicableCommodities: [
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'fresh-carrots' },
    { type: 'commodity', slug: 'sweet-potatoes' },
    { type: 'commodity', slug: 'head-cabbage' },
    { type: 'commodity', slug: 'yams' },
    { type: 'commodity', slug: 'cassava-roots' },
    { type: 'commodity', slug: 'fresh-apples' },
  ],
  qualityEffects: [
    'High humidity limits water loss, so roots stay turgid rather than shrivelling — the main reason a cellar beats a dry shed',
    'Cool temperature slows respiration, so the crop consumes its own reserves more slowly and holds condition longer',
    'No sprout suppression, so stored crops break dormancy on their own schedule and quality falls once they do',
    'Damaged or diseased units placed in store rot and spread; a cellar concentrates the consequences of poor selection',
    'In potatoes, cellars sit at the cool end where sugars can accumulate, which matters for processing quality even where eating quality is fine',
    'Ethylene from co-stored fruit damages roots and shortens their dormancy',
  ],
  environmentalContext:
    'Root cellars are the traditional answer to winter in temperate continental climates: a cold enough season that produce would freeze outside, mild enough soil that the ground below the frost line stays above freezing. They are unsuited to climates without a cold season, since a cellar can be no cooler than the surrounding soil — in the tropics the earth is warm, and a cellar merely reproduces that warmth in the dark. Tropical root storage relies on curing, ventilated structures, in-ground storage, or, as with cassava, on not storing at all.',
  alternativeNames: [
    'Earth cellar',
    'Cold cellar',
    'Underground store',
    'Cave à légumes',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'A root cellar is a passive underground or earth-banked store that borrows the soil’s stable temperature and humidity to hold roots, tubers, and hardy vegetables through winter without machinery.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A root cellar is the oldest form of temperature-controlled storage still in everyday use: a chamber dug into the ground or banked with earth, in which roots, tubers, and hardy vegetables are held through a cold season. It has no machinery and consumes no power. What it exploits is a physical fact about soil — that earth at depth is a large thermal mass barely affected by the day’s weather and lagging the seasons by weeks, so it is cooler than summer air and warmer than winter air. A cellar simply puts the crop in thermal contact with that mass.',
    },
    {
      type: 'paragraph',
      text: 'The second thing a cellar supplies is humidity, and for roots it may be the more important of the two. A potato or a carrot is a living organ that continues to respire and to lose water through its surface after harvest, and shrivelling — not rotting — is what most often makes stored roots unsaleable. A dry shed at the same temperature would desiccate them; an earth-walled cellar in contact with damp soil holds air near saturation. Cool and humid is the combination roots want, and a cellar produces both as a by-product of being underground.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'A passive underground or earth-banked store, with no refrigeration',
    },
    {
      label: 'How it stays cool',
      value:
        'Thermal contact with soil, which lags the seasons and buffers daily swings',
    },
    {
      label: 'Why humidity matters',
      value:
        'Roots lose water through their skins; shrivel, not rot, is the usual loss',
    },
    {
      label: 'Ventilation',
      value:
        'High and low vents drive slow exchange by air-density difference alone',
    },
    {
      label: 'Main limitation',
      value:
        'No control — the cellar follows the soil and cannot be set to a temperature',
    },
    {
      label: 'Cannot do',
      value: 'Suppress sprouting, or stop a warm autumn from reaching the crop',
    },
    {
      label: 'Climate requirement',
      value:
        'A cold season; a cellar can never be cooler than the surrounding soil',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'Borrowing the soil’s temperature',
      body: [
        {
          type: 'paragraph',
          text: 'Soil is a poor conductor of heat and an enormous reservoir of it. A temperature change at the surface propagates downward slowly and weakened, so the daily swing has essentially disappeared a short way down, and the seasonal swing arrives at depth reduced in amplitude and weeks late. A chamber built into that depth is therefore held by the soil around it: it does not track the weather. In late autumn the cellar is still carrying summer’s warmth and is warmer than the air outside; in spring it still carries winter and is cooler. That lag is the whole mechanism.',
        },
        {
          type: 'paragraph',
          text: 'Ventilation is what makes the chamber usable rather than merely stable. Stored produce respires — consuming oxygen, producing carbon dioxide, water, and heat — and in a sealed chamber that heat would accumulate and the atmosphere would go stale. A cellar is vented with an intake low and an outlet high, so that whenever cellar air and outside air differ in temperature, the density difference drives a slow exchange without a fan. In the classic configuration the vents are opened on cold nights to pull the cellar down toward the season, and closed against frost and against warm days. That is the entirety of the control available: a damper and a decision about when to open it. Target temperatures and humidities for each crop are set by the applicable national storage guidance, and a cellar can only approach them, not hold them.',
        },
      ],
    },
    {
      id: 'what-it-cannot-do',
      heading: 'What a passive store cannot do',
      body: [
        {
          type: 'paragraph',
          text: 'The honest description of a root cellar is that it has no setpoint. A refrigerated store is told a temperature and holds it; a cellar is given a climate and follows it. In a normal season that is enough, because the soil’s lag happens to align with what roots need. In an abnormal one it is not: a warm autumn means the cellar is warm when the crop goes in, and there is nothing to be done about it but open the vents at night and hope. A severe cold snap can push freezing damage in through vents, doors, and shallow walls. The crop takes what the season gives.',
        },
        {
          type: 'paragraph',
          text: 'The more fundamental limit is sprouting. Roots and tubers enter storage dormant, and dormancy ends on the crop’s own schedule — accelerated by warmth, but not preventable by cold alone in a passive store. Once potatoes sprout they draw down their reserves, soften, and lose value; once onions or carrots break dormancy the same follows. Commercial stores address this with sprout suppressants or with tightly controlled low temperatures, both of which are outside what a cellar offers. A cellar buys a season, and only a season. Its other blind spot is ethylene: apples and other producing fruit stored in the same chamber will damage roots and shorten their dormancy, which is why the traditional advice to keep apples out of the potato cellar reflects real physiology.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'No universal settings',
          text: 'Optimum temperature and humidity differ by crop and cultivar, and some — sweet potatoes and yams among them — are chilling-sensitive and are damaged by conditions that suit potatoes and carrots. Per-crop conditions are set by the applicable national storage guidance; this entry states none.',
        },
      ],
    },
    {
      id: 'what-goes-in',
      heading: 'What goes in decides what comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Because a cellar has no active controls, everything depends on the condition of the crop placed into it. A cellar cannot arrest a rot that arrives with the crop; the cool humid air that suits the roots also suits the organisms that spoil them, and a single diseased or wounded unit in a bin is an inoculum source for the ones around it. Selecting out damaged, cut, and diseased units before storage is not tidiness — it is the main control available in a passive store.',
        },
        {
          type: 'paragraph',
          text: 'For crops that need it, curing before storage is the other decisive step. Potatoes, sweet potatoes, and yams are lifted with wounds, and curing under warm humid conditions lets them suberise and heal those wounds before they go into a cool store. An uncured crop enters the cellar with open wounds in exactly the humid environment rot organisms prefer. Note also that not all roots suit the same conditions: sweet potatoes and yams are chilling-sensitive tropical crops damaged by temperatures that potatoes and carrots tolerate comfortably, so a single cellar cannot serve all of them well. Which crops can share a cellar, and at what conditions, is set by the applicable national storage guidance.',
        },
      ],
    },
    {
      id: 'how-it-differs',
      heading: 'How it differs from related storage',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Versus potato storage',
              description:
                'Potato storage is the crop-specific concept — dormancy, sprouting, sugars, curing, and disease in that crop. A root cellar is one passive structure a potato crop might be held in, and a limited one.',
            },
            {
              term: 'Versus clamp storage',
              description:
                'A clamp is the field version of the same idea: a pile covered with straw and earth rather than a built chamber. A cellar is permanent, enterable, and inspectable; a clamp is temporary and largely committed once closed.',
            },
            {
              term: 'Versus cold storage',
              description:
                'Cold storage manufactures a temperature and holds it to a setpoint. A cellar borrows the soil’s and follows it. The difference between a setpoint and a season is the whole distinction.',
            },
            {
              term: 'Versus curing',
              description:
                'Curing is a conditioning step before storage, at warm humid conditions, to heal harvest wounds. It is not what a cellar does; it is what should happen before the crop reaches one.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'carrot' },
    { type: 'crop', slug: 'sweet-potato' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'yam' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'clamp-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'ethylene-management' },
  ],
  sourceReferences: [
    {
      sourceId: 'cip',
      citedFor: 'Potato and sweetpotato storage in non-refrigerated structures',
    },
    {
      sourceId: 'fao',
      citedFor: 'Traditional and low-cost storage of roots and tubers',
    },
    {
      sourceId: 'umn-extension',
      citedFor:
        'Root cellar conditions for home and small-scale vegetable storage',
    },
    {
      sourceId: 'iita',
      citedFor: 'Storage of yam and tropical root crops',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Temperate continental regions with a cold season and soil that stays above freezing at depth. Not applicable in tropical climates, where soil temperature is too warm. Per-crop conditions are set by national guidance.',
  limitations: [
    'This entry states no storage temperature, humidity, or duration: these are crop- and cultivar-specific, and are set by the applicable national storage guidance.',
    'A root cellar has no setpoint and cannot be controlled; its performance depends on the season, the soil, and the structure, and cannot be predicted from this entry.',
    'Some crops stored in cellars — sweet potatoes and yams among them — are chilling-sensitive and are damaged by conditions that suit potatoes and carrots; not all roots can share a store.',
    'Passive storage cannot suppress sprouting, and sprout suppression options are subject to national registration rules and are not covered here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Root Cellar: Passive Cool Storage for Roots',
    description:
      'How a root cellar works: borrowing the soil’s stable temperature, why humidity stops roots shrivelling, and what a store with no setpoint cannot do.',
    keywords: [
      'root cellar',
      'passive vegetable storage',
      'underground storage',
      'potato cellar',
      'root crop storage',
    ],
  },
  structuredData: { article: true },
};
