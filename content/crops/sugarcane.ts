import type { CropContent } from '@/types/content';

export const sugarcane: CropContent = {
  id: 'crop-sugarcane',
  slug: 'sugarcane',
  contentType: 'crop',
  title: 'Sugarcane',
  scientificName:
    'Saccharum officinarum and interspecific Saccharum hybrids (Saccharum spp.)',
  category: 'Industrial crop',
  subcategory: 'Perennial tropical grass grown for sugar',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Perennial (harvested as a multi-year ratoon crop)',
  summary:
    'Sugarcane is a tall, perennial tropical grass grown for its sucrose-rich stalks, used to produce sugar, ethanol, and molasses. A single planting is harvested over several successive ratoon cycles before replanting.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sugarcane is a large perennial grass cultivated primarily in tropical and subtropical regions for the sucrose stored in its stalks. Modern commercial canes are complex interspecific hybrids bred from Saccharum officinarum, prized for its high sugar content, crossed with wild relatives such as Saccharum spontaneum to introduce vigor and disease resistance.',
    },
    {
      type: 'paragraph',
      text: 'The crop is propagated vegetatively from stem cuttings ("setts") rather than seed, and after the first harvest the stubble regrows into subsequent "ratoon" crops, allowing several harvests from a single planting before yield decline makes replanting worthwhile.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grasses)' },
    {
      label: 'Life cycle',
      value: 'Perennial, harvested over multiple ratoon cycles',
    },
    { label: 'Main species', value: 'Saccharum officinarum and hybrids' },
    {
      label: 'Primary uses',
      value: 'Sugar, ethanol/biofuel, molasses, bagasse',
    },
    {
      label: 'Climate',
      value: 'Tropical to subtropical; high heat and water requirement',
    },
    {
      label: 'Soil preference',
      value: 'Deep, fertile soils across a wide texture range',
      note: 'Grown on soils from loams to heavier clay loams depending on region.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: "Sugarcane is among the world's most important industrial crops, grown across tropical and subtropical regions to supply raw sugar, ethanol, and by-products such as molasses and bagasse. Its long growth cycle and ratoon cropping system distinguish it from most annual field crops.",
        },
        {
          type: 'paragraph',
          text: 'The total time from planting to first harvest, and between successive ratoons, varies considerably by region and climate, generally spanning roughly ten months to two years depending on local growing conditions.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            { term: 'Family', description: 'Poaceae (grass family)' },
            { term: 'Genus', description: 'Saccharum' },
            {
              term: 'Principal species/hybrids',
              description:
                'Saccharum officinarum and complex interspecific Saccharum hybrids used commercially',
            },
            {
              term: 'Growth habit',
              description:
                'Tall perennial grass propagated vegetatively from stem cuttings, regrowing from stubble as a ratoon crop',
            },
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Sugarcane is believed to have originated in New Guinea and neighboring parts of Southeast Asia, where Saccharum officinarum was domesticated, before spreading across South and Southeast Asia and, through later trade and colonization, to Africa and the Americas.',
        },
        {
          type: 'paragraph',
          text: 'Today, sugarcane is grown across a broad tropical and subtropical belt, with major production concentrated in parts of the Americas and South and Southeast Asia. Production and trade statistics are compiled by FAO and should be taken from those primary datasets.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sugarcane requires substantial warmth and sunlight over its long growing cycle to accumulate sucrose, and it is grown across tropical and subtropical zones with adequate heat accumulation. It has little tolerance for frost, which can damage or kill standing cane.',
        },
        {
          type: 'paragraph',
          text: 'A period of cooler, drier conditions before harvest is sometimes associated with improved sucrose concentration in some production regions, in contrast to the warm, moist conditions favored during the main vegetative growth phase.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sugarcane tolerates a wide range of soil types, from loams to heavier clay loams, provided soils are deep and reasonably fertile to support its extensive root system and large biomass.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poor drainage restricts rooting and can favor certain soil-borne diseases. Soil suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'planting-and-ratooning',
      heading: 'Planting and ratoon management',
      body: [
        {
          type: 'paragraph',
          text: 'New sugarcane fields are established from disease-screened stem cuttings containing viable buds. After the first harvest, the stubble is managed to regrow as a ratoon crop, and fields are typically ratooned for several cycles before declining vigor makes replanting worthwhile.',
        },
        {
          type: 'list',
          items: [
            'Use of certified, disease-free planting material (setts)',
            'Ratoon management practices to sustain yield across successive harvests',
            'Weed control, particularly important during the slower-growing early stages',
            'Decisions on replanting interval based on ratoon yield decline and disease buildup',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Sugarcane has substantial nitrogen and potassium requirements given its large biomass, with potassium particularly linked to sucrose accumulation and overall stalk quality.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Sugarcane has a high water requirement over its long growing cycle. Furrow and flood irrigation have historically been common in many production regions, while drip irrigation is increasingly adopted where water efficiency is a priority.',
        },
        {
          type: 'paragraph',
          text: 'Water stress during key growth phases can reduce both cane yield and sucrose accumulation, making irrigation scheduling an important management consideration in drier production areas.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium-associated stalk and shoot diseases affect sugarcane in various production regions, and root rots caused by soil-borne pathogens can reduce stand vigor, particularly under poorly drained conditions. Aphids and fall armyworm, a broad-host-range pest, are among the insects that can damage foliage and reduce yield potential.',
        },
        {
          type: 'paragraph',
          text: 'Management combines disease-free planting material, resistant varieties where available, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Sugarcane is harvested when sucrose concentration in the stalk peaks, either by hand or mechanically, with green (unburned) harvesting, which retains crop residue as ground cover, increasingly favored over pre-harvest burning in many regions. Because sucrose degrades relatively quickly after cutting, cane is milled soon after harvest.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Raw and refined sugar production',
            'Ethanol and other biofuel production',
            'Molasses for animal feed and industrial fermentation',
            'Bagasse (fibrous residue) used for energy cogeneration and paper products',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'fall-armyworm' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'muriate-of-potash' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'maize' },
  ],
  glossaryTerms: ['perennial-crop', 'yield', 'evapotranspiration'],
  geographicScope:
    'Global overview of tropical and subtropical production. Ratoon cycle length and harvest practice vary by region.',
  climateContext:
    'Tropical to subtropical perennial grass with a long growth cycle and high heat and water demand.',
  limitations: [
    'Ratoon-cycle length, replanting interval, and harvest method (green versus burned) vary regionally and are not resolved here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global sugarcane production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Sugarcane research and disease information',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Sugarcane disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sugarcane',
    description:
      'A structured, evidence-based reference on sugarcane: classification, climate and soil needs, ratoon management, nutrition, diseases, pests, and uses.',
    keywords: [
      'sugarcane',
      'Saccharum officinarum',
      'sugar crop',
      'ratoon cane',
    ],
  },
  structuredData: { article: true },
};
