import type { CropContent } from '@/types/content';

export const uplandCotton: CropContent = {
  id: 'crop-upland-cotton',
  slug: 'upland-cotton',
  contentType: 'crop',
  title: 'Upland Cotton',
  scientificName: 'Gossypium hirsutum',
  alternativeNames: ['Upland', 'American cotton'],
  category: 'Fibre crop',
  subcategory: 'Allotetraploid annual cotton',
  botanicalFamily: 'Malvaceae (mallow family)',
  lifecycle: 'Annual in cultivation; perennial in origin',
  summary:
    'Gossypium hirsutum supplies the large majority of world cotton fibre. It is one of four cultivated cotton species, and the medium-staple lint it produces sets the specification that most spinning systems are built around.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Four species of Gossypium are grown for fibre, and they are not interchangeable. Upland cotton is the allotetraploid species that dominates world production, and its lint occupies the medium-staple band that ordinary ring and rotor spinning is designed for.',
    },
    {
      type: 'paragraph',
      text: 'The plant is perennial by nature and is grown as an annual, terminated at the end of each season. Much of its agronomy consists of managing that mismatch: an indeterminate plant that will keep producing vegetative growth has to be pushed into setting and finishing a crop within one season.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Malvaceae (mallow family)' },
    { label: 'Ploidy', value: 'Allotetraploid, 2n = 4x = 52' },
    {
      label: 'Share of world cotton',
      value: 'The large majority of global lint production',
    },
    {
      label: 'Staple class',
      value:
        'Medium staple — shorter than Gossypium barbadense extra-long staple',
    },
    { label: 'Harvested products', value: 'Lint, cottonseed and linters' },
    {
      label: 'Growth habit',
      value: 'Indeterminate; managed to force cut-out and even boll maturity',
    },
  ],
  sections: [
    {
      id: 'four-species',
      heading: 'One of four cultivated cottons',
      body: [
        {
          type: 'paragraph',
          text: 'Upland cotton, Gossypium barbadense, and the two Old World diploids G. arboreum and G. herbaceum are all grown commercially, but they differ in fibre length, fineness and strength, and in the yarns they can be spun into. Upland is grown for volume and versatility; barbadense for the extra-long staple that fine-count yarns require.',
        },
        {
          type: 'paragraph',
          text: 'Because "cotton" in trade statistics usually means upland unless stated otherwise, a figure for cotton production and a figure for upland production are close to the same number — but a specification written for one species does not transfer to another.',
        },
      ],
    },
    {
      id: 'where-grown',
      heading: 'Where it is grown',
      body: [
        {
          type: 'paragraph',
          text: 'China, India, the United States, Brazil and Pakistan account for most of the crop, under strikingly different systems. Indian cotton is largely rainfed and smallholder-grown; Brazilian cotton is a large-scale second crop planted after soybean in the same season; irrigated production dominates in parts of China, Pakistan, Central Asia and the western United States.',
        },
        {
          type: 'paragraph',
          text: 'These systems differ so much in planting date, plant population and harvest method that yield comparisons between them are rarely comparing the same thing.',
        },
      ],
    },
    {
      id: 'fruiting',
      heading: 'Fruiting, shedding and cut-out',
      body: [
        {
          type: 'paragraph',
          text: 'The plant sets fruiting positions in a predictable sequence up the main stem and out along each fruiting branch, and it sheds squares and young bolls whenever the load exceeds what current photosynthesis can carry. Shedding is normal physiology rather than damage, and a plant that sheds nothing has usually set too little.',
        },
        {
          type: 'paragraph',
          text: 'Management aims at cut-out — the point at which the plant stops initiating new fruiting positions and finishes the bolls it has — early enough for those bolls to mature before the season ends. Water, nitrogen and, in intensive systems, growth regulators are all used to bring that point forward or hold it back.',
        },
      ],
    },
    {
      id: 'water',
      heading: 'Water',
      body: [
        {
          type: 'paragraph',
          text: 'Cotton is comparatively tolerant of water deficit and comparatively intolerant of waterlogging, and it is grown across a wide moisture range. The sensitive window is flowering and early boll fill, when a deficit reduces boll retention directly.',
        },
        {
          type: 'paragraph',
          text: 'Late-season irrigation is a common error: water applied after the useful bolls have set encourages regrowth, delays maturity and complicates defoliation without adding yield.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'The pest complex and Bt cotton',
      body: [
        {
          type: 'paragraph',
          text: 'Bollworms boring into squares and bolls have historically been the defining pest problem, and insect-resistant cotton expressing Bacillus thuringiensis proteins changed the economics of the crop across most producing countries by suppressing them. The boll weevil was eliminated from large parts of North America through an area-wide eradication programme rather than by breeding.',
        },
        {
          type: 'paragraph',
          text: 'Two consequences followed. Resistance to Bt proteins has emerged in several bollworm populations where refuge requirements were poorly observed, and sucking pests such as whitefly, jassids and mirids — untouched by Bt — have risen in relative importance as broad-spectrum sprays were withdrawn.',
        },
      ],
    },
    {
      id: 'diseases',
      heading: 'Diseases',
      body: [
        {
          type: 'paragraph',
          text: 'Verticillium and Fusarium wilts are the principal soilborne constraints and are managed largely through cultivar tolerance and rotation, since neither is treatable once a field is infested. Seedling damping-off is a routine early-season risk on cold, wet soils.',
        },
        {
          type: 'paragraph',
          text: 'Cotton leaf curl virus, vectored by whitefly, has caused severe losses in South Asia and is a plant-health problem defined by vector management and resistant material rather than by direct treatment of the disease.',
        },
      ],
    },
    {
      id: 'defoliation-harvest',
      heading: 'Defoliation and harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Mechanically harvested cotton is defoliated before picking so that leaf trash does not contaminate the lint. Timing is judged on the proportion of bolls open and on the maturity of the highest bolls worth keeping; defoliating early sacrifices immature bolls, defoliating late risks weather damage to open lint.',
        },
        {
          type: 'paragraph',
          text: 'Hand-picked crops skip defoliation entirely and are picked over several passes, which yields cleaner lint at much higher labour cost. Which system is used is one of the strongest determinants of trash content in the bale.',
        },
      ],
    },
    {
      id: 'ginning-classing',
      heading: 'Ginning and fibre classing',
      body: [
        {
          type: 'paragraph',
          text: 'Ginning separates lint from seed, and saw gins are used for upland where roller gins are used for longer-stapled cottons. Aggressive ginning and over-drying to speed the process both break fibre and cost length and strength that the field produced.',
        },
        {
          type: 'paragraph',
          text: 'Bales are classed on measured fibre properties — length, uniformity, strength, micronaire, colour grade and trash — mostly by instrument. Micronaire, which conflates fineness with maturity, is the property most often penalised, and both immature and overly coarse fibre are discounted.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Cottonseed as a second product',
      body: [
        {
          type: 'paragraph',
          text: 'Every bale of lint comes with substantially more weight of seed, which is crushed for oil and meal or fed whole to ruminants. Cottonseed revenue is a real part of crop income rather than a by-product footnote.',
        },
        {
          type: 'paragraph',
          text: 'Gossypol in the seed restricts its use in monogastric diets, which is why whole cottonseed goes principally to cattle and why the meal is used within defined inclusion limits.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'verticillium-wilt' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'cotton-bollworm' },
    { type: 'pest', slug: 'pink-bollworm' },
    { type: 'pest', slug: 'boll-weevil' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'vertisol' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'commodity', slug: 'cotton-lint' },
    { type: 'commodity', slug: 'cottonseed' },
    { type: 'commodity', slug: 'seed-cotton' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'machinery', slug: 'self-propelled-sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'soybean' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'Global overview. Planting dates, growth-regulator practice, defoliation timing and approved biotech traits are jurisdiction-specific.',
  climateContext:
    'Warm-season crop of subtropical and warm temperate regions; sensitive to water deficit at flowering and to waterlogging at any stage.',
  limitations: [
    'Approval status of insect-resistant and herbicide-tolerant cotton varies by country and is not stated here; consult the national authority.',
    'Fibre classing standards and their tolerances are set by national systems and differ between origins.',
    'Bollworm resistance to Bt proteins is documented in some populations and absent in others; local resistance status governs refuge and rotation decisions.',
    'Production statistics change annually and should be taken from primary datasets.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Cotton production systems and context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Fibre quality measurement and cotton research',
    },
    { sourceId: 'cabi', citedFor: 'Cotton pest and disease compendium data' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Upland Cotton',
    description:
      'Gossypium hirsutum as a distinct species: how it differs from the other cultivated cottons, cut-out, the Bt pest complex, ginning and fibre classing.',
    keywords: [
      'upland cotton',
      'Gossypium hirsutum',
      'cotton lint',
      'Bt cotton',
      'micronaire',
    ],
  },
  structuredData: { article: true },
};
