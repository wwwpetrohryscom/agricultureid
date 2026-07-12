import type { PlantDiseaseContent } from '@/types/content';

export const anthracnose: PlantDiseaseContent = {
  id: 'disease-anthracnose',
  slug: 'anthracnose',
  contentType: 'plant-disease',
  title: 'Anthracnose',
  scientificName: 'Colletotrichum spp.',
  alternativeNames: ['Colletotrichum leaf and fruit rot'],
  category: 'Plant disease',
  subcategory: 'Fungal disease',
  causalAgent: 'Fungi of the genus Colletotrichum',
  pathogenType: 'fungal',
  summary:
    'Anthracnose is a group of fungal diseases caused by Colletotrichum species, producing sunken, dark lesions on leaves, stems, pods, and fruit. It affects a wide range of crops, including common bean, mango, banana, and cucurbits, and is a major cause of post-harvest fruit losses.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Anthracnose refers to a group of related diseases caused by fungi in the genus Colletotrichum, which infect many different crops through host-adapted species and strains. Symptoms typically include sunken, dark, water-soaked lesions on leaves, stems, pods, and fruit.',
    },
    {
      type: 'paragraph',
      text: 'On tropical fruit such as mango and banana, Colletotrichum species are notable for a quiescent, or latent, infection strategy: the fungus infects immature, green fruit but does not produce visible symptoms until the fruit begins to ripen, making anthracnose a major challenge in post-harvest handling and storage.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal disease group (genus Colletotrichum)' },
    {
      label: 'Key sign',
      value:
        'Sunken, dark lesions, often with concentric rings of pinkish spore masses in humid conditions',
    },
    {
      label: 'Hosts',
      value: 'Common bean, mango, banana, cucurbits, and many other crops',
    },
    {
      label: 'Favoured by',
      value: 'Warm, humid, or wet conditions and rain-splashed spore dispersal',
    },
    {
      label: 'Spread',
      value:
        'Rain-splashed spores, infected seed, and contaminated plant debris',
    },
    {
      label: 'Management basis',
      value:
        'Clean seed, sanitation, resistant varieties, and careful post-harvest handling',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose typically appears as sunken, dark brown to black lesions on leaves, stems, pods, or fruit. In humid weather, small fruiting structures called acervuli often develop within the lesions, producing masses of pink to orange, sticky spores that give affected areas a distinctive salmon-coloured sheen. On bean pods, lesions often form dark, sunken cankers; on mango and banana fruit, lesions expand rapidly as fruit ripens.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'On tropical fruit, anthracnose infection can occur weeks before any symptoms are visible, remaining latent until ripening begins. Where identification or timing matters for a decision, consult a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Colletotrichum species produce spores in acervuli on infected tissue that are dispersed mainly by rain splash over short distances, though infected seed and planting material can move the fungus over long distances. On some hosts, spores can infect young, immature tissue and then remain quiescent, resuming active growth only as the tissue matures or ripens and its natural defences change.',
        },
        {
          type: 'list',
          items: [
            'Survives between seasons in infected crop debris, seed, and, on perennial hosts, in twigs and old lesions',
            'Warm, wet, or humid weather with splashing rain favours spore release and new infections',
            'Wounds and natural openings provide additional infection points on some hosts',
          ],
        },
      ],
    },
    {
      id: 'affected-hosts',
      heading: 'Affected hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose affects a very wide range of crops through different, largely host-adapted Colletotrichum species. Common bean is affected by pod and leaf lesions that can reduce seed quality; mango and banana suffer serious post-harvest fruit rot; and cucurbits such as cucumber can develop leaf, stem, and fruit lesions in the field.',
        },
        {
          type: 'list',
          items: [
            'Common bean: leaf, pod, and stem lesions that can affect seed quality',
            'Mango and banana: quiescent fruit infections that develop into rot after harvest',
            'Cucumber and other cucurbits: leaf spots, stem lesions, and fruit rot',
          ],
        },
      ],
    },
    {
      id: 'risk-factors',
      heading: 'Risk factors',
      body: [
        {
          type: 'list',
          items: [
            'Warm temperatures combined with rain, dew, or high humidity',
            'Overhead or splash-prone irrigation that disperses spores',
            'Infected or untreated seed and planting material',
            'Dense canopies and poor air circulation',
            'Rough handling of fruit that creates wounds during and after harvest',
          ],
        },
      ],
    },
    {
      id: 'prevention-and-monitoring',
      heading: 'Prevention and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Because several Colletotrichum species can establish quiescent infections well before symptoms appear, management emphasises clean planting material, sanitation, and careful post-harvest handling alongside field-level prevention.',
        },
        {
          type: 'list',
          items: [
            'Use certified, disease-free seed and planting material where available',
            'Choose resistant or tolerant varieties where available',
            'Remove and destroy infected plant debris and prunings',
            'Improve air movement through spacing and canopy management',
            'Handle harvested fruit carefully to minimise wounds and manage post-harvest storage conditions',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of fungicides or other control products, in the field or post-harvest, must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'cucumber' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'temperature' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Global; anthracnose occurs wherever susceptible crops are grown, with particular importance in warm, humid regions and in tropical fruit supply chains.',
  climateContext:
    'Favoured by warm temperatures combined with rain, dew, or high humidity that disperse spores and support infection.',
  limitations: [
    'This is a general overview of a disease group with many host-adapted causal species; specific biology and risk vary by crop and region.',
    'Quiescent infections on some hosts can complicate timing of both field monitoring and post-harvest inspection.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Colletotrichum biology, host range, and disease cycle',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    {
      sourceId: 'umn-extension',
      citedFor: 'Field crop and vegetable risk factors',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Anthracnose',
    description:
      'Anthracnose explained: Colletotrichum biology, disease cycle, affected hosts such as bean, mango, and banana, risk factors, and prevention guidance.',
    keywords: ['anthracnose', 'Colletotrichum', 'fruit rot', 'plant disease'],
  },
  structuredData: { article: true },
};
