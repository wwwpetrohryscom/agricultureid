import type { LivestockContent } from '@/types/content';

export const chickens: LivestockContent = {
  id: 'livestock-chickens',
  slug: 'chickens',
  contentType: 'livestock',
  title: 'Chickens',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['Poultry', 'Hens', 'Roosters', 'Broilers', 'Layers'],
  category: 'Livestock',
  subcategory: 'Monogastric (poultry)',
  primaryProducts: ['Eggs', 'Meat (chicken/poultry meat)', 'Manure'],
  productionSystems: [
    'Intensive indoor commercial systems (broiler and layer)',
    'Free-range and pasture-based systems',
    'Backyard and smallholder flocks',
    'Mixed crop–poultry systems',
  ],
  summary:
    'Chickens are domesticated monogastric birds raised worldwide for eggs and meat. Distinct broiler (meat) and layer (egg) types have been developed, and production ranges from backyard flocks to large intensive commercial systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chickens are the most numerous domesticated bird and one of the most widely kept livestock species globally, valued for eggs and meat. As monogastric animals with a single-stomach digestive system (supplemented by structures such as the crop and gizzard rather than a fermenting rumen), chickens are fed formulated diets rather than the forage-based rations used for ruminants.',
    },
    {
      type: 'paragraph',
      text: 'Modern commercial chicken production is typically divided into two specialised types: broilers, bred and raised for meat, and layers, bred and kept for egg production, each with distinct genetics, management, and growth patterns. Backyard and smallholder flocks, by contrast, often keep dual-purpose or traditional breeds for both eggs and meat.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Gallus gallus domesticus' },
    {
      label: 'Digestive type',
      value:
        'Monogastric bird (single-stomach, with crop and gizzard) — not a ruminant',
    },
    { label: 'Primary products', value: 'Eggs and meat (poultry meat)' },
    {
      label: 'Main types',
      value: 'Broilers (meat), layers (eggs), and dual-purpose breeds',
    },
    {
      label: 'Feed base',
      value:
        'Formulated diets based on grains and protein sources, not forage-based',
    },
    {
      label: 'Global breeds',
      value:
        'Numerous breeds and commercial strains recorded in FAO’s DAD-IS registry',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Commercial chicken production centres on two specialised streams. Broiler production raises chickens for meat, using genetic lines selected for rapid growth and feed efficiency over a relatively short rearing period. Layer production keeps hens for egg output over an extended laying cycle, using lines selected for egg number, size, and shell quality.',
        },
        {
          type: 'list',
          items: [
            'Broilers — meat-type chickens selected for fast growth and efficient feed conversion.',
            'Layers — egg-type hens selected for sustained, high egg production.',
            'Dual-purpose and traditional breeds — kept for both eggs and meat, common in backyard and smallholder settings.',
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
              term: 'Broiler strains',
              description:
                'Commercial meat-type genetic lines selected for rapid growth rate, breast-meat yield, and feed efficiency.',
            },
            {
              term: 'Layer strains',
              description:
                'Commercial egg-type genetic lines selected for high, sustained egg production and feed efficiency per egg.',
            },
            {
              term: 'Dual-purpose and heritage breeds',
              description:
                'Traditional breeds balanced for both egg and meat production, widely kept in backyard and smallholder flocks and valued for hardiness or foraging ability.',
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
      id: 'nutrition',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'As monogastric birds, chickens are fed formulated diets rather than forage-based rations. Diets are typically based on cereal grains and protein sources, balanced with vitamins and minerals to suit the bird’s type (broiler or layer), age, and production stage. Because chickens lack a rumen, they cannot efficiently use large quantities of fibrous forage the way ruminants do.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements depend on breed or strain, age, production purpose (growth for meat versus sustained laying), and production level. Consensus nutrient-requirement references and local advisers or poultry nutritionists should guide diet formulation rather than generic figures.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Flock health and welfare depend on appropriate nutrition and water, suitable housing with attention to ventilation, temperature, and stocking density, biosecurity to limit disease introduction (including diseases of concern to both poultry and public health), and management suited to flock behaviour, including access to nesting, perching, or foraging opportunities depending on the system.',
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
          text: 'Chicken production is a major global source of eggs and affordable animal protein, with efficient feed conversion relative to many other livestock species. Systems range from highly integrated commercial broiler and layer operations to free-range and backyard flocks, with biosecurity, feed sourcing, and manure management among the key considerations that vary by system and region.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'cattle' },
  ],
  geographicScope:
    'Global overview; breeds, systems, regulations, and guidance vary widely by country and region.',
  climateContext:
    'Chickens are farmed from tropical to cold-temperate regions; housing, ventilation, and environmental management differ substantially with climate.',
  limitations: [
    'This is a general species overview, not breed-, system-, or region-specific husbandry guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
    'Specific diet formulations and biosecurity protocols vary by production system and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Poultry production systems and global role' },
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Chicken breeds and genetic diversity',
    },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
    { sourceId: 'usda-ars', citedFor: 'Poultry production research context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Chickens',
    description:
      'A reference on chickens: broiler and layer types, monogastric feeding, health and welfare principles, and egg and poultry meat production explained.',
    keywords: [
      'chickens',
      'Gallus gallus domesticus',
      'poultry production',
      'broilers and layers',
    ],
  },
  structuredData: { article: true },
};
