import type { LivestockContent } from '@/types/content';

export const alpacas: LivestockContent = {
  id: 'livestock-alpacas',
  slug: 'alpacas',
  contentType: 'livestock',
  title: 'Alpacas',
  scientificName: 'Vicugna pacos',
  alternativeNames: ['Domestic alpaca'],
  category: 'Livestock',
  subcategory: 'Pseudo-ruminant camelid',
  primaryProducts: ['Fibre (fleece)', 'Meat (minor, regional)', 'Manure'],
  productionSystems: [
    'Extensive high-altitude pasture systems (Andean rangelands)',
    'Managed pasture systems (introduced regions)',
    'Smallholder fibre production systems',
  ],
  summary:
    'Alpacas are small South American camelids raised chiefly for their fine fleece, traditionally herded on high-altitude Andean rangelands and now also farmed in temperate regions worldwide as a specialised fibre livestock species.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Alpacas (Vicugna pacos) are domesticated camelids native to the high-altitude Andean grasslands (puna) of Peru, Bolivia, Chile, and Argentina, where they have been herded for their fleece for thousands of years. Like camels, alpacas are pseudo-ruminants, fermenting fibrous plant material in a three-chambered stomach rather than the four-chambered stomach of true ruminants such as sheep and cattle.',
    },
    {
      type: 'paragraph',
      text: 'Traditional Andean herding remains a major part of world alpaca production, often integrated with subsistence agriculture at high altitude, while alpacas are also now farmed at smaller scale in North America, Europe, Australia, and elsewhere, primarily for fibre and, in some operations, as a niche livestock enterprise alongside sheep and goats.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Vicugna pacos' },
    {
      label: 'Digestive type',
      value: 'Pseudo-ruminant; three-chambered, foregut-fermenting stomach',
    },
    {
      label: 'Primary product',
      value: 'Fine fibre (fleece), prized for softness',
    },
    {
      label: 'Native range',
      value:
        'High-altitude Andean rangelands of Peru, Bolivia, Chile, and Argentina',
    },
    {
      label: 'Main systems',
      value:
        'Traditional Andean herding and smaller-scale managed pasture systems elsewhere',
    },
    {
      label: 'Fibre types',
      value: 'Huacaya (dense, crimped fleece) and Suri (long, lustrous locks)',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Alpaca production centres on fibre, shorn annually and graded by fineness and colour, with the animals themselves classed into two main fleece types. Traditional Andean production remains central to global supply and to the livelihoods of highland herding communities, while newer alpaca sectors in other countries typically serve specialty fibre and breeding-stock markets.',
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
              term: 'Huacaya',
              description:
                'The more common type, with a dense, crimped fleece giving a fluffy appearance.',
            },
            {
              term: 'Suri',
              description:
                'Less common, with long, lustrous, non-crimped locks that hang close to the body.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Alpacas are closely related to, but distinct from, llamas, vicuñas, and guanacos, the other South American camelid species; alpacas are bred primarily for fine fibre rather than pack or draught use.',
        },
      ],
    },
    {
      id: 'nutrition-and-feeding',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Alpacas are efficient grazers adapted to sparse, high-altitude forage, and in managed pasture systems outside their native range they generally do well on grass pasture and hay, often requiring less feed per animal than sheep or cattle of comparable size. Supplementary feeding, such as alfalfa hay or mineral supplements, is used where pasture quality or mineral content is inadequate for fleece growth and body condition.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Feeding and mineral supplementation needs vary with pasture quality, climate, and reproductive stage; camelid-specific nutrition guidance and local advisers should inform ration decisions.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Alpaca health and welfare depend on appropriate nutrition, shelter from heat and extreme weather (fleece can predispose animals to heat stress), routine toenail and dental care, and management of parasites and diseases relevant to camelids.',
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
          text: 'Alpaca herding supports livelihoods on Andean rangelands that are often unsuited to cropping because of altitude and climate, while careful stocking is important on these fragile high-altitude grasslands to limit overgrazing and erosion. Outside South America, alpacas are increasingly kept in mixed small-farm settings alongside sheep and goats as a specialty fibre enterprise.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'sheep' },
    { type: 'livestock', slug: 'goats' },
  ],
  connections: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'soil-topic', slug: 'soil-erosion' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Native to the high-altitude Andes; also farmed at smaller scale in North America, Europe, Australia, and elsewhere.',
  climateContext:
    'Alpacas are adapted to cold, high-altitude Andean climates but are farmed across a range of temperate environments; fleece can predispose them to heat stress in warmer regions.',
  limitations: [
    'This is a general species overview, not region- or system-specific husbandry or fibre-grading guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Alpaca production systems and role in Andean livelihoods',
    },
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Alpaca genetic diversity and breed information',
    },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Alpacas',
    description:
      'A reference on alpacas: pseudo-ruminant digestion, fleece types, high-altitude grazing and feeding, health and welfare, and Andean production context.',
    keywords: ['alpacas', 'Vicugna pacos', 'alpaca fibre', 'camelid livestock'],
  },
  structuredData: { article: true },
};
