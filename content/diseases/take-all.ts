import type { PlantDiseaseContent } from '@/types/content';

export const takeAll: PlantDiseaseContent = {
  id: 'plant-disease-take-all',
  slug: 'take-all',
  contentType: 'plant-disease',
  title: 'Take-all',
  scientificName:
    'Gaeumannomyces tritici (formerly Gaeumannomyces graminis var. tritici)',
  alternativeNames: ['Take-all root rot', 'Whiteheads disease'],
  category: 'Plant disease',
  subcategory: 'Fungal root disease',
  causalAgent:
    'Fungus Gaeumannomyces tritici (formerly Gaeumannomyces graminis var. tritici)',
  pathogenType: 'fungal',
  summary:
    'Take-all is a soil-borne root disease of wheat and other cereals caused by Gaeumannomyces tritici. It rots the roots and stem base, producing stunted plants and prematurely white, empty heads, and typically worsens under continuous cereal cropping.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Take-all is a destructive root disease of wheat and related cereals caused by the soil-borne fungus Gaeumannomyces tritici. The fungus infects and rots the roots and stem base, blackening the tissue and cutting off the plant’s ability to take up water and nutrients. Affected plants are stunted and often ripen prematurely, producing bleached, empty heads known as whiteheads.',
    },
    {
      type: 'paragraph',
      text: 'The disease is closely tied to cropping sequence: it builds up under successive cereal crops and is a classic reason for rotating out of cereals. A well-known phenomenon called take-all decline can develop under prolonged monoculture, where disease severity eventually falls as suppressive soil microbial communities build up, though this is not a reliable substitute for rotation.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Soil-borne fungal root disease (Gaeumannomyces tritici)',
    },
    {
      label: 'Key sign',
      value:
        'Blackened roots and stem bases with stunted plants and white, empty heads',
    },
    {
      label: 'Hosts',
      value: 'Wheat, barley, triticale, and rye, with grasses also affected',
    },
    {
      label: 'Favoured by',
      value: 'Continuous cereals, moist soils, and high soil pH',
    },
    {
      label: 'Spread',
      value:
        'Fungus surviving on infected cereal residue and root debris in soil',
    },
    {
      label: 'Management basis',
      value:
        'Crop rotation, residue and volunteer control, balanced nutrition, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Take-all often appears as patches of stunted, uneven, yellowing plants that ripen early. Pulling affected plants reveals blackened, brittle roots and a shiny black discoloration of the stem base beneath the leaf sheaths. The most striking above-ground symptom is the presence of whiteheads: heads that turn white and remain empty or produce shrivelled grain because the root system has failed.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Whiteheads can also arise from other stem-base diseases and from insect or frost damage. The black, rotted roots and stem base seen when plants are lifted are the key features that point to take-all; a diagnostic laboratory can confirm the cause.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Gaeumannomyces tritici survives between crops as dark strands of fungal growth (hyphae) on infected cereal roots and residue in the soil. When a new cereal crop is grown, the fungus grows from this residue onto the roots, spreading along and between roots as they contact infected debris. Because it depends on cereal roots, its populations rise under continuous cereals and fall when a break crop removes the host.',
        },
        {
          type: 'list',
          items: [
            'Infected cereal residue and root debris carry the fungus between crops',
            'The fungus grows from residue onto the roots of the next cereal crop',
            'Successive cereal crops allow inoculum to build up in the soil',
            'A non-host break crop starves the fungus and lowers its populations',
          ],
        },
      ],
    },
    {
      id: 'hosts-and-conditions',
      heading: 'Hosts and favourable conditions',
      body: [
        {
          type: 'paragraph',
          text: 'Wheat is the most susceptible host, with barley, triticale, rye, and many grasses also affected; oats are comparatively resistant to the wheat form and are sometimes used as a break. Moist soils, near-neutral to alkaline soil pH, and poor early root growth all tend to increase severity, as do continuous cereals and grass weeds that maintain the fungus.',
        },
        {
          type: 'list',
          items: [
            'Continuous or closely rotated cereals that keep a host present',
            'Moist soil conditions that favour root infection',
            'Higher (neutral to alkaline) soil pH, which tends to increase disease',
            'Grass weeds and volunteer cereals that host the fungus between crops',
          ],
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because take-all is soil-borne and cereal-dependent, rotation is the cornerstone of management, supported by practices that keep roots healthy and reduce the host bridge between crops. There is no in-crop rescue treatment once roots are heavily rotted, so prevention is essential.',
        },
        {
          type: 'list',
          items: [
            'Use rotation with non-host break crops to reduce soil inoculum',
            'Control grass weeds and volunteer cereals that maintain the fungus',
            'Encourage vigorous early root growth through good establishment and balanced nutrition',
            'Manage residue and avoid practices that spread infected debris',
            'Track field history, since risk is often highest in the second and third successive cereals',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of seed treatments or other control products must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'triticale' },
    { type: 'crop', slug: 'rye' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'fusarium-head-blight' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'farming-system', slug: 'no-till-farming' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
    'soil-ph',
  ],
  geographicScope:
    'Global; occurs across cereal-growing regions, with severity strongly influenced by rotation, soil pH, and moisture rather than a single climate zone.',
  climateContext:
    'Favoured by moist soils that support root infection; disease pressure is driven more by cropping sequence, grass hosts, and soil pH than by air temperature.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Take-all decline and soil suppressiveness are variable and not a reliable substitute for rotation; local outcomes differ.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'ahdb',
      citedFor:
        'Take-all rotation, risk factors, and integrated management principles',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Take-all Root Disease of Cereals',
    description:
      'Take-all overview: Gaeumannomyces tritici biology, blackened roots and whiteheads, take-all decline, and rotation-based management in wheat and cereals.',
    keywords: [
      'take-all',
      'Gaeumannomyces tritici',
      'cereal root disease',
      'whiteheads',
    ],
  },
  structuredData: { article: true },
};
