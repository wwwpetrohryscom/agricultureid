import type { PlantDiseaseContent } from '@/types/content';

export const tanSpot: PlantDiseaseContent = {
  id: 'plant-disease-tan-spot',
  slug: 'tan-spot',
  contentType: 'plant-disease',
  title: 'Tan Spot',
  scientificName:
    'Pyrenophora tritici-repentis (anamorph Drechslera tritici-repentis)',
  alternativeNames: ['Yellow leaf spot', 'Wheat tan spot', 'Yellow spot'],
  category: 'Plant disease',
  subcategory: 'Fungal leaf disease',
  causalAgent:
    'Fungus Pyrenophora tritici-repentis (anamorph Drechslera tritici-repentis)',
  pathogenType: 'fungal',
  summary:
    'Tan spot is a foliar fungal disease of wheat caused by Pyrenophora tritici-repentis. It produces tan lesions with yellow halos, is strongly favoured by cereal residue left on the surface, and can reduce grain fill when it moves onto the upper leaves.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tan spot, caused by the fungus Pyrenophora tritici-repentis, is a common leaf disease of wheat that has become more prominent with the adoption of reduced-tillage and residue-retention systems. The fungus overwinters readily on wheat stubble left on the soil surface, so fields returned to wheat after wheat under minimum tillage are at particular risk.',
    },
    {
      type: 'paragraph',
      text: 'The pathogen produces host-selective toxins that cause characteristic tan necrotic spots and yellowing, and different races of the fungus differ in which toxins they produce. Because symptoms can resemble other leaf spots and nutrient effects, careful examination and, where needed, laboratory confirmation are useful for a correct diagnosis.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Fungal leaf disease (Pyrenophora tritici-repentis)',
    },
    {
      label: 'Key sign',
      value:
        'Tan-brown lesions with a yellow halo, often with a small dark centre',
    },
    { label: 'Hosts', value: 'Wheat, and to a lesser extent triticale' },
    {
      label: 'Favoured by',
      value: 'Warm, humid weather and surface wheat residue',
    },
    {
      label: 'Spread',
      value: 'Spores from infected stubble, then wind and rain within the crop',
    },
    {
      label: 'Management basis',
      value:
        'Residue and rotation management, resistant varieties, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Tan spot typically appears as small tan-to-brown flecks that enlarge into oval or diamond-shaped lesions surrounded by a yellow halo. A tiny dark spot is often visible near the centre of the lesion where infection began. As lesions coalesce, large areas of leaf can turn tan and die, and severe cases produce extensive yellowing of the canopy.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The yellow halo and small dark centre help separate tan spot from septoria tritici blotch, which instead carries dark pycnidia within the lesion. Where symptoms overlap, a diagnostic laboratory can confirm the cause.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Pyrenophora tritici-repentis survives between seasons on infected wheat residue, where it forms sexual fruiting bodies (pseudothecia). In spring these release ascospores that infect the lower leaves of a new crop. Asexual conidia produced on the lesions are then spread by wind and rain within the crop, carrying the disease up the canopy through repeating cycles under favourable weather.',
        },
        {
          type: 'list',
          items: [
            'Infected wheat stubble is the main source of primary inoculum',
            'Ascospores from residue initiate infection on lower leaves',
            'Wind- and rain-dispersed conidia spread the disease up the canopy',
            'Host-selective toxins drive the necrosis and yellowing symptoms',
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
          text: 'Wheat is the primary host, with triticale also susceptible. The disease is strongly tied to management: continuous wheat, reduced tillage, and heavy surface residue all increase the pool of overwintering inoculum. Warm, humid weather with extended leaf wetness then favours infection and spread.',
        },
        {
          type: 'list',
          items: [
            'Wheat-after-wheat cropping with surface residue retained',
            'Warm temperatures combined with high humidity and leaf wetness',
            'Reduced or no-till systems that keep infected stubble at the surface',
            'Susceptible varieties that allow rapid lesion development',
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
          text: 'Because infected residue drives tan spot, management centres on breaking the residue-to-crop link through rotation and residue handling, backed by resistant varieties. These reduce how much inoculum reaches a new crop and how quickly disease develops.',
        },
        {
          type: 'list',
          items: [
            'Rotate away from wheat to reduce carry-over on stubble',
            'Manage residue through incorporation or decomposition where suitable',
            'Grow varieties with better tan-spot resistance ratings',
            'Avoid dense canopies that trap humidity and prolong leaf wetness',
            'Scout the upper leaves during stem elongation and heading',
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
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'triticale' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'septoria-tritici-blotch' },
    { type: 'plant-disease', slug: 'fusarium-head-blight' },
    { type: 'plant-disease', slug: 'wheat-leaf-rust' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global; common in wheat-growing regions using reduced tillage and continuous wheat, with severity varying by residue management, rotation, and weather.',
  climateContext:
    'Favoured by warm, humid weather with extended leaf wetness; surface wheat residue provides the overwintering inoculum that starts each season.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Pathogen races and their toxin profiles vary by region and change over time; consult local authorities for current status.',
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
      citedFor: 'Identification and residue-based management in wheat',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Tan Spot of Wheat',
    description:
      'Tan spot overview: Pyrenophora tritici-repentis biology, tan lesions with yellow halos, residue-driven disease cycle, and integrated management in wheat.',
    keywords: [
      'tan spot',
      'Pyrenophora tritici-repentis',
      'yellow leaf spot',
      'wheat disease',
    ],
  },
  structuredData: { article: true },
};
