import type { LivestockContent } from '@/types/content';

export const bison: LivestockContent = {
  id: 'livestock-bison',
  slug: 'bison',
  contentType: 'livestock',
  title: 'Bison',
  scientificName: 'Bison bison',
  alternativeNames: ['American bison', 'North American buffalo'],
  category: 'Livestock',
  subcategory: 'Ruminant (large)',
  primaryProducts: ['Meat', 'Hides', 'Manure'],
  productionSystems: [
    'Extensive range and pasture-based grazing',
    'Ranch-based cow-calf systems',
    'Silvopasture and mixed grazing systems',
  ],
  summary:
    'Bison are large North American ruminants raised primarily on extensive rangeland for meat and hides. As ruminants adapted to native grassland, they are managed mostly through pasture-based and ranch systems rather than intensive confinement.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The American bison (Bison bison) is the largest native land mammal in North America and, like cattle, is a ruminant capable of digesting fibrous grasses and forbs through microbial fermentation in a multi-chambered stomach. Once reduced to near-extinction by overhunting, bison have been restored through conservation and commercial ranching and are now farmed for meat and hides across North America and, on a smaller scale, elsewhere.',
    },
    {
      type: 'paragraph',
      text: 'Bison ranching typically relies on extensive grazing of native or improved rangeland, reflecting the species’ adaptation to open grassland and, in some regions, wooded grazing areas. Compared with domestic cattle, bison are generally managed with less intensive handling and confinement, reflecting both their temperament and their history as a wild grazing species.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Bison bison' },
    { label: 'Digestive type', value: 'Ruminant (four-compartment stomach)' },
    { label: 'Primary products', value: 'Meat and hides' },
    {
      label: 'Typical system',
      value: 'Extensive range and pasture-based grazing',
    },
    {
      label: 'Feed base',
      value: 'Native and improved forage; hay supplementation in winter',
    },
    {
      label: 'Conservation note',
      value:
        'Recovered from near-extinction through ranching and conservation herds',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Bison are raised both in commercial meat operations and in conservation or public herds managed for genetic and ecological preservation, with ranching practices generally emphasising extensive grazing over confinement.',
        },
      ],
    },
    {
      id: 'types-and-herd-management',
      heading: 'Types and herd management',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Commercial meat herds',
              description:
                'Managed for grass-fed or grain-finished meat production on private ranches.',
            },
            {
              term: 'Conservation and public herds',
              description:
                'Maintained on public or protected land primarily for genetic and ecological conservation.',
            },
            {
              term: 'Cow-calf ranching systems',
              description:
                'Breeding herds managed to produce calves for growing and finishing elsewhere.',
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
          text: 'Bison diets are forage-based, relying on native and improved grassland grazing through most of the year, with hay or other conserved forage supplementation common during winter or periods of forage scarcity.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements vary with season, body condition, and reproductive stage. Ruminant nutrient requirement references and local advisers should guide any supplementation.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Bison require handling facilities and fencing designed for a large, powerful, and less domesticated animal than cattle, alongside routine disease prevention and appropriate access to forage, water, and shelter.',
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
          text: 'Bison ranching can make productive use of grassland less suited to cropping, and is often associated with grassland conservation and nutrient cycling goals alongside its role as a specialty meat market.',
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
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'temperature' },
  ],
  geographicScope:
    'Primarily a North American species; farmed populations and regulation are concentrated in the United States and Canada, with smaller herds elsewhere.',
  climateContext:
    'Bison are well adapted to cold-temperate grassland climates, including harsh winters, and are typically raised on extensive rangeland rather than in climate-controlled housing.',
  limitations: [
    'This is a general species overview, not a ranch- or region-specific production guide.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Bison as a ruminant livestock species' },
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Bison genetic resources and diversity',
    },
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
    title: 'Bison',
    description:
      'A reference on bison: North American ruminants raised for meat and hides through extensive range grazing, nutrition, health, and welfare.',
    keywords: ['bison', 'Bison bison', 'ruminant livestock', 'range grazing'],
  },
  structuredData: { article: true },
};
