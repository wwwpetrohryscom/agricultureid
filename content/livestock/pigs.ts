import type { LivestockContent } from '@/types/content';

export const pigs: LivestockContent = {
  id: 'livestock-pigs',
  slug: 'pigs',
  contentType: 'livestock',
  title: 'Pigs',
  scientificName: 'Sus scrofa domesticus',
  alternativeNames: ['Hogs', 'Swine', 'Sows', 'Boars'],
  category: 'Livestock',
  subcategory: 'Monogastric (non-ruminant)',
  primaryProducts: [
    'Pork',
    'Hides',
    'By-products (for various industrial uses)',
  ],
  productionSystems: [
    'Intensive indoor commercial systems',
    'Outdoor and free-range systems',
    'Smallholder and backyard systems',
    'Mixed crop–livestock systems',
  ],
  summary:
    'Pigs are monogastric, single-stomached omnivores raised worldwide primarily for pork. They are efficient converters of formulated feed into meat and are managed across systems ranging from intensive indoor operations to outdoor and smallholder settings.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pigs are among the most widely farmed livestock species globally, valued primarily for pork production. Unlike ruminants such as cattle, sheep, and goats, pigs are monogastric — they have a single-chambered stomach rather than a multi-compartment fermenting rumen — and are naturally omnivorous, with digestive physiology broadly similar in principle to that of humans.',
    },
    {
      type: 'paragraph',
      text: 'This non-ruminant digestive system means pigs cannot efficiently ferment large volumes of fibrous forage the way ruminants do. Instead, commercial pig production relies on formulated diets based on grains and protein sources, which pigs convert into meat with notable efficiency relative to many other livestock species.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sus scrofa domesticus' },
    {
      label: 'Digestive type',
      value: 'Monogastric (single-stomach), omnivorous — not a ruminant',
    },
    { label: 'Primary product', value: 'Pork' },
    {
      label: 'Feed conversion',
      value: 'Relatively efficient converters of formulated feed into meat',
    },
    {
      label: 'Feed base',
      value:
        'Formulated diets based on grains and protein sources, not forage-based',
    },
    {
      label: 'Global breeds',
      value:
        'Numerous breeds and commercial hybrid lines recorded in FAO’s DAD-IS registry',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Pig production is organised around distinct life-stage and purpose groupings: breeding herds (sows and boars) producing piglets, and growing–finishing operations raising pigs to market weight for pork. Commercial production frequently uses crossbred or hybrid lines developed for specific traits such as growth rate, feed efficiency, and carcass quality.',
        },
        {
          type: 'list',
          items: [
            'Breeding stock — sows and boars managed for reproduction and genetic improvement.',
            'Growing–finishing pigs — raised from weaning to market weight primarily for pork.',
            'Systems range from large, environmentally controlled indoor facilities to outdoor and pasture-based operations and smallholder backyard rearing.',
          ],
        },
      ],
    },
    {
      id: 'types-and-breeds',
      heading: 'Types and breeds',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Commercial hybrid lines',
              description:
                'Crossbred pigs developed by commercial breeding companies, selected for growth rate, feed efficiency, litter size, and carcass characteristics; dominant in large-scale production.',
            },
            {
              term: 'Traditional and heritage breeds',
              description:
                'Purebred lines maintained for genetic diversity, specific market niches, or regional traditions, often with different growth and carcass profiles than commercial hybrids.',
            },
            {
              term: 'Local and landrace breeds',
              description:
                'Adapted over generations to local climate, feed resources, and smallholder conditions in specific regions.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Breed and genetic-line diversity is documented internationally, including through FAO’s Domestic Animal Diversity Information System (DAD-IS), which records breeds and their status by country.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'As monogastric omnivores, pigs are fed formulated diets rather than forage-based rations. Diets are typically built around cereal grains and protein sources, balanced with vitamins and minerals to match the animal’s life stage and production goal. This differs fundamentally from ruminant feeding, since pigs lack a rumen capable of efficiently fermenting large quantities of fibrous plant material.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements depend on breed or genetic line, body weight, physiological stage (growth, gestation, lactation), and production goal. Consensus nutrient-requirement references and local advisers or nutritionists should guide diet formulation rather than generic figures.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Pig health and welfare depend on appropriate nutrition and water, suitable housing or shelter with attention to temperature and ventilation, biosecurity to limit disease introduction and spread, and handling and environmental enrichment suited to pigs’ intelligent and social nature.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Veterinary and regulatory guidance',
          text: 'Animal health, disease control, medicines, and welfare are governed by regional regulations and professional veterinary advice. AgricultureID does not provide veterinary treatment instructions; follow local law and consult qualified professionals.',
        },
      ],
    },
    {
      id: 'production-context',
      heading: 'Production context',
      body: [
        {
          type: 'paragraph',
          text: 'Pig production is a major global source of animal protein and interacts closely with grain and protein-feed markets, given its reliance on formulated feed rather than grazed forage. Systems range from highly intensive, vertically integrated commercial operations to extensive outdoor and smallholder rearing, with biosecurity, manure management, and feed sourcing among the key considerations that vary by system and region.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'cattle' },
  ],
  geographicScope:
    'Global overview; breeds, systems, regulations, and guidance vary widely by country and region.',
  climateContext:
    'Pigs are farmed from tropical to cold-temperate regions; housing and environmental management differ substantially with climate.',
  limitations: [
    'This is a general species overview, not breed-, system-, or region-specific husbandry guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
    'Specific diet formulations and biosecurity protocols vary by production system and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Pig production systems and global role' },
    { sourceId: 'fao-dad-is', citedFor: 'Pig breeds and genetic diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
    { sourceId: 'usda-ars', citedFor: 'Swine production research context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pigs',
    description:
      'A reference on pigs: monogastric digestion, formulated feeding, breeding and growing–finishing systems, health and welfare principles, and pork production.',
    keywords: ['pigs', 'Sus scrofa domesticus', 'swine production', 'pork'],
  },
  structuredData: { article: true },
};
