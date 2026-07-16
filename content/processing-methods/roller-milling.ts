import type { ProcessingMethodContent } from '@/types/content';

export const rollerMilling: ProcessingMethodContent = {
  id: 'processing-method-roller-milling',
  slug: 'roller-milling',
  contentType: 'processing-method',
  title: 'Roller Milling',
  alternativeNames: ['Gradual reduction milling', 'Roller flour milling'],
  category: 'Processing method',
  subcategory: 'Cereal milling',
  processingClass: 'milling',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Roller milling separates the wheat kernel into its anatomical fractions and progressively reduces the endosperm to flour. It is a separation process before it is a grinding process — which is what distinguishes it from simply pulverising grain.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Roller milling is the dominant method for turning wheat grain into flour. Paired rolls open the kernel and, through a repeated sequence of breaking, sifting, and reduction, pull the starchy endosperm away from the bran layers and the germ. What leaves the mill is not one product but several: flour, bran, and germ, each with its own market.',
    },
    {
      type: 'paragraph',
      text: 'The essential point is that roller milling is a separation process that happens to involve grinding, not a grinding process that happens to separate. A hammer mill pulverises everything together; a roller mill deliberately keeps the fractions apart so that each can be recovered. That difference is why the two methods yield different products from the same commodity.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Milling — mechanical separation and size reduction',
    },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Input', value: 'Wheat grain (conditioned before milling)' },
    { label: 'Primary output', value: 'Wheat flour (the endosperm fraction)' },
    {
      label: 'Co-product',
      value: 'Wheat bran; wheat germ is recovered separately',
    },
    {
      label: 'Governing principle',
      value:
        'Bran is tough and endosperm is friable — the mill exploits the difference',
    },
    {
      label: 'Depends on',
      value:
        'Conditioning (tempering) beforehand, which sets how cleanly the fractions part',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The wheat kernel has three functional parts: the starchy endosperm, the oil-bearing germ, and the fibrous bran layers that enclose them. Roller milling exists to recover the endosperm as cleanly as possible, because bran and germ change a flour’s colour, keeping quality, and baking behaviour.',
        },
        {
          type: 'paragraph',
          text: 'It works by exploiting a difference in mechanical behaviour. Correctly conditioned bran is tough and leathery and resists shattering; the endosperm inside is friable and breaks away readily. Fluted break rolls therefore open the kernel and scrape the endosperm off the bran without pulverising the bran itself. The bran stays in large pieces that a sieve can remove, and the process repeats: break, sift, reduce, sift again.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why conditioning comes first',
          text: 'Tempering water toughens the bran and mellows the endosperm before milling. Without it, bran shatters into fragments the sieves cannot separate from flour — so a conditioning failure is a separation failure, not a grinding one.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'A flour mill is a separation plant with several saleable streams. Flour is the intended product; bran and germ are genuine co-products with established food and feed markets, not residues to dispose of. How much of the grain is recovered as flour — the extraction rate — is a commercial and technical decision, and it moves the composition of every stream at once.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Flour',
              description:
                'The reduced endosperm. The primary product, specified by protein, particle size, and ash.',
            },
            {
              term: 'Bran',
              description:
                'The separated outer layers, carrying most of the kernel’s fibre. A co-product, widely used in feed and as a food ingredient.',
            },
            {
              term: 'Germ',
              description:
                'The embryo, separated because its oil shortens a flour’s keeping quality. Recovered as its own stream.',
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
          text: 'Milling cannot add quality the grain did not have: protein content and soundness arrive with the wheat. What milling decides is how cleanly the fractions are separated and what ends up in each. Poor separation leaves bran specks in flour and endosperm on bran — the first is a flour quality fault, the second is yield walking out of the mill in the wrong stream.',
        },
        {
          type: 'list',
          items: [
            'Endosperm retained on bran — recoverable yield lost to the co-product stream',
            'Bran fragments carried into flour, raising ash and darkening colour',
            'Starch damage from over-reduction, which changes water absorption',
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
          text: 'Milling is energy-intensive and dust-generating. Its residual streams are almost entirely used rather than discarded: bran and mill feed go to animal feed, and germ into food and oil. Dust extraction is both an air-quality measure and a safety one.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Grain dust is explosive',
          text: 'Suspended flour and grain dust is a recognised explosion hazard, and mills operate under engineered dust control, ignition management, and explosion-protection systems. This entry describes what milling does; it is not an operating instruction, and it gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'wheat-grain' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'wheat-flour' }],
  coProductOutputs: [
    { type: 'commodity-product', slug: 'wheat-bran' },
    { type: 'commodity-product', slug: 'wheat-germ' },
  ],
  processObjective:
    'Recover the starchy endosperm of the wheat kernel as flour, while separating the bran and germ fractions cleanly enough that each can be sold in its own right.',
  operatingPrinciple:
    'Paired rolls open conditioned kernels and scrape endosperm from bran, exploiting the difference between tough, moist bran and friable endosperm. Sifting removes the separated fractions between passages, and the sequence of breaking, sifting, and gradual reduction repeats until the endosperm is reduced to flour.',
  physicalOrBiochemicalBasis:
    'Purely mechanical: differential fracture behaviour between kernel fractions, plus size classification by sieving. No chemical or biochemical change is intended.',
  qualityEffects: [
    'Determines how much bran and germ remain in the flour, and therefore its colour, ash, and keeping quality',
    'Particle size and starch damage influence water absorption in baking',
    'Cannot improve the protein content or soundness of the incoming grain',
  ],
  measurableParameters: [
    'Extraction rate',
    'Flour ash content',
    'Flour particle size',
    'Moisture after conditioning',
    'Starch damage',
  ],
  lossPoints: [
    'Endosperm left adhering to bran',
    'Dust losses at transfers and aspiration',
    'Spillage and residual stock in the mill',
  ],
  environmentalContext:
    'Energy-intensive and dust-generating. Residual streams are almost entirely utilised — bran and mill feed to animal feed, germ to food and oil — so the process is close to fully valorised in material terms.',
  safetyLimitations: [
    'Suspended grain and flour dust is a recognised explosion hazard; mills require engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Roller mills contain rotating machinery and nip points; guarding and isolation are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'This entry is an educational reference, not an operating instruction: it gives no roll settings, moisture targets, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Flour naming, compositional standards, and fortification requirements are jurisdiction-specific and are set by the applicable food authority.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'quality-attribute', slug: 'protein-content' },
    { type: 'quality-attribute', slug: 'moisture-content' },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Cereal milling and product definitions' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Wheat milling and flour quality research',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Milling wheat quality and processing context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Mill configuration and flour specifications vary with wheat class, end use, and jurisdiction.',
  limitations: [
    'A reference description of the process, not a milling specification or operating instruction.',
    'No extraction rates, roll settings, moisture targets, or ash figures are given — they are mill-, class-, and contract-specific.',
    'Flour naming and fortification requirements differ by jurisdiction; consult the applicable food authority.',
    'Mill configurations vary widely; this describes the general gradual-reduction principle rather than any particular plant.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Roller Milling: How Wheat Becomes Flour',
    description:
      'How roller milling separates the wheat kernel into flour, bran, and germ: the objective, the principle, what comes out, quality effects, and loss points.',
    keywords: [
      'roller milling',
      'flour milling',
      'gradual reduction',
      'wheat processing',
      'extraction rate',
    ],
  },
  structuredData: { article: true },
};
