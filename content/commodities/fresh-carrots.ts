import type { CommodityContent } from '@/types/content';

export const freshCarrots: CommodityContent = {
  id: 'commodity-fresh-carrots',
  slug: 'fresh-carrots',
  contentType: 'commodity',
  title: 'Fresh Carrots',
  alternativeNames: ['Table carrots', 'Fresh-market carrots', 'Topped carrots'],
  category: 'Fresh vegetable commodity',
  subcategory: 'Root vegetable',
  commodityClass: 'vegetable',
  physicalForm: 'root-tuber',
  harvestedPart: 'Taproot (the swollen storage root, lifted and topped)',
  sourceCrop: { type: 'crop', slug: 'carrot' },
  summary:
    'Fresh carrots are the lifted, topped, and washed taproots of the carrot plant. A robust root by fresh-produce standards, the carrot nevertheless has two commercially decisive vulnerabilities: it dehydrates readily once topped, and it turns bitter when exposed to ethylene.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh carrots are the traded commodity of the carrot crop: taproots lifted from the soil, topped, washed, graded, and packed. The commodity divides into recognisable streams — bunched carrots sold with tops attached, loose topped carrots, and the small polished "baby-cut" carrots machined from larger roots — and these are handled and priced quite differently despite starting as the same lifted root.',
    },
    {
      type: 'paragraph',
      text: 'Carrots are among the more durable fresh vegetables, and can be held far longer than a lettuce or a broccoli head. That durability is easily overestimated, though. A topped carrot has an open wound at the crown and no waxy skin worth the name, so it loses water quickly; and it responds to ethylene in the store by turning bitter. Both problems are avoidable and both are common. This entry describes the harvested root as traded; the growing of the crop is on the carrot crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Vegetable (root)' },
    { label: 'Parent crop', value: 'Carrot (Daucus carota subsp. sativus)' },
    { label: 'Harvested part', value: 'Taproot' },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric; the root does not ripen after lifting',
    },
    {
      label: 'Chilling sensitivity',
      value: 'Not chilling-sensitive; tolerates cold holding near freezing',
    },
    {
      label: 'Ethylene response',
      value:
        'Ethylene exposure induces bitterness — a defining storage constraint',
    },
    {
      label: 'Key quality attributes',
      value:
        'Shape, colour, smoothness, crispness, freedom from greening and splits',
    },
  ],
  sections: [
    {
      id: 'lifting-and-topping',
      heading: 'Lifting, topping, and washing',
      body: [
        {
          type: 'paragraph',
          text: 'Carrots are lifted by machines that grip the tops and pull the root from loosened soil, which is why the foliage has to be in good enough condition to take the strain. What happens next defines the stream: roots for the loose trade are topped in the field or the shed, while bunched carrots keep their tops and are handled as a far more perishable item, since the foliage keeps transpiring after harvest and pulls water out of the root behind it.',
        },
        {
          type: 'paragraph',
          text: 'Topping leaves a cut surface at the crown, and washing then removes the soil along with any protection it offered. A washed, topped carrot is presented to the buyer bare, wet, and wounded — attractive on the shelf and vulnerable in the chain. Much of what follows in carrot handling is about managing the consequences of that trade-off, which is why some long-store carrots are held unwashed and washed only as they are packed out.',
        },
      ],
    },
    {
      id: 'ethylene-and-bitterness',
      heading: 'Ethylene and bitterness',
      body: [
        {
          type: 'paragraph',
          text: 'The carrot is non-climacteric: lifted, it is finished, and no ripening process continues. But it is not indifferent to ethylene. Exposed to it in storage or transport, the root responds by producing bitter compounds, and the carrot turns genuinely unpalatable. It is a metabolic response of a living root to a hormone signal, not contamination or taint — and it is irreversible once it has occurred.',
        },
        {
          type: 'paragraph',
          text: 'The commercial significance is in where the ethylene comes from. Carrots stored or shipped alongside ethylene-producing commodities — apples and pears are the classic offenders, and ripening tomatoes another — will pick it up from their neighbours, so a bitter lot is very often a mixed-storage or mixed-load failure rather than anything that happened in the field. Nothing is visibly wrong with the roots; the damage is discovered only when someone eats one.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A load-compatibility problem, not a cosmetic one',
          text: 'Ethylene-induced bitterness leaves no visual sign, so it is not caught by grading and surfaces only in the mouth of the buyer. Storage and load compatibility for carrots is therefore a quality control at the point of loading. Threshold concentrations and exposure durations are commodity-specific — consult sourced post-harvest guidance.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality, grading, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Carrots are graded heavily on appearance because that is what sells them: colour intensity and uniformity, shape and straightness, smoothness of the surface, size and diameter, and crispness. Roots are commonly sized and sorted by machine and optical grader before packing. Misshapen and split roots are not defective as food, and a large proportion of them are diverted into cutting, dicing, and juicing streams rather than discarded — the loss is of the fresh-market premium rather than of the crop.',
        },
        {
          type: 'list',
          items: [
            'Splitting and cracking — often set before lifting, exposed after washing',
            'Forking and misshapen roots — from soil obstructions during growth',
            'Green or purple crowns from shoulder exposure to light',
            'Bitterness from ethylene exposure — invisible to grading',
            'Wilting and rubberiness from water loss',
            'Surface blemishes, scarring, and mechanical damage from lifting and washing',
            'White blush on cut and peeled surfaces of baby-cut product',
          ],
        },
        {
          type: 'paragraph',
          text: 'White blush deserves a note of its own because it is specific to the cut product. The pale, dry-looking film that develops on baby-cut carrots is a surface dehydration and healing response of the cut tissue rather than spoilage; the carrot is sound, but the appearance reads as old to a shopper, and it drives real commercial losses in that stream.',
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage and transport',
      body: [
        {
          type: 'paragraph',
          text: 'Carrots are not chilling-sensitive, so they can be held genuinely cold, close to freezing, and this is what gives the commodity its long storage life — a well-managed carrot store can bridge much of the year. Rapid cooling after harvest is worthwhile, commonly by hydrocooling, because the roots come out of the ground carrying field heat. The other half of the regime is very high humidity: with no protective skin and a cut crown, carrots dehydrate quickly, and a dry store produces limp, rubbery roots that no longer snap.',
        },
        {
          type: 'paragraph',
          text: 'The third element is separation from ethylene, which in practice means dedicating storage space rather than filling gaps in a mixed room. Carrots move in bags, cartons, and bulk bins under refrigeration, and film packaging is widely used to hold humidity around the roots. Where roots are held over long periods, the store is also managed against sprouting, rooting, and storage rots.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No storage figures are given here',
          text: 'Storage temperature, humidity, and achievable duration for carrots are commodity-specific and depend on the stream, the cultivar, and the store. AgricultureID does not publish figures; consult sourced post-harvest guidance such as the USDA Agricultural Research Service handbook or applicable national extension recommendations.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'industrial'],
  majorQualityAttributes: [
    'Colour intensity and uniformity',
    'Shape, straightness, and smoothness',
    'Size and diameter',
    'Crispness and turgidity',
    'Freedom from crown greening',
    'Freedom from splits and forking',
  ],
  commonDefects: [
    'Splitting and cracking',
    'Forking and misshapen roots',
    'Green or purple crowns',
    'Bitterness from ethylene exposure',
    'Wilting and rubberiness',
    'Mechanical damage and surface scarring',
    'White blush on cut product',
  ],
  moistureContext:
    'The topped root has a cut crown and little protective skin, so it loses water readily; wilting and rubberiness are the visible result. High storage humidity and film packaging are used to hold water in, and drying is never a goal for this commodity.',
  storageContext:
    'One of the longer-storing fresh vegetables: held close to freezing at very high humidity, hydrocooled after harvest, and kept away from ethylene sources to prevent bitterness.',
  transportContext:
    'Moves refrigerated in bags, cartons, and bulk bins; load compatibility matters because ethylene from co-loaded commodities makes carrots bitter without any visible sign.',
  majorProducingRegions: [
    'East Asia and Central Asia',
    'Europe',
    'North America',
    'South Asia',
  ],
  majorTradingRegions: [
    'Europe (large intra-regional trade)',
    'North America',
    'East Asia',
    'Middle East and North Africa',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0706.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Carrots and turnips, fresh or chilled. The subheading covers turnips as well as carrots.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Carrots as a traded fresh vegetable commodity and post-harvest handling context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Ethylene-induced bitterness, water loss, and cold storage behaviour of carrots',
    },
    {
      sourceId: 'usda',
      citedFor: 'Fresh carrot grading attributes and defect description',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Carrot storage management and fresh-market quality context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, size classes, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No storage temperature, humidity, shelf-life, or ethylene-threshold figure is given here — these are commodity-specific and belong to sourced post-harvest guidance.',
    'Bunched, loose topped, and baby-cut carrots behave as distinct commercial streams; no single handling expectation covers all three.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Carrots: The Traded Root Vegetable Commodity',
    description:
      'Fresh carrots as a commodity: lifting and topping, why ethylene makes them bitter, grading and defects, water loss, and long cold storage behaviour.',
    keywords: [
      'fresh carrots',
      'carrot commodity',
      'carrot bitterness ethylene',
      'carrot grading',
      'carrot storage',
    ],
  },
  structuredData: { article: true },
};
