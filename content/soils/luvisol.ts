import type { SoilContent } from '@/types/content';

export const luvisol: SoilContent = {
  id: 'soil-luvisol',
  slug: 'luvisol',
  contentType: 'soil',
  title: 'Luvisol',
  alternativeNames: ['Clay-illuvial soil', 'Argic soil'],
  category: 'Soil type',
  subcategory: 'Temperate forest and cropland soil',
  texture:
    'Loamy topsoil over a clay-enriched subsoil, reflecting downward movement and accumulation of clay',
  summary:
    'A Luvisol is a soil in which clay has washed down from the topsoil and accumulated in a subsurface horizon, leaving a lighter-textured surface over a clay-rich subsoil. Common in temperate regions and generally fertile, Luvisols support much of the cereal and mixed farming of Europe and other mid-latitude areas.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Luvisols are defined by the downward movement of clay from the upper soil into a subsurface horizon where it accumulates, a process known as clay illuviation. This leaves a relatively coarse, leached topsoil over a denser, clay-enriched subsoil, often called an argic horizon. The base cations of the soil are only moderately depleted, so Luvisols typically retain reasonable natural fertility.',
    },
    {
      type: 'paragraph',
      text: 'Luvisols are widespread in temperate regions, particularly under or following deciduous forest on stable, gently sloping land, and they underlie extensive areas of productive cropland in Europe, western Asia, and parts of North America. Their combination of workable topsoil, moderate to good fertility, and reasonable water storage makes them among the more agriculturally favourable temperate soils.',
    },
  ],
  keyFacts: [
    {
      label: 'Reference group',
      value: 'Luvisol (World Reference Base), a clay-illuvial soil',
    },
    {
      label: 'Defining feature',
      value: 'Subsurface clay-enriched (argic) horizon from clay illuviation',
    },
    {
      label: 'Fertility',
      value: 'Moderate to high, with reasonably retained base cations',
    },
    {
      label: 'Typical setting',
      value:
        'Stable, gently sloping temperate land, often under former deciduous forest',
    },
    {
      label: 'Distribution',
      value:
        'Extensive in temperate Europe, western Asia, and parts of North America',
    },
    {
      label: 'Main constraints',
      value:
        'Surface structural weakness, crusting, and erosion on sloping ground',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'A Luvisol is characterised by a marked increase in clay content from the topsoil to the subsoil, the result of clay particles being carried downward by percolating water and deposited in the argic horizon. This gives a two-layered feel to the profile: a lighter, more easily worked surface over a firmer, clay-rich subsoil.',
        },
      ],
    },
    {
      id: 'formation-and-distribution',
      heading: 'Formation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Luvisols develop on stable land surfaces in temperate climates where rainfall is sufficient to move clay down the profile but not so intense as to strongly leach and acidify the soil. Over time, clay migrates from the surface horizons and accumulates below, forming the diagnostic argic horizon while the topsoil remains only moderately leached. They are extensive across the temperate belt, notably in western and central Europe, and support much of the region intensive arable farming.',
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
              term: 'Clay-enriched subsoil',
              description:
                'An argic horizon where illuviated clay accumulates, firmer and denser than the topsoil above.',
            },
            {
              term: 'Fertility',
              description:
                'Generally moderate to good, with base cations only partly depleted and reasonable nutrient-holding capacity.',
            },
            {
              term: 'Water storage',
              description:
                'The clay-rich subsoil holds useful reserves of water, supporting crops through drier spells.',
            },
            {
              term: 'Surface structure',
              description:
                'The lighter topsoil can be prone to slaking, crusting, and erosion, particularly on slopes and where organic matter is low.',
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
          text: 'Luvisols are generally productive but benefit from care of the surface soil and, on slopes, from erosion control, since the clay-depleted topsoil can be structurally fragile.',
        },
        {
          type: 'list',
          items: [
            'Maintain organic matter and surface cover to reduce slaking, crusting, and erosion of the lighter topsoil',
            'Manage sloping Luvisols with erosion-conscious practices such as contour cultivation and cover crops',
            'Watch for a dense clay subsoil that can restrict drainage and rooting in some profiles',
            'Base liming and nutrient additions on soil testing, as fertility is good but not unlimited',
          ],
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Luvisols are among the more reliable temperate cropping soils and support a broad range of crops. They are widely used for wheat, barley, and other cereals, for maize where the climate allows, and for sugar beet and oilseed rape in intensive rotations across their temperate range.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'oilseed-rape' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'chernozem' },
    { type: 'soil', slug: 'cambisol' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-erosion' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-profile' },
    { type: 'crop', slug: 'wheat' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  glossaryTerms: ['soil-texture', 'crop-rotation'],
  geographicScope:
    'Global temperate regions, extensively in western and central Europe, western Asia, and parts of North America; properties vary with slope, parent material, and cultivation history.',
  climateContext:
    'Luvisols form in temperate climates with enough rainfall to move clay down the profile but not so much as to strongly leach and acidify the soil, a balance typical of the humid temperate belt.',
  limitations: [
    'The clay-depleted topsoil can be structurally fragile and prone to crusting and erosion, especially on slopes and at low organic matter.',
    'A dense clay subsoil restricts drainage and rooting in some Luvisols, so drainage behaviour varies between profiles.',
    'This entry is a general overview; fertility and physical constraints should be confirmed by local soil assessment.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-soils',
      citedFor:
        'Luvisol Reference Soil Group, clay illuviation, and distribution',
    },
    {
      sourceId: 'isric',
      citedFor: 'Global information on Luvisols and argic horizons',
    },
    { sourceId: 'usda-nrcs', citedFor: 'Clay-illuvial soils and management' },
    {
      sourceId: 'usda-plants',
      citedFor: 'Crop suitability on temperate cropland soils',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Luvisol',
    description:
      'Luvisol explained: a temperate soil with a clay-enriched subsoil from clay illuviation, its fertility, erosion constraints, and cereal cropping suitability.',
    keywords: [
      'luvisol',
      'clay illuviation',
      'argic horizon',
      'temperate cropland soil',
    ],
  },
  structuredData: { article: true },
};
