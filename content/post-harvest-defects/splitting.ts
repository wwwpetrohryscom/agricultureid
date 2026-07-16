import type { PostHarvestDefectContent } from '@/types/content';

export const splitting: PostHarvestDefectContent = {
  id: 'post-harvest-defect-splitting',
  slug: 'splitting',
  contentType: 'post-harvest-defect',
  title: 'Splitting',
  defectClass: 'mechanical',
  alternativeNames: ['Splits', 'Bursting', 'Head splitting', 'Berry split'],
  category: 'Post-harvest defect',
  subcategory: 'Mechanical damage',
  summary:
    'Splitting is tensile failure that opens a unit or separates it into pieces; the line between a split and a crack is largely a matter of commodity convention and grade-standard wording rather than mechanism, and much splitting — in citrus, cabbage, grapes, and onions — happens on the plant before harvest.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Splitting is the term used when a fracture is decisive: the unit opens, exposing flesh, or comes apart into pieces. A cabbage head splits open, a grape berry bursts, a navel orange opens at the blossom end, a soybean separates into its two cotyledons. The mechanism is tensile failure — tissue pulled apart rather than crushed — which is the same mechanism that produces cracking. What separates the two terms in practice is not physics but usage, and the usage is set by the commodity, the trade, and the standard being worked to.',
    },
    {
      type: 'paragraph',
      text: 'That gives splitting a character the other mechanical defects on this site do not have: for several commodities it is a commercial category before it is a diagnosis. Grain and legume standards define splits as a counted class of material, and a lot is graded on the proportion of them regardless of how or when they were made. This is a legitimate and useful commercial construct, and it should not be mistaken for causal information. A split counted under a grade standard tells you what the lot is; it does not tell you what happened to it. And in fresh produce the causal story is frequently that nothing happened to it at all after harvest — the split was made in the field by water uptake, and the packhouse merely found it.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Mechanical — tensile failure opening or separating the unit',
    },
    {
      label: 'Boundary with cracking',
      value:
        'Conventional rather than mechanistic: a split is loosely a fuller separation than a crack, but the usage differs by commodity, standard, and country',
      note: 'Which term applies to a given defect should be taken from the applicable grade standard, not from a general definition',
    },
    {
      label: 'A trade category as well as a defect',
      value:
        'In grain and legume standards, splits are a defined and counted class of material — a grading fact, not a statement about cause',
    },
    {
      label: 'Frequently pre-harvest',
      value:
        'Cabbage head splitting, navel orange splitting, grape berry splitting, and onion bulb splitting are field phenomena discovered post-harvest',
    },
    {
      label: 'Principal field driver',
      value:
        'Water uptake outpacing the expansion of the skin or the containing structure, typically after rain or irrigation following a dry period',
    },
    {
      label: 'Post-harvest contribution',
      value:
        'Threshing, shelling, and handling split legume seed directly, and severe impact or compression can split fresh produce outright',
    },
    {
      label: 'Where the tolerances are set',
      value:
        'The proportion of splits permitted, and the definition of what counts as one, are set by the applicable grade standard for the commodity and market',
    },
  ],
  sections: [
    {
      id: 'terminology',
      heading: 'A distinction that is partly conventional',
      body: [
        {
          type: 'paragraph',
          text: 'The honest position on cracking and splitting is that they name overlapping regions of the same phenomenon. Both are tensile failures of tissue that could not carry the stress applied to it. The working convention — crack for a partial fracture, split for one that opens the unit or separates it — is serviceable and is not applied consistently anywhere. Tomato literature uses cracking for defects a cabbage grower would call splitting. Legume trade calls separated cotyledons splits and would never call them cracks, though the fracture is partial in neither case. Grain trade reserves stress crack for an internal fissure and uses breakage for the kernel that came apart, leaving splitting to mean something different again.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Check the standard before comparing defect records',
          text: 'Because the terms are conventional, two lots recorded under different standards may carry the same physical defect under different names, or different defects under the same name. Defect data are only comparable when the definitions behind them have been checked to match. The applicable grade standard, not this entry, defines what a split is for a given commodity and market.',
        },
        {
          type: 'paragraph',
          text: 'None of this is a reason to abandon the distinction, which does real work: an opened unit and a hairline fracture have different consequences for water loss, for infection, and for whether the unit can be sold at all. It is a reason not to treat the label as though it carried mechanistic information it does not have.',
        },
      ],
    },
    {
      id: 'field',
      heading: 'Splitting on the plant',
      body: [
        {
          type: 'paragraph',
          text: 'For several important commodities, splitting is overwhelmingly a pre-harvest event with a well-understood driver: the interior takes up water and expands faster than the skin, rind, or head structure containing it can accommodate, and the containment fails. Rain or irrigation after a dry period is the classic trigger, since the covering has hardened and slowed its expansion while the tissue inside remains capable of rapid uptake.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cabbage head splitting',
              description:
                'The head continues to expand internally against outer leaves that have stopped, and it splits open. Driven by water availability after a dry spell, by cultivar, and by over-maturity in the field — a crop left standing past its window splits.',
            },
            {
              term: 'Navel orange splitting',
              description:
                'A well-documented pre-harvest physiological disorder in which the fruit opens at the blossom end. Fruit affected on the tree typically drops before harvest; the disorder is a growing-season problem and not a handling one.',
            },
            {
              term: 'Grape berry splitting',
              description:
                'Berries burst after rain near maturity, particularly in tight-clustered cultivars, and the split berries are then a decay focus within the bunch for the rest of the chain.',
            },
            {
              term: 'Onion bulb splitting',
              description:
                'Bulbs divide into multiple centres during growth, from irregular water supply and growth checks. Discovered at grading, decided in the field.',
            },
            {
              term: 'Tomato and carrot splitting',
              description:
                'The same water-uptake mechanism, expressed as radial or concentric openings, and modified strongly by cultivar susceptibility.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The implication is the same as for cracking, and is worth stating flatly: a split fresh unit found at grading is not evidence that anyone handled the crop badly. It is evidence that the unit is split. The field history — water supply, cultivar, maturity at harvest — is where the explanation usually lies, and an investigation that starts at the packhouse starts in the wrong building.',
        },
      ],
    },
    {
      id: 'splits-as-grade',
      heading: 'Splits as a counted class',
      body: [
        {
          type: 'paragraph',
          text: 'Legume and grain trade treats splits differently from anything in fresh produce: as a defined material class. A soybean whose cotyledons have separated is a split, it is counted as such against the applicable grade standard, and the lot is graded partly on how many there are. The definition is a commercial one, framed for consistency of trade rather than for diagnosis, and it works well for that purpose.',
        },
        {
          type: 'paragraph',
          text: 'Splits in legume seed do have handling causes — threshing, shelling, augering, and dropping all separate cotyledons directly, and dry, brittle seed splits far more readily than seed in better condition. So the count is informative about handling in a way that a fresh-produce split often is not. But it is not a diagnosis, for three reasons that compound each other. The condition of the seed at the moment of handling, which is a drying and storage question, changes how much splitting a given operation causes. Splits accumulate across every handling step, so the count at any point is a total for the whole chain rather than a measurement of the last operation. And a seed already weakened — by drying stress, by insect feeding, or by field weathering — splits under handling that sound seed survives, so equipment can be blamed for exposing damage it did not create.',
        },
        {
          type: 'callout',
          tone: 'note',
          title:
            'A grade count answers a commercial question, not a causal one',
          text: 'The proportion of splits in a lot determines how the lot is graded and traded. It does not identify which operation produced them, when, or whether the seed arrived already predisposed. Those questions require handling and drying records. No proportions or limits are given here: they are set by the applicable grade standard for the commodity and market.',
        },
      ],
    },
    {
      id: 'consequences',
      heading: 'What a split does to the lot',
      body: [
        {
          type: 'paragraph',
          text: 'An opened unit has lost its barrier layer completely rather than partially, and the consequences follow directly. Water leaves through the opening, so split produce shrivels and loses saleable weight. Wound pathogens enter through it, and a split berry in a tight grape bunch or a split cabbage in a bin is an infection focus for its neighbours rather than merely a damaged unit — the split is the beginning of a decay problem for the lot, not the end of a mechanical one. In legume and grain lots, splits generate fines and dust, absorb moisture differently from whole seed, and are more susceptible to storage moulds and to insect attack.',
        },
        {
          type: 'paragraph',
          text: 'This is why sorting matters for splits more than for most mechanical defects: removing them is not only an appearance measure but a way of taking an active decay focus out of the lot. It remains true, as everywhere on this site, that removing visibly affected units does not address whatever caused them, and that where a mould has established the removal of visible units is not a mycotoxin measure — see the storage mould and blue mould entries for why absence of visible mould does not establish absence of toxin.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Because splitting divides into a field problem for fresh produce and a seed-condition-plus-handling problem for legumes and grain, so do its remedies. Neither is addressed by gentler packing alone.',
        },
        {
          type: 'list',
          items: [
            'For cabbage, citrus, grapes, onions, tomatoes, and carrots, treat splitting as a growing-season problem: cultivar choice, consistent water supply, and harvesting before over-maturity act on it, and no post-harvest measure prevents a split made on the plant.',
            'Harvest on time. Over-maturity in the field is a recurring driver across the affected fresh commodities, and a crop left standing is a crop exposed to the next rain event.',
            'For legumes and grain, condition the seed as sourced guidance for the commodity directs before it is threshed, shelled, or augered — over-dry, brittle seed splits under handling that better-conditioned seed survives.',
            'Adjust threshing and shelling to the crop and its condition, and treat a rising split count as a signal to check both the equipment and the condition of the seed reaching it.',
            'Sort or clean splits out where the standard requires, recognising that this removes a decay and infestation focus from the lot as well as meeting the grade — and that it addresses none of the causes.',
            'Record field and drying history so that a split count can be attributed rather than assigned by default to the last operation that touched the crop.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'head-cabbage' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-carrots' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  causedByConditions: [
    'Water uptake outpacing the expansion of the skin, rind, or head structure — typically after rain or irrigation following a dry period, while the crop is still in the field',
    'Cultivar susceptibility, which varies substantially within every affected commodity',
    'Over-maturity in the field, with the crop left standing past its harvest window',
    'Irregular water supply and growth checks during bulb or head development',
    'Threshing, shelling, augering, and dropping of legume seed, which separate cotyledons directly',
    'Over-dry, brittle seed condition at the moment of handling, which splits under operations that better-conditioned seed survives',
    'Severe impact or sustained compression, which can split fresh produce outright',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  confusableWith: [
    'Cracking — the same tensile mechanism under a different name; the boundary is conventional and commodity-specific rather than mechanistic, and a defect called a split under one standard may be called a crack under another',
    'Growth cracks and field splitting disorders — cabbage head splitting, navel orange splitting, grape berry splitting, and onion bulb splitting all occur on the plant and are discovered post-harvest, so a split unit at grading is not evidence of a handling failure',
    'Impact damage — a severe blow can split firm tissue outright, and an impact split and a field split present as the same opening once the exposed tissue has browned',
    'Compression damage — sustained load can also split a unit, so the same defect appears in the two force categories and the split does not distinguish them',
    'Grain breakage and stress cracking — broken kernels, fissured kernels, and split seed are recorded under three different terms in grain trade for overlapping physical outcomes, and seed already fissured by drying splits under handling that sound seed survives',
    'Blue mould and other storage rots — a split is a complete breach of the barrier layer and an active infection focus for neighbouring units, so splits in store are commonly recorded as the decay that followed them',
    'Insect damage — feeding and exit holes in seed and fruit open tissue in ways that can be counted as splitting under some inspection schemes',
  ],
  diagnosticLimitations: [
    'The split-versus-crack distinction is largely conventional. Both are tensile failures, usage differs between commodities, standards, and countries, and the term applied to a defect carries no mechanistic information about how the fracture was produced.',
    'Because the terms are inconsistent, defect records are not comparable across standards without checking the definitions. The same physical unit can be counted as a split under one scheme and something else under another, so a change in recorded splitting can reflect a change in vocabulary rather than in the crop.',
    'A split does not record when it was made. Cabbage, citrus, grape, onion, tomato, and carrot splitting are principally pre-harvest events driven by water uptake, cultivar, and over-maturity, so a split found at grading is not evidence of a post-harvest handling failure and attribution to handling requires field history.',
    'In legumes and grain, a split count is a commercial grading fact rather than a causal finding. Splits accumulate across every handling step, so a count at any point is a chain total and not a measurement of the last operation.',
    'Seed condition confounds any attribution of splits to equipment: over-dry or brittle seed, and seed already weakened by drying stress, insect feeding, or field weathering, splits under handling that sound seed survives. A rising split count may reflect drying or storage rather than the machine that revealed it.',
    'Splits are entry routes and infection foci, so split units frequently end as decay records with the split itself no longer identifiable, which under-records splitting relative to the rot that follows it. Where a mould has established, removing visible units does not establish that the remaining lot is free of mycotoxin — that question is answered only by laboratory analysis on a properly drawn sample.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling of fruit, vegetables, and grain legumes, and mechanical loss in handling chains',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Grade standards in which splits are a defined and counted class of material in grain and oilseed lots',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Splitting disorders of citrus and vegetables, and mechanical damage to legume seed during threshing and handling',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Field splitting disorders in vegetables and handling damage in combinable crops',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Navel orange splitting and other pre-harvest physiological disorders of fruit',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment framework, and the principle that removing visibly affected units does not establish that a lot is free of mycotoxin',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with a marked climatic pattern in fresh produce: splitting tracks rainfall and irrigation near maturity and is most common where dry periods break close to harvest, while splits in legume and grain lots follow drying practice, seed condition, and handling equipment rather than climate.',
  limitations: [
    'This entry gives no split tolerances, permitted proportions, moisture conditions, or equipment settings. What counts as a split, and how many are permitted, are defined by the applicable grade standard for the commodity and market; seed conditioning targets are set by sourced post-harvest guidance.',
    'The cracking and splitting vocabulary is genuinely inconsistent between commodities, standards, and countries. Terms are used here in their common sense and are not a substitute for the definitions in the standard that applies to a lot.',
    'Symptom descriptions are indicative only and do not establish when or where a split was made; in particular they do not distinguish pre-harvest splitting from post-harvest damage, and a split count does not identify the operation that produced it.',
    'No threshing, shelling, or handling equipment operating or adjustment procedures are described here. Equipment operation is governed by manufacturer instructions and site procedures and requires qualified personnel.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Splitting: A Defect Named by the Standard',
    description:
      'Splitting overlaps with cracking by convention, not mechanism. Field splits in cabbage, citrus and grapes, and why a legume split count is not a causal finding.',
    keywords: [
      'splitting',
      'splits',
      'head splitting',
      'navel orange splitting',
      'soybean splits',
    ],
  },
  structuredData: { article: true },
};
