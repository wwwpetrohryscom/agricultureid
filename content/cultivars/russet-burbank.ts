import type { CultivarContent } from '@/types/content';

export const russetBurbank: CultivarContent = {
  id: 'russet-burbank',
  slug: 'russet-burbank',
  contentType: 'cultivar',
  title: 'Russet Burbank',
  acceptedName: 'Russet Burbank',
  category: 'Potato cultivar',
  parentCrop: { type: 'crop', slug: 'potato' },
  botanicalTaxon: 'Solanum tuberosum',
  cultivarType: 'Cultivar',
  breedingType: 'Selection',
  originCountry: 'United States',
  originRegion:
    'United States (russeted sport of the earlier "Burbank" potato)',
  breederOrInstitution:
    'Russeted sport of the "Burbank" potato, a seedling introduced by Luther Burbank in the 1870s',
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
  maturityClass: 'Maincrop (late / long-season)',
  growthHabit:
    'Herbaceous annual with vigorous, indeterminate haulm; long, blocky to cylindrical tubers borne on underground stolons.',
  intendedUse: ['Processing (French fries)', 'Baking', 'Table'],
  climateAdaptation:
    'A long-season maincrop that requires an extended growing period to mature; grown extensively under irrigation in the semi-arid regions of the North American Pacific Northwest. Like potato generally it is a cool-season crop sensitive to frost and heat.',
  soilAdaptation:
    'Favours deep, loose, well-drained soils that allow the long tubers to size and shape evenly; commonly grown on irrigated sandy loams.',
  qualityTraits: [
    'Netted brown russet skin',
    'White flesh',
    'Floury / mealy cooked texture',
    'High dry-matter (high specific gravity) content',
    'Long, blocky tuber shape',
  ],
  summary:
    'Russet Burbank is a late-maturing, russet-skinned potato with white, floury flesh and high dry-matter content, long the dominant processing variety in North America for French fries and baking.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Russet Burbank is one of the most widely grown potato cultivars in North America and a benchmark processing variety. It arose as a naturally occurring russeted sport (a somatic mutation) of the "Burbank" potato, a seedling selection introduced by the American plant breeder Luther Burbank in the 1870s. The russeted form, with its distinctive netted brown skin, became established in the early twentieth century and gradually displaced the smooth-skinned parent in commercial production.',
    },
    {
      type: 'paragraph',
      text: 'The variety is valued above all for its high dry-matter (specific gravity) content and floury, mealy cooked texture, which make it well suited to French-fry manufacture and to baking. It is a long-season maincrop with vigorous, indeterminate vines, and in the United States it is closely associated with irrigated production in the Pacific Northwest.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Solanum tuberosum' },
    { label: 'Origin', value: 'United States' },
    {
      label: 'Background',
      value: 'Russeted sport of the "Burbank" potato (Luther Burbank, 1870s)',
    },
    { label: 'Maturity', value: 'Maincrop; late / long-season' },
    { label: 'Skin and flesh', value: 'Netted brown russet skin; white flesh' },
    { label: 'Cooking type', value: 'Floury / mealy; high dry matter' },
    {
      label: 'Principal uses',
      value: 'French-fry processing, baking, general table use',
    },
    { label: 'Registry status', value: 'Historical / heritage cultivar' },
  ],
  sections: [
    {
      id: 'background-and-identity',
      heading: 'Background and identity',
      body: [
        {
          type: 'paragraph',
          text: 'The "Burbank" potato from which this cultivar descends was a seedling selection made by Luther Burbank and introduced in the 1870s. Russet Burbank is the russet-skinned sport of that variety: a spontaneous mutant selected and propagated clonally for its netted, corky skin. Because potato is propagated vegetatively from seed tubers, such a sport can be multiplied and maintained as a distinct, stable cultivar.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Skin', description: 'Netted, corky brown russet' },
            { term: 'Flesh colour', description: 'White' },
            {
              term: 'Cooking character',
              description: 'Floury / mealy, reflecting high dry-matter content',
            },
            {
              term: 'Tuber shape',
              description: 'Long, blocky to cylindrical',
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
          text: 'Russet Burbank is a long-season maincrop and needs an extended, cool growing period to reach full maturity and dry-matter accumulation. In North America it is grown extensively under irrigation in semi-arid regions, where its indeterminate vines and long tubers benefit from deep, loose, well-drained soils.',
        },
        {
          type: 'paragraph',
          text: 'Its high dry-matter content and floury texture underpin its dominant role in French-fry processing and its reputation as a baking potato. As with all potatoes, cooking performance and agronomic behaviour vary with region, season, and storage.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'climate', slug: 'growing-season' },
  ],
  glossaryTerms: ['cultivar'],
  geographicScope:
    'Best documented in North American production, especially the irrigated Pacific Northwest of the United States; also grown elsewhere. Agronomic and culinary behaviour is region- and season-specific.',
  climateContext:
    'Long-season, cool-climate maincrop; grown widely under irrigation in semi-arid areas.',
  limitations: [
    'Cooking and agronomic behaviour (dry matter, texture, maturity) is region- and season-specific and varies with storage.',
    'The precise date at which the russeted sport was first selected is reported inconsistently in the literature and is therefore not stated here.',
    'Germplasm is held in genebanks; this is not a statement of commercial availability or of registration in any particular jurisdiction.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Solanum tuberosum classification and U.S. germplasm context',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'U.S. potato variety research and processing characteristics',
    },
    {
      sourceId: 'britannica',
      citedFor:
        'Background on Luther Burbank and the Burbank potato (secondary)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Russet Burbank (potato cultivar)',
    description:
      'Russet Burbank: a late-maturing, russet-skinned potato with white, floury flesh and high dry matter, the classic North American fry and baking variety.',
    keywords: [
      'Russet Burbank',
      'russet potato',
      'French fry potato',
      'Solanum tuberosum',
      'potato cultivar',
    ],
  },
  structuredData: { article: true },
};
