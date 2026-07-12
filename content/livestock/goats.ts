import type { LivestockContent } from '@/types/content';

export const goats: LivestockContent = {
  id: 'livestock-goats',
  slug: 'goats',
  contentType: 'livestock',
  title: 'Goats',
  scientificName: 'Capra hircus',
  alternativeNames: ['Does', 'Bucks', 'Kids'],
  category: 'Livestock',
  subcategory: 'Ruminant (small)',
  primaryProducts: ['Milk', 'Meat', 'Fibre (mohair and cashmere)', 'Hides'],
  productionSystems: [
    'Extensive rangeland and browsing systems',
    'Smallholder and backyard systems',
    'Intensive dairy goat systems',
    'Mixed crop–livestock systems',
  ],
  summary:
    'Goats are hardy, adaptable ruminants raised worldwide for milk, meat, and fibre. Their browsing behaviour and tolerance of difficult environments make them an important livestock species in smallholder and marginal-land systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Goats are versatile, widely distributed domesticated ruminants valued for milk, meat, and fibre, including mohair and cashmere from specialised breeds. They are especially important in smallholder agriculture, where their relatively low input requirements and adaptability make them accessible livestock across a wide range of climates and farm sizes.',
    },
    {
      type: 'paragraph',
      text: 'Unlike grazing species that concentrate on grasses, goats are natural browsers, preferring to eat shrubs, woody vegetation, and a broad range of plants at varying heights. This behaviour, combined with a hardy constitution and tolerance of heat, drought, and rough terrain, allows goats to use vegetation and land that other livestock use less efficiently.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Capra hircus' },
    { label: 'Digestive type', value: 'Ruminant (four-compartment stomach)' },
    {
      label: 'Primary products',
      value: 'Milk, meat, mohair and cashmere fibre, hides',
    },
    {
      label: 'Feeding behaviour',
      value:
        'Browsers, favouring shrubs and varied vegetation over close grazing',
    },
    {
      label: 'Notable traits',
      value: 'Hardiness and adaptability to heat, drought, and marginal land',
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
          text: 'Goat production includes dairy systems (milk for drinking, cheese, and other products), meat systems, and fibre systems producing mohair (from Angora goats) or cashmere (from the downy undercoat of certain breeds). Many goats worldwide are kept in mixed-purpose smallholder systems rather than single-output enterprises.',
        },
        {
          type: 'list',
          items: [
            'Dairy goats — selected for milk yield, composition, and udder conformation.',
            'Meat goats — selected for growth rate and carcass characteristics.',
            'Fibre goats — Angora goats produce mohair; certain breeds and types produce cashmere down.',
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
              term: 'Dairy breeds',
              description:
                'Selected primarily for milk yield and composition, widely kept from smallholdings to specialised dairies.',
            },
            {
              term: 'Meat breeds',
              description:
                'Selected for growth and carcass traits, prominent in many tropical and subtropical systems.',
            },
            {
              term: 'Fibre breeds',
              description:
                'Angora goats are bred for mohair; other breeds and crosses produce cashmere down harvested seasonally.',
            },
            {
              term: 'Hardy local and landrace breeds',
              description:
                'Adapted over generations to local climate, terrain, and forage availability, often prioritising resilience over single-trait output.',
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
          text: 'As ruminants, goats ferment fibrous plant material in a specialised stomach, but their browsing behaviour means diets often include shrubs, woody plants, and varied forage in addition to or instead of grazed pasture. Depending on the system and production goal, forage and browse may be supplemented with concentrates, minerals, and vitamins.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements depend on breed, body weight, physiological stage (growth, pregnancy, lactation), and production purpose (milk, meat, or fibre). Consensus nutrient-requirement references and local advisers should guide feeding decisions rather than generic figures.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Goat health and welfare depend on adequate nutrition and water, shelter appropriate to climate, routine herd health management, parasite monitoring, and handling suited to their inquisitive and social temperament. Goats are also notable for their agility and tendency to test fencing and enclosures.',
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
          text: 'Goats are widely valued in smallholder and pastoral systems for their adaptability, modest input requirements relative to larger livestock, and ability to use vegetation on marginal or degraded land. They contribute meaningfully to household nutrition and income in many regions, alongside considerations around vegetation impact where browsing pressure is high; the balance of these factors is system- and region-specific.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'sheep' },
    { type: 'livestock', slug: 'cattle' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview; breeds, systems, regulations, and guidance vary widely by country and region.',
  climateContext:
    'Goats are kept from arid and semi-arid rangeland to humid tropical and cold-temperate regions; breed adaptation and management differ with climate.',
  limitations: [
    'This is a general species overview, not breed-, system-, or region-specific husbandry guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
    'Fibre production practices (mohair and cashmere) vary considerably by breed and region and are described here only in general terms.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Goat production systems and global role' },
    { sourceId: 'fao-dad-is', citedFor: 'Goat breeds and diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Goats',
    description:
      'A reference on goats: dairy, meat, and fibre breeds, browsing behaviour, ruminant nutrition, health and welfare principles, and smallholder farming context.',
    keywords: ['goats', 'Capra hircus', 'dairy goats', 'mohair and cashmere'],
  },
  structuredData: { article: true },
};
