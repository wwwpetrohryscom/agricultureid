import type { SoilContent } from '@/types/content';

export const gleysol: SoilContent = {
  id: 'soil-gleysol',
  slug: 'gleysol',
  contentType: 'soil',
  title: 'Gleysol',
  alternativeNames: ['Gley soil', 'Groundwater-affected soil'],
  category: 'Soil type',
  subcategory: 'Wetland and groundwater-affected soil',
  texture:
    'Variable texture, often fine and poorly drained, with grey and mottled colours in the water-affected subsoil',
  summary:
    'A Gleysol is a soil saturated by groundwater for long enough to develop reducing conditions, producing the characteristic grey, blue-grey, and mottled colours of gleying. Wetness and poor aeration are its defining constraints, but with drainage many Gleysols become productive, and undrained they are classic rice soils.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Gleysols are soils that are saturated by groundwater for prolonged periods, so that the profile spends much of the year with little or no oxygen. Under these waterlogged, reducing conditions, iron in the soil is chemically altered, giving rise to the grey, blue-grey, and greenish colours, often with rusty mottles, that are the hallmark of gleying and that signal a history of saturation.',
    },
    {
      type: 'paragraph',
      text: 'Because their defining feature is wetness rather than a particular parent material or texture, Gleysols occur wherever groundwater sits near the surface, in valley bottoms, floodplains, depressions, and low-lying plains across many climates. Their agricultural behaviour is dominated by drainage: poorly aerated as they are, they can be highly limiting for dryland crops yet well suited to wetland rice, and often become productive once artificially drained.',
    },
  ],
  keyFacts: [
    {
      label: 'Reference group',
      value: 'Gleysol (World Reference Base), a groundwater-affected soil',
    },
    {
      label: 'Defining feature',
      value:
        'Prolonged groundwater saturation producing grey, mottled gley colours',
    },
    {
      label: 'Main constraint',
      value: 'Waterlogging and poor aeration limiting roots and dryland crops',
    },
    {
      label: 'Distribution',
      value:
        'Valley bottoms, floodplains, depressions, and low-lying plains worldwide',
    },
    {
      label: 'Key management',
      value: 'Artificial drainage to remove excess water and improve aeration',
    },
    {
      label: 'Best-suited use',
      value:
        'Wetland rice when undrained; grassland and arable crops once drained',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'A Gleysol is identified by the effects of long-term saturation within the profile: dull grey and blue-grey colours where iron has been chemically reduced, interspersed with rusty mottles where some oxygen periodically penetrates. These colour patterns record recurring waterlogging and distinguish Gleysols from freely drained soils.',
        },
      ],
    },
    {
      id: 'formation-and-distribution',
      heading: 'Formation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Gleysols form where the water table is at or near the surface for much of the year, so that the soil is saturated and oxygen is excluded for long periods. In the absence of oxygen, microbial activity draws on iron and other elements instead, chemically reducing them and producing the characteristic gley colours. They occur across climates wherever this groundwater condition prevails, particularly in valley floors, floodplains, deltas, and low-lying depressions.',
        },
      ],
    },
    {
      id: 'properties',
      heading: 'Physical and chemical properties',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Gley colours',
              description:
                'Grey, blue-grey, and greenish hues with rusty mottles, reflecting reducing conditions from prolonged saturation.',
            },
            {
              term: 'Aeration',
              description:
                'Poor for much of the year because water fills the pore space, restricting oxygen supply to roots.',
            },
            {
              term: 'Texture and structure',
              description:
                'Variable, but often fine-textured and prone to structural weakness when wet and to hard-setting on drying.',
            },
            {
              term: 'Fertility',
              description:
                'Depends on parent material and organic matter; wetness rather than nutrient supply is usually the primary limitation.',
            },
          ],
        },
      ],
    },
    {
      id: 'management',
      heading: 'Management considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Managing Gleysols for dryland cropping centres on controlling excess water so that the root zone is adequately aerated for at least part of the year.',
        },
        {
          type: 'list',
          items: [
            'Install and maintain artificial drainage to lower the water table and improve aeration',
            'Avoid working or trafficking the soil when wet, as it is highly vulnerable to compaction and structural damage',
            'Match land use to the drainage that is feasible, using wetter areas for grassland or wetland rice',
            'Manage organic matter and structure to support workability within the limited window when the soil is not saturated',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Draining Gleysols can improve productivity but alters wetland habitats and, where organic matter has accumulated, can lead to its loss; drainage decisions carry environmental as well as agronomic consequences.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'In their natural, undrained state Gleysols are classic soils for wetland rice, which tolerates and even depends on saturated, ponded conditions. Where drainage is installed, they can support grassland and a range of arable crops, though their agricultural value remains tied to how well water can be controlled.',
        },
      ],
    },
  ],
  suitedCrops: [{ type: 'crop', slug: 'rice' }],
  relatedTopics: [
    { type: 'soil', slug: 'fluvisol' },
    { type: 'soil', slug: 'histosol' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-aeration' },
    { type: 'soil-topic', slug: 'soil-profile' },
    { type: 'crop', slug: 'rice' },
    { type: 'irrigation-method', slug: 'subsurface-irrigation' },
  ],
  glossaryTerms: ['soil-texture'],
  geographicScope:
    'Global. Gleysols occur in groundwater-affected positions such as valley bottoms, floodplains, and low-lying plains across many climates; their behaviour depends on local hydrology, texture, and drainage.',
  climateContext:
    'Gleysols are defined by groundwater saturation rather than climate, and occur in both humid and seasonally wet regions wherever the water table sits at or near the surface for extended periods.',
  limitations: [
    'The behaviour and suitability of Gleysols depend heavily on local hydrology and on whether effective drainage is feasible.',
    'Draining Gleysols has environmental implications for wetlands and, in organic-rich examples, for stored carbon, which must be weighed against agricultural gains.',
    'This entry is a general overview; site-specific assessment of the water table, texture, and fertility is needed for management decisions.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-soils',
      citedFor: 'Gleysol Reference Soil Group, formation, and distribution',
    },
    {
      sourceId: 'isric',
      citedFor: 'Global information on Gleysols and gley features',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Wetness, drainage, and management of gleyed soils',
    },
    { sourceId: 'britannica', citedFor: 'General overview of gley soils' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Gleysol',
    description:
      'Gleysol explained: a groundwater-saturated soil with grey, mottled gley colours, its wetness constraints, drainage management, and suitability for rice.',
    keywords: ['gleysol', 'gley soil', 'waterlogged soil', 'rice soil'],
  },
  structuredData: { article: true },
};
