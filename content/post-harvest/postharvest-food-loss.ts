import type { PostHarvestContent } from '@/types/content';

export const postharvestFoodLoss: PostHarvestContent = {
  id: 'post-harvest-postharvest-food-loss',
  slug: 'postharvest-food-loss',
  contentType: 'post-harvest',
  title: 'Post-Harvest Food Loss',
  postHarvestClass: 'loss-management',
  alternativeNames: ['Post-harvest losses', 'PHL', 'Food loss'],
  category: 'Post-harvest operation',
  subcategory: 'Loss management',
  summary:
    'Post-harvest food loss is the food that is grown and harvested but lost before it reaches consumers, through spillage, spoilage, pests, and quality decline. Reducing it improves food security and the returns from resources already spent.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Post-harvest food loss refers to the reduction in quantity and quality of food between harvest and the consumer. It occurs at many points — during harvesting, threshing, drying, storage, handling, transport, processing, and marketing — through physical spillage, spoilage by moulds and insects, damage, and decline in quality that makes food unsellable or inedible. Because this food has already used land, water, labour, and inputs to produce, losing it wastes all of those resources as well as the food itself.',
    },
    {
      type: 'paragraph',
      text: 'Post-harvest losses are widely recognised as a significant share of food produced, with the largest losses for perishable crops and in supply chains that lack adequate drying, storage, cooling, and infrastructure. Reducing these losses is seen as an important way to improve food security and farmer incomes without needing to grow more, and it is the goal that ties together the individual post-harvest operations.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'Food lost between harvest and the consumer',
    },
    {
      label: 'Where it happens',
      value: 'Harvesting, threshing, drying, storage, transport, and marketing',
    },
    {
      label: 'Main causes',
      value:
        'Spillage, spoilage, pests, mechanical damage, and quality decline',
    },
    {
      label: 'Highest for',
      value: 'Perishable crops and chains lacking drying, storage, and cooling',
    },
    {
      label: 'Why it matters',
      value:
        'Food security, incomes, and resources already spent to produce food',
    },
    {
      label: 'Reduced by',
      value: 'Better drying, storage, cooling, handling, and market access',
    },
  ],
  sections: [
    {
      id: 'where-and-why',
      heading: 'Where and why losses occur',
      body: [
        {
          type: 'paragraph',
          text: 'Losses accumulate through the post-harvest chain. Grain may be lost as spillage and incomplete threshing, then to insects and moulds if it is stored too moist or too warm. Perishable fruit and vegetables may be lost to bruising, decay, and quality decline when they are not cooled promptly or handled carefully, or when they cannot reach a market in time. Each handling step is an opportunity both for loss and for prevention.',
        },
        {
          type: 'paragraph',
          text: 'A common distinction is between quantitative loss — a reduction in the weight of food available — and qualitative loss — a decline in quality, nutritional value, or safety that lowers value even when the food is not physically gone. Both matter, and mycotoxin contamination is an example where a quality and safety loss can make otherwise intact grain unusable.',
        },
      ],
    },
    {
      id: 'reduction',
      heading: 'Reducing losses',
      body: [
        {
          type: 'list',
          items: [
            'Dry grain promptly and store it clean, cool, and protected from insects and moulds.',
            'Cool perishables quickly after harvest and keep the cold chain intact.',
            'Handle and package produce carefully to limit bruising and damage.',
            'Sort and grade to remove unsound units and direct produce to suitable markets.',
            'Improve access to storage, processing, transport, and markets so food reaches consumers in time.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because losses arise at many points, the most effective approach usually addresses the whole chain rather than a single step. Improvements in drying and storage tackle grain losses, while cooling, careful handling, and better market access tackle perishable losses.',
        },
      ],
    },
    {
      id: 'context',
      heading: 'Why loss reduction matters',
      body: [
        {
          type: 'paragraph',
          text: 'Reducing post-harvest loss increases the amount of food available and the income farmers earn from a given harvest, without the additional land, water, and inputs that producing more food would require. For this reason it is a central theme in food-security and sustainability efforts, and it provides the practical rationale for the drying, storage, cooling, handling, and quality operations described elsewhere in this collection.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Loss estimates vary',
          text: 'Reported loss levels differ widely by crop, region, and how loss is defined and measured, so figures should be treated as indicative rather than precise.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'potato' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  glossaryTerms: ['yield'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Post-harvest and food loss assessment and reduction',
    },
    {
      sourceId: 'worldbank',
      citedFor: 'Post-harvest loss and food-security context',
    },
    { sourceId: 'usda-ers', citedFor: 'Food loss measurement and analysis' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Loss levels and their causes vary greatly between crops, regions, and supply chains.',
  limitations: [
    'Reported loss levels vary widely by crop, region, and measurement method and should be treated as indicative.',
    'Loss occurs at many points in the chain, so single interventions rarely capture the full potential reduction.',
    'This entry summarises causes and principles of reduction, not quantified losses or savings for a specific context.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Post-Harvest Food Loss: Causes and Reduction',
    description:
      'What post-harvest food loss is, where and why it happens across the chain, and how better drying, storage, cooling, handling, and market access reduce it.',
    keywords: [
      'post-harvest food loss',
      'post-harvest losses',
      'food loss reduction',
      'food security',
      'grain and produce loss',
    ],
  },
  structuredData: { article: true },
};
