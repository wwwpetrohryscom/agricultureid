import type { ProcessingMethodContent } from '@/types/content';

export const citrusJuiceExtraction: ProcessingMethodContent = {
  id: 'processing-method-citrus-juice-extraction',
  slug: 'citrus-juice-extraction',
  contentType: 'processing-method',
  title: 'Citrus Juice Extraction',
  alternativeNames: [
    'Orange juice extraction',
    'Citrus reaming',
    'Citrus juicing',
  ],
  category: 'Processing method',
  subcategory: 'Fruit juice processing',
  processingClass: 'pressing',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Citrus juice extraction recovers juice from the fruit’s internal segments while keeping the peel intact enough to stay out of the juice. It is as much an avoidance problem as a recovery one: the peel carries bitter compounds and oil that the juice must not inherit.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Citrus juice extraction separates an orange into juice and peel. Unlike apples, which are milled to a mash before pressing, citrus fruit is not broken up indiscriminately — its juice sits in discrete vesicles inside segments, wrapped in a peel that must be treated as a barrier rather than an obstacle. Extractors are built to reach the juice and leave the peel behind in one motion.',
    },
    {
      type: 'paragraph',
      text: 'That distinction is the whole design problem. The peel and the white albedo beneath it carry bitter compounds and volatile oil, and any of it that reaches the juice becomes a defect that no downstream step can fully undo. So the operation is defined as much by what it excludes as by what it recovers — and the excluded peel is not a nuisance but the plant’s second product line.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Pressing — mechanical separation of juice from peel',
    },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Input', value: 'Fresh oranges' },
    {
      label: 'Primary output',
      value: 'Orange juice — the recovered vesicle contents',
    },
    {
      label: 'By-product',
      value: 'Citrus peel — feed, pectin, and essential-oil material',
    },
    {
      label: 'Governing principle',
      value:
        'Juice is recovered from internal vesicles while peel is kept whole and diverted',
    },
    {
      label: 'Defining constraint',
      value: 'Peel oil and albedo carry bitterness the juice must not pick up',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'An orange is not a uniform bag of liquid. The juice is held in vesicles inside the segments; around them sits the spongy white albedo, and outside that the coloured flavedo, which is studded with glands full of volatile oil. Extraction exists to recover the vesicle contents cleanly, without dragging the surrounding structures into the product.',
        },
        {
          type: 'paragraph',
          text: 'The principle is mechanical containment. Extractors are built so that the peel is held, cut, or displaced as a unit while pressure is applied to the interior, so juice is expressed out of the fruit through a controlled path rather than squeezed out of a crushed mass. The peel then leaves along its own route, still intact, carrying its oil with it. Applying force indiscriminately would recover more liquid, but the liquid would be bitter — which is why extraction is deliberately restrained rather than maximal.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why the peel is kept whole',
          text: 'Rupturing the oil glands releases peel oil into the juice, and breaking down the albedo contributes bitter compounds. Keeping the peel structurally intact through extraction is the primary means of keeping both out of the product.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'A citrus plant runs two material streams from one fruit, and both are sold. Juice is the intended product. Peel leaves as a by-product and is the feedstock for several established industries — which is why large citrus operations are frequently described as having a peel business alongside a juice business rather than a disposal problem alongside a juice business.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Orange juice',
              description:
                'The recovered contents of the juice vesicles. The primary product, specified on soluble solids, acidity, and the balance between them, and on freedom from peel-derived bitterness.',
            },
            {
              term: 'Citrus peel',
              description:
                'The flavedo, albedo, and residual segment material. A by-product with several genuine outlets: cattle feed after drying, pectin extraction, and recovery of citrus essential oil from the flavedo glands.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Citrus peel is not waste',
          text: 'Peel is a commercial raw material. Dried citrus pulp is an established ruminant feed, peel is a major industrial pectin source, and the oil recovered from its glands is a flavour and fragrance ingredient in its own right. Calling it waste misstates both the material flow and the economics.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Extraction cannot make juice better than the fruit. Sugar-to-acid ratio, aroma, and colour arrive with the oranges and reflect cultivar, growing region, and maturity at harvest. What extraction determines is whether that inherent quality reaches the product intact, and the dominant risk runs in one direction: contamination from the peel.',
        },
        {
          type: 'paragraph',
          text: 'The characteristic quality fault is therefore not under-recovery but over-recovery. Pushing an extractor to release more liquid drives it into the albedo and the oil glands, and the extra juice arrives carrying bitterness and peel oil. Yield and quality pull against each other directly here, and where the balance sits is a commercial and product-specific decision rather than a technical constant.',
        },
        {
          type: 'list',
          items: [
            'Peel oil carried into the juice when flavedo glands rupture during extraction',
            'Bitter compounds picked up from albedo when extraction reaches too far into the peel',
            'Juice left in vesicles and in the discarded peel and rag',
            'Loss of volatile aromatics from the exposed juice',
            'Residual juice held in extractor surfaces, screens, and transfer lines',
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
          text: 'As with other fruit processing, water is the substantive environmental theme: fruit washing generates volume, and sugar-rich effluent carries an organic load that requires treatment before discharge. The peel stream is large in mass terms, and its handling is what most shapes the plant’s footprint — drying peel for feed is itself energy-demanding, which is a real trade-off, but the alternative of leaving a wet, fermentable organic stream unused is worse on every count. In practice citrus peel valorisation into feed, pectin, and oil is one of the better-established circular flows in fruit and vegetable processing.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rotating machinery and food hygiene',
          text: 'Extractors are high-rate rotating machines with cutting and compressing elements, presenting entanglement and crush hazards; guarding and isolation are matters for qualified engineering and facility procedures under applicable occupational-safety regulation. Juice is a perishable food and the plant operates under the applicable food authority’s hygiene requirements. This entry describes what extraction does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'fresh-oranges' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'orange-juice' }],
  byProductOutputs: [{ type: 'commodity-product', slug: 'citrus-peel' }],
  processObjective:
    'Recover the contents of the juice vesicles as orange juice without carrying peel oil or albedo bitterness into the product, while diverting the peel intact as a feedstock for feed, pectin, and essential-oil recovery.',
  operatingPrinciple:
    'The fruit is held so that the peel is cut or displaced as a unit while pressure is applied to the interior, expressing juice from the vesicles along a controlled path. The peel is kept structurally intact through the operation and leaves by its own route, retaining its oil glands and albedo rather than releasing them into the juice.',
  physicalOrBiochemicalBasis:
    'Mechanical and physical: pressure-driven expression of liquid from discrete vesicles, combined with geometric containment of the peel to exclude oil-bearing and bitter tissue from the product stream. No chemical or biochemical change is intended.',
  qualityEffects: [
    'Determines whether peel oil and albedo bitterness are excluded from the juice',
    'Recovery and quality pull against each other — reaching for more juice draws in peel-derived defects',
    'Exposed juice is subject to loss of volatile aromatics',
    'Cannot improve the sugar-to-acid balance, colour, or aroma of the incoming fruit',
  ],
  measurableParameters: [
    'Juice yield',
    'Juice soluble solids',
    'Juice titratable acidity',
    'Sugar-acid ratio',
    'Peel oil in juice',
    'Pulp content',
  ],
  lossPoints: [
    'Juice retained in the peel and rag leaving the extractor',
    'Residual juice in extractor surfaces, screens, and transfer lines',
    'Aromatic quality lost from the exposed juice',
  ],
  environmentalContext:
    'Water demand and wastewater organic load dominate, as with other fruit processing. The peel stream is large by mass and is substantially valorised — dried citrus pulp to ruminant feed, peel to pectin extraction, and flavedo oil to flavour and fragrance use — though peel drying is itself energy-demanding, which is a genuine trade-off rather than a settled advantage.',
  safetyLimitations: [
    'Extractors are high-rate rotating machines with cutting and compressing elements, presenting entanglement, cut, and crush hazards; guarding and isolation are the responsibility of qualified engineering and the facility’s procedures under applicable occupational-safety regulation.',
    'Citrus essential oil is flammable and its recovery and storage are governed by fire-safety and process-safety requirements determined by qualified engineering, not by this description.',
    'Juice is a perishable food material and the plant operates under food-hygiene requirements set by the applicable food authority; hygienic design and cleaning regimes are facility- and jurisdiction-specific.',
    'This entry is an educational reference, not an operating instruction: it gives no extractor settings, yields, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Juice composition, naming, and labelling standards — including what may be sold as orange juice — are jurisdiction-specific and are set by the applicable food authority.',
    'The use of dried citrus peel and pulp in animal feed is governed by feed-safety regulation that differs by jurisdiction.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'washing-and-sanitising' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'degreening' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'orange' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
    { type: 'quality-attribute', slug: 'titratable-acidity' },
    { type: 'quality-attribute', slug: 'sugar-acid-ratio' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Citrus processing and juice product definitions',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Citrus juice processing and quality research',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Citrus juice market and processing channel context',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Dried citrus pulp as a ruminant feed material',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, concentrated in major citrus-producing regions. Extractor design, juice specifications, and peel outlets vary with fruit type, end use, and jurisdiction.',
  limitations: [
    'A reference description of the process, not an extraction specification or operating instruction.',
    'No juice yields, extractor settings, or process parameters are given — they are plant-, cultivar-, and contract-specific.',
    'Extractor designs differ substantially in how they hold and open the fruit; this describes the general containment-and-expression principle rather than any particular design.',
    'Juice naming and compositional standards differ by jurisdiction; consult the applicable food authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Citrus Juice Extraction: Juice Without Peel Bitterness',
    description:
      'How citrus juice extraction recovers orange juice while keeping peel oil and bitterness out, and why citrus peel is a by-product for feed, pectin, and oil.',
    keywords: [
      'citrus juice extraction',
      'orange juice processing',
      'citrus peel',
      'peel oil',
      'juice extractor',
    ],
  },
  structuredData: { article: true },
};
