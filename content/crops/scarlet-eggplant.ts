import type { CropContent } from '@/types/content';

export const scarletEggplant: CropContent = {
  id: 'crop-scarlet-eggplant',
  slug: 'scarlet-eggplant',
  contentType: 'crop',
  title: 'Scarlet Eggplant',
  scientificName: 'Solanum aethiopicum',
  alternativeNames: ['African eggplant', 'Gilo', 'Bitter tomato', 'Nakati'],
  category: 'Vegetable crop',
  subcategory: 'Solanaceous vegetable grown for fruit or leaf',
  botanicalFamily: 'Solanaceae (nightshade family)',
  lifecycle: 'Annual',
  summary:
    'Scarlet eggplant is one of the five most important vegetables of Central and West Africa, and its four cultivar groups divide it into two different crops — some grown for fruit, one grown as a leafy vegetable.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Scarlet eggplant is an African domesticate grown across Central and West Africa, where it stands alongside tomato, onion, pepper and okra among the most important vegetables. It is not the same species as the eggplant of European and Asian cooking.',
    },
    {
      type: 'paragraph',
      text: 'Four cultivar groups are recognised and they are agriculturally distinct: Gilo is grown for fruit, Kumba for fruit and leaves, Shum for leaves alone, and Aculeatum is ornamental. A grower choosing between them is choosing between a fruit vegetable and a leaf vegetable within one species.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Solanaceae (nightshade family)' },
    {
      label: 'Species status',
      value: 'An African domesticate, not a form of Solanum melongena',
    },
    {
      label: 'Cultivar groups',
      value:
        'Gilo (fruit), Kumba (fruit and leaf), Shum (leaf), Aculeatum (ornamental)',
    },
    {
      label: 'Regional importance',
      value:
        'Among the five most important vegetables of Central and West Africa',
    },
    {
      label: 'Harvested organ',
      value: 'Fruit or leaf, depending on cultivar group',
    },
    {
      label: 'Related crop',
      value: 'Crosses with common eggplant are used in breeding',
    },
  ],
  sections: [
    {
      id: 'groups',
      heading: 'Four groups, two crops',
      body: [
        {
          type: 'paragraph',
          text: 'The Gilo group is grown for its fruit, eaten green or coloured and often bitter; the Shum group is grown for repeated leaf cutting; Kumba supplies both; Aculeatum is ornamental and spiny. Spacing, harvest interval and market all follow from the group rather than from the species, so a variety recommendation that names only "scarlet eggplant" is incomplete.',
        },
      ],
    },
    {
      id: 'importance',
      heading: 'A major vegetable that trade data barely sees',
      body: [
        {
          type: 'paragraph',
          text: 'In Central and West Africa the crop is grown and sold at scale in domestic markets, yet it appears thinly in international production statistics, which are built around globally traded vegetables. That mismatch is a fact about the data rather than about the crop, and it is why regional agricultural sources rather than trade statistics are the evidence base for it.',
        },
      ],
    },
    {
      id: 'bitterness',
      heading: 'Bitterness is a market trait',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit of many Gilo types is deliberately bitter, and bitterness is priced rather than treated as a defect in the markets where the crop is sold. Selections bred to reduce it for export markets are a different product from what local markets buy.',
        },
      ],
    },
    {
      id: 'leaf-harvest',
      heading: 'The leaf crop is cut repeatedly',
      body: [
        {
          type: 'paragraph',
          text: 'Shum types are cut every few weeks over months, so the constraint is the pre-harvest interval for any treatment and the nitrogen supply that sustains regrowth. That is a different management problem from a once-over fruit harvest, and it is why the two groups are not interchangeable in a rotation plan.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'breeding',
      heading: 'A source of resistance for common eggplant',
      body: [
        {
          type: 'paragraph',
          text: 'Solanum aethiopicum crosses with Solanum melongena and is used as a source of resistance to soil-borne diseases, notably bacterial and fusarium wilts, in eggplant breeding. Its agricultural value therefore extends beyond its own fields.',
        },
      ],
    },
    {
      id: 'glycoalkaloids',
      heading: 'Glycoalkaloids',
      body: [
        {
          type: 'paragraph',
          text: 'Like other cultivated Solanum species the plant contains steroidal glycoalkaloids, and their concentration varies widely between accessions. AgricultureID records this as a compositional characteristic of the crop that differs by material; consumption questions belong to food authorities.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'A nightshade in the rotation',
      body: [
        {
          type: 'paragraph',
          text: 'The crop shares bacterial wilt, fusarium wilt and root-knot nematode with tomato, pepper, eggplant and potato, so it gives no rotational break from any of them. In West African vegetable systems where several solanaceous crops are grown in sequence, that is a real constraint.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'diversity',
      heading: 'Hypervariable',
      body: [
        {
          type: 'paragraph',
          text: 'Both scarlet and gboma eggplant are described in the literature as hypervariable, with wide diversity in fruit shape, colour, bitterness and phenolic content within each group. That variation is a resource for breeding and a difficulty for anyone trying to describe the crop in one set of numbers.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Names that will not match',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is called gilo, nakati, bitter tomato, mock tomato, garden egg and African eggplant, and several of those names are also applied to Solanum macrocarpon or to Solanum melongena in different countries. Matching a market or survey record for "garden egg" requires resolving the species first.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'bacterial-wilt' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'early-blight' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'fruit-flies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'precooling' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'eggplant' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'okra' },

    { type: 'crop', slug: 'gboma-eggplant' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    "Central and West Africa, with Nigeria, Benin, Cameroon, Côte d'Ivoire and Ghana among the principal producers. Also grown in East Africa and in the Caribbean and Brazil.",
  climateContext:
    'Warm humid and subhumid tropics; grown through the rains and under irrigation in the dry season.',
  limitations: [
    'Cultivar-group behaviour differs enough that species-level statements describe none of the groups precisely.',
    'Production statistics are incomplete because most of the crop moves through domestic markets.',
    'Glycoalkaloid content varies widely between accessions and is not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iita',
      citedFor: 'West African vegetable production research',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'African indigenous vegetable germplasm research',
    },
    { sourceId: 'cabi', citedFor: 'Solanum aethiopicum compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'fao', citedFor: 'African vegetable production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Scarlet Eggplant',
    description:
      'Solanum aethiopicum as a crop: four cultivar groups splitting it into fruit and leaf crops, West African importance, bitterness as a trait and breeding value.',
    keywords: [
      'scarlet eggplant',
      'Solanum aethiopicum',
      'African eggplant',
      'gilo',
      'indigenous vegetable',
    ],
  },
  structuredData: { article: true },
};
