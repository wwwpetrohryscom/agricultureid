import type { CommodityContent } from '@/types/content';

export const walnuts: CommodityContent = {
  id: 'commodity-walnuts',
  slug: 'walnuts',
  contentType: 'commodity',
  title: 'Walnuts',
  alternativeNames: ['English walnuts', 'Persian walnuts', 'In-shell walnuts'],
  category: 'Tree nut commodity',
  subcategory: 'Drupe seed traded as a nut',
  commodityClass: 'nut',
  physicalForm: 'seed',
  harvestedPart:
    'Seed of a drupe, traded in-shell or as shelled halves and pieces',
  sourceCrop: { type: 'crop', slug: 'walnut' },
  summary:
    "Walnuts are traded in-shell or as shelled halves and pieces, and are graded heavily on kernel colour — light kernels command a premium. Their high oil content makes rancidity, not spoilage, the practical limit on the commodity's life.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Walnuts are the dried seed of a drupe, harvested once the green husk has split and the nut can be shaken free. Like almonds they are a dry, storable commodity preserved by drying rather than by cold, and like almonds they are traded in two distinct forms — in-shell and shelled — that are separately classified and separately priced.',
    },
    {
      type: 'paragraph',
      text: "What sets the walnut trade apart is colour. Walnut kernels are graded on how light they are, on a scale running from pale through amber to dark, and the price difference across that scale is large. Colour is not a cosmetic afterthought here: it reflects how promptly the nut was harvested, hulled, and dried, and darkening is the visible record of delay, heat, or moisture in a lot's history. This entry describes the commodity; the tree belongs to the walnut crop entry.",
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Nut (tree nut)' },
    { label: 'Parent crop', value: 'Walnut (Juglans regia)' },
    {
      label: 'Botanically',
      value: 'The seed of a drupe, enclosed by a husk and a shell',
    },
    {
      label: 'Trade forms',
      value: 'In-shell, and shelled halves and pieces, classified separately',
    },
    {
      label: 'Dominant grading attribute',
      value: 'Kernel colour, graded from light to dark on a defined scale',
    },
    {
      label: 'Life-limiting factor',
      value: 'Rancidity from a high oil content, not microbial spoilage',
    },
    {
      label: 'Critical operation',
      value: 'Prompt hulling and drying after harvest',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A walnut fruit is a drupe with a green husk over a hard shell containing the kernel. As the nut matures the husk splits and begins to separate, which is the harvest signal — the crop is shaken to the ground and gathered, then hulled to strip the husk away and dried before storage. The window between the nut hitting the ground and being hulled and dried is where kernel colour is won or lost, because a nut lying in a wet husk stains rapidly.',
        },
        {
          type: 'paragraph',
          text: 'In-shell walnuts move as whole nuts and are a major trade form in their own right, especially into markets with a tradition of buying nuts to crack at home and for seasonal demand. Shelled walnuts are traded as halves — the highest value, because an intact half demonstrates careful cracking — and as progressively smaller pieces, with the size and intactness of the kernel forming a large part of the grade.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The husk is not the shell',
          text: 'Three layers are involved: the green husk removed at hulling, the hard shell that defines the in-shell trade form, and the kernel inside. Confusing the husk with the shell confuses two entirely different operations and two different residues.',
        },
      ],
    },
    {
      id: 'colour-and-timeliness',
      heading: 'Kernel colour and timeliness',
      body: [
        {
          type: 'paragraph',
          text: 'Walnut grading scales run from the palest kernels down through progressively darker categories, and buyers pay accordingly. Light kernels signal a nut that was gathered promptly, hulled without delay, and dried under controlled conditions; darker kernels indicate the opposite, and the darkening is irreversible. Rain on nuts lying on the orchard floor, delay before hulling, and drying at excessive temperature all push a lot down the scale.',
        },
        {
          type: 'paragraph',
          text: 'Drying itself is a balance. Under-drying leaves a lot vulnerable to mould and to mycotoxin risk in storage; over-drying and excessive drying temperature darken the kernel, make the shell brittle, and increase breakage during cracking — costing halves, which is where the value sits. The commodity therefore rewards a narrow, well-controlled drying operation more than most.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Drying parameters are not published here',
          text: 'Drying temperature, target moisture, and safe storage conditions for walnuts are set by industry standards and contracts and vary with cultivar and region. AgricultureID gives no figures; consult sourced post-harvest guidance.',
        },
      ],
    },
    {
      id: 'storage-and-rancidity',
      heading: 'Storage and rancidity',
      body: [
        {
          type: 'paragraph',
          text: "Walnut kernels are among the most oil-rich of the traded nuts, and their oil is unusually unsaturated. That is why the commodity's practical life is ended by oxidation rather than by rot: a properly dried walnut will not spoil microbially, but it will go rancid, developing the paint-like off flavour that makes it unsaleable. Warmth, light, and oxygen all accelerate the process.",
        },
        {
          type: 'paragraph',
          text: 'The trade responds by holding kernels cold and, for long storage, under reduced oxygen or in modified-atmosphere packaging — treatments a dry commodity would not otherwise need. The shell affords real protection, which is one reason in-shell walnuts hold longer under ordinary conditions than shelled kernels do. Storage insects are the other standing threat to stored lots, and hygiene and monitoring are routine.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Shelled walnuts are graded on colour, size and the proportion of intact halves, and the incidence of defects. In-shell walnuts are assessed on shell cleanliness and integrity, the proportion of nuts that are well filled, and the ease with which they crack. Shrivelled or poorly filled kernels — nuts whose kernel never developed to fill the shell — are a persistent downgrade that cannot be seen without cracking, and this is why in-shell lots are sampled and cracked to assess kernel condition.',
        },
        {
          type: 'list',
          items: [
            'Dark kernel colour from delayed hulling, rain, or excessive drying heat',
            'Rancidity in kernels held warm, bright, or long',
            'Shrivelled and poorly filled kernels',
            'Broken halves and excessive small pieces from cracking',
            'Mould growth and mycotoxin risk in under-dried lots',
            'Insect damage and shell staining',
          ],
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Walnut kernels are eaten as a snack and used widely in bakery, confectionery, and cooking, with halves preferred where the nut is visible and pieces used where it is not. Pressing kernels yields walnut oil, a small, high-value culinary product. The shells left by cracking are collected and used as an abrasive blast medium, a filler, and a fuel — an established industrial by-product outlet rather than waste — while the husks removed at hulling are a bulk residue handled at the huller.',
        },
        {
          type: 'list',
          items: [
            'Food — kernels as halves and pieces for snacking, bakery, and confectionery',
            'Oil — walnut oil pressed from kernels for culinary use',
            'Industrial — shells used as abrasive media, filler, and fuel',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['oil', 'industrial', 'energy'],
  majorQualityAttributes: [
    'Kernel colour on the graded scale',
    'Proportion of intact halves',
    'Kernel size and fill',
    'Moisture content',
    'Freedom from rancidity',
    'Shell condition and crackability (in-shell lots)',
  ],
  commonDefects: [
    'Dark or stained kernels',
    'Rancid kernels',
    'Shrivelled and poorly filled kernels',
    'Excessive breakage and small pieces',
    'Mould in under-dried lots',
    'Insect damage',
  ],
  moistureContext:
    'Walnuts are dried after hulling and traded on a moisture basis; under-drying invites mould and mycotoxin risk, while over-drying darkens kernels and increases breakage at cracking.',
  storageContext:
    "Held dry, and increasingly cold and under reduced oxygen for long storage, because oxidative rancidity rather than microbial spoilage limits the commodity's life.",
  transportContext:
    'Ships in cartons, totes, and bags in dry containers, with refrigerated or modified-atmosphere transport used for kernels on long routes; the shell protects the in-shell form.',
  majorProducingRegions: [
    'East Asia',
    'North America (Pacific coast)',
    'Europe and the Mediterranean',
    'Central and South Asia and South America',
  ],
  majorTradingRegions: [
    'North America (major exporting region)',
    'Europe (major importing region)',
    'East Asia',
    'The Middle East and South Asia',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0802.31',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Walnuts, fresh or dried, in shell.',
    },
    {
      system: 'HS',
      code: '0802.32',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Walnuts, fresh or dried, shelled.',
    },
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'cold-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'almonds' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar', 'perennial-crop'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Walnuts as a traded tree nut commodity and their trade forms',
    },
    {
      sourceId: 'usda',
      citedFor: 'Walnut kernel colour grading and in-shell grade attributes',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Walnut drying, kernel colour development, and rancidity research',
    },
    {
      sourceId: 'usda-nass',
      citedFor: 'Walnut production and processing stream context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, colour scales, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, drying specification, or customs classification.',
    'Colour scales and grade categories differ by jurisdiction and standard; no scale is reproduced here.',
    'No moisture, drying-temperature, or storage figures are given — these are set by standards, contracts, and regional practice.',
    'Walnut producing and trading regions are named indicatively, without ranking by volume or value.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Walnuts: Kernel Colour, Drying, and Rancidity',
    description:
      'Walnuts as a commodity: in-shell and shelled trade forms, why kernel colour dominates grading, prompt hulling and drying, and rancidity as the true limit.',
    keywords: [
      'walnuts',
      'walnut commodity',
      'walnut kernel colour',
      'walnut drying',
      'walnut rancidity',
    ],
  },
  structuredData: { article: true },
};
