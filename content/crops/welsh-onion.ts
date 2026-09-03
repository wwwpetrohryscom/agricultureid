import type { CropContent } from '@/types/content';

export const welshOnion: CropContent = {
  id: 'crop-welsh-onion',
  slug: 'welsh-onion',
  contentType: 'crop',
  title: 'Welsh Onion',
  scientificName: 'Allium fistulosum',
  alternativeNames: [
    'Bunching onion',
    'Japanese bunching onion',
    'Spring onion',
    'Scallion',
    'Negi',
  ],
  category: 'Vegetable',
  subcategory: 'Non-bulbing perennial Allium',
  botanicalFamily: 'Amaryllidaceae (onion family)',
  lifecycle: 'Perennial, often grown as an annual or biennial',
  summary:
    'Welsh onion is a bulbless perennial Allium harvested whole for its blanched shaft and green leaf, divided rather than sown where it is grown as a stand, and the main scallion of East Asian production.',
  introduction: [
    {
      type: 'paragraph',
      text: "Welsh onion has nothing to do with Wales; the name descends from a word meaning foreign. What matters agriculturally is that it does not make a bulb. Where the common onion stores a season's growth in a swollen base and is lifted and cured, Allium fistulosum grows a thickened shaft and is pulled or cut fresh, which puts it in an entirely different production and marketing class from every other onion this corpus publishes.",
    },
    {
      type: 'paragraph',
      text: 'It is perennial and clump-forming, so a stand can be divided and replanted rather than raised from seed each year, and in parts of East Asia the crop is deliberately blanched by earthing up so that the white shaft — the part sold at the highest price — is as long as possible.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Amaryllidaceae (onion family)' },
    {
      label: 'Life cycle',
      value: 'Perennial, commonly grown as an annual or biennial',
    },
    { label: 'Scientific name', value: 'Allium fistulosum' },
    {
      label: 'Harvested part',
      value: 'Whole plant: blanched shaft and green leaf',
    },
    {
      label: 'Bulbing',
      value: 'None; the base thickens but does not form a storage bulb',
    },
    {
      label: 'Propagation',
      value: 'Seed, or division of an established clump',
    },
    {
      label: 'Climate',
      value: 'Cool to warm temperate; hardier than common onion',
    },
  ],
  sections: [
    {
      id: 'no-bulb',
      heading: 'The onion that does not bulb',
      body: [
        {
          type: 'paragraph',
          text: 'Bulbing in the common onion is triggered by daylength, and choosing a cultivar for a latitude is the central decision in growing it. Welsh onion does not bulb at all, so that decision disappears and with it the whole apparatus of long-day and short-day types, curing, and dormant storage. What replaces it is a marketing question: how long the white shaft is and how fresh the leaf is when it reaches the buyer.',
        },
      ],
    },
    {
      id: 'blanching',
      heading: 'Earthing up for the white shaft',
      body: [
        {
          type: 'paragraph',
          text: 'In Japanese and Chinese production the crop is transplanted into a furrow and soil is drawn up against the stem several times through the season, excluding light and extending the blanched portion. The operation is repeated rather than done once, is the main labour cost of the crop, and it is why the same cultivar yields a short-shafted scallion in one system and a long white negi in another.',
        },
      ],
    },
    {
      id: 'division',
      heading: 'A stand that is divided, not resown',
      body: [
        {
          type: 'paragraph',
          text: "Because the plant is perennial and clumps, a grower can lift a clump, split it and replant the divisions, which establishes far faster than seed. Home and market-garden production frequently works this way for years, and it means the crop's genetics on a given holding may be a single clone maintained by division.",
        },
      ],
    },
    {
      id: 'hardiness',
      heading: 'Winter and pest tolerance',
      body: [
        {
          type: 'paragraph',
          text: 'Welsh onion is hardier than common onion and is used as a winter and early-spring green in temperate systems where little else is standing. It is also markedly more resistant to some Allium diseases than the bulb onion, which is why it appears in breeding programmes as a source of resistance rather than only as a crop.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and soil',
      body: [
        {
          type: 'paragraph',
          text: 'A cut-and-come-again or repeatedly earthed-up crop draws steadily on soil nitrogen through a long season. Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests and disease',
      body: [
        {
          type: 'paragraph',
          text: 'Thrips, onion flies, downy mildew and purple blotch reach this crop as they reach other Alliums, and continuous Allium cropping raises the pressure. Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Soils',
      body: [
        {
          type: 'paragraph',
          text: 'Deep, friable soils suit the crop, particularly where earthing up is practised and the shaft must push through loose material. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Seed and transplanting',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is raised from seed in a nursery bed and transplanted into the furrow it will be earthed up in, which spreads the labour and lets the grower set spacing precisely. Direct sowing is possible and gives a less uniform shaft, which matters where the crop is sold on shaft length.',
        },
      ],
    },
    {
      id: 'hybrids',
      heading: 'Crosses with the common onion',
      body: [
        {
          type: 'paragraph',
          text: 'Allium fistulosum crosses with Allium cepa, and the hybrids are used in breeding to move disease resistance and cold tolerance into bulb onions. That makes the crop a genetic resource as well as a vegetable, and it is a reason seed companies maintain material that is never sold as a crop.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'leek' },
    { type: 'crop', slug: 'garlic' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'leek' },
    { type: 'crop', slug: 'garlic' },
    { type: 'crop', slug: 'chives' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'crop-rotation'],
  geographicScope:
    'The main scallion of East Asian production and grown widely elsewhere as a bunching onion. The FAO Crop Calendar records sowing and harvest windows in two countries under the Welsh onion label.',
  climateContext:
    'Cool to warm temperate, and hardier through winter than the common onion. It grows through a wider temperature range than a bulbing onion because it is not waiting on a daylength signal to finish.',
  limitations: [
    'Production statistics almost always merge Welsh onion with spring onions harvested green from common onion, which are a different species.',
    'Japanese and Chinese production uses distinct long-shaft types that are not registered as varieties in most of the countries growing them.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-crop-calendar',
      citedFor:
        'Sowing and harvest windows recorded under the Welsh onion label',
    },
    { sourceId: 'cabi', citedFor: 'Allium fistulosum compendium data' },
    {
      sourceId: 'usda-grin',
      citedFor: 'Allium germplasm and interspecific crosses',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-09-03',
  updatedAt: '2026-09-03',
  editorialStatus: 'published',
  seo: {
    title: 'Welsh Onion',
    description:
      'Welsh onion (Allium fistulosum): the bulbless perennial bunching onion, earthed up for its white shaft and divided rather than resown.',
    keywords: [
      'Welsh onion',
      'Allium fistulosum',
      'bunching onion',
      'scallion',
      'negi',
    ],
  },
  structuredData: { article: true },
};
