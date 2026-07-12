import type { PlantDiseaseContent } from '@/types/content';

export const verticilliumWilt: PlantDiseaseContent = {
  id: 'disease-verticillium-wilt',
  slug: 'verticillium-wilt',
  contentType: 'plant-disease',
  title: 'Verticillium Wilt',
  scientificName: 'Verticillium dahliae and Verticillium albo-atrum',
  alternativeNames: ['Verticillium'],
  category: 'Plant disease',
  subcategory: 'Fungal vascular wilt',
  causalAgent: 'Fungi Verticillium dahliae and Verticillium albo-atrum',
  pathogenType: 'fungal',
  summary:
    'Verticillium wilt is a soil-borne fungal vascular disease affecting a very wide range of crops, including cotton, eggplant, olive, and potato. The fungus persists in soil for many years and blocks water movement within the plant, causing wilting and vascular discoloration.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Verticillium wilt is caused mainly by the soil-borne fungi Verticillium dahliae and Verticillium albo-atrum, which colonise the water-conducting xylem tissue of susceptible plants. Cotton, eggplant, olive, and potato are among the many economically significant hosts affected worldwide.',
    },
    {
      type: 'paragraph',
      text: "A defining feature of the disease is the fungus's ability to survive in soil for extended periods as microsclerotia, resting structures that remain viable even without a host present, which makes field history an important consideration in risk assessment.",
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Fungal vascular wilt (Verticillium dahliae, V. albo-atrum)',
    },
    {
      label: 'Key sign',
      value:
        'One-sided or progressive wilting with marginal leaf chlorosis and vascular browning in cut stems',
    },
    {
      label: 'Hosts',
      value:
        'Very wide host range, including cotton, eggplant, olive, and potato',
    },
    {
      label: 'Favoured by',
      value:
        'Cooler soil temperatures during crop establishment and plant stress',
    },
    {
      label: 'Spread',
      value:
        'Soil-borne microsclerotia; movement in infested soil, water, and on equipment',
    },
    {
      label: 'Management basis',
      value:
        'Long rotations, resistant varieties or rootstocks, and sanitation',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Symptoms often begin as wilting or marginal chlorosis and necrosis on one side of the plant or on lower leaves, progressing upward as the disease develops. A cut stem typically shows brown to dark vascular discoloration corresponding to the colonised xylem tissue.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Verticillium wilt symptoms can resemble other vascular wilts and general plant stress. Where identification affects a management decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: "The fungus survives in soil as microsclerotia for a number of years, even in the absence of a host. When a susceptible root grows nearby, the fungus germinates and penetrates the root, then colonises the xylem, where it restricts water movement and triggers the plant's wilting response.",
        },
        {
          type: 'list',
          items: [
            'Microsclerotia can persist in soil and infested crop debris for extended periods',
            'Spread within a field occurs via infested soil, irrigation or surface water, and contaminated equipment',
            'Symptom severity is often worsened by additional plant stress, such as drought',
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
          text: 'Verticillium wilt affects a very wide range of woody and herbaceous crops. Cotton, eggplant, olive, and potato are notable hosts, and a history of any susceptible crop in rotation can raise soil inoculum levels affecting others.',
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
            'A field history of susceptible hosts, building soil microsclerotia levels over time',
            'Cooler soil temperatures during crop establishment',
            'Drought or other plant stress, which can worsen wilt symptoms',
            'Movement of infested soil or plant debris on equipment between fields',
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
          text: 'Because the fungus persists in soil for years, prevention relies mainly on reducing inoculum build-up over time and minimising additional plant stress rather than in-season intervention.',
        },
        {
          type: 'list',
          items: [
            'Use long rotations with non-host or resistant crops where the disease history is known',
            'Choose resistant varieties or rootstocks where available',
            'Sanitise equipment moving between infested and clean fields',
            'Maintain adequate, consistent irrigation to reduce additional drought stress on the crop',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of fungicides or soil treatments must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'eggplant' },
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'potato' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'bacterial-wilt' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-temperature' },
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'crop-rotation'],
  geographicScope:
    'Global; verticillium wilt occurs in temperate and subtropical regions wherever susceptible crops are grown on soils with a history of the pathogen.',
  climateContext:
    'Cooler soil temperatures during crop establishment favour disease development, and drought or other stress commonly intensifies visible wilt symptoms.',
  limitations: [
    'This is a general overview; the fungus has a very wide host range and behaviour varies by host, region, and soil history.',
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
    {
      sourceId: 'cornell-cals',
      citedFor: 'Field and vegetable crop risk factors',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Verticillium Wilt',
    description:
      'Verticillium wilt explained: soil-borne fungal biology, vascular symptoms, affected hosts, risk factors, and prevention and rotation guidance.',
    keywords: [
      'verticillium wilt',
      'Verticillium dahliae',
      'vascular wilt',
      'soil-borne disease',
    ],
  },
  structuredData: { article: true },
};
