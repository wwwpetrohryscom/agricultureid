import type { CropContent } from '@/types/content';

export const quinoa: CropContent = {
  id: 'crop-quinoa',
  slug: 'quinoa',
  contentType: 'crop',
  title: 'Quinoa',
  scientificName: 'Chenopodium quinoa',
  alternativeNames: ['Andean grain', 'Inca grain'],
  category: 'Pseudocereal crop',
  subcategory: 'Andean grain crop',
  botanicalFamily: 'Amaranthaceae (formerly Chenopodiaceae)',
  lifecycle: 'Annual',
  summary:
    'Quinoa is an Andean broadleaf grain crop grown for its protein-rich, gluten-free seed, notable for its tolerance of drought, cold, and saline or alkaline soils at high altitude.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Quinoa is a pseudocereal — a broadleaf plant grown and used like a grain crop even though it is not a member of the grass family. Domesticated in the Andean highlands, it has long been a staple food there and has expanded into new growing regions worldwide over recent decades due to interest in its nutritional profile and gluten-free status.',
    },
    {
      type: 'paragraph',
      text: 'The crop is notably tolerant of environmental extremes, including drought, frost, and saline or alkaline soils, reflecting its evolution in the harsh conditions of the high-altitude Andean altiplano. Seed coats contain bitter saponins that are typically removed by washing or mechanical processing before consumption.',
    },
  ],
  keyFacts: [
    {
      label: 'Botanical family',
      value: 'Amaranthaceae (formerly Chenopodiaceae)',
    },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Chenopodium quinoa' },
    {
      label: 'Primary uses',
      value: 'Whole-grain food product; flour and processed foods',
    },
    {
      label: 'Climate',
      value:
        'Highly adaptable; tolerant of drought, frost, and high-altitude conditions',
    },
    {
      label: 'Soil preference',
      value: 'Tolerant of poor, saline, and alkaline soils',
      note: 'Optimal ranges are variety- and region-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Quinoa is an annual broadleaf plant grown for its small, disc-shaped seed, harvested from a branched inflorescence. Unlike true cereals, it belongs to the same botanical family as spinach and beets rather than the grass family.',
        },
        {
          type: 'paragraph',
          text: 'Traditional Andean production remains important, alongside newer production areas in North America, Europe, and elsewhere that have adopted the crop for its market value and stress tolerance.',
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
            {
              term: 'Family',
              description:
                'Amaranthaceae (formerly classified in Chenopodiaceae)',
            },
            { term: 'Genus', description: 'Chenopodium' },
            { term: 'Principal species', description: 'Chenopodium quinoa' },
            {
              term: 'Growth habit',
              description:
                'Erect annual broadleaf plant bearing seed in a branched terminal panicle',
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
          text: 'Quinoa was domesticated in the Andean highlands of present-day Bolivia and Peru, where it has been cultivated for thousands of years as a staple grain adapted to high altitude, cold, and variable rainfall. Traditional diversity of landraces remains greatest in this region.',
        },
        {
          type: 'paragraph',
          text: 'Global interest since the late 20th century has driven expansion of cultivation beyond the Andes; current production and trade figures are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Quinoa is adapted to a wide range of conditions, from the cold, high-altitude, frost-prone Andean altiplano to lower-altitude temperate and subtropical zones where it has been introduced, reflecting considerable genetic diversity among landraces and cultivars.',
        },
        {
          type: 'paragraph',
          text: 'The crop is comparatively drought-tolerant during vegetative growth, though water availability during flowering and seed fill still affects yield and quality.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Quinoa tolerates poor, sandy, saline, and alkaline soils better than most crops, a trait linked to its Andean origins in soils affected by salinity and low fertility. It still performs best on well-drained soils with reasonable structure.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Salt tolerance varies by cultivar and growth stage. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Quinoa is established from small seed sown shallowly into a firm, moist seedbed, with sowing date, spacing, and variety chosen according to local altitude, day length, and frost risk.',
        },
        {
          type: 'list',
          items: [
            'Variety and landrace selection matched to altitude, day length, and local climate',
            'Crop rotation to manage soil-borne pathogens and pests',
            "Weed management, particularly important given the crop's relatively slow early canopy closure",
            'Careful post-harvest handling, since saponin-containing seed coats require removal before food use',
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
          text: 'Nitrogen supports vegetative growth and seed yield, while phosphorus and potassium contribute to root development and seed fill. Quinoa is also notable for tolerating soils with elevated sodium levels better than most crops.',
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
          text: "Traditional Andean quinoa is grown largely rain-fed under variable highland precipitation, drawing on the crop's drought tolerance. In some newer production regions, supplemental irrigation is used to stabilize yield, particularly around flowering and seed fill.",
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew is one of the most significant diseases of quinoa, particularly under humid conditions, and can substantially reduce yield in susceptible cultivars. Aphids and leaf miners are among the insect pests reported on the crop.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on resistant cultivars, field sanitation, monitoring, and, where justified and available, locally authorized control products used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Quinoa is harvested once seed has matured and dried in the panicle, traditionally by hand-cutting and threshing in Andean smallholder systems, or by mechanized combining in larger, more level production areas. Timely harvest reduces losses from shattering and weather damage.',
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
            'Whole-grain food product, cooked similarly to rice or used in salads and side dishes',
            'Milled into flour for gluten-free baked goods and processed foods',
            'Leaves consumed as a leafy vegetable in some regions',
            'Crop residues used as livestock forage in traditional systems',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'saline-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'sodium' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'frost' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'buckwheat' },
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'beetroot' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'yield', 'macronutrient'],
  geographicScope:
    'Global overview, rooted in Andean production systems. Agronomic details (timing, rates, varieties) are region- and altitude-specific.',
  climateContext:
    'Broadly adaptable pseudocereal originating in the cold, high-altitude Andean climate; grown from highland to lowland conditions.',
  limitations: [
    'Cultivar and landrace diversity is substantial, and traits such as salt and frost tolerance vary accordingly; this entry is a general overview.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Quinoa production and nutritional context' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Quinoa disease and pest compendium data' },
    { sourceId: 'cgiar', citedFor: 'Andean grain crop research' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Quinoa',
    description:
      'A structured, evidence-based reference on quinoa: Andean origin, climate and soil tolerance, agronomy, diseases, pests, harvest, and food uses.',
    keywords: ['quinoa', 'Chenopodium quinoa', 'pseudocereal', 'Andean grain'],
  },
  structuredData: { article: true },
};
