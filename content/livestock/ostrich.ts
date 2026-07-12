import type { LivestockContent } from '@/types/content';

export const ostrich: LivestockContent = {
  id: 'livestock-ostrich',
  slug: 'ostrich',
  contentType: 'livestock',
  title: 'Ostrich',
  scientificName: 'Struthio camelus',
  alternativeNames: ['Common ostrich'],
  category: 'Livestock',
  subcategory: 'Ratite (flightless bird)',
  primaryProducts: ['Meat', 'Leather (hide)', 'Feathers', 'Eggs (minor)'],
  productionSystems: [
    'Extensive and semi-intensive ranching',
    'Intensive commercial farming',
    'Breeding-pair (trio) systems',
  ],
  summary:
    'Ostriches are large, flightless ratite birds farmed worldwide for meat, leather, and feathers. As monogastric birds adapted to arid grassland, they are raised in both extensive ranching and intensive commercial systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The ostrich (Struthio camelus) is the world’s largest living bird, a flightless ratite native to the grasslands and semi-arid savanna of Africa. Commercial ostrich farming developed around three main products — meat prized for being low in fat, distinctive and durable leather, and decorative feathers — with eggs a minor by-product. Farmed populations are now found across Africa, Europe, the Americas, and parts of Asia.',
    },
    {
      type: 'paragraph',
      text: 'Unlike chickens and other common poultry, ostriches are monogastric birds without a true crop, relying on a muscular gizzard and swallowed grit to break down coarse plant material. Their large size, long production cycle to slaughter or breeding maturity, and specific housing and handling needs distinguish ostrich farming from conventional poultry production.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Struthio camelus' },
    {
      label: 'Digestive type',
      value: 'Monogastric bird; gizzard-based digestion, no crop',
    },
    {
      label: 'Primary products',
      value: 'Meat, leather, and feathers; eggs a minor product',
    },
    {
      label: 'Typical system',
      value: 'Extensive ranching through to intensive commercial farms',
    },
    {
      label: 'Feed base',
      value: 'Formulated pelleted rations plus pasture/forage and grit',
    },
    { label: 'Native range', value: 'African grassland and semi-arid savanna' },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Commercial ostrich farming is generally organised around a three-product model — meat, leather, and feathers — with the relative economic weight of each varying by market and region. Breeding stock is typically managed in pairs or trios, and birds are reared to slaughter age over a period of many months.',
        },
      ],
    },
    {
      id: 'types-and-production-lines',
      heading: 'Types and production lines',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Meat production',
              description:
                'Birds reared for lean, low-fat red meat marketed as a specialty product in many countries.',
            },
            {
              term: 'Leather production',
              description:
                'Hides processed into distinctive, durable leather used in fashion and accessory goods.',
            },
            {
              term: 'Feather production',
              description:
                'Feathers harvested for decorative, fashion, and industrial (dusting) uses.',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrition-and-feeding',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Ostrich diets combine formulated pelleted rations with pasture or cut forage such as lucerne (alfalfa), plus grit to support gizzard-based digestion. Ration composition shifts with growth stage, from higher-protein starter diets for chicks to maintenance and breeder rations for adults.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements depend on age, growth rate, and breeding status. Species-specific ratite nutrition references and local advisers should guide ration formulation.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Ostrich husbandry requires handling facilities and fencing suited to a large, strong, and potentially defensive bird, alongside appropriate stocking density, shelter from extreme weather, and routine disease prevention.',
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
          text: 'Ostrich farming can make productive use of arid and semi-arid land less suited to cropping, and the species’ tolerance of heat and drought supports its role as a specialty livestock enterprise in regions with limited water and rainfall.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'turkeys' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'temperature' },
  ],
  geographicScope:
    'Global overview of a farmed species originating in Africa; farming scale, regulation, and market structure vary widely by country.',
  climateContext:
    'Ostriches are native to arid and semi-arid African grassland and tolerate heat and drought well, though housing and management must still protect against extreme cold and wet conditions.',
  limitations: [
    'This is a general species overview, not a farm-system or region-specific production guide.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Ostrich farming systems and global role' },
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Ratite genetic resources and diversity',
    },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Ratite nutrition and production research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Ostrich',
    description:
      'A reference on farmed ostriches: ratite biology and monogastric digestion, meat, leather, and feather production, nutrition, and health and welfare.',
    keywords: ['ostrich', 'Struthio camelus', 'ratite farming', 'ostrich meat'],
  },
  structuredData: { article: true },
};
