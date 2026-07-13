import type { PlantDiseaseContent } from '@/types/content';

export const septoriaTriticiBlotch: PlantDiseaseContent = {
  id: 'plant-disease-septoria-tritici-blotch',
  slug: 'septoria-tritici-blotch',
  contentType: 'plant-disease',
  title: 'Septoria Tritici Blotch',
  scientificName:
    'Zymoseptoria tritici (teleomorph Mycosphaerella graminicola)',
  alternativeNames: ['Septoria leaf blotch', 'STB', 'Speckled leaf blotch'],
  category: 'Plant disease',
  subcategory: 'Fungal leaf disease',
  causalAgent:
    'Fungus Zymoseptoria tritici (formerly Septoria tritici; teleomorph Mycosphaerella graminicola)',
  pathogenType: 'fungal',
  summary:
    'Septoria tritici blotch is a foliar fungal disease of wheat caused by Zymoseptoria tritici. It produces irregular tan lesions studded with small dark fruiting bodies and is one of the most damaging leaf diseases of wheat in temperate, humid regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Septoria tritici blotch is caused by the fungus Zymoseptoria tritici and is among the most economically important leaf diseases of wheat in cool, wet climates such as north-western Europe. It attacks the leaves, gradually reducing the healthy green area that the plant needs to fill grain, and is most damaging when it reaches the upper leaves during stem elongation and heading.',
    },
    {
      type: 'paragraph',
      text: 'A distinctive feature of the disease is the presence of tiny dark fruiting bodies, called pycnidia, embedded within the dead leaf tissue. The pathogen has a relatively long latent period between infection and visible symptoms, which makes early detection difficult and means disease can be building up in a crop before it becomes obvious.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal leaf disease (Zymoseptoria tritici)' },
    {
      label: 'Key sign',
      value:
        'Irregular tan-to-brown blotches on leaves containing small dark pycnidia',
    },
    { label: 'Hosts', value: 'Wheat, and to a lesser extent triticale' },
    {
      label: 'Favoured by',
      value: 'Cool, wet, humid weather with frequent rain splash',
    },
    {
      label: 'Spread',
      value:
        'Rain-splashed and wind-borne spores from crop residue and lower leaves',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, residue and rotation management, sowing date, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Symptoms usually begin as small chlorotic (yellowing) flecks that develop into irregular, tan-to-brown blotches with a somewhat angular outline, often bounded by leaf veins. As the lesions age, numerous small dark pycnidia become visible within the dead tissue, giving it a speckled or peppered appearance that is the most reliable field diagnostic feature.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Septoria tritici blotch can be confused with tan spot and other leaf blotches early on. The presence of dark pycnidia embedded in the lesion, best seen with a hand lens, helps distinguish it; confirm with a diagnostic laboratory when a management decision depends on it.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Zymoseptoria tritici survives between crops on infected wheat residue and on volunteer plants. From this residue it produces wind-dispersed sexual spores (ascospores) that can initiate infections over distance, while asexual spores (pycnidiospores) formed in pycnidia are moved shorter distances by rain splash within and between plants, driving the disease up the canopy.',
        },
        {
          type: 'list',
          items: [
            'Infected crop residue and volunteer wheat carry the fungus between seasons',
            'Wind-dispersed ascospores can start new infections across a region',
            'Rain-splashed pycnidiospores move the disease from lower to upper leaves',
            'A long latent period allows infection to build before symptoms appear',
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
          text: 'Wheat is the principal host, with triticale also affected to a lesser degree. Disease pressure is greatest in cool, humid regions where rainfall keeps the canopy wet and provides the splash events the pathogen needs to spread upward. Early sowing, dense canopies, and susceptible varieties all tend to increase risk.',
        },
        {
          type: 'list',
          items: [
            'Cool, wet, humid weather with frequent rainfall and prolonged leaf wetness',
            'Early autumn sowing that exposes crops to more infection cycles',
            'Dense, lush canopies that stay wet and favour splash dispersal',
            'Susceptible varieties and short rotations that keep inoculum high',
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
          text: 'Management is built on integrated tactics that reduce inoculum and slow the disease reaching the upper leaves, rather than on any single measure. Resistant varieties are the foundation, supported by cultural practices and, where justified, protection of the upper canopy under locally authorized guidance.',
        },
        {
          type: 'list',
          items: [
            'Choose varieties with good resistance ratings for the local region',
            'Use crop rotation and residue management to reduce carry-over inoculum',
            'Consider later sowing where agronomically suitable to reduce early infection',
            'Avoid excessive nitrogen that produces dense, humid canopies',
            'Monitor upper leaves closely from stem elongation through heading',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of fungicides or other control products must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'triticale' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'tan-spot' },
    { type: 'plant-disease', slug: 'wheat-leaf-rust' },
    { type: 'plant-disease', slug: 'fusarium-head-blight' },
  ],
  connections: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global; most damaging in cool, humid wheat-growing regions such as north-western Europe, with severity varying by season, variety, and local rainfall.',
  climateContext:
    'Favoured by cool, wet, humid conditions with frequent rain splash that disperses spores up the canopy; a long latent period lets infections build before symptoms show.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Pathogen populations and their sensitivity to control-product classes vary by region and change over time; consult local authorities for current status.',
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
        'Wheat disease identification and integrated management principles',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Septoria Tritici Blotch of Wheat',
    description:
      'Septoria tritici blotch overview: Zymoseptoria tritici biology, tan pycnidia-studded lesions, favourable conditions, and integrated management in wheat.',
    keywords: [
      'septoria tritici blotch',
      'Zymoseptoria tritici',
      'septoria leaf blotch',
      'wheat disease',
    ],
  },
  structuredData: { article: true },
};
