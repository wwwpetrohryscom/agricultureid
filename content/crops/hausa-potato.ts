import type { CropContent } from '@/types/content';

export const hausaPotato: CropContent = {
  id: 'crop-hausa-potato',
  slug: 'hausa-potato',
  contentType: 'crop',
  title: 'Hausa Potato',
  scientificName: 'Coleus rotundifolius',
  alternativeNames: [
    'Frafra potato',
    'Sudan potato',
    'Plectranthus rotundifolius',
    'Solenostemon rotundifolius',
  ],
  category: 'Root and tuber crop',
  subcategory: 'Mint-family tuber crop',
  botanicalFamily: 'Lamiaceae (mint family)',
  lifecycle: 'Perennial grown as an annual',
  summary:
    'Hausa potato is a small aromatic tuber from the mint family — a family that produces almost no other tuber crop — and it has been shuffled between three genera, so almost every source files it under a different name.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Hausa potato is grown for small, aromatic tubers across the savanna zone of West Africa and, more recently, in parts of South and Southeast Asia. It is a member of the mint family, which produces essentially no other tuber crop of significance, and the tubers carry a distinct aroma that is the reason it holds its market against cheaper starches.',
    },
    {
      type: 'paragraph',
      text: 'It is also one of the most confusingly named crops in cultivation. The species has been placed in Coleus, Plectranthus and Solenostemon, and all three names remain in current literature, alongside common names including Frafra potato, Sudan potato and Zulu round potato.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lamiaceae (mint family)' },
    { label: 'Accepted name', value: 'Coleus rotundifolius' },
    {
      label: 'Names in current use',
      value: 'Plectranthus rotundifolius and Solenostemon rotundifolius',
    },
    {
      label: 'Harvested organ',
      value: 'Small aromatic tubers from a tuberous rootstock',
    },
    {
      label: 'Habit',
      value: 'Aromatic semi-succulent herb with erect or decumbent stems',
    },
    {
      label: 'Storage',
      value: 'Poor; tubers keep only a short time in hot conditions',
    },
  ],
  sections: [
    {
      id: 'mint-tuber',
      heading: 'A tuber crop in the mint family',
      body: [
        {
          type: 'paragraph',
          text: 'Almost no other Lamiaceae is grown for tubers, and the family is otherwise known for aromatic leaves. Hausa potato carries that aroma into its tubers, which is what distinguishes it in the market from potato, sweet potato or yam, and it means the crop is bought for flavour rather than only for starch.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Three genera, one plant',
      body: [
        {
          type: 'paragraph',
          text: 'The species has been published under Coleus, Plectranthus and Solenostemon, and the literature is split across all three. Anyone matching research, germplasm or trade records for this crop must search all three genus names, and a search on the accepted name alone will miss most of what has been written about it.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'A tuber that will not keep',
      body: [
        {
          type: 'paragraph',
          text: 'Storage is poor and the tubers lose their characteristic flavour within roughly two months under hot conditions. The traditional response is to leave them in the ground, or to store them in shaded, cooler pits, and it is why the crop is marketed locally and quickly rather than traded.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'planting-date',
      heading: 'Planting date does more than usual',
      body: [
        {
          type: 'paragraph',
          text: 'Trial work in West Africa reports that planting date strongly affects canopy development and yield in this crop, which is consistent with a short-day tuberising habit. That makes the sowing decision unusually consequential and is a stated focus of the limited agronomic research on it.',
        },
      ],
    },
    {
      id: 'smallholder',
      heading: 'A crop of the savanna smallholder',
      body: [
        {
          type: 'paragraph',
          text: "Production is concentrated in northern Nigeria, Ghana, Burkina Faso and neighbouring savanna countries, mostly on small plots and largely for local sale and household use. It is one of the crops repeatedly named in reviews of neglected African species, which is a statement about research attention rather than about the crop's importance to the people who grow it.",
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'Propagated from tubers',
      body: [
        {
          type: 'paragraph',
          text: 'Planting material is tubers saved from the previous crop, so a share of each harvest is held back and the crop carries whatever pathogens the previous cycle had. Tuber rot in store and in the field is the disease most often reported, and clean planting material is the main control available.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'yield',
      heading: 'Small tubers, high labour',
      body: [
        {
          type: 'paragraph',
          text: 'The tubers are small and set in a cluster around the base, so harvesting and cleaning are laborious relative to the weight recovered. That labour, rather than agronomic difficulty, is the main reason the crop has not expanded, and it is why mechanisation is named as a research priority for it.',
        },
      ],
    },
    {
      id: 'asia',
      heading: 'A second range in Asia',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is grown in parts of India, Sri Lanka, Malaysia and Indonesia, where it arrived long after its African domestication. Its presence in two separate regions with independent local names is part of why its records are so difficult to reconcile.',
        },
      ],
    },
    {
      id: 'research',
      heading: 'Thin evidence, honestly',
      body: [
        {
          type: 'paragraph',
          text: "Published agronomy for hausa potato is limited, and much of what exists is recent work from Nigerian and Ghanaian institutions and from orphan-crop programmes. AgricultureID states the crop's characteristics at the level that evidence supports and does not extrapolate figures from better-studied tuber crops.",
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'wireworms' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'shifting-cultivation' },
    { type: 'post-harvest', slug: 'clamp-storage' },
    { type: 'post-harvest', slug: 'shade-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'sweet-potato' },
    { type: 'crop', slug: 'taro' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'Savanna West Africa — northern Nigeria, Ghana, Burkina Faso and neighbouring countries — and parts of South and Southeast Asia.',
  climateContext:
    'Warm savanna; grown in the rainy season, sensitive to waterlogging and dependent on planting date for tuber set.',
  limitations: [
    'Published agronomy is thin and mostly regional; figures from other tuber crops are not transferable to this one.',
    'Photoperiod response is inferred from planting-date trials rather than measured directly and is stated as such.',
    'The species appears in the literature under three genus names, so any coverage statement about it is incomplete by construction.',
  ],
  sourceReferences: [
    { sourceId: 'iita', citedFor: 'West African root and tuber research' },
    { sourceId: 'cabi', citedFor: 'Coleus rotundifolius compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cgiar', citedFor: 'Orphan crop research' },
    { sourceId: 'nap-nrc', citedFor: 'Lost Crops of Africa assessment' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Hausa Potato',
    description:
      'Coleus rotundifolius as a crop: an aromatic mint-family tuber, three genus names in current use, poor storage, planting-date sensitivity and thin agronomy.',
    keywords: [
      'hausa potato',
      'Frafra potato',
      'Coleus rotundifolius',
      'Plectranthus rotundifolius',
      'orphan crop',
    ],
  },
  structuredData: { article: true },
};
