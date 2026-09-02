import type { CropContent } from '@/types/content';

export const wasabi: CropContent = {
  id: 'crop-wasabi',
  slug: 'wasabi',
  contentType: 'crop',
  title: 'Wasabi',
  scientificName: 'Eutrema japonicum',
  alternativeNames: ['Japanese horseradish', 'Hon-wasabi'],
  category: 'Vegetable crop',
  subcategory: 'Perennial rhizome grown in flowing water or soil',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Perennial',
  summary:
    'Wasabi is grown in beds of continuously flowing cool spring water, takes around two years to reach harvest, and loses its pungency within minutes of grating — which is why most product sold as wasabi contains none of it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Wasabi is a brassica grown for its rhizome, and its cultivation is unlike any other vegetable. The premium system, sawa wasabi, grows plants in gravel beds through which cool spring water flows continuously, on terraces built into stream valleys. A soil-grown system, oka wasabi, exists and produces a different and lower-valued product.',
    },
    {
      type: 'paragraph',
      text: 'The crop takes roughly two years to reach harvest, the water must stay within a narrow temperature band year-round, and the pungency the market pays for begins to disappear within minutes of grating. Each of those facts removes a normal option from the supply chain.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    {
      label: 'Premium system',
      value: 'Sawa wasabi, grown in beds of continuously flowing spring water',
    },
    {
      label: 'Alternative system',
      value: 'Oka wasabi, grown in soil; a different, lower-valued product',
    },
    { label: 'Time to harvest', value: 'Approximately two years' },
    {
      label: 'Pungency',
      value: 'Develops on grating and dissipates within minutes',
    },
    {
      label: 'Market reality',
      value:
        'Most product sold as wasabi is horseradish and mustard with colouring',
    },
  ],
  sections: [
    {
      id: 'flowing-water',
      heading: 'A crop grown in running water',
      body: [
        {
          type: 'paragraph',
          text: 'Sawa wasabi beds are built as terraces in stream valleys, with cool spring water flowing continuously through gravel around the plant roots. The water supplies oxygen and holds temperature stable, and a bed whose flow stops loses the crop. Very few crops in the world are grown this way, and it confines production to sites with a suitable spring.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'temperature',
      heading: 'A narrow temperature band',
      body: [
        {
          type: 'paragraph',
          text: 'The water needs to stay cool year-round, roughly within the range of a mountain spring, and both warm summer water and freezing conditions damage the crop. Site selection is therefore hydrological rather than agricultural: the question is whether a spring of the right temperature and flow exists, not whether the soil is good.',
        },
      ],
    },
    {
      id: 'two-years',
      heading: 'Two years in the ground',
      body: [
        {
          type: 'paragraph',
          text: 'Plants remain in the bed for around two years before the rhizome reaches marketable size, so a bed is committed for that long and a disease outbreak costs two seasons rather than one. Growers stagger plantings so that harvest is continuous across beds.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'pungency',
      heading: 'Pungency is made at the moment of grating',
      body: [
        {
          type: 'paragraph',
          text: 'The rhizome contains glucosinolates and a separate enzyme, and grating brings them together to generate the isothiocyanates that give wasabi its heat. Those compounds are volatile and the pungency fades within minutes, which is why the rhizome is grated at the point of service and why there is no meaningful trade in prepared fresh wasabi.',
        },
      ],
    },
    {
      id: 'substitution',
      heading: 'What is usually sold as wasabi',
      body: [
        {
          type: 'paragraph',
          text: 'Most wasabi paste and powder in international markets is horseradish, mustard and colouring, with little or no Eutrema japonicum. This is a labelling and authenticity issue rather than an agronomic one, but it means market data on "wasabi" bears little relation to production of the crop.',
        },
      ],
    },
    {
      id: 'leaves',
      heading: 'More than the rhizome',
      body: [
        {
          type: 'paragraph',
          text: 'Leaves, petioles and flower stalks are all used, pickled or as a vegetable, and they can be taken during the two-year cycle. That income during the wait is part of what makes the long cycle viable, and it is invisible in trade figures that count only rhizome.',
        },
      ],
    },
    {
      id: 'disease',
      heading: 'Disease in a shared water supply',
      body: [
        {
          type: 'paragraph',
          text: 'Because water flows through beds in sequence, a soil-borne or water-borne pathogen introduced at the top of a system can move down it, and blackleg and root rots are serious in this crop. Bed sanitation and clean planting material are more critical here than in a crop where beds are hydrologically independent.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'Propagation from offsets',
      body: [
        {
          type: 'paragraph',
          text: 'Plants are propagated from offsets taken from harvested crowns and increasingly by tissue culture, because seed is variable and slow. Clonal propagation also carries disease, so the source of planting material is a standing risk.',
        },
      ],
    },
    {
      id: 'geography',
      heading: 'A very small production base',
      body: [
        {
          type: 'paragraph',
          text: 'Japan is the principal producer, with smaller commercial production in Taiwan, New Zealand, the United States and the United Kingdom. The site requirements are restrictive enough that the crop has not expanded the way its price would otherwise justify.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'bacterial-wilt' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'slugs' },
    { type: 'pest', slug: 'snails' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'gleysol' },
    { type: 'soil', slug: 'fluvisol' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'aquaponics' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'irrigation-method', slug: 'subsurface-irrigation' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'radish' },
    { type: 'crop', slug: 'daikon' },
    { type: 'crop', slug: 'mustard' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Japan is the principal producer. Smaller commercial production exists in Taiwan, New Zealand, the United States and the United Kingdom.',
  climateContext:
    'Cool, shaded and humid; the binding requirement is a year-round supply of cool flowing spring water rather than a climate zone.',
  limitations: [
    'Water temperature and flow requirements vary between sites and systems and are not given as a specification.',
    'Labelling rules for products sold as wasabi are jurisdictional and are not reproduced here.',
    'Soil-grown and water-grown wasabi are commercially different products and figures for one do not describe the other.',
  ],
  sourceReferences: [
    { sourceId: 'jp-maff', citedFor: 'Japanese wasabi production practice' },
    { sourceId: 'cabi', citedFor: 'Eutrema japonicum compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'nz-mpi', citedFor: 'New Zealand specialty crop production' },
    { sourceId: 'fao', citedFor: 'Specialty vegetable production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Wasabi',
    description:
      'Eutrema japonicum as a crop: cultivation in flowing spring water, a two-year cycle, pungency that fades minutes after grating and widespread substitution.',
    keywords: [
      'wasabi',
      'Eutrema japonicum',
      'sawa wasabi',
      'flowing water cultivation',
      'Japanese horseradish',
    ],
  },
  structuredData: { article: true },
};
