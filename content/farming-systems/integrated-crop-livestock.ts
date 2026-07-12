import type { FarmingSystemContent } from '@/types/content';

export const integratedCropLivestock: FarmingSystemContent = {
  id: 'system-integrated-crop-livestock',
  slug: 'integrated-crop-livestock',
  contentType: 'farming-system',
  title: 'Integrated Crop–Livestock Systems',
  systemClass: 'integrated',
  alternativeNames: [
    'Mixed crop–livestock farming',
    'Crop–livestock integration',
  ],
  category: 'Farming system',
  subcategory: 'Integrated system',
  summary:
    'Integrated crop–livestock systems deliberately combine crop and animal production on the same farm so that each component can supply resources — feed, forage, manure, and land use — the other can use.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Integrated crop–livestock systems are mixed farms in which crop and animal enterprises are deliberately connected rather than managed as separate, unrelated operations. Livestock commonly graze crop residues, cover crops, or dedicated forage, while manure and grazing effects cycle nutrients back onto cropland — creating flows of feed and fertility between the two enterprises.',
    },
    {
      type: 'paragraph',
      text: 'This is one of the oldest and most widespread farming patterns worldwide, practiced at scales from smallholder mixed farms to larger commercial operations. It is also discussed as a way to recouple nutrient cycles that become separated when crop and livestock production specialize onto different, often distant, farms or regions.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Deliberate resource exchange between crop and livestock enterprises on the same farm',
    },
    {
      label: 'Common flows',
      value:
        'Crop residues and forage to livestock; manure and nutrients back to cropland',
    },
    {
      label: 'Grazing role',
      value:
        'Livestock can graze cover crops or crop residues between cash-crop seasons',
    },
    {
      label: 'Nutrient cycling',
      value:
        'Manure can supply a share of crop nutrient needs, though it does not necessarily eliminate purchased fertilizer',
    },
    {
      label: 'Scale range',
      value:
        'Practiced from smallholder mixed farms to larger commercial operations',
    },
    {
      label: 'Management',
      value:
        'Requires managing two enterprise types together, adding complexity relative to specialized farms',
    },
  ],
  sections: [
    {
      id: 'what-integrated-crop-livestock-systems-are',
      heading: 'What integrated crop–livestock systems are',
      body: [
        {
          type: 'paragraph',
          text: 'What distinguishes an integrated crop–livestock system from a farm that simply happens to grow crops and keep animals is deliberate connection: the crop enterprise is planned with the livestock enterprise in mind, and vice versa, so that residues, forage, and manure move between them by design.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Crop-residue grazing',
              description:
                'Allowing livestock to graze the residue left in a field after a crop is harvested.',
            },
            {
              term: 'Manure nutrient cycling',
              description:
                'Returning nutrients from livestock manure to cropland to supply part of crop fertility needs.',
            },
            {
              term: 'Rotational grazing',
              description:
                'Moving livestock between paddocks or fields on a planned schedule to manage forage and land use.',
            },
          ],
        },
      ],
    },
    {
      id: 'how-resources-flow-between-crops-and-livestock',
      heading: 'How resources flow between crops and livestock',
      body: [
        {
          type: 'list',
          items: [
            'Crop residues and cover crops provide grazing or harvested feed for livestock',
            'Manure and urine return nutrients to cropland, supplementing other fertility sources',
            'Forage legumes can supply both livestock feed and biologically fixed nitrogen to the rotation',
            'Grazing timing is planned around crop calendars to avoid conflicts with planting or harvest',
          ],
        },
      ],
    },
    {
      id: 'common-configurations',
      heading: 'Common configurations',
      body: [
        {
          type: 'table',
          caption: 'Common integrated crop–livestock configurations',
          columns: ['Configuration', 'Description'],
          rows: [
            [
              'Crop-residue grazing',
              'Livestock graze the residue remaining after a cash crop is harvested',
            ],
            [
              'Grazed cover crops / forage rotation',
              'A forage or cover crop phase in the rotation is grazed before the next cash crop',
            ],
            [
              'Manure-based nutrient cycling',
              'Livestock manure is collected or deposited and returned to cropland as a nutrient source',
            ],
            [
              'Dual-purpose forage–grain crops',
              'Forage legumes such as alfalfa are grown both for livestock feed and as a rotation component',
            ],
          ],
        },
      ],
    },
    {
      id: 'managing-the-interactions',
      heading: 'Managing the interactions',
      body: [
        {
          type: 'paragraph',
          text: 'Making integration work well requires deliberate planning: timing grazing so it does not damage soil or delay the following crop, balancing the nutrient supply from manure against what the next crop actually needs, and providing fencing and water infrastructure to manage livestock movement across cropland.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Grazing cropland when soil is wet risks compaction and structural damage that can affect the following crop. Timing grazing to soil moisture and field conditions, not just the calendar, is an important part of managing these systems.',
        },
      ],
    },
    {
      id: 'benefits-and-trade-offs',
      heading: 'Benefits and trade-offs',
      body: [
        {
          type: 'list',
          items: [
            'Recycles nutrients between livestock and cropland',
            'Diversifies farm income and production risk across two enterprise types',
            'Provides additional feed sources from residues and cover crops',
            'Well-managed grazing can support soil-health goals alongside cropping',
          ],
        },
        {
          type: 'list',
          items: [
            'Adds management complexity and labor relative to a single-enterprise farm',
            'Requires infrastructure such as fencing and livestock water access on cropland',
            'Grazing at the wrong time or soil moisture risks compaction',
            'Requires skills and knowledge in both crop and livestock management',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not provide universal nutrient-replacement, yield, or income figures for integrated crop–livestock systems. Outcomes depend on stocking rate, timing, soil type, and management, and vary too widely to generalize.',
        },
      ],
    },
    {
      id: 'where-it-is-used',
      heading: 'Where it is used',
      body: [
        {
          type: 'paragraph',
          text: 'Integrated crop–livestock systems are found worldwide in many forms, from smallholder mixed farms feeding household livestock on crop residues to larger commercial operations that incorporate grazing into row-crop rotations. The specific configuration used depends heavily on regional livestock species, crop choices, land availability, and market conditions.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  connections: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'turkeys' },
    { type: 'livestock', slug: 'farmed-fish' },
    { type: 'livestock', slug: 'ostrich' },
    { type: 'livestock', slug: 'guinea-fowl' },
    { type: 'livestock', slug: 'mule' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'soybean' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: ['forage', 'ruminant', 'crop-rotation'],
  geographicScope:
    'Integrated crop–livestock systems are practiced worldwide, at scales from smallholder mixed farms to large commercial operations; specific practices depend on regional livestock species, crops, and land availability.',
  climateContext:
    'Grazing windows, forage growth, and crop-residue availability all depend strongly on regional rainfall and temperature patterns.',
  limitations: [
    'Integrated crop–livestock systems take many specific forms; this entry describes general principles rather than any one configuration.',
    'Nutrient-cycling and soil benefits depend on stocking rate, timing, and management, so this entry does not provide universal nutrient-replacement or yield figures.',
    'Grazing management must account for soil moisture and compaction risk, which vary by soil type and climate and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Mixed crop–livestock farming systems overview',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Grazing management and nutrient cycling on cropland',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on integrated crop–livestock system interactions',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Policy context for mixed farming systems',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Integrated Crop–Livestock Systems',
    description:
      'Integrated crop–livestock systems explained: how residues, forage, and manure flow between enterprises, common configurations, and honest trade-offs.',
    keywords: [
      'integrated crop-livestock',
      'mixed farming',
      'manure nutrient cycling',
      'grazing management',
    ],
  },
  structuredData: { article: true },
};
