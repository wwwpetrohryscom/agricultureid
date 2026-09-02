import type { CropContent } from '@/types/content';

export const tannia: CropContent = {
  id: 'crop-tannia',
  slug: 'tannia',
  contentType: 'crop',
  title: 'Tannia',
  scientificName: 'Xanthosoma sagittifolium',
  alternativeNames: ['Cocoyam', 'Malanga', 'New cocoyam', 'Taioba'],
  category: 'Root and tuber crop',
  subcategory: 'Aroid grown for corms and cormels',
  botanicalFamily: 'Araceae (arum family)',
  lifecycle: 'Perennial grown as an annual',
  summary:
    'Tannia is an American aroid that became a West African staple, and its central production problem is a single soil pathogen: Pythium root rot, against which the vegetatively propagated commercial clones have almost no resistance.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tannia is one of the two crops called cocoyam. It originated in tropical America and is now grown across West and Central Africa, where Nigeria, Ghana and Cameroon together account for a large majority of African production. The other cocoyam, taro, is an unrelated genus with a different origin.',
    },
    {
      type: 'paragraph',
      text: 'The plant produces a central corm and a ring of lateral cormels around it, and it is the cormels that are usually eaten while the corm is replanted. Because it is propagated vegetatively, the crop carries its diseases forward — and cocoyam root rot, caused by Pythium myriotylum, has reduced production substantially across its African range.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Araceae (arum family)' },
    {
      label: 'Distinct from taro',
      value: 'Taro is Colocasia esculenta, a different genus',
    },
    {
      label: 'Harvested organ',
      value: 'Lateral cormels, with the central corm often replanted',
    },
    { label: 'Propagation', value: 'Vegetative, from corms or cormels' },
    {
      label: 'Principal disease',
      value: 'Cocoyam root rot, Pythium myriotylum',
    },
    {
      label: 'Main producing region',
      value: 'West and Central Africa, led by Nigeria, Ghana and Cameroon',
    },
  ],
  sections: [
    {
      id: 'two-cocoyams',
      heading: 'Two crops share one name',
      body: [
        {
          type: 'paragraph',
          text: 'Tannia and taro are both called cocoyam, both are aroids, and both produce edible corms — and they are different genera from different continents with different disease profiles and different eating characteristics. In West Africa tannia is often distinguished as "new cocoyam" against taro\'s "old cocoyam". Any record naming only cocoyam has to be resolved before it means anything.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'root-rot',
      heading: 'Root rot is the production constraint',
      body: [
        {
          type: 'paragraph',
          text: 'Cocoyam root rot caused by Pythium myriotylum affects the vegetatively propagated commercial clones severely, and it has driven large declines in production in parts of Central and West Africa. Because planting material is corms carried from the previous crop, infected material moves the pathogen directly into new fields, and clean planting material schemes and tissue culture are the principal responses.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'vegetative',
      heading: 'A crop with no seed trade',
      body: [
        {
          type: 'paragraph',
          text: "Tannia rarely flowers or sets seed in cultivation and is propagated from corms and cormels, so a farmer's planting material is part of the previous harvest. That ties planting rate to yield, means disease accumulates over cycles, and makes varietal improvement slow because there is no conventional seed system to move new material.",
        },
      ],
    },
    {
      id: 'cormels',
      heading: 'Corm and cormels',
      body: [
        {
          type: 'paragraph',
          text: 'A single plant produces one central corm and a surrounding ring of smaller cormels. The cormels are the preferred food in most of the range, being finer-textured, while the central corm is coarser and is commonly used as planting material or processed. Harvest is by digging the whole stool, and some systems harvest cormels progressively and leave the plant standing.',
        },
      ],
    },
    {
      id: 'calcium-oxalate',
      heading: 'Raphides and preparation',
      body: [
        {
          type: 'paragraph',
          text: 'As with other edible aroids, the tissues contain needle-shaped calcium oxalate crystals that cause irritation, and the crop is always cooked. Concentration varies by cultivar and by organ. This is a compositional characteristic of the crop; preparation and consumption guidance belongs to food sources.',
        },
      ],
    },
    {
      id: 'shade',
      heading: 'Grown under shade and in mixtures',
      body: [
        {
          type: 'paragraph',
          text: 'Tannia tolerates shade and is widely grown under tree crops, in the humid forest zone and in mixed plots with plantain, maize and cassava rather than in monoculture. Its role in those systems is to produce a staple from ground that is already occupied.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Storage and post-harvest losses',
      body: [
        {
          type: 'paragraph',
          text: 'The cormels are perishable and are attacked in store by a range of fungi, and post-harvest loss is a substantial share of the crop. Storage in the ground until required is common where the season allows, and it is more effective than any storage structure available at smallholder scale.',
        },
      ],
    },
    {
      id: 'water',
      heading: 'Water and drainage',
      body: [
        {
          type: 'paragraph',
          text: 'The crop needs high rainfall — figures around 1,800 millimetres a year are cited — and well-drained soil in a moderately acid range, and it does poorly on both dry and waterlogged ground. Root rot pressure rises sharply on poorly drained soils, so drainage is a disease decision as much as an agronomic one.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'statistics',
      heading: 'Production data is weak',
      body: [
        {
          type: 'paragraph',
          text: 'Tannia and taro are frequently aggregated as "taro" or "cocoyam" in international statistics, and much of the crop is grown for household consumption. Production figures for the species should be read as approximations built on that aggregation.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'snails' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'shifting-cultivation' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'post-harvest', slug: 'clamp-storage' },
    { type: 'post-harvest', slug: 'washing-and-sanitising' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'taro' },
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'yam' },
  ],
  glossaryTerms: ['perennial-crop', 'crop-rotation'],
  geographicScope:
    'Native to tropical America. Grown across West and Central Africa — Nigeria, Ghana and Cameroon lead African production — and in the Caribbean, Latin America and the Pacific.',
  climateContext:
    'Humid tropical; high rainfall, moderately acid well-drained soil and tolerance of shade.',
  limitations: [
    'Production statistics frequently aggregate tannia with taro and should be read as approximations.',
    'Calcium oxalate content varies by cultivar and organ; no preparation guidance is given here.',
    'Root rot severity and available clean-planting-material schemes are country-specific.',
  ],
  sourceReferences: [
    {
      sourceId: 'iita',
      citedFor: 'West and Central African root and tuber research',
    },
    { sourceId: 'cgiar', citedFor: 'Cocoyam germplasm and root rot research' },
    { sourceId: 'cabi', citedFor: 'Xanthosoma sagittifolium compendium data' },
    { sourceId: 'faostat', citedFor: 'Production statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Tannia',
    description:
      'Xanthosoma sagittifolium as a crop: cormels and corm, Pythium root rot in vegetatively propagated clones, shade tolerance and confusion with taro.',
    keywords: [
      'tannia',
      'cocoyam',
      'Xanthosoma sagittifolium',
      'malanga',
      'cormels',
    ],
  },
  structuredData: { article: true },
};
