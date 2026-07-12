import type { PlantDiseaseContent } from '@/types/content';

export const lateBlight: PlantDiseaseContent = {
  id: 'disease-late-blight',
  slug: 'late-blight',
  contentType: 'plant-disease',
  title: 'Late Blight',
  scientificName: 'Phytophthora infestans',
  alternativeNames: ['Potato blight', 'Tomato late blight'],
  category: 'Plant disease',
  subcategory: 'Oomycete disease',
  causalAgent: 'Oomycete Phytophthora infestans',
  pathogenType: 'oomycete',
  summary:
    'Late blight is a destructive oomycete disease of potato and tomato that can destroy foliage and tubers within days under cool, wet conditions. It remains one of the most economically significant plant diseases worldwide.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Late blight is caused by Phytophthora infestans, a fungus-like oomycete (sometimes called a water mold) rather than a true fungus. It attacks the foliage, stems, and tubers or fruit of potato and tomato, and under favorable weather it can destroy an unprotected crop within one to two weeks.',
    },
    {
      type: 'paragraph',
      text: 'The disease is best known historically as the primary cause of the Irish potato famine of the 1840s, and it remains a leading production constraint for potato and tomato growers around the world, requiring continual monitoring rather than a one-time treatment.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Oomycete disease (water mold, not a true fungus)',
    },
    {
      label: 'Key sign',
      value:
        'Water-soaked, rapidly enlarging brown-to-black lesions on leaves and stems',
    },
    {
      label: 'Hosts',
      value: 'Potato and tomato; some related solanaceous plants',
    },
    {
      label: 'Favoured by',
      value: 'Cool temperatures, high humidity, and prolonged leaf wetness',
    },
    {
      label: 'Spread',
      value:
        'Airborne and rain-splashed sporangia; infected seed tubers and transplants',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, sanitation, forecasting, authorized products',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Late blight typically appears as pale green to brown, water-soaked lesions on leaves, often starting at leaf margins or tips and expanding rapidly. In humid conditions, a white, fuzzy sporulating growth can often be seen on the underside of affected leaves, which helps distinguish it from other leaf blights. Stems can develop dark brown to black lesions, and infected tubers show a coppery to reddish-brown surface discoloration with a firm, dry rot extending into the flesh. On tomato fruit, infection produces firm, greasy, dark blotches.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Other diseases, such as early blight, can look superficially similar in the field. Where identification matters for a management decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'As an oomycete, Phytophthora infestans differs from true fungi in fundamental ways, including the chemistry of its cell walls. Its disease cycle centers on sporangia produced on infected tissue, which are readily dispersed by wind and rain. Under cool, moist conditions, sporangia can release swimming zoospores that are attracted to fresh plant surfaces, where they encyst and infect.',
        },
        {
          type: 'paragraph',
          text: 'Under favorable weather, this cycle can repeat roughly every five to seven days, allowing epidemics to develop very quickly. Between growing seasons, the pathogen survives mainly in infected seed tubers, cull piles, and volunteer potato plants; where both mating types of the pathogen are present, it can also survive in soil as long-lived oospores produced through sexual reproduction.',
        },
        {
          type: 'list',
          items: [
            'Infected seed tubers or transplants carried over between seasons',
            'Cull piles and volunteer potato plants left in or near fields',
            'Soil-borne oospores, where both pathogen mating types occur together',
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
          text: 'Potato and tomato, both members of the Solanaceae, are the principal hosts of late blight. Some related wild and weedy solanaceous plants can also be infected and, in some regions, act as an additional source of inoculum between cropping seasons.',
        },
        {
          type: 'table',
          caption: 'Typical symptom pattern by host',
          columns: ['Host', 'Foliar symptoms', 'Other affected tissue'],
          rows: [
            [
              'Potato',
              'Dark, water-soaked lesions; white sporulation on leaf undersides',
              'Tubers: reddish-brown, firm dry rot',
            ],
            [
              'Tomato',
              'Similar leaf lesions with rapid collapse of foliage',
              'Fruit: firm, greasy brown blotches',
            ],
          ],
        },
      ],
    },
    {
      id: 'historical-and-economic-significance',
      heading: 'Historical and economic significance',
      body: [
        {
          type: 'paragraph',
          text: 'Late blight is historically significant as the cause of the Irish potato famine in the 1840s, an event that reshaped agricultural science and disease surveillance. The disease remains a major recurring cost for potato and tomato production globally, and pathogen populations continue to be tracked because their composition can shift over time and by region.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Movement of infected seed tubers or transplants is one of the main ways the disease spreads between regions, which is why certified disease-free planting material and phytosanitary controls matter for growers and regulators alike.',
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
            'Cool temperatures combined with high humidity or extended leaf wetness',
            'Overhead irrigation, fog, or dew that keeps foliage wet for long periods',
            'Use of infected seed tubers or transplants',
            'Nearby cull piles or volunteer potato plants carrying the pathogen over',
            'Dense canopies that trap moisture and slow drying',
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
          text: 'Because epidemics can develop within days once the pathogen is established, management emphasizes preventing introduction and buildup of inoculum ahead of favorable weather, rather than reacting after a crop is already heavily infected.',
        },
        {
          type: 'list',
          items: [
            'Plant certified disease-free seed potatoes and transplants',
            'Select resistant or tolerant varieties where available',
            'Destroy cull piles and volunteer plants promptly',
            'Use weather-based forecasting and monitoring tools from local extension services to time scouting',
            'Avoid overhead irrigation practices that extend leaf wetness',
            'Scout fields regularly, especially during cool, humid weather windows',
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
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'tomato' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Global; late blight occurs wherever potato and tomato are grown, with disease pressure concentrated in cool, humid production regions and seasons.',
  climateContext:
    'Favoured by cool temperatures (roughly 10-20°C) and high humidity or prolonged leaf wetness; epidemics can develop within days under favorable weather.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Pathogen populations and their sensitivity to control-product classes vary by region and change over time; consult local authorities for current status.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cip',
      citedFor: 'Potato-specific biology, hosts, and global impact',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    {
      sourceId: 'usda-aphis',
      citedFor: 'Regulatory and phytosanitary context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Late Blight',
    description:
      'Late blight overview: identification, oomycete biology, affected hosts, risk factors, and prevention and monitoring guidance for potato and tomato.',
    keywords: [
      'late blight',
      'Phytophthora infestans',
      'potato disease',
      'tomato disease',
    ],
  },
  structuredData: { article: true },
};
