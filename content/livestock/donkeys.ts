import type { LivestockContent } from '@/types/content';

export const donkeys: LivestockContent = {
  id: 'livestock-donkeys',
  slug: 'donkeys',
  contentType: 'livestock',
  title: 'Donkeys',
  scientificName: 'Equus africanus asinus',
  alternativeNames: ['Domestic donkey', 'Ass', 'Burro'],
  category: 'Livestock',
  subcategory: 'Monogastric (hindgut fermenter)',
  primaryProducts: [
    'Draught and pack power',
    'Transport',
    'Milk (minor, regional)',
    'Manure',
  ],
  productionSystems: [
    'Working-animal systems (pack and draught)',
    'Pasture-based systems',
    'Smallholder systems',
  ],
  summary:
    'Donkeys are monogastric hindgut-fermenting equids kept worldwide as working animals for pack and draught power, transport, and, in some regions, milk. Descended from the African wild ass, they are especially well adapted to hot, dry, and marginal environments.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The domestic donkey (Equus africanus asinus) descends from the African wild ass and, like horses, is a monogastric hindgut fermenter: it has a single stomach but relies on an enlarged caecum and colon to ferment fibrous plant material after digestion in the stomach and small intestine. Donkeys are generally smaller and hardier than horses, with a long history of use as pack and draught animals in arid and mountainous regions where feed and water can be scarce.',
    },
    {
      type: 'paragraph',
      text: 'Millions of donkeys remain essential working animals in smallholder and rural livelihoods worldwide, carrying goods, water, and produce, and providing draught power for cultivation and transport where mechanisation is limited or impractical. A smaller-scale dairy and meat sector also exists in some regions, alongside donkeys kept for companionship or conservation of local breeds.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Equus africanus asinus' },
    {
      label: 'Digestive type',
      value:
        'Monogastric, hindgut fermenter (cecum and colon) — not a ruminant',
    },
    {
      label: 'Primary roles',
      value: 'Pack and draught power, transport; milk and meat in some regions',
    },
    {
      label: 'Environmental adaptation',
      value:
        'Well suited to hot, dry, and marginal environments with sparse forage',
    },
    {
      label: 'Feed base',
      value:
        'Forage (grazing, browse, crop residues) with modest supplementation',
    },
    {
      label: 'Global role',
      value:
        'A key working animal for smallholder transport and cultivation worldwide',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Donkeys remain widely kept as working animals in rural and smallholder economies, particularly where terrain, cost, or infrastructure limit the use of motorised transport and machinery. Their role ranges from carrying water and goods to providing draught power for tillage and haulage in mixed farming systems.',
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
              term: 'Pack and draught donkeys',
              description:
                'The most common working role worldwide, carrying loads or pulling carts and implements.',
            },
            {
              term: 'Dairy donkeys',
              description:
                'Kept in some regions for milk, valued in niche markets and, historically, for infant feeding where other milk was unavailable.',
            },
            {
              term: 'Local and landrace types',
              description:
                'Regionally adapted, often hardy types suited to local terrain, climate, and smallholder use.',
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
          text: 'Donkeys are efficient at extracting nutrition from coarse, fibrous, and lower-quality forage compared with horses, reflecting their origin in arid and semi-arid environments with sparse vegetation. This efficiency means donkeys in light work can be prone to excess weight gain on rich pasture, while working or lactating animals need forage supplemented with additional energy and protein.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Forage and supplementary feeding needs depend on workload, body condition, and physiological status; equine nutrition references and local advisers should guide feeding rather than generic figures.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Donkey health and welfare depend on consistent access to forage and water, appropriate shelter, routine hoof care, and workloads and equipment suited to the animal’s size and condition. Donkeys can mask signs of pain or illness more readily than horses, which makes routine observation and handler awareness particularly important.',
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
          text: 'Donkeys support smallholder livelihoods by reducing labour burdens for transport and cultivation, particularly for households without access to tractors or fuel. Global demand for donkey hides in some markets has also raised welfare and population concerns in several donkey-keeping regions, an issue tracked by international animal health and welfare bodies.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'horses' },
    { type: 'livestock', slug: 'camels' },
  ],
  connections: [
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'oats' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global overview; uses, systems, and regulations vary widely by country and region, with concentrations in Africa, Asia, and Latin America.',
  climateContext:
    'Donkeys are well adapted to hot, dry, and marginal environments and are kept across a wide range of climates worldwide.',
  limitations: [
    'This is a general species overview, not region- or use-specific working-animal management guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Donkeys as working animals and role in agriculture',
    },
    { sourceId: 'fao-dad-is', citedFor: 'Donkey breeds and genetic diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Donkeys',
    description:
      'A reference on donkeys: hindgut-fermenter digestion, forage efficiency, working-animal roles in transport and cultivation, health, and welfare.',
    keywords: ['donkeys', 'Equus asinus', 'working animals', 'draught power'],
  },
  structuredData: { article: true },
};
