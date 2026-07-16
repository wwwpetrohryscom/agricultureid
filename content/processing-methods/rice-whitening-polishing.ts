import type { ProcessingMethodContent } from '@/types/content';

export const riceWhiteningPolishing: ProcessingMethodContent = {
  id: 'processing-method-rice-whitening-polishing',
  slug: 'rice-whitening-polishing',
  contentType: 'processing-method',
  title: 'Rice Whitening and Polishing',
  alternativeNames: ['Rice milling', 'Rice pearling', 'Whitening'],
  category: 'Processing method',
  subcategory: 'Rice milling',
  processingClass: 'separation',
  processStage: 'refining',
  transformationBasis: 'mechanical',
  summary:
    'Whitening abrades the bran and germ off brown rice to produce milled rice; polishing burnishes what remains. It is the step that trades nutrition and shelf life against appearance, and the trade is deliberate.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Brown rice is a kernel wrapped in bran, with the germ still attached. Whitening removes both by abrasion — the grains are made to rub against an abrasive surface and against each other under mild pressure, and the bran layers are worn away rather than cut or peeled. Polishing follows and does something different: it uses a gentler friction, often with a leather or soft surface, to burnish the whitened grain and lift off the flour-like bran dust still clinging to it. Whitening removes the bran; polishing removes the traces of its removal.',
    },
    {
      type: 'paragraph',
      text: 'It is worth being clear about what this step costs, because it is the most consequential trade in the rice chain. The bran and germ that whitening takes off carry most of the kernel’s oil, much of its fibre, and a substantial share of its vitamins and minerals; what remains is largely starch. The process removes nutrition and it is done anyway, for reasons that are real: milled rice keeps far longer than brown rice because the oil that goes rancid has been removed with the bran, it cooks faster, and consumers across most of the world buy white rice and not brown. The removed bran is not thrown away — it is recovered and sold — but it leaves the food stream.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Separation — mechanical abrasion of surface layers',
    },
    { label: 'Stage', value: 'Refining' },
    { label: 'Input', value: 'Brown rice' },
    {
      label: 'Yields',
      value:
        'Milled rice — a distinct traded commodity, not a product entity here',
    },
    {
      label: 'Co-product',
      value:
        'Rice bran, carrying the kernel’s oil and much of its micronutrients',
    },
    {
      label: 'Governing principle',
      value:
        'Abrasion wears the bran away layer by layer; the degree of milling is a choice, not a fixed point',
    },
    {
      label: 'The trade',
      value:
        'Keeping quality, cooking behaviour, and appearance are bought with nutrition and yield',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Whitening exists to remove the bran layers and germ from brown rice, to a degree that the miller chooses. That last clause carries the weight: unlike dehulling, which either removes the husk or does not, whitening is a continuum. The bran is not one layer but several, and a mill can stop anywhere along the way. Where it stops — the degree of milling — sets the product’s colour, its keeping quality, its nutritional content, and how much of the kernel is left to sell, all at once and in the same direction.',
        },
        {
          type: 'paragraph',
          text: 'The principle is abrasion under mild pressure rather than shear. Grains are moved against an abrasive surface and against one another, and the bran is worn off progressively. Because the bran is being removed from a kernel that is itself brittle, the same action that removes bran also breaks grain, and the harder or faster it is applied the more of both happens. This is why whitening is usually done in stages rather than in one pass: several gentle removals break fewer kernels than one aggressive one, even though the bran removed is the same. Polishing then works at a lower intensity again, burnishing the surface and lifting residual bran dust without removing further material.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Degree of milling is a decision, not a setting',
          text: 'How far to whiten is a commercial choice made against a market’s expectations and a contract’s specification, and every consequence moves together: a whiter grain keeps longer, looks the way most buyers expect, retains less of its nutrition, and weighs less. There is no technically correct answer, which is why this reference names the trade rather than a target.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Whitening yields milled rice and rice bran. As with brown rice at the dehulling step, milled rice is not modelled here as a product of the process: it is a distinct traded commodity, bought, shipped, and specified in its own right, and this reference treats the brown-rice-to-milled-rice step as a relationship between two commodities. The declared product output is the bran. Milled rice appears as the input commodity of the grading step that follows, so the chain is walked through the commodities rather than around them.',
        },
        {
          type: 'paragraph',
          text: 'Rice bran is a co-product of real substance, and its economics are unusual. It carries the kernel’s oil and is the feedstock for rice bran oil, and it is a valued feed ingredient. But it is also unstable in a way few residues are: the moment the bran is separated, enzymes present in it begin acting on its own oil, and it starts to go rancid within a short period unless it is stabilised. Bran that is not stabilised promptly loses its oil market and falls back to feed. The value of this stream therefore depends less on how much is produced than on what happens to it immediately afterwards.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Milled rice',
              description:
                'The whitened kernel, largely starchy endosperm. A distinct traded commodity and the input to grading. Not modelled as a product of this method.',
            },
            {
              term: 'Rice bran',
              description:
                'The abraded bran layers and germ, carrying the kernel’s oil, fibre, and much of its micronutrients. A co-product used for rice bran oil and as a feed ingredient — provided it is stabilised before its oil degrades.',
            },
            {
              term: 'Broken kernels',
              description:
                'Generated here in quantity, but separated at the grading step that follows rather than within whitening itself.',
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
          text: 'Whitening is where a mill’s whole-kernel yield is finally realised, though not where most of it was decided. Kernels fissured in the dryer or cracked at the dehuller arrive here already compromised and break under abrasion; whitening then adds breakage of its own. The two are hard to distinguish in the output and easy to attribute to the wrong step, which is why breakage at a rice mill is a problem diagnosed across the whole line rather than at one machine.',
        },
        {
          type: 'paragraph',
          text: 'The losses that matter are of two kinds, and only one is recoverable. Endosperm abraded away with the bran leaves the food stream for the bran stream — a real transfer of value, and the reason over-milling costs more than the nutrition it removes. Breakage does not remove material at all; it downgrades it, since brokens are sold but at a discount to whole grain.',
        },
        {
          type: 'list',
          items: [
            'Endosperm abraded off with the bran, transferring value from the food stream to the bran stream',
            'Nutrition removed with the bran and germ — the intended effect of the step, and its real cost',
            'Breakage under abrasion, compounding damage inherited from drying and dehulling',
            'Heat generated by friction, which bears on both kernel integrity and bran condition',
            'Rice bran losing its oil market to rancidity if not stabilised promptly after separation',
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
          text: 'Whitening is the most energy-demanding step of rice milling, because abrasion is an inherently inefficient way to remove material and much of the energy becomes heat. Its co-product stream is substantial and its fate is largely a question of infrastructure: where stabilisation capacity exists, bran becomes oil and a premium feed; where it does not, it goes to feed at lower value or is used locally. Rice bran is a by-product economy in miniature, and one where the value realised depends on what is available nearby rather than on the milling itself.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Dust, silica, and rotating machinery',
          text: 'Rice milling generates fine suspended dust, a recognised explosion hazard, and bran dust is generated here in quantity. Rice dust carries crystalline silica, a recognised respiratory hazard. Whitening machines contain high-speed rotating abrasive components with substantial stored energy. All are matters for qualified engineering, applicable regulation, and the facility’s procedures. This entry is a reference description and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'brown-rice' }],
  coProductOutputs: [{ type: 'commodity-product', slug: 'rice-bran' }],
  processObjective:
    'Remove the bran layers and germ from brown rice by abrasion, to a chosen degree of milling, yielding milled rice with the appearance and keeping quality the market requires, and recover the removed bran as a co-product.',
  operatingPrinciple:
    'Grains are moved against an abrasive surface and against one another under mild pressure, wearing the bran layers away progressively rather than cutting or peeling them. Removal is usually staged across several gentle passes rather than one aggressive pass, because breakage rises with intensity while bran removal does not. Polishing then applies a lower-intensity friction to burnish the surface and lift residual bran dust.',
  physicalOrBiochemicalBasis:
    'Purely mechanical: progressive abrasion of surface layers under friction, with the degree of removal set by choice rather than by a physical endpoint. No chemical or biochemical change is intended in the grain, though enzymatic degradation of the separated bran’s oil begins immediately.',
  qualityEffects: [
    'Sets the degree of milling, which moves colour, keeping quality, nutritional content, and yield together',
    'Removes most of the kernel’s oil, fibre, and a substantial share of its vitamins and minerals with the bran and germ',
    'Extends keeping quality substantially by removing the oil that would otherwise go rancid',
    'Adds breakage to damage already inherited from drying and dehulling',
    'Cannot repair kernels fissured or cracked at earlier steps',
  ],
  measurableParameters: [
    'Degree of milling',
    'Whiteness',
    'Broken-kernel proportion',
    'Whole-kernel yield',
    'Bran removal',
    'Grain temperature at discharge',
  ],
  lossPoints: [
    'Endosperm abraded away with the bran and leaving in the co-product stream',
    'Breakage under abrasion, downgrading whole grain to brokens',
    'Heat generated by friction, bearing on kernel integrity and bran condition',
    'Rice bran degraded by rancidity where stabilisation does not promptly follow separation',
  ],
  environmentalContext:
    'The most energy-demanding step of rice milling, since abrasion removes material inefficiently and much of the energy input becomes heat. The bran co-product is substantial, and whether it is realised as rice bran oil, as a premium feed, or at lower local value depends chiefly on whether stabilisation capacity exists nearby rather than on the milling process.',
  safetyLimitations: [
    'Rice milling generates fine suspended dust, a recognised explosion hazard, and whitening produces bran dust in quantity; engineered dust control, ignition management, and explosion protection are required and are matters for qualified engineers.',
    'Rice and bran dust carry crystalline silica, a recognised respiratory hazard; exposure control is governed by applicable occupational-health regulation and the facility’s procedures.',
    'Whitening machines contain high-speed rotating abrasive components with substantial stored energy; guarding, isolation, and access are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'This entry is an educational reference, not an operating instruction: it gives no pressures, speeds, degrees of milling, or machine settings.',
  ],
  jurisdictionalLimitations: [
    'Milled rice grading, degree-of-milling classes, and permitted descriptions are set by contract and by the applicable national grading standard, and differ by jurisdiction.',
    'Rice fortification requirements, where they exist, are set by the applicable food authority.',
  ],
  precededBy: [{ type: 'processing-method', slug: 'rice-dehulling' }],
  followedBy: [
    { type: 'processing-method', slug: 'rice-grading-and-brokens-separation' },
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'quality-attribute', slug: 'colour' },
    { type: 'quality-attribute', slug: 'oil-content' },
    { type: 'quality-attribute', slug: 'mechanical-damage' },
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor:
        'Rice whitening, degree of milling, and head-rice yield context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Rice milling and milled-product definitions',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Rice postharvest systems and bran utilisation research',
    },
    { sourceId: 'usda-ers', citedFor: 'Milled rice market and trade context' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Degree of milling is set against regional market expectations, which differ markedly between rice-consuming markets.',
  limitations: [
    'A reference description of the process, not a milling specification or operating instruction.',
    'No pressures, speeds, degrees of milling, whiteness values, or yield figures are given — they are mill-, variety-, market-, and contract-specific.',
    'Milled rice is modelled as a distinct commodity rather than as a product output of this method, so it does not appear in the declared outputs; the chain continues through it as the input to grading.',
    'Bran stabilisation is named as the condition on which the bran stream’s value depends, but is not itself described here as a process.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rice Whitening and Polishing Explained',
    description:
      'How whitening abrades bran and germ from brown rice to yield milled rice, what the degree of milling trades away, and why rice bran must be stabilised.',
    keywords: [
      'rice whitening',
      'rice polishing',
      'degree of milling',
      'rice bran',
      'milled rice',
    ],
  },
  structuredData: { article: true },
};
