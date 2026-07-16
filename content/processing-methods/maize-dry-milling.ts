import type { ProcessingMethodContent } from '@/types/content';

export const maizeDryMilling: ProcessingMethodContent = {
  id: 'processing-method-maize-dry-milling',
  slug: 'maize-dry-milling',
  contentType: 'processing-method',
  title: 'Maize Dry Milling',
  alternativeNames: [
    'Corn dry milling',
    'Degerming dry milling',
    'Tempering-degerming process',
  ],
  category: 'Processing method',
  subcategory: 'Cereal milling',
  processingClass: 'milling',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Maize dry milling separates the kernel into endosperm, germ, and bran before reducing anything. Taking the germ out whole is what makes the rest of the process possible — a crushed germ would put its oil through everything.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The maize kernel carries a germ far larger, relative to its size, than the germ of a wheat kernel, and that germ is full of oil. Any process that shatters it distributes that oil through everything else, which is precisely what a hammer mill does and precisely why hammer-milled maize meal is a single whole-grain product with a limited shelf life. Dry milling takes the opposite approach: get the germ out first, intact, and the kernel’s remaining fractions become separable and stable.',
    },
    {
      type: 'paragraph',
      text: 'Degerming is therefore not one step among several — it is the step the rest depends on. The kernel is tempered so that the germ and bran become tough and pliable while the endosperm stays brittle, then worked in a way that tears the germ loose and knocks the bran off without crushing either. What emerges is a mixture of intact germ, bran flakes, and broken endosperm pieces, three materials that differ enough in size and density to be sorted. Everything after degerming is sorting and reduction; everything before it exists to make degerming work.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Milling — mechanical separation followed by reduction',
    },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Input', value: 'Maize grain (tempered before degerming)' },
    {
      label: 'Primary output',
      value: 'Cornmeal — the reduced endosperm fraction',
    },
    {
      label: 'Co-product',
      value: 'Maize germ, recovered intact for oil extraction',
    },
    {
      label: 'By-product',
      value: 'Maize bran, with established feed and food-fibre uses',
    },
    {
      label: 'Governing principle',
      value:
        'Tempering makes germ and bran tough while endosperm stays brittle — degerming exploits the difference',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Dry milling exists to turn one commodity into three products that are each worth more apart than together. Endosperm free of germ oil keeps far longer and behaves predictably in food use; germ recovered intact is a feedstock for oil; bran is a fibre and feed material. Hammer milling the same kernel produces one meal worth less than the sum of those streams — the whole economic case for dry milling is the separation, and the separation stands or falls on the germ coming out whole.',
        },
        {
          type: 'paragraph',
          text: 'The principle is a deliberately manufactured difference in mechanical behaviour. Dry maize does not separate: germ, bran, and endosperm are all brittle and all shatter together. Adding water changes that, because the germ and the bran take up moisture faster than the dense endosperm does. For a period, the kernel holds two materials in different states at once — a tough, leathery germ and bran around a still-brittle endosperm. The degermer works the kernel in that window, and the fractions part instead of shattering.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why the germ must survive intact',
          text: 'An intact germ is both a product and a separation aid. Whole, it is large and distinctively shaped, so size and density sorting can lift it out of the endosperm stream. Crushed, it is neither: the pieces fall into the same size range as endosperm and cannot be sorted from it, and their oil smears through the meal it should have left. A degerming failure is not a lost germ stream — it is a contaminated endosperm stream as well.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Three streams leave a dry mill, and the split between them is a commercial decision as much as a technical one. Where the endosperm is cut and how finely it is reduced determines the range of meals, grits, and flours a plant offers, and each of those sits against a different market. Germ and bran are genuine outputs with established markets — the germ goes to oil extraction and the bran to feed and food-fibre use — not residues to dispose of.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cornmeal',
              description:
                'The reduced endosperm. The primary product, specified by particle size, colour, and fat content — the last of which is the direct measure of how well degerming worked.',
            },
            {
              term: 'Maize germ',
              description:
                'The embryo, recovered intact and sold as the feedstock for maize oil. A co-product whose value depends on it arriving whole and with its oil unspoiled.',
            },
            {
              term: 'Maize bran',
              description:
                'The separated outer layers, carrying the kernel’s fibre. A by-product with established animal-feed and food-fibre uses.',
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
          text: 'Fat content in the meal is the number that tells the story, because in a dry mill fat means germ. A meal carrying more fat than its specification allows is a meal the degermer failed to clean, and it will not keep. Colour is the other characteristic measure, and like protein in wheat it arrives with the grain rather than being created by the mill.',
        },
        {
          type: 'paragraph',
          text: 'The losses are the familiar ones of any separation plant, in both directions. Endosperm leaving with the germ or the bran is yield walking out in a lower-value stream; germ or bran fragments left in the meal are a quality fault in the highest-value one. Between them sits the mill’s real decision: how hard to push the separation, knowing that pushing harder in one direction always costs something in the other.',
        },
        {
          type: 'list',
          items: [
            'Germ crushed during degerming, putting oil into the endosperm stream and destroying the germ stream at once',
            'Endosperm carried out with the germ or the bran — yield lost to lower-value streams',
            'Bran specks and germ fragments left in the meal, raising fat and darkening colour',
            'Over-reduction producing more fine flour than the intended grit and meal fractions',
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
          text: 'Dry milling adds water at tempering and is energy-demanding through reduction and the air handling that classification depends on. Its material flow is close to fully valorised: endosperm to food, germ to oil, bran to feed and fibre. Unlike wet milling, it consumes comparatively little process water and generates no steepwater stream — a difference in configuration and in what each process is for, not a basis for calling one preferable without comparable evidence.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Grain dust is explosive',
          text: 'Suspended grain and meal dust is a recognised explosion hazard, and a dry mill generates it throughout degerming, classification, and reduction. Dust control, ignition management, and explosion protection are matters for qualified engineers and the applicable regulation. This entry describes what the process does and why; it is not an operating instruction and gives no tempering, moisture, or equipment settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'maize-grain' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'cornmeal' }],
  coProductOutputs: [{ type: 'commodity-product', slug: 'maize-germ' }],
  byProductOutputs: [{ type: 'commodity-product', slug: 'maize-bran' }],
  processObjective:
    'Separate the maize kernel into endosperm, germ, and bran — recovering the germ intact so its oil does not contaminate the meal — and reduce the endosperm to cornmeal and related fractions.',
  operatingPrinciple:
    'Tempering water is taken up faster by the germ and bran than by the dense endosperm, so for a period the germ and bran are tough and pliable while the endosperm remains brittle. Degerming works the kernel in that state, tearing the germ loose and knocking the bran away without crushing either. The resulting mixture of intact germ, bran flakes, and endosperm pieces is then sorted by size and density, and the endosperm fraction is reduced to meal.',
  physicalOrBiochemicalBasis:
    'Purely mechanical, resting on a moisture-induced difference in fracture behaviour between kernel fractions, followed by classification on size and density. No chemical or biochemical change is intended.',
  qualityEffects: [
    'Determines how much germ oil remains in the meal, and therefore its fat content and keeping quality',
    'Germ value depends on the germ being recovered intact and with its oil unspoiled',
    'Particle size and the balance of grit, meal, and flour fractions are set at reduction',
    'Cannot improve the colour or soundness of the incoming maize',
  ],
  measurableParameters: [
    'Meal fat content',
    'Particle size',
    'Meal colour',
    'Moisture after tempering',
    'Germ recovery',
    'Extraction rate',
  ],
  lossPoints: [
    'Germ crushed at degerming, contaminating the endosperm stream and destroying the germ stream',
    'Endosperm carried out with the germ or bran streams',
    'Over-reduction of endosperm into fractions finer than intended',
    'Dust losses at aspiration and transfers',
  ],
  environmentalContext:
    'Energy-demanding through reduction and air handling, and water is added at tempering. The material flow is close to fully valorised: endosperm to food, germ to oil extraction, bran to feed and food-fibre use. Process water demand and effluent load differ markedly from maize wet milling, which is a difference in what the two processes are for rather than a ranking of them.',
  safetyLimitations: [
    'Suspended grain and meal dust is a recognised explosion hazard; dry mills require engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Degermers, mills, and classifiers contain rotating machinery and nip points; guarding and isolation are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'Tempering and the handling of moist grain bear on microbial and mycotoxin risk, which is managed under the facility’s food-safety system and applicable regulation rather than by any description here.',
    'This entry is an educational reference, not an operating instruction: it gives no tempering times, moisture targets, temperatures, or equipment settings.',
  ],
  jurisdictionalLimitations: [
    'Compositional and labelling standards for cornmeal, grits, and degermed products, including fortification requirements, are set by the applicable food authority and differ by jurisdiction.',
    'Mycotoxin limits for maize and maize products are jurisdiction-specific and are set by the applicable food authority.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'destoning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'quality-attribute', slug: 'oil-content' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'colour' },
    { type: 'quality-attribute', slug: 'kernel-hardness' },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Maize milling and product definitions' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Maize dry milling and degerming research',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Maize kernel quality and end-use processing context',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Maize processing and product market context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Plant configuration and the range of meal, grit, and flour fractions offered vary with maize type, end use, and jurisdiction.',
  limitations: [
    'A reference description of the process, not a milling specification or operating instruction.',
    'No tempering moistures, temperatures, times, extraction rates, or fat figures are given — they are plant-, hybrid-, and contract-specific.',
    'Describes dry milling only. Maize wet milling is a different process yielding starch and different co-products, and is not covered here.',
    'Cornmeal from this process is degermed; it shares a name but not a specification with the whole-grain meal a hammer mill produces.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Maize Dry Milling: Degerming and Separation',
    description:
      'How maize dry milling tempers and degerms the kernel to separate cornmeal, germ, and bran, and why recovering the germ intact makes the streams separable.',
    keywords: [
      'maize dry milling',
      'corn dry milling',
      'degerming',
      'cornmeal',
      'maize germ',
    ],
  },
  structuredData: { article: true },
};
