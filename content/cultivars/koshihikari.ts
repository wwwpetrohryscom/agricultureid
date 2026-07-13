import type { CultivarContent } from '@/types/content';

export const koshihikari: CultivarContent = {
  id: 'koshihikari',
  slug: 'koshihikari',
  contentType: 'cultivar',
  title: 'Koshihikari',
  acceptedName: 'Koshihikari',
  category: 'Rice cultivar',
  summary:
    'Koshihikari is a Japanese temperate japonica rice cultivar registered in 1956 and prized for its eating quality. It has become one of the most widely grown premium table rices in Japan and an ancestor of many later Japanese cultivars.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Koshihikari is a temperate japonica rice cultivar from Japan, registered in 1956. It is one of the best-known premium table rices in the world and is especially associated with the eating quality prized in Japanese cuisine — glossy, aromatic, sticky, and tender when cooked.',
    },
    {
      type: 'paragraph',
      text: 'Beyond its market importance, Koshihikari is genetically significant: it appears in the ancestry of a large number of later Japanese rice cultivars. Its high eating quality is accompanied by well-documented agronomic trade-offs, including a tendency to lodge, which this page describes rather than glossing over.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Rice (Oryza sativa)' },
    { label: 'Varietal group', value: 'Temperate japonica' },
    { label: 'Origin', value: 'Japan' },
    { label: 'Type', value: 'Inbred variety' },
    {
      label: 'Registered',
      value: '1956 (registered nationally as Norin No. 100)',
    },
    { label: 'Parentage', value: 'Norin No. 22 × Norin No. 1' },
    {
      label: 'Grain',
      value: 'Short, round japonica grain prized for eating quality',
    },
    { label: 'Primary use', value: 'Premium table rice (staple food grain)' },
  ],
  sections: [
    {
      id: 'origin-and-breeding-history',
      heading: 'Origin and breeding history',
      body: [
        {
          type: 'paragraph',
          text: 'Koshihikari was bred in Japan from a cross between the cultivars Norin No. 22 and Norin No. 1, and was registered in 1956 under the national designation Norin No. 100. Its name references the Koshi region of central Japan. It went on to become the dominant premium rice in several major Japanese rice-growing areas.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Origin',
              description:
                'Japan (developed at a Japanese prefectural agricultural experiment station)',
            },
            { term: 'Parentage', description: 'Norin No. 22 × Norin No. 1' },
            {
              term: 'Registration',
              description: 'Registered in 1956 as Norin No. 100',
            },
            { term: 'Varietal group', description: 'Temperate japonica' },
          ],
        },
      ],
    },
    {
      id: 'eating-quality',
      heading: 'Eating quality',
      body: [
        {
          type: 'paragraph',
          text: 'Koshihikari is defined in the marketplace by its eating quality. It produces short, round grain with a glossy appearance and a sticky, tender texture when cooked, together with a characteristic aroma and flavour. These qualities are associated with its relatively low amylose content and have made it a benchmark for premium Japanese rice.',
        },
        {
          type: 'paragraph',
          text: 'Its reputation for quality is a major reason Koshihikari has been so widely planted and so widely used as a breeding parent, contributing its eating characteristics to many later cultivars.',
        },
      ],
    },
    {
      id: 'agronomic-tradeoffs',
      heading: 'Agronomic trade-offs',
      body: [
        {
          type: 'paragraph',
          text: 'Koshihikari’s quality comes with agronomic challenges. It is relatively tall with comparatively weak straw, which makes it prone to lodging (falling over), particularly under high nitrogen fertility. It is also regarded as susceptible to some important rice diseases. Managing these characteristics is part of why growing high-quality Koshihikari is considered demanding.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Lodging risk and disease susceptibility are managed through local practices such as careful nitrogen management and variety choice. Specific management should follow regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'classification-and-status',
      heading: 'Classification and status',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Botanical taxon',
              description: 'Oryza sativa (temperate japonica group)',
            },
            {
              term: 'Cultivar type',
              description: 'Inbred variety (temperate japonica)',
            },
            {
              term: 'Registry status',
              description:
                'Historical — a widely grown heritage cultivar; current registry standing is not asserted here',
            },
          ],
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'rice' },
  botanicalTaxon: 'Oryza sativa (temperate japonica group)',
  cultivarType: 'Inbred variety (temperate japonica)',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'Japan',
  originRegion: 'Central Japan (Hokuriku region)',
  yearReleased: '1956',
  breederOrInstitution:
    'Japanese prefectural agricultural experiment station (registered as Norin No. 100)',
  registrationStatus: 'historical',
  maturityClass: 'Early-to-mid season (temperate japonica)',
  growthHabit:
    'Relatively tall with comparatively weak straw; prone to lodging',
  intendedUse: ['Premium table rice (staple food grain)'],
  climateAdaptation:
    'Temperate japonica adaptation (temperate Japanese rice conditions)',
  qualityTraits: [
    'Short, round japonica grain',
    'Glossy appearance with sticky, tender cooked texture',
    'Characteristic aroma and flavour associated with relatively low amylose content',
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'nutrient', slug: 'nitrogen' },
  ],
  geographicScope:
    'A Japanese temperate japonica cultivar widely grown as premium table rice in Japan; discussed here as a heritage and reference-quality cultivar rather than a regional recommendation.',
  climateContext:
    'Temperate japonica rice adapted to temperate Japanese conditions; noted for high eating quality alongside lodging susceptibility.',
  limitations: [
    'Performance and quality are strongly environment- and management-specific; the eating quality Koshihikari is known for depends on growing conditions and handling.',
    'Koshihikari is regarded as prone to lodging and susceptible to some diseases; these trade-offs are managed through region-specific practice, not described as advice here.',
    'The current registry standing of Koshihikari is not asserted here; it is presented as a documented heritage cultivar.',
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Japonica rice characterization and grain-quality context',
    },
    { sourceId: 'gbif', citedFor: 'Species classification (Oryza sativa)' },
    {
      sourceId: 'britannica',
      citedFor:
        'General historical and cultural background on Koshihikari (secondary context)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Koshihikari (rice cultivar)',
    description:
      'Koshihikari, the premium Japanese temperate japonica rice registered in 1956: breeding history, eating quality, lodging trade-offs, classification, and status.',
    keywords: [
      'Koshihikari',
      'japonica rice',
      'Japanese rice',
      'premium table rice',
      'Oryza sativa',
      'rice eating quality',
    ],
  },
  structuredData: { article: true },
};
