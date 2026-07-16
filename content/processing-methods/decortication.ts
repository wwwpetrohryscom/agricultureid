import type { ProcessingMethodContent } from '@/types/content';

export const decortication: ProcessingMethodContent = {
  id: 'processing-method-decortication',
  slug: 'decortication',
  contentType: 'processing-method',
  title: 'Decortication',
  alternativeNames: [
    'Fibre decortication',
    'Breaking and scutching',
    'Bast fibre separation',
  ],
  category: 'Processing method',
  subcategory: 'Fibre processing',
  processingClass: 'fibre-processing',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Decortication breaks the brittle woody core of a bast stem and beats it away from the flexible fibre bundles wrapped around it. It exploits a difference in mechanical behaviour — the core shatters, the fibre does not — and it produces two streams: fibre, and the woody shive.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Flax, hemp, and jute all carry their useful fibre in the same place: long bundles running lengthwise through the outer cortex of the stem, wrapped around a hollow, woody inner core. The fibre is flexible and strong in tension. The core is brittle. Decortication is the mechanical step that turns that contrast into a separation — it fractures the core into short fragments and scrapes or beats them off the fibre, which survives the treatment intact.',
    },
    {
      type: 'paragraph',
      text: 'This is the same logic that governs cereal roller milling, applied to a different material: the machine does not cut the two components apart, it applies a treatment that one component tolerates and the other does not. That framing explains most of what can go wrong. Treat the stem too gently and the core stays attached; treat it too aggressively and the fibre starts breaking up and leaving with the woody stream it was supposed to be separated from.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Fibre processing — mechanical separation' },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Inputs', value: 'Flax, hemp, and jute bast fibre stems' },
    {
      label: 'By-product',
      value: 'Shive — the woody core, a utilised stream, not waste',
    },
    {
      label: 'Governing principle',
      value:
        'The woody core is brittle and the fibre is not — breaking separates them',
    },
    {
      label: 'Depends on',
      value:
        'Retting beforehand, which loosens the pectin bond between fibre and core',
    },
    {
      label: 'Central trade-off',
      value:
        'Aggressive enough to free the shive, gentle enough not to break the fibre',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'A bast stem is a composite. The fibre bundles sit in the cortex, glued to each other and to the woody core by pectins. The objective of decortication is to recover those bundles as long, clean, undamaged fibre, because length, fineness, and strength are what the fibre is bought for, and because any woody fragment left clinging to it is a defect that persists into yarn, textile, or composite.',
        },
        {
          type: 'paragraph',
          text: 'The principle is fracture followed by scraping. Fluted rollers bend and crush the stem repeatedly, snapping the brittle core into short pieces without severing the flexible fibre running alongside it. Beating or scutching then knocks those pieces loose, and the fibre — which is long, aligned, and tough in tension — is drawn away from the debris. Some equipment combines both actions; the sequence rather than the machine is what defines the method.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Retting decides how well decortication can work',
          text: 'Retting is the microbial or chemical breakdown of the pectins binding fibre to core, and it runs before decortication. It does not itself separate anything — it loosens the bond so that a mechanical step can. Under-retted stems resist decortication and carry shive through on the fibre; over-retted stems have had the pectins holding the fibre bundles together degraded too far, so the fibre weakens and breaks up under the same treatment. Decortication inherits that decision and cannot undo it.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Two streams leave a decortication line, and the woody one is not a disposal problem. Shive is a substantial, saleable material with established markets — calling it waste misstates both the material flow and the economics of a fibre plant.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Fibre',
              description:
                'The recovered bast bundles. Long, aligned fibre and shorter tangled tow are commonly separated and sold into different markets, since length and fineness drive value.',
            },
            {
              term: 'Shive',
              description:
                'The fragmented woody core. Used as animal bedding, as a raw material for particleboard and composite panels, in bio-based construction binders, as a fuel, and as mulch.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A note on how the woody stream is named',
          text: 'The woody core fraction is called shive in flax, hurd or shiv in hemp, and stick in jute. This entry models the flax shive stream as the by-product entity; the hemp and jute equivalents are the same material class from a different stem and are traded under their own names, but they are not separately modelled here.',
        },
        {
          type: 'paragraph',
          text: 'The three crops are not handled identically. Flax is traditionally retted then broken and scutched to preserve long line fibre. Hemp is decorticated both after retting and, for technical and composite end uses, green from unretted stems, which yields a coarser fibre where length matters less. Jute is customarily retted and stripped, historically by hand, with mechanical decortication in use where labour and scale make it viable.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Decortication cannot make fibre better than the crop and the retting delivered. Fineness and intrinsic strength arrive with the stem; retting sets how separable it is. What decortication decides is how much of that potential survives — how long the recovered fibre is, how much woody residue clings to it, and how much of it ends up downgraded to tow or lost into the shive stream.',
        },
        {
          type: 'paragraph',
          text: 'The failure modes are symmetrical, which is what makes the step hard to run. Insufficient treatment leaves shive bound to the fibre, and shive content is a graded defect. Excessive treatment fractures the fibre bundles, shortening them and pushing long line fibre down into the tow fraction — a quality loss that reads as a yield loss on the invoice.',
        },
        {
          type: 'list',
          items: [
            'Fibre broken during beating and carried out with the shive stream',
            'Long line fibre degraded into shorter, lower-value tow',
            'Shive retained on the fibre, appearing as a defect in the graded lot',
            'Dust and short fines removed at aspiration',
            'Losses inherited from under- or over-retting, which decortication cannot correct',
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
          text: 'Decortication itself is a dry mechanical process whose main demand is electrical energy; the water and effluent questions in a bast fibre chain belong overwhelmingly to retting, which precedes it. In material terms the line is close to fully valorised, because the woody fraction — which is the larger of the two streams by mass in these crops — has real bedding, panel, construction, fuel, and mulch markets rather than being discarded.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Fibre dust, fire, and rotating machinery',
          text: 'Dry fibre and accumulated shive are readily ignitable, and airborne organic fibre dust is both a respiratory hazard and a recognised combustible-dust hazard. Breaking rollers and scutching drums are high-energy rotating machinery with nip points, and fibre that wraps around a rotating shaft is an entanglement hazard. Plants operate under engineered dust extraction, housekeeping, ignition control, and guarding designed and commissioned by qualified engineers. This entry describes what the process does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [
    { type: 'commodity', slug: 'flax-fibre' },
    { type: 'commodity', slug: 'hemp-fibre' },
    { type: 'commodity', slug: 'jute-fibre' },
  ],
  byProductOutputs: [{ type: 'commodity-product', slug: 'shive' }],
  processObjective:
    'Recover bast fibre bundles from flax, hemp, and jute stems as long, clean, undamaged fibre by removing the woody core they are bound to, while keeping that core intact enough to be sold as shive rather than discarded.',
  operatingPrinciple:
    'Fluted rollers bend and crush the stem so the brittle woody core snaps into short fragments while the flexible fibre running alongside it survives; beating or scutching then knocks the fragments free, and the long, aligned fibre is drawn away from the woody debris. The separation rests on a difference in mechanical behaviour between the two components, not on cutting them apart.',
  physicalOrBiochemicalBasis:
    'Mechanical: differential fracture behaviour between a brittle woody core and flexible, tension-strong bast fibre, followed by mechanical scraping and aerodynamic removal of the fragmented core. The biochemical work — pectin degradation — is done earlier, by retting; decortication depends on its result but adds none of it.',
  qualityEffects: [
    'Determines the length distribution of the recovered fibre, and therefore the split between high-value line fibre and lower-value tow',
    'Determines the shive content retained on the fibre, which is a graded defect',
    'Over-aggressive treatment fractures fibre bundles and reduces both length and strength',
    'Cannot improve the intrinsic fineness or strength of the fibre, which arrive with the crop, nor correct under- or over-retting',
  ],
  measurableParameters: [
    'Shive content in the fibre',
    'Fibre content in the shive stream',
    'Fibre length distribution',
    'Line fibre to tow ratio',
    'Fibre fineness',
    'Fibre strength',
    'Moisture content',
  ],
  lossPoints: [
    'Fibre broken and carried out with the shive stream',
    'Long line fibre downgraded to tow',
    'Dust and short fines at aspiration',
    'Fibre damage from over-aggressive beating',
    'Separation failures inherited from under-retted straw',
  ],
  environmentalContext:
    'A dry mechanical step whose principal demand is electrical energy; the water use and effluent load of a bast fibre chain sit with retting rather than here. Materially the line is close to fully valorised, since the woody shive fraction has established bedding, panel-board, construction, fuel, and mulch markets. Dust extraction serves air quality and fire safety together.',
  safetyLimitations: [
    'Airborne organic fibre and shive dust is a respiratory hazard and a recognised combustible-dust hazard; plants require engineered dust extraction, housekeeping, and ignition control designed and commissioned by qualified engineers.',
    'Dry fibre and accumulated shive are readily ignitable, and accumulation around drives and hot surfaces is a fire risk governed by the facility’s own procedures.',
    'Breaking rollers and scutching drums are high-energy rotating machinery with nip points, and loose fibre presents an entanglement hazard around rotating shafts; guarding and isolation are governed by applicable occupational-safety regulation.',
    'This entry is an educational reference, not an operating instruction: it gives no roller settings, drum speeds, throughputs, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Cultivation and processing of hemp are licensed and regulated differently by jurisdiction, and in some jurisdictions are restricted regardless of end use.',
    'Fibre grading standards, defect definitions, and the terms of trade for line fibre and tow are set by national standards bodies and trade associations, and differ by market.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'ambient-warehouse-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'flax' },
    { type: 'crop', slug: 'hemp' },
    { type: 'crop', slug: 'jute' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'foreign-material' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Natural fibre crops and bast fibre processing context',
    },
    {
      sourceId: 'icar',
      citedFor: 'Jute and allied fibres research and fibre extraction',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Flax, hemp, and jute crop and fibre compendium',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Bast fibre structure and general decortication description',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Flax fibre processing is concentrated in western Europe, jute in South Asia, and hemp across Europe, North America, and East Asia; equipment and the retting method preceding decortication vary widely by region and end use.',
  limitations: [
    'A reference description of the process, not a plant specification or operating instruction.',
    'No roller settings, drum speeds, throughputs, fibre yields, or shive fractions are given — they are crop-, plant-, and contract-specific.',
    'The woody core stream is modelled here as flax shive; the equivalent hemp hurd and jute stick streams are the same material class but are not separately modelled.',
    'Flax, hemp, and jute are handled differently in practice, including green decortication of unretted hemp; this entry describes the shared mechanical principle rather than any single crop’s line.',
    'Hemp processing is subject to jurisdiction-specific licensing that this entry does not summarise.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Decortication: Separating Bast Fibre from Shive',
    description:
      'How decortication separates bast fibre from the woody core of flax, hemp, and jute: the mechanical principle, shive as a by-product, and loss points.',
    keywords: [
      'decortication',
      'bast fibre',
      'shive',
      'scutching',
      'hemp hurd',
      'fibre processing',
    ],
  },
  structuredData: { article: true },
};
