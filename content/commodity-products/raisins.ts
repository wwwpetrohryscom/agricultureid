import type { CommodityProductContent } from '@/types/content';

export const raisins: CommodityProductContent = {
  id: 'commodity-product-raisins',
  slug: 'raisins',
  contentType: 'commodity-product',
  title: 'Raisins',
  alternativeNames: ['Dried grapes', 'Sultanas', 'Currants (dried vine fruit)'],
  category: 'Primary processed product',
  subcategory: 'Dried vine fruit',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'table-grapes' },
  producedBy: [{ type: 'processing-method', slug: 'fruit-drying' }],
  physicalForm: 'other',
  summary:
    "Raisins are grapes with their water removed — the oldest solution to the vine fruit's perishability. Drying converts a bunch that needs a cold chain and a fortnight into a shelf-stable commodity that travels anywhere and keeps for a year.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Raisins are dried grapes, and the transformation is more consequential than it sounds. A fresh bunch is one of the more demanding items in the produce trade: precooled, refrigerated, packed to prevent shatter, watched for stem browning, and finished within weeks. Take the water out and every one of those constraints disappears. The same fruit becomes a dry, dense, ambient-stable commodity that ships in ordinary containers and keeps for a year or more.',
    },
    {
      type: 'paragraph',
      text: 'The fruit is essentially the same fruit. Seedless cultivars dominate the dried trade for the obvious reason, and they are largely the same seedless cultivars sold fresh as table grapes — which is why a vineyard block can serve either market, and why the decision between them is often made on price and on how the season went rather than on what was planted.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of grape drying' },
    {
      label: 'Made from',
      value: 'Table grapes (Vitis vinifera), predominantly seedless cultivars',
    },
    {
      label: 'What drying achieves',
      value: 'Converts a cold-chain perishable into a shelf-stable good',
    },
    {
      label: 'Drying routes',
      value: 'Sun drying on trays or on the vine, and mechanical dehydration',
    },
    {
      label: 'Named types',
      value:
        'Distinguished by cultivar, drying method, and treatment before drying',
    },
    {
      label: 'Principal uses',
      value: 'Eaten as dried fruit and used in bakery and confectionery',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What raisins are',
      body: [
        {
          type: 'paragraph',
          text: 'Drying removes water until the sugar concentration in what remains is high enough that microorganisms cannot grow in it — the fruit preserves itself by becoming too sweet to spoil, the same principle that makes the ripest dates shelf-stable. The sugars, acids, and minerals of the grape are all still there; they are simply no longer diluted.',
        },
        {
          type: 'paragraph',
          text: 'The dried vine fruit trade uses a vocabulary that confuses outsiders, because its names mix up cultivar, method, and treatment rather than following any one system. Sultanas, raisins, and currants are distinguished in the trade by the cultivar used and by how the fruit was treated and dried, and the same term does not always mean the same thing in different markets. What is consistent is that the name signals cultivar and process together.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The same cultivars, two destinies',
          text: 'Seedless grapes grown for drying and seedless grapes sold fresh are frequently the same cultivars from the same regions. This is why raisins are modelled as a product of table grapes rather than of a separate commodity — the fresh fruit is the input.',
        },
      ],
    },
    {
      id: 'drying-methods',
      heading: 'Drying methods',
      body: [
        {
          type: 'paragraph',
          text: 'Sun drying is the classic route: bunches are cut and laid on trays or on paper between the vine rows, and the sun does the work over a period of weeks. It is cheap and it produces the darker, characteristically flavoured fruit many markets prefer, but it is a gamble against the weather — rain on drying fruit causes mould, splitting, and loss, and the crop is exposed for the whole time it takes.',
        },
        {
          type: 'paragraph',
          text: "Dehydration in tunnels or chambers removes the weather from the equation at the cost of energy and capital. A third route, dry-on-the-vine, cuts the fruiting canes and lets the bunches dry while still hanging, which mechanises harvest and keeps the fruit off the ground. Fruit destined for the pale golden types is treated before drying — dipped to break the skin's waxy layer so water escapes faster, and in some cases sulphured to preserve colour, with permitted treatments varying by market.",
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No drying or moisture figures here',
          text: 'Drying times, target moisture, dipping formulations, and permitted sulphite treatments and residues are set by product standards, contracts, and food authorities. AgricultureID publishes no figures; consult the rules in force.',
        },
      ],
    },
    {
      id: 'quality-and-storage',
      heading: 'Quality and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Raisins are graded on size, colour, moisture, texture, and defect incidence — sugared or crystallised fruit, mould, damaged and immature berries, capstems left attached, and foreign material. Moisture sits at the centre of it: too moist and the fruit moulds and ferments in the pack, too dry and it goes hard, dark, and unpalatable. Ochratoxin is a documented concern for dried vine fruit and is regulated, with the risk originating in mould growth on the fruit during drying rather than in storage afterwards.',
        },
        {
          type: 'list',
          items: [
            'Mould and fermentation in fruit dried in poor weather or packed too moist',
            'Sugaring — sugar crystallising out on or in the fruit during storage',
            'Immature and undersized berries in the lot',
            'Capstems and foreign material carried through from harvest',
            'Excessive darkening and hardening in over-dried fruit',
            'Insect infestation in stored fruit',
          ],
        },
        {
          type: 'paragraph',
          text: 'Once correctly dried, raisins store at ambient temperature in bags, cartons, and bulk, and cold storage is used to preserve colour and texture rather than to prevent spoilage. Sugar-rich stored fruit attracts stored-product insects, so hygiene and monitoring in store are routine — the same problem the date trade has, and for the same reason.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Raisins are eaten as dried fruit, packed for retail and in snack formats, and used heavily as a bakery and confectionery ingredient — in breads, cakes, biscuits, and breakfast cereals — where their sweetness and their stability both matter. They go into savoury cooking across many cuisines, and smaller volumes are used in brewing and distilling and as a natural sweetening ingredient in processed foods.',
        },
        {
          type: 'list',
          items: [
            'Food — retail dried fruit and snack formats',
            'Food — a bakery, cereal, and confectionery ingredient',
            'Food — savoury culinary use and as a fruit-derived sweetener',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['beverage'],
  majorQualityAttributes: [
    'Moisture content',
    'Berry size and uniformity',
    'Colour and its evenness',
    'Texture and pliability',
    'Freedom from mould, sugaring, and capstems',
    'Freedom from foreign material and infestation',
  ],
  processContext:
    'Produced by drying fresh grapes in the sun on trays or on the vine, or by mechanical dehydration; pale types are dipped, and sometimes sulphured, before drying to speed water loss and preserve colour.',
  storageContext:
    'Shelf-stable at ambient temperature in bags, cartons, and bulk once correctly dried; cold storage protects colour and texture, and stored-product insects are the standing threat.',
  connections: [
    { type: 'crop', slug: 'grape' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Dried vine fruit production, drying methods, and trade',
    },
    {
      sourceId: 'usda',
      citedFor: 'Raisin grade attributes, types, and defect vocabulary',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Raisin market and dried fruit processing stream context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Product standards, type naming, permitted treatments, and mycotoxin limits are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a drying specification, grading determination, or food-safety compliance statement.',
    'No moisture targets, drying times, treatment formulations, or ochratoxin limits are given here.',
    'Type names for dried vine fruit differ between markets and do not map consistently onto cultivars or methods; confirm the definitions in the market concerned.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Raisins: Dried Grapes as a Storable Product',
    description:
      'Raisins as the primary dried product of table grapes: sun, vine and tunnel drying, dipping and sulphuring, why moisture governs quality, and storage behaviour.',
    keywords: [
      'raisins',
      'dried grapes',
      'sultanas',
      'grape drying',
      'dried vine fruit',
    ],
  },
  structuredData: { article: true },
};
