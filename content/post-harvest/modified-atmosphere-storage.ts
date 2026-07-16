import type { PostHarvestContent } from '@/types/content';

export const modifiedAtmosphereStorage: PostHarvestContent = {
  id: 'post-harvest-modified-atmosphere-storage',
  slug: 'modified-atmosphere-storage',
  contentType: 'post-harvest',
  title: 'Modified Atmosphere Storage',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'Produce is enclosed in a barrier that restricts gas exchange, and the atmosphere inside is then allowed to establish itself: the produce respires, consuming oxygen and releasing carbon dioxide, until the rate at which those gases pass through the barrier balances the rate at which respiration changes them. The result is a low-oxygen, elevated-carbon-dioxide atmosphere that slows respiration and ripening — but it is a result the produce and the barrier arrive at between them, not one that is dialled in. Nothing measures the gases and nothing corrects them. The atmosphere is a consequence of the system’s design and the conditions it happens to meet, which is precisely what distinguishes modified atmosphere from controlled atmosphere.',
  riskFactors: [
    'Atmosphere drifting to injurious levels with no mechanism to detect or correct it — the defining risk of an unregulated system',
    'Fermentation and off-flavours where oxygen falls too far, producing alcohols and acetaldehyde that ruin eating quality',
    'Carbon dioxide injury, which is commodity-specific and frequently invisible until the pack is opened',
    'Temperature change, which alters respiration and barrier permeability unequally and can drive an atmosphere that was safe into one that is not',
    'A barrier mismatched to the commodity’s respiration rate, so the atmosphere that establishes is the wrong one',
    'Anaerobic conditions favouring pathogens that tolerate low oxygen, while the aerobic decay the system suppresses would at least have been visible',
    'Damage to the barrier, which quietly returns the pack to air and removes the benefit without any obvious sign',
    'False confidence: modified atmosphere supplements refrigeration and does not replace it, and a warm modified-atmosphere pack fails faster than a cold one in air',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
  ],
  safetyLimitations: [
    'Any enclosure large enough to enter and holding a respiring commodity can develop an oxygen-deficient atmosphere capable of killing a person who enters it, whether or not the atmosphere was deliberately created. Sealed rooms, tents, liners, and large containers are confined spaces. Entry requires trained personnel, atmosphere testing, and the facility’s own procedures; AgricultureID gives no entry or atmosphere procedure.',
  ],
  applicableCommodityClasses: ['fruit', 'vegetable', 'cereal-grain', 'pulse'],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-broccoli' },
    { type: 'commodity', slug: 'fresh-lettuce' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'fresh-blueberries' },
  ],
  qualityEffects: [
    'Slows respiration and ripening beyond what refrigeration alone achieves, extending usable life',
    'Retains green colour in leafy and brassica crops by slowing chlorophyll loss',
    'Reduces the effect of ethylene by lowering the oxygen available for the responses it triggers',
    'Where oxygen falls too far, fermentation produces alcohols and off-flavours that no subsequent handling reverses',
    'Carbon dioxide injury may be invisible until the pack is opened, so damage is discovered by the buyer rather than the packer',
    'Benefits are contingent on the atmosphere landing in a safe window, and nothing in the system guarantees that it does',
  ],
  environmentalContext:
    'Modified atmosphere in storage is attractive wherever active gas control is unaffordable or impractical: it needs no gas plant, no monitoring instrumentation, and no control system, only a barrier and a commodity that respires. That makes it accessible at small scale and in settings where controlled-atmosphere infrastructure will never exist. The trade-off is that the same absence of instrumentation means the operator is blind, so the method is most defensible where the commodity, the barrier, and the temperature are all well characterised and reproduced consistently.',
  alternativeNames: [
    'MA storage',
    'Passive modified atmosphere',
    'Semi-passive modified atmosphere',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'Modified atmosphere storage lets a commodity’s own respiration establish a low-oxygen atmosphere inside a barrier. Unlike controlled atmosphere, nothing measures or regulates the gases — the atmosphere is allowed, not set.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Modified atmosphere storage holds produce inside a barrier that limits gas exchange, and lets the produce create its own storage atmosphere. Because harvested produce continues to respire, an enclosed commodity consumes the oxygen around it and releases carbon dioxide. If the enclosure leaks gases at some rate, the composition eventually settles where respiration and leakage balance. That settled composition — lower oxygen, higher carbon dioxide than air — slows respiration and ripening, which is the whole benefit.',
    },
    {
      type: 'paragraph',
      text: 'The word that carries the weight is modified, as against controlled. This entry exists alongside controlled-atmosphere storage and the distinction between them is not a matter of degree but of kind. A controlled atmosphere is measured and actively regulated: instruments read the gases continuously and equipment injects, scrubs, or vents to hold them at a target. A modified atmosphere is neither measured nor corrected. It is whatever the produce and the barrier arrive at together. Where a controlled atmosphere drifts, the system pulls it back; where a modified atmosphere drifts, it simply drifts, and no one finds out until the produce is unpacked.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'Produce enclosed in a gas-restricting barrier, with no active gas regulation',
    },
    {
      label: 'Who creates the atmosphere',
      value:
        'The produce itself, by respiring; the barrier sets how fast gases escape',
    },
    {
      label: 'The key distinction',
      value:
        'Modified is allowed to happen; controlled is measured and actively corrected',
    },
    {
      label: 'Passive vs semi-passive',
      value:
        'Semi-passive flushes an initial gas mix, then leaves the atmosphere unregulated',
    },
    {
      label: 'Main benefit',
      value:
        'Slows respiration and ripening beyond refrigeration alone, with no gas plant',
    },
    {
      label: 'Main risk',
      value:
        'Fermentation or carbon dioxide injury, undetected because nothing is monitoring',
    },
    {
      label: 'Not a replacement for',
      value:
        'Refrigeration — modified atmosphere supplements cold, it does not substitute for it',
    },
  ],
  sections: [
    {
      id: 'the-distinction',
      heading: 'Modified is not controlled',
      body: [
        {
          type: 'paragraph',
          text: 'These two terms are used interchangeably in casual writing and they should not be. A controlled-atmosphere store is an instrumented, regulated system: gas analysers sample the room continuously, and nitrogen generators, carbon dioxide scrubbers, and vents act on what they read to hold oxygen and carbon dioxide inside a target window for months. It is a feedback loop with a setpoint. Every part of its value depends on the loop being closed — on something noticing the atmosphere has moved and doing something about it.',
        },
        {
          type: 'paragraph',
          text: 'A modified atmosphere has no loop. The barrier is selected, the produce is enclosed, and the atmosphere goes where respiration and permeability take it. If it lands in a favourable window, the produce keeps well. If it does not, it does not, and nothing intervenes. In the semi-passive variant an initial gas mixture is flushed in at sealing to reach a useful composition sooner — but after that the system is unregulated exactly as the passive one is. Flushing at the start is not control; it is a better starting point for the same unmanaged process. The practical implication is that a modified atmosphere is designed rather than operated: all the decisions are made before sealing, and afterwards there are none left to make.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A modified atmosphere is not monitored',
          text: 'Nothing in a passive or semi-passive system measures the gases or corrects them. An atmosphere that drifts into an injurious range does so silently, and the damage is typically discovered when the produce is unpacked. This is a difference in kind from controlled-atmosphere storage, not a difference in precision.',
        },
      ],
    },
    {
      id: 'balance',
      heading: 'The balance the produce strikes with the barrier',
      body: [
        {
          type: 'paragraph',
          text: 'Two rates determine the outcome. The first is respiration: how fast the commodity consumes oxygen and produces carbon dioxide, which differs enormously between commodities — a broccoli head and an apple are not remotely comparable — and rises steeply with temperature. The second is permeability: how fast gases move through the barrier, which depends on the material, its thickness, its area, and any perforations. When enclosure begins, respiration pulls the atmosphere away from air; as oxygen falls and carbon dioxide rises, the gradients across the barrier grow and gas movement through it speeds up until the two rates match. That equilibrium is the storage atmosphere.',
        },
        {
          type: 'paragraph',
          text: 'This makes matching the barrier to the commodity the central design task, and it makes temperature the great destabiliser. Respiration and permeability both respond to temperature, but not by the same factor — respiration typically responds much more sharply. So a package engineered to equilibrate correctly at one temperature will equilibrate somewhere else at another: let a pack designed for a chilled chain sit warm on a loading dock, and respiration outruns the barrier, oxygen crashes, and the produce ferments. This is why modified atmosphere is described as a supplement to refrigeration rather than an alternative to it. It is a system whose safety depends on the temperature it was designed for actually being maintained. The gas windows each commodity tolerates, and the barriers that achieve them, are set by the applicable national storage guidance and commodity references.',
        },
      ],
    },
    {
      id: 'failure',
      heading: 'How it fails, and why you do not see it',
      body: [
        {
          type: 'paragraph',
          text: 'The benefit and the injury lie on the same axis. Lowering oxygen slows respiration, which is what extends life; lower it past what the commodity tolerates and aerobic respiration cannot continue, so the tissue ferments, producing ethanol and acetaldehyde. The result is off-flavours and off-odours that are permanent — there is no downstream handling that recovers a fermented lot. Raising carbon dioxide suppresses decay and slows ripening; raise it past tolerance and it injures the tissue, in patterns that are commodity-specific and often internal.',
        },
        {
          type: 'paragraph',
          text: 'What makes this hard is that neither failure announces itself. The produce is sealed inside a barrier; injury developing within it is not visible, and the whole point of the system is that no instrument is reading the atmosphere. In an unregulated system the first evidence is usually the buyer opening the pack. There is also a subtler hazard: suppressing the aerobic decay organisms that would have produced obvious visible spoilage can favour organisms that tolerate low oxygen, so a lot that looks acceptable is not necessarily one whose microbiology is. Assessing that is a laboratory question, not a visual one.',
        },
      ],
    },
    {
      id: 'how-it-differs',
      heading: 'How it differs from related systems',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Versus controlled-atmosphere storage',
              description:
                'The essential comparison. Controlled atmosphere measures the gases continuously and actively regulates them to a setpoint with generators, scrubbers, and vents. Modified atmosphere does neither: the atmosphere is a by-product of respiration and barrier permeability, and it is never corrected. Controlled atmosphere is a feedback loop; modified atmosphere is a design and a hope.',
            },
            {
              term: 'Versus modified-atmosphere packaging',
              description:
                'The same principle at consumer-pack scale, and treated as a packaging operation. This entry covers the storage-scale application — liners, pallet covers, tents, and sealed bulk enclosures rather than retail packs.',
            },
            {
              term: 'Versus hermetic storage',
              description:
                'Hermetic storage applies the same respiration-depletes-oxygen physics to dry grain, aiming to kill insects rather than to slow a living perishable’s ripening. It seeks a fully sealed barrier; modified atmosphere deliberately uses a permeable one, because a living commodity sealed completely would suffocate and ferment.',
            },
            {
              term: 'Versus cold storage',
              description:
                'Modified atmosphere is an addition to refrigeration, never a replacement. Its equilibrium is defined at a temperature, and it fails when that temperature is not held.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'strawberry' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'ethylene-management' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Modified and controlled atmosphere effects on fresh produce',
    },
    {
      sourceId: 'fao',
      citedFor: 'Modified atmosphere storage and packaging of perishables',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Post-harvest physiology and atmosphere effects on horticultural crops',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Post-harvest atmosphere modification in produce handling',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Tolerated gas windows are commodity- and cultivar-specific and are set by national storage guidance and commodity references; barrier design is specific to commodity, temperature, and pack.',
  limitations: [
    'This entry states no gas concentration, barrier specification, temperature, or storage duration: all are commodity-, cultivar-, and pack-specific and are set by the applicable national storage guidance and commodity references.',
    'Modified atmosphere is not monitored or regulated. An atmosphere that drifts into an injurious range does so undetected, and this entry cannot predict where a given commodity and barrier will equilibrate.',
    'Atmosphere injury and fermentation are frequently invisible until the enclosure is opened, and low-oxygen conditions can favour pathogens that tolerate them; visual assessment does not establish that a lot is sound.',
    'Any enclosure large enough to enter may hold an oxygen-deficient atmosphere. Nothing here is an entry, gas-management, or atmosphere procedure.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Modified Atmosphere Storage vs Controlled Atmosphere',
    description:
      'How modified atmosphere storage works: produce respiration creates a low-oxygen atmosphere inside a barrier, with no monitoring, and how it differs from CA.',
    keywords: [
      'modified atmosphere storage',
      'MA storage',
      'passive modified atmosphere',
      'controlled atmosphere difference',
      'produce respiration',
    ],
  },
  structuredData: { article: true },
};
