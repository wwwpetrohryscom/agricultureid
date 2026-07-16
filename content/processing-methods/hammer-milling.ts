import type { ProcessingMethodContent } from '@/types/content';

export const hammerMilling: ProcessingMethodContent = {
  id: 'processing-method-hammer-milling',
  slug: 'hammer-milling',
  contentType: 'processing-method',
  title: 'Hammer Milling',
  alternativeNames: ['Impact milling', 'Hammer grinding'],
  category: 'Processing method',
  subcategory: 'Cereal size reduction',
  processingClass: 'size-reduction',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Hammer milling pulverises grain by impact and holds it in the chamber until it passes a screen. It makes no attempt to separate the kernel’s fractions — everything that went in leaves together as meal, which is exactly what feed and many food uses want.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A hammer mill reduces grain by hitting it. Swinging hammers on a rotor strike the kernels and throw them against the chamber wall and against each other, and the fragments stay in circulation until they are small enough to pass through a perforated screen. The screen, not the hammers, is what decides how fine the meal is: nothing leaves until it fits.',
    },
    {
      type: 'paragraph',
      text: 'The defining feature is what the method does not do. It does not part bran from endosperm, and it does not set the germ aside. Impact shatters every fraction of the kernel together and the screen releases them together, so a hammer mill has one outlet and one stream. That is not a limitation to be worked around — for animal feed and for many meals and flours, retaining the whole kernel is the objective, and a machine that separates fractions would be solving a problem nobody has.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Size reduction — mechanical impact' },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Inputs', value: 'Maize grain, barley grain, sorghum grain' },
    {
      label: 'Primary output',
      value: 'Cornmeal, where maize is the grain milled',
    },
    {
      label: 'What sets fineness',
      value:
        'The screen aperture, which retains material until it is small enough to pass',
    },
    {
      label: 'Governing principle',
      value: 'Impact fracture, applied to all kernel fractions at once',
    },
    {
      label: 'Contrast',
      value:
        'Roller milling separates the fractions; a hammer mill deliberately does not',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Hammer milling exists to reduce grain to a specified particle size, cheaply and without regard to which part of the kernel a particle came from. In feed manufacture, particle size governs how well an animal can digest the ration and how the meal behaves in later mixing and pelleting; in food use, it decides the texture of the meal. In both cases the requirement is a size, not a composition.',
        },
        {
          type: 'paragraph',
          text: 'The principle is impact fracture. Hammers moving at speed transfer energy to a kernel faster than it can deform, and it shatters. Fragments continue to be struck and to strike one another until they pass the screen, which means the mill is as much a classifier as a grinder — material is retained by size and released by size. Grain that resists fracture simply stays in the chamber longer.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why impact cannot separate fractions',
          text: 'Separation in a roller mill depends on treating bran gently enough to survive in sievable pieces while the endosperm crumbles. Impact does the opposite: it shatters bran, germ, and endosperm indiscriminately and mixes the fragments. Once the fractions share a particle-size range there is nothing left for a sieve to act on — so a hammer mill’s single stream is a consequence of its mechanism, not a matter of configuration.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'One stream leaves a hammer mill: meal, carrying the whole kernel. Where the grain is maize, that meal is cornmeal — the whole-grain, non-degermed kind, which is a different product from the degermed cornmeal a dry-milling plant produces even though both carry the same name. Where the grain is barley or sorghum, the meal is generally destined for feed or for local food use and is not traded as a distinct product entity in this reference.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Whole-grain meal',
              description:
                'The kernel reduced to a specified particle size with bran, germ, and endosperm all present. The single product stream of the process.',
            },
            {
              term: 'Germ retained',
              description:
                'The germ is shattered into the meal rather than recovered. Its oil stays in the product, which is why hammer-milled whole meals do not keep as long as degermed ones.',
            },
            {
              term: 'No by-product stream',
              description:
                'Nothing is set aside, so the mill generates no bran or germ fraction to place in another market. The whole kernel is the product.',
            },
          ],
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'The mill controls particle size and its distribution, and little else. Composition arrives with the grain and leaves unchanged. Screen aperture, hammer condition, and tip speed together set how fine the meal is and how wide the spread of sizes around it — and the spread matters, because a meal ground fine enough to satisfy one requirement almost always carries fines that create dust and handling problems downstream.',
        },
        {
          type: 'paragraph',
          text: 'Losses here are not fractions leaving in the wrong stream, since there is only one stream. They are dust, heat, and the keeping quality of a product that still contains its germ oil.',
        },
        {
          type: 'list',
          items: [
            'Dust generation, which is both a material loss and the mill’s headline hazard',
            'Heat pickup during grinding, which bears on the condition of germ oil in the meal',
            'Worn hammers and damaged screens widening the particle-size distribution',
            'Shortened keeping quality of whole meal relative to a degermed product',
            'Spillage at feed and discharge',
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
          text: 'Hammer milling is energy-demanding, and its energy demand rises steeply as the target particle size falls — finer meal costs disproportionately more to make than a coarse one. It produces no residual stream to place, because the whole kernel is retained. Dust extraction is simultaneously an air-quality measure, a product-recovery measure, and a safety measure.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Grain dust is explosive',
          text: 'Hammer mills generate fine suspended dust by design, and suspended grain dust is a recognised explosion hazard. Dust control, ignition management, and explosion protection are matters for qualified engineers and the applicable regulation. Tramp metal entering the chamber is a recognised ignition source, which is why magnetic protection ahead of a mill is standard engineering practice rather than an optional refinement.',
        },
      ],
    },
  ],
  inputCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'sorghum-grain' },
  ],
  primaryOutputs: [{ type: 'commodity-product', slug: 'cornmeal' }],
  processObjective:
    'Reduce grain to a specified particle size for feed and meal use, retaining the whole kernel rather than recovering its fractions separately.',
  operatingPrinciple:
    'Swinging hammers on a rotor fracture grain by impact against the chamber and against other particles. Material is retained in the chamber until it is small enough to pass a perforated screen, so the screen aperture rather than the hammers determines the fineness of the meal. All kernel fractions are shattered together and leave together.',
  physicalOrBiochemicalBasis:
    'Purely mechanical: impact fracture combined with size classification at the screen. No fraction separation and no chemical or biochemical change is intended.',
  qualityEffects: [
    'Sets particle size and the width of the particle-size distribution, which govern digestibility in feed and texture in food meals',
    'Retains bran and germ in the meal, so keeping quality is shorter than for a degermed product',
    'Generates fines that affect dust, flow, and handling downstream',
    'Cannot alter the composition or soundness of the incoming grain',
  ],
  measurableParameters: [
    'Particle size',
    'Particle-size distribution',
    'Screen aperture',
    'Meal temperature at discharge',
    'Moisture of the incoming grain',
  ],
  lossPoints: [
    'Dust losses at the mill and at transfers',
    'Heat pickup during grinding',
    'Widening size distribution as hammers wear and screens damage',
    'Spillage at feed and discharge',
  ],
  environmentalContext:
    'Energy-demanding, and disproportionately so at finer particle sizes. No residual stream is generated, since the whole kernel is retained in the meal. Dust extraction serves air quality, product recovery, and safety at once.',
  safetyLimitations: [
    'Hammer mills generate fine suspended dust by design; suspended grain dust is a recognised explosion hazard requiring engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Tramp metal reaching the grinding chamber is a recognised ignition and projectile hazard; protection ahead of the mill is an engineering requirement governed by the facility’s design and procedures.',
    'Hammer mills contain high-speed rotating machinery with substantial stored energy; guarding, isolation, and access are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'This entry is an educational reference, not an operating instruction: it gives no screen apertures, tip speeds, particle-size targets, or settings.',
  ],
  jurisdictionalLimitations: [
    'Compositional and labelling standards for maize meals, and the distinction between whole and degermed products, are set by the applicable food authority and differ by jurisdiction.',
    'Feed particle-size requirements and feed-safety obligations are matters for the applicable feed regulation.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'destoning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'barley' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'foreign-material' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cereal size reduction and meal product context',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Particle size and feed ingredient processing',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Grain milling and particle-size research',
    },
    {
      sourceId: 'iita',
      citedFor: 'Maize and sorghum meal processing in smallholder contexts',
    },
  ],
  geographicScope:
    'Global. Hammer mills are used at every scale, from village-level custom milling to industrial feed manufacture.',
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  limitations: [
    'A reference description of the process, not a milling specification or operating instruction.',
    'No screen apertures, tip speeds, particle-size targets, or energy figures are given — they are mill-, grain-, and contract-specific.',
    'Barley and sorghum meals are within scope as inputs, but are not modelled here as distinct traded product entities; only maize meal is.',
    'Cornmeal from a hammer mill is the whole-grain kind; it shares a name but not a specification with the degermed cornmeal of a dry-milling plant.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Hammer Milling: Impact Grinding of Grain',
    description:
      'How hammer milling reduces grain by impact, why the screen sets fineness, and why it deliberately keeps bran and germ in the meal rather than separating them.',
    keywords: [
      'hammer milling',
      'impact milling',
      'feed milling',
      'particle size',
      'maize meal',
    ],
  },
  structuredData: { article: true },
};
