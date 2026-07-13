import type { SoilContent } from '@/types/content';

export const histosol: SoilContent = {
  id: 'soil-histosol',
  slug: 'histosol',
  contentType: 'soil',
  title: 'Histosol',
  alternativeNames: ['Organic soil', 'Peat and muck soil'],
  category: 'Soil type',
  subcategory: 'Organic soil',
  texture:
    'Organic rather than mineral: composed of accumulated plant material at various stages of decomposition, from fibrous peat to well-decomposed muck',
  summary:
    'A Histosol is an organic soil formed from the accumulation of partly decomposed plant material under wet, oxygen-poor conditions. Undrained, these peatlands are unsuited to conventional cropping; drained, they can be productive but subside, oxidise, and release stored carbon, making their use environmentally sensitive.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Histosols are soils made predominantly of organic material rather than mineral particles, formed where the production of plant matter outpaces its decomposition. This happens under persistently wet, oxygen-poor conditions, in bogs, fens, marshes, and swamps, where waterlogging slows decay so that partly decomposed plant remains accumulate over time into peat.',
    },
    {
      type: 'paragraph',
      text: 'In their natural, waterlogged state Histosols are wetland soils rather than croplands, and they store very large amounts of carbon. Where they are drained for agriculture they can become highly productive for certain crops, but drainage exposes the organic material to oxygen, causing it to decompose, subside, and release carbon dioxide, so their agricultural use is limited, drainage-dependent, and environmentally consequential.',
    },
  ],
  keyFacts: [
    {
      label: 'Reference group',
      value: 'Histosol (World Reference Base), an organic soil',
    },
    {
      label: 'Composition',
      value:
        'Dominated by accumulated organic material (peat) rather than mineral particles',
    },
    {
      label: 'Formation',
      value:
        'Organic matter accumulates where waterlogging slows decomposition',
    },
    {
      label: 'Natural state',
      value: 'Wetland peatland that stores very large amounts of carbon',
    },
    {
      label: 'Agricultural use',
      value:
        'Limited and drainage-dependent; drained peat subsides and oxidises over time',
    },
    {
      label: 'Key concern',
      value:
        'Drainage releases stored carbon and gradually consumes the soil itself',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'A Histosol is distinguished by being composed largely of organic material, ranging from barely decomposed fibrous peat to dark, well-decomposed muck. Its behaviour is governed by this organic nature and by water: saturated, it is stable and carbon-storing; drained, it becomes workable but begins to decompose and shrink.',
        },
      ],
    },
    {
      id: 'formation-and-distribution',
      heading: 'Formation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Histosols form in waterlogged settings where a lack of oxygen suppresses microbial decomposition, allowing dead plant material to accumulate faster than it breaks down. Over long periods this builds thick deposits of peat. They occur worldwide in bogs, fens, and swamps, and are especially extensive in cool, wet boreal and temperate regions, as well as in tropical peat swamps.',
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
              term: 'Organic composition',
              description:
                'Made up of accumulated plant remains, giving very high organic matter and low bulk density.',
            },
            {
              term: 'Water behaviour',
              description:
                'Holds large amounts of water; once drained and dried, some peats become difficult to re-wet.',
            },
            {
              term: 'Subsidence and oxidation',
              description:
                'Drained Histosols shrink and lose mass as organic matter decomposes, lowering the land surface over time.',
            },
            {
              term: 'Carbon storage',
              description:
                'Undisturbed Histosols hold very large carbon stocks, which drainage and cultivation release to the atmosphere.',
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
          text: 'Using Histosols for agriculture requires drainage, but drainage sets in motion decomposition and subsidence that are difficult to reverse, so management involves real trade-offs between production and conservation.',
        },
        {
          type: 'list',
          items: [
            'Recognise that drainage causes ongoing subsidence and loss of the organic soil, shortening its agricultural life',
            'Manage water tables carefully to slow oxidation while maintaining workable conditions where cultivation continues',
            'Weigh the large carbon emissions and biodiversity loss from draining peatlands against agricultural benefits',
            'Consider conservation, rewetting, or restoration where protecting stored carbon and wetland habitat is the priority',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Draining and cultivating Histosols is a major source of carbon dioxide emissions and causes irreversible loss of the soil through subsidence; their agricultural use is genuinely limited and environmentally sensitive.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Where Histosols have been drained, the resulting muck soils can be highly productive for specific high-value crops, particularly vegetables that suit the loose, moisture-retentive, organic-rich medium. Carrots, onions, and celery are among the crops traditionally grown on drained peat and muck soils, but this use is confined to drained areas and comes at the cost of gradual soil loss.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'carrot' },
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'celery' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'peat-soil' },
    { type: 'soil', slug: 'gleysol' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-organic-carbon' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['soil-texture'],
  geographicScope:
    'Global. Histosols occur in wetlands worldwide, most extensively in cool, wet boreal and temperate peatlands and in tropical peat swamps; behaviour depends on peat type and water management.',
  climateContext:
    'Histosols form where cool or persistently wet conditions keep soils waterlogged and slow decomposition, allowing peat to accumulate; both boreal peatlands and tropical peat swamps are major examples.',
  limitations: [
    'Agricultural use is genuinely limited: it requires drainage, and drainage causes irreversible subsidence and loss of the organic soil.',
    'Draining and cultivating Histosols releases very large amounts of stored carbon, so their use carries significant environmental costs.',
    'This entry is a general overview; the type and depth of peat and the feasibility and consequences of drainage must be assessed locally.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-soils',
      citedFor: 'Histosol Reference Soil Group, organic soils, and peatlands',
    },
    {
      sourceId: 'isric',
      citedFor: 'Global information on Histosols and peat soils',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Organic soils, subsidence, and management',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General overview of peat and organic soils',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Histosol',
    description:
      'Histosol explained: an organic peat soil formed under waterlogging, its carbon storage, subsidence when drained, and limited drainage-dependent cropping.',
    keywords: ['histosol', 'organic soil', 'peat soil', 'muck soil'],
  },
  structuredData: { article: true },
};
