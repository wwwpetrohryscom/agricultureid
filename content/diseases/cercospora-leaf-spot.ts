import type { PlantDiseaseContent } from '@/types/content';

export const cercosporaLeafSpot: PlantDiseaseContent = {
  id: 'plant-disease-cercospora-leaf-spot',
  slug: 'cercospora-leaf-spot',
  contentType: 'plant-disease',
  title: 'Cercospora Leaf Spot',
  scientificName: 'Cercospora beticola',
  alternativeNames: ['Cercospora leaf spot of sugar beet', 'CLS'],
  category: 'Plant disease',
  subcategory: 'Fungal leaf disease',
  causalAgent: 'Fungus Cercospora beticola',
  pathogenType: 'fungal',
  summary:
    'Cercospora leaf spot is a major foliar fungal disease of sugar beet and related Beta crops caused by Cercospora beticola. It produces numerous small, circular spots with tan centres and dark reddish borders that can coalesce and destroy the canopy in warm, humid weather.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cercospora leaf spot is considered the most damaging foliar disease of sugar beet in many production regions, caused by the fungus Cercospora beticola. It also affects related Beta crops such as table beet and chard, and can occur on some other leafy hosts, reducing the healthy leaf area the plant needs to build sugar in the root.',
    },
    {
      type: 'paragraph',
      text: 'The disease is strongly favoured by warm, humid weather and is recognised by the numerous small spots that develop on the leaves, each with a pale centre and a distinct dark border. Under favourable conditions the spots multiply and merge, leading to extensive leaf death and the growth of new leaves at the expense of root yield and sugar content.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal leaf disease (Cercospora beticola)' },
    {
      label: 'Key sign',
      value:
        'Numerous small circular spots with tan centres and dark reddish-brown borders',
    },
    {
      label: 'Hosts',
      value:
        'Sugar beet, table beet (beetroot), and related Beta crops; also spinach',
    },
    {
      label: 'Favoured by',
      value: 'Warm temperatures with high humidity and leaf wetness',
    },
    {
      label: 'Spread',
      value: 'Spores from infected residue and seed, then wind and rain splash',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, rotation and residue management, monitoring, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Symptoms begin as small, circular spots scattered across the leaves, each with a light tan to grey centre surrounded by a distinct dark reddish-brown to purplish border. In the centre of mature spots, tiny dark structures bearing spores can sometimes be seen with a hand lens. As spots become numerous they coalesce, and heavily infected leaves collapse and die, often prompting the plant to produce new foliage.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The small spots with pale centres and dark borders help distinguish Cercospora leaf spot from other leaf spots and from bacterial diseases. Where the distinction affects management, a diagnostic laboratory can confirm the cause.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Cercospora beticola survives between crops on infected beet residue and can also be carried on seed and on related weed hosts. Spores (conidia) produced on residue and on lesions are dispersed by wind and rain splash to infect leaves. Under warm, humid conditions with leaf wetness, the fungus produces new spores and repeats the cycle rapidly, allowing the disease to intensify through the season.',
        },
        {
          type: 'list',
          items: [
            'Infected beet residue, seed, and weed hosts carry the fungus over',
            'Wind- and rain-dispersed conidia infect the leaves',
            'Warm, humid weather with leaf wetness favours rapid cycling',
            'Coalescing spots lead to leaf collapse and repeated refoliation',
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
          text: 'Sugar beet is the most economically important host, with table beet, chard, and related Beta crops also affected, and spinach susceptible in some situations. Warm temperatures combined with high humidity, frequent rain, dew, and dense canopies that hold moisture strongly favour the disease, and continuous beet cropping with retained residue increases inoculum.',
        },
        {
          type: 'list',
          items: [
            'Warm temperatures with high humidity and prolonged leaf wetness',
            'Continuous beet cropping with infected residue retained',
            'Dense canopies that keep the microclimate humid',
            'Susceptible varieties and nearby infected weed or volunteer hosts',
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
          text: 'Management combines resistant varieties with rotation, residue management, and monitoring so that the disease can be tracked and any response timed under local guidance. Because the fungus can develop reduced sensitivity to some product classes, integrated tactics are important for durability.',
        },
        {
          type: 'list',
          items: [
            'Grow varieties with better Cercospora resistance ratings',
            'Use rotation and residue management to reduce carry-over inoculum',
            'Monitor crops and use disease-forecasting tools where available',
            'Avoid dense canopies and conditions that keep foliage continuously wet',
            'Control volunteer and weed hosts that reservoir the fungus',
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
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'beetroot' },
    { type: 'crop', slug: 'spinach' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
    { type: 'plant-disease', slug: 'early-blight' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global in sugar-beet and Beta-crop regions; most damaging where warm, humid summers coincide with continuous beet cropping and retained residue.',
  climateContext:
    'Favoured by warm temperatures with high humidity and prolonged leaf wetness; infected residue, seed, and weed hosts supply the inoculum for each season.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'The fungus can develop reduced sensitivity to some control-product classes, and this varies by region over time; consult local authorities.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'umn-extension',
      citedFor:
        'Sugar-beet identification, forecasting, and integrated management',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Cercospora Leaf Spot of Sugar Beet',
    description:
      'Cercospora leaf spot overview: Cercospora beticola biology, spotted leaf lesions, warm-humid disease cycle, and integrated management in sugar beet.',
    keywords: [
      'cercospora leaf spot',
      'Cercospora beticola',
      'sugar beet disease',
      'leaf spot',
    ],
  },
  structuredData: { article: true },
};
