import type { CropContent } from '@/types/content';

export const redClover: CropContent = {
  id: 'crop-red-clover',
  slug: 'red-clover',
  contentType: 'crop',
  title: 'Red Clover',
  scientificName: 'Trifolium pratense',
  alternativeNames: ['Broad red clover', 'Cow clover'],
  category: 'Forage crop',
  subcategory: 'Short-lived perennial legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Short-lived perennial, commonly two to three production years',
  summary:
    'Red clover is a taprooted forage legume grown for high-protein silage and for the nitrogen it leaves behind. It is deliberately short-lived, and its oestrogenic isoflavones make it unsuitable for ewes at tupping.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Red clover occupies a specific place in temperate rotations: two or three high-yielding years of protein-rich cut forage, followed by a nitrogen legacy for the crop that follows. It is not managed as a long-term sward, and treating it as one is the most common reason it disappoints.',
    },
    {
      type: 'paragraph',
      text: 'The plant is taprooted and crown-forming rather than stoloniferous, so it does not spread to fill gaps. Whatever plant population establishes in the first year is broadly what the stand will have, less what it loses.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Stand life',
      value: 'Two to three production years; not a long-term sward',
    },
    {
      label: 'Types',
      value: 'Early-flowering multi-cut and late-flowering single-cut types',
    },
    {
      label: 'Ploidy in cultivation',
      value: 'Diploid and tetraploid cultivars',
    },
    {
      label: 'Nitrogen',
      value:
        'Fixes atmospheric nitrogen in symbiosis with rhizobia; needs none applied',
    },
    {
      label: 'Livestock caution',
      value:
        'Oestrogenic isoflavones — avoid for ewes before and during tupping',
    },
  ],
  sections: [
    {
      id: 'types',
      heading: 'Two types, two systems',
      body: [
        {
          type: 'paragraph',
          text: 'Cultivated red clover divides into an early-flowering type that regrows vigorously and supports several cuts a year, and a late-flowering type that produces one large cut and regrows slowly. The distinction predates modern breeding and still governs how a cultivar is used.',
        },
        {
          type: 'paragraph',
          text: 'Multi-cut types dominate silage systems. Single-cut types persist better under less intensive management and are more often found where the clover is grown mainly for its rotational nitrogen rather than for tonnage.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and inoculation',
      body: [
        {
          type: 'paragraph',
          text: 'Sowing is shallow into a firm seedbed, either alone or undersown into a cereal, and the seed is small enough that depth control matters more than seed rate. Undersowing gives a cover crop of grain in the establishment year but costs some clover vigour.',
        },
        {
          type: 'paragraph',
          text: 'The appropriate rhizobia are usually present where clover has been grown before. On ground with no clover history, or after a long break, inoculated seed is the cheap insurance against a stand that establishes and then goes yellow.',
        },
      ],
    },
    {
      id: 'nitrogen-fixation',
      heading: 'Nitrogen fixation and the rotational role',
      body: [
        {
          type: 'paragraph',
          text: 'A well-nodulated stand meets its own nitrogen requirement and leaves a substantial residue in roots, crowns and returned herbage for the following crop. Applied nitrogen suppresses fixation, so fertilising a clover stand with nitrogen is both wasteful and counterproductive.',
        },
        {
          type: 'paragraph',
          text: 'The size of the residue depends on how much of the crop is removed and how much is returned, so a grazed or mulched stand leaves more than one cut and carted away. Quantified nitrogen credits are set by national guidance and vary widely.',
        },
      ],
    },
    {
      id: 'oestrogens',
      heading: 'Oestrogenic isoflavones',
      body: [
        {
          type: 'paragraph',
          text: 'Red clover contains isoflavones with oestrogenic activity, principally formononetin, which is metabolised in the rumen into a compound that interferes with ovulation and conception in sheep. The effect is well established and is the reason red clover is excluded from ewe diets in the weeks before and during mating.',
        },
        {
          type: 'paragraph',
          text: 'Cattle are much less affected. Isoflavone content varies with cultivar, growth stage and stress, and conserved forage retains activity, so the caution applies to silage as well as to grazing. This is a management restriction on a specific class of stock, not a general toxicity.',
        },
      ],
    },
    {
      id: 'cutting',
      heading: 'Cutting management',
      body: [
        {
          type: 'paragraph',
          text: 'Cuts are taken around early flowering, which balances yield against the decline in digestibility as stems lignify. Cutting height matters more than in grass: the regrowth comes from buds on the crown, and cutting below them removes the plant’s capacity to recover.',
        },
        {
          type: 'paragraph',
          text: 'A late-autumn cut is the classic error. The stand needs to enter winter with reserves in the crown and taproot, and a stand cut hard late is the one that thins out first.',
        },
      ],
    },
    {
      id: 'conservation',
      heading: 'Conserving a high-protein, low-sugar forage',
      body: [
        {
          type: 'paragraph',
          text: 'Red clover is high in protein and buffering capacity and low in water-soluble carbohydrate, which is an unfavourable combination for lactic fermentation. Silage made from it is prone to a poor fermentation and to protein breakdown unless it is wilted properly.',
        },
        {
          type: 'paragraph',
          text: 'Wilting to raise dry matter, rapid consolidation and effective sealing are the practical answers, and clover is often ensiled with grass to supply the sugar the fermentation needs. The leaves are also brittle when dry, so field losses during hay-making are high, which is why the crop is usually ensiled rather than hayed.',
        },
      ],
    },
    {
      id: 'diseases',
      heading: 'What ends a stand',
      body: [
        {
          type: 'paragraph',
          text: 'Sclerotinia crown and stem rot — clover rot — kills plants over winter and is the classic cause of a stand that emerges thin in its second or third spring. Stem eelworm and southern anthracnose also cause stand loss where they are established.',
        },
        {
          type: 'paragraph',
          text: 'Because these organisms build up in the soil, a break of several years between red clover crops on the same field is the standard precaution, and it is a rotation constraint that has to be planned around rather than corrected later.',
        },
      ],
    },
    {
      id: 'pollination',
      heading: 'Pollination and seed',
      body: [
        {
          type: 'paragraph',
          text: 'The florets are deep and the species is largely self-incompatible, so seed set depends on insects able to reach the nectar. Bumblebees are the effective pollinators of diploid red clover; honeybees work it less efficiently, and tetraploid cultivars with deeper florets are harder still to pollinate.',
        },
        {
          type: 'paragraph',
          text: 'This makes seed production a specialised enterprise dependent on pollinator populations, and it is why tetraploid seed is generally the more expensive.',
        },
      ],
    },
    {
      id: 'grass-mixtures',
      heading: 'Grown with grass',
      body: [
        {
          type: 'paragraph',
          text: 'Red clover is commonly sown with a companion grass, which uses the fixed nitrogen, improves the sward’s ground cover and supplies fermentable sugar at ensiling. A vigorous companion can also crowd out the clover, so the grass component is chosen for compatibility rather than for its own yield.',
        },
        {
          type: 'paragraph',
          text: 'In mixtures the clover proportion usually falls over successive years, and monitoring that proportion is the practical way to judge when the stand has stopped being a legume crop.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'sclerotinia' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'slugs' },
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'root-knot-nematode' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'molybdenum' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'forage-harvester' },
    { type: 'machinery', slug: 'baler' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'perennial-ryegrass' },

    { type: 'crop', slug: 'berseem-clover' },
  ],
  glossaryTerms: ['forage', 'crop-rotation', 'ruminant'],
  geographicScope:
    'Temperate regions. Cultivar types, nitrogen-credit values and rotation intervals are set by national guidance.',
  climateContext:
    'Cool temperate legume; taprooted and moderately drought-tolerant, intolerant of waterlogging and of severe repeated defoliation.',
  limitations: [
    'Nitrogen fixed and the credit available to a following crop vary widely with stand density, management and how much herbage is removed; national guidance figures should be used rather than a general value.',
    'Isoflavone content varies with cultivar, growth stage and stress; the tupping restriction is a categorical precaution and not derived from a threshold stated here.',
    'Stand life is given as a general expectation; disease history and cutting management change it substantially.',
    'Rotation intervals for clover rot are set by national guidance and differ between regions.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Forage legume production context' },
    {
      sourceId: 'ahdb',
      citedFor: 'Red clover agronomy, conservation and livestock guidance',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Trifolium pratense disease and pest compendium data',
    },
    { sourceId: 'usda-ars', citedFor: 'Forage legume research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Red Clover',
    description:
      'Trifolium pratense as a forage crop: early and late types, rotational nitrogen, the isoflavone restriction for ewes, cutting height and clover rot.',
    keywords: [
      'red clover',
      'Trifolium pratense',
      'forage legume',
      'clover rot',
      'formononetin',
    ],
  },
  structuredData: { article: true },
};
