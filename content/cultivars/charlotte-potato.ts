import type { CultivarContent } from '@/types/content';

export const charlottePotato: CultivarContent = {
  id: 'charlotte-potato',
  slug: 'charlotte-potato',
  contentType: 'cultivar',
  title: 'Charlotte',
  acceptedName: 'Charlotte',
  category: 'Potato cultivar',
  parentCrop: { type: 'crop', slug: 'potato' },
  botanicalTaxon: 'Solanum tuberosum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding',
  originCountry: 'France',
  originRegion: 'France',
  registrationStatus: 'listed',
  registrationJurisdiction: 'European Union',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry:
        'EU Common Catalogue of varieties of agricultural plant species',
      sourceId: 'ec-plant-variety',
      jurisdiction: 'European Union',
      status: 'listed',
      asOf: '2026-07-12',
      note: 'Admitted for marketing in the EU; listing is a marketing permission, not a recommendation, and is version/date-specific.',
    },
  ],
  maturityClass: 'Second early / early maincrop',
  growthHabit:
    'Herbaceous annual; tubers borne on underground stolons, typically long-oval with yellow skin and flesh.',
  intendedUse: ['Table (salads, boiling)'],
  climateAdaptation:
    'Grown as a cool-season crop like potato generally; its earlier maturity suits second-early lifting. Sensitive to frost and to heat during tuber bulking.',
  soilAdaptation:
    'Grown on the loose, well-drained soils preferred by potato generally; no unusual soil requirement is documented here.',
  qualityTraits: [
    'Yellow flesh',
    'Long-oval tuber shape',
    'Waxy, firm texture that holds its shape when cooked',
  ],
  summary:
    'Charlotte is a French-bred, yellow-fleshed salad potato with a waxy, firm texture that holds its shape, widely used for boiling and salads.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Charlotte is a salad potato bred in France, valued for its firm, waxy flesh and attractive long-oval tubers with yellow skin and flesh. It is one of the better-known waxy salad varieties in European markets.',
    },
    {
      type: 'paragraph',
      text: 'Because its tubers hold their shape well when cooked, Charlotte is used principally for boiling and salads rather than for mashing or baking. It is typically grown as a second-early variety.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Solanum tuberosum' },
    { label: 'Origin', value: 'France' },
    { label: 'Maturity', value: 'Second early / early maincrop' },
    { label: 'Skin and flesh', value: 'Yellow skin; yellow flesh' },
    { label: 'Cooking type', value: 'Waxy; holds shape (salad potato)' },
    { label: 'Principal uses', value: 'Salads, boiling' },
    { label: 'Registry status', value: 'Listed (European Union)' },
  ],
  sections: [
    {
      id: 'background-and-identity',
      heading: 'Background and identity',
      body: [
        {
          type: 'paragraph',
          text: 'Charlotte is a French-bred variety produced by cross-breeding and is classed as a waxy salad potato. Its firm flesh and shape-holding quality distinguish it from floury varieties used for roasting or mashing.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Skin and flesh', description: 'Yellow' },
            { term: 'Tuber shape', description: 'Long-oval' },
            {
              term: 'Cooking character',
              description: 'Waxy and firm; holds shape when boiled',
            },
          ],
        },
      ],
    },
    {
      id: 'registry-and-cultivation',
      heading: 'Registry status and cultivation',
      body: [
        {
          type: 'paragraph',
          text: 'Charlotte is admitted to the EU Common Catalogue of varieties of agricultural plant species, which permits its marketing within the European Union. Listing is a marketing permission rather than a recommendation and is version- and date-specific. As a second-early it is grown as a cool-season crop like potato generally, and its cooking and agronomic behaviour vary with region, season, and storage.',
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
    'Bred in France and grown widely in Europe; also grown elsewhere. Culinary and agronomic behaviour is region- and season-specific.',
  climateContext: 'Temperate cool-season crop; second-early maturity.',
  limitations: [
    'Cooking and agronomic behaviour is region- and season-specific and varies with storage.',
    'Registry/listing status is jurisdiction- and date-specific; confirm against the current EU Common Catalogue.',
    'The exact year of introduction is reported inconsistently in the literature and is therefore not stated.',
  ],
  sourceReferences: [
    {
      sourceId: 'ec-plant-variety',
      citedFor: 'EU Common Catalogue listing of the variety',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Potato variety characteristics and background',
    },
    {
      sourceId: 'usda-grin',
      citedFor: 'Solanum tuberosum classification and germplasm context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Charlotte (potato cultivar)',
    description:
      'Charlotte potato: a French-bred, yellow-fleshed salad variety with a waxy, firm texture that holds its shape, widely used for boiling and salads.',
    keywords: [
      'Charlotte potato',
      'salad potato',
      'waxy potato',
      'Solanum tuberosum',
      'potato cultivar',
    ],
  },
  structuredData: { article: true },
};
