import type { CultivarContent } from '@/types/content';

export const thompsonSeedless: CultivarContent = {
  id: 'thompson-seedless',
  slug: 'thompson-seedless',
  contentType: 'cultivar',
  title: 'Thompson Seedless',
  scientificName: 'Vitis vinifera',
  alternativeNames: ['Sultana', 'Sultanina', 'Sultana Seedless', 'Kishmish'],
  category: 'Grape cultivar',
  subcategory: 'Table and raisin grape (seedless)',
  summary:
    'Thompson Seedless is a white, seedless grape of eastern Mediterranean origin, also known as Sultana or Sultanina. It is a leading grape for raisins as well as table use and juice, and is grown widely in hot, irrigated regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Thompson Seedless is a green-skinned, seedless grape (Vitis vinifera) grown chiefly for raisins and for fresh table use. It is the same variety long known in the Old World as Sultana or Sultanina, and it takes its American name from William Thompson, who propagated it in California in the 1870s.',
    },
    {
      type: 'paragraph',
      text: 'An ancient clonal cultivar propagated from cuttings, it is naturally seedless (its seeds fail to develop into hard structures), which makes it well suited to drying and to seedless table use. It is vigorous and productive, thrives in hot climates with a long, dry ripening season, and is central to raisin production in regions such as California, Turkey, Iran, and the eastern Mediterranean.',
    },
  ],
  parentCrop: { type: 'crop', slug: 'grape' },
  acceptedName: 'Sultanina',
  botanicalTaxon: 'Vitis vinifera',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Traditional selection (ancient variety)',
  originCountry: 'Ottoman Empire / eastern Mediterranean (Asia Minor)',
  originRegion: 'Eastern Mediterranean',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'Vitis International Variety Catalogue (VIVC)',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Catalogued as a Vitis vinifera table/raisin variety; Thompson Seedless is a synonym of the variety widely known as Sultanina/Sultana.',
    },
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Germplasm accessions maintained in the US National Plant Germplasm System.',
    },
  ],
  intendedUse: ['Raisins (drying)', 'Table grapes (fresh)', 'Juice'],
  climateAdaptation:
    'Suited to hot climates with a long, dry ripening season, typically under irrigation; the warmth and low harvest-season rainfall favour both ripening and drying for raisins.',
  qualityTraits: [
    'Naturally seedless, with small to medium oval berries',
    'Thin skins and a mild, sweet flavour when fresh',
    'Pale golden colour when dried into raisins',
    'Vigorous vines that are usually cane-pruned because basal buds are less fruitful',
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Grape (Vitis vinifera)' },
    {
      label: 'Type',
      value: 'Seedless table and raisin grape (clonal cultivar)',
    },
    { label: 'Also known as', value: 'Sultana / Sultanina / Kishmish' },
    { label: 'Origin', value: 'Eastern Mediterranean (Asia Minor)' },
    { label: 'Main uses', value: 'Raisins, fresh table grapes, juice' },
    { label: 'Registry status', value: 'Historical / heritage variety' },
  ],
  sections: [
    {
      id: 'origin-and-names',
      heading: 'Origin and names',
      body: [
        {
          type: 'paragraph',
          text: 'The variety is very old and originates in the eastern Mediterranean and Asia Minor, where it has long been grown for drying under names such as Sultana and Kishmish. It spread through Mediterranean viticulture and, later, to other warm regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'The name Thompson Seedless comes from William Thompson, an immigrant grower in California who is credited with propagating and popularising the variety there in the 1870s. In much of the world the same grape is still called Sultana or Sultanina.',
        },
      ],
    },
    {
      id: 'growing-characteristics',
      heading: 'Growing characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Thompson Seedless is vigorous and high-yielding under suitable conditions. Because its most fruitful buds are further along the cane, it is generally cane-pruned rather than spur-pruned. It is grown mainly in hot, irrigated regions where a long, dry season supports ripening and, for raisins, drying.',
        },
        {
          type: 'list',
          items: [
            'Naturally seedless, favouring drying and seedless table use',
            'Vigorous vines usually managed by cane pruning',
            'Best suited to hot climates with a long, dry ripening season',
            'Commonly grown under irrigation in semi-arid regions',
          ],
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'The variety is multipurpose. A large share of the crop is dried into raisins (including the pale golden raisins associated with the Sultana name), while fresh fruit is sold as seedless table grapes, and some of the crop goes to juice and concentrate.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'End use influences how the fruit is grown and handled; for example, table-grape production emphasises berry size and appearance, while raisin production emphasises sugar accumulation and suitability for drying.',
        },
      ],
    },
  ],
  connections: [
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Originating in the eastern Mediterranean and now grown in hot, irrigated regions worldwide, including California, Turkey, Iran, and Australia.',
  climateContext:
    'Hot-climate, long-dry-season variety, generally grown under irrigation for raisins and table use.',
  limitations: [
    'Thompson Seedless, Sultana, and Sultanina are widely treated as the same variety, but naming and local strains vary between countries.',
    'Growing practices differ substantially depending on whether the crop is destined for raisins, table grapes, or juice.',
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
        'Historical background and varietal characterisation (secondary reference)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Thompson Seedless (grape cultivar)',
    description:
      'Thompson Seedless (Sultana / Sultanina): a seedless grape for raisins, table use, and juice grown in hot irrigated regions — origin, names, and cultivation.',
    keywords: [
      'Thompson Seedless',
      'Sultana',
      'Sultanina',
      'seedless raisin grape',
    ],
  },
  structuredData: { article: true },
};
