import type { PlantDiseaseContent } from '@/types/content';

export const citrusCanker: PlantDiseaseContent = {
  id: 'disease-citrus-canker',
  slug: 'citrus-canker',
  contentType: 'plant-disease',
  title: 'Citrus Canker',
  scientificName:
    'Xanthomonas citri subsp. citri (syn. Xanthomonas axonopodis pv. citri)',
  alternativeNames: ['Bacterial canker of citrus'],
  category: 'Plant disease',
  subcategory: 'Bacterial disease',
  causalAgent: 'Bacterium Xanthomonas citri subsp. citri',
  pathogenType: 'bacterial',
  summary:
    'Citrus canker is a bacterial disease causing raised, corky lesions on the leaves, stems, and fruit of orange and other citrus. It is spread mainly by wind-driven rain and readily moved on contaminated plant material, equipment, and clothing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Citrus canker, caused by the bacterium Xanthomonas citri subsp. citri, produces raised, corky lesions on leaves, twigs, and fruit of orange and many other citrus species. It is a regulated quarantine pest in a number of citrus-producing regions because of its economic significance and capacity for long-distance spread through infected material.',
    },
    {
      type: 'paragraph',
      text: 'Within an affected area, the disease spreads mainly over short distances via wind-driven rain, while longer-distance introductions typically involve movement of infected nursery stock, budwood, fruit, or contaminated equipment and clothing.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Bacterial disease (Xanthomonas citri subsp. citri)',
    },
    {
      label: 'Key sign',
      value:
        'Raised, corky, tan to brown lesions with a water-soaked margin and yellow halo on leaves, twigs, and fruit',
    },
    {
      label: 'Hosts',
      value: 'Orange and many other citrus species and hybrids',
    },
    {
      label: 'Favoured by',
      value: 'Windy, rainy, or humid weather, especially during storms',
    },
    {
      label: 'Spread',
      value:
        'Wind-driven rain over short distances; contaminated plant material and equipment over longer distances',
    },
    {
      label: 'Management basis',
      value:
        'Certified nursery stock, windbreaks, sanitation, and regulatory compliance',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Lesions appear as raised, corky spots, often tan to brown with a water-soaked margin and a yellow halo, on leaves, twigs, and fruit. Under severe infection, lesions can coalesce, causing defoliation and blemished fruit that affects marketability even when the interior is unaffected.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Citrus canker can resemble some other citrus leaf spots and blemishes. Given its regulated quarantine status in many regions, confirm suspected cases with a diagnostic laboratory or plant health authority.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Bacteria ooze from existing lesions in wet conditions and are dispersed mainly by wind-driven rain over short distances within and between nearby trees. The bacteria enter host tissue through stomata or wounds, including wounds created by leaf-mining insects, which substantially increase infection success.',
        },
        {
          type: 'list',
          items: [
            'Wind-driven rain, especially during storms, is the main driver of local spread',
            'Leaf-miner damage creates wounds that greatly increase infection efficiency',
            'Long-distance spread occurs mainly through movement of infected nursery stock, fruit, or contaminated equipment and clothing',
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
          text: 'Orange and many other citrus species and hybrids are susceptible to citrus canker, though susceptibility varies among citrus types and cultivars.',
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
            'Windy, rainy, or humid weather, especially during storms',
            'Presence of leaf-miner damage creating entry wounds',
            'Movement of infected nursery stock or contaminated equipment between groves',
            'Dense plantings with overlapping canopies',
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
          text: 'Because citrus canker is a regulated pest in many regions and spreads readily through wind-driven rain and contaminated material, prevention combines clean planting material, physical barriers, sanitation, and compliance with local regulations.',
        },
        {
          type: 'list',
          items: [
            'Use certified, disease-free nursery stock',
            'Manage leaf-miner populations as part of an integrated approach',
            'Establish windbreaks where practical to reduce wind-driven rain spread',
            'Sanitise equipment and restrict movement between groves, and follow official reporting protocols where citrus canker is a regulated pest',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of bactericidal products or other control measures, and any regulatory reporting obligations, must follow current, locally authorized recommendations. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'orange' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
    { type: 'plant-disease', slug: 'fire-blight' },
  ],
  connections: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'wind' },
    { type: 'climate', slug: 'humidity' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Occurs in a number of citrus-producing regions worldwide; regulated as a quarantine pest in several countries, with strict controls on movement of citrus material.',
  climateContext:
    'Favoured by windy, rainy, or humid weather, particularly storms, which drive short-distance spread; humid conditions also favour bacterial survival and lesion development.',
  limitations: [
    'This is a general overview; citrus canker is a regulated quarantine pest in many jurisdictions, and specific reporting and control obligations vary by region and are not covered here.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'usda-aphis',
      citedFor: 'Regulatory status and quarantine considerations',
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
    title: 'Citrus Canker',
    description:
      'Citrus canker explained: Xanthomonas citri biology, wind-driven spread, affected citrus hosts, risk factors, and prevention and regulatory considerations.',
    keywords: [
      'citrus canker',
      'Xanthomonas citri',
      'citrus disease',
      'bacterial canker',
    ],
  },
  structuredData: { article: true },
};
