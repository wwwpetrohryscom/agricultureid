import type { CropContent } from '@/types/content';

export const hops: CropContent = {
  id: 'crop-hops',
  slug: 'hops',
  contentType: 'crop',
  title: 'Hops',
  scientificName: 'Humulus lupulus',
  alternativeNames: ['Common hop'],
  category: 'Beverage crop',
  subcategory: 'Perennial climbing bine',
  botanicalFamily: 'Cannabaceae (hemp family)',
  lifecycle: 'Perennial',
  summary:
    'Hops are grown for the resin glands inside the female cone, which supply the bitterness and aroma of beer. The crop is dioecious, so only female plants have commercial value, and its photoperiod requirement confines production to a narrow band of latitude.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The hop is a perennial climbing bine that dies back to a permanent rootstock each winter and regrows every season to the top of a trellis. What is harvested is not the whole cone but what is inside it: lupulin glands packed at the base of the bracts, holding the resins and essential oils that make the crop worth growing.',
    },
    {
      type: 'paragraph',
      text: 'Two constraints shape hop production more than soil or nutrition. The plant is dioecious, so half of any seedling population is commercially worthless, and it needs long days to flower, which restricts commercial growing to a band of latitude rather than a band of climate.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Cannabaceae (hemp family)' },
    {
      label: 'Growth habit',
      value: 'Perennial bine; dies back annually to a permanent rootstock',
    },
    {
      label: 'Breeding system',
      value: 'Dioecious — only female plants bear cones',
    },
    {
      label: 'Harvested part',
      value: 'Female cone (strobile), for its lupulin glands',
    },
    {
      label: 'Value determinants',
      value: 'Alpha acids for bitterness; essential oils for aroma',
    },
    {
      label: 'Production latitude',
      value: 'Chiefly between about 40° and 50°, north and south',
    },
    {
      label: 'Trellis height',
      value: 'Commercial hopyards are strung at roughly 5–6 m',
    },
  ],
  sections: [
    {
      id: 'dioecy',
      heading: 'Only half the species is a crop',
      body: [
        {
          type: 'paragraph',
          text: 'Male and female flowers occur on separate plants, and only the female produces cones. Commercial hopyards are therefore established vegetatively from rhizomes or rooted cuttings of a known female cultivar; raising hops from seed would produce an unusable mixture of sexes and an unpredictable resin profile.',
        },
        {
          type: 'paragraph',
          text: 'Males are excluded on purpose in most producing regions, because unpollinated cones are seedless and seed dilutes the resin fraction that buyers pay for. A volunteer male in or near a hopyard is a contamination problem rather than a pollination benefit.',
        },
      ],
    },
    {
      id: 'photoperiod',
      heading: 'Why latitude decides where hops grow',
      body: [
        {
          type: 'paragraph',
          text: 'Flowering requires long days during the growing season, and the crop also needs a period of winter cold before it will break dormancy properly. Together these confine reliable commercial production to roughly 40° to 50° of latitude in either hemisphere — closer to the equator the days are never long enough, and much further from it the season is too short.',
        },
        {
          type: 'paragraph',
          text: 'This is why hop growing is concentrated in a small number of regions at similar latitudes rather than spread across the temperate world, and why moving a cultivar between hemispheres changes its behaviour more than moving it between countries at the same latitude.',
        },
      ],
    },
    {
      id: 'trellis',
      heading: 'The trellis is the field',
      body: [
        {
          type: 'paragraph',
          text: 'Hops are trained up strings hung from a permanent overhead wire, and the bine climbs clockwise; a bine trained the other way will unwind. Establishing a hopyard therefore means building a structure that will stand for the productive life of the planting, and the cost of that structure dominates establishment.',
        },
        {
          type: 'paragraph',
          text: 'Each season the bines are trained by hand onto new strings, and at harvest the whole bine is cut down and taken to a stationary picking machine rather than being picked in the field. The trellis is dismantled to that extent every year and rebuilt with new strings.',
        },
      ],
    },
    {
      id: 'quality',
      heading: 'Alpha acids and aroma',
      body: [
        {
          type: 'paragraph',
          text: 'Hops are bought on two largely separate axes. Alpha acids are the resin fraction that isomerises during the boil to give bitterness, and high-alpha cultivars are grown for that fraction as an ingredient measured in kilograms of acid rather than of cone. Aroma cultivars are grown for their essential oil composition and are valued on sensory character.',
        },
        {
          type: 'paragraph',
          text: 'The two are not a quality ranking. A high-alpha cultivar is not a better hop than an aroma cultivar; they are sold into different parts of the same recipe, and a grower chooses between them as a market decision.',
        },
      ],
    },
    {
      id: 'agronomy',
      heading: 'Water and nutrition',
      body: [
        {
          type: 'paragraph',
          text: 'A hop bine builds several metres of growth in a few months and carries a large evaporating canopy at full height, so peak water demand is high and concentrated. Most modern hopyards are drip irrigated, which also keeps foliage dry — useful in a crop whose main diseases are foliar.',
        },
        {
          type: 'paragraph',
          text: 'Nutrient demand follows the same pattern: heavy through the climbing phase, tapering as cones fill. Excess nitrogen late produces vegetative growth at the expense of cone quality and makes the canopy denser and more disease-prone.',
        },
      ],
    },
    {
      id: 'diseases',
      heading: 'Downy and powdery mildew',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew is the disease that determines whether a hopyard survives in humid regions. It overwinters systemically in the rootstock and produces distorted, stunted spikes in spring, so an infected crown is a recurring problem rather than a seasonal one.',
        },
        {
          type: 'paragraph',
          text: 'Powdery mildew attacks leaves and cones and can render a crop unsaleable on appearance alone. Both are managed through resistant cultivars, canopy management to keep air moving, removal of early basal growth, and locally authorised products.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest and drying',
      body: [
        {
          type: 'paragraph',
          text: 'Cones are picked at a narrow maturity window judged on dry matter and feel; picked early they lack resin, picked late they shatter and oxidise. Because the whole bine is cut, harvest is a single destructive pass and the timing decision cannot be revisited.',
        },
        {
          type: 'paragraph',
          text: 'Cones are kilned promptly to a low moisture and then conditioned, because fresh cones heat and spoil within hours. Most of the crop is subsequently pelletised and cold-stored, since whole cones lose alpha acids in storage far faster than pellets do.',
        },
      ],
    },
    {
      id: 'longevity',
      heading: 'A long-lived planting',
      body: [
        {
          type: 'paragraph',
          text: 'A hopyard is established for many years, and the cultivar decision is correspondingly long-term in a market where demand for particular aroma varieties moves quickly. Growers carry the risk that a cultivar planted for a decade falls out of favour within it.',
        },
        {
          type: 'paragraph',
          text: 'That mismatch — a perennial planting serving a fashion-driven ingredient market — is the structural commercial problem of the crop, and it is the reason contracts in this sector are often written years ahead.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'verticillium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'two-spotted-spider-mite' },
    { type: 'pest', slug: 'japanese-beetle' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'post-harvest', slug: 'batch-drying' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'hemp' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Concentrated in temperate regions between roughly 40° and 50° latitude in both hemispheres. Cultivar recommendations and contract structures are regional.',
  climateContext:
    'Long-day flowering with a winter chilling requirement; high and concentrated summer water demand.',
  limitations: [
    'The latitude band is an approximation describing where commercial production is concentrated, not a boundary; production occurs outside it under particular local conditions.',
    'Alpha-acid content is a cultivar and season property measured on the lot; no figure here applies to any consignment.',
    'Trellis height, training practice and picking systems vary by region and are given as general description.',
    'Disease pressure and authorised control products are jurisdictional.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Hop production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Humulus lupulus pest and disease compendium data',
    },
    { sourceId: 'cornell-cals', citedFor: 'Hop agronomy and trellis practice' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Hops',
    description:
      'Humulus lupulus as a crop: dioecy and why only female plants are grown, the photoperiod latitude band, trellis systems, alpha acids and kilning.',
    keywords: ['hops', 'Humulus lupulus', 'alpha acids', 'lupulin', 'hopyard'],
  },
  structuredData: { article: true },
};
