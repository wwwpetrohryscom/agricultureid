import type { ProcessingMethodContent } from '@/types/content';

export const juicePressing: ProcessingMethodContent = {
  id: 'processing-method-juice-pressing',
  slug: 'juice-pressing',
  contentType: 'processing-method',
  title: 'Juice Pressing',
  alternativeNames: ['Fruit pressing', 'Cider pressing', 'Expression'],
  category: 'Processing method',
  subcategory: 'Fruit juice processing',
  processingClass: 'pressing',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Juice pressing applies mechanical force to milled fruit to separate the liquid phase from the solids. It splits one commodity into two things with separate markets: juice, and the pressed solids known as pomace.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Juice pressing is the step that turns fruit into liquid. Apples are first milled into a mash, because whole fruit will not give up its juice — the cells have to be ruptured before pressing can drain them. Force is then applied to that mash and the liquid phase runs off, leaving a compacted mat of skins, cores, seeds, and cell-wall material behind.',
    },
    {
      type: 'paragraph',
      text: 'What makes this a transformation rather than a handling step is that the fruit stops existing as fruit. Two distinct materials leave the press, and neither is an apple. The juice goes on to clarification, concentration, or fermentation; the pressed solids — pomace — leave as a by-product with its own established uses. Pressing is where that split happens.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Pressing — mechanical phase separation' },
    { label: 'Stage', value: 'Primary transformation' },
    {
      label: 'Input',
      value: 'Fresh apples (milled to a mash before pressing)',
    },
    {
      label: 'Liquid stream',
      value: 'Single-strength juice, which feeds concentration or fermentation',
    },
    {
      label: 'By-product',
      value:
        'Apple pomace — a real feed, pectin, and fuel material, not a waste',
    },
    {
      label: 'Governing principle',
      value:
        'Juice sits inside ruptured cells; pressure drives it out through a drainage path',
    },
    {
      label: 'Depends on',
      value:
        'How the fruit was milled — the mash structure decides whether juice can drain at all',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Most of an apple by mass is water held inside cells. Pressing exists to recover that liquid, along with the sugars and acids dissolved in it, and to leave behind the structural material that gives fruit its shape. The value is in the liquid; the objective is to get as much of it out as the mash will release.',
        },
        {
          type: 'paragraph',
          text: 'The principle is mechanical. Milling first ruptures the cell walls so the juice is no longer locked inside intact tissue. Pressure then compacts the mash and forces the freed liquid through channels in the solid bed toward a drainage surface. The solids act as their own filter medium, which is the central tension of the operation: the same compaction that expels juice also closes the drainage paths the juice needs to escape through.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why milling comes first',
          text: 'A press applied to whole or coarsely broken fruit mostly deforms it. The cells have to be opened before pressure can drain them, so the mash produced upstream — not the press itself — sets the ceiling on what pressing can recover.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Two streams leave the press, and it is worth being precise about how each is modelled here. The liquid stream is single-strength juice: it is the point of the operation, but this dataset does not carry it as a distinct product entity, because it is an intermediate that is normally concentrated, fermented, or packed rather than traded in its own right at this stage. The solid stream is apple pomace, which is carried as a by-product because it genuinely leaves the plant as its own material with its own buyers.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Single-strength juice',
              description:
                'The recovered liquid phase, carrying the fruit’s sugars, acids, and aromatics. An intermediate here: it feeds juice concentration, fermentation, or direct packing.',
            },
            {
              term: 'Apple pomace',
              description:
                'The pressed solids — skins, cores, seeds, and cell-wall material. A by-product with established uses: livestock feed, a raw material for pectin extraction, a substrate for further fermentation, and a fuel or soil-amendment feedstock.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Pomace is not waste',
          text: 'Apple pomace is a commercial material. It carries the fruit’s pectin and fibre, and it is bought as ruminant feed and as pectin feedstock. Treating it as disposal misrepresents both the material flow and the economics of a pressing plant.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Pressing cannot improve the fruit it is given. The sugar-to-acid balance, the aromatic character, and the soundness of the juice all arrive with the apples, and a press has no mechanism for adding any of them. What pressing decides is how much of that juice is recovered and how much oxidative and physical damage the liquid takes on the way out.',
        },
        {
          type: 'paragraph',
          text: 'The characteristic loss is not spillage but retention: juice that stays in the pomace because the drainage path closed before it could leave. That liquid is not destroyed — it leaves in the by-product stream, where it is worth considerably less than it would have been as juice. This is the same pattern as endosperm retained on bran in a flour mill: yield walking out in the wrong stream.',
        },
        {
          type: 'list',
          items: [
            'Juice retained in the pomace when the mash bed compacts and blinds its own drainage paths',
            'Enzymatic browning where cut and pressed surfaces meet air, changing juice colour',
            'Loss of volatile aromatics from the exposed liquid',
            'Fine solids carried into the juice, shifting the load onto downstream clarification',
            'Residual juice held in press cloths, channels, and transfer lines',
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
          text: 'The environmental profile of a pressing plant is dominated by water rather than energy. Fruit arrives carrying soil and field debris and is washed before milling, so wash-water volume and the organic load in the resulting wastewater are the substantive issues — sugar-rich effluent has a high biochemical oxygen demand and cannot simply be discharged. Against that, the solid stream is close to fully valorised: pomace overwhelmingly goes to feed, pectin extraction, or energy recovery rather than to landfill, which makes fruit pressing a genuine example of by-product circularity rather than an aspirational one.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Pressure systems and rotating machinery',
          text: 'Presses are hydraulic or pneumatic pressure systems with moving platens, screws, or belts, and they present crush and entanglement hazards. Guarding, isolation, and pressure-system integrity are matters for qualified engineering and the facility’s own procedures under applicable occupational-safety regulation. This entry describes what pressing does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'fresh-apples' }],
  byProductOutputs: [{ type: 'commodity-product', slug: 'apple-pomace' }],
  processObjective:
    'Separate the liquid phase of milled fruit from its solids, recovering juice for downstream concentration, fermentation, or packing, and releasing the pressed solids as pomace for feed, pectin, and energy uses.',
  operatingPrinciple:
    'Milling first ruptures the fruit’s cell walls so the juice is no longer held in intact tissue. Applied pressure then compacts the mash and drives the freed liquid through drainage channels in the solid bed to a collection surface, while the compacted solids are retained as a mat.',
  physicalOrBiochemicalBasis:
    'Mechanical and physical: cell rupture followed by pressure-driven liquid–solid separation through a compressible porous bed, where the solids serve as their own filter medium. No chemical or biochemical change is intended, although enzymatic browning proceeds in the exposed juice.',
  qualityEffects: [
    'Determines how much of the fruit’s juice is recovered rather than retained in the pomace',
    'Exposed juice is subject to enzymatic browning and to loss of volatile aromatics',
    'Fine solids carried through set the clarification load on downstream steps',
    'Cannot improve the sugar-to-acid balance, aroma, or soundness of the incoming fruit',
  ],
  measurableParameters: [
    'Juice yield',
    'Pomace moisture',
    'Juice soluble solids',
    'Juice titratable acidity',
    'Suspended solids in juice',
  ],
  lossPoints: [
    'Juice retained in the pomace bed',
    'Residual juice in press cloths, channels, and transfer lines',
    'Aromatic and colour quality lost to oxidation in the exposed liquid',
  ],
  environmentalContext:
    'Water demand and wastewater load dominate: fruit washing generates volume, and sugar-rich effluent carries a high biochemical oxygen demand requiring treatment before discharge. The solid stream is largely utilised — pomace goes to livestock feed, pectin extraction, fermentation substrate, and energy recovery — making by-product valorisation the norm rather than the exception in this process.',
  safetyLimitations: [
    'Presses are pressure systems with moving platens, screws, or belts, presenting crush, nip, and entanglement hazards; guarding, isolation, and pressure-system integrity are the responsibility of qualified engineering and the facility’s procedures under applicable occupational-safety regulation.',
    'Juice is a perishable food material and the plant operates under food-hygiene requirements set by the applicable food authority; hygienic design and cleaning regimes are facility- and jurisdiction-specific.',
    'This entry is an educational reference, not an operating instruction: it gives no pressures, yields, timings, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Juice composition, labelling, and permitted processing aids are jurisdiction-specific and are set by the applicable food authority.',
    'The use of fruit pomace in animal feed is governed by feed-safety regulation that differs by jurisdiction.',
  ],
  followedBy: [{ type: 'processing-method', slug: 'juice-concentration' }],
  relatedOperations: [
    { type: 'post-harvest', slug: 'washing-and-sanitising' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
    { type: 'quality-attribute', slug: 'titratable-acidity' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Fruit processing and juice product definitions',
    },
    { sourceId: 'usda-ars', citedFor: 'Fruit and juice processing research' },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Use of fruit pomace as a livestock feed material',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Press configuration, juice specifications, and pomace outlets vary with fruit type, end use, and jurisdiction.',
  limitations: [
    'A reference description of the process, not a pressing specification or operating instruction.',
    'No juice yields, pressures, or process parameters are given — they are plant-, fruit-, and contract-specific.',
    'Single-strength juice is not modelled here as a separate product entity; it is an intermediate that feeds concentration, fermentation, or packing.',
    'Press types differ substantially in how they build and drain the mash bed; this describes the general expression principle rather than any particular design.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Juice Pressing: Separating Fruit Juice From Pomace',
    description:
      'How juice pressing separates liquid from milled fruit: the drainage principle, why pomace is a by-product rather than waste, and where juice is lost.',
    keywords: [
      'juice pressing',
      'fruit pressing',
      'apple pomace',
      'juice extraction',
      'fruit processing',
    ],
  },
  structuredData: { article: true },
};
