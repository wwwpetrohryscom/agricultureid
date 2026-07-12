import type { PlantDiseaseContent } from '@/types/content';

export const tobaccoMosaicVirus: PlantDiseaseContent = {
  id: 'disease-tobacco-mosaic-virus',
  slug: 'tobacco-mosaic-virus',
  contentType: 'plant-disease',
  title: 'Tobacco Mosaic Virus',
  scientificName: 'Tobacco mosaic virus (genus Tobamovirus)',
  alternativeNames: ['TMV'],
  category: 'Plant disease',
  subcategory: 'Viral disease',
  causalAgent: 'Tobacco mosaic virus, a Tobamovirus',
  pathogenType: 'viral',
  summary:
    'Tobacco mosaic virus is one of the most stable and best-studied plant viruses, causing mottled, mosaic-patterned leaves and stunting in tobacco, tomato, pepper, and other plants. Unlike many plant viruses, it spreads mainly through mechanical contact rather than insect vectors.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tobacco mosaic virus (TMV) is a Tobamovirus notable for the extreme physical stability of its rod-shaped particles, which allow it to remain infectious for long periods outside a living plant, including in dried leaf debris, contaminated soil, and on tools or hands. It infects tobacco, tomato, pepper, and a range of other host plants.',
    },
    {
      type: 'paragraph',
      text: 'Unusually among economically important plant viruses, TMV is not primarily spread by insects. Instead, it moves mechanically through contact, entering plants through small wounds created during routine handling such as pruning, tying, grafting, or harvesting, which makes worker practices a central part of managing its spread.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Viral disease (Tobamovirus)' },
    {
      label: 'Key sign',
      value:
        'Mottled light and dark green mosaic pattern on leaves, sometimes with distortion and stunting',
    },
    {
      label: 'Hosts',
      value: 'Tobacco, tomato, sweet pepper, and other susceptible plants',
    },
    {
      label: 'Spread',
      value:
        'Mechanical contact through wounds, contaminated hands, tools, and, at low rates, seed',
    },
    {
      label: 'Persistence',
      value:
        'Extremely stable virus particles that can remain infectious for long periods in debris',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, hygiene, and removal of infected plants; there is no cure once infected',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Infected plants typically show a mottled mosaic pattern of light and dark green (or yellow-green) patches on leaves, sometimes with leaf distortion, narrowing, or blistering, along with stunted growth and reduced yield. Symptom severity can vary considerably with plant variety, virus strain, and growing conditions, and symptoms can be masked at high temperatures.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Mosaic symptoms can resemble those caused by other viruses or by some nutrient disorders and herbicide effects. Because there is no cure for a viral infection, confirming the specific cause with a diagnostic laboratory is important before deciding on a response.',
        },
      ],
    },
    {
      id: 'biology-and-transmission',
      heading: 'Biology and transmission',
      body: [
        {
          type: 'paragraph',
          text: 'TMV particles are unusually stable and resistant to degradation, which allows the virus to persist in dried plant material, cured tobacco products, contaminated soil, and on surfaces such as tools, stakes, and hands for extended periods. Infection occurs when the virus, present in sap or on a contaminated surface, is introduced into a plant through even minor wounds created during normal handling.',
        },
        {
          type: 'list',
          items: [
            'Contaminated hands and tools during pruning, tying, or grafting are a major route of spread',
            'Contact with tobacco products can transfer the virus to susceptible crops such as tomato and pepper',
            'Low rates of seed transmission can occur through virus-contaminated seed coats',
            'Unlike many plant viruses, TMV is not significantly spread by insect vectors',
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
          text: 'Tobacco is the namesake host, but tomato and sweet pepper are also economically important hosts, along with numerous other cultivated and wild plants. Susceptibility and symptom severity vary by variety, and some tomato and pepper varieties carry resistance genes that reduce or prevent disease development.',
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
            'Frequent plant handling, such as pruning, tying, or grafting, without hygiene precautions',
            'Workers handling tobacco products before working with susceptible crops',
            'Reuse of contaminated stakes, ties, tools, or growing media between crops',
            'Use of seed or transplants from an infected source',
            'Susceptible varieties lacking resistance genes',
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
          text: 'Because there is no way to cure a plant once infected with TMV, and because the virus is so persistent in the environment, prevention centres on hygiene, resistant varieties, and removing sources of infection rather than reacting after symptoms appear.',
        },
        {
          type: 'list',
          items: [
            'Choose resistant or tolerant varieties where available',
            'Wash hands and disinfect tools between plants, especially during pruning, tying, or grafting',
            'Avoid handling tobacco products before or while working with susceptible crops',
            'Use certified virus-free seed and transplants',
            'Remove and destroy infected plants and avoid reusing contaminated stakes or growing media',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'There is no chemical cure for viral infection',
          text: 'No product can cure a plant already infected with a virus. Management relies on prevention, sanitation, and resistant varieties; follow locally authorized guidance for any related crop protection decisions. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'sweet-pepper' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'hydroponics' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-biology' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Global; tobacco mosaic virus occurs wherever susceptible hosts are grown, with risk strongly tied to handling practices rather than to a specific climate.',
  climateContext:
    'Temperature can influence symptom expression, with high temperatures sometimes masking visible mosaic symptoms; the virus itself is mechanically transmitted and not primarily weather-driven.',
  limitations: [
    'This is a general overview; symptom severity and host range vary by virus strain and plant variety.',
    'There is no chemical treatment that cures an already-infected plant; management is preventive.',
    'Diagnosis based on symptoms alone can be unreliable, since other viruses and disorders can produce similar mosaic patterns.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Virus biology, transmission, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Taxonomic classification within genus Tobamovirus',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Tobacco Mosaic Virus',
    description:
      'Tobacco mosaic virus explained: Tobamovirus biology, mechanical spread, affected hosts, and prevention and sanitation guidance.',
    keywords: ['tobacco mosaic virus', 'TMV', 'plant virus', 'tomato disease'],
  },
  structuredData: { article: true },
};
