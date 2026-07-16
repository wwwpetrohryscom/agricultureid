import type { ProcessingMethodContent } from '@/types/content';

export const semolinaProduction: ProcessingMethodContent = {
  id: 'processing-method-semolina-production',
  slug: 'semolina-production',
  contentType: 'processing-method',
  title: 'Semolina Production',
  alternativeNames: ['Durum milling', 'Semolina milling'],
  category: 'Processing method',
  subcategory: 'Cereal milling',
  processingClass: 'milling',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Semolina milling breaks durum wheat into coarse endosperm particles and then purifies them. The mill’s object is to stop reduction while the endosperm is still granular — semolina is coarse endosperm, and turning it into flour would defeat the purpose.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A durum mill and a bread-wheat mill look similar and do almost opposite things. Both open the kernel with paired rolls; but where a flour mill drives reduction on until the endosperm is flour, a durum mill works to arrest it while the endosperm is still coarse and granular. Semolina is not an intermediate on the way to flour. It is the product, and flour is what happens when the process overshoots.',
    },
    {
      type: 'paragraph',
      text: 'That inversion is why the purifier, rather than the roll, is the characteristic machine of a durum mill. Breaking durum yields a mixture of clean endosperm granules and particles that still carry bran attached to them, and these are close enough in size that a sieve cannot tell them apart. The purifier separates them by combining sieving with an upward air current, which lifts the lighter bran-bearing particles away from the denser free endosperm. What survives that sorting is semolina; the endosperm that has been reduced too far, and the fractions the purifier rejects, become durum flour.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Milling — mechanical separation with controlled, limited reduction',
    },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Input', value: 'Durum wheat grain' },
    { label: 'Primary output', value: 'Semolina — coarse, purified endosperm' },
    {
      label: 'Co-product',
      value: 'Durum flour, from endosperm reduced beyond semolina size',
    },
    {
      label: 'Characteristic machine',
      value:
        'The purifier, which sorts by size and density together where a sieve cannot',
    },
    {
      label: 'Governing principle',
      value:
        'Free endosperm is denser than bran-bearing particles of the same size',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Durum is the hardest of the wheats, and its endosperm fractures into angular, granular pieces rather than crumbling to powder. Semolina milling exists to exploit that behaviour: to liberate those granules from the bran with as little further reduction as possible, and to deliver them clean. The requirement is simultaneously a particle size and a purity, and the two pull against each other — pressing harder to free more endosperm from the bran also drives more of it below semolina size.',
        },
        {
          type: 'paragraph',
          text: 'Purification is what resolves the tension, and it is the step that gives the process its name in practice. Sieving alone classifies by size, and a bran-bearing particle can be the same size as a free endosperm granule. But it is not the same density, because bran is lighter than endosperm. Passing the stock across an inclined sieve while drawing air up through it lets the two properties act at once: the air lifts and carries the bran-bearing particles while the denser free endosperm stays on the deck and travels through. Size sorts the stock into fractions; density sorts each fraction into product and not-product.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why semolina is not simply coarse flour',
          text: 'Semolina and durum flour differ in how they were made, not only in how big they are. Semolina is endosperm that has been freed from bran and purified while still granular. A flour of the same origin is endosperm that has been reduced past that point. Grinding semolina finer produces durum flour; sieving flour cannot produce semolina, because the granules no longer exist.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'The mill yields semolina as its intended product and durum flour alongside it. Durum flour is a genuine co-product with its own market rather than a failure of the process: some reduction below semolina size is unavoidable when the endosperm is being worked free of the bran, and the flour that results is sold in its own right. Where a mill sits on the trade-off between the two streams is a commercial decision, and moving it moves both streams at once.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Semolina',
              description:
                'Purified coarse endosperm. The primary product, specified by particle size, protein, ash, and the count of visible bran specks.',
            },
            {
              term: 'Durum flour',
              description:
                'Endosperm reduced below semolina size, together with purifier fractions not meeting the semolina specification. A co-product with established food uses.',
            },
            {
              term: 'Bran and offal streams',
              description:
                'The separated outer layers and the material carrying them. Routed to feed and food-ingredient markets in the same way as the bran streams of any wheat mill.',
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
          text: 'The two faults that matter in semolina are visible and compositional. Bran specks are the visible one: fragments the purifier failed to lift, which show as dark points in a pale product and carry through into anything made from it. The compositional one is the yellow pigment that gives semolina its colour, which arrives with the grain and can be lost during milling but never added by it. As always, the mill cannot improve on the wheat it is given — durum’s protein, vitreousness, and pigment are set in the field.',
        },
        {
          type: 'paragraph',
          text: 'The characteristic loss is subtler than in a flour mill. It is not only endosperm leaving on the bran, but endosperm leaving as the wrong product: every granule reduced past semolina size has moved from the primary stream to the co-product stream. That is a downgrade rather than a disappearance, and it is why over-reduction is the fault a durum mill works hardest to avoid.',
        },
        {
          type: 'list',
          items: [
            'Bran specks carried into semolina where purification is incomplete',
            'Endosperm reduced below semolina size, moving value from the primary stream to the co-product stream',
            'Endosperm retained on bran and leaving with the offal streams',
            'Pigment loss during milling, which colour specifications are set against',
            'Dust and spillage across transfers',
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
          text: 'A durum mill is energy-demanding and moves a great deal of air, since purification depends on air current and the mill is aspirated throughout. Its residual streams are almost entirely utilised: bran and offal go to animal feed, and the flour stream is food. In material terms the mill is close to fully valorised, and the air it moves is both a process requirement and the basis of its dust control.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Grain dust is explosive',
          text: 'Suspended grain and flour dust is a recognised explosion hazard, and a mill that moves large volumes of air through purifiers and aspiration is a system that must be engineered with that in mind. Dust control, ignition management, and explosion protection are matters for qualified engineers and the applicable regulation. This entry describes what the process does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'durum-wheat-grain' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'semolina' }],
  coProductOutputs: [{ type: 'commodity-product', slug: 'durum-flour' }],
  processObjective:
    'Recover the endosperm of durum wheat as clean, coarse semolina — liberating it from the bran while limiting reduction so that it stays granular — and recover the endosperm reduced beyond that size as durum flour.',
  operatingPrinciple:
    'Paired rolls open durum kernels and release angular endosperm granules, and reduction is deliberately restrained rather than driven to completion. Purifiers then sort the stock by size and density together: an upward air current across an inclined sieve lifts lighter bran-bearing particles away while denser free endosperm passes on as semolina. Endosperm reduced below semolina size leaves as durum flour.',
  physicalOrBiochemicalBasis:
    'Purely mechanical: differential fracture between bran and a hard, vitreous endosperm, followed by classification on size and density simultaneously. No chemical or biochemical change is intended.',
  qualityEffects: [
    'Determines how completely bran is removed from semolina, and therefore visible speck count and ash',
    'Sets the balance between semolina and durum flour, since reduction beyond semolina size moves material between the streams',
    'Bears on retention of the yellow pigment that semolina colour specifications are written against',
    'Cannot improve the protein content, vitreousness, or pigment of the incoming durum',
  ],
  measurableParameters: [
    'Semolina particle size',
    'Semolina ash content',
    'Speck count',
    'Yellow pigment content',
    'Protein content',
    'Extraction rate',
  ],
  lossPoints: [
    'Endosperm over-reduced below semolina size and downgraded to the flour stream',
    'Endosperm left adhering to bran and leaving with the offal streams',
    'Bran specks carried into semolina by incomplete purification',
    'Dust losses at aspiration and transfers',
  ],
  environmentalContext:
    'Energy-demanding and air-intensive, since purification depends on air current and the mill is aspirated throughout. Residual streams are almost entirely utilised — bran and offal to animal feed, flour to food — so the mill is close to fully valorised in material terms.',
  safetyLimitations: [
    'Suspended grain and flour dust is a recognised explosion hazard; mills require engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Purifiers and aspiration systems move large volumes of dust-laden air, and their design, containment, and protection are engineering matters governed by applicable regulation.',
    'Roller mills contain rotating machinery and nip points; guarding and isolation are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'This entry is an educational reference, not an operating instruction: it gives no roll settings, air velocities, moisture targets, or particle-size specifications.',
  ],
  jurisdictionalLimitations: [
    'What may be sold as semolina, and the compositional standards separating it from durum flour, are set by the applicable food authority and differ by jurisdiction.',
    'Pasta compositional standards, where they exist, constrain which durum streams may be used and are a matter for the applicable food law.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'quality-attribute', slug: 'protein-content' },
    { type: 'quality-attribute', slug: 'kernel-hardness' },
    { type: 'quality-attribute', slug: 'colour' },
    { type: 'quality-attribute', slug: 'moisture-content' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Durum milling and semolina product definitions',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Durum wheat quality and semolina milling research',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Durum wheat quality traits and end-use context',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Durum wheat and pasta product market context in the EU',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, concentrated where durum is grown and where pasta and couscous are staple products. Specifications vary with end use and jurisdiction.',
  limitations: [
    'A reference description of the process, not a milling specification or operating instruction.',
    'No extraction rates, roll settings, air velocities, particle sizes, or ash figures are given — they are mill-, class-, and contract-specific.',
    'Semolina and durum flour naming and compositional standards differ by jurisdiction; consult the applicable food authority.',
    'Durum mill configurations vary widely; this describes the general break-and-purify principle rather than any particular plant.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Semolina Production: Milling and Purifying Durum',
    description:
      'How durum milling frees coarse endosperm and purifies it by size and density, why semolina is not coarse flour, and how durum flour arises as a co-product.',
    keywords: [
      'semolina production',
      'durum milling',
      'purifier',
      'durum flour',
      'pasta wheat',
    ],
  },
  structuredData: { article: true },
};
