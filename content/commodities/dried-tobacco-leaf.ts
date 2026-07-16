import type { CommodityContent } from '@/types/content';

export const driedTobaccoLeaf: CommodityContent = {
  id: 'commodity-dried-tobacco-leaf',
  slug: 'dried-tobacco-leaf',
  contentType: 'commodity',
  title: 'Dried Tobacco Leaf',
  alternativeNames: [
    'Cured tobacco leaf',
    'Unmanufactured tobacco',
    'Leaf tobacco',
  ],
  category: 'Other agricultural commodity',
  subcategory: 'Cured leaf as traded',
  commodityClass: 'other',
  physicalForm: 'leaf',
  harvestedPart: 'Leaf lamina with midrib, harvested from the stalk and cured',
  sourceCrop: { type: 'crop', slug: 'tobacco' },
  summary:
    'Dried tobacco leaf is cured tobacco leaf as traded between growers, leaf merchants, and manufacturers. It is classified by curing method and stalk position, graded on colour, maturity, and body, and handled at a moisture condition that keeps it pliable without moulding.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dried tobacco leaf is the traded, unmanufactured commodity of the tobacco crop: leaf that has been harvested, cured, sorted, and packed for sale. This entry is an agricultural-commodity reference and describes that leaf as an object of trade — how it is cured, how it is classified and graded, and how it is stored and shipped.',
    },
    {
      type: 'paragraph',
      text: 'The commodity is defined more by curing than by anything else. Green tobacco leaf and cured tobacco leaf are chemically and commercially different things, and the curing method used is the first division in every classification system applied to the crop. A buyer specifying tobacco specifies a cured type before anything else is discussed.',
    },
  ],
  keyFacts: [
    {
      label: 'Commodity class',
      value: 'Other (non-food agricultural commodity)',
    },
    { label: 'Parent crop', value: 'Tobacco (Nicotiana tabacum)' },
    { label: 'Harvested part', value: 'Leaf, cured after harvest' },
    { label: 'First classification', value: 'By curing method' },
    { label: 'Second classification', value: 'By stalk position of the leaf' },
    {
      label: 'Principal use',
      value: 'Industrial — input to tobacco product manufacture',
    },
    {
      label: 'Handling condition',
      value: 'Held "in order" — pliable, neither brittle nor damp',
    },
  ],
  sections: [
    {
      id: 'curing-types',
      heading: 'Curing methods and leaf types',
      body: [
        {
          type: 'paragraph',
          text: 'Curing is a controlled drying process during which the harvested leaf undergoes chemical change before it dries out entirely. Different methods produce distinct commercial types, and the types are not substitutes for one another: each is grown, cured, graded, and traded as its own commodity class.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Flue-cured',
              description:
                'Leaf cured in barns heated by flues carrying heat from an external furnace, so no smoke reaches the leaf. Cured over a short, closely controlled schedule of rising temperature.',
            },
            {
              term: 'Air-cured',
              description:
                'Leaf hung in ventilated barns and cured without added heat over a longer period, relying on ambient conditions managed through ventilation.',
            },
            {
              term: 'Fire-cured',
              description:
                'Leaf cured in barns with open hardwood fires, so smoke contacts the leaf during the process.',
            },
            {
              term: 'Sun-cured',
              description:
                'Leaf cured in the open air under direct sun, characteristic of the small-leaved Oriental types.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'A curing failure is not recoverable. Leaf cured too fast sets green; cured too slowly or too damp it moulds or rots in the barn; and either outcome removes the lot from the grades it was grown for. Curing is therefore the step where most of the value of a tobacco crop is either realised or lost.',
        },
      ],
    },
    {
      id: 'stalk-position-and-grading',
      heading: 'Stalk position and grading',
      body: [
        {
          type: 'paragraph',
          text: 'Tobacco is unusual in that where a leaf grew on the plant is a formal element of its trade description. Leaves are harvested in successive primings up the stalk as they mature, and leaves from different heights differ systematically in size, thickness, body, and colour. Grading systems name these stalk positions and treat them as distinct categories: the lower leaves, the mid-stalk leaves, the upper leaves, and the tips each occupy their own place in the grade structure.',
        },
        {
          type: 'paragraph',
          text: 'Within a type and stalk position, grading then assesses quality and colour. Graders read maturity, body and texture, uniformity, the proportion of the leaf that is sound and usable, and the colour range the cured leaf falls into. The result is a grade mark combining type, position, quality, and colour — a compact description of what a bale contains.',
        },
        {
          type: 'paragraph',
          text: 'Grade standards for tobacco are national, versioned, and detailed, and the grade names mean nothing outside the standard that defines them. AgricultureID reproduces no grade tables, colour scales, or thresholds: those belong to the issuing authority and to the contract that references them.',
        },
      ],
    },
    {
      id: 'order-and-storage',
      heading: 'Order, packing, and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Cured leaf is handled at a moisture condition the trade calls order. The idea is specific to this commodity: a leaf that is too dry shatters into unusable fragments the moment it is handled, while a leaf carrying too much moisture will mould, heat, and spoil in the pack. Leaf is therefore brought into order — conditioned so that it is pliable enough to handle without breaking, and no wetter than that — before it is sorted, baled, or packed. Leaf that arrives out of order is reconditioned rather than forced through.',
        },
        {
          type: 'paragraph',
          text: 'Packed leaf is stored in ventilated warehouses and is not inert while it sits there: cured tobacco continues to change slowly in storage, and holding leaf for a period is a deliberate part of the trade rather than an accident of logistics. The storage risks are mould where moisture rises, heating in a dense pack, and infestation by the storage insects that attack cured leaf, all of which warehouses are designed and monitored to control.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No figures given',
          text: 'Order, packing, and storage conditions are set by type, grade, pack form, and trade practice. AgricultureID publishes no moisture percentages, storage periods, or temperature figures — consult the applicable national standard and trade guidance.',
        },
      ],
    },
    {
      id: 'trade-structure',
      heading: 'Trade structure',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf moves from growers to leaf merchants and manufacturers, and the route has changed markedly over recent decades. Auction floors, where lots were displayed and bid on openly, were historically the characteristic marketing channel in several producing countries; direct contracting between growers and buyers, with the type, grade, and volume agreed in advance of the season, has since become dominant in many of them.',
        },
        {
          type: 'paragraph',
          text: 'International trade in unmanufactured leaf is substantial, because the types a manufacturer needs are grown in different climates and the blend of types is specified rather than improvised. Leaf therefore crosses borders in packed form, described by type, grade, and crop year. Trade in unmanufactured leaf is regulated separately from trade in manufactured products, and both are subject to jurisdiction-specific controls and duties that this entry does not describe.',
        },
      ],
    },
  ],
  primaryUses: ['industrial'],
  majorQualityAttributes: [
    'Curing type',
    'Stalk position',
    'Colour',
    'Maturity',
    'Body and texture',
    'Uniformity and proportion of sound leaf',
    'Order (handling moisture condition)',
  ],
  commonDefects: [
    'Green or improperly set leaf from curing failure',
    'Barn rot and mould from curing too damp',
    'Shattered and broken leaf handled out of order',
    'Mould and heating in the pack',
    'Storage insect damage',
    'Foreign matter and non-tobacco related material',
  ],
  moistureContext:
    'Handled in "order": conditioned so the cured leaf is pliable rather than brittle, and no damper than handling requires, since excess moisture leads to mould and heating in the pack.',
  storageContext:
    'Packed and held in ventilated warehouses where cured leaf continues to change slowly; the controlled risks are mould, heating in dense packs, and storage insects.',
  transportContext:
    'Moves internationally in packed, described lots identified by type, grade, and crop year; unmanufactured leaf is subject to jurisdiction-specific trade controls and duties.',
  majorProducingRegions: [
    'East Asia',
    'South America',
    'South Asia',
    'Sub-Saharan Africa',
    'North America',
  ],
  majorTradingRegions: [
    'South America (exporting region)',
    'Sub-Saharan Africa (exporting region)',
    'Europe and East Asia (importing regions)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '2401',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Unmanufactured tobacco; tobacco refuse, at heading level. Subheadings distinguish leaf not stemmed or stripped from partly or wholly stemmed or stripped leaf.',
    },
  ],
  connections: [
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Unmanufactured tobacco leaf as a traded agricultural commodity',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Curing types, stalk position, and the structure of leaf grading',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Leaf marketing structure and the shift from auction to contract',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, trade controls, and duties applying to unmanufactured tobacco are jurisdiction-specific and versioned.',
  limitations: [
    'This is a neutral agricultural-commodity reference describing curing, grading, handling, and trade. It makes no claim of any kind about tobacco use or its effects, and contains no consumption guidance.',
    'No grade names, colour scales, moisture figures, or storage periods are reproduced here — they belong to the applicable national standard and contract.',
    'Trade in unmanufactured tobacco is subject to jurisdiction-specific controls, duties, and reporting requirements that this entry does not describe.',
    'The regions named indicate where leaf is grown and where it moves; no ranking or volume is implied.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Dried Tobacco Leaf: Cured Leaf as Traded',
    description:
      'Dried tobacco leaf as an agricultural commodity: flue, air, fire and sun curing types, stalk-position grading, and how packed leaf is traded.',
    keywords: [
      'dried tobacco leaf',
      'unmanufactured tobacco',
      'tobacco curing',
      'leaf grading',
      'stalk position',
    ],
  },
  structuredData: { article: true },
};
