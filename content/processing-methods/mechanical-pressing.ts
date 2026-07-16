import type { ProcessingMethodContent } from '@/types/content';

export const mechanicalPressing: ProcessingMethodContent = {
  id: 'processing-method-mechanical-pressing',
  slug: 'mechanical-pressing',
  contentType: 'processing-method',
  title: 'Mechanical Pressing',
  alternativeNames: ['Expeller pressing', 'Screw pressing', 'Expelling'],
  category: 'Processing method',
  subcategory: 'Oilseed crushing',
  processingClass: 'pressing',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Mechanical pressing squeezes oil out of prepared oilseed by force alone, splitting one commodity into two co-products: oil and a protein-rich cake. It never recovers all the oil — the cake it leaves behind is why solvent extraction exists.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A screw press turns an oilseed into two things at once. Pressure applied to prepared seed forces liquid oil out through openings too small for the solids to follow, and what remains is a compacted cake of protein and fibre. Neither stream is the leftover of the other: the oil and the meal are both sold, both have their own markets, and a crushing plant’s economics depend on both.',
    },
    {
      type: 'paragraph',
      text: 'The characteristic of mechanical pressing, and the fact that shapes the whole oilseed industry around it, is that it is incomplete. Force can express the oil that will flow, but a residue of oil stays bound in the cake structure no matter how hard the press works. Pressing harder recovers a little more and costs disproportionately more in energy and wear. That limit is not a defect to be engineered away — it is a physical property of squeezing a solid, and it is the reason a second, entirely different recovery method exists downstream.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Pressing — mechanical expression of oil from a solid matrix',
    },
    { label: 'Stage', value: 'Primary transformation' },
    {
      label: 'Inputs',
      value: 'Sunflower seed, groundnuts, rapeseed (prepared beforehand)',
    },
    {
      label: 'Co-products',
      value: 'Oil and press cake or meal — both saleable, neither residual',
    },
    {
      label: 'Governing principle',
      value:
        'Pressure expresses free oil; oil bound in the matrix stays with the cake',
    },
    {
      label: 'Defining limit',
      value:
        'Never recovers all the oil — solvent extraction exists to recover the remainder',
    },
    {
      label: 'Depends on',
      value:
        'Preparation beforehand: oil cells must be ruptured before pressure can free the oil',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Oil in a seed is not sitting in a reservoir waiting to be poured out. It is held in cells distributed through the kernel tissue, and it has to be both freed from those cells and given a path out. Mechanical pressing supplies the second half of that: pressure that drives free oil through a restricted opening while the solids are held back. It cannot supply the first half, which is why preparation — rupturing the oil cells and shortening the distance oil must travel — happens before the press, not in it.',
        },
        {
          type: 'paragraph',
          text: 'A screw press works by continuously reducing the volume available to the material as it advances along the screw. The solids compact; the liquid, being incompressible and mobile, is squeezed out through gaps sized to retain the solids. The cake emerges compressed and depleted of the oil that would flow, and the expressed oil leaves carrying suspended fines that a later clarification step removes.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why pressing cannot finish the job',
          text: 'Pressure moves oil that can flow. Some oil remains held within the compacted solid matrix, in structures that no longer connect to a path out, and increasing force compacts the cake further rather than releasing that oil. This is a qualitative property of the process, not a tuning problem. It is precisely the gap that solvent extraction was developed to close.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Pressing splits one commodity into two co-products, and the word matters. Neither the oil nor the cake is the by-product of making the other. A crusher sells both, prices both, and would not run the plant on either alone. Describing the meal as what is left over after the oil is taken misrepresents both the material flow and the economics.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Expressed oil',
              description:
                'The liquid fraction, leaving the press as crude oil carrying suspended solids. It goes forward to clarification before any further refining.',
            },
            {
              term: 'Press cake or meal',
              description:
                'The compacted solid fraction: protein, fibre, and the oil that pressure could not free. A co-product with an established feed market, sold on protein.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'What happens next to the cake depends on the plant. Where pressing is the only recovery step — the configuration behind oils marketed as expeller-pressed or cold-pressed — the cake leaves as a finished co-product with its residual oil intact. Where a plant is configured to recover more, the cake goes forward to solvent extraction, and pressing is then a prepress stage rather than the whole crushing operation. High-oil seeds such as sunflower and rapeseed are commonly prepressed this way; the choice is a plant-configuration and market decision, not a quality ranking.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Pressing does not create oil quality; it inherits it. Oil that arrives in sound, properly stored seed presses out sound. Seed that has been damaged, heated, or allowed to develop free fatty acids yields oil carrying those faults, and no press setting reverses them. What pressing does influence is how much heat the material sees — pressure against a compacting solid generates it — and heat has consequences for both streams, affecting colour and minor components in the oil and protein quality in the cake.',
        },
        {
          type: 'paragraph',
          text: 'The dominant loss point is the one built into the method: oil retained in the cake. Whether that counts as a loss at all depends on the plant. In an expeller-only operation it is not lost — it is sold, as part of a higher-oil feed cake. In a prepress operation it is not lost either, because extraction recovers it. It becomes a genuine loss only where a plant intends to recover it and does not.',
        },
        {
          type: 'list',
          items: [
            'Oil retained in the cake — recovered downstream in prepress plants, sold in the cake in expeller-only plants',
            'Fines carried into the crude oil, to be removed at clarification',
            'Heat generated by compaction, affecting oil colour and cake protein quality',
            'Spillage and residual stock at transfers',
          ],
        },
      ],
    },
    {
      id: 'environment-and-safety',
      heading: 'Environmental context and safety',
      body: [
        {
          type: 'paragraph',
          text: 'Pressing is mechanically demanding: forcing oil out of a compacting solid takes substantial electrical energy, and press wear parts are consumables. Against that, it is a solvent-free route, and both of its streams are utilised. Comparing its overall environmental burden with that of solvent extraction is not a simple matter of counting inputs — the two recover different amounts of oil from the same seed, so any comparison has to be drawn on a comparable basis, and none is asserted here.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'High-force machinery and dust',
          text: 'Screw presses develop very high forces and contain rotating machinery, nip points, and hot surfaces. Seed handling generates dust that is a recognised explosion hazard. Guarding, dust control, ignition management, and explosion protection are matters for qualified engineering and the facility’s procedures. This entry describes what pressing does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [
    { type: 'commodity', slug: 'sunflower-seed' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'rapeseed' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  coProductOutputs: [
    { type: 'commodity-product', slug: 'sunflower-oil' },
    { type: 'commodity-product', slug: 'sunflower-meal' },
    { type: 'commodity-product', slug: 'groundnut-oil' },
    { type: 'commodity-product', slug: 'groundnut-cake' },
    { type: 'commodity-product', slug: 'rapeseed-oil' },
    { type: 'commodity-product', slug: 'rapeseed-meal' },
    { type: 'commodity-product', slug: 'soybean-press-cake' },
  ],
  processObjective:
    'Recover oil from prepared oilseed by mechanical force alone, splitting the seed into two saleable co-products — crude oil and a protein-rich press cake — without the use of a solvent.',
  operatingPrinciple:
    'A screw press progressively reduces the volume available to prepared seed as it advances, compacting the solids. Oil that is free to flow is driven out through openings sized to retain the solid fraction, while the compacted cake, still holding the oil that pressure cannot free, is discharged separately.',
  physicalOrBiochemicalBasis:
    'Purely mechanical: expression of a mobile liquid phase from a compressible solid matrix under applied pressure, with separation by a physical restriction that passes liquid and retains solids. Frictional heating occurs as a consequence of compaction rather than as an intended transformation.',
  qualityEffects: [
    'Cannot improve oil quality inherited from the seed — free fatty acids and damage arrive with the crop',
    'Compaction generates heat, which influences oil colour and minor components, and protein quality in the cake',
    'Leaves residual oil in the cake, raising the cake’s energy value in expeller-only configurations',
    'Crude oil leaves carrying suspended fines that require clarification before further refining',
  ],
  measurableParameters: [
    'Residual oil in cake',
    'Oil recovery',
    'Free fatty acid content of the crude oil',
    'Seed moisture at preparation',
    'Fines content of the expressed oil',
  ],
  lossPoints: [
    'Oil retained in the press cake',
    'Fines carried into the crude oil stream',
    'Spillage and residual stock at transfers',
    'Oil quality degradation where seed arrives damaged or poorly stored',
  ],
  environmentalContext:
    'Electrically energy-intensive, with press wear parts as consumables, and solvent-free. Both output streams are utilised: oil into food and industrial markets, cake into animal feed. Any comparison of overall burden against solvent extraction must account for the different oil recovery each achieves from the same seed, and no such comparison is made here.',
  safetyLimitations: [
    'Screw presses develop very high mechanical forces and contain rotating machinery, nip points, and hot surfaces; guarding and isolation are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'Seed handling, conveying, and preparation generate dust that is a recognised explosion hazard, requiring engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Bins, hoppers, and cake-handling enclosures can present confined-space hazards; entry is governed by facility procedure and regulation, not by any description here.',
    'This entry is an educational reference, not an operating instruction: it gives no press settings, pressures, temperatures, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Compositional standards, naming, and labelling for edible oils and for feed cake are jurisdiction-specific and are set by the applicable food and feed authorities.',
    'Terms such as cold-pressed and virgin carry defined meanings in some jurisdictions and none in others; the applicable food authority governs their use.',
  ],
  precededBy: [{ type: 'processing-method', slug: 'oilseed-dehulling' }],
  followedBy: [{ type: 'processing-method', slug: 'oil-clarification' }],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'quality-attribute', slug: 'oil-content' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'protein-content' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Oilseed crushing and vegetable oil product definitions',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Oil crops sector structure and co-product markets',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Oilseed cake and meal as feed ingredients',
    },
    { sourceId: 'cabi', citedFor: 'Oilseed crop processing and utilisation' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Whether pressing is the sole recovery step or a prepress stage ahead of extraction varies with seed type, plant scale, and the market the oil is sold into.',
  limitations: [
    'A reference description of the process, not a plant specification or operating instruction.',
    'No oil yields, recoveries, residual-oil figures, pressures, temperatures, or press settings are given — they are plant-, seed-, and contract-specific.',
    'Covers sunflower seed, groundnuts, and rapeseed; other oilseeds differ in how readily oil expresses and in whether pressing is used alone.',
    'Oil and feed naming, compositional standards, and labelling differ by jurisdiction; consult the applicable authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Mechanical Pressing: Expelling Oil from Oilseed',
    description:
      'How screw pressing splits oilseed into oil and press cake, why it never recovers all the oil, and how that limit shapes the crushing industry around it.',
    keywords: [
      'mechanical pressing',
      'expeller pressing',
      'screw press',
      'oilseed crushing',
      'press cake',
    ],
  },
  structuredData: { article: true },
};
