import type { ProcessingMethodContent } from '@/types/content';

export const oilseedDehulling: ProcessingMethodContent = {
  id: 'processing-method-oilseed-dehulling',
  slug: 'oilseed-dehulling',
  contentType: 'processing-method',
  title: 'Oilseed Dehulling',
  alternativeNames: ['Decortication', 'Hull removal', 'Seed coat separation'],
  category: 'Processing method',
  subcategory: 'Oilseed preparation',
  processingClass: 'dehulling',
  processStage: 'preparation',
  transformationBasis: 'mechanical',
  summary:
    'Dehulling separates the fibrous seed coat from the oil-bearing kernel before crushing. It carries almost no oil out with it, which is precisely the point: removing hull before extraction concentrates protein in the meal rather than diluting it with fibre.',
  introduction: [
    {
      type: 'paragraph',
      text: 'An oilseed is not uniform. The kernel inside carries the oil and the protein; the hull enclosing it is largely fibre and carries very little of either. Dehulling cracks the seed coat loose and separates it from the kernel, so that what goes forward to crushing is mostly the fraction worth crushing.',
    },
    {
      type: 'paragraph',
      text: 'The reason to do this is downstream, not upstream. Hull does not yield oil, so leaving it in adds bulk to the extractor without adding product. More importantly it dilutes the meal: soybean meal is sold on protein, and every part of the hull that stays in the meal displaces protein. Dehulling is therefore a decision about which meal specification a plant intends to sell, taken before the oil has even been touched.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Dehulling — mechanical separation of seed coat from kernel',
    },
    { label: 'Stage', value: 'Preparation, ahead of crushing' },
    { label: 'Input', value: 'Soybeans (cleaned and conditioned beforehand)' },
    {
      label: 'By-product',
      value: 'Soybean hulls — a fibre feed ingredient, not a waste stream',
    },
    {
      label: 'Governing principle',
      value:
        'Hull and kernel differ in how they crack, and in density — the process exploits both',
    },
    {
      label: 'Why it is run',
      value:
        'Hull carries almost no oil but dilutes meal protein if it stays in',
    },
    {
      label: 'Depends on',
      value:
        'Cleaning and conditioning beforehand, which set how cleanly the hull releases',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Dehulling exists to raise the protein content of the meal that crushing will eventually produce. The hull is a fibrous coat with little oil and little protein. If it stays with the kernel through extraction, it passes into the meal and dilutes it. Removing it first is the only practical way to reach the higher-protein meal specifications the feed market distinguishes and prices separately.',
        },
        {
          type: 'paragraph',
          text: 'The separation rests on two physical differences. First, the hull and the kernel respond differently to mechanical stress: the seed coat is thin and brittle relative to the kernel beneath it, so a controlled cracking action loosens it rather than pulverising the whole seed. Second, once loosened, hull and kernel differ in density and in how they behave in a moving air stream — hull is light and presents a large surface, so aspiration lifts it away while the denser kernel pieces fall through.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why conditioning comes first',
          text: 'Hull releases cleanly only when the seed has been conditioned so that the coat is loose relative to the kernel. Conditioned incorrectly, the hull either clings to the kernel and passes into the meal, or shatters into fragments too fine for aspiration to sort. Either way the failure is a separation failure that shows up much later, in the meal specification.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Two streams leave a dehulling operation. The kernel fraction goes forward to crushing and is not a product in its own right — it is an intermediate, and it acquires its identity only when oil and meal are separated from it further down the line. The hull fraction, by contrast, leaves the process as a saleable material.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Dehulled kernel',
              description:
                'The oil- and protein-bearing fraction, sent forward to cracking, flaking, and extraction. An intermediate stream, not a finished entity.',
            },
            {
              term: 'Soybean hulls',
              description:
                'The separated seed coat. A by-product with an established market as a digestible-fibre feed ingredient, valued for exactly the property that made it unwanted in the meal.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'It is worth being exact about the hulls. They are not a disposal problem the crusher works around: they are sold, often back into the same feed sector that buys the meal, and in some plants they are added back to the meal in controlled proportion to hit a lower protein specification deliberately. A stream that can be sold separately or blended back is a by-product with a market, not waste.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Dehulling cannot improve the seed. The oil and protein that arrive with the crop are what the plant has to work with, and no amount of hull removal creates more of either. What dehulling decides is how those constituents are distributed between the streams that leave — and, specifically, whether the meal meets the protein specification it is sold against.',
        },
        {
          type: 'paragraph',
          text: 'The characteristic losses run in both directions, and they trade off against each other. Separate too aggressively and kernel fragments leave with the hulls, taking oil and protein into a lower-value stream. Separate too gently and hull stays with the kernel, diluting the meal. Neither error announces itself at the dehuller; both are found downstream.',
        },
        {
          type: 'list',
          items: [
            'Kernel fines carried out with the aspirated hull fraction — oil and protein leaving in the wrong stream',
            'Hull retained on the kernel, diluting meal protein at the far end of the line',
            'Fine hull fragments too small for aspiration to classify reliably',
            'Dust generation and spillage at transfers',
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
          text: 'Dehulling is a mechanical, dry operation: its demands are electrical energy for cracking and aspiration, and dust control. Its residual stream is essentially fully utilised — hulls go to feed, and the material balance of a dehulling plant is close to closed in the sense that both streams leave with a use.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Seed and hull dust is an explosion hazard',
          text: 'Suspended dust from seed handling, cracking, and aspiration is a recognised explosion hazard, and oilseed plants operate under engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers. This entry describes what dehulling does and why; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'soybeans' }],
  byProductOutputs: [{ type: 'commodity-product', slug: 'soybean-hulls' }],
  processObjective:
    'Separate the fibrous seed coat from the oil-bearing kernel before crushing, so that the meal produced downstream is not diluted with hull fibre and can meet a higher-protein specification, while the hull itself is recovered as a saleable fibre feed ingredient.',
  operatingPrinciple:
    'A controlled cracking action loosens the brittle seed coat from the kernel beneath it without pulverising the seed. The loosened hull, being light and presenting a large surface area relative to its mass, is then lifted away from the denser kernel pieces in a moving air stream, with screening used to classify the fractions by size.',
  physicalOrBiochemicalBasis:
    'Purely mechanical and physical: differential fracture behaviour between the brittle seed coat and the kernel, followed by separation on differences in density and aerodynamic behaviour. No chemical or biochemical change is intended.',
  qualityEffects: [
    'Sets the fibre content of the meal produced downstream, and therefore its protein specification',
    'Removes a fraction that carries almost no oil, so extraction handles less inert bulk',
    'Cannot increase the oil or protein the incoming seed already contains',
    'Incomplete separation leaves hull in the meal; over-aggressive separation carries kernel into the hulls',
  ],
  measurableParameters: [
    'Dehulling efficiency',
    'Residual hull in the kernel fraction',
    'Kernel carry-over in the hull fraction',
    'Meal protein content',
    'Seed moisture at conditioning',
  ],
  lossPoints: [
    'Kernel fines aspirated out with the hull stream',
    'Hull retained on the kernel and diluting the meal',
    'Dust losses at aspiration and transfers',
    'Spillage and residual stock in the plant',
  ],
  environmentalContext:
    'A dry mechanical operation whose principal demands are electrical energy and dust control. The separated hull stream is utilised rather than discarded, moving into fibre feed markets or being blended back into meal to meet a specification, so both streams leaving the process have established uses.',
  safetyLimitations: [
    'Suspended seed and hull dust is a recognised explosion hazard; oilseed plants require engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Cracking rolls and conveying equipment contain rotating machinery and nip points; guarding and isolation are governed by the facility’s own procedures and applicable occupational-safety regulation.',
    'Aspiration ducting, bins, and hull-handling enclosures can present confined-space hazards; entry is governed by facility procedure and regulation, not by any description here.',
    'This entry is an educational reference, not an operating instruction: it gives no equipment settings, moisture targets, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Feed-ingredient definitions, labelling, and compositional declarations for hulls and meal are jurisdiction-specific and are set by the applicable feed authority.',
  ],
  followedBy: [
    { type: 'processing-method', slug: 'mechanical-pressing' },
    { type: 'processing-method', slug: 'solvent-extraction' },
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'dehulling-shelling' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'quality-attribute', slug: 'oil-content' },
    { type: 'quality-attribute', slug: 'protein-content' },
    { type: 'quality-attribute', slug: 'moisture-content' },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Oilseed processing and product definitions' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Soybean composition and processing research',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Feed composition and the role of hulls as a fibre ingredient',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Whether a crushing plant dehulls at all, and how completely, depends on the meal specification it sells against and on local feed-market demand for fibre.',
  limitations: [
    'A reference description of the process, not a plant specification or operating instruction.',
    'No dehulling efficiencies, moisture targets, protein figures, or equipment settings are given — they are plant-, seed-, and contract-specific.',
    'Describes soybean dehulling; other oilseeds differ in how readily the hull releases and in whether dehulling is practised at all.',
    'Feed-ingredient definitions and labelling for hulls differ by jurisdiction; consult the applicable feed authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Oilseed Dehulling: Removing Hull Before Crushing',
    description:
      'Why oilseed dehulling happens before crushing: how hull is cracked loose and aspirated from the kernel, what it does to meal protein, and where the hulls go.',
    keywords: [
      'oilseed dehulling',
      'decortication',
      'soybean hulls',
      'meal protein',
      'oilseed preparation',
    ],
  },
  structuredData: { article: true },
};
