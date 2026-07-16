import type { CommodityProductContent } from '@/types/content';

export const cottonLinters: CommodityProductContent = {
  id: 'commodity-product-cotton-linters',
  slug: 'cotton-linters',
  contentType: 'commodity-product',
  title: 'Cotton Linters',
  alternativeNames: ['Linters', 'Cotton fuzz fibre', 'Delinted fibre'],
  category: 'Processing by-product',
  subcategory: 'Short cotton fibre recovered after ginning',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'cottonseed' },
  physicalForm: 'fibre',
  summary:
    'Cotton linters are the short fuzz fibres the gin leaves behind on the seed, cut off later at the oil mill. Too short to spin, they are among the purest natural cellulose available, and that purity — not their length — is what they are bought for.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A cotton seed grows two kinds of fibre. The long ones — the lint — are what a gin pulls off and bales, and they are the cotton commodity. Beneath them lies a coat of much shorter fibres that the gin saws cannot get, and the seed leaves the gin still wearing it. Those short fibres are linters, and they are recovered later, at the oil mill, by machines that shave the seed closer than a gin ever could.',
    },
    {
      type: 'paragraph',
      text: 'They are useless for spinning: no textile process can make yarn from fibre that short. What they are is cellulose, at a purity that no other agricultural material easily matches, arriving already cleaned and collected. That is why linters ended up as a chemical raw material rather than a textile one, and why they are in banknotes, photographic film, sausage casings, and cotton wool.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of the ginning chain' },
    {
      label: 'Physically removed from',
      value: 'The cottonseed, at the oil mill',
    },
    { label: 'Defined by', value: 'What the gin’s lint stream left behind' },
    { label: 'Recovered by', value: 'Delinting, usually in successive cuts' },
    { label: 'Key property', value: 'Very high cellulose purity' },
    {
      label: 'Not usable for',
      value: 'Spinning — the fibres are far too short',
    },
    {
      label: 'Principal uses',
      value: 'Chemical cellulose, absorbents, and speciality paper',
    },
  ],
  sections: [
    {
      id: 'where-they-come-from',
      heading: 'Where linters come from, and how this page models them',
      body: [
        {
          type: 'paragraph',
          text: 'It is worth being precise, because the physical route and the commercial logic point in slightly different directions. Linters are not taken off a bale of lint. They are cut from the seed — the other stream leaving the gin — in a separate operation at a separate site, usually the oil mill that is about to crush that seed for oil, and they are recovered in successive passes known as cuts.',
        },
        {
          type: 'paragraph',
          text: 'AgricultureID nonetheless models linters as a by-product of cotton lint, and the reasoning is that linters are defined entirely by the lint stream: they exist as a category only because ginning did not take them. A saw gin is built to remove the long fibre and cannot reach the fuzz, and what it leaves is what a linter is. Cut the definition any other way and linters are simply "cotton fibre" — it is the gin’s boundary that makes them a distinct commodity at all.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'An honest note on the pathway',
          text: 'Linters are modelled here as a by-product of cottonseed, because that is where they physically come from: they are cut from the seed at the oil mill, not shaved off baled lint. Ginning is what creates the category — linters are, by definition, the fibre too short for the gin to take — but the seed is the material they are removed from, and the model follows the physical route rather than the naming.',
        },
      ],
    },
    {
      id: 'delinting',
      heading: 'Delinting and the cuts',
      body: [
        {
          type: 'paragraph',
          text: 'Delinting machines take the fuzzy seed as it arrives from the gin and cut the fibre from it with closely set saws. The work is done in stages, and the stages produce genuinely different products. The first cut takes the longest of the remaining fibres and yields the most fibrous, least pure material; later cuts take progressively shorter fibre and produce the shortest, purest cellulose. Mills sell the cuts separately, because their buyers want different things.',
        },
        {
          type: 'paragraph',
          text: 'The operation serves the seed as much as the fibre. A crusher wants a clean, hulled seed, and residual fuzz interferes with hulling and with oil extraction, so delinting would be done even if the linters themselves had no market. That is part of what makes them a by-product in the true sense: the process would run regardless, and the fibre is value recovered from a step taken for another reason.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'What linters are used for',
      body: [
        {
          type: 'paragraph',
          text: 'Almost every use of linters turns on cellulose purity. Cotton fibre is nearly pure cellulose to begin with — far purer than wood, which must be pulped hard to remove lignin — so linters give chemical manufacturers a feedstock that starts where wood pulp finishes. Purified linters are the base for cellulose derivatives: acetate, nitrocellulose, carboxymethylcellulose, and viscose among them.',
        },
        {
          type: 'list',
          items: [
            'Chemical cellulose — the feedstock for cellulose acetate, nitrocellulose, and other derivatives',
            'Absorbent products — cotton wool, swabs, and medical and hygiene absorbents',
            'Speciality papers — including banknote and security papers, where cotton fibre gives durability',
            'Food and pharmaceutical cellulose ingredients',
            'Padding, batting, and filling for furniture and mattresses',
            'Mulch, filler, and lower-grade uses for the coarsest cuts',
          ],
        },
        {
          type: 'paragraph',
          text: 'The banknote use is the one people find surprising and it follows directly from the material: paper made with cotton fibre survives folding, crumpling, and washing in a way wood-pulp paper does not. The security paper trade has drawn on cotton fibre, including linters, for a very long time for exactly that reason.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Linters are bought on the cut they came from, cellulose purity, colour, fibre length, and freedom from trash, hull fragments, and motes. Chemical buyers are the most demanding on purity and the least interested in length; absorbent and padding users care about colour and bulk; paper makers care about fibre length. The specifications belong to the buyer, and no general grade table is reproduced here.',
        },
        {
          type: 'paragraph',
          text: 'Handling resembles that of lint. Linters are baled for transport and storage, kept dry — damp fibre yellows and moulds — and treated with respect for fire, since a warehouse of compressed short cellulose fibre is exactly the material a fire wants. Dust is a bigger issue than with lint, because the fibre is shorter and carries more fine material.',
        },
      ],
    },
  ],
  primaryUses: ['industrial'],
  secondaryUses: ['fibre'],
  majorQualityAttributes: [
    'Cut (first, second, or later)',
    'Cellulose purity',
    'Fibre length',
    'Colour',
    'Trash, hull, and mote content',
    'Moisture content',
  ],
  processContext:
    'Recovered at the oil mill by delinting the fuzzy cottonseed that leaves the gin, in successive cuts that yield progressively shorter and purer fibre; the step is required to prepare the seed for hulling and crushing regardless of the fibre’s value.',
  storageContext:
    'Baled and stored dry under cover; damp linters yellow and mould, dust is a persistent handling issue, and compressed cellulose fibre in bulk carries a serious fire risk.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1404.20',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cotton linters. Notably, linters are classified in Chapter 14 with other vegetable products rather than with cotton in Chapter 52, which reflects their use as a material rather than a textile fibre.',
    },
  ],
  connections: [{ type: 'crop', slug: 'cotton' }],
  relatedTopics: [{ type: 'commodity', slug: 'seed-cotton' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Cotton linters as a by-product of the cotton chain and their industrial uses',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Delinting, linter cuts, and cotton fibre purity',
    },
    {
      sourceId: 'britannica',
      citedFor:
        'Cotton linters as a chemical cellulose source and their applications',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global cotton-processing regions. Buyer specifications and permitted uses in food and pharmaceutical applications are jurisdiction-specific.',
  limitations: [
    'This is a reference description of a by-product, not a chemical, paper, or food-grade specification.',
    'No cellulose purity figures, fibre lengths, cut yields, or recovery rates are given here — they are mill- and buyer-specific.',
    'Linters are defined by ginning (they are the fibre the gin leaves behind) but are physically cut from the seed at the oil mill; this entry therefore models them as a by-product of cottonseed rather than of cotton lint.',
    'Cut naming and grading conventions differ between mills and markets; no grade tables are reproduced.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cotton Linters: Short Fibre Left After Ginning',
    description:
      'Cotton linters as a by-product: the fuzz the gin cannot reach, cut from the seed at the oil mill, and why near-pure cellulose puts them in banknotes.',
    keywords: [
      'cotton linters',
      'delinting',
      'chemical cellulose',
      'linter cuts',
      'cotton by-product',
    ],
  },
  structuredData: { article: true },
};
