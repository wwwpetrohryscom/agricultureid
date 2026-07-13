import type { CultivarContent } from '@/types/content';

export const nipponbare: CultivarContent = {
  id: 'nipponbare',
  slug: 'nipponbare',
  contentType: 'cultivar',
  title: 'Nipponbare',
  acceptedName: 'Nipponbare',
  category: 'Rice cultivar',
  summary:
    'Nipponbare is a Japanese temperate japonica rice cultivar best known as the international reference genome for rice. Its map-based genome sequence, published in 2005, underpins a large body of rice genetics and genomics research.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Nipponbare is a temperate japonica rice cultivar from Japan. While it is a food-grade short-grain rice, it is best known internationally as the reference genome for rice: its map-based genome sequence was produced by the International Rice Genome Sequencing Project and published in 2005, and it remains the standard reference assembly used across rice research.',
    },
    {
      type: 'paragraph',
      text: 'Because so much rice genetics and genomics work is anchored to Nipponbare, the cultivar functions as a common coordinate system for genes, markers, and comparative studies. This page focuses on its documented role as a reference cultivar rather than on regional cultivation recommendations.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Rice (Oryza sativa)' },
    { label: 'Varietal group', value: 'Temperate japonica' },
    { label: 'Origin', value: 'Japan' },
    { label: 'Type', value: 'Inbred line (reference cultivar)' },
    {
      label: 'Notable role',
      value:
        'International reference genome for rice (map-based sequence published 2005)',
    },
    { label: 'Grain', value: 'Short, round japonica grain' },
    {
      label: 'Primary use',
      value:
        'Staple food grain; reference material for rice genetics and genomics',
    },
  ],
  sections: [
    {
      id: 'origin-and-classification',
      heading: 'Origin and classification',
      body: [
        {
          type: 'paragraph',
          text: 'Nipponbare is a temperate japonica cultivar developed in Japan. Temperate japonica rices are typically short-grained, adapted to temperate growing conditions, and associated with a sticky, tender cooked texture, in contrast to the long-grain indica rices of the tropics. AgricultureID does not assert a specific release year or breeding institution for Nipponbare, as these details are not reproduced here from an authoritative primary registry.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Botanical taxon',
              description: 'Oryza sativa (temperate japonica group)',
            },
            { term: 'Origin', description: 'Japan' },
            { term: 'Grain type', description: 'Short, round japonica grain' },
            {
              term: 'Cooked texture',
              description:
                'Sticky and tender, typical of temperate japonica rice',
            },
          ],
        },
      ],
    },
    {
      id: 'reference-genome-role',
      heading: 'Role as the rice reference genome',
      body: [
        {
          type: 'paragraph',
          text: 'Nipponbare is the cultivar whose genome was sequenced by the International Rice Genome Sequencing Project, with the map-based sequence published in 2005. This high-quality, map-based assembly became the standard reference to which other rice genomes, genes, and markers are compared. As a result, Nipponbare is one of the most intensively studied plants in crop science and is a routine reference in rice molecular genetics.',
        },
        {
          type: 'paragraph',
          text: 'Rice was the first crop cereal to have a high-quality reference genome of this kind, partly because of its relatively compact genome and its central importance as a food crop. Nipponbare’s reference role is the main reason a Japanese table-rice cultivar is so widely cited in international research.',
        },
      ],
    },
    {
      id: 'use-and-status',
      heading: 'Use and status',
      body: [
        {
          type: 'paragraph',
          text: 'As a food crop, Nipponbare is a short-grain japonica table rice suited to temperate conditions. Its wider importance, however, is as a research reference. It is treated here as a historical and reference cultivar; its current commercial cultivation and registry standing in any particular country are not asserted on this page.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Genome coordinates and gene models are periodically updated by the research community. Specific assembly versions and annotations should be taken from current genomics resources rather than assumed to be fixed.',
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'rice' },
  botanicalTaxon: 'Oryza sativa (temperate japonica group)',
  cultivarType: 'Inbred line (temperate japonica; reference cultivar)',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'Japan',
  registrationStatus: 'historical',
  growthHabit: 'Temperate japonica plant type',
  intendedUse: [
    'Staple food grain',
    'Reference material for rice genetics and genomics research',
  ],
  climateAdaptation:
    'Temperate japonica adaptation (temperate East Asian rice conditions)',
  qualityTraits: [
    'Short, round japonica grain',
    'Sticky, tender cooked texture typical of temperate japonica rice',
  ],
  claims: [
    {
      field: 'reference-genome',
      statement:
        'Nipponbare is the reference cultivar for the rice genome; its map-based genome sequence was published by the International Rice Genome Sequencing Project in 2005.',
      citations: [
        {
          sourceId: 'irri',
          evidenceNote:
            'Rice-genomics literature referencing Nipponbare as the standard reference genome',
          evidenceTier: 1,
        },
        {
          sourceId: 'ncbi-taxonomy',
          evidenceNote:
            'Oryza sativa (Japonica group) taxonomy and reference-genome context',
          evidenceTier: 2,
        },
      ],
    },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-degree-days' },
  ],
  geographicScope:
    'A Japanese temperate japonica cultivar used worldwide as the rice reference genome; discussed here as a reference and research cultivar rather than a regional growing recommendation.',
  climateContext:
    'Temperate japonica rice adapted to temperate East Asian conditions; grain and texture characteristics are typical of the japonica group.',
  limitations: [
    'Nipponbare is presented mainly as a reference cultivar; its current commercial cultivation and registry standing in specific countries are not asserted here.',
    'A specific release year and breeding institution are not stated because they are not reproduced here from an authoritative primary registry.',
    'Genome assembly versions and gene annotations are updated over time and should be taken from current genomics resources.',
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor:
        'Nipponbare’s role as the rice reference genome and japonica characterization',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor:
        'Oryza sativa (Japonica group) classification and reference-genome context',
    },
    { sourceId: 'gbif', citedFor: 'Species classification (Oryza sativa)' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Nipponbare (rice cultivar)',
    description:
      'Nipponbare, the Japanese japonica rice used worldwide as the rice reference genome (sequenced 2005): classification, research role, and status.',
    keywords: [
      'Nipponbare',
      'rice reference genome',
      'japonica rice',
      'IRGSP',
      'Oryza sativa',
      'rice genomics',
    ],
  },
  structuredData: { article: true },
};
