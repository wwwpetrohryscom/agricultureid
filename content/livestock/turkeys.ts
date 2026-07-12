import type { LivestockContent } from '@/types/content';

export const turkeys: LivestockContent = {
  id: 'livestock-turkeys',
  slug: 'turkeys',
  contentType: 'livestock',
  title: 'Turkeys',
  scientificName: 'Meleagris gallopavo',
  alternativeNames: ['Domestic turkey', 'Toms and hens (turkey)'],
  category: 'Livestock',
  subcategory: 'Monogastric (poultry)',
  primaryProducts: [
    'Meat (turkey meat)',
    'Eggs (limited commercial use)',
    'Manure',
  ],
  productionSystems: [
    'Intensive indoor commercial systems',
    'Free-range and pasture-based systems',
    'Smallholder and backyard flocks',
  ],
  summary:
    'Turkeys are large domesticated monogastric birds raised primarily for meat, with commercial production concentrated in a small number of fast-growing strains and smallholder or heritage flocks kept more widely for local consumption.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Turkeys (Meleagris gallopavo) are among the largest domesticated poultry species, raised mainly for meat. As monogastric birds, they share the single-stomach, crop-and-gizzard digestive system typical of poultry rather than the fermenting rumen of ruminant livestock, and are fed formulated grain- and protein-based diets rather than forage.',
    },
    {
      type: 'paragraph',
      text: 'Commercial turkey production is dominated by fast-growing, broad-breasted strains selected for rapid weight gain and breast-meat yield, typically raised in environmentally controlled housing. Heritage and traditional turkey breeds, by contrast, grow more slowly and are kept more often in smallholder, backyard, or specialty markets.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Meleagris gallopavo' },
    {
      label: 'Digestive type',
      value:
        'Monogastric bird (single-stomach, with crop and gizzard) — not a ruminant',
    },
    { label: 'Primary product', value: 'Meat (turkey meat)' },
    {
      label: 'Main types',
      value:
        'Fast-growing commercial strains and slower-growing heritage/traditional breeds',
    },
    {
      label: 'Feed base',
      value:
        'Formulated diets based on grains and protein sources, not forage-based',
    },
    {
      label: 'Global breeds',
      value:
        'Multiple breeds and commercial strains recorded in FAO’s DAD-IS registry',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Turkey production divides broadly into large-scale commercial meat production, using intensively selected strains raised on formulated feed in controlled housing, and smaller-scale or heritage production, which favours slower-growing, traditional breeds often kept on pasture or in backyard flocks. Market demand, biosecurity requirements, and available infrastructure shape which model predominates in a given region.',
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
              term: 'Broad-breasted commercial strains',
              description:
                'Selected intensively for rapid growth and breast-meat yield, dominant in large-scale commercial meat production.',
            },
            {
              term: 'Heritage and traditional breeds',
              description:
                'Slower-growing breeds retained for genetic diversity, distinct market niches, and smallholder or pasture-based systems.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Breed and strain diversity is documented internationally, including through FAO’s Domestic Animal Diversity Information System (DAD-IS), which records poultry breeds and their status by country.',
        },
      ],
    },
    {
      id: 'nutrition-and-feeding',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'As monogastric birds, turkeys are fed formulated diets rather than forage-based rations, typically built around cereal grains and protein sources and balanced with vitamins and minerals to match age, strain, and growth stage. Because turkeys lack a rumen, they cannot make efficient use of large quantities of fibrous forage the way ruminants do.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements depend on strain or breed, age, and production stage. Consensus nutrient-requirement references and local advisers or poultry nutritionists should guide diet formulation rather than generic figures.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Flock health and welfare depend on appropriate nutrition and water, suitable housing with attention to ventilation, temperature, and stocking density, and biosecurity to limit the introduction and spread of disease, including diseases of concern to both poultry and public health.',
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
          text: 'Turkey meat is an important protein source in a number of markets, with production closely tied to grain and protein-feed availability given the reliance on formulated feed rather than grazed forage. Biosecurity is a particular focus in turkey production because of susceptibility to several avian diseases, and management practices vary considerably between large integrated operations and smaller or heritage flocks.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'pigs' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  geographicScope:
    'Global overview; breeds, systems, regulations, and guidance vary widely by country and region.',
  climateContext:
    'Turkeys are farmed from tropical to cold-temperate regions; housing, ventilation, and environmental management differ substantially with climate.',
  limitations: [
    'This is a general species overview, not breed-, system-, or region-specific husbandry guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Poultry production systems and global role' },
    { sourceId: 'fao-dad-is', citedFor: 'Turkey breeds and genetic diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Turkeys',
    description:
      'A reference on turkeys: commercial and heritage breeds, monogastric feeding, health and welfare principles, and turkey meat production explained.',
    keywords: [
      'turkeys',
      'Meleagris gallopavo',
      'poultry production',
      'turkey meat',
    ],
  },
  structuredData: { article: true },
};
