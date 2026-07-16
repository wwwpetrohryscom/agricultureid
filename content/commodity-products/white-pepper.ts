import type { CommodityProductContent } from '@/types/content';

export const whitePepper: CommodityProductContent = {
  id: 'commodity-product-white-pepper',
  slug: 'white-pepper',
  contentType: 'commodity-product',
  title: 'White Pepper',
  alternativeNames: [
    'Whole white pepper',
    'Decorticated pepper',
    'Muntok pepper',
  ],
  category: 'Processed spice product',
  subcategory: 'Decorticated berry spice',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'black-pepper-corns' },
  physicalForm: 'seed',
  summary:
    'White pepper is the pepper berry with its outer fruit wall removed: riper berries steeped in water until the pericarp can be rubbed off, leaving the pale seed to be dried. It is the same fruit as black pepper taken down a different processing route, and it trades as a distinct product with its own grades and prices.',
  introduction: [
    {
      type: 'paragraph',
      text: 'White pepper is made from the berries of the black pepper vine — the same species, and often the same plantings, that supply black pepper. The berries are picked riper, steeped in water for several days until the fleshy outer fruit wall breaks down, then rubbed and washed to strip that wall away. The pale seed left behind is dried, and that is white pepper.',
    },
    {
      type: 'paragraph',
      text: 'It is worth being precise about what this product is and is not, because the point is widely misunderstood. White pepper is not a different species, not a different cultivar, and not bleached black pepper. It is decorticated pepper — the berry with its skin removed — and the removal is the entire difference between the two products. This entry sits alongside the black peppercorn commodity page, which describes the harvested berry itself.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of pepper processing' },
    {
      label: 'Made from',
      value: 'Berries of the black pepper vine (Piper nigrum)',
    },
    {
      label: 'Defining operation',
      value: 'Retting and decortication — removing the outer fruit wall',
    },
    {
      label: 'What is traded',
      value: 'The inner seed, washed and dried, without the pericarp',
    },
    {
      label: 'Flavour consequence',
      value: 'Pungency retained; much of the aroma of the fruit wall is lost',
    },
    {
      label: 'Companion product',
      value: 'Black pepper — the same berries dried whole with the pericarp on',
    },
  ],
  sections: [
    {
      id: 'how-it-is-made',
      heading: 'Retting and decortication',
      body: [
        {
          type: 'paragraph',
          text: 'The berries for white pepper are left on the spike longer than those destined for the black trade, until they are fully developed and colouring. They are then steeped in water — traditionally in sacks in a running stream or a tank, over roughly a week — while microbial action and simple soaking break down the fleshy pericarp. Once it has softened enough, the fruit wall is rubbed away by hand or machine, and the freed seeds are washed clean and spread to dry.',
        },
        {
          type: 'paragraph',
          text: 'The steeping is the hard part of the process and the source of most of what goes wrong with the product. It is a fermentation, and an uncontrolled one: run too long or in dirty water it produces the off-odour that white pepper is sometimes criticised for, and it carries a microbiological load into a product that will not be cooked before use. Retting hygiene and water quality are therefore central quality determinants for this product, in a way that has no equivalent on the black pepper side.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Decorticated, not bleached',
          text: 'White pepper is pale because the dark fruit wall has been physically removed, exposing the naturally light-coloured seed. It is not black pepper that has been whitened, and no bleaching step is what defines the product.',
        },
      ],
    },
    {
      id: 'why-distinct',
      heading: 'Why it is a distinct traded product',
      body: [
        {
          type: 'paragraph',
          text: 'Removing the pericarp removes a real part of the spice. The fruit wall carries much of pepper’s aromatic complexity, while the pungency principle sits mainly in the seed — so white pepper is not a milder or a paler black pepper but a differently balanced one: still hot, with a narrower and distinctly different aroma, and carrying a fermented note from the retting that some cuisines actively want and others avoid.',
        },
        {
          type: 'paragraph',
          text: 'That is why the two are not substitutes. Buyers choose white pepper deliberately — for pale sauces and light-coloured foods where black specks are unwanted, and for the flavour profile itself, which is standard in several cuisines rather than a compromise. White pepper is bought against its own grade descriptions, at its own price, and typically at a premium over black, reflecting the extra processing, the weight lost with the pericarp, and its own supply.',
        },
      ],
    },
    {
      id: 'classification-note',
      heading: 'A note on classification and naming',
      body: [
        {
          type: 'paragraph',
          text: 'White pepper is classed here as a co-product of the pepper berry rather than a primary product, on the reasoning that both black and white pepper are deliberate, valuable, marketed outputs of the same harvested fruit, with neither residual to the other. The modelling has one honest imperfection worth stating: black and white pepper are not produced simultaneously from a single operation the way meal and oil come off one crush. They are alternative routes, chosen berry by berry and lot by lot before processing begins.',
        },
        {
          type: 'paragraph',
          text: 'The naming is a further trap. Trade names for white pepper commonly reference an origin or a port rather than a grade in any technical sense, and as with black pepper the grade descriptions in force are origin-specific rather than universal. Notably, whole white and whole black pepper share a customs subheading despite being separate commercial products, so classification codes will not distinguish them.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No grade or contaminant figures are given here',
          text: 'Moisture, bulk density, piperine and volatile-oil content, and microbiological criteria for white pepper are set by the applicable standard, origin grade description, and contract. AgricultureID does not publish figures; consult the standard in force and the applicable food-safety authority.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Dried white pepper is a durable, ambient-stable commodity that ships in bags and containers without refrigeration, and the constraints on it are much the same as for black: keep it dry, keep storage insects out, and accept that volatile aroma is lost slowly over time and rapidly once the corn is ground. It carries one additional exposure. Stripped of the pericarp that armoured the black corn, and having passed through a wet fermentation, white pepper is more vulnerable to microbiological problems and to mould if it is inadequately dried or takes moisture back up in store.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  majorQualityAttributes: [
    'Colour and freedom from dark specks of residual pericarp',
    'Bulk density',
    'Piperine content',
    'Volatile oil content',
    'Moisture content',
    'Off-odour from retting and microbiological condition',
  ],
  processContext:
    'Produced by steeping riper pepper berries in water until the pericarp breaks down, rubbing and washing the fruit wall away, then drying the freed seed; retting hygiene and water quality largely determine the quality of the result.',
  storageContext:
    'Durable and ambient-stable in bags and containers when kept dry; more exposed than black pepper to mould and microbiological problems because the protective pericarp is gone and the product has been through a wet fermentation.',
  commodityCodes: [
    {
      system: 'HS',
      code: '0904.11',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Pepper of the genus Piper, neither crushed nor ground — the same subheading as whole black pepper, which the code does not distinguish from white.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'black-pepper' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'White pepper processing, retting practice, and spice trade context',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Retting and decortication of pepper berries and resulting quality differences',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Microbiological and mould hazards associated with wet-processed dried spices',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global trade; production concentrated in the humid tropics. Grade descriptions are origin-specific and classification codes are versioned.',
  limitations: [
    'This is a reference description of the product, not a processing specification, grading determination, or food-standards compliance statement.',
    'No moisture, density, piperine, volatile-oil, or microbiological figures are given here — they belong to the origin grade description, the applicable standard, and the contract.',
    'Modelling white pepper as a co-product is a commercial judgement: black and white pepper are alternative processing routes for the same berries rather than simultaneous outputs of one operation.',
    'Trade names for white pepper often reference origin or port rather than a technical grade; confirm what a name means in the contract.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'White Pepper: The Decorticated Pepper Co-Product',
    description:
      'White pepper as a commodity product: retting and decortication of the same berries as black pepper, the flavour it gains and loses, and why it trades apart.',
    keywords: [
      'white pepper',
      'decorticated pepper',
      'pepper retting',
      'black versus white pepper',
      'muntok pepper',
    ],
  },
  structuredData: { article: true },
};
