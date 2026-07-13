import type { PlantDiseaseContent } from '@/types/content';

export const charcoalRot: PlantDiseaseContent = {
  id: 'plant-disease-charcoal-rot',
  slug: 'charcoal-rot',
  contentType: 'plant-disease',
  title: 'Charcoal Rot',
  scientificName: 'Macrophomina phaseolina',
  alternativeNames: ['Macrophomina root and stem rot', 'Ashy stem blight'],
  category: 'Plant disease',
  subcategory: 'Fungal root and stem disease',
  causalAgent: 'Soil-borne fungus Macrophomina phaseolina',
  pathogenType: 'fungal',
  summary:
    'Charcoal rot is a soil-borne disease caused by Macrophomina phaseolina that affects many crops. It is favoured by hot, dry, drought-stressed conditions and produces a grey-black discoloration of the lower stem and roots studded with tiny black microsclerotia.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Charcoal rot is a widespread disease caused by the soil-borne fungus Macrophomina phaseolina, which has an unusually broad host range that includes soybean, sorghum, maize, common bean, sunflower, and groundnut, among many others. It is one of the diseases most strongly associated with hot, dry weather, and it typically causes the greatest damage when plants are under drought and heat stress during grain or pod fill.',
    },
    {
      type: 'paragraph',
      text: 'The fungus survives as tiny, hard resting structures called microsclerotia in soil and residue, and these give infected tissue its characteristic dusting of black specks that resemble powdered charcoal. Because the disease is driven so strongly by moisture stress, management centres on keeping crops from becoming severely stressed as much as on the pathogen itself.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value:
        'Soil-borne fungal root and stem disease (Macrophomina phaseolina)',
    },
    {
      label: 'Key sign',
      value:
        'Grey-black lower stem and root tissue peppered with minute black microsclerotia',
    },
    {
      label: 'Hosts',
      value:
        'Many crops, including soybean, sorghum, maize, common bean, sunflower, and groundnut',
    },
    {
      label: 'Favoured by',
      value: 'Hot, dry weather and drought stress during grain or pod fill',
    },
    {
      label: 'Spread',
      value:
        'Microsclerotia surviving in soil and residue; spread with soil movement',
    },
    {
      label: 'Management basis',
      value:
        'Reducing moisture stress, irrigation where possible, rotation, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Affected plants often wilt, ripen prematurely, and die in patches, especially during hot, dry spells late in the season. Splitting the lower stem and taproot reveals a greyish to silvery discoloration of the inner tissue that is finely peppered with tiny black microsclerotia, giving a dusty, charcoal-like appearance. The vascular tissue and pith may shred, and roots become discoloured and brittle.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The fine black microsclerotia in the lower stem and root tissue are the key diagnostic feature. Because premature death from charcoal rot can be confused with other late-season stresses, a diagnostic laboratory can confirm the cause.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Macrophomina phaseolina survives for long periods as microsclerotia in soil and crop residue. These germinate and infect roots, often early in the season, but the fungus tends to remain limited until the plant becomes stressed. Under hot, dry conditions during reproductive growth, the fungus colonises the vascular tissue extensively, blocking water movement and causing the rapid decline and premature death typical of the disease.',
        },
        {
          type: 'list',
          items: [
            'Microsclerotia survive for long periods in soil and residue',
            'They germinate and infect roots, often early in the season',
            'Disease progresses when plants are stressed by heat and drought',
            'New microsclerotia form in infected tissue and return to the soil',
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
          text: 'The fungus has a very wide host range, and among field crops soybean, sorghum, maize, common bean, sunflower, and groundnut are commonly affected. Hot, dry weather, drought stress, high plant density, and low soil moisture during grain or pod fill all strongly favour severe charcoal rot, which is why it is often most damaging in dryland and heat-prone environments.',
        },
        {
          type: 'list',
          items: [
            'Hot temperatures with dry soils and drought stress during reproductive growth',
            'High plant populations that increase competition for water',
            'Sandy or low-water-holding soils that dry quickly',
            'Short rotations among susceptible hosts that maintain microsclerotia',
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
          text: 'Because charcoal rot is driven by moisture and heat stress, management focuses on reducing that stress and lowering the soil population of microsclerotia. Avoiding conditions that push plants into drought during grain fill is central.',
        },
        {
          type: 'list',
          items: [
            'Reduce moisture stress through irrigation where it is available',
            'Avoid excessively high plant populations that intensify competition for water',
            'Use rotation with less-susceptible crops to lower soil inoculum',
            'Maintain good soil structure and water-holding capacity',
            'Choose adapted varieties and manage other stresses that weaken plants',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of control products must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'groundnut' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'sudden-death-syndrome' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global; most damaging in warm, dryland, and heat-prone production areas across many crops, with severity closely tied to drought stress.',
  climateContext:
    'Strongly favoured by hot, dry weather and drought stress during reproductive growth; the fungus survives as long-lived microsclerotia in soil and residue.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'The very wide host range and strong dependence on moisture stress mean severity varies greatly by crop, soil, and season.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'iastate-extension',
      citedFor:
        'Identification, stress relationships, and management principles',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Charcoal Rot (Macrophomina phaseolina)',
    description:
      'Charcoal rot overview: Macrophomina phaseolina biology, microsclerotia, drought-driven stem and root rot, and integrated management across many crops.',
    keywords: [
      'charcoal rot',
      'Macrophomina phaseolina',
      'microsclerotia',
      'drought stress disease',
    ],
  },
  structuredData: { article: true },
};
