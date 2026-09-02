import type { CropContent } from '@/types/content';

export const greenleafDesmodium: CropContent = {
  id: 'crop-greenleaf-desmodium',
  slug: 'greenleaf-desmodium',
  contentType: 'crop',
  title: 'Greenleaf Desmodium',
  scientificName: 'Desmodium intortum',
  alternativeNames: ['Greenleaf', 'Intortum clover'],
  category: 'Forage crop',
  subcategory: 'Tropical perennial forage legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Perennial',
  summary:
    'Greenleaf desmodium is grown as much for what it does to weeds and insects as for what it feeds: it is the "push" in push-pull, the intercrop that suppresses Striga in maize across East Africa.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Greenleaf desmodium is a trailing tropical forage legume used in grass-legume pastures and for cut-and-carry feeding. In East Africa it has a second role that has made it far better known than its forage value alone would explain.',
    },
    {
      type: 'paragraph',
      text: 'It is the legume intercrop in push-pull, where maize is grown with desmodium between the rows and a border of napier grass. The system was developed against cereal stemborers, and the discovery that desmodium also collapses infestation by the parasitic weed Striga hermonthica turned it into one of the most widely adopted smallholder pest-management technologies in Africa.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Habit',
      value: 'Trailing perennial legume, rooting at the nodes',
    },
    {
      label: 'Primary agronomic role',
      value: 'Forage legume in grass pasture and cut-and-carry systems',
    },
    { label: 'Second role', value: 'The intercrop component of push-pull' },
    {
      label: 'Striga effect',
      value: 'Dramatic suppression of Striga hermonthica in intercropped maize',
    },
    {
      label: 'Establishment',
      value: 'Slow from small seed; often the limiting step',
    },
  ],
  sections: [
    {
      id: 'push-pull',
      heading: 'The push-pull system',
      body: [
        {
          type: 'paragraph',
          text: 'Push-pull grows maize with desmodium between the rows and napier grass as a border. Volatiles from the desmodium act on stemborer moths while the border grass draws them away from the crop, and the legume fixes nitrogen and covers the ground. It was developed in western Kenya and is used by large numbers of smallholders across East Africa.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'striga',
      heading: 'What it does to Striga',
      body: [
        {
          type: 'paragraph',
          text: "Intercropping with Desmodium species reduces infestation of maize by the parasitic witchweed Striga hermonthica dramatically, and the effect is far larger than shading or added nitrogen alone would explain. Root exudates that interfere with the parasite's germination and attachment have been described as the mechanism, alongside the soil-fertility and shading effects. It is an in-field weed-control effect from a companion crop rather than from a product.",
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'mechanism',
      heading: 'Mechanisms still under study',
      body: [
        {
          type: 'paragraph',
          text: 'The published account of how desmodium acts on stemborers has been revised more than once — including work arguing that the intercrop intercepts and kills larvae rather than repelling adult moths. AgricultureID records that the effect is well documented in the field and that the mechanism is an active research question, rather than asserting one explanation.',
        },
      ],
    },
    {
      id: 'forage',
      heading: 'As a forage in its own right',
      body: [
        {
          type: 'paragraph',
          text: 'Greenleaf is a productive, palatable perennial legume for grass-legume pasture and for cut-and-carry, and it fixes nitrogen well. In push-pull systems the cut desmodium feeds stalled dairy animals, which is a large part of why the system is adopted: it produces fodder on land that is still growing maize.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment is the barrier',
      body: [
        {
          type: 'paragraph',
          text: 'The seed is small and expensive, seedlings are slow, and a desmodium intercrop takes time to cover before it does anything useful. Establishment cost and seed availability, not agronomic performance, are the reasons cited most often for non-adoption of push-pull, and vegetative propagation from stem cuttings is used to reduce them.',
        },
      ],
    },
    {
      id: 'rooting',
      heading: 'Rooting at the nodes',
      body: [
        {
          type: 'paragraph',
          text: 'The trailing stems root where they touch moist soil, so an established stand thickens and persists and can be propagated by cuttings. That habit also makes it competitive with the crop if it is not cut back, so managing the intercrop is part of managing the maize.',
        },
      ],
    },
    {
      id: 'shade',
      heading: 'Tolerates shade and grazing',
      body: [
        {
          type: 'paragraph',
          text: 'Greenleaf persists under partial shade and under grazing better than many tropical legumes, which suits it to plantation understoreys and to mixed swards where a more erect legume would be removed.',
        },
      ],
    },
    {
      id: 'genus',
      heading: 'Species within the genus differ',
      body: [
        {
          type: 'paragraph',
          text: 'Desmodium uncinatum, silverleaf, is used in the same systems and is not the same plant; the two differ in adaptation and in seed cost, and published push-pull results refer to specific species. Recommendations naming only "desmodium" must be resolved to a species.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Soils and moisture',
      body: [
        {
          type: 'paragraph',
          text: 'Greenleaf needs reasonable moisture and does not tolerate a long dry season as well as stylo does, and it is grown in the wetter tropical highlands rather than in the seasonally dry savanna. That, rather than any preference, is what bounds the geography of the systems built on it.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'stem-borers' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'cambisol' },
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'andosol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'agroecology' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'stylo' },
    { type: 'crop', slug: 'napier-grass' },
    { type: 'crop', slug: 'lablab' },
  ],
  glossaryTerms: ['perennial-crop', 'forage', 'cover-crop'],
  geographicScope:
    'Native to Central and South America; used across the East African highlands, Southeast Asia and the wetter tropics.',
  climateContext:
    'Humid tropical highlands; needs reliable moisture and tolerates partial shade, but not a long dry season.',
  limitations: [
    'The mechanism of the stemborer effect is an active research question and is not settled here.',
    'Push-pull results are specific to the species, cultivar and region tested and are not generalised.',
    'Seed cost and availability are practical constraints that vary by country and are not covered here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cgiar',
      citedFor: 'Push-pull and tropical forage legume research',
    },
    { sourceId: 'iita', citedFor: 'East African cropping systems research' },
    { sourceId: 'fao', citedFor: 'Tropical grassland and pasture context' },
    { sourceId: 'cabi', citedFor: 'Desmodium intortum compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Greenleaf Desmodium',
    description:
      'Desmodium intortum as a crop: the push-pull intercrop, Striga suppression in maize, forage value, slow establishment and species that must not be confused.',
    keywords: [
      'greenleaf desmodium',
      'Desmodium intortum',
      'push-pull',
      'Striga',
      'forage legume',
    ],
  },
  structuredData: { article: true },
};
