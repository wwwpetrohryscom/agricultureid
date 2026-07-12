import type { LivestockContent } from '@/types/content';

export const horses: LivestockContent = {
  id: 'livestock-horses',
  slug: 'horses',
  contentType: 'livestock',
  title: 'Horses',
  scientificName: 'Equus caballus',
  alternativeNames: ['Equines', 'Ponies'],
  category: 'Livestock',
  subcategory: 'Monogastric (hindgut fermenter)',
  primaryProducts: [
    'Draught and working power',
    'Transport and recreation',
    'Manure',
  ],
  productionSystems: [
    'Pasture-based grazing',
    'Stabled and semi-stabled systems',
    'Working-animal systems (draught and transport)',
  ],
  summary:
    'Horses are large monogastric herbivores kept worldwide for draught power, transport, recreation, and, in some countries, meat. As hindgut fermenters rather than ruminants, they digest fibrous forage in the cecum and colon and are managed across grazing, stabled, and working-animal systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Horses (Equus caballus) are domesticated equines used across agriculture and rural livelihoods for draught power, transport, and recreation, alongside smaller-scale meat and by-product production in some countries. Unlike cattle, sheep, and goats, horses are not ruminants: they are monogastric animals with a single stomach, but they are hindgut fermenters, using an enlarged cecum and colon to ferment fibrous plant material after it passes through the stomach and small intestine.',
    },
    {
      type: 'paragraph',
      text: 'This digestive strategy allows horses to derive substantial nutrition from forage such as pasture and hay, while also requiring careful feeding management, because fermentation happens after — rather than before — the main absorptive section of the gut. Production and use of horses range from extensive pasture-based systems to intensively managed stables supporting working, sport, or breeding animals.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Equus caballus' },
    {
      label: 'Digestive type',
      value:
        'Monogastric, hindgut fermenter (cecum and colon) — not a ruminant',
    },
    {
      label: 'Primary roles',
      value: 'Draught power, transport, and recreation; meat in some countries',
    },
    {
      label: 'Feed base',
      value:
        'Forage (pasture, hay) supplemented with grain concentrates as needed',
    },
    {
      label: 'Main systems',
      value: 'Pasture-based, stabled, and working-animal management',
    },
    {
      label: 'Global breeds',
      value: 'Hundreds of breeds and types recorded in FAO’s DAD-IS registry',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Horses are kept for a wide range of purposes that vary by region and economy, including draught and transport work in mixed farming systems, recreational and sport use, breeding, and, in some countries, meat production. Their role in agriculture has shifted over the past century as mechanised power has replaced draught animals in many regions, though working horses, donkeys, and mules remain important in others.',
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
              term: 'Draught and working horses',
              description:
                'Bred and managed for pulling or carrying loads, historically central to farm power and transport, and still used in some regions and specialised contexts.',
            },
            {
              term: 'Sport and recreational horses',
              description:
                'Kept for riding, competition, and leisure, spanning many breeds selected for temperament, movement, or athletic ability.',
            },
            {
              term: 'Pony and local/landrace types',
              description:
                'Smaller or regionally adapted types, often hardy and suited to local terrain, climate, and smallholder use.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Breed and type diversity is documented internationally, including through FAO’s Domestic Animal Diversity Information System (DAD-IS), which records equine breeds and their status by country.',
        },
      ],
    },
    {
      id: 'nutrition-and-feeding',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Horses are adapted to graze and browse for many hours a day, and their digestive health depends on a forage-based diet — pasture, hay, or other preserved forage — as the foundation of feeding. Because fermentation occurs in the hindgut rather than a rumen, introducing large amounts of starch-rich concentrate too quickly can disrupt the hindgut microbial balance, so grain and concentrate feeds are typically introduced and adjusted gradually alongside forage.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient and forage requirements depend on body weight, workload, age, and physiological status (growth, pregnancy, lactation). Consensus nutrient-requirement references and qualified equine nutritionists or veterinarians should guide ration changes rather than generic figures.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Horse health and welfare depend on consistent access to forage and water, appropriate shelter or housing, routine hoof and dental care, parasite and disease management, and handling suited to the animal’s temperament and use.',
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
          text: 'Horses interact with land use and feed production in ways similar to other grazing livestock, using pasture and forage crops, while their role in draught work, transport, and recreation gives them a different economic position from primarily food-producing species. Regulation of horse movement, identification, and, where applicable, the food chain for equine meat varies substantially by country.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'goats' },
  ],
  connections: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global overview; breeds, uses, systems, and regulations vary widely by country and region.',
  climateContext:
    'Horses are kept from tropical to cold-temperate regions; forage availability, shelter needs, and management differ with climate.',
  limitations: [
    'This is a general species overview, not breed-, discipline-, or region-specific care or feeding guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Equine production and role in agriculture' },
    { sourceId: 'fao-dad-is', citedFor: 'Horse breeds and genetic diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Horses',
    description:
      'A reference on horses: hindgut-fermenter digestion, forage-based feeding, breed types and uses, health and welfare, and their role in farming systems.',
    keywords: [
      'horses',
      'Equus caballus',
      'equine nutrition',
      'hindgut fermenter',
    ],
  },
  structuredData: { article: true },
};
