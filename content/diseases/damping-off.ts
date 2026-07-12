import type { PlantDiseaseContent } from '@/types/content';

export const dampingOff: PlantDiseaseContent = {
  id: 'disease-damping-off',
  slug: 'damping-off',
  contentType: 'plant-disease',
  title: 'Damping-off',
  scientificName: 'Multiple genera (e.g. Pythium, Rhizoctonia, Fusarium spp.)',
  alternativeNames: ['Seedling blight'],
  category: 'Plant disease',
  subcategory: 'Soil-borne seedling disease complex',
  causalAgent:
    'A complex of soil-borne organisms, most commonly Pythium spp., Rhizoctonia solani, and Fusarium spp., sometimes acting together',
  pathogenType: 'other',
  summary:
    'Damping-off is a seedling disease complex caused by several soil-borne fungi and oomycetes, mainly Pythium, Rhizoctonia, and Fusarium species. It kills seeds before or shortly after emergence and is one of the most widespread causes of poor stand establishment across many crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Damping-off is not caused by a single organism but describes a shared outcome, failed or collapsed seedlings, produced by several soil-borne fungi and oomycetes acting alone or together. The most frequently implicated genera are Pythium and, in some cases, Phytophthora (oomycetes), along with Rhizoctonia and Fusarium (true fungi).',
    },
    {
      type: 'paragraph',
      text: 'Because these organisms differ in biology and in the soil conditions that favour them, damping-off is best understood as a disease complex affecting seeds and young seedlings of a very wide range of crops, from field crops such as soybean and sugar beet to vegetables such as cucumber and lettuce.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Soil-borne seedling disease complex (multiple genera)',
    },
    {
      label: 'Key sign',
      value:
        'Seeds that rot before emergence, or seedlings that collapse at the soil line shortly after emergence',
    },
    {
      label: 'Hosts',
      value: 'Very broad; seedlings of most crops are susceptible',
    },
    {
      label: 'Favoured by',
      value:
        'Cool, wet, poorly drained, or compacted soils, especially at germination',
    },
    {
      label: 'Spread',
      value: 'Soil, water movement, contaminated equipment, and infected seed',
    },
    {
      label: 'Management basis',
      value:
        'Good drainage, seeding practices, sanitation, and diagnosis-led response',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Damping-off can appear as pre-emergence damping-off, where seeds rot in the soil and never emerge, or as post-emergence damping-off, where seedlings emerge but then develop a water-soaked or constricted lesion at the soil line and collapse, often described as a "wire stem" appearance. Stand gaps and uneven emergence are the most visible field symptom.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poor emergence can also result from seed quality, planting depth, soil crusting, or cold injury rather than disease. Confirming the cause, ideally with laboratory diagnosis, helps target an effective response.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Pythium species are oomycetes that thrive in saturated, poorly drained soils and produce swimming zoospores attracted to seeds and roots, making them especially damaging under wet conditions. Rhizoctonia solani is a true fungus that survives as mycelium or resting structures called sclerotia, does not require free water to infect, and often damages the stem near the soil line. Fusarium species survive as durable resting spores and frequently act as secondary invaders on tissue already weakened by other stresses.',
        },
        {
          type: 'table',
          caption: 'Common causal genera at a glance',
          columns: ['Genus', 'Type', 'Favoured conditions'],
          rows: [
            [
              'Pythium',
              'Oomycete',
              'Saturated, poorly drained, or waterlogged soils',
            ],
            [
              'Rhizoctonia',
              'Fungus',
              'Broad range; does not require free water',
            ],
            [
              'Fusarium',
              'Fungus',
              'Often secondary, on already-stressed seedlings',
            ],
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
          text: 'Because the causal organisms individually have broad host ranges, damping-off affects the seedlings of a very wide range of field, vegetable, and horticultural crops. Soybean, sugar beet, cucumber, and lettuce are commonly affected, though the specific organism or organisms responsible vary by crop, soil, and region.',
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
            'Cool, wet soils that slow germination and prolong seedling exposure',
            'Poorly drained or compacted soils that remain saturated after rain or irrigation',
            'Planting too deep, or into a poor seedbed that delays emergence',
            'Low-vigour or poor-quality seed',
            'Dense seeding rates that increase humidity around emerging seedlings',
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
          text: 'Because damping-off can arise from several different organisms whose favoured conditions differ, effective management typically starts with correct diagnosis and then addresses the specific soil and seeding conditions involved.',
        },
        {
          type: 'list',
          items: [
            'Improve soil drainage and avoid compaction ahead of planting',
            'Avoid overwatering and allow appropriate soil drying between irrigations where practical',
            'Use high-quality, vigorous seed at the recommended depth and rate',
            'Delay planting until soil temperatures favour rapid germination where possible',
            'Rotate with non-host or less-susceptible crops and manage crop debris',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of seed treatments, fungicides, oomycete-specific products, or other control measures must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'lettuce' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'soil-ph',
  ],
  geographicScope:
    'Global; damping-off occurs wherever susceptible crops are seeded, with the greatest risk in cool, wet, poorly drained soils and in nursery or greenhouse seedling production.',
  climateContext:
    'Oomycete-driven damping-off is favoured by saturated, poorly drained soils; cool, wet conditions at planting that slow germination extend the window of seedling vulnerability.',
  limitations: [
    'Damping-off is a symptom-based, multi-organism category; this overview cannot substitute for laboratory identification of the specific causal organism(s) present.',
    'The relative importance of individual causal genera varies substantially by crop, soil type, and region.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Damping-off causal organisms and disease biology',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Field crop seedling disease diagnosis and risk factors',
    },
    {
      sourceId: 'umn-extension',
      citedFor: 'Seedling and damping-off disease complexes',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Damping-off',
    description:
      'Damping-off explained: Pythium, Rhizoctonia, and Fusarium seedling disease, risk factors, and prevention and monitoring guidance for growers.',
    keywords: ['damping-off', 'seedling disease', 'Pythium', 'Rhizoctonia'],
  },
  structuredData: { article: true },
};
