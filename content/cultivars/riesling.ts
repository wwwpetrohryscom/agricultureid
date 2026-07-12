import type { CultivarContent } from '@/types/content';

export const riesling: CultivarContent = {
  id: 'riesling',
  slug: 'riesling',
  contentType: 'cultivar',
  title: 'Riesling',
  scientificName: 'Vitis vinifera',
  alternativeNames: [
    'Rhine Riesling',
    'Weisser Riesling',
    'Johannisberg Riesling',
  ],
  category: 'Grape cultivar',
  subcategory: 'White wine grape',
  summary:
    'Riesling is an aromatic white wine grape from the Rhine region of Germany, noted for high acidity, cold-hardiness, and a wide range of styles from bone-dry to intensely sweet. It is regarded as strongly expressive of site.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Riesling is a green-skinned wine grape (Vitis vinifera) native to the Rhine valley of Germany. It is prized for aromatic, high-acid white wines that range from dry to lusciously sweet, and it is often cited as one of the varieties that most clearly reflects the character of the site where it is grown.',
    },
    {
      type: 'paragraph',
      text: 'A clonal cultivar propagated from cuttings, Riesling is notably cold-hardy and is grown in cool climates including Germany, Alsace in France, Austria, and parts of North America and Australia. It typically ripens late but retains high acidity, which supports both dry wines and sweet wines made from late-harvested or botrytis-affected fruit.',
    },
  ],
  parentCrop: { type: 'crop', slug: 'grape' },
  acceptedName: 'Riesling',
  botanicalTaxon: 'Vitis vinifera',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Traditional selection',
  originCountry: 'Germany',
  originRegion: 'Rhine region',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'Vitis International Variety Catalogue (VIVC)',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Catalogued as a Vitis vinifera white wine-grape variety; the common name Riesling should not be confused with unrelated varieties that borrow the name.',
    },
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Germplasm accessions maintained in the US National Plant Germplasm System.',
    },
  ],
  intendedUse: ['White wine (dry through to sweet styles)'],
  climateAdaptation:
    'A cold-hardy, cool-climate variety that ripens late while retaining high acidity; it is grown in some of the coolest quality-wine regions.',
  qualityTraits: [
    'High natural acidity retained even at ripeness',
    'Aromas often described as citrus, green apple, stone fruit, and floral notes',
    'Develops distinctive aged character over time',
    'Made across a spectrum from bone-dry to intensely sweet, including botrytis-affected wines',
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Grape (Vitis vinifera)' },
    { label: 'Type', value: 'White wine grape (clonal cultivar)' },
    { label: 'Origin', value: 'Rhine region, Germany' },
    { label: 'Notable trait', value: 'Cold-hardy; high acidity' },
    { label: 'Styles', value: 'Dry through to intensely sweet' },
    { label: 'Registry status', value: 'Historical / heritage variety' },
  ],
  sections: [
    {
      id: 'origin-and-naming',
      heading: 'Origin and naming',
      body: [
        {
          type: 'paragraph',
          text: 'Riesling has been documented in the Rhine region of Germany since at least the 15th century and is central to German viticulture, particularly along the Mosel and Rhine rivers, as well as in Alsace across the French border.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'The name Riesling is borrowed by several unrelated varieties (for example, Welschriesling and various local grapes labelled Riesling). These are distinct from the true Rhine Riesling described here.',
        },
      ],
    },
    {
      id: 'growing-characteristics',
      heading: 'Growing characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Riesling is prized in cool regions partly because of its winter hardiness and its ability to ripen late while keeping fresh acidity. It is often grown on steep river slopes and on a range of soils, from slate to limestone and sandstone.',
        },
        {
          type: 'list',
          items: [
            'Cold-hardy relative to many Vitis vinifera varieties',
            'Late-ripening while retaining high acidity',
            'Grown on diverse soils, including slate in the Mosel',
            'Suited to cool climates and, in places, steep vineyard sites',
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
          text: 'Riesling is made in a wide range of styles determined largely by how much sugar is retained, from fully dry wines to sweet wines from late-harvested or botrytis-affected grapes. Its acidity is central to balancing sweeter styles.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The final sweetness and style of a Riesling reflect winemaking choices and vintage conditions as much as the variety itself; descriptions here are qualitative and general.',
        },
      ],
    },
  ],
  connections: [
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Originating in the Rhine region of Germany and grown in cool-climate wine regions worldwide, including Alsace, Austria, and parts of North America and Australia.',
  climateContext:
    'Cold-hardy, cool-climate variety; late-ripening with high retained acidity.',
  limitations: [
    'Wine style depends heavily on terroir, vintage, and winemaking, especially the level of residual sweetness; the variety description is not a description of any individual wine.',
    'The name Riesling is used for several unrelated varieties, so labels do not always indicate true Rhine Riesling.',
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
    title: 'Riesling (grape cultivar)',
    description:
      'Riesling: an aromatic, cold-hardy German white wine grape made from dry to intensely sweet styles — origin, cool-climate growing traits, and wine character.',
    keywords: [
      'Riesling',
      'grape cultivar',
      'Vitis vinifera',
      'German white wine grape',
    ],
  },
  structuredData: { article: true },
};
