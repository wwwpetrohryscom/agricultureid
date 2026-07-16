import type { CommodityContent } from '@/types/content';

export const garlicBulbs: CommodityContent = {
  id: 'commodity-garlic-bulbs',
  slug: 'garlic-bulbs',
  contentType: 'commodity',
  title: 'Garlic Bulbs',
  alternativeNames: ['Dry garlic', 'Cured garlic', 'Garlic heads'],
  category: 'Vegetable commodity',
  subcategory: 'Cured bulb',
  commodityClass: 'vegetable',
  physicalForm: 'other',
  harvestedPart:
    'Bulb (a head of individual cloves enclosed in papery wrappers)',
  sourceCrop: { type: 'crop', slug: 'garlic' },
  summary:
    'Garlic bulbs are the lifted and cured heads of the garlic plant, each made up of separate cloves inside common papery wrappers. Like onions, garlic is cured after lifting to dry the neck and set the wrappers — and it is the intactness of those wrappers that carries the bulb through months of trade.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Garlic bulbs are the traded commodity of the garlic crop: heads lifted at maturity, cured, trimmed, graded, and packed. A garlic bulb is structurally unlike an onion despite the family resemblance — where an onion is one continuous bulb of concentric scales, a head of garlic is an assembly of discrete cloves, each in its own skin, held together on a basal plate inside several layers of shared outer wrapper.',
    },
    {
      type: 'paragraph',
      text: 'That structure governs how the commodity behaves. The bulb is sold whole but is used clove by clove, so a head that breaks apart in transit is a downgraded head; the wrappers do the work of holding it together and keeping water in. As with onions, storability is created after lifting rather than harvested with the crop. This entry covers the harvested and traded bulb; the growing of the crop is on the garlic crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Vegetable (cured bulb)' },
    { label: 'Parent crop', value: 'Garlic (Allium sativum)' },
    {
      label: 'Harvested part',
      value: 'Bulb — a head of cloves in shared papery wrappers',
    },
    {
      label: 'Defining post-harvest step',
      value: 'Curing — drying the neck, roots, and outer wrappers',
    },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric; the bulb does not ripen after lifting',
    },
    {
      label: 'Key quality attributes',
      value:
        'Wrapper intactness, compactness, clove fill, size, freedom from sprouting',
    },
    {
      label: 'Trade types',
      value:
        'Softneck and hardneck garlic, traded as distinct commercial types',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'The traded unit is the intact head. Inside it, cloves are arranged around the remains of the stem: in hardneck garlic around a stiff central stalk, in softneck garlic in overlapping layers with no rigid core. The distinction is commercial as well as botanical — softneck types are generally the longer-storing, machine-friendlier garlic of large-scale trade and the type that can be braided, while hardnecks are traded as a shorter-storing specialty with fewer, larger cloves.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Wrapper',
              description:
                'The shared papery leaves enclosing the whole head. They hold the cloves together, limit water loss, and are the single most visible grading attribute.',
            },
            {
              term: 'Clove',
              description:
                'An individual bulblet with its own skin. The head is sold whole but consumed clove by clove, so cloves that shed or loosen degrade the lot.',
            },
            {
              term: 'Compactness',
              description:
                'How tightly the cloves are held on the basal plate. A loose head breaks apart in handling and is downgraded.',
            },
          ],
        },
      ],
    },
    {
      id: 'lifting-and-curing',
      heading: 'Lifting and curing',
      body: [
        {
          type: 'paragraph',
          text: 'Garlic is lifted when the lower leaves have dried down but enough green remains above — a narrower window than most vegetables allow. Lift too early and the cloves are not filled and the wrappers are thin; leave it too late and the wrappers deteriorate in the soil and the head begins to split open, exposing bare cloves. A split, bare-cloved head is not a cosmetic problem: it has lost its packaging.',
        },
        {
          type: 'paragraph',
          text: 'Curing then dries the neck, the roots, and the outer wrappers, sealing the head and setting the skins that protect it. It is done in the field where the climate is dry enough, or under forced air where it is not, and it takes garlic longer than onions because the neck is denser and the head has more wrapper to dry through. Only after curing are the tops and roots trimmed back and the bulbs graded and packed — cutting a wet neck simply opens a wound into the head.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cured, not dried',
          text: 'Curing dries the wrappers, neck, and roots. The cloves themselves stay a high-moisture living tissue, dormant rather than dry, which is why cured garlic is still traded and handled as fresh produce.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality, grading, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Garlic is graded on head size and uniformity, compactness, wrapper condition and whiteness, freedom from sprouting and mould, and the absence of loose or missing cloves. Buyers also care about clove count and size, since a head of a few large cloves and a head of many small ones serve different kitchens even at identical weight. Wrapper condition dominates the visual assessment because it is simultaneously what the buyer sees and what protects the goods.',
        },
        {
          type: 'list',
          items: [
            'Split heads and exposed or loose cloves',
            'Wrapper damage, staining, and discoloration',
            'Sprouting — green shoots emerging as dormancy breaks',
            'Rooting from the basal plate in store',
            'Blue and green moulds on damaged or poorly cured heads',
            'Shrivelled or dehydrated cloves from excessive water loss',
            'Mechanical damage from over-aggressive trimming or handling',
          ],
        },
        {
          type: 'paragraph',
          text: 'Sprouting is the defect that ends the commercial life of most garlic lots. It is a dormancy break rather than a disease, and once it starts the clove diverts its reserves into the shoot and both texture and flavour go with them. Grade standards and size classes are jurisdictional and revised, so the edition in force governs.',
        },
      ],
    },
    {
      id: 'storage-and-trade',
      heading: 'Storage and trade forms',
      body: [
        {
          type: 'paragraph',
          text: 'Cured garlic is held as a dormant organ, and the storage objective is to keep it that way: dry, ventilated, and at a temperature that does not encourage the bulb to wake up. Garlic is not chilling-sensitive and tolerates cold holding, but the relationship between temperature and sprouting is not a simple downward slope — intermediate temperatures can actively promote sprouting, which is why garlic storage regimes are chosen deliberately from sourced guidance rather than by defaulting to "as cold as possible" or "cool enough".',
        },
        {
          type: 'paragraph',
          text: 'Garlic reaches market as whole cured heads above all, and also as peeled cloves, which are a fresh-cut product: peeling removes the protection that curing built, so peeled garlic is perishable in a way whole heads are not and must be refrigerated or otherwise preserved. It ships in cartons, nets, and crates, ventilated rather than sealed, and travels well when the wrappers are intact.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No storage figures are given here',
          text: 'Garlic storage temperature, humidity, and duration — and the intermediate range that promotes sprouting — are commodity-specific and interact with type and curing. AgricultureID does not publish figures; consult sourced post-harvest guidance such as the USDA Agricultural Research Service handbook or applicable national extension recommendations.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['seed', 'industrial'],
  majorQualityAttributes: [
    'Wrapper intactness and whiteness',
    'Head compactness and firmness',
    'Clove fill, count, and size',
    'Head size and uniformity',
    'Freedom from sprouting',
    'Neck and root trim quality',
  ],
  commonDefects: [
    'Split heads and loose or missing cloves',
    'Wrapper damage and staining',
    'Sprouting and rooting in store',
    'Blue and green moulds',
    'Shrivelled cloves from water loss',
    'Mechanical damage from trimming and handling',
  ],
  moistureContext:
    'The cloves remain high-moisture living tissue; curing dries only the wrappers, neck, and roots. Water loss through damaged wrappers shows as shrivelled cloves and lost saleable weight.',
  storageContext:
    'Held as a dormant bulb under dry, ventilated conditions; not chilling-sensitive, but intermediate temperatures promote sprouting, so the regime is chosen from sourced guidance rather than defaulted.',
  transportContext:
    'Ships in ventilated cartons, nets, and crates; intact wrappers are what allow heads to travel, and peeled cloves are a separate perishable chilled product.',
  majorProducingRegions: [
    'East Asia',
    'South and Central Asia',
    'Mediterranean Europe',
    'Latin America',
  ],
  majorTradingRegions: [
    'East and Southeast Asia',
    'Europe',
    'Latin America',
    'Middle East and North Africa',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0703.20',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Garlic, fresh or chilled. Dried garlic and garlic preparations are classified elsewhere.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'onion-and-garlic-curing' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Garlic as a traded vegetable commodity and post-harvest curing context',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Garlic curing, dormancy, sprouting, and storage behaviour',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Garlic grading attributes, size classes, and defect description',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Post-harvest disorders and storage moulds of garlic',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade descriptions, head-size classes, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No curing or storage temperature, humidity, or duration figure is given here — these are type- and system-specific and belong to sourced post-harvest guidance.',
    'Softneck and hardneck types differ substantially in storage behaviour and clove structure; no single expectation applies to garlic as a whole.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Garlic Bulbs: The Cured Traded Allium Commodity',
    description:
      'Garlic bulbs as a commodity: head and clove structure, lifting and curing, wrapper condition in grading, sprouting defects, and storage behaviour.',
    keywords: [
      'garlic bulbs',
      'garlic curing',
      'garlic grading',
      'softneck garlic',
      'garlic sprouting',
    ],
  },
  structuredData: { article: true },
};
