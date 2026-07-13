import type { FertilizerContent } from '@/types/content';

export const rhizobiumInoculant: FertilizerContent = {
  id: 'fertilizer-rhizobium-inoculant',
  slug: 'rhizobium-inoculant',
  contentType: 'fertilizer',
  title: 'Rhizobium inoculant',
  alternativeNames: [
    'Legume inoculant',
    'Nitrogen-fixing inoculant',
    'Rhizobial inoculant',
  ],
  category: 'Fertilizer',
  subcategory: 'Biofertilizer (biological nitrogen fixation)',
  fertilizerClass: 'organic',
  summary:
    'Rhizobium inoculant is a biofertilizer containing living nitrogen-fixing bacteria applied to legume seed or soil; rather than supplying a nutrient salt, it establishes root-nodule symbioses that fix atmospheric nitrogen into forms the legume can use.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rhizobium inoculant is a preparation of living rhizobia — soil bacteria in genera such as Rhizobium and Bradyrhizobium — applied to legume seed or soil at planting. It is a biofertilizer rather than a nutrient salt: it supplies no nitrogen directly, but introduces the bacteria that form nitrogen-fixing partnerships with legume roots.',
    },
    {
      type: 'paragraph',
      text: 'Once established, these bacteria colonise legume roots and form nodules in which they convert atmospheric nitrogen gas into ammonia the plant can use, in exchange for carbohydrates. Because the partnership is highly specific, each legume needs to be matched with the correct rhizobial strain for effective fixation.',
    },
  ],
  keyFacts: [
    {
      label: 'Product type',
      value: 'Biofertilizer containing living nitrogen-fixing bacteria',
    },
    {
      label: 'Mechanism',
      value: 'Symbiotic biological nitrogen fixation in root nodules',
    },
    {
      label: 'Nutrient supplied',
      value: 'Nitrogen, fixed biologically rather than added as a salt',
    },
    {
      label: 'Common form',
      value:
        'Peat-based, liquid, or granular carrier for seed or soil application',
    },
    {
      label: 'Key consideration',
      value:
        'Bacteria are living; strain must match the legume and be handled with care',
    },
    {
      label: 'Target crops',
      value: 'Legumes such as soybean, common bean, chickpea, lentil, and pea',
    },
  ],
  sections: [
    {
      id: 'composition-and-what-it-is',
      heading: 'What it is and composition',
      body: [
        {
          type: 'paragraph',
          text: 'A rhizobium inoculant is a carrier material — often finely milled peat, a liquid, or a granule — carrying a high population of live rhizobia selected for effective nitrogen fixation with a particular legume. It is not a chemical fertilizer and carries no guaranteed NPK analysis; its value lies in the number and viability of the bacteria it delivers.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Active component',
              description:
                'Living rhizobia (e.g. Rhizobium, Bradyrhizobium species)',
            },
            {
              term: 'Carrier',
              description:
                'Peat, liquid, or granular material that keeps bacteria viable',
            },
            {
              term: 'Specificity',
              description: 'Each legume requires a compatible rhizobial strain',
            },
            {
              term: 'Analysis',
              description:
                'No NPK grade; effectiveness depends on live bacterial count',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'How it supplies nitrogen',
      body: [
        {
          type: 'paragraph',
          text: 'Rather than adding nitrogen, the inoculant enables the legume to obtain its own. Compatible rhizobia infect root hairs and form nodules where the enzyme nitrogenase reduces atmospheric nitrogen to ammonia, which the plant assimilates. A well-nodulated legume can meet much of its nitrogen need this way and can leave residual nitrogen for following crops.',
        },
        {
          type: 'list',
          items: [
            'Fixes atmospheric nitrogen into plant-available forms within root nodules',
            'Reduces or removes the need for applied nitrogen fertilizer on legumes',
            'Can leave residual soil nitrogen benefiting a subsequent crop',
          ],
        },
      ],
    },
    {
      id: 'use-and-management',
      heading: 'Use and management',
      body: [
        {
          type: 'paragraph',
          text: 'Inoculant is used when establishing legumes, particularly where the crop is new to a field or the compatible rhizobia are not already present, or where a high, reliable fixation is wanted. It is applied to seed just before sowing or placed with the seed, choosing the specific product matched to the legume being grown.',
        },
        {
          type: 'list',
          items: [
            'Most valuable when the compatible rhizobia are absent or scarce in the field',
            'The inoculant strain must match the legume species being grown',
            'Applied to seed or in-furrow at sowing, following the label carefully',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Match the strain and follow product guidance',
          text: 'Effective inoculation depends on using the correct strain for the legume, an adequate live bacterial count, and good field conditions. AgricultureID does not publish universal recommendations; follow the product label and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Because the bacteria are alive, inoculant viability is fragile: heat, direct sunlight, drying, and expiry all reduce the live count and effectiveness, and some seed-applied fungicides or high seed-zone fertilizer salt can harm the bacteria. Fixation is also reduced by high soil nitrogen, extreme pH, drought, and other stresses, so an inoculant is an enabler of fixation, not a guarantee of it.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Inoculant contains living organisms and must be kept cool and out of direct sunlight, used before its expiry date, and checked for compatibility with any seed treatments. Store and handle per the label; heat, drying, and incompatible chemicals can kill the bacteria and negate the benefit.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'green-manure' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'fertilizer', slug: 'compost' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'chickpea' },
    { type: 'crop', slug: 'lentil' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['inoculum', 'macronutrient'],
  geographicScope:
    'Global overview of rhizobium inoculants for legumes. The need for inoculation depends on whether compatible rhizobia are already present in the soil.',
  climateContext:
    'Biological nitrogen fixation is reduced by drought, waterlogging, extreme soil pH, and other stresses, so environmental conditions strongly influence inoculant performance.',
  limitations: [
    'This entry describes what inoculants are and how they work; it is not a product or rate recommendation for any crop or region.',
    'The bacteria are living, so viability and effectiveness depend on correct storage, handling, strain match, and field conditions.',
    'Fixation can be limited by soil nitrogen, pH, moisture, and other stresses, and is not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Biological nitrogen fixation and legume inoculation',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Legume inoculation and nitrogen fixation in cropping systems',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Rhizobium inoculant use and strain specificity',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Legume nitrogen fixation management context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Rhizobium Inoculant for Legumes',
    description:
      'Rhizobium inoculant: a biofertilizer of living bacteria that lets legumes fix atmospheric nitrogen in root nodules, with strain matching and handling care.',
    keywords: [
      'rhizobium inoculant',
      'legume inoculant',
      'biological nitrogen fixation',
      'biofertilizer',
    ],
  },
  structuredData: { article: true },
};
