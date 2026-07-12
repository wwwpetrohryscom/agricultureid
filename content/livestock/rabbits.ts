import type { LivestockContent } from '@/types/content';

export const rabbits: LivestockContent = {
  id: 'livestock-rabbits',
  slug: 'rabbits',
  contentType: 'livestock',
  title: 'Rabbits',
  scientificName: 'Oryctolagus cuniculus',
  alternativeNames: ['Domestic rabbit', 'Cuniculture (rabbit farming)'],
  category: 'Livestock',
  subcategory: 'Monogastric hindgut fermenter',
  primaryProducts: [
    'Meat',
    'Fibre (Angora wool, in fibre breeds)',
    'Pelts',
    'Manure',
  ],
  productionSystems: [
    'Intensive hutch and cage systems',
    'Colony and free-range systems',
    'Smallholder and backyard systems',
  ],
  summary:
    'Rabbits are small monogastric hindgut fermenters raised for meat, fibre, and pelts, kept in systems ranging from backyard hutches to intensive commercial cage operations. Their digestion relies on caecal fermentation and re-ingestion of soft droppings (cecotrophy).',
  introduction: [
    {
      type: 'paragraph',
      text: 'The domestic rabbit (Oryctolagus cuniculus) is a monogastric animal — it has a single-chambered stomach rather than a ruminant’s multi-chambered one — but, like horses, it is a hindgut fermenter, using an enlarged caecum to ferment fibrous plant material after it leaves the stomach and small intestine. Rabbits are distinctive even among hindgut fermenters for cecotrophy: they produce soft, nutrient-rich caecal droppings that they re-ingest directly from the anus, extracting additional nutrients and microbial protein that would otherwise be lost.',
    },
    {
      type: 'paragraph',
      text: 'Rabbit farming (cuniculture) ranges from smallholder and backyard operations producing meat and manure for household or local use, to intensive commercial systems built around cage housing, controlled breeding cycles, and formulated feed. Fibre breeds, kept mainly for Angora wool, follow a distinct production model built around fleece harvesting rather than meat.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Oryctolagus cuniculus (domestic rabbit)' },
    {
      label: 'Digestive type',
      value: 'Monogastric hindgut fermenter (caecum); practises cecotrophy',
    },
    {
      label: 'Primary products',
      value:
        'Meat; fibre (Angora wool) in specialised breeds; pelts and manure',
    },
    {
      label: 'Main systems',
      value:
        'Intensive cage/hutch systems, colony systems, and backyard systems',
    },
    {
      label: 'Feed base',
      value: 'Hay/forage (often alfalfa-based) and formulated pelleted feed',
    },
    {
      label: 'Reproductive trait',
      value:
        'Short gestation and rapid breeding cycle relative to most livestock',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Rabbit production is organised mainly around meat, with breeding does managed on a repeated kindling cycle to supply young stock for growing out, alongside smaller fibre and pelt sectors. Scale ranges from a few backyard hutches to commercial operations with hundreds or thousands of breeding does managed on standardised cages and feeding programmes.',
        },
      ],
    },
    {
      id: 'breeds-and-types',
      heading: 'Breeds and types',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Meat breeds',
              description:
                'Selected for growth rate and carcass yield (for example, New Zealand White and Californian types).',
            },
            {
              term: 'Fibre breeds',
              description:
                'Angora rabbits, kept for their long wool fleece, which is periodically shorn or plucked.',
            },
            {
              term: 'Dual-purpose and local breeds',
              description:
                'Balanced for meat, pelts, or hardiness in smallholder and backyard settings.',
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
          text: 'Rabbit diets centre on fibrous forage — commonly alfalfa or grass hay — because adequate long fibre supports normal gut motility and caecal fermentation; diets too low in fibre are linked to digestive upset. Commercial production typically relies on formulated pelleted feed balancing fibre, protein, and energy, while backyard systems often combine hay with vegetables, greens, and root crops as supplementary feed.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements shift with growth stage, breeding status, and lactation; ration formulation should follow established rabbit-nutrition references and supplier guidance rather than generic figures.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Rabbit health and welfare depend on adequate space, appropriate flooring or bedding, protection from heat stress and predators, and management practices that reduce stress, since rabbits are prey animals sensitive to handling and environment. Digestive upsets, often linked to diet or stress, are a significant health concern in commercial rabbitries.',
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
          text: 'Rabbit production makes efficient use of forage crops and by-products relative to its space requirements, and manure is commonly recycled as a garden or field soil amendment in smallholder systems. Commercial rabbit meat production remains a comparatively small livestock sector globally but is well established in several regions with strong local demand.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'pigs' },
  ],
  connections: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'oats' },
    { type: 'crop', slug: 'carrot' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global overview; breeds, systems, and regulations vary widely by country and region.',
  climateContext:
    'Rabbits are sensitive to heat stress; housing and management adapt to local temperature extremes.',
  limitations: [
    'This is a general species overview, not breed-, system-, or region-specific husbandry guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Rabbit production systems and global role' },
    { sourceId: 'fao-dad-is', citedFor: 'Rabbit breeds and genetic diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rabbits',
    description:
      'A reference on rabbits: hindgut fermentation and cecotrophy, feeding and forage needs, health and welfare, and meat and fibre production systems.',
    keywords: [
      'rabbits',
      'cuniculture',
      'rabbit farming',
      'Oryctolagus cuniculus',
    ],
  },
  structuredData: { article: true },
};
