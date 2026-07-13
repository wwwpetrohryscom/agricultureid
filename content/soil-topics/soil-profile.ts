import type { SoilTopicContent } from '@/types/content';

export const soilProfile: SoilTopicContent = {
  id: 'soil-topic-soil-profile',
  slug: 'soil-profile',
  contentType: 'soil-topic',
  title: 'Soil Profile',
  topicClass: 'physical',
  alternativeNames: ['Soil horizons', 'Soil profile description'],
  category: 'Soil physical property',
  subcategory: 'Profile morphology',
  summary:
    'A soil profile is the vertical sequence of horizons exposed from the surface down to parent material, recording how a soil formed and controlling how roots, water, air, and nutrients move through it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A soil profile is a vertical section through the soil, from the surface down to relatively unaltered parent material, revealing a sequence of layers called horizons. Each horizon differs from those above and below in properties such as colour, texture, structure, organic matter, and root density, and the arrangement of horizons is the primary record of how the soil has developed.',
    },
    {
      type: 'paragraph',
      text: 'Reading the profile is central to soil description and classification. The presence, thickness, and character of particular horizons indicate the processes that have shaped a soil, such as organic matter accumulation, leaching, clay movement, or waterlogging, and directly influence rooting depth, drainage, and where nutrients and water are stored.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value:
        'The vertical sequence of horizons from the surface to parent material',
    },
    {
      label: 'Master horizons',
      value: 'Commonly labelled O, A, E, B, C, and R, with subdivisions',
    },
    {
      label: 'O and A horizons',
      value:
        'Organic surface layers and the mineral topsoil richest in organic matter and roots',
    },
    {
      label: 'E and B horizons',
      value:
        'A leached (eluvial) horizon and the subsoil where materials accumulate',
    },
    {
      label: 'C and R',
      value: 'Weathered parent material and underlying consolidated rock',
    },
    {
      label: 'Why it matters',
      value:
        'Controls rooting depth, drainage, aeration, and where water and nutrients are held',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What a soil profile is',
      body: [
        {
          type: 'paragraph',
          text: 'A profile is examined in a pit or exposed face and described horizon by horizon. Horizons are distinguished by observable changes in colour, texture, structure, root abundance, and boundaries between layers. The full set of horizons, sometimes called the solum for the biologically active upper part, together tells the developmental history of the soil.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Horizon',
              description:
                'A layer of soil roughly parallel to the surface with properties distinct from adjacent layers.',
            },
            {
              term: 'Topsoil',
              description:
                'The surface mineral horizon (A), typically darkest and richest in organic matter and roots.',
            },
            {
              term: 'Subsoil',
              description:
                'The B horizon beneath the topsoil, often where clay, iron, or carbonates accumulate.',
            },
          ],
        },
      ],
    },
    {
      id: 'master-horizons',
      heading: 'The master horizons',
      body: [
        {
          type: 'paragraph',
          text: 'Soil descriptions use a set of master horizon symbols to summarise the profile from top to bottom, though not every soil contains every horizon.',
        },
        {
          type: 'list',
          items: [
            'O horizon: an organic layer of leaf litter and decomposing plant material, prominent in forest and peat soils',
            'A horizon: mineral topsoil enriched in organic matter, generally dark and densely rooted',
            'E horizon: a leached horizon lightened by the loss of clay, iron, or organic matter, typical of podzols',
            'B horizon: subsoil where clay, iron oxides, or carbonates accumulate from above',
            'C horizon: weathered but little-altered parent material below the zone of major soil formation',
            'R: underlying consolidated bedrock',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why the profile matters',
      body: [
        {
          type: 'paragraph',
          text: 'The arrangement of horizons governs how deep roots can grow, how quickly water drains or perches, and where nutrients are stored or lost. A dense clay-rich B horizon may impede drainage and rooting, an organic-rich A horizon supports biological activity and fertility, and grey, mottled colours deep in the profile signal recurring waterlogging. Reading these features guides both classification and management.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Horizon colours are strong clues: dark surface horizons usually indicate organic matter, red and yellow subsoils indicate iron oxides, and grey mottling points to periods of saturation and low oxygen.',
        },
      ],
    },
    {
      id: 'describing-it',
      heading: 'Describing a profile in the field',
      body: [
        {
          type: 'paragraph',
          text: 'Profiles are described by digging or examining an exposed face, identifying horizon boundaries, and recording colour, texture, structure, root density, and features such as mottles or carbonate accumulations. This description is the basis for classifying the soil and for judging its suitability and management needs.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-classification' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  connections: [
    { type: 'soil', slug: 'podzol' },
    { type: 'soil', slug: 'chernozem' },
    { type: 'soil', slug: 'luvisol' },
    { type: 'soil', slug: 'gleysol' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-organic-carbon' },
  ],
  glossaryTerms: ['soil-texture'],
  geographicScope:
    'Global. Profile description conventions apply worldwide, but the specific horizons present and their expression depend on local climate, vegetation, parent material, and drainage.',
  limitations: [
    'Not every soil contains every master horizon; profiles vary widely with parent material, climate, and age.',
    'Field description of a single pit may not represent variability across a field, so multiple observations are often needed.',
    'This entry describes general morphology; formal horizon designation follows detailed survey criteria.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil horizons, profile description, and horizon designations',
    },
    { sourceId: 'fao-soils', citedFor: 'Soil profile and horizon concepts' },
    { sourceId: 'isric', citedFor: 'Global soil profile and horizon data' },
    {
      sourceId: 'britannica',
      citedFor: 'General overview of the soil profile',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Profile',
    description:
      'Soil profile explained: the O, A, E, B, C, and R horizons, how they form, and why the profile controls rooting, drainage, and nutrient storage.',
    keywords: [
      'soil profile',
      'soil horizons',
      'soil master horizons',
      'topsoil and subsoil',
    ],
  },
  structuredData: { article: true },
};
