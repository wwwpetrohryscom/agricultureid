import type { PlantDiseaseContent } from '@/types/content';

export const netBlotch: PlantDiseaseContent = {
  id: 'plant-disease-net-blotch',
  slug: 'net-blotch',
  contentType: 'plant-disease',
  title: 'Net Blotch',
  scientificName: 'Pyrenophora teres (anamorph Drechslera teres)',
  alternativeNames: ['Barley net blotch', 'Net form and spot form net blotch'],
  category: 'Plant disease',
  subcategory: 'Fungal leaf disease',
  causalAgent: 'Fungus Pyrenophora teres (anamorph Drechslera teres)',
  pathogenType: 'fungal',
  summary:
    'Net blotch is a foliar fungal disease of barley caused by Pyrenophora teres. It occurs as a net form producing dark net-like leaf patterns and a spot form producing dark oval spots, both able to reduce grain fill in wet seasons.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Net blotch, caused by the fungus Pyrenophora teres, is one of the most widespread leaf diseases of barley. It exists as two forms that are morphologically similar but distinct: the net form (Pyrenophora teres f. teres), which produces the characteristic net-like browning, and the spot form (Pyrenophora teres f. maculata), which produces dark oval spots with a chlorotic margin.',
    },
    {
      type: 'paragraph',
      text: 'The pathogen carries over on barley residue and seed and is favoured by cool to mild, wet weather. Because it can reduce the healthy leaf area available for grain filling, net blotch is an important target for resistant varieties and residue management in the main barley-producing regions of the world.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal leaf disease (Pyrenophora teres)' },
    {
      label: 'Key sign',
      value:
        'Net-like brown streaking (net form) or dark oval spots (spot form) on leaves',
    },
    { label: 'Hosts', value: 'Barley' },
    {
      label: 'Favoured by',
      value: 'Cool to mild, wet weather with prolonged leaf wetness',
    },
    {
      label: 'Spread',
      value:
        'Spores from infected residue and seed, then wind and rain in the crop',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, clean seed, rotation and residue management, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'The net form produces fine, dark brown longitudinal and transverse streaks that form a net-like pattern within a yellowing zone, giving the disease its name. The spot form instead produces dark brown, round to oval spots surrounded by a chlorotic halo. In both forms, heavy infection leads to extensive leaf browning and premature death of foliage.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The two forms respond differently to some varieties, so distinguishing net form from spot form can matter for variety choice. Where the distinction affects decisions, a diagnostic laboratory can confirm which form is present.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Pyrenophora teres survives between seasons on infected barley residue and can also be carried on seed. From residue it produces ascospores that infect emerging crops, while conidia formed on lesions spread by wind and rain within the crop. Under cool, wet conditions the disease can cycle repeatedly and move up the canopy over the season.',
        },
        {
          type: 'list',
          items: [
            'Infected barley residue and volunteer plants carry the fungus over',
            'Infected seed can introduce the pathogen into new crops',
            'Ascospores from residue start infection, then conidia spread it further',
            'Cool, wet weather drives repeating cycles up the canopy',
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
          text: 'Barley is the main host of net blotch. Continuous barley cropping, retained infected residue, and use of infected seed all raise inoculum levels, while cool to mild, wet weather with long periods of leaf wetness favours infection and spread. Susceptible varieties allow the disease to build most rapidly.',
        },
        {
          type: 'list',
          items: [
            'Barley-after-barley cropping with infected residue retained',
            'Cool to mild temperatures with wet, humid conditions',
            'Use of infected or untreated seed from an affected crop',
            'Susceptible varieties and dense canopies that hold moisture',
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
          text: 'Net blotch is managed by combining resistant varieties with practices that reduce residue-borne and seed-borne inoculum. No single tactic is sufficient in a wet season, so an integrated approach gives the most reliable protection.',
        },
        {
          type: 'list',
          items: [
            'Grow varieties with good resistance to the net-blotch form present locally',
            'Use clean, tested seed to avoid introducing the pathogen',
            'Rotate away from barley and manage residue to lower carry-over inoculum',
            'Avoid overly dense canopies that keep leaves wet',
            'Monitor crops during cool, wet weather from early growth onward',
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
  hostCrops: [{ type: 'crop', slug: 'barley' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'tan-spot' },
    { type: 'plant-disease', slug: 'septoria-tritici-blotch' },
    { type: 'plant-disease', slug: 'stem-rust' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global; occurs across the main barley-growing regions, with severity varying by variety, rotation, seed health, and seasonal rainfall.',
  climateContext:
    'Favoured by cool to mild, wet weather with prolonged leaf wetness; infected residue and seed provide the inoculum that starts each season.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'The net and spot forms differ in variety reactions, and pathogen populations shift over time and by region; consult local authorities for current status.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease forms, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'ahdb',
      citedFor:
        'Barley disease identification and integrated management principles',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Net Blotch of Barley',
    description:
      'Net blotch overview: Pyrenophora teres biology, net and spot forms, favourable conditions, and integrated management of this key barley leaf disease.',
    keywords: [
      'net blotch',
      'Pyrenophora teres',
      'barley disease',
      'net form spot form',
    ],
  },
  structuredData: { article: true },
};
