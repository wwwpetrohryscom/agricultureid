import type { CultivarContent } from '@/types/content';

export const yukonGold: CultivarContent = {
  id: 'yukon-gold',
  slug: 'yukon-gold',
  contentType: 'cultivar',
  title: 'Yukon Gold',
  acceptedName: 'Yukon Gold',
  category: 'Potato cultivar',
  parentCrop: { type: 'crop', slug: 'potato' },
  botanicalTaxon: 'Solanum tuberosum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding',
  originCountry: 'Canada',
  originRegion: 'Ontario, Canada (University of Guelph)',
  yearReleased: '1980',
  breederOrInstitution:
    'University of Guelph, Ontario (breeding by G. Johnston and colleagues)',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Maintained as germplasm in the U.S. National Plant Germplasm System; a genebank holding, not a marketing registration.',
    },
  ],
  maturityClass: 'Early to maincrop',
  growthHabit:
    'Herbaceous annual; tubers borne on underground stolons, typically round to oval with shallow eyes.',
  intendedUse: ['Table (boiling, baking, mashing)', 'Roasting'],
  climateAdaptation:
    'Grown as a cool-season crop like potato generally; its earlier-to-mid maturity suits temperate maincrop production. Sensitive to frost and to heat during tuber bulking.',
  soilAdaptation:
    'Suited to the loose, well-drained soils preferred by potato generally; no unusual soil requirement is documented here.',
  qualityTraits: [
    'Yellow flesh',
    'Thin, smooth yellow-buff skin with shallow pink eyes',
    'All-purpose cooking texture',
  ],
  summary:
    'Yukon Gold is a yellow-fleshed potato bred at the University of Guelph and released in 1980, notable as one of the first widely marketed yellow-fleshed varieties in North America.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Yukon Gold is a yellow-fleshed potato cultivar developed at the University of Guelph in Ontario, Canada, and released in 1980. It became widely known as one of the first yellow-fleshed varieties to be marketed on a large scale in North America, where white-fleshed potatoes had previously dominated the fresh market.',
    },
    {
      type: 'paragraph',
      text: 'The variety has thin, smooth yellow-buff skin marked by shallow pink eyes and firm yellow flesh. It is treated as an all-purpose potato, used for boiling, mashing, baking, and roasting, and its distinctive flesh colour contributed to broad consumer recognition.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Solanum tuberosum' },
    { label: 'Origin', value: 'Ontario, Canada (University of Guelph)' },
    { label: 'Year released', value: '1980' },
    { label: 'Maturity', value: 'Early to maincrop' },
    {
      label: 'Skin and flesh',
      value: 'Thin yellow-buff skin, pink eyes; yellow flesh',
    },
    { label: 'Cooking type', value: 'All-purpose' },
    { label: 'Registry status', value: 'Historical / heritage cultivar' },
  ],
  sections: [
    {
      id: 'background-and-identity',
      heading: 'Background and identity',
      body: [
        {
          type: 'paragraph',
          text: 'Yukon Gold was produced through deliberate cross-breeding in the potato programme at the University of Guelph and released in 1980. It is frequently cited as a landmark in popularising yellow-fleshed potatoes with North American consumers, a trait long common in some European and Andean varieties.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Flesh colour', description: 'Yellow' },
            {
              term: 'Skin',
              description: 'Thin, smooth yellow-buff with shallow pink eyes',
            },
            {
              term: 'Cooking character',
              description:
                'All-purpose; suited to boiling, mashing, baking, and roasting',
            },
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
          text: 'As with potato generally, Yukon Gold is grown as a cool-season crop and is sensitive to frost and to heat during tuber bulking. Its earlier-to-mid maturity fits temperate maincrop systems. Culinary performance and agronomic behaviour vary with region, season, and storage.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: ['cultivar'],
  geographicScope:
    'Developed in Canada and widely grown in North America; also grown elsewhere. Agronomic and culinary behaviour is region- and season-specific.',
  climateContext: 'Cool-season temperate crop; early-to-maincrop maturity.',
  limitations: [
    'Cooking and agronomic behaviour is region- and season-specific and varies with storage.',
    'Any historical variety-registration in Canada or elsewhere is jurisdiction- and date-specific and is not asserted as current here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Solanum tuberosum classification and germplasm context',
    },
    {
      sourceId: 'cip',
      citedFor: 'Potato genetic resources and variety documentation',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the variety (secondary)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Yukon Gold (potato cultivar)',
    description:
      'Yukon Gold: a yellow-fleshed, all-purpose potato bred at the University of Guelph and released in 1980, an early yellow-fleshed variety in North America.',
    keywords: [
      'Yukon Gold',
      'yellow potato',
      'University of Guelph',
      'Solanum tuberosum',
      'potato cultivar',
    ],
  },
  structuredData: { article: true },
};
