import type { CommodityContent } from '@/types/content';

export const hempFibre: CommodityContent = {
  id: 'commodity-hemp-fibre',
  slug: 'hemp-fibre',
  contentType: 'commodity',
  title: 'Hemp Fibre',
  alternativeNames: ['Industrial hemp fibre', 'Hemp bast fibre', 'True hemp'],
  category: 'Fibre commodity',
  subcategory: 'Bast fibre from industrial hemp stems',
  commodityClass: 'fibre',
  physicalForm: 'fibre',
  harvestedPart:
    'Bast fibre from the stem, separated from the woody hurd by retting and decortication',
  sourceCrop: { type: 'crop', slug: 'hemp' },
  summary:
    'Hemp fibre is the bast fibre of the industrial hemp stem, long and strong and traditionally used for cordage, sacking, and coarse textiles. Its cultivation is legally restricted and the rules differ by jurisdiction, which shapes where and how the commodity is supplied.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Hemp fibre is a bast fibre taken from the stem of Cannabis sativa grown as an industrial crop. Like flax, it sits in bundles in the outer stem and has to be freed from a woody core; unlike flax, it is coarser, longer, and stronger, which historically sent it to ropes, sailcloth, and sacking rather than to fine textiles.',
    },
    {
      type: 'paragraph',
      text: 'The commodity has an unusual commercial geography, because hemp cultivation is regulated in a way that no other fibre crop is. Where the crop may be grown, under what licence, and against what varietal conditions are matters of national and sub-national law, and those laws differ substantially and change. That regulatory layer, rather than agronomy alone, explains much of where hemp fibre is produced and traded.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fibre' },
    {
      label: 'Parent crop',
      value: 'Hemp (Cannabis sativa), industrial fibre types',
    },
    { label: 'Fibre type', value: 'Bast — from the stem' },
    { label: 'Key process steps', value: 'Retting, then decortication' },
    {
      label: 'Principal uses',
      value: 'Fibre — cordage, technical textiles, composites, paper',
    },
    { label: 'Accompanying stream', value: 'Hurd (shiv) — the woody core' },
    {
      label: 'Regulatory note',
      value: 'Cultivation is legally restricted and jurisdiction-specific',
    },
  ],
  sections: [
    {
      id: 'regulatory-context',
      heading: 'Regulatory context',
      body: [
        {
          type: 'paragraph',
          text: 'Industrial hemp is grown under legal restriction in essentially every jurisdiction that permits it at all. Typical elements of these regimes include licensing or registration of growers, restriction to approved varieties, limits on the plant’s cannabinoid content, and official sampling or inspection of standing crops. The particulars — which varieties, which thresholds, which authority, which paperwork — are set separately by each jurisdiction and are revised over time.',
        },
        {
          type: 'paragraph',
          text: 'The consequence for the commodity is straightforward: hemp fibre supply is shaped by regulatory access as much as by climate or price, and a change in the rules can open or close a production region without anything agronomic having changed. This entry records that framing as a fact about the commodity and goes no further.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reference framing, not legal advice',
          text: 'AgricultureID states no thresholds, licence conditions, or permitted varieties, and nothing here is legal advice or a statement of what is lawful anywhere. Hemp cultivation law is jurisdiction-specific and changes — consult the competent national or regional authority.',
        },
      ],
    },
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A hemp stem is a hollow cylinder: an outer layer carrying the bast fibre bundles, wrapped around a woody core known as hurd or shiv. The crop is grown densely and tall for fibre, since the object is a long, straight, unbranched stem, and it is cut rather than pulled — hemp stems are too tall and tough for the pulling that flax gets.',
        },
        {
          type: 'paragraph',
          text: 'Hemp bast is not one thing. The bundles contain long primary fibres, which are what the traditional cordage and textile trade wants, and shorter secondary fibres formed lower down and later; separation quality determines how much of each ends up in a saleable stream. Hemp fibre is naturally coarser and less fine than flax, which is why the two are complements in the market rather than substitutes: linen’s territory is fineness, hemp’s is strength and durability.',
        },
      ],
    },
    {
      id: 'retting-and-decortication',
      heading: 'Retting and decortication',
      body: [
        {
          type: 'paragraph',
          text: 'As with flax, the fibre must be released from the core by retting, most commonly dew retting in the swath, where microbial action breaks down the pectins binding bast to hurd. The judgement is the same and the penalties are the same: too little retting and the fibre will not separate cleanly, too much and the fibre itself is degraded. Hemp’s heavier, coarser stems ret less evenly than flax straw, which is one reason hemp fibre quality has historically been more variable.',
        },
        {
          type: 'paragraph',
          text: 'Retted straw is baled and taken to a decortication line, where mechanical breaking and beating shatter the hurd and separate it from the bast. What emerges is a fibre stream and a hurd stream, and both are sold. Hurd is produced in volume and has established markets in animal bedding, construction materials, and absorbents — enough that some hemp processing is run with the hurd stream firmly in the commercial calculation rather than treated as leftovers.',
        },
      ],
    },
    {
      id: 'quality-and-uses',
      heading: 'Quality attributes and uses',
      body: [
        {
          type: 'paragraph',
          text: 'Buyers assess fibre length, fineness, strength, colour, cleanliness, and residual hurd content, with the intended application setting which of these dominates. A composites manufacturer cares about strength, consistency, and freedom from hurd; a textile spinner cares far more about fineness and length; an insulation or paper user tolerates a coarser, shorter product. There is no single international grading standard for hemp fibre, and specifications are set contract by contract.',
        },
        {
          type: 'list',
          items: [
            'Cordage, twine, and rope — the traditional use, built on fibre strength',
            'Technical textiles, geotextiles, and nonwovens',
            'Composite reinforcement in moulded and pressed products',
            'Speciality paper and pulp',
            'Coarse apparel and household textiles where fineness allows',
          ],
        },
        {
          type: 'paragraph',
          text: 'Uneven retting, high residual hurd, inconsistent fibre length, and contamination are the faults that recur across all of these markets. Because supply chains are small and fragmented relative to cotton or jute, consistency between lots is itself a quality issue for industrial buyers.',
        },
      ],
    },
  ],
  primaryUses: ['fibre'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Fibre length',
    'Fineness',
    'Strength',
    'Colour and evenness of retting',
    'Residual hurd content',
    'Lot-to-lot consistency',
  ],
  commonDefects: [
    'Uneven or incomplete retting',
    'Over-retting and fibre degradation',
    'High residual hurd and dust',
    'Short and broken fibre',
    'Weathering and staining in the swath',
    'Foreign matter contamination',
  ],
  moistureContext:
    'Retted straw must be dry enough to bale and hold without moulding, and fibre condition affects how cleanly decortication separates bast from hurd. Working moisture is a processor matter rather than a trading term.',
  storageContext:
    'Baled straw is stored dry under cover before decortication; separated fibre is baled and kept dry, since damp fibre stains, weakens, and moulds.',
  transportContext:
    'Bulky straw travels short distances to a decortication line; baled fibre and hurd move further, though chains are generally smaller and more regional than for cotton or jute.',
  majorProducingRegions: ['Europe', 'East Asia', 'North America'],
  majorTradingRegions: ['Europe', 'East Asia'],
  commodityCodes: [
    {
      system: 'HS',
      code: '5302',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'True hemp (Cannabis sativa L.), raw or processed but not spun; tow and waste of true hemp, at heading level.',
    },
  ],
  connections: [{ type: 'machinery', slug: 'baler' }],
  relatedTopics: [
    { type: 'commodity', slug: 'flax-fibre' },
    { type: 'commodity', slug: 'jute-fibre' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Hemp fibre as a traded bast fibre and its industrial uses',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'Industrial hemp sector context and the existence of a regulatory framework',
    },
    {
      sourceId: 'usda',
      citedFor: 'Industrial hemp as a regulated crop and fibre market context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Hemp fibre characteristics and traditional uses',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global reference. Hemp cultivation is permitted, restricted, or prohibited on a jurisdiction-by-jurisdiction basis, and the rules change.',
  limitations: [
    'This entry is an agricultural-commodity reference. It is not legal advice and states no cannabinoid thresholds, licensing conditions, or permitted varieties.',
    'Hemp cultivation law differs by jurisdiction and is revised; nothing here indicates that hemp may lawfully be grown in any particular place.',
    'No fibre yields, retting durations, or fibre-property figures are given — they are variety-, season-, and processor-specific.',
    'Regions are indicative only. Hemp production shifts with regulatory change, so any grouping dates quickly.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Hemp Fibre: Industrial Bast Fibre From the Stem',
    description:
      'Hemp fibre as a commodity: bast fibre freed by retting and decortication, its cordage and composite uses, and the jurisdiction-specific rules on growing it.',
    keywords: [
      'hemp fibre',
      'industrial hemp',
      'bast fibre',
      'decortication',
      'hemp hurd',
    ],
  },
  structuredData: { article: true },
};
