import type { PlantDiseaseContent } from '@/types/content';

export const commonScab: PlantDiseaseContent = {
  id: 'disease-common-scab',
  slug: 'common-scab',
  contentType: 'plant-disease',
  title: 'Common Scab',
  scientificName:
    'Streptomyces scabies and related pathogenic Streptomyces species',
  alternativeNames: ['Potato scab'],
  category: 'Plant disease',
  subcategory: 'Bacterial (actinobacterial) disease',
  causalAgent:
    'Bacterium Streptomyces scabies and related pathogenic Streptomyces species',
  pathogenType: 'bacterial',
  summary:
    'Common scab produces rough, corky lesions on potato tubers and can also affect radish and beetroot. It is caused by soil-dwelling Streptomyces bacteria and is favoured by dry soil and elevated soil pH during early tuber or root development.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Common scab is caused by Streptomyces scabies and related pathogenic Streptomyces species, actinobacteria that are common, mostly beneficial members of the soil community. Pathogenic strains, however, infect the developing tuber or root surface, producing rough, corky lesions.',
    },
    {
      type: 'paragraph',
      text: 'The disease is primarily a quality defect: internal tissue is usually unaffected, but scab-affected potato, radish, and beetroot can be downgraded or rejected for fresh-market sale. Disease severity is strongly tied to soil moisture and pH during a relatively narrow, early window of tuber or root development.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Bacterial (actinobacterial) disease (Streptomyces scabies)',
    },
    {
      label: 'Key sign',
      value:
        'Raised, rough, corky lesions on the tuber or root surface, sometimes shallow, sometimes deeply pitted',
    },
    { label: 'Hosts', value: 'Potato, radish, and beetroot' },
    {
      label: 'Favoured by',
      value:
        'Dry soil and neutral to alkaline soil pH during early tuber or root development',
    },
    {
      label: 'Spread',
      value:
        'Soil-borne, surviving in soil organic matter; infects through lenticels or wounds',
    },
    {
      label: 'Management basis',
      value: 'Soil moisture management, pH management, and rotation',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Common scab produces raised, rough, corky lesions on the tuber or root surface. Depending on the strain present and local conditions, lesions can be shallow and superficial or deeper and pitted. Internal tissue is generally unaffected, so the disease is mainly a cosmetic and marketability concern rather than a threat to plant survival.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Lesion type can vary between shallow, raised, and pitted forms depending on the causal strain. Where identification affects a management or marketing decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Pathogenic Streptomyces survive readily in soil, particularly where organic matter is present, and infect young, expanding tuber or root tissue through lenticels or wounds during a relatively narrow susceptible window early in development. Once the tuber or root surface matures, susceptibility declines sharply.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Soil survival',
              description:
                'Pathogenic strains persist in soil organic matter, providing inoculum across seasons',
            },
            {
              term: 'Narrow infection window',
              description:
                'Infection is concentrated in the early period of tuber or root expansion',
            },
            {
              term: 'Moisture and pH sensitivity',
              description:
                'Dry soil and higher soil pH during this window favour disease development',
            },
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
          text: 'Potato is the most economically significant host of common scab. Radish and beetroot are also affected, along with other root and tuber crops in some regions.',
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
            'Dry soil conditions during the early tuber-bulking or root-development period',
            'Neutral to alkaline soil pH, which favours the pathogenic organism',
            'A field history of susceptible crops or high organic matter where scab-causing strains are present',
            'Irrigation gaps at the critical early infection window',
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
          text: 'Because infection is concentrated in a narrow early window and is strongly influenced by soil moisture and pH, prevention focuses on managing conditions during that period rather than treating the disease after lesions form.',
        },
        {
          type: 'list',
          items: [
            'Maintain consistent soil moisture, particularly during early tuber or root set',
            'Avoid raising soil pH above the level needed for the crop being grown',
            'Rotate away from susceptible hosts where scab has been a recurring problem',
            'Choose less-susceptible varieties where available',
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
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'radish' },
    { type: 'crop', slug: 'beetroot' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'bacterial-wilt' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
    { type: 'climate', slug: 'drought' },
    { type: 'fertilizer', slug: 'elemental-sulfur' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'crop-rotation'],
  geographicScope:
    'Global; common scab occurs wherever potato, radish, and beetroot are grown, with severity strongly tied to local soil moisture and pH conditions during early tuber or root development.',
  climateContext:
    'Dry conditions during the early tuber or root development period increase risk; consistent soil moisture through this window is a key mitigating factor.',
  limitations: [
    'This is a general overview; scab-causing Streptomyces strains vary, and lesion type and severity depend on the specific strain and local conditions.',
    'Control-product and soil-amendment recommendations are jurisdiction- and crop-specific and are deliberately not provided in detail here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Potato disease research and management principles',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Root and tuber crop risk factors and soil management guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Common Scab',
    description:
      'Common scab explained: Streptomyces scabies biology, tuber and root lesions, affected hosts, risk factors, and soil moisture and pH management guidance.',
    keywords: [
      'common scab',
      'potato scab',
      'Streptomyces scabies',
      'tuber disease',
    ],
  },
  structuredData: { article: true },
};
