import type { PlantDiseaseContent } from '@/types/content';

export const sheathBlight: PlantDiseaseContent = {
  id: 'plant-disease-sheath-blight',
  slug: 'sheath-blight',
  contentType: 'plant-disease',
  title: 'Sheath Blight',
  scientificName: 'Rhizoctonia solani (teleomorph Thanatephorus cucumeris)',
  alternativeNames: ['Rice sheath blight', 'Banded leaf and sheath blight'],
  category: 'Plant disease',
  subcategory: 'Fungal disease',
  causalAgent:
    'Soil-borne fungus Rhizoctonia solani (teleomorph Thanatephorus cucumeris)',
  pathogenType: 'fungal',
  summary:
    'Sheath blight is a fungal disease of rice caused by Rhizoctonia solani. It produces oval, banded lesions on the leaf sheaths near the waterline that climb the plant in dense, well-fertilised canopies, and related forms affect maize.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sheath blight, caused by the soil-borne fungus Rhizoctonia solani, is one of the most important diseases of rice in intensive production systems, alongside rice blast. It typically begins on the leaf sheaths near the water surface and, under favourable conditions, climbs the plant, reducing the healthy leaf area needed for grain filling. The same fungus causes banded leaf and sheath blight in maize.',
    },
    {
      type: 'paragraph',
      text: 'The disease is strongly associated with the dense, humid canopies produced by high plant density and heavy nitrogen fertilisation, which create the warm, moist microclimate the fungus favours. Because Rhizoctonia solani survives in soil and residue as resting bodies (sclerotia) and has a wide host range, cultural management plays a central role.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Soil-borne fungal disease (Rhizoctonia solani)' },
    {
      label: 'Key sign',
      value:
        'Oval, greenish-grey to straw lesions with brown margins on leaf sheaths near the waterline',
    },
    {
      label: 'Hosts',
      value: 'Rice, and maize (banded leaf and sheath blight)',
    },
    {
      label: 'Favoured by',
      value: 'Warm, humid weather, dense canopies, and high nitrogen',
    },
    {
      label: 'Spread',
      value:
        'Sclerotia and hyphae in soil and residue; plant-to-plant contact within the canopy',
    },
    {
      label: 'Management basis',
      value:
        'Balanced nitrogen, appropriate spacing, water management, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Sheath blight first appears as oval or ellipsoidal, water-soaked lesions on the leaf sheaths near the water line. The lesions enlarge and develop a greenish-grey to straw-coloured centre with an irregular brown margin, often forming a banded pattern. Under humid conditions, web-like fungal growth and small brown resting bodies (sclerotia) can be seen, and the disease climbs onto upper sheaths and leaves in dense canopies.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The banded lesions on lower sheaths and the presence of loosely attached sclerotia help identify sheath blight. Where symptoms overlap with other sheath and stem diseases, a diagnostic laboratory can confirm the cause.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Rhizoctonia solani survives between crops as sclerotia in soil and as hyphae in residue. In flooded rice, sclerotia float to the water surface and lodge against the sheaths, where they germinate and infect. The fungus then grows from plant to plant by direct contact and by producing new hyphae, spreading fastest through dense, humid canopies. New sclerotia form in infected tissue and return to the soil.',
        },
        {
          type: 'list',
          items: [
            'Sclerotia in soil and residue survive between crops',
            'Floating sclerotia lodge against sheaths and initiate infection',
            'The fungus spreads by contact and new growth within the canopy',
            'Dense, humid canopies allow the disease to climb the plant',
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
          text: 'Rice is the principal host, and the same fungus causes banded leaf and sheath blight in maize. The disease is strongly favoured by warm temperatures with high humidity, dense plant stands, and high nitrogen fertilisation, all of which create a moist, sheltered canopy microclimate that favours infection and spread.',
        },
        {
          type: 'list',
          items: [
            'Warm, humid weather with prolonged canopy wetness',
            'Dense plant stands and close spacing',
            'High nitrogen fertilisation producing lush, leafy growth',
            'Fields with a history of the disease and abundant sclerotia',
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
          text: 'Because sheath blight thrives in dense, over-fertilised canopies, management focuses on cultural practices that open up the canopy and moderate nitrogen, supported by tolerant varieties and attention to inoculum. There is often no fully resistant variety, so integrated tactics are important.',
        },
        {
          type: 'list',
          items: [
            'Apply nitrogen in balanced, split amounts to avoid over-lush canopies',
            'Use appropriate plant spacing and stand density to improve air movement',
            'Manage water to avoid conditions that keep the canopy continuously humid',
            'Reduce inoculum through residue management and field sanitation',
            'Grow more tolerant varieties where they are available',
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
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'maize' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'rice-blast' },
    { type: 'plant-disease', slug: 'bacterial-leaf-blight-of-rice' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Global in rice-growing regions; most damaging in intensive, high-input lowland and irrigated systems in warm, humid climates.',
  climateContext:
    'Favoured by warm, humid weather and dense, well-fertilised canopies that keep the microclimate moist; sclerotia in soil and residue start each season.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Rhizoctonia solani is a variable, wide-host-range fungus, and fully resistant rice varieties are limited; outcomes vary by system.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Rice-specific biology, symptoms, and integrated management',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Sheath Blight of Rice',
    description:
      'Sheath blight overview: Rhizoctonia solani biology, banded sheath lesions, canopy and nitrogen risk factors, and integrated management in rice and maize.',
    keywords: [
      'sheath blight',
      'Rhizoctonia solani',
      'rice sheath blight',
      'banded leaf and sheath blight',
    ],
  },
  structuredData: { article: true },
};
