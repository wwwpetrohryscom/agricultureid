import type { CropContent } from '@/types/content';

export const kale: CropContent = {
  id: 'crop-kale',
  slug: 'kale',
  contentType: 'crop',
  title: 'Kale',
  scientificName: 'Brassica oleracea var. acephala (syn. var. sabellica)',
  alternativeNames: ['Borecole', 'Curly kale'],
  category: 'Vegetable crop',
  subcategory: 'Leafy brassica vegetable',
  botanicalFamily: 'Brassicaceae (mustard family)',
  lifecycle: 'Biennial, grown as an annual for leaf harvest',
  summary:
    'Kale is a non-heading leafy brassica grown for its edible leaves, valued for cold tolerance and a long harvest window across temperate and Mediterranean climates.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Kale belongs to the same species as cabbage, broccoli, and cauliflower, but unlike those crops it does not form a compact head; it is instead grown for its loose rosette of leaves, harvested progressively over an extended period rather than as a single cut.',
    },
    {
      type: 'paragraph',
      text: 'The crop is grown both as a fresh-market and processing vegetable and, in home and market-garden settings, is often planted for repeated harvesting of outer leaves as the plant continues to produce new growth from its center.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (mustard family)' },
    { label: 'Life cycle', value: 'Biennial, grown as an annual for leaves' },
    { label: 'Main species', value: 'Brassica oleracea var. acephala' },
    { label: 'Primary uses', value: 'Fresh and processed leafy vegetable' },
    {
      label: 'Climate',
      value: 'Cool-season crop; tolerates frost and light freezes',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, well-drained loams; near-neutral pH',
      note: 'Optimal ranges are variety- and region-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Kale is grown as a cool-season leafy vegetable across a wide range of climates, from temperate field production to protected cultivation in warmer regions. Its non-heading growth habit allows for either single whole-plant harvest or repeated picking of individual leaves.',
        },
        {
          type: 'paragraph',
          text: 'Interest in kale has grown alongside demand for fresh and minimally processed leafy greens, and it is produced at scales ranging from smallholder gardens to large commercial vegetable operations supplying fresh and bagged-salad markets.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            { term: 'Family', description: 'Brassicaceae (mustard family)' },
            { term: 'Genus and species', description: 'Brassica oleracea' },
            {
              term: 'Variety group',
              description:
                'Acephala group (non-heading kales), distinct from the capitata (cabbage) and botrytis (cauliflower) groups of the same species',
            },
            {
              term: 'Growth habit',
              description:
                'Biennial rosette-forming plant, cultivated as an annual for vegetative leaf growth before it would flower in its second year',
            },
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Kale is one of the older forms of Brassica oleracea, with a long history of cultivation in Europe, particularly in Mediterranean and northern European regions, before heading types such as cabbage and cauliflower were selected from related populations.',
        },
        {
          type: 'paragraph',
          text: 'Today it is grown commercially in temperate production regions worldwide, with area and production figures compiled alongside other leafy brassicas in national and FAO statistics rather than tracked as a distinct global commodity.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Kale is among the most cold-tolerant leafy vegetables, able to withstand frost and, in many cultivars, light freezes that would damage other brassicas. Exposure to cool temperatures is often associated with improved leaf flavor, a trait growers may use when timing harvest.',
        },
        {
          type: 'paragraph',
          text: 'Hot weather can cause leaves to become tough and bitter and accelerates the shift toward flowering (bolting), so summer production in warm regions typically relies on heat-tolerant cultivars or timed plantings around cooler periods.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Kale grows best on fertile, well-drained loam soils with good moisture retention and near-neutral pH. As with other brassicas, consistently available moisture and nutrients support steady leaf production over the harvest period.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Heavier clay soils can be productive if drainage is adequate, since waterlogging increases the risk of root diseases. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Kale can be direct-seeded or established from transplants, with transplants commonly used to achieve an even stand and to allow succession planting for a continuous supply.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection for leaf type (curly, plain-leaf, or dinosaur/Lacinato types), cold tolerance, and market use',
            'Spacing set to allow repeated leaf harvest without excessive crowding',
            'Rotation away from other brassicas to manage shared soil-borne diseases and pests',
            'Timely weed control during establishment, when the crop competes poorly with weeds',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen supports the continuous leaf production kale is grown for, while boron is important to brassicas generally, since deficiency can cause internal disorders and hollow stems. Nutrient supply is typically managed in split applications across the extended harvest period.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Consistent moisture supports steady leaf growth and helps prevent toughness and bitterness in the leaves. Kale is grown both rain-fed in humid climates and under irrigation elsewhere.',
        },
        {
          type: 'paragraph',
          text: 'Overhead sprinkler irrigation is commonly used in field production, though care is taken to allow foliage to dry to limit conditions favorable to foliar disease.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew can affect kale foliage under cool, moist conditions, while clubroot, a soil-borne disease affecting brassica roots, can persist in fields for many years once established. Aphids colonize the undersides of leaves and can build up quickly, and flea beetles cause characteristic small shot-holes in young leaves.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars where available, rotation away from other brassicas, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Kale can be harvested as whole young plants (baby leaf) or through repeated picking of outer leaves from mature plants over several weeks to months, depending on the production system and market.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Fresh-market and bagged-salad leafy vegetable',
            'Cooked as a fresh or frozen vegetable ingredient',
            'Baby-leaf production for salad mixes',
            'Crop residues incorporated into soil as green material',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'clubroot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'flea-beetles' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'transplanter' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'soil-topic', slug: 'soil-ph' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'broccoli' },
  ],
  glossaryTerms: [
    'annual-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview of temperate and Mediterranean production. Cultivar choice and season timing are region-specific.',
  climateContext:
    'Cool-season leafy brassica with strong frost and cold tolerance; performance declines in sustained heat.',
  limitations: [
    'Cultivar type, spacing, and harvest scheduling are region- and market-specific decisions not covered by universal values here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global leafy vegetable production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Brassica disease and pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for brassicas',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Kale',
    description:
      'An evidence-based reference on kale: classification, climate and soil needs, crop management, nutrition, diseases, pests, harvest, and culinary uses.',
    keywords: [
      'kale',
      'Brassica oleracea',
      'leafy vegetable',
      'kale cultivation',
    ],
  },
  structuredData: { article: true },
};
