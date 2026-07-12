import type { LivestockContent } from '@/types/content';

export const cattle: LivestockContent = {
  id: 'livestock-cattle',
  slug: 'cattle',
  contentType: 'livestock',
  title: 'Cattle',
  scientificName: 'Bos taurus; Bos indicus',
  alternativeNames: ['Cows', 'Bovines'],
  category: 'Livestock',
  subcategory: 'Ruminant (large)',
  primaryProducts: ['Milk', 'Meat (beef)', 'Hides', 'Draught power', 'Manure'],
  productionSystems: [
    'Pasture-based grazing',
    'Mixed crop–livestock systems',
    'Housed and semi-housed systems',
  ],
  summary:
    'Cattle are large domesticated ruminants raised worldwide for milk, beef, hides, and draught power. As ruminants, they can convert forage and by-products into food, and are managed across a wide range of systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cattle are among the most economically important domesticated animals, kept across almost every agricultural region for milk, meat, hides, manure, and, in many systems, draught power. Domesticated cattle include taurine types (Bos taurus), common in temperate regions, and zebu or indicine types (Bos indicus), well adapted to hot climates, along with many crossbreeds.',
    },
    {
      type: 'paragraph',
      text: 'As ruminants, cattle can digest fibrous plant material that humans cannot eat, allowing them to use grassland and crop by-products. Production systems range from extensive grazing to intensive housed operations, and management practices vary accordingly.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Bos taurus (taurine); Bos indicus (zebu)' },
    { label: 'Digestive type', value: 'Ruminant (four-compartment stomach)' },
    {
      label: 'Primary products',
      value: 'Milk, beef, hides; draught power and manure in many systems',
    },
    { label: 'Main purposes', value: 'Dairy, beef, dual-purpose, and draught' },
    {
      label: 'Feed base',
      value: 'Forage (grass, hay, silage) with supplements as needed',
    },
    {
      label: 'Global breeds',
      value: 'Hundreds of recognised breeds recorded in DAD-IS',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cattle production is broadly divided into dairy systems, which focus on milk, and beef systems, which focus on meat, with many dual-purpose and mixed systems in between. The choice of breed, feeding, and management follows the production goal, the local environment, and market conditions.',
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
              term: 'Dairy breeds',
              description:
                'Selected primarily for milk yield and composition (for example, several well-known European-origin breeds).',
            },
            {
              term: 'Beef breeds',
              description:
                'Selected for growth, muscling, and carcass characteristics.',
            },
            {
              term: 'Dual-purpose and local breeds',
              description:
                'Balanced for milk, meat, and often traits such as heat tolerance or hardiness suited to local conditions.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Breed diversity is documented internationally, including through FAO’s Domestic Animal Diversity Information System (DAD-IS), which records breeds and their status by country.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Cattle diets are built around forage — grazed pasture, hay, and silage — because the rumen is adapted to ferment fibrous feeds. Depending on the system and production stage, forage may be supplemented with concentrates, minerals, and vitamins to meet requirements.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements depend on species, weight, stage (growth, lactation, pregnancy), and production level. Consensus requirement references and local advisers should guide ration formulation.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Good husbandry protects animal health and welfare and underpins productivity. Core elements include appropriate nutrition and water, comfortable housing or shelter, disease prevention, and low-stress handling.',
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
          text: 'Cattle systems interact with land use, feed production, water, and nutrient cycling. They can make productive use of land unsuitable for crops and recycle nutrients through manure, while also carrying environmental considerations that are actively researched and managed. The balance of these factors is highly system- and region-specific.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'sheep' },
    { type: 'livestock', slug: 'goats' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview; breeds, systems, regulations, and guidance vary widely by country and region.',
  climateContext:
    'Cattle are kept from tropical to cold-temperate regions; breed adaptation and management differ with climate.',
  limitations: [
    'This is a general species overview, not breed-, system-, or region-specific husbandry guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Cattle production systems and global role' },
    { sourceId: 'fao-dad-is', citedFor: 'Cattle breeds and diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cattle',
    description:
      'A reference on cattle: species and breeds, ruminant nutrition and feeding, health and welfare principles, production systems, and their agricultural context.',
    keywords: ['cattle', 'Bos taurus', 'ruminant livestock', 'beef and dairy'],
  },
  structuredData: { article: true },
};
