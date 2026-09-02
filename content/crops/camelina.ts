import type { CropContent } from '@/types/content';

export const camelina: CropContent = {
  id: 'crop-camelina',
  slug: 'camelina',
  contentType: 'crop',
  title: 'Camelina',
  scientificName: 'Camelina sativa',
  alternativeNames: ['False flax', 'Gold-of-pleasure'],
  category: 'Oilseed crop',
  subcategory: 'Short-season annual brassica oilseed',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Annual',
  summary:
    'Camelina matures in roughly 85 to 100 days on as little as 280 mm of rainfall, which is why it is grown as a rotation and cover-crop oilseed in places where a full-season crop would not finish.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Camelina is an old European oilseed that returned to cultivation because of what it does not need. It matures in about 85 to 100 days and will produce a crop on as little as roughly 280 millimetres of rain, which puts it inside windows where canola or sunflower would run out of season or water.',
    },
    {
      type: 'paragraph',
      text: 'That is the whole basis of its use: it is grown as a rotation break and increasingly as a winter cover crop that is also harvested, rather than as a crop that competes for prime land in its own right.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    { label: 'Time to maturity', value: 'Approximately 85 to 100 days' },
    {
      label: 'Water requirement',
      value: 'A crop reported on as little as about 280 mm of rainfall',
    },
    {
      label: 'Erucic acid',
      value: 'Naturally low, reported consistently below 4 per cent of the oil',
    },
    {
      label: 'Typical role',
      value: 'Rotation break and dual-purpose winter cover crop',
    },
    {
      label: 'Main constraint',
      value: 'Small seed and shatter losses at harvest',
    },
  ],
  sections: [
    {
      id: 'short-season',
      heading: 'The season length is the product',
      body: [
        {
          type: 'paragraph',
          text: 'Maturity in roughly 85 to 100 days is what camelina sells. It fits after a failed stand, into a short northern season, or between two cash crops, and the comparison a grower makes is not camelina against canola on the same ground but camelina against leaving that window empty.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water',
      heading: 'Low water requirement',
      body: [
        {
          type: 'paragraph',
          text: 'Camelina has been grown on rainfall in the region of 280 millimetres, well below what most oilseeds need, which places it in semi-arid rotations in the northern Great Plains and comparable environments. It is not drought-proof; it is short enough to finish before the water runs out.',
        },
      ],
    },
    {
      id: 'erucic',
      heading: 'Erucic acid is low without breeding for it',
      body: [
        {
          type: 'paragraph',
          text: "Rapeseed required decades of breeding to remove erucic acid. Camelina oil carries it naturally at the low level recorded in the key facts, so the food-oil problem that shaped canola's history was never camelina's problem. Breeding attention has instead gone to seed size, oil content and herbicide tolerance.",
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'meal',
      heading: 'The meal is the harder half',
      body: [
        {
          type: 'paragraph',
          text: "The press cake carries glucosinolates, sinapine, phytic acid and condensed tannins, and feed approvals for camelina meal are restricted and species-specific in most jurisdictions. That, rather than the oil, is what limits the crop's value, because an oilseed whose meal cannot be sold freely earns from one product instead of two.",
        },
      ],
    },
    {
      id: 'seed-size',
      heading: 'Very small seed',
      body: [
        {
          type: 'paragraph',
          text: 'Camelina seed is small enough that drills set for cereals sow it too deep and combines set for canola lose it. Shallow seeding into a firm bed and careful combine settings are the two operations that decide whether the crop that grew is the crop that is delivered.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'A brassica in the rotation',
      body: [
        {
          type: 'paragraph',
          text: 'Camelina is a brassica and shares clubroot, sclerotinia and flea beetle with canola and mustard, so it does not provide a break from them. Where it functions as a rotation crop, it is a break from cereals, and putting it in a canola rotation concentrates rather than dilutes brassica pressure.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'winter',
      heading: 'Winter camelina',
      body: [
        {
          type: 'paragraph',
          text: 'Winter types are autumn-sown, cover the ground through winter and are harvested in early summer, which lets a second crop follow in the same year in some systems. This dual-purpose use is the most active area of camelina research and the reason interest has persisted through repeated failed attempts to establish it as a stand-alone commodity.',
        },
      ],
    },
    {
      id: 'markets',
      heading: 'A crop without a commodity market',
      body: [
        {
          type: 'paragraph',
          text: 'Camelina has no established terminal market in most producing countries and is grown almost entirely on contract for a specific processor or aviation-fuel programme. A grower without a contract has grown a crop with no buyer, which is a commercial constraint rather than an agronomic one.',
        },
      ],
    },
    {
      id: 'volunteers',
      heading: 'Persistence',
      body: [
        {
          type: 'paragraph',
          text: 'Seed shattered at harvest germinates in following years, and because camelina is a brassica those volunteers are difficult to remove selectively from a following canola or mustard crop. Planning the crop that follows is part of planning the camelina.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'sclerotinia' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'chernozem' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'mustard' },
    { type: 'crop', slug: 'flax' },
  ],
  glossaryTerms: ['annual-crop', 'cover-crop'],
  geographicScope:
    'Northern Great Plains of the United States and Canada, and parts of northern and eastern Europe. Mostly contract-grown.',
  climateContext:
    'Cool-season short-cycle oilseed; frost-tolerant as a seedling and grown on low rainfall because it finishes early.',
  limitations: [
    'Feed approvals for camelina meal are jurisdiction-specific and are not reproduced here.',
    'Reported maturity and water figures are ranges from production literature and vary with type, latitude and season.',
    'Camelina is contract-grown in most regions; the absence of a terminal market is a commercial reality that changes independently of agronomy.',
  ],
  sourceReferences: [
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Camelina agronomy and rotation research',
    },
    { sourceId: 'cabi', citedFor: 'Camelina sativa compendium data' },
    { sourceId: 'fao', citedFor: 'Oilseed production context' },
    { sourceId: 'ahdb', citedFor: 'Break-crop agronomy' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Camelina',
    description:
      'Camelina sativa as a crop: 85 to 100 day maturity, low water requirement, naturally low erucic acid, meal restrictions and the winter cover-crop role.',
    keywords: [
      'camelina',
      'Camelina sativa',
      'false flax',
      'short-season oilseed',
      'cover crop oilseed',
    ],
  },
  structuredData: { article: true },
};
