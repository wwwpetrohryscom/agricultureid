import type { LivestockContent } from '@/types/content';

export const sheep: LivestockContent = {
  id: 'livestock-sheep',
  slug: 'sheep',
  contentType: 'livestock',
  title: 'Sheep',
  scientificName: 'Ovis aries',
  alternativeNames: ['Ewes', 'Rams', 'Lambs'],
  category: 'Livestock',
  subcategory: 'Ruminant (small)',
  primaryProducts: [
    'Wool',
    'Meat (lamb and mutton)',
    'Milk',
    'Hides (sheepskin)',
  ],
  productionSystems: [
    'Extensive hill and rangeland grazing',
    'Lowland pasture-based systems',
    'Mixed crop–livestock systems',
    'Housed or semi-housed systems (seasonal in some regions)',
  ],
  summary:
    'Sheep are small domesticated ruminants raised worldwide for wool, meat, milk, and hides. They are well suited to grazing a wide range of terrain, including land too steep or marginal for other livestock or crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sheep are among the earliest domesticated livestock and remain widespread across grassland, hill, and rangeland systems on every inhabited continent. Breeds have diversified for wool, meat, milk, or a combination of these purposes, and for adaptation to local climates ranging from arid rangeland to cold uplands.',
    },
    {
      type: 'paragraph',
      text: 'As ruminants, sheep ferment fibrous forage in a specialised stomach, allowing them to convert grass and browse that humans cannot digest into wool, meat, and milk. Their relatively small size, hardiness, and flocking behaviour make them well suited to grazing marginal or steep land and to management in mobile or seasonal systems.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Ovis aries' },
    { label: 'Digestive type', value: 'Ruminant (four-compartment stomach)' },
    {
      label: 'Primary products',
      value: 'Wool, lamb and mutton, milk, sheepskin',
    },
    {
      label: 'Main purposes',
      value:
        'Wool, meat (lamb/mutton), dairy, and dual- or triple-purpose types',
    },
    {
      label: 'Feed base',
      value: 'Pasture, browse, hay, and silage, with supplements as needed',
    },
    {
      label: 'Global breeds',
      value: 'Hundreds of breeds recorded in FAO’s DAD-IS registry',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Sheep production spans wool-focused systems, meat (lamb and mutton) systems, dairy sheep systems producing milk for cheese and other products, and dual- or triple-purpose flocks combining these outputs. The relative emphasis depends on breed, region, market demand, and terrain.',
        },
        {
          type: 'list',
          items: [
            'Wool production — fleece quality, staple length, and micron count are selection priorities.',
            'Meat production — growth rate, muscling, and carcass characteristics are prioritised for lamb and mutton.',
            'Dairy sheep — milk yield and composition support cheese and other dairy products in some regions.',
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
              term: 'Wool breeds',
              description:
                'Selected primarily for fleece characteristics such as fineness, staple length, and yield.',
            },
            {
              term: 'Meat breeds',
              description:
                'Selected for growth rate, carcass conformation, and lamb production efficiency.',
            },
            {
              term: 'Dairy breeds',
              description:
                'Selected for milk yield and composition, used in regional cheese and dairy traditions.',
            },
            {
              term: 'Hair sheep and hardy local breeds',
              description:
                'Adapted to specific climates or terrain, often shedding wool naturally and requiring less fleece management; valued for hardiness and parasite tolerance in some environments.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Breed diversity is documented internationally, including through FAO’s Domestic Animal Diversity Information System (DAD-IS), which records breeds and their conservation status by country.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Sheep are grazing ruminants whose diets are built around pasture, browse, hay, and silage, reflecting a rumen adapted to ferment fibrous plant material. Depending on the system, life stage, and production goal, forage may be supplemented with concentrates, minerals, and vitamins.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements depend on breed, body weight, physiological stage (growth, late pregnancy, lactation), and production level (wool, meat, or milk). Consensus nutrient-requirement references and local advisers should guide ration formulation rather than generic figures.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Flock health and welfare depend on adequate nutrition and water, appropriate shelter from weather extremes, routine flock health management, parasite monitoring, and calm, low-stress handling given sheep’s strong flocking and flight instincts.',
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
          text: 'Sheep can make productive use of grassland, hill country, and marginal or steep terrain unsuitable for cropping or larger livestock, and are integrated into mixed farming and land-management systems in many regions, including targeted grazing for vegetation management. Environmental and land-use considerations vary widely by system and region.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'goats' },
    { type: 'livestock', slug: 'cattle' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview; breeds, systems, regulations, and guidance vary widely by country and region.',
  climateContext:
    'Sheep are kept from arid rangeland to cold uplands; breed adaptation and management practices differ with climate and terrain.',
  limitations: [
    'This is a general species overview, not breed-, system-, or region-specific husbandry guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
    'Wool and dairy sheep practices vary considerably by region and are described here only in general terms.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Sheep production systems and global role' },
    { sourceId: 'fao-dad-is', citedFor: 'Sheep breeds and diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
    { sourceId: 'ahdb', citedFor: 'Sheep production guidance context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sheep',
    description:
      'A reference on sheep: wool, meat, and dairy breeds, ruminant grazing nutrition, health and welfare principles, and their role in grassland and hill farming.',
    keywords: ['sheep', 'Ovis aries', 'wool production', 'lamb and mutton'],
  },
  structuredData: { article: true },
};
