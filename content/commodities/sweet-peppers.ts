import type { CommodityContent } from '@/types/content';

export const sweetPeppers: CommodityContent = {
  id: 'commodity-sweet-peppers',
  slug: 'sweet-peppers',
  contentType: 'commodity',
  title: 'Sweet Peppers',
  alternativeNames: ['Bell peppers', 'Capsicums', 'Blocky peppers'],
  category: 'Fresh vegetable commodity',
  subcategory: 'Fruit vegetable',
  commodityClass: 'vegetable',
  physicalForm: 'fresh-produce',
  harvestedPart: 'Fruit (the hollow berry, cut with a short stem attached)',
  sourceCrop: { type: 'crop', slug: 'sweet-pepper' },
  summary:
    'Sweet peppers are the harvested fruit of non-pungent Capsicum, traded green or in full colour. Being non-climacteric, a pepper picked green stays essentially green — colour has to be earned on the plant — and being chilling-sensitive, it cannot be held as cold as the vegetables it ships beside.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sweet peppers are the traded fruit of non-pungent Capsicum types: cut by hand with a short stem left on, graded, packed, and shipped as a fresh commodity. The trade covers the blocky bell types that dominate supermarket shelves along with elongated and conical sweet types, and it divides between field-grown production and protected-culture crops grown under glass or plastic, which supply much of the premium coloured trade.',
    },
    {
      type: 'paragraph',
      text: 'Two properties shape the commodity, and they pull against each other. The pepper is non-climacteric, so unlike a tomato it cannot be picked green and ripened into colour afterwards — a red pepper has to have gone red on the plant, which costs the grower weeks of occupancy and exposure to risk, and that is why coloured peppers command the premium they do. Yet the fruit is also chilling-sensitive, so the coloured fruit that took so long to make cannot be protected by simply storing it cold. This entry describes the harvested fruit; the growing of the crop is on the sweet pepper crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Vegetable (botanically a fruit)' },
    {
      label: 'Parent crop',
      value: 'Sweet pepper (Capsicum annuum, non-pungent types)',
    },
    { label: 'Harvested part', value: 'Fruit (hollow berry) with stem' },
    {
      label: 'Ripening behaviour',
      value:
        'Non-climacteric — colour must develop on the plant, not after picking',
    },
    {
      label: 'Chilling sensitivity',
      value: 'Chilling-sensitive; injured by storage that is too cold',
    },
    {
      label: 'Key quality attributes',
      value:
        'Colour and uniformity, firmness, wall thickness, shape, stem condition',
    },
    {
      label: 'Trade split',
      value:
        'Green peppers and premium coloured fruit, often from protected culture',
    },
  ],
  sections: [
    {
      id: 'colour-and-maturity',
      heading: 'Colour is decided in the field',
      body: [
        {
          type: 'paragraph',
          text: 'A sweet pepper reaches full size while still green, and if left on the plant it will go on to develop its final colour — red, yellow, orange, or another depending on the cultivar. The grower chooses where to intervene. Picking at the green stage gives a saleable fruit early and lets the plant set more; waiting for colour means the fruit occupies the plant far longer, is exposed to more of what can go wrong, and blocks new set in the meantime.',
        },
        {
          type: 'paragraph',
          text: 'Because the pepper is non-climacteric, that choice is final. There is no ripening room for peppers: a fruit picked green does not become a red pepper afterwards, whatever it is treated with — some green peppers will show partial colour break in storage, but this is not the even, full colour of plant-ripened fruit and does not produce a coloured-grade lot. Green and coloured peppers are effectively two commodities from one plant, separated by a decision made weeks before harvest and by the cost of the wait.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Not the same as a tomato',
          text: 'The climacteric tomato can be picked mature-green and ripened in transit or in a ripening room. The non-climacteric pepper cannot. Applying tomato logic to peppers — picking green and expecting colour later — produces green peppers, and the mistake is unrecoverable.',
        },
      ],
    },
    {
      id: 'chilling-sensitivity',
      heading: 'Chilling sensitivity',
      body: [
        {
          type: 'paragraph',
          text: 'Sweet peppers are a warm-season fruit and are chilling-sensitive: held below the temperature they tolerate, they suffer chilling injury. It shows as surface pitting — small sunken lesions across the skin — along with water-soaked patches, discoloration around the calyx, loss of firmness, and a sharp rise in decay once the fruit is warmed again. As with other chilling-sensitive commodities, the injury generally appears after the cold exposure ends, not during it.',
        },
        {
          type: 'paragraph',
          text: 'The commercial consequence is a squeeze. Peppers respire and lose water fast enough to want cooling, but cannot take the low temperatures that would slow those processes most, so the working regime is a compromise rather than an optimum. It also makes mixed storage hazardous in a specific way: a room set for the leafy vegetables it is mostly holding is set too cold for the peppers in the corner of it, and the peppers will pay for that days later and somewhere else.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No temperatures are given here',
          text: 'The chilling threshold and the safe holding temperature and humidity for sweet peppers are commodity-specific and set by sourced post-harvest guidance. No threshold is stated here; consult the USDA Agricultural Research Service handbook or the extension recommendation applicable to the growing region.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality, grading, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Peppers are graded on colour and its uniformity, firmness, size and shape — blockiness and the number of lobes matter to the bell trade — wall thickness, and the condition of the stem and calyx, which buyers read as a freshness indicator. A shrivelled or blackened stem marks a lot as old regardless of how the fruit itself looks. Peppers are typically sized and graded on line, and the coloured trade is graded tightly because it is sold on appearance at a premium.',
        },
        {
          type: 'list',
          items: [
            'Chilling injury — surface pitting, water-soaking, and calyx discoloration',
            'Blossom-end rot — a physiological disorder set before harvest',
            'Sunscald — bleached, papery patches on exposed fruit',
            'Shrivelling and softening from water loss',
            'Stem and calyx decay, and stem loss',
            'Bruising, cuts, and puncture damage from handling',
            'Uneven colour break on part-coloured fruit',
          ],
        },
        {
          type: 'paragraph',
          text: 'The fruit is hollow, thin-walled, and easily punctured, and it is often cut with a stem that can spear its neighbour in the carton. Handling damage is therefore a standing loss in this commodity, and packing is designed around it — trays, liners, and shallow packs that stop fruit bearing on fruit.',
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage, packaging, and transport',
      body: [
        {
          type: 'paragraph',
          text: 'Peppers are cooled after harvest to remove field heat, within the limit their chilling sensitivity allows, and held at high humidity because the fruit shrivels visibly as it loses water and shrivelled peppers do not sell. Film wrapping and modified-atmosphere packaging are widely used on coloured fruit to hold humidity and protect the surface, which matters more here than on most vegetables because the entire premium is cosmetic.',
        },
        {
          type: 'paragraph',
          text: 'Peppers move refrigerated in cartons and trays, and mixed loads need care on two fronts: the temperature has to suit the most chilling-sensitive item aboard, and peppers are damaged by ethylene from co-loaded commodities, which hastens softening and decay. Compatibility here is about matching temperature regimes rather than defaulting to the coldest setting the truck can hold.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Colour and colour uniformity',
    'Firmness',
    'Size, shape, and blockiness',
    'Wall thickness',
    'Stem and calyx condition',
    'Freedom from surface damage',
  ],
  commonDefects: [
    'Chilling injury (pitting and water-soaking)',
    'Blossom-end rot',
    'Sunscald',
    'Shrivelling and softening',
    'Stem and calyx decay',
    'Bruising and puncture damage',
    'Uneven colour break',
  ],
  moistureContext:
    'The thin-walled hollow fruit loses water readily and shows it as shrivelling and loss of gloss. High humidity and film wrapping are used to hold water in; the fruit is never dried, and moisture control is about retention rather than removal.',
  storageContext:
    'Held short-term at high humidity under a compromise temperature: cool enough to slow respiration and decay, but above the chilling threshold, which rules out the near-freezing regime used for leafy vegetables.',
  transportContext:
    'Ships refrigerated in cartons and trays, often film-wrapped; mixed loads must match the chilling-sensitive temperature regime and keep peppers away from ethylene-producing commodities.',
  majorProducingRegions: [
    'East Asia',
    'Mediterranean Europe and North Africa',
    'North America',
    'Middle East',
  ],
  majorTradingRegions: [
    'Europe (large intra-regional trade)',
    'North America',
    'Middle East and North Africa',
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Sweet peppers as a traded fresh vegetable commodity and handling context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Non-climacteric behaviour and chilling injury symptoms in sweet peppers',
    },
    {
      sourceId: 'usda',
      citedFor: 'Sweet pepper grading attributes and defect description',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Post-harvest disorders of peppers including chilling injury and blossom-end rot',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, size and colour classes, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No storage temperature, humidity, chilling threshold, or shelf-life figure is given here — these are commodity-specific and belong to sourced post-harvest guidance.',
    'No HS classification code is given here because the applicable subheading for fresh Capsicum fruit depends on the edition and jurisdiction; confirm with the applicable customs authority.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sweet Peppers: The Traded Capsicum Fruit Commodity',
    description:
      'Sweet peppers as a commodity: why non-climacteric colour must develop on the plant, chilling injury limits on cold storage, grading, and common defects.',
    keywords: [
      'sweet peppers',
      'bell pepper commodity',
      'non-climacteric',
      'pepper chilling injury',
      'coloured peppers',
    ],
  },
  structuredData: { article: true },
};
