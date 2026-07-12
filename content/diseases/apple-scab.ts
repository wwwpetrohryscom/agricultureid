import type { PlantDiseaseContent } from '@/types/content';

export const appleScab: PlantDiseaseContent = {
  id: 'disease-apple-scab',
  slug: 'apple-scab',
  contentType: 'plant-disease',
  title: 'Apple Scab',
  scientificName: 'Venturia inaequalis',
  alternativeNames: ['Scab'],
  category: 'Plant disease',
  subcategory: 'Fungal disease',
  causalAgent: 'Fungus Venturia inaequalis',
  pathogenType: 'fungal',
  summary:
    'Apple scab is a widespread fungal disease of apple caused by Venturia inaequalis, producing olive-green to black scabby lesions on leaves and fruit. Wet spring weather during bud break and early leaf growth is the main driver of infection each season.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Apple scab is caused by Venturia inaequalis, a fungus that overwinters mainly in fallen, infected leaves on the orchard floor. Each spring it produces spores that infect newly emerging leaves and blossoms during rainy weather, making it one of the most consistent and economically important diseases of apple production.',
    },
    {
      type: 'paragraph',
      text: 'Beyond direct yield loss from defoliation, apple scab reduces fruit quality and marketability through corky, cracked scab lesions on the fruit surface, making early-season management particularly important in regions with wet spring conditions.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal disease (Venturia inaequalis)' },
    {
      label: 'Key sign',
      value:
        'Olive-green to black scabby lesions on leaves and fruit, sometimes with corky, cracked fruit surfaces',
    },
    {
      label: 'Hosts',
      value: 'Apple',
    },
    {
      label: 'Favoured by',
      value: 'Wet, rainy weather during spring bud break and early leaf growth',
    },
    {
      label: 'Spread',
      value:
        'Spores discharged from overwintered leaf litter, then wind- and rain-dispersed spores within the season',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, orchard sanitation, and monitoring of wet-weather infection periods',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Apple scab produces olive-green to brownish-black, velvety spots on leaves that can enlarge and cause premature leaf drop in severe cases. On fruit, lesions start as similar dark spots and can become corky, cracked, and scabby as the fruit develops, reducing marketability even when the fruit remains edible. Severe early-season infection can also distort or stunt young fruit.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Other leaf spots and disorders can resemble early apple scab lesions. Where identification matters for a management decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Venturia inaequalis survives winter mainly in fallen, infected leaves on the orchard floor, where sexual fruiting structures mature over winter and release ascospores during rain events in spring, providing the primary source of new-season infection around bud break and early leaf emergence. Later in the season, secondary infections spread from lesions on infected leaves via asexual spores splashed or blown to healthy tissue during further wet periods.',
        },
        {
          type: 'list',
          items: [
            'Primary infection depends on ascospores released from overwintered leaf litter during spring rain',
            'Secondary infection cycles continue through the season whenever wet periods coincide with susceptible tissue',
            'Practices that speed the breakdown of fallen leaf litter can reduce the following spring’s inoculum load',
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
          text: 'Apple is the principal host of Venturia inaequalis, and susceptibility varies considerably between cultivars, with some carrying genetic resistance that greatly reduces disease pressure. Ornamental and wild crabapples can also be affected and may serve as a nearby source of inoculum in some settings.',
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
            'Extended leaf wetness from spring rain, especially around bud break and early leaf growth',
            'Mild-to-moderate temperatures that coincide with wet periods',
            'Heavy leaf litter left on the orchard floor over winter',
            'Susceptible varieties without scab-resistance genetics',
            'Dense canopies that slow drying after rain',
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
          text: 'Because primary infection is closely tied to overwintered leaf litter and spring rain, management combines reducing overwintering inoculum with monitoring wet-weather infection periods during the susceptible early season.',
        },
        {
          type: 'list',
          items: [
            'Plant resistant or tolerant cultivars where available',
            'Remove, mow, or shred fallen leaves in autumn to speed their breakdown and reduce spring inoculum',
            'Prune to improve airflow and light penetration, helping foliage dry more quickly after rain',
            'Use local infection-period forecasting and extension guidance to time scouting around bud break',
            'Scout regularly through the wet-weather period from bud break through early fruit development',
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
  hostCrops: [{ type: 'crop', slug: 'apple' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  connections: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'machinery', slug: 'rotary-mower' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'cultivar',
  ],
  geographicScope:
    'Global; apple scab occurs wherever apple is grown, with the greatest severity in regions with wet spring weather during bud break and early leaf development.',
  climateContext:
    'Favoured by rainy, humid weather with extended leaf wetness during spring; infection risk rises sharply whenever rain coincides with susceptible young tissue.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension and orchard guidance.',
    'Cultivar susceptibility and the pressure from overwintering inoculum vary by orchard history and region.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    { sourceId: 'rhs', citedFor: 'General symptoms and horticultural context' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Orchard sanitation and infection-period monitoring',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Apple Scab',
    description:
      'Apple scab explained: Venturia inaequalis biology, disease cycle, affected hosts, risk factors, and prevention and monitoring guidance.',
    keywords: [
      'apple scab',
      'Venturia inaequalis',
      'apple disease',
      'fungal disease',
    ],
  },
  structuredData: { article: true },
};
