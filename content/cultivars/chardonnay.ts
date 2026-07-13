import type { CultivarContent } from '@/types/content';

export const chardonnay: CultivarContent = {
  id: 'chardonnay',
  slug: 'chardonnay',
  contentType: 'cultivar',
  title: 'Chardonnay',
  scientificName: 'Vitis vinifera',
  alternativeNames: ['Morillon', 'Aubaine'],
  category: 'Grape cultivar',
  subcategory: 'White wine grape',
  summary:
    'Chardonnay is a white wine grape that originated in the Burgundy region of France. DNA analysis has identified it as a natural cross of Pinot and the old variety Gouais Blanc, and it is grown for still and sparkling wines worldwide.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chardonnay is a green-skinned wine grape (Vitis vinifera) associated above all with Burgundy and Champagne in France. It is one of the most widely planted white wine grapes in the world, valued for its adaptability across climates and for a relatively neutral fruit character that readily reflects site and winemaking.',
    },
    {
      type: 'paragraph',
      text: 'It is an ancient clonal cultivar propagated from cuttings. DNA analysis at the University of California, Davis, published in 1999, identified Chardonnay as a natural cross of Pinot (the Pinot Noir family) and the old white variety Gouais Blanc, one of a group of related varieties that share the same parentage.',
    },
  ],
  parentCrop: { type: 'crop', slug: 'grape' },
  acceptedName: 'Chardonnay',
  botanicalTaxon: 'Vitis vinifera',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Natural cross (parentage documented by DNA analysis)',
  originCountry: 'France',
  originRegion: 'Burgundy, eastern France',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'Vitis International Variety Catalogue (VIVC)',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Catalogued as a Vitis vinifera wine-grape variety with documented Pinot x Gouais Blanc parentage.',
    },
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Germplasm accessions maintained in the US National Plant Germplasm System.',
    },
  ],
  intendedUse: ['White wine (still and sparkling)'],
  climateAdaptation:
    'Adaptable across cool to warm climates; it buds relatively early, which can expose it to spring frost, and expresses markedly different fruit character depending on climate.',
  qualityTraits: [
    'Relatively neutral fruit that reflects site and winemaking',
    'Cooler climates tend toward citrus, green apple and higher acidity; warmer climates toward riper, tropical fruit character',
    'Frequently barrel-fermented or oak-aged, and often taken through malolactic conversion',
    'One of the principal grapes of traditional-method sparkling wine, including Champagne',
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Grape (Vitis vinifera)' },
    { label: 'Type', value: 'White wine grape (clonal cultivar)' },
    { label: 'Origin', value: 'Burgundy, France' },
    {
      label: 'Documented parentage',
      value: 'Natural cross of Pinot x Gouais Blanc',
      note: 'Identified by DNA analysis (UC Davis, 1999).',
    },
    { label: 'Uses', value: 'Still white and sparkling wine' },
    { label: 'Registry status', value: 'Historical / heritage variety' },
  ],
  sections: [
    {
      id: 'origin-and-parentage',
      heading: 'Origin and parentage',
      body: [
        {
          type: 'paragraph',
          text: 'Chardonnay is native to the limestone soils of Burgundy and neighbouring Champagne. Its name is shared with a village in the Maconnais, and it was long grown alongside Pinot Noir without its origins being understood.',
        },
        {
          type: 'paragraph',
          text: 'DNA profiling revealed that Chardonnay, together with a number of other French varieties, is the offspring of a cross between a Pinot and the once-widespread but now obscure white variety Gouais Blanc. This shared parentage links Chardonnay genetically to Pinot Noir, one of its parents.',
        },
      ],
    },
    {
      id: 'growing-characteristics',
      heading: 'Growing characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Chardonnay tends to bud early, which can make it vulnerable to spring frost in cool regions, and it ripens comparatively early. Its adaptability has allowed it to be planted successfully from cool sparkling-wine regions to warm still-wine areas.',
        },
        {
          type: 'list',
          items: [
            'Early budbreak, with associated spring-frost risk in cool climates',
            'Classically grown on limestone and chalk-influenced soils in Burgundy and Champagne',
            'Adaptable to a wide range of climates, with strong effects on style',
            'Vigorous, reliably productive vines under a range of training systems',
          ],
        },
      ],
    },
    {
      id: 'wine-style-and-use',
      heading: 'Wine style and use',
      body: [
        {
          type: 'paragraph',
          text: 'Chardonnay is made in a wide range of dry white styles, from lean, unoaked wines to richer, barrel-fermented examples, and it is a mainstay of traditional-method sparkling wine, including Champagne, where it is one of the three principal grapes.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because Chardonnay is relatively neutral, its final character owes a great deal to climate, site, clone, and winemaking choices such as oak use and malolactic conversion. Style descriptions here are general and qualitative.',
        },
      ],
    },
  ],
  claims: [
    {
      field: 'parentage',
      statement:
        'Chardonnay is a natural cross of Pinot and Gouais Blanc, identified by DNA analysis published by University of California, Davis researchers in 1999.',
      citations: [
        {
          sourceId: 'britannica',
          evidenceNote:
            'Encyclopaedia Britannica documents the Pinot x Gouais Blanc parentage identified by DNA analysis.',
          evidenceTier: 3,
        },
      ],
    },
  ],
  connections: [
    { type: 'cultivar', slug: 'pinot-noir' },
    { type: 'soil', slug: 'chalky-soil' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Originating in Burgundy, France, and now planted across cool to warm wine regions worldwide for both still and sparkling wine.',
  climateContext:
    'Adaptable variety grown from cool sparkling-wine climates to warm still-wine regions; early budbreak brings spring-frost risk.',
  limitations: [
    'Wine style depends heavily on terroir, clone, growing season, and winemaking (including oak and malolactic conversion); the variety description is not a description of any individual wine.',
    'Chardonnay exists as many registered clones selected for differing yield and character; this page treats the variety in general terms.',
    'Registry record identifiers and deep links are omitted where they could not be independently verified.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Cultivar/germplasm records and taxonomy for Vitis vinifera',
    },
    { sourceId: 'gbif', citedFor: 'Taxonomic placement of Vitis vinifera' },
    {
      sourceId: 'britannica',
      citedFor:
        'Historical background and documented parentage (secondary reference)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Chardonnay (grape cultivar)',
    description:
      'Chardonnay: a Burgundy white wine grape and documented Pinot x Gouais Blanc cross used for still and sparkling wines — origin, growing traits, and style.',
    keywords: [
      'Chardonnay',
      'grape cultivar',
      'Vitis vinifera',
      'white wine grape',
    ],
  },
  structuredData: { article: true },
};
