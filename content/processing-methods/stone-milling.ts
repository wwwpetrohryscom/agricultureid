import type { ProcessingMethodContent } from '@/types/content';

export const stoneMilling: ProcessingMethodContent = {
  id: 'processing-method-stone-milling',
  slug: 'stone-milling',
  contentType: 'processing-method',
  title: 'Stone Milling',
  alternativeNames: ['Stone grinding', 'Millstone grinding'],
  category: 'Processing method',
  subcategory: 'Cereal milling',
  processingClass: 'milling',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Stone milling grinds the whole wheat kernel between two stones in a single action. Because bran, germ, and endosperm are crushed together rather than parted, what leaves the stones is wholemeal — one stream, not several.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Stone milling is the older of the two ways of turning wheat into flour. Grain is fed between a stationary bed stone and a turning runner stone, and the shearing action between their dressed faces reduces the kernel as it travels outward toward the rim. Every part of the kernel enters the gap together and every part is ground together.',
    },
    {
      type: 'paragraph',
      text: 'That single sentence explains the product. Roller milling opens the kernel in stages and lifts the endosperm away from the bran so that each fraction can be recovered separately; stone milling does not attempt the separation at all. The germ is crushed and its oil is distributed through the flour, and the bran is reduced to fine particles that travel with the endosperm rather than staying in pieces a sieve could remove. The output is a wholemeal flour that carries the entire kernel, which is a different product from a roller mill’s flour and not simply a coarser version of it.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Milling — mechanical size reduction without fraction separation',
    },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Input', value: 'Wheat grain' },
    {
      label: 'Primary output',
      value: 'Wheat flour, as wholemeal carrying the whole kernel',
    },
    {
      label: 'Why no co-products',
      value:
        'Bran and germ are ground into the flour rather than separated, so no bran or germ stream leaves the stones',
    },
    {
      label: 'Governing principle',
      value:
        'Shear between two dressed stone faces reduces all kernel fractions together',
    },
    {
      label: 'Contrast',
      value:
        'Roller milling is a separation process; stone milling is a reduction process',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Stone milling exists to reduce the whole kernel to flour in one operation while keeping all of it in the product. Where a roller mill is asked to decide what stays and what goes, a stone mill is asked only to reduce — the composition of what comes out is fixed by the composition of what went in.',
        },
        {
          type: 'paragraph',
          text: 'The mechanism is shear rather than the sequenced breaking and scraping of paired rolls. Grain enters near the centre of the runner stone and is worked outward across the dressed furrows and lands of the two faces. The gap narrows toward the rim, so reduction is progressive across the radius of the stone rather than across a series of separate machines. A single pass therefore does the work that a roller mill distributes over many passages, and it does it to the whole kernel at once.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why the fractions cannot be recovered',
          text: 'Separation in a roller mill depends on bran surviving in pieces large enough for a sieve to catch. Stone milling reduces bran to a particle size overlapping the flour itself, and crushed germ oil coats what is there. Once that has happened the fractions are no longer separable by sieving — which is why a stone mill has one saleable stream where a roller mill has several.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'A stone mill yields wholemeal flour and nothing else. This is not a shortcoming of the method but its definition: the absence of a bran stream and a germ stream is the direct consequence of grinding the kernel intact. Where a stone-milled flour is later sieved to remove the coarsest bran, that sieving is a separate finishing step and not part of the grinding itself.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Wholemeal flour',
              description:
                'The whole kernel reduced to flour, with bran and germ distributed through it. The only product stream of the process.',
            },
            {
              term: 'Germ oil in the flour',
              description:
                'The germ is crushed rather than removed, so its oil remains in the product. This is what shortens the keeping quality of stone-milled flour relative to a flour the germ has been taken out of.',
            },
            {
              term: 'Bran particles',
              description:
                'Present throughout as fine particles rather than as a separated co-product. They carry the kernel’s fibre into the flour rather than into a feed stream.',
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
          text: 'Because nothing is separated, stone milling cannot change the composition of the grain it is given: the flour’s protein, ash, and colour follow the kernel. What the mill does decide is particle size, the heat the meal picks up from the working faces, and the condition of the germ oil dispersed through the product. Stone-milled flour is the whole kernel in a different physical form.',
        },
        {
          type: 'paragraph',
          text: 'The distinctive loss point is not a fraction going out in the wrong stream — there is no other stream for it to go out in. It is keeping quality. Germ oil spread through a flour and exposed to air across a large particle surface is what limits how long the product holds, and heat from grinding bears on the same outcome.',
        },
        {
          type: 'list',
          items: [
            'Shortened keeping quality from germ oil dispersed through the flour',
            'Heat pickup at the grinding faces, which bears on the condition of that oil',
            'Stone wear carrying fine mineral particles into the product, which is why dressing and stone condition are monitored',
            'Dust and spillage at feed and discharge',
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
          text: 'A stone mill has no residual stream to place: the whole kernel leaves as product, so there is no bran or germ to route to feed. That makes the material flow simple, but it is a difference in configuration rather than evidence that one method is environmentally preferable to the other — the two produce different products, and comparing them on energy or residue alone compares things that are not equivalent.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Grain dust is explosive',
          text: 'Suspended grain and flour dust is a recognised explosion hazard in any mill, at any scale. Dust control, ignition management, and explosion protection are matters for qualified engineers and the applicable regulation. This entry describes what stone milling does and why; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'wheat-grain' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'wheat-flour' }],
  processObjective:
    'Reduce the whole wheat kernel to flour in a single grinding action, retaining bran and germ in the product rather than recovering them as separate streams.',
  operatingPrinciple:
    'Grain is sheared between the dressed faces of a stationary bed stone and a turning runner stone, and is reduced progressively as it travels from the centre outward to the narrowing rim. All kernel fractions pass through the same gap together, so reduction acts on bran, germ, and endosperm at once and no fraction is set aside.',
  physicalOrBiochemicalBasis:
    'Purely mechanical: shear and attrition between two stone faces. No separation by sieving is performed within the grinding step, and no chemical or biochemical change is intended.',
  qualityEffects: [
    'Produces a wholemeal carrying the entire kernel, rather than a separated endosperm flour',
    'Germ oil is dispersed through the flour, which shortens keeping quality relative to a degermed flour',
    'Particle size and heat pickup are set by the stones; composition is set by the incoming grain',
    'Cannot alter the protein content, ash, or soundness of the wheat it is given',
  ],
  measurableParameters: [
    'Flour particle size',
    'Flour ash content',
    'Meal temperature at discharge',
    'Moisture of the incoming grain',
  ],
  lossPoints: [
    'Keeping quality lost to germ oil dispersed through the product',
    'Heat pickup at the grinding faces',
    'Dust losses at feed and discharge',
    'Spillage and residual stock in the mill',
  ],
  environmentalContext:
    'Grinding is energy-demanding and dust-generating. The process leaves no residual stream to place, since the whole kernel is retained in the product — a configuration difference rather than a basis for claiming advantage over methods that separate fractions and route them to other markets.',
  safetyLimitations: [
    'Suspended grain and flour dust is a recognised explosion hazard; mills of any scale require engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Stone mills contain rotating machinery, heavy moving mass, and nip points at the feed; guarding and isolation are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'Stone condition and dressing bear on both product integrity and safe running, and are matters for competent maintenance rather than for a reference description.',
    'This entry is an educational reference, not an operating instruction: it gives no stone settings, gaps, speeds, or moisture targets.',
  ],
  jurisdictionalLimitations: [
    'Whether a flour may be described as stone-ground or wholemeal is a labelling question set by the applicable food authority, and the compositional basis for those terms differs by jurisdiction.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'quality-attribute', slug: 'kernel-hardness' },
    { type: 'quality-attribute', slug: 'moisture-content' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cereal milling and wholemeal product definitions',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Wheat milling and flour quality research',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Milling wheat quality and processing context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Millstone grinding and the history of cereal milling',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Stone milling persists both as a craft and speciality method and as a primary milling method in many smallholder and local-market contexts.',
  limitations: [
    'A reference description of the process, not a milling specification or operating instruction.',
    'No stone settings, gaps, speeds, particle sizes, or moisture targets are given — they are mill-, stone-, and product-specific.',
    'Describes the grinding step only: sieving applied to a stone-milled flour afterwards is a separate finishing operation.',
    'Comparisons with roller milling here are about what each process does to the kernel, not a ranking of product quality or environmental performance.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Stone Milling: Why It Yields Wholemeal Flour',
    description:
      'How stone milling grinds the whole wheat kernel at once, why bran and germ cannot be separated afterwards, and how it differs from roller milling.',
    keywords: [
      'stone milling',
      'stone-ground flour',
      'wholemeal flour',
      'millstone grinding',
      'wheat processing',
    ],
  },
  structuredData: { article: true },
};
