import type { PostHarvestContent } from '@/types/content';

export const harvestMaturityAssessment: PostHarvestContent = {
  id: 'post-harvest-harvest-maturity-assessment',
  slug: 'harvest-maturity-assessment',
  contentType: 'post-harvest',
  title: 'Harvest Maturity Assessment',
  postHarvestClass: 'quality',
  processStage: 'harvest',
  alternativeNames: [
    'Maturity indices',
    'Harvest timing',
    'Maturity determination',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Quality assessment',
  summary:
    'Harvest maturity assessment is the judgement of whether a crop is ready to pick. It is the one post-harvest decision taken before harvest, and it sets a ceiling on the quality that every later operation can only preserve or lose.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Harvest maturity assessment is the act of deciding that a lot is ready to be taken from the field, orchard, or plantation. It sits oddly in a list of post-harvest operations because it happens before harvest — but it belongs there, because it governs how the lot will behave in every operation that follows. Cooling, drying, packing, storage, and transport can all protect quality; none of them can add quality that the crop did not have when it was cut.',
    },
    {
      type: 'paragraph',
      text: 'The judgement is genuinely difficult because maturity is not a single property. Growers are simultaneously estimating physiological readiness, the eating quality the buyer expects, the handling robustness the journey demands, and the storage life the chain requires — and these four rarely peak on the same day. Picked early, a lot handles and travels well but may never develop acceptable flavour or colour; picked late, it eats well but bruises, softens, shatters, or spoils before it arrives. Maturity assessment is the trade-off between them, made once, irreversibly.',
    },
  ],
  keyFacts: [
    {
      label: 'What it decides',
      value: 'Whether a lot is ready to harvest, and therefore when to harvest',
    },
    {
      label: 'Why it dominates',
      value:
        'It sets the maximum quality of the lot; later operations can only preserve or lose it',
    },
    {
      label: 'Irreversible',
      value:
        'Once cut, a lot cannot be returned to the plant to mature further',
      note: 'Some fruit continues to ripen after harvest, but ripening is not the same as gaining maturity',
    },
    {
      label: 'How it is judged',
      value:
        'Visual and tactile signs, elapsed time or accumulated heat, and destructive laboratory or instrument checks',
    },
    {
      label: 'No universal index',
      value:
        'Maturity criteria are commodity-, cultivar-, region-, and market-specific',
    },
    {
      label: 'Where criteria are set',
      value:
        'Applicable grade standards, buyer specifications, and national or regional extension guidance',
    },
    {
      label: 'Common failure',
      value:
        'Harvesting to a calendar or a market price rather than to the condition of the crop',
    },
  ],
  sections: [
    {
      id: 'the-decision-before-the-chain',
      heading: 'The decision that precedes the chain',
      body: [
        {
          type: 'paragraph',
          text: 'Post-harvest management is usually described as a defence: field heat is removed, moisture is reduced, damage is avoided, temperature is held. Every one of those steps is subtractive — it slows a decline that has already begun. Harvest maturity is the exception. It is the moment the ceiling is set, and it is set by the grower, in the field, often under time and weather pressure, frequently without instruments.',
        },
        {
          type: 'paragraph',
          text: 'This is why a lot harvested at the wrong maturity cannot be rescued downstream. An immature melon that never accumulated sugars will not sweeten in a cold store. Grain cut too green will not gain the kernel fill it did not receive on the plant. Coffee picked with a high proportion of unripe cherries carries that defect through pulping, drying, and roasting. Investment in cooling and packaging returns very little on a lot that was picked at the wrong time.',
        },
      ],
    },
    {
      id: 'maturity-is-not-ripeness',
      heading: 'Maturity is not ripeness',
      body: [
        {
          type: 'paragraph',
          text: 'The two words are used interchangeably in ordinary speech and must not be in post-harvest work. Physiological maturity is the point at which a crop has completed the development that lets it continue normally after separation from the plant. Ripeness is the later, edible condition — soft, sweet, aromatic, coloured. Horticulturists also speak of horticultural or commercial maturity: the stage at which a crop is ready for its intended use, which for a leafy vegetable is long before physiological maturity and for a seed crop is at or after it.',
        },
        {
          type: 'paragraph',
          text: 'The distinction has a direct operational consequence. Climacteric fruit — including banana, mango, avocado, and tomato — can be harvested mature but unripe and ripened later under management, which is exactly why they travel long distances. Non-climacteric fruit such as citrus, grape, and strawberry ripen little or not at all once detached: they must be harvested at eating quality, which sharply narrows the picking window and raises the cost of getting the judgement wrong.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'Harvesting mature-but-unripe is not the same as harvesting immature',
          text: 'A mature-but-unripe climacteric fruit will ripen to good quality; an immature one will soften and colour without ever developing acceptable flavour, and may look ripe while eating poorly. The two are easily confused by appearance alone.',
        },
      ],
    },
    {
      id: 'how-maturity-is-judged',
      heading: 'How maturity is judged',
      body: [
        {
          type: 'paragraph',
          text: 'Maturity indices fall into families, and most operations combine several because no single one is reliable across a season.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Visual and tactile signs',
              description:
                'Ground colour, surface bloom, drying of husks or tendrils, ease of separation from the stem, seed colour, and grain hardness. Cheap and immediate, and used everywhere — but strongly affected by cultivar, light exposure, nutrition, and the assessor.',
            },
            {
              term: 'Elapsed time and accumulated heat',
              description:
                'Days from flowering, planting, or fruit set, and heat-unit accumulation from weather records. Useful for planning labour and logistics, but a season that runs cool or hot will break a calendar built on an average year.',
            },
            {
              term: 'Instrument and laboratory checks',
              description:
                'Firmness by penetrometer, soluble solids by refractometer, starch conversion by iodine staining, dry-matter content, acidity, and grain moisture by meter. More objective, mostly destructive, and requiring a representative sample of the block rather than a convenient handful.',
            },
            {
              term: 'Standard and contract criteria',
              description:
                'Grade standards and buyer specifications may define a minimum maturity for a commodity, and where they do, the commercial decision is made against that definition rather than against a grower judgement.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Sampling is where assessment most often fails quietly. A block is not uniform: exposed and shaded fruit, headlands and centres, and early and late flowers mature at different rates. An index measured on an unrepresentative sample gives a precise number for a lot that does not exist, and precision of that kind is more dangerous than an honest visual estimate, because it is trusted more.',
        },
      ],
    },
    {
      id: 'why-there-is-no-universal-number',
      heading: 'Why there is no universal number',
      body: [
        {
          type: 'paragraph',
          text: 'It is tempting to look for a threshold — a firmness, a sugar level, a moisture — that means "ready". None exists across commodities, and for most commodities none exists across cultivars, regions, or intended markets. The same apple cultivar is picked at different stages for immediate sale and for long controlled-atmosphere storage, because the storage lot must arrive at the end of its season still sound. A grain crop destined for seed, for milling, or for feed carries different priorities at cutting. A fruit shipped by sea is picked less advanced than one sold at a local market that afternoon.',
        },
        {
          type: 'paragraph',
          text: 'For this reason AgricultureID does not publish maturity thresholds. The applicable grade standard, the buyer specification, and national or regional extension guidance for the specific commodity and cultivar are where those values are set, and they are revised as cultivars and markets change.',
        },
      ],
    },
  ],
  applicableCommodityClasses: [
    'fruit',
    'vegetable',
    'cereal-grain',
    'oilseed',
    'nut',
    'beverage-crop',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'coffee-cherries' },
    { type: 'commodity', slug: 'wheat-grain' },
  ],
  measurableInputs: [
    'Days from flowering, fruit set, or planting (crop records)',
    'Accumulated heat units (weather records)',
    'Ground or flesh colour against a reference chart',
    'Flesh firmness (penetrometer)',
    'Soluble solids (refractometer)',
    'Starch pattern (iodine staining)',
    'Dry-matter content',
    'Grain moisture (meter)',
  ],
  measurableOutputs: [
    'Harvest date decision for the block or lot',
    'Recorded maturity stage of the lot at intake',
    'Proportion of the lot judged immature or over-mature at grading',
  ],
  qualityEffects: [
    'Sets the flavour, colour, and texture the lot can ever reach',
    'Determines whether a climacteric fruit will ripen normally or merely soften',
    'Governs handling robustness: over-mature lots bruise, split, shatter, or shed',
    'Governs achievable storage life, and therefore which markets the lot can serve',
    'Drives the proportion of the lot lost at sorting and grading',
  ],
  environmentalContext:
    'Maturity advances with season, temperature, light, water availability, and nutrition, so the same cultivar reaches the same index on different dates in different years and sites. Weather also constrains the decision: an approaching storm, a frost risk, or a closing labour window may force harvest before the assessed optimum.',
  safetyLimitations: [
    'Maturity assessment is a quality judgement and carries no information about chemical residues; pre-harvest intervals are set by product labels and national regulation, and a lot may be mature while still inside one.',
    'A mature lot is not a safe lot: maturity says nothing about microbial contamination, mycotoxins, or physical hazards, which require their own controls and testing.',
    'Destructive maturity sampling reduces the saleable lot and is not a substitute for the food-safety checks required at intake.',
  ],
  relevantStandards: [
    { type: 'commodity-grade', slug: 'unece-fresh-produce-standards' },
    { type: 'commodity-grade', slug: 'codex-standards-overview' },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'coffee' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Maturity indices and post-harvest behaviour of horticultural crops',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Harvest maturity in post-harvest handling of fruit and vegetables',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Crop maturity and harvest timing context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Harvest timing and maturity assessment guidance',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Maturity indices and their acceptable values are commodity-, cultivar-, region-, and market-specific and are set by grade standards, buyer specifications, and local extension guidance.',
  limitations: [
    'No maturity threshold is published here. Acceptable values differ by commodity, cultivar, region, season, and intended market, and are set by the applicable grade standard, buyer specification, or national guidance.',
    'Maturity indices are correlates, not the property itself: firmness, colour, and sugars each track maturity imperfectly, and a lot can satisfy one index while failing another.',
    'Assessment is only as good as the sample. Non-uniform blocks give unrepresentative readings, and an instrument reading on a poor sample is more misleading than an honest visual estimate.',
    'This entry describes how the decision is framed, not how to make it for a given crop; that requires commodity- and cultivar-specific guidance and local experience.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Harvest Maturity Assessment: Deciding When to Pick',
    description:
      'The post-harvest decision made before harvest: maturity versus ripeness, how maturity indices are judged, and why no universal threshold exists for any crop.',
    keywords: [
      'harvest maturity',
      'maturity indices',
      'harvest timing',
      'maturity versus ripeness',
      'commercial maturity',
    ],
  },
  structuredData: { article: true },
};
