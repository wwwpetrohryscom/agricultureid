import type { LivestockContent } from '@/types/content';

export const waterBuffalo: LivestockContent = {
  id: 'livestock-water-buffalo',
  slug: 'water-buffalo',
  contentType: 'livestock',
  title: 'Water Buffalo',
  scientificName: 'Bubalus bubalis',
  alternativeNames: ['Domestic water buffalo', 'Carabao (swamp type)'],
  category: 'Livestock',
  subcategory: 'Ruminant (large)',
  primaryProducts: ['Milk', 'Meat', 'Draught power', 'Hides', 'Manure'],
  productionSystems: [
    'Pasture and wetland grazing systems',
    'Mixed crop–livestock systems',
    'Housed and semi-housed dairy systems',
  ],
  summary:
    'Water buffalo are large ruminants raised across Asia and increasingly in other regions for milk, meat, and draught power, especially in rice-based farming systems. River and swamp types are adapted to hot, humid climates and frequently wallow in water or mud.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The domestic water buffalo (Bubalus bubalis) is a true ruminant, like cattle, with a four-compartment stomach adapted to ferment fibrous forage. Two broad types are recognised: river buffalo, selectively bred mainly for milk yield (for example, the Murrah breed), and swamp buffalo, valued primarily for draught power in wetland and rice-paddy farming across South and Southeast Asia.',
    },
    {
      type: 'paragraph',
      text: 'Water buffalo are strongly associated with hot, humid environments and wetland or paddy landscapes. They have comparatively few sweat glands and regularly wallow in water or mud to regulate body temperature, a behaviour that also ties them closely to flooded rice cultivation, where swamp buffalo have long been used to puddle fields ahead of transplanting.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Bubalus bubalis' },
    { label: 'Digestive type', value: 'Ruminant (four-compartment stomach)' },
    {
      label: 'Main types',
      value: 'River buffalo (dairy-focused); swamp buffalo (draught-focused)',
    },
    {
      label: 'Primary products',
      value: 'Milk, meat, hides; draught power and manure in many systems',
    },
    {
      label: 'Notable trait',
      value: 'Wallowing behaviour for thermoregulation in hot, humid climates',
    },
    {
      label: 'Feed base',
      value:
        'Forage (grass, crop residues, aquatic vegetation) with supplements as needed',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Water buffalo production is concentrated in South and Southeast Asia, where the species underpins both smallholder mixed crop–livestock farming and specialised dairy operations producing milk valued for its high fat and solids content. Draught use has declined with mechanisation in many areas but remains significant in smaller-scale rice systems.',
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
              term: 'River buffalo breeds',
              description:
                'Selected primarily for milk yield and composition (for example, Murrah and Nili-Ravi).',
            },
            {
              term: 'Swamp buffalo',
              description:
                'Valued mainly for draught power and meat, closely associated with wetland rice farming across Southeast Asia.',
            },
            {
              term: 'Local and crossbred types',
              description:
                'Regionally adapted animals balancing milk, meat, and draught use, often hardy in marginal wetland environments.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Breed diversity is documented internationally, including through FAO’s Domestic Animal Diversity Information System (DAD-IS), which records buffalo breeds and their status by country.',
        },
      ],
    },
    {
      id: 'nutrition-and-feeding',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'As ruminants, water buffalo diets are built around forage — grazed pasture, crop residues, and, in wetland systems, aquatic vegetation — fermented in the rumen. Depending on the production system and stage, forage may be supplemented with concentrates and minerals to support milk yield or growth.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements depend on breed, body weight, and production stage (growth, lactation, work); consensus requirement references and local advisers should guide ration formulation.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Water buffalo health and welfare depend on access to water or wallows for thermoregulation, appropriate shelter from extreme heat, adequate nutrition, and disease prevention. Their tolerance of hot, humid conditions is closely tied to access to water, making it a core welfare consideration distinct from many cattle systems.',
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
          text: 'Water buffalo are closely integrated with rice-based farming systems, historically providing draught power for paddy preparation and, throughout, manure that returns nutrients to the field. Milk and meat production increasingly occur in more specialised, less land-tied systems, but the species remains most strongly associated with the wetland and rice landscapes where it was domesticated.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'goats' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'soil-topic', slug: 'waterlogging' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Concentrated in South and Southeast Asia, with growing populations elsewhere; breeds, systems, and regulations vary by country and region.',
  climateContext:
    'Water buffalo are best adapted to hot, humid climates and wetland environments, relying on water access for thermoregulation.',
  limitations: [
    'This is a general species overview, not breed-, system-, or region-specific husbandry guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Water buffalo production systems and global role',
    },
    { sourceId: 'fao-dad-is', citedFor: 'Water buffalo breeds and diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Water Buffalo',
    description:
      'A reference on water buffalo: river and swamp types, ruminant feeding, wallowing and heat tolerance, and their role in rice and wetland farming systems.',
    keywords: [
      'water buffalo',
      'Bubalus bubalis',
      'swamp buffalo',
      'ruminant livestock',
    ],
  },
  structuredData: { article: true },
};
