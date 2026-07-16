import type { CommodityProductContent } from '@/types/content';

export const cream: CommodityProductContent = {
  id: 'commodity-product-cream',
  slug: 'cream',
  contentType: 'commodity-product',
  title: 'Cream',
  alternativeNames: ['Dairy cream', 'Separated cream', 'Milk fat stream'],
  category: 'Dairy separation co-product',
  subcategory: 'Fluid dairy stream',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'raw-cow-milk' },
  physicalForm: 'liquid',
  summary:
    'Cream is the fat-rich stream obtained when whole milk is centrifugally separated, produced simultaneously with skim milk. It concentrates the milk fat into a smaller volume, and it is both a product in its own right and the feedstock for butter and other fat-based dairy products.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cream is the fat-enriched output of milk separation. Left to stand, whole milk will slowly throw a cream layer of its own accord, because fat globules are less dense than the surrounding liquid and rise — the phenomenon the trade exploited long before centrifuges existed. Modern separation does the same thing by force and in seconds, splitting incoming milk into a cream stream and a skim stream at the same moment.',
    },
    {
      type: 'paragraph',
      text: 'The commercial point of cream is concentration. Milk fat is the component that carries flavour, texture, and much of the value in dairy, and it is dispersed thinly through a large volume of water. Cream gathers it into a fraction of that volume, which makes the fat storable, transportable, and workable into products in a way it is not while dissolved through whole milk.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of milk separation' },
    { label: 'Made from', value: 'Raw cow milk' },
    {
      label: 'Produced by',
      value: 'Centrifugal separation — yields cream and skim simultaneously',
    },
    {
      label: 'Carries',
      value: 'The milk fat, concentrated into a much smaller volume',
    },
    { label: 'Companion stream', value: 'Skim milk' },
    {
      label: 'Principal destinations',
      value: 'Butter manufacture, cream products, and standardisation',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What cream is',
      body: [
        {
          type: 'paragraph',
          text: 'Cream remains an emulsion of fat in an aqueous phase — the same architecture as milk, with the proportions shifted. This matters, because it means cream is still mostly water even when it is called fat-rich, and it still contains protein, lactose, and minerals. Its behaviour is governed by the fat globules and the membrane that surrounds each one, and most of what cream does in a kitchen or a factory is a consequence of what those globules do when they are handled.',
        },
        {
          type: 'paragraph',
          text: 'Cream is not a single specification but a family defined by fat content, and where the boundaries fall — and what each type may be called — is set by product standards in each jurisdiction rather than by the separator. The separator hits a target; the name attaches afterwards.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Simultaneous, not sequential',
          text: 'Cream and skim milk are produced in the same operation, from the same milk, at the same instant. Neither is a residue of the other, which is why both are modelled as co-products of raw milk rather than one being derived from the other.',
        },
      ],
    },
    {
      id: 'why-it-behaves-as-it-does',
      heading: 'Why cream behaves as it does',
      body: [
        {
          type: 'paragraph',
          text: 'Two behaviours define cream in use, and both come from the fat globules. Whipping incorporates air and works partially crystallised fat into a network that holds bubbles in place — which is why whipping depends on cream being cold enough for some of the fat to be solid, and why a warm cream will not hold. Churning takes the same instability further: sustained agitation ruptures the globule membranes and the fat coalesces, inverting the emulsion into butter and releasing buttermilk.',
        },
        {
          type: 'paragraph',
          text: 'The practical consequence is that cream is fragile in handling in a specific mechanical sense. Pumping, agitation, and air incorporation can partially destabilise it, and a cream that has been roughly treated may thicken, granulate, or churn where it was not meant to. This is not spoilage; it is the product doing what it is built to do, in the wrong place.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses and destinations',
      body: [
        {
          type: 'list',
          items: [
            'Butter manufacture — the largest single destination for surplus cream',
            'Retail and catering creams, sold at defined fat contents',
            'Recombination into standardised fluid milks',
            'Ice cream, cream cheese, and other fat-rich dairy products',
            'Anhydrous milk fat and butter oil for the ingredient trade',
          ],
        },
        {
          type: 'paragraph',
          text: 'Whether cream is sold as cream or converted to butter is usually a balance question rather than a preference. A processor separating milk to standardise its fluid range generates cream as an arithmetic consequence, and the surplus has to go somewhere. Butter is the classic outlet because it concentrates the fat further into a form that stores and ships, and because it can absorb a variable stream without needing to match a retail order book.',
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Cream is perishable and is held chilled. Its concentrated fat brings a distinct vulnerability alongside the microbial one: milk fat picks up and holds odours readily, and it is subject to lipolysis and to oxidative change, so off-flavours can develop in cream that is microbiologically sound. Temperature history also determines the state of fat crystallisation, which is why cream intended for whipping or churning is held and tempered deliberately rather than simply kept cold.',
        },
        {
          type: 'paragraph',
          text: 'Because it is concentrated, cream travels better than the milk it came from — the same fat moves in a much smaller volume — but it remains a chilled liquid on a short clock. Long-distance trade in milk fat happens in butter and anhydrous milk fat, not in cream.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  majorQualityAttributes: [
    'Fat content',
    'Freedom from off-flavours and odour pick-up',
    'Microbiological condition',
    'Absence of premature destabilisation or churning',
    'Temperature history and fat crystallisation state',
  ],
  processContext:
    'Produced by centrifugal separation of whole milk to a target fat content, simultaneously with the skim stream; the fat content that defines each cream type is set by product standards, not by the separator.',
  storageContext:
    'Chilled and perishable; concentrated milk fat readily absorbs odours and is prone to lipolysis and oxidation, and temperature history governs the fat crystallisation on which whipping and churning depend.',
  commodityCodes: [
    {
      system: 'HS',
      code: '0401',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Milk and cream, not concentrated nor containing added sugar, at 4-digit heading level; subheadings separate by fat content. Butter and other fat-based products fall under different headings.',
    },
  ],
  connections: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'skim-milk' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Milk separation and the cream stream in dairy processing',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Dairy product item coverage and trade context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Cream and butterfat handling and market balance context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The fat contents that define named cream types, and the names themselves, are set by jurisdiction-specific product standards.',
  limitations: [
    'A reference description of the product — not a processing specification, recipe, or food-standards statement.',
    'No fat content values or category boundaries are given: cream types are defined by jurisdiction-specific standards and differ between markets.',
    'Composition and behaviour depend on the incoming milk and on handling history; no universal figures are stated.',
    'Butter, anhydrous milk fat, and other downstream products are made from cream but are not modelled as pathways on this page.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cream: Co-Product of Milk Separation',
    description:
      'Cream as a dairy co-product: how separation concentrates milk fat, why fat globules govern whipping and churning, its destinations, and how it must be handled.',
    keywords: [
      'cream',
      'dairy cream',
      'milk fat',
      'milk separation',
      'butter manufacture',
    ],
  },
  structuredData: { article: true },
};
