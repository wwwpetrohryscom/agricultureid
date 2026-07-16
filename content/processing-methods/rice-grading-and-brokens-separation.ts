import type { ProcessingMethodContent } from '@/types/content';

export const riceGradingAndBrokensSeparation: ProcessingMethodContent = {
  id: 'processing-method-rice-grading-and-brokens-separation',
  slug: 'rice-grading-and-brokens-separation',
  contentType: 'processing-method',
  title: 'Rice Grading and Brokens Separation',
  alternativeNames: ['Rice sizing', 'Head rice separation', 'Length grading'],
  category: 'Processing method',
  subcategory: 'Rice milling',
  processingClass: 'separation',
  processStage: 'finishing',
  transformationBasis: 'mechanical',
  summary:
    'Grading sorts milled rice by kernel length, separating whole grain from brokens. It creates no breakage and repairs none — it decides which market each kernel already destined for a grade actually reaches.',
  introduction: [
    {
      type: 'paragraph',
      text: 'By the time rice reaches grading, every kernel in the stream is already whole or already broken. Nothing here changes that. What grading does is sort a mixed stream into fractions by length, so that whole grain can be sold as whole grain and brokens as brokens, at the prices each commands. It is the last separation in the mill and, commercially, one of the most consequential — a mill that grades poorly sells whole rice at broken prices, or, worse, sells brokens inside a head-rice grade and fails the specification.',
    },
    {
      type: 'paragraph',
      text: 'The mechanism is unusual and worth describing precisely, because it sorts on a property most separators cannot see. Sieves classify by width and thickness, and a broken rice kernel is exactly as wide and as thick as the whole kernel it came from — only its length differs. The indent cylinder solves this: a rotating cylinder whose inner surface is covered in small pockets, each sized so a short kernel drops fully in and a long one cannot. As the cylinder turns, it lifts the pocketed short kernels up and drops them into a trough positioned to catch only what is carried that high, while the long kernels slide along the bottom and pass out the end. Length becomes the sorting property because only a short kernel fits the pocket.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Separation — mechanical sorting by kernel length',
    },
    { label: 'Stage', value: 'Finishing' },
    { label: 'Input', value: 'Milled rice' },
    {
      label: 'Yields',
      value: 'Head rice, retained within the milled-rice commodity stream',
    },
    {
      label: 'Co-product',
      value: 'Broken rice, with established food, brewing, and feed markets',
    },
    {
      label: 'Governing principle',
      value:
        'Indent pockets lift short kernels and leave long ones behind — sorting on length, which sieves cannot do',
    },
    {
      label: 'What it cannot do',
      value:
        'Create or repair breakage; it only sorts what earlier steps produced',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Grading exists to turn one mixed stream into several saleable ones. Rice is traded on grades defined largely by how much broken material a lot contains, and those grades carry substantially different prices. A stream that has not been graded cannot be sold as any of them: it must be sold at the value of its worst component. Separation by length is what converts a physical fact about the lot into a commercial position.',
        },
        {
          type: 'paragraph',
          text: 'The principle rests on the one dimension breakage changes. Because breakage shortens a kernel without altering its width or thickness, length is the only property that distinguishes a broken from a whole grain — and length is precisely what a screen cannot measure, since a grain presents its cross-section to an aperture rather than its length. The indent cylinder measures length by fit: a pocket of a given depth accepts a kernel shorter than itself and rejects a longer one, and rotation converts that fit into a physical lift that carries the short kernels away from the stream. Changing the pocket size changes where the cut falls, which is how a mill produces several broken fractions rather than just two streams.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Grading does not improve a lot',
          text: 'It is tempting to read a good head-rice grade as evidence of good grading, but the causation runs the other way. Whole-kernel yield is set in the field, the dryer, and the dehuller, and is realised under the abrasion of whitening. Grading only reports what those steps produced and routes it accordingly. A mill with a breakage problem cannot grade its way out of it.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Grading yields head rice and one or more broken fractions. Head rice is not modelled here as a separate product: it is the whole-grain portion of milled rice, which is itself a traded commodity, and this reference keeps it within that commodity rather than creating a product entity for a fraction of it. The declared product output is broken rice, which is separated from the stream and sold into different markets from the grain it came from.',
        },
        {
          type: 'paragraph',
          text: 'Broken rice is a genuine co-product, and calling it a defect fraction misreads its economics. It is food in its own right in many cuisines, where certain dishes are made with it by preference rather than by necessity. It is a raw material for rice flour, for brewing, and for starch. It is a feed ingredient. Its price sits below head rice — that is what makes breakage a loss — but it is a real market and not a disposal route, and in some regions demand for it is strong enough that mills produce it deliberately rather than merely accepting it.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Head rice',
              description:
                'The whole-kernel fraction, and the basis on which milled rice grades are largely defined. Retained within the milled-rice commodity rather than modelled as a distinct product.',
            },
            {
              term: 'Broken rice',
              description:
                'Kernels below the length cut, separated into one or more size fractions. A co-product with established food, rice-flour, brewing, and feed markets.',
            },
            {
              term: 'Brewers rice and fine brokens',
              description:
                'The smallest fractions, cut off by finer pockets. Sold into brewing, flour, and feed uses. Fractions of the broken-rice stream rather than separate entities here.',
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
          text: 'Grading changes no kernel’s quality; it changes which lot a kernel ends up in. Its faults are therefore misclassification faults, and they run in both directions with asymmetric consequences. Brokens carried into the head-rice fraction put the grade at risk of failing its specification, which is a commercial and contractual problem. Whole kernels lifted out into the broken fraction are simply value sold at a discount — quieter, harder to notice, and easy to tolerate for far longer than it should be.',
        },
        {
          type: 'paragraph',
          text: 'Because the separation depends on the geometry of the pocket, its accuracy degrades as that geometry wears, and it depends on the grain being what the pockets were chosen for. A cylinder indented for one variety’s kernel length does not sort another variety’s correctly, which is why grading is set against the rice being run and not once and for all.',
        },
        {
          type: 'list',
          items: [
            'Whole kernels lifted into the broken fraction — value sold at a discount',
            'Brokens carried into head rice, putting the grade specification at risk',
            'Pocket wear degrading the sharpness of the length cut over time',
            'Cylinder indent size mismatched to the variety’s kernel length',
            'Additional breakage from handling and conveying between and after separations',
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
          text: 'Grading is among the least energy-demanding steps in a rice mill, since it only turns cylinders and moves grain rather than removing material. It generates no residual stream at all: every fraction it makes is sold, and the separation exists precisely so that each can be. In material terms nothing leaves the mill here that is not a product.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Dust and rotating machinery',
          text: 'Rice handling generates suspended dust, a recognised explosion hazard, and rice dust carries crystalline silica, a recognised respiratory hazard. Graders and their conveying systems contain rotating machinery and entrapment points. Engineered dust control, guarding, and isolation are matters for qualified engineering, applicable regulation, and the facility’s procedures. This entry is a reference description and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'milled-rice' }],
  coProductOutputs: [{ type: 'commodity-product', slug: 'broken-rice' }],
  processObjective:
    'Sort milled rice by kernel length so that whole grain and broken kernels reach their separate markets at their separate values, and so that a lot can meet a defined grade specification.',
  operatingPrinciple:
    'A rotating cylinder with pocketed inner surface sorts kernels by length: pockets sized to accept a short kernel and reject a longer one lift the brokens as the cylinder turns and drop them into a trough set to catch only what is carried that high, while whole kernels slide along the bottom and pass out the end. Pocket size sets where the length cut falls, so several fractions can be produced by successive cylinders.',
  physicalOrBiochemicalBasis:
    'Purely mechanical: classification by length through geometric fit, a property sieves cannot resolve because breakage alters a kernel’s length but not its width or thickness. No chemical or biochemical change occurs.',
  qualityEffects: [
    'Determines which grade a lot can be sold as, since milled-rice grades are largely defined by broken content',
    'Creates no breakage and repairs none — it sorts what earlier steps produced',
    'Separation accuracy depends on pocket geometry matching the variety’s kernel length',
    'Cannot compensate for whole-kernel yield lost in drying, dehulling, or whitening',
  ],
  measurableParameters: [
    'Broken-kernel proportion',
    'Head-rice yield',
    'Kernel length',
    'Size uniformity',
    'Grade classification',
  ],
  lossPoints: [
    'Whole kernels lifted into the broken fraction and sold at a discount',
    'Brokens carried into head rice, risking grade failure',
    'Pocket wear degrading the sharpness of the length cut',
    'Breakage added by handling and conveying around the separation',
  ],
  environmentalContext:
    'Among the least energy-demanding steps in a rice mill, since it sorts rather than removes material. It generates no residual stream: every fraction produced is a saleable one, which is the reason the separation is made.',
  safetyLimitations: [
    'Rice handling generates suspended dust, a recognised explosion hazard requiring engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Rice dust carries crystalline silica, a recognised respiratory hazard; exposure control is governed by applicable occupational-health regulation and the facility’s procedures.',
    'Graders and their conveying systems contain rotating machinery and entrapment points; guarding and isolation are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'This entry is an educational reference, not an operating instruction: it gives no indent sizes, cylinder speeds, cut points, or grade thresholds.',
  ],
  jurisdictionalLimitations: [
    'Milled rice grades, the length below which a kernel counts as broken, and permitted broken content in each grade are set by contract and by the applicable national grading standard, and differ by jurisdiction.',
  ],
  precededBy: [{ type: 'processing-method', slug: 'rice-whitening-polishing' }],
  relatedOperations: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'quality-attribute', slug: 'size-uniformity' },
    { type: 'quality-attribute', slug: 'mechanical-damage' },
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Rice grading, head-rice yield, and brokens separation context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Rice grading and milled-product definitions',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Rice grade classes and broken-rice market context',
    },
    { sourceId: 'cgiar', citedFor: 'Rice postharvest systems research' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade definitions and the market value of broken fractions differ markedly between rice-trading and rice-consuming regions.',
  limitations: [
    'A reference description of the process, not a grading specification or operating instruction.',
    'No indent sizes, cylinder speeds, cut lengths, grade thresholds, or yield figures are given — they are mill-, variety-, standard-, and contract-specific.',
    'Head rice is retained within the milled-rice commodity rather than modelled as a distinct product output, so it does not appear in the declared outputs.',
    'Optical sorting for colour and defect removal often accompanies grading in modern mills but is a different separation on a different property, and is not covered here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rice Grading and Brokens Separation',
    description:
      'How indent cylinders sort milled rice by kernel length to separate head rice from brokens, why sieves cannot do it, and why broken rice is a real market.',
    keywords: [
      'rice grading',
      'broken rice',
      'head rice',
      'indent cylinder',
      'rice milling',
    ],
  },
  structuredData: { article: true },
};
