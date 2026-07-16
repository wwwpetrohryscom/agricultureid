import type { PostHarvestDefectContent } from '@/types/content';

export const waterCore: PostHarvestDefectContent = {
  id: 'post-harvest-defect-water-core',
  slug: 'water-core',
  contentType: 'post-harvest-defect',
  title: 'Water-Core',
  defectClass: 'physiological',
  alternativeNames: ['Watercore', 'Water core', 'Glassiness'],
  category: 'Post-harvest defect',
  subcategory: 'Physiological disorder',
  summary:
    'Water-core is an apple disorder in which regions of the flesh become water-soaked, glassy, and translucent, associated with sorbitol accumulating in the spaces between cells. It arises before or at harvest rather than from handling, is invisible from outside, and may either dissipate in storage or degenerate into internal browning — which is why markets grade it very differently.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Water-core is a disorder of apples in which parts of the flesh — commonly around the core and the vascular strands, sometimes extending outward — take on a water-soaked, glassy, translucent character. The affected tissue is not decayed and is not soft in the way rotten tissue is; it looks wet and vitreous, as though the flesh had been saturated. The physical basis is that the intercellular spaces, normally filled with air, become flooded with liquid rich in sorbitol, and the loss of those air spaces is what changes how the tissue transmits light. It is the affected region that is glassy, and the rest of the fruit can be entirely ordinary.',
    },
    {
      type: 'paragraph',
      text: 'What makes water-core unusual among post-harvest defects is that it is not really a post-harvest event at all. It is established before or at harvest — driven by maturity, cultivar, and growing conditions — and is then discovered later, in store, by someone cutting fruit. No handling failure causes it and no handling improvement prevents it. Its significance after harvest is genuinely ambiguous: mild water-core may dissipate during storage and leave no trace, or it may degenerate into internal browning and destroy the fruit. Because of that ambiguity, and because water-core is associated with sweetness, markets treat it in opposite ways — as a defect to be graded out in some, and as a desirable characteristic that commands a premium in others.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value:
        'Physiological — a disorder of apple flesh, established before harvest',
    },
    {
      label: 'Commodity',
      value: 'Apples',
    },
    {
      label: 'Appearance',
      value:
        'Water-soaked, glassy, translucent regions in the flesh, commonly around the core and vascular strands',
      note: 'Associated with sorbitol-rich liquid flooding the intercellular air spaces',
    },
    {
      label: 'Origin',
      value:
        'Pre-harvest and at-harvest: maturity, cultivar, and growing conditions determine it. Handling does not cause it',
      note: 'It is discovered in store rather than created there',
    },
    {
      label: 'External visibility',
      value:
        'None. Affected fruit looks normal from outside, and detection has historically meant cutting the fruit',
      note: 'Non-destructive methods exist but are not universal',
    },
    {
      label: 'Fate in storage',
      value:
        'Ambiguous — it may dissipate and leave sound flesh, or degenerate into internal browning',
    },
    {
      label: 'Market treatment',
      value:
        'Graded very differently between markets: a defect to be removed in some, a sweetness marker attracting a premium in others',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'Flooded air spaces, not decay',
      body: [
        {
          type: 'paragraph',
          text: 'Sound apple flesh is a network of cells with air in the spaces between them, and that air is why the flesh is opaque and pale. In water-core those spaces fill with liquid carrying sorbitol, a sugar alcohol the tree moves into the fruit. With the air displaced, light passes through the tissue instead of scattering within it, and the region turns translucent and glassy. Nothing has rotted and no organism is involved: the tissue is intact, saturated, and often sweeter than the flesh around it. This is why water-core is not simply a spoilage defect and why calling it damage is a partial description at best.',
        },
        {
          type: 'paragraph',
          text: 'The condition arises from the tree and the season. Cultivar susceptibility is substantial, advanced maturity at harvest is strongly associated with it, and the growing conditions of the year modify it — meaning a lot arrives at the packhouse with its water-core status already determined. There is no handling step upstream that caused it and none that could have prevented it. This sets water-core apart from most of what is filed as a post-harvest defect, where the defect is created by something done to the produce after picking. Here the packhouse inherits a condition and can only decide what to do about it.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A pre-harvest condition found post-harvest',
          text: 'Water-core is not caused by handling, cooling, packing, or transport, and no improvement in those operations reduces it. It is set by cultivar, maturity, and growing conditions before the fruit is picked. What happens after harvest determines whether it resolves or degenerates — not whether it is there.',
        },
      ],
    },
    {
      id: 'ambiguity',
      heading: 'Dissipation or degeneration: the same fruit, two endings',
      body: [
        {
          type: 'paragraph',
          text: 'The reason water-core cannot be given a settled verdict is that the same starting condition leads to opposite outcomes. Water-core can dissipate during storage: the liquid is reabsorbed, the air spaces return, the translucency fades, and fruit cut later shows sound flesh with no sign that anything was ever wrong. Or it can degenerate: the affected regions break down into brown, disorganised tissue, and what emerges is internal browning that ruins the fruit and cannot be undone. Which of these happens depends on how severe the water-core was, on the cultivar, and on the storage conditions and duration the lot is put through.',
        },
        {
          type: 'paragraph',
          text: 'This has an awkward corollary for anyone assessing a lot. A cut apple showing water-core is not a fruit with a known future — it is a fruit at a fork. The observation supports a probabilistic judgement about storage risk, informed by severity and cultivar, and not much more. It also connects water-core directly to the internal-browning problem: some internal browning found at the end of storage is degenerated water-core, and once it has degenerated the brown tissue looks like brown tissue from any other cause. The pre-harvest origin of that particular loss is then invisible, and the browning may be attributed to a storage failure that did not occur.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title:
            'Water-core raises storage risk rather than announcing an outcome',
          text: 'Water-cored fruit is generally understood to be less suited to long storage than sound fruit, and severe water-core is treated as a storage risk. But it is a risk, not a prediction: the same condition may resolve entirely. Storage suitability for a cultivar and a severity of water-core is a matter for sourced guidance and commercial judgement, and this entry sets no rule.',
        },
      ],
    },
    {
      id: 'grading',
      heading: 'Defect in one market, premium in another',
      body: [
        {
          type: 'paragraph',
          text: 'Few post-harvest conditions are graded as inconsistently as water-core, and the inconsistency is not confusion — it reflects the genuine ambiguity of the condition. Where the priority is long storage and shipping, water-core is treated as a defect: it raises the risk of internal browning, so lots showing it are directed to short chains or graded out. Where the fruit is sold fresh and soon, mild water-core is valued. It is associated with high sugar and with the eating quality that comes from an advanced-maturity apple, and in some markets it is sought deliberately, named as a characteristic of the product, and paid for at a premium.',
        },
        {
          type: 'list',
          items: [
            'Storage- and export-oriented chains generally treat water-core as a defect, because its association with internal browning is a risk to fruit that must survive a long period in store.',
            'Fresh, short-chain markets may treat mild water-core as desirable, associating the translucent flesh with sweetness and eating quality.',
            'Severity matters to both views: mild and severe water-core are not graded the same way even within one market.',
            'The applicable grade standard for a market defines how water-core is classified, and this entry defines nothing — it is not a grading rule.',
            'The same fruit can therefore be a downgrade in one destination and a premium line in another, with no change in its condition.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The practical point is that "is water-core a defect?" has no answer independent of the destination and the intended storage life. It is one of the clearer cases in which a physical observation and a commercial verdict are separate things, and where treating the grade standard of one market as a general statement about the condition would be simply wrong.',
        },
      ],
    },
    {
      id: 'detection',
      heading: 'Invisible outside, and expensive to find',
      body: [
        {
          type: 'paragraph',
          text: 'Water-core gives no external sign. The skin of an affected apple looks like the skin of an unaffected one, and no external grading operation — however careful — separates them. Historically the only way to find it has been to cut the fruit, which means the fruit examined is destroyed and everything said about the lot is an inference from a sample. Because water-core tracks cultivar, maturity, orchard, and position on the tree, its distribution through a lot is uneven, and a sample drawn casually rather than systematically can misrepresent the lot in either direction.',
        },
        {
          type: 'paragraph',
          text: 'Non-destructive approaches to internal condition do exist and are applied commercially in some packing operations — the flooded tissue differs physically from sound flesh in ways that can be sensed without cutting. They are not universal, and it would be misleading to describe the problem as solved: most fruit in most chains is not assessed this way, and where such systems are absent the destructive sample remains the only source of information. This entry describes no equipment, settings, or procedures for any such method.',
        },
        {
          type: 'list',
          items: [
            'No external cue exists — affected apples grade as sound on appearance.',
            'Destructive cutting consumes the units examined and yields a sample estimate, not a lot condition.',
            'Distribution is uneven by cultivar, maturity, orchard, and position, so sampling design drives the answer.',
            'Non-destructive internal assessment is real but not universal, and its absence is the normal case.',
            'A clean external inspection is not evidence that a lot is free of water-core.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [{ type: 'commodity', slug: 'fresh-apples' }],
  causedByConditions: [
    'Advanced maturity at harvest, which is strongly associated with the condition',
    'Cultivar susceptibility, which is substantial and set long before the fruit is picked',
    'Growing conditions of the season, including the tree environment during fruit development',
    'Extended storage of affected fruit, which does not cause water-core but governs whether it dissipates or degenerates into internal browning',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  confusableWith: [
    'Freezing injury — the shared cue is glassy, translucent, water-soaked flesh, and it is the closest visual match; but freezing injury is ice rupturing cell structure and water-core is intact tissue with flooded air spaces, so the appearance cannot separate a pre-harvest condition from a cold-chain failure',
    'Internal browning — not a lookalike but a destination: degenerated water-core becomes internal browning, and once it has, the brown tissue is indistinguishable from browning caused by chilling, controlled-atmosphere injury, or senescence, so the pre-harvest origin of the loss disappears',
    'Chilling injury — also produces internal disorder in stored fruit found only on cutting; the shared cue is abnormal internal tissue in a normal-looking apple, which says nothing about whether the cause was in the orchard or the cold store',
    'Bruise damage beneath intact skin — impact-damaged flesh is also water-soaked and darker than sound tissue, and a bruise found on cutting can be read as a water-cored region',
    'Controlled-atmosphere injury — another internal disorder of stored apples discovered destructively, sharing the cue of damaged flesh under sound skin while arising from an entirely different mechanism',
    'Normal core translucency at advanced maturity — the boundary between a very ripe apple and a mildly water-cored one is a matter of degree, and mild expression is exactly the range where markets disagree about whether anything is wrong at all',
  ],
  diagnosticLimitations: [
    'Water-core is invisible externally. Affected apples grade as sound on appearance, so no external inspection detects it and a clean grading line is not evidence that a lot is free of it.',
    'Detection has historically been destructive: cutting consumes the fruit examined, so any statement about the lot is an inference from a sample. Water-core is distributed unevenly by cultivar, maturity, orchard, and position on the tree, so a casually drawn sample can misrepresent the lot in either direction. Non-destructive methods exist commercially but are not universal, and their absence is the normal case.',
    'Finding water-core does not predict the outcome. The same condition may dissipate during storage and leave sound flesh, or degenerate into internal browning; severity, cultivar, and storage conditions govern which, and the cut fruit shows a fork rather than a fate.',
    'Glassy, translucent, water-soaked flesh is shared with freezing injury, which is a completely different mechanism arising in the cold chain rather than the orchard. The appearance alone cannot distinguish a pre-harvest condition from an ice-damage event.',
    'Where water-core has degenerated, the resulting internal browning is indistinguishable from browning caused by chilling injury, controlled-atmosphere injury, or senescence, so a pre-harvest condition can be recorded as a storage failure that never occurred.',
    'Whether water-core counts as a defect at all is not a property of the fruit: it depends on the destination market and intended storage life, and is defined by the applicable grade standard rather than by observation. The same observation supports opposite commercial verdicts.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Water-core in apples: symptoms, sorbitol relationship, and storage behaviour',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Apple physiological disorders, water-core development, and its relationship to maturity and cultivar',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Apple storage management and storage-related physiological disorders',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Post-harvest physiological disorders of pome fruit',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Wherever susceptible apple cultivars are grown, with incidence shaped by cultivar choice, harvest maturity practice, and the growing season; how it is graded varies sharply between markets, from a defect in storage-oriented chains to a premium characteristic in some fresh markets.',
  limitations: [
    'This entry gives no storage temperatures, durations, severity scales, or grading thresholds. Storage suitability for water-cored fruit is cultivar- and severity-specific and comes from sourced post-harvest guidance; classification is set by the applicable grade standard for the market.',
    'Whether water-core is a defect or a desirable characteristic depends on the destination and intended storage life. Nothing here is a grading rule, and this entry is not a basis for accepting or rejecting a consignment.',
    'The outcome of water-core in a given lot is not predictable from observation; the entry describes the range of outcomes and the factors that influence them, not what a particular lot will do.',
    'Water-core is established before harvest; no post-harvest measure described here removes it from affected fruit, and sorting acts only by separating affected units where a means of detecting them is available.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Water-Core: The Ambiguous Apple Disorder',
    description:
      'Water-core makes apple flesh glassy and translucent. A pre-harvest condition found in store that may fade or turn brown, and markets grade in opposite ways.',
    keywords: [
      'water-core',
      'watercore apple',
      'apple disorder',
      'sorbitol accumulation',
      'glassy flesh',
    ],
  },
  structuredData: { article: true },
};
