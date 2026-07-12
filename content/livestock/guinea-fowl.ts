import type { LivestockContent } from '@/types/content';

export const guineaFowl: LivestockContent = {
  id: 'livestock-guinea-fowl',
  slug: 'guinea-fowl',
  contentType: 'livestock',
  title: 'Guinea Fowl',
  scientificName: 'Numida meleagris',
  alternativeNames: ['Guinea hen', 'Pintade'],
  category: 'Livestock',
  subcategory: 'Poultry',
  primaryProducts: ['Meat', 'Eggs', 'Insect and pest foraging'],
  productionSystems: [
    'Free-range and scavenging systems',
    'Mixed smallholder poultry systems',
    'Commercial meat production',
  ],
  summary:
    'Guinea fowl are hardy, ground-dwelling poultry farmed for meat and eggs and valued for their active foraging on insects and other invertebrates. Widely kept in free-range and mixed smallholder systems, they are also raised commercially for meat.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The helmeted guinea fowl (Numida meleagris), domesticated from a wild African species, is a hardy, ground-dwelling poultry bird raised across Africa, Europe, and beyond for meat and eggs. Guinea fowl are notably vigilant and vocal, and are frequently kept alongside other poultry or livestock for their alarm-calling behaviour as well as their production value.',
    },
    {
      type: 'paragraph',
      text: 'A distinctive feature of guinea fowl husbandry is their active foraging on insects, other invertebrates, and some plant material, which has led to their traditional use in mixed farms as a check on certain garden and field insect pests. This foraging behaviour also means guinea fowl require careful integration with cropping activities to avoid unwanted damage to seedlings.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Numida meleagris' },
    { label: 'Digestive type', value: 'Monogastric poultry' },
    {
      label: 'Primary products',
      value: 'Meat and eggs; valued for insect and pest foraging',
    },
    {
      label: 'Typical system',
      value: 'Free-range, scavenging, and mixed smallholder systems',
    },
    {
      label: 'Feed base',
      value:
        'Foraged insects and plant material supplemented with grain rations',
    },
    {
      label: 'Behaviour',
      value: 'Vigilant and vocal; noted for alerting to predators',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Guinea fowl are raised both for direct production of meat and eggs and for their foraging behaviour, which is valued in mixed farms and gardens as a means of reducing certain insect pest populations.',
        },
      ],
    },
    {
      id: 'types-and-uses',
      heading: 'Types and uses',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Meat production',
              description:
                'Guinea fowl raised primarily for their distinctive, leaner meat.',
            },
            {
              term: 'Egg production',
              description:
                'Smaller-scale laying for household or niche markets.',
            },
            {
              term: 'Free-range pest-foraging role',
              description:
                'Birds kept partly for their foraging on insects and invertebrates in yards, gardens, and mixed farms.',
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
          text: 'Guinea fowl are omnivorous foragers, consuming insects, seeds, and green plant material when free-ranging, supplemented with formulated grain-based poultry rations, particularly for confined or commercial birds.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements depend on production purpose, growth stage, and the extent of free-range foraging available. Poultry nutrient requirement references and local advisers should guide supplementary feeding.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Guinea fowl are generally hardy and disease-resistant relative to some other poultry, but free-range systems still require attention to predator protection, biosecurity, and appropriate shelter.',
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
          text: 'Guinea fowl have a long-standing role in mixed smallholder farms, particularly in Africa, where their foraging is traditionally valued alongside meat and egg production and their alertness helps deter some predators from poultry yards.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'ducks' },
  ],
  connections: [
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'slugs' },
    { type: 'crop', slug: 'maize' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global overview, with strong traditional roles in African and mixed smallholder systems; farming scale and regulation vary by region.',
  climateContext:
    'Guinea fowl are hardy across a range of climates and are commonly kept in free-range systems in warm and temperate regions alike.',
  limitations: [
    'This is a general species overview, not a system- or region-specific production guide.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Guinea fowl production and smallholder role',
    },
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Guinea fowl genetic resources and diversity',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Poultry nutrition and production research',
    },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Guinea Fowl',
    description:
      'A reference on guinea fowl: hardy free-range poultry raised for meat and eggs, valued for foraging on insects, plus nutrition and welfare basics.',
    keywords: [
      'guinea fowl',
      'Numida meleagris',
      'free-range poultry',
      'pest foraging',
    ],
  },
  structuredData: { article: true },
};
