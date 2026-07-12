import type { LivestockContent } from '@/types/content';

export const geese: LivestockContent = {
  id: 'livestock-geese',
  slug: 'geese',
  contentType: 'livestock',
  title: 'Geese',
  scientificName: 'Anser anser domesticus; Anser cygnoides domesticus',
  alternativeNames: ['Domestic goose', 'Waterfowl'],
  category: 'Livestock',
  subcategory: 'Monogastric poultry (waterfowl)',
  primaryProducts: [
    'Meat',
    'Eggs',
    'Down and feathers',
    'Grazing/weed-control service',
  ],
  productionSystems: [
    'Pasture-based grazing systems',
    'Free-range systems',
    'Small-scale and backyard systems',
  ],
  summary:
    'Geese are large, grass-grazing monogastric waterfowl kept for meat, eggs, and down, and valued in some systems for their strong grazing behaviour, which has historically been used for weed control in row crops and orchards.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Domestic geese descend mainly from two wild ancestors: the greylag goose (Anser anser), the origin of most European breeds, and the swan goose (Anser cygnoides), the origin of Chinese and African-type breeds. Like ducks and other poultry, geese are monogastric birds with a single-chambered stomach rather than a ruminant digestive system, but they are unusual among poultry for grazing grass and other green forage as a major part of their diet.',
    },
    {
      type: 'paragraph',
      text: 'This strong grazing habit has made geese useful historically as a low-input weeding tool — most notably in the "cotton patch goose" tradition of using flocks to graze weeds from cotton fields — alongside their long-standing roles producing meat, eggs, and down. Most modern goose production remains pasture-based, reflecting the species’ natural grazing behaviour.',
    },
  ],
  keyFacts: [
    {
      label: 'Species',
      value:
        'Anser anser domesticus (European types); Anser cygnoides domesticus (Chinese/African types)',
    },
    {
      label: 'Digestive type',
      value: 'Monogastric (single-chambered stomach); not a ruminant',
    },
    { label: 'Primary products', value: 'Meat, eggs, and down/feathers' },
    {
      label: 'Notable trait',
      value:
        'Strong grazing behaviour on grass and green forage, unusual among poultry',
    },
    {
      label: 'Main systems',
      value: 'Pasture-based, free-range, and small-scale backyard systems',
    },
    {
      label: 'Historical use',
      value:
        'Flocks have been used for mechanical-free weed control in row crops and orchards',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Goose production is smaller in scale than chicken or duck production in most countries, and is typically organised around pasture access, since geese graze far more of their diet than most other poultry. Breeds vary in size, colour, and temperament, with heavier breeds favoured for meat and down, and some regional breeds retained for their hardiness and grazing ability.',
        },
      ],
    },
    {
      id: 'breeds-and-uses',
      heading: 'Breeds and uses',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Meat and down breeds',
              description:
                'Larger breeds selected for growth rate, carcass yield, and down quality.',
            },
            {
              term: 'Egg-laying strains',
              description:
                'Selected for higher and more consistent egg output than typical dual-purpose flocks.',
            },
            {
              term: 'Grazing/weeder geese',
              description:
                'Regional types historically kept specifically for their grazing habit, used to control weeds in crops such as cotton and in orchards and vineyards.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Breed and genetic diversity is documented internationally, including through FAO’s Domestic Animal Diversity Information System (DAD-IS), which records poultry breeds and their conservation status by country.',
        },
      ],
    },
    {
      id: 'nutrition-and-feeding',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Geese can meet a substantial share of their nutritional needs by grazing grass and other green forage, more so than chickens, turkeys, or most ducks, and pasture quality strongly influences growth and condition in extensively managed flocks. Formulated rations are commonly used to supplement pasture, particularly for goslings, breeding stock, and finishing birds where faster growth is wanted.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Grazing capacity, stocking density, and supplemental feeding needs depend on pasture quality, season, and flock age; follow supplier and poultry extension guidance rather than a single fixed programme.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Goose health and welfare depend on adequate pasture or forage access, clean water, shelter from extreme weather and predators, and biosecurity practices that limit disease introduction and spread, including attention to avian influenza risks common to waterfowl.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Veterinary and regulatory guidance',
          text: 'Animal health, disease control, medicines, and welfare are governed by regional regulations and professional veterinary advice. AgricultureID does not provide veterinary treatment instructions; follow local law and qualified professionals.',
        },
      ],
    },
    {
      id: 'production-context',
      heading: 'Production context',
      body: [
        {
          type: 'paragraph',
          text: 'Because of their intensive grazing, geese interact closely with land use and pasture management, and their historical use as living weeders in cotton, orchards, and vineyards illustrates a niche role in integrated crop–livestock management, alongside their more conventional place in meat, egg, and down production.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'ducks' },
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'turkeys' },
  ],
  connections: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  geographicScope:
    'Global overview; breeds, systems, and regulations vary widely by country and region.',
  climateContext:
    'Geese are kept from temperate to subtropical regions; pasture growth and seasonal forage availability strongly shape management.',
  limitations: [
    'This is a general species overview, not breed-, system-, or region-specific husbandry guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Goose production systems and global role' },
    { sourceId: 'fao-dad-is', citedFor: 'Goose breeds and genetic diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Geese',
    description:
      'A reference on geese: breeds and grazing behaviour, pasture-based feeding, health and welfare, and their historical role weeding crops and orchards.',
    keywords: ['geese', 'goose farming', 'waterfowl', 'grazing poultry'],
  },
  structuredData: { article: true },
};
