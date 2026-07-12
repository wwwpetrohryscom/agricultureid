import type { CultivarContent } from '@/types/content';

export const kingEdward: CultivarContent = {
  id: 'king-edward',
  slug: 'king-edward',
  contentType: 'cultivar',
  title: 'King Edward',
  acceptedName: 'King Edward',
  category: 'Potato cultivar',
  parentCrop: { type: 'crop', slug: 'potato' },
  botanicalTaxon: 'Solanum tuberosum',
  cultivarType: 'Cultivar',
  originCountry: 'United Kingdom',
  originRegion: 'United Kingdom (England)',
  yearReleased: '1902',
  registrationStatus: 'historical',
  maturityClass: 'Maincrop',
  growthHabit:
    'Herbaceous annual; tubers borne on underground stolons, typically oval with a party-coloured (part-pigmented) skin.',
  intendedUse: ['Roasting', 'Baking', 'Mashing', 'Table'],
  climateAdaptation:
    'A temperate maincrop grown as a cool-season crop like potato generally; sensitive to frost and to heat during tuber bulking.',
  soilAdaptation:
    'Grown on the loose, well-drained soils preferred by potato generally; no unusual soil requirement is documented here.',
  qualityTraits: [
    'Party-coloured skin (creamy-white with pink/red patches)',
    'Cream / pale-yellow flesh',
    'Floury cooked texture',
  ],
  summary:
    'King Edward is a British heritage maincrop potato introduced in 1902, recognised for its party-coloured skin and floury, cream-fleshed tubers favoured for roasting, baking, and mashing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'King Edward is a long-established British maincrop potato introduced in 1902, when it was named in connection with the coronation of King Edward VII. It remains one of the best-known heritage varieties in the United Kingdom and is prized as a floury cooking potato.',
    },
    {
      type: 'paragraph',
      text: 'The tubers have a characteristic party-coloured skin — creamy-white flushed and patched with pink or red — and cream to pale-yellow flesh with a floury texture. These qualities make it a traditional favourite for roasting, baking, and mashing.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Solanum tuberosum' },
    { label: 'Origin', value: 'United Kingdom' },
    { label: 'Introduced', value: '1902' },
    { label: 'Maturity', value: 'Maincrop' },
    {
      label: 'Skin and flesh',
      value: 'Party-coloured skin (white with pink/red); cream flesh',
    },
    { label: 'Cooking type', value: 'Floury' },
    { label: 'Registry status', value: 'Historical / heritage cultivar' },
  ],
  sections: [
    {
      id: 'background-and-identity',
      heading: 'Background and identity',
      body: [
        {
          type: 'paragraph',
          text: 'King Edward was introduced in 1902 and takes its name from King Edward VII. Its precise parentage and the identity of its raiser are reported inconsistently and are not asserted here. It is distinguished visually by its party-coloured skin, in which creamy-white ground colour is broken by pink or red patches, most concentrated around the eyes.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Skin',
              description: 'Party-coloured: creamy-white with pink/red patches',
            },
            { term: 'Flesh colour', description: 'Cream to pale yellow' },
            { term: 'Cooking character', description: 'Floury' },
          ],
        },
      ],
    },
    {
      id: 'cultivation-and-use',
      heading: 'Cultivation and use',
      body: [
        {
          type: 'paragraph',
          text: 'As a maincrop it is grown as a cool-season crop like potato generally and is lifted after the haulm has died down. Its floury texture suits roasting, baking, and mashing rather than uses that require a potato to hold its shape. Cooking performance and agronomic behaviour vary with region, season, and storage.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'climate', slug: 'growing-season' },
  ],
  glossaryTerms: ['cultivar'],
  geographicScope:
    'Best documented as a United Kingdom heritage variety; also grown elsewhere. Culinary and agronomic behaviour is region- and season-specific.',
  climateContext: 'Temperate cool-season maincrop.',
  limitations: [
    'Cooking and agronomic behaviour is region- and season-specific and varies with storage.',
    'The variety’s parentage and original raiser are reported inconsistently in the literature and are therefore not stated.',
    'Current variety-listing status is jurisdiction- and date-specific and is not asserted here for this heritage cultivar.',
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor: 'UK potato variety characteristics and background',
    },
    {
      sourceId: 'usda-grin',
      citedFor: 'Solanum tuberosum classification and germplasm context',
    },
    {
      sourceId: 'rhs',
      citedFor: 'General horticultural reference on the variety (secondary)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'King Edward (potato cultivar)',
    description:
      'King Edward: a British heritage maincrop potato introduced in 1902, with party-coloured skin and floury, cream flesh favoured for roasting and baking.',
    keywords: [
      'King Edward potato',
      'heritage potato',
      'floury potato',
      'Solanum tuberosum',
      'potato cultivar',
    ],
  },
  structuredData: { article: true },
};
