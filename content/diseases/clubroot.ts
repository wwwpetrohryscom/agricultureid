import type { PlantDiseaseContent } from '@/types/content';

export const clubroot: PlantDiseaseContent = {
  id: 'disease-clubroot',
  slug: 'clubroot',
  contentType: 'plant-disease',
  title: 'Clubroot',
  scientificName: 'Plasmodiophora brassicae',
  alternativeNames: ['Club root'],
  category: 'Plant disease',
  subcategory: 'Soil-borne protist disease',
  causalAgent:
    'Protist Plasmodiophora brassicae (a plasmodiophorid, not a true fungus)',
  pathogenType: 'other',
  summary:
    'Clubroot is a soil-borne disease of brassica crops caused by the protist Plasmodiophora brassicae, producing swollen, distorted root galls that impair water and nutrient uptake. It is favoured by acidic, moist soils and can persist in soil for many years.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Clubroot is caused by Plasmodiophora brassicae, a soil-borne protist rather than a true fungus, that infects the roots of brassica crops such as cabbage, broccoli, cauliflower, and kale. Infected roots develop swollen, club-shaped or knobby galls that disrupt normal root function.',
    },
    {
      type: 'paragraph',
      text: 'The pathogen produces long-lived resting spores that can remain viable in soil for many years, even without a susceptible host, making soil history, pH, and drainage central to understanding and managing clubroot risk on a given field.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Soil-borne protist disease (Plasmodiophora brassicae)',
    },
    {
      label: 'Key sign',
      value:
        'Swollen, club-shaped or knobby galls replacing normal root structure',
    },
    { label: 'Hosts', value: 'Cabbage, broccoli, cauliflower, and kale' },
    {
      label: 'Favoured by',
      value: 'Acidic, persistently moist or poorly drained soil',
    },
    {
      label: 'Spread',
      value:
        'Long-lived soil-borne resting spores; movement in infested soil on equipment, footwear, or planting material',
    },
    {
      label: 'Management basis',
      value: 'Soil pH management (liming), drainage, and long rotations',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: "Affected plants develop swollen, distorted galls on roots in place of normal root structure. Above ground, plants are often stunted and may wilt in warm or dry weather despite adequate soil moisture, because damaged roots cannot supply the plant's water needs. Poor stands often appear in patches within a field.",
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Clubroot galls can be confused with other root swellings or with normal nodulation in unrelated crops. Where identification affects a management decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Resting spores in soil germinate to release zoospores that swim through soil water to infect root hairs. A secondary infection cycle within root cortical tissue produces the characteristic galls. As galls decay, they release enormous numbers of new resting spores that can persist in soil for many years even without a susceptible host.',
        },
        {
          type: 'list',
          items: [
            'Resting spores can remain viable in soil for many years',
            'Zoospore movement through soil requires water, so moist or poorly drained soil favours infection',
            'Infested soil moved on equipment, footwear, or planting material can introduce the pathogen to new fields',
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
          text: 'Clubroot affects brassica crops broadly. Cabbage, broccoli, cauliflower, and kale are notable hosts, along with many other brassica vegetables and some brassica weeds that can maintain soil inoculum between susceptible crops.',
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
            'Acidic soil pH, which favours spore germination and disease development',
            'Persistently moist or poorly drained soil',
            'Short rotations with brassica crops, allowing soil spore populations to build',
            'Movement of infested soil on equipment, footwear, or planting material',
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
          text: 'Because clubroot spores can persist in soil for years, prevention emphasises reducing conditions that favour the pathogen and limiting its introduction and spread between fields.',
        },
        {
          type: 'list',
          items: [
            'Raise soil pH toward neutral or slightly alkaline through liming where appropriate for the cropping system',
            'Improve field drainage where persistent moisture is a factor',
            'Use long rotations away from brassica hosts where clubroot has been present',
            'Use clubroot-resistant varieties where available, and sanitise equipment moving between fields',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of soil treatments or other control measures must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'cauliflower' },
    { type: 'crop', slug: 'kale' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'verticillium-wilt' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'fertilizer', slug: 'agricultural-lime' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'crop-rotation'],
  geographicScope:
    'Global; clubroot occurs wherever brassica crops are grown, with severity strongly tied to local soil pH, moisture, and cropping history.',
  climateContext:
    'Persistently moist soil favours the swimming zoospore stage of the pathogen; acidic soils favour spore germination and disease development regardless of broader climate zone.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Effective liming rates and rotation lengths depend on local soil chemistry and cropping systems and are not specified here.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Brassica crop risk factors and soil pH management guidance',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Clubroot',
    description:
      'Clubroot explained: Plasmodiophora brassicae biology, root gall identification, affected brassica hosts, risk factors, and soil pH management guidance.',
    keywords: [
      'clubroot',
      'Plasmodiophora brassicae',
      'brassica disease',
      'soil-borne disease',
    ],
  },
  structuredData: { article: true },
};
