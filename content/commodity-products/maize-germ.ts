import type { CommodityProductContent } from '@/types/content';

export const maizeGerm: CommodityProductContent = {
  id: 'commodity-product-maize-germ',
  slug: 'maize-germ',
  contentType: 'commodity-product',
  title: 'Maize Germ',
  alternativeNames: ['Corn germ', 'Maize embryo', 'Degerminator germ'],
  category: 'Milling co-product',
  subcategory: 'Cereal germ',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'maize-grain' },
  physicalForm: 'other',
  summary:
    'Maize germ is the oil-bearing embryo separated during maize dry milling. It is a co-product with genuine value: it is the raw material for corn oil, and the meal left after extraction is a feed ingredient.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The maize germ is the embryo of the kernel, and it is unusually large — proportionally far bigger than the germ of wheat or rice, and where almost all of the kernel oil sits. Removing it is the first structural objective of maize dry milling, because leaving it in the meal would make the meal rancid within weeks. Having removed it, the mill has a concentrated, oil-rich stream on its hands with a well-established market.',
    },
    {
      type: 'paragraph',
      text: 'That combination makes germ a co-product rather than a by-product. It is separated deliberately and by design, it commands a real price, and it feeds a distinct downstream industry — corn oil extraction — rather than being disposed of into the nearest available outlet. The economics of a dry mill depend on it: germ value is a material part of what the mill earns from a tonne of maize.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of maize dry milling' },
    { label: 'Made from', value: 'Maize grain (Zea mays)' },
    { label: 'Fraction of the kernel', value: 'Germ (embryo)' },
    {
      label: 'Why it is removed',
      value: 'Its oil would turn the meal rancid if left in',
    },
    { label: 'Principal use', value: 'Corn oil extraction' },
    {
      label: 'What follows extraction',
      value: 'Corn germ meal, sold as a feed ingredient',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What maize germ is',
      body: [
        {
          type: 'paragraph',
          text: 'Degermination separates the germ from the endosperm by exploiting a difference in physical behaviour rather than by cutting it out. Tempering with water makes the germ tough and rubbery while the endosperm stays brittle, so a degerminator that shears the kernel breaks the endosperm into pieces while the germ survives largely intact. It can then be separated by size, density, and aspiration, because a whole germ behaves quite differently in an air stream from a chip of endosperm.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Dry-milled and wet-milled germ are not the same',
          text: 'Wet milling also recovers maize germ, by steeping the kernel and floating the germ off. Both streams feed oil extraction, but they differ in composition and handling. This entry describes the dry-milling co-product.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Germ goes to oil. It is pressed, solvent-extracted, or both, to recover corn oil, which is refined into a widely used cooking and food-manufacturing oil. What remains after the oil is taken out — corn germ meal — retains protein and fibre and is sold as a feed ingredient, so the stream is used twice over. Germ is also used directly in feed where oil extraction is not available or not economic, and stabilised germ appears as a food ingredient in a small way.',
        },
        {
          type: 'list',
          items: [
            'Oil — the principal raw material for corn oil extraction',
            'Feed — corn germ meal after extraction, and whole germ where extraction is not economic',
            'Food — stabilised germ as a minor ingredient',
          ],
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Germ is bought on oil content and on how cleanly it was separated: adhering endosperm and bran dilute the stream and lower its value to an extractor. Free fatty acid content matters too, and it is a moving target — germ carries active lipase alongside its oil, and once the kernel has been broken open the two are in contact. Germ that sits warm and damp before extraction degrades measurably, so the interval between the degerminator and the press is a quality variable in its own right.',
        },
        {
          type: 'paragraph',
          text: 'The same reasoning applies to storage. Germ is dried, kept cool, and moved on rather than held, and mycotoxins present in the incoming maize can partition into the germ fraction, so the safety status of the grain follows the stream. Bulk handling is straightforward — germ is light, flaky, and free-flowing — but its oil makes dust and residues in conveying equipment a housekeeping matter.',
        },
      ],
    },
  ],
  primaryUses: ['oil'],
  secondaryUses: ['feed', 'food'],
  majorQualityAttributes: [
    'Oil content',
    'Purity (adhering endosperm and bran)',
    'Free fatty acid content',
    'Moisture content',
    'Mycotoxin status',
  ],
  processContext:
    'Separated from the endosperm during maize dry milling: tempering toughens the germ so a degerminator can shear it off intact, after which size, density, and aspiration separate it from endosperm fragments.',
  storageContext:
    'Not a long-holding stream — dried, kept cool, and moved to extraction promptly, because active lipase raises free fatty acids once the kernel is opened.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1104.30',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Germ of cereals, whole, rolled, flaked or ground. The subheading covers cereal germ generally, not maize germ alone.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'cornmeal' },
    { type: 'commodity-product', slug: 'maize-bran' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Maize milling co-products and corn oil production',
    },
    {
      sourceId: 'usda',
      citedFor: 'Maize germ composition and its role in dry milling',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Maize processing streams and germ handling context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming, permitted uses, and mycotoxin limits are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not an extraction specification, feed formulation, or food-standards statement.',
    'No oil-content, free-fatty-acid, or composition figures are given — they vary with the mill, the maize, and the separation achieved.',
    'Wet-milled maize germ is a distinct stream with different composition and is not described here.',
    'Corn oil and corn germ meal are real downstream products but are not modelled as products of this page, which describes the germ itself.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Maize Germ: Co-Product of Corn Dry Milling',
    description:
      'Maize germ as a milling co-product: the oil-rich embryo removed by degermination, why it must come out, its route into corn oil, and why it cannot be stored.',
    keywords: [
      'maize germ',
      'corn germ',
      'degermination',
      'corn oil extraction',
      'milling co-product',
    ],
  },
  structuredData: { article: true },
};
