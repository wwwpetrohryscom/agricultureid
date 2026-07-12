import type { LivestockContent } from '@/types/content';

export const yak: LivestockContent = {
  id: 'livestock-yak',
  slug: 'yak',
  contentType: 'livestock',
  title: 'Yak',
  scientificName: 'Bos grunniens',
  alternativeNames: ['Domestic yak'],
  category: 'Livestock',
  subcategory: 'Ruminant (large)',
  primaryProducts: [
    'Milk',
    'Meat',
    'Fibre (down and wool)',
    'Pack and draught transport',
    'Hides',
  ],
  productionSystems: [
    'High-altitude pastoral grazing',
    'Transhumance (seasonal migration) systems',
    'Smallholder mixed systems',
  ],
  summary:
    'Yaks are large ruminants uniquely adapted to the high-altitude cold environments of the Himalayan and Central Asian plateaus, raised for milk, meat, fibre, hides, and transport. Pastoral grazing and seasonal transhumance are the dominant production systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The domestic yak (Bos grunniens) is a ruminant bovine adapted to the cold, oxygen-thin environments of the Tibetan Plateau and surrounding high-altitude regions of Central and South Asia. Physiological adaptations, including a larger lung and heart capacity relative to body size and a dense fibre undercoat, allow yaks to thrive at altitudes and temperatures unsuitable for most other cattle-like livestock.',
    },
    {
      type: 'paragraph',
      text: 'Yaks are a multi-purpose livestock species for high-altitude pastoral communities, providing milk, meat, fibre, hides, and pack or draught transport across difficult mountain terrain. Herds are typically managed through transhumance, moving between seasonal pastures to match forage availability across the year.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Bos grunniens' },
    { label: 'Digestive type', value: 'Ruminant (four-compartment stomach)' },
    {
      label: 'Primary products',
      value: 'Milk, meat, fibre, and hides; pack and draught transport',
    },
    {
      label: 'Typical system',
      value: 'High-altitude pastoral grazing and transhumance',
    },
    {
      label: 'Adaptation',
      value:
        'Cold and high-altitude tolerance; sensitive to heat at lower elevations',
    },
    {
      label: 'Range',
      value:
        'Tibetan Plateau and surrounding high-altitude Central and South Asia',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Yak husbandry is closely tied to high-altitude pastoral livelihoods, with herds providing multiple products simultaneously and management practices adapted to seasonal forage availability and extreme mountain climates.',
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
              term: 'Dairy yaks',
              description:
                'Milked for dairy products including butter and cheese central to many high-altitude diets.',
            },
            {
              term: 'Pack and draught yaks',
              description:
                'Used for carrying loads and, in some areas, light cultivation across mountain terrain.',
            },
            {
              term: 'Yak–cattle hybrids',
              description:
                'Crosses with lowland cattle (sometimes called dzo or dzomo), used in some regions to combine traits of both species.',
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
          text: 'Yaks graze native alpine pasture through most of the year, with forage availability declining sharply in winter; some managed systems provide conserved forage or supplementary feed during the coldest, most forage-scarce months.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements vary with altitude, season, and production stage. Ruminant nutrient requirement references and local advisers should guide any supplementation.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Yaks are well adapted to cold and altitude but can suffer heat stress at lower elevations or during warmer periods; husbandry also addresses parasite and disease risks associated with seasonal grazing movements.',
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
          text: 'Yaks underpin livelihoods across high-altitude pastoral regions where few other livestock species can thrive, and their climate sensitivity, particularly to warming temperatures at range margins, is a subject of ongoing research interest.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'water-buffalo' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  connections: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  geographicScope:
    'Concentrated in the high-altitude Tibetan Plateau and surrounding regions of China, Mongolia, Nepal, Bhutan, and parts of Central Asia; farming systems and regulation vary by country.',
  climateContext:
    'Yaks are adapted to cold, high-altitude environments and can experience heat stress at lower elevations or under rising temperatures, making climate an important management consideration.',
  limitations: [
    'This is a general species overview, not a region-specific pastoral management guide.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Yak production systems and pastoral livelihoods',
    },
    { sourceId: 'fao-dad-is', citedFor: 'Yak genetic resources and diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Ruminant nutrient requirement references',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Yak',
    description:
      'A reference on yaks: cold- and altitude-adapted ruminants raised for milk, meat, fibre, and transport across Himalayan pastoral systems.',
    keywords: ['yak', 'Bos grunniens', 'high-altitude livestock', 'ruminant'],
  },
  structuredData: { article: true },
};
