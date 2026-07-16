import type { ProcessingMethodContent } from '@/types/content';

export const riceDehulling: ProcessingMethodContent = {
  id: 'processing-method-rice-dehulling',
  slug: 'rice-dehulling',
  contentType: 'processing-method',
  title: 'Rice Dehulling',
  alternativeNames: ['Rice hulling', 'Rice husking', 'Shelling'],
  category: 'Processing method',
  subcategory: 'Rice milling',
  processingClass: 'dehulling',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Dehulling strips the inedible husk from paddy to yield brown rice. It is the first irreversible step in rice milling: paddy can be stored, but once the husk is off, the grain’s protective layer is gone for good.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A grain of paddy is a rice kernel inside a hard, silica-rich husk that does not soften, does not digest, and has no food value. Dehulling removes it. Rubber rolls turning at different speeds — or, in older designs, an abrasive action against a fixed surface — grip the two halves of the husk and shear them apart, and the kernel inside slips out. The husk is not cut or ground; it is peeled.',
    },
    {
      type: 'paragraph',
      text: 'The step is a threshold rather than a refinement. Paddy in its husk is a durable, storable commodity, protected against insects and moisture by the very layer being removed. Brown rice is not: it carries the bran and germ, its oil is exposed, and it begins to deteriorate in a way paddy does not. This is why rice is traditionally stored as paddy and dehulled close to the point of sale, and why dehulling marks the boundary between a commodity that keeps and one that is on a clock.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Dehulling — mechanical removal of the husk' },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Input', value: 'Rice paddy' },
    {
      label: 'Yields',
      value:
        'Brown rice — a distinct traded commodity, not a product entity here',
    },
    {
      label: 'By-product',
      value: 'Rice husk, with established fuel, silica, and material uses',
    },
    {
      label: 'Governing principle',
      value:
        'Shear between surfaces moving at different speeds peels the husk without breaking the kernel',
    },
    {
      label: 'Why it matters',
      value:
        'Removing the husk removes the grain’s natural protection — the step cannot be undone',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Dehulling exists to remove a layer nobody can eat while leaving intact the kernel underneath. Those two requirements pull against each other, and the whole design of the step is the compromise between them: force sufficient to open every husk will also crack kernels, and force gentle enough to spare every kernel will leave husks on. Breakage that starts here is permanent — a kernel cracked at dehulling stays cracked through every step that follows, and eventually leaves the mill as brokens rather than whole grain.',
        },
        {
          type: 'paragraph',
          text: 'The principle is differential shear. Two rubber rolls turn in opposite directions at different speeds, with a gap slightly narrower than a paddy grain. Each grain is caught, and because the two surfaces touching it are moving at different rates, it is not crushed but twisted — the husk splits along its natural seam and is stripped off. The kernel, which is not gripped in the same way, passes through. Rubber deforms around the grain rather than concentrating force on a point, which is why the roll is a gentler instrument than the abrasive designs it replaced.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why paddy is stored and brown rice is not',
          text: 'The husk is a barrier against moisture uptake, insects, and oxidation, and it costs nothing to keep. Once it is removed, the bran layer and its oil are exposed and the grain deteriorates on a timescale paddy never does. Storing rice as paddy and dehulling on demand is therefore a storage strategy, not an inefficiency — the husk is the cheapest packaging rice will ever have.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Dehulling paddy yields brown rice and rice husk. Brown rice, however, is not modelled here as a product of the process, and the reason is worth stating plainly: brown rice is itself a traded commodity, bought and sold in its own right and stored, shipped, and specified as a commodity rather than as a mill output. This reference therefore models the paddy-to-brown-rice step as a relationship between two commodities rather than as a commodity-to-product edge. Dehulling’s declared product output is the husk; brown rice appears as the input commodity of the whitening step that follows, and the chain is walked through the commodities rather than around them.',
        },
        {
          type: 'paragraph',
          text: 'That is a modelling decision about where commodity identity ends, not a claim that brown rice is unimportant — it is the more valuable of the two streams by a wide margin. It reflects the fact that the rice chain is a sequence of distinct traded commodities, each of which can leave the chain and be sold, in a way that flour and bran leaving a wheat mill cannot.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Brown rice',
              description:
                'The dehulled kernel, still carrying bran and germ. A distinct traded commodity in its own right, and the input to whitening. Not modelled as a product of this method.',
            },
            {
              term: 'Rice husk',
              description:
                'The removed outer covering. A by-product, not a waste: it is widely used as fuel — including to fire the mill itself — and as a source of silica and ash for building materials and other uses.',
            },
            {
              term: 'Immature and unhulled grain',
              description:
                'Paddy that passes through unopened is separated and returned, and immature kernels are removed. These are handled within the mill rather than sold as streams.',
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
          text: 'What happens here governs what the mill can achieve later. Whole-kernel yield is the measure the whole rice trade turns on, and it is largely determined before whitening ever begins: kernels cracked at dehulling cannot be uncracked, and every one becomes a broken further down the line. Dehulling also cannot fix what the field and the dryer decided — a kernel already fissured by uneven drying will break here regardless of how well the rolls are set.',
        },
        {
          type: 'paragraph',
          text: 'The characteristic loss points are therefore breakage and incomplete removal, and they trade against one another directly.',
        },
        {
          type: 'list',
          items: [
            'Kernels cracked or broken at the rolls — permanent, and realised as brokens later',
            'Husks left unopened, requiring recirculation and a second exposure that risks further breakage',
            'Kernels already fissured by uneven drying, which break here whatever the mill does',
            'Whole kernels carried out with the husk at aspiration',
            'Roll wear widening the gap and degrading both removal and breakage together',
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
          text: 'Rice husk is the clearest case in the cereal chain of a residue that is not a waste. It is bulky and abundant, and it is widely burned as fuel — often to raise the steam and power for the mill producing it — while the silica-rich ash left behind has recognised uses in cement and other materials. Where husk is neither used nor properly managed it becomes a genuine disposal and air-quality problem, and both outcomes are common; which one occurs is a matter of local infrastructure rather than of the process.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Dust, silica, and rotating machinery',
          text: 'Rice milling generates suspended dust, which is a recognised explosion hazard, and husk dust carries crystalline silica, a recognised respiratory hazard. Dehullers contain rotating machinery and nip points, and husk-fired energy systems introduce combustion and ash-handling hazards of their own. All are matters for qualified engineering, applicable regulation, and the facility’s procedures. This entry is a reference description and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'rice-paddy' }],
  byProductOutputs: [{ type: 'commodity-product', slug: 'rice-husk' }],
  processObjective:
    'Remove the inedible husk from paddy to yield brown rice, opening every grain while cracking as few kernels as possible, and recover the husk as a usable by-product.',
  operatingPrinciple:
    'Paddy passes through a gap between two rubber rolls turning in opposite directions at different speeds. The differing surface speeds twist rather than crush each grain, splitting the husk along its seam and stripping it from the kernel, which passes through. Separated husk is drawn off by aspiration, and unopened paddy is sorted out and returned.',
  physicalOrBiochemicalBasis:
    'Purely mechanical: differential shear between surfaces moving at different speeds, followed by separation of husk from kernel on density and size. No chemical or biochemical change is intended.',
  qualityEffects: [
    'Largely determines the mill’s eventual whole-kernel yield, since breakage here is permanent',
    'Exposes the bran layer and its oil, ending the storage stability the husk provided',
    'Cannot repair kernels already fissured by uneven drying in the field or dryer',
    'Incomplete husk removal forces recirculation, which itself adds breakage',
  ],
  measurableParameters: [
    'Hulling degree',
    'Broken-kernel proportion',
    'Whole-kernel yield',
    'Moisture of the incoming paddy',
    'Unhulled grain carryover',
  ],
  lossPoints: [
    'Kernels cracked or broken at the rolls',
    'Whole kernels carried out with the husk at aspiration',
    'Additional breakage from recirculating unhulled paddy',
    'Roll wear degrading removal and breakage together',
  ],
  environmentalContext:
    'Rice husk is generated in large volume and is a by-product rather than a waste: it is widely used as fuel, including to power the mills that produce it, and its silica-rich ash has recognised uses in cement and other materials. Where husk is neither utilised nor managed, disposal and open burning are genuine local air-quality problems; the outcome depends on local infrastructure rather than on the process itself.',
  safetyLimitations: [
    'Rice milling generates suspended dust, a recognised explosion hazard requiring engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Rice husk and husk dust contain crystalline silica, a recognised respiratory hazard; exposure control is governed by applicable occupational-health regulation and the facility’s procedures.',
    'Dehullers contain rotating machinery and nip points; guarding and isolation are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'Husk-fired energy systems introduce combustion, hot-surface, and ash-handling hazards that are matters for qualified engineering and applicable regulation.',
    'This entry is an educational reference, not an operating instruction: it gives no roll gaps, speeds, differentials, or moisture targets.',
  ],
  jurisdictionalLimitations: [
    'Brown rice and paddy trading specifications, including moisture and defect bases, are set by contract and by the applicable national grading standard.',
  ],
  followedBy: [{ type: 'processing-method', slug: 'rice-whitening-polishing' }],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'destoning' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'dehulling-shelling' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'mechanical-damage' },
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Rice milling, dehulling, and whole-kernel yield context',
    },
    { sourceId: 'fao', citedFor: 'Rice processing and product definitions' },
    {
      sourceId: 'usda-ers',
      citedFor: 'Rice market and milled-product trade context',
    },
    { sourceId: 'cgiar', citedFor: 'Rice postharvest systems research' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Mill scale ranges from single-pass village hullers to large integrated plants, with correspondingly different breakage outcomes.',
  limitations: [
    'A reference description of the process, not a milling specification or operating instruction.',
    'No roll gaps, speed differentials, moisture targets, hulling degrees, or yield figures are given — they are mill-, variety-, and contract-specific.',
    'Brown rice is modelled as a distinct commodity rather than as a product output of this method, so it does not appear in the declared outputs; the chain continues through it as the input to whitening.',
    'Outcomes depend heavily on how the paddy was dried and stored beforehand, which this entry does not cover.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rice Dehulling: Removing the Husk from Paddy',
    description:
      'How rice dehulling shears the husk from paddy to yield brown rice, why breakage here is permanent, and how rice husk is recovered as a usable by-product.',
    keywords: [
      'rice dehulling',
      'rice husking',
      'rice husk',
      'brown rice',
      'rice milling',
    ],
  },
  structuredData: { article: true },
};
