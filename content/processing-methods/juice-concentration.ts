import type { ProcessingMethodContent } from '@/types/content';

export const juiceConcentration: ProcessingMethodContent = {
  id: 'processing-method-juice-concentration',
  slug: 'juice-concentration',
  contentType: 'processing-method',
  title: 'Juice Concentration',
  alternativeNames: ['Juice evaporation', 'Concentrate production'],
  category: 'Processing method',
  subcategory: 'Fruit juice processing',
  processingClass: 'concentration',
  processStage: 'refining',
  transformationBasis: 'thermal',
  summary:
    'Juice concentration removes water from single-strength juice, leaving the sugars, acids, and solids behind. Removing water is not a side effect of the process — it is the entire point, because water is what makes juice expensive to move and quick to spoil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh juice is mostly water. That water is the cheapest thing in the tank and the most expensive thing to ship, and it is also what allows microorganisms to grow. Juice concentration removes it, leaving a dense liquid that carries the same sugars, acids, and dissolved solids in a fraction of the volume.',
    },
    {
      type: 'paragraph',
      text: 'The economics follow directly. Concentrate can be moved across oceans and held between seasons in a way that single-strength juice cannot, which is why the global juice trade largely runs on concentrate rather than on juice. The transformation is real: concentrate is a distinct product with its own market, storage behaviour, and specifications, and it is not simply juice in a smaller container.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Concentration — removal of the water phase' },
    { label: 'Stage', value: 'Refining' },
    {
      label: 'Input',
      value: 'Fresh apples, by way of the single-strength juice from pressing',
    },
    { label: 'Primary output', value: 'Apple juice concentrate' },
    {
      label: 'Governing principle',
      value:
        'Water is volatile; sugars, acids, and solids are not — so heat separates them',
    },
    {
      label: 'Why it is done',
      value:
        'Transport cost and storage stability, both of which scale with the water carried',
    },
    {
      label: 'Defining risk',
      value:
        'The heat that removes water also damages colour and drives off aroma',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Concentration exists to solve two problems at once, and both come down to water. Shipping single-strength juice means paying to move water that the buyer could add back anywhere; and a dilute, sugar-rich liquid is an excellent growth medium, so it must be kept cold or processed quickly. Take the water out and both problems shrink together: the volume to be moved falls, and the remaining solution becomes hostile to microbial growth because so little free water is left available.',
        },
        {
          type: 'paragraph',
          text: 'The principle is a difference in volatility. Water leaves a solution as vapour under heat; the sugars, acids, pectins, and minerals dissolved in it do not. Evaporating the water therefore separates the juice into a vapour stream that is discarded and a liquid stream that retains everything of value in denser form. Evaporators are typically run under reduced pressure so that water boils off more gently, because the alternative — driving it off with more heat — costs product quality.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Aroma leaves with the water',
          text: 'The volatile compounds that make juice smell like fruit are volatile for the same reason water is, so they leave with the vapour. Concentration plants commonly capture this aroma fraction separately and return it later, precisely because concentrate stripped of it does not reconstitute into something that tastes like juice.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Concentration is unusual among the processes described here in that it has essentially one output. Nothing is separated out for a second market: the only other stream is the removed water, which leaves as vapour and is condensate, not a product. This is why concentration is modelled as refining rather than as a primary transformation — it takes an existing stream and makes it denser rather than splitting a commodity into parts.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Apple juice concentrate',
              description:
                'The primary product: the sugars, acids, and dissolved solids of the juice, retained after the water has been evaporated away. Traded internationally and specified on soluble solids, acidity, and colour.',
            },
            {
              term: 'Aroma fraction',
              description:
                'The volatile compounds recovered from the vapour stream. Handled as a separate recovered stream and commonly returned to the product, rather than being modelled as its own commodity product here.',
            },
            {
              term: 'Condensate',
              description:
                'The removed water. Not a product; where it is recovered it is reused within the plant, typically for cleaning duties, subject to the applicable food-hygiene requirements.',
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
          text: 'Every quality risk in concentration traces back to heat. The same thermal input that removes water also drives non-enzymatic browning between sugars and amino acids, which darkens the concentrate, and it strips the aromatics that carry the fruit character. Neither change reverses. A concentrate can be diluted back to its original solids, but it cannot be un-browned, and if the aroma fraction was not captured it cannot be put back.',
        },
        {
          type: 'paragraph',
          text: 'The consequence is that the operation is a trade against time and temperature together rather than either alone. How that trade is struck — how much heat, for how long, at what pressure — is a plant- and product-specific engineering decision made against a customer specification, not a fixed recipe, and it is not something this entry sets out.',
        },
        {
          type: 'list',
          items: [
            'Non-enzymatic browning during heating, darkening the concentrate irreversibly',
            'Volatile aromatics carried off with the vapour and lost where they are not recovered',
            'Heat damage to colour and to heat-sensitive nutrients',
            'Product retained in evaporator surfaces, pipework, and heat-exchanger passes',
            'Fouling of heating surfaces, which degrades heat transfer and can scorch product',
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
          text: 'Concentration is the energy-intensive step in juice processing, because evaporating water requires supplying its latent heat. This is why multi-effect and mechanical vapour-recompression evaporators exist at all — they reuse the energy in the vapour rather than discarding it, which is an engineering response to the fact that the underlying thermodynamic demand cannot be avoided. Set against that energy cost is a transport saving: shipping concentrate rather than juice moves far less mass for the same delivered solids. Whether the saving outweighs the energy cost depends on the specific route, energy source, and plant, and is not a claim that can be made in general.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Thermal and pressure hazards',
          text: 'Evaporators combine hot surfaces, steam systems, and vessels operating away from atmospheric pressure. Their design, protection, and inspection are matters for qualified engineering under applicable pressure-equipment and occupational-safety regulation. This entry describes what concentration does; it is not an operating instruction and gives no temperatures, pressures, or settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'fresh-apples' }],
  primaryOutputs: [
    { type: 'commodity-product', slug: 'apple-juice-concentrate' },
  ],
  processObjective:
    'Remove water from single-strength juice so that the sugars, acids, and dissolved solids can be transported and stored at a fraction of the original volume, and held between seasons without the spoilage risk that dilute juice carries.',
  operatingPrinciple:
    'Water is separated from the juice by exploiting its volatility: heat drives it off as vapour while the dissolved sugars, acids, and solids remain in the liquid phase. Evaporation is typically carried out under reduced pressure so that water leaves at a lower temperature, limiting the thermal damage that the process would otherwise inflict on colour and aroma. Volatile aroma compounds carried off with the vapour are commonly recovered separately and returned to the product.',
  physicalOrBiochemicalBasis:
    'Thermal and physical: a phase change separating the volatile solvent from non-volatile solutes. The intended change is compositional rather than chemical, but heat unavoidably drives non-enzymatic browning between sugars and amino acids as a side reaction.',
  qualityEffects: [
    'Concentrates sugars, acids, and dissolved solids without altering their ratios to one another',
    'Reduces available water, which is what gives concentrate its storage stability',
    'Drives non-enzymatic browning, darkening the product irreversibly',
    'Strips volatile aromatics unless they are recovered from the vapour and returned',
    'Cannot improve the quality of the juice it is given — defects present beforehand are concentrated too',
  ],
  measurableParameters: [
    'Soluble solids',
    'Titratable acidity',
    'Colour',
    'Water activity',
    'Aroma recovery',
    'Evaporator fouling',
  ],
  lossPoints: [
    'Volatile aromatics lost with the vapour where recovery is not practised',
    'Product retained in evaporator surfaces, pipework, and heat-exchanger passes',
    'Colour and heat-sensitive nutrients degraded by thermal exposure',
  ],
  environmentalContext:
    'The most energy-intensive step in juice processing, since evaporating water requires supplying its latent heat; multi-effect and vapour-recompression designs exist to recover energy from the vapour rather than discard it. Concentration reduces transported mass substantially, but whether that transport saving offsets the energy demand depends on route, energy source, and plant, and cannot be asserted in general. Condensate is often recovered for in-plant use subject to food-hygiene requirements.',
  safetyLimitations: [
    'Evaporators combine hot surfaces, steam systems, and vessels operating away from atmospheric pressure; their design, protection, inspection, and operation are matters for qualified engineering under applicable pressure-equipment and occupational-safety regulation.',
    'Recovered aroma fractions can be flammable and are handled under fire-safety and process-safety requirements determined by qualified engineering.',
    'Concentrate is a food material and the plant operates under food-hygiene requirements set by the applicable food authority, including any conditions on reuse of condensate.',
    'This entry is an educational reference, not an operating instruction: it gives no temperatures, pressures, soluble-solids targets, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Concentrate composition, labelling, and the standards governing juice reconstituted from concentrate are jurisdiction-specific and are set by the applicable food authority.',
  ],
  precededBy: [{ type: 'processing-method', slug: 'juice-pressing' }],
  relatedOperations: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
    { type: 'quality-attribute', slug: 'titratable-acidity' },
    { type: 'quality-attribute', slug: 'water-activity' },
    { type: 'quality-attribute', slug: 'colour' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Juice concentrate definitions and fruit processing context',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Juice concentration and quality research',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Juice concentrate trade and market context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Concentrate is a traded commodity moved between producing and consuming regions; specifications and evaporator configurations vary with fruit, end use, and jurisdiction.',
  limitations: [
    'A reference description of the process, not a concentration specification or operating instruction.',
    'No temperatures, pressures, soluble-solids figures, or process parameters are given — they are plant-, product-, and contract-specific.',
    'Modelled from apples through to apple juice concentrate; the single-strength juice that physically feeds the evaporator is an intermediate and is not carried as a separate product entity.',
    'Evaporator configurations differ substantially; this describes the general volatility-difference principle rather than any particular design.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Juice Concentration: Why Water Is Removed From Juice',
    description:
      'How juice concentration removes water from fruit juice for transport and storage stability, what heat does to colour and aroma, and why aroma is recovered.',
    keywords: [
      'juice concentration',
      'apple juice concentrate',
      'evaporation',
      'aroma recovery',
      'juice processing',
    ],
  },
  structuredData: { article: true },
};
