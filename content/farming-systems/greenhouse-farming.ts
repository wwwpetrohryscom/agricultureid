import type { FarmingSystemContent } from '@/types/content';

export const greenhouseFarming: FarmingSystemContent = {
  id: 'system-greenhouse-farming',
  slug: 'greenhouse-farming',
  contentType: 'farming-system',
  title: 'Greenhouse Farming',
  systemClass: 'protected',
  alternativeNames: ['Protected cultivation', 'Greenhouse production'],
  category: 'Farming system',
  subcategory: 'Protected cultivation',
  summary:
    'Greenhouse farming grows crops inside structures that moderate temperature, light, and humidity, extending growing seasons and enabling more consistent production than open-field cultivation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Greenhouse farming, part of the broader category of protected cultivation, grows crops inside a covered structure that moderates the growing environment — temperature, light, humidity, and often pest access — rather than exposing crops directly to outdoor conditions. Structures range from simple, low-cost polytunnels to fully climate-controlled glasshouses with automated ventilation, heating, cooling, and supplemental lighting.',
    },
    {
      type: 'paragraph',
      text: 'A greenhouse can be soil-based or combined with hydroponic or other soilless growing methods inside the structure; the defining feature of greenhouse farming is environmental control, not the growing medium. Its main purpose is to extend the growing season, protect crops from weather extremes and some pests, and improve consistency and quality for high-value horticultural crops.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Growing under a structure that moderates temperature, light, and humidity',
    },
    {
      label: 'Structure types',
      value:
        'Range from low-cost polytunnels to fully climate-controlled glasshouses',
    },
    {
      label: 'Growing medium',
      value: 'Can be soil-based or combined with hydroponic/soilless systems',
    },
    {
      label: 'Typical crops',
      value:
        'High-value horticultural crops such as tomatoes, cucumbers, peppers, strawberries, and leafy greens',
    },
    {
      label: 'Season extension',
      value:
        'Enables production outside the normal open-field season in many climates',
    },
    {
      label: 'Input intensity',
      value:
        'Often more capital-, energy-, and labor-intensive per unit area than open-field production',
    },
  ],
  sections: [
    {
      id: 'what-greenhouse-farming-is',
      heading: 'What greenhouse farming is',
      body: [
        {
          type: 'paragraph',
          text: 'Greenhouse farming spans a wide spectrum of structures and technology levels, unified by the goal of moderating the crop’s growing environment relative to outdoor conditions. A simple tunnel mainly buffers wind and rain, while an advanced glasshouse can actively regulate temperature, humidity, light, and even carbon dioxide concentration.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Polytunnel / high tunnel',
              description:
                'A low-cost, plastic-covered structure providing basic weather protection with limited climate control.',
            },
            {
              term: 'Glasshouse',
              description:
                'A permanent, typically glass-covered structure with more extensive climate-control systems.',
            },
            {
              term: 'Climate control',
              description:
                'Ventilation, heating, cooling, shading, and lighting systems used to regulate the internal growing environment.',
            },
          ],
        },
      ],
    },
    {
      id: 'how-environmental-control-works',
      heading: 'How environmental control works',
      body: [
        {
          type: 'paragraph',
          text: 'Greenhouse environmental control typically combines passive and active elements: roof and side vents or fans to manage temperature and humidity, shading or supplemental lighting to manage light levels, and, in more advanced operations, heating or cooling systems and carbon dioxide enrichment to further optimize growing conditions.',
        },
        {
          type: 'list',
          items: [
            'Ventilation (vents or fans) to manage temperature and humidity',
            'Heating or cooling systems in more advanced structures',
            'Shading or supplemental lighting to manage light intensity and day length',
            'Carbon dioxide enrichment in some intensive operations',
          ],
        },
      ],
    },
    {
      id: 'crop-management-inside-a-greenhouse',
      heading: 'Crop management inside a greenhouse',
      body: [
        {
          type: 'paragraph',
          text: 'Enclosing the growing environment changes several aspects of crop management. Irrigation is usually delivered precisely through drip systems, often combined with fertigation; pollination for crops such as tomatoes may require bees, bumblebee colonies, or mechanical assistance since wind and open-field pollinators are excluded; and pest and disease management often relies more heavily on biological control agents suited to an enclosed, humid environment.',
        },
        {
          type: 'table',
          caption: 'Typical management considerations inside a greenhouse',
          columns: ['Factor', 'Typical management approach'],
          rows: [
            ['Irrigation', 'Drip irrigation, often combined with fertigation'],
            [
              'Pollination',
              'Managed bee or bumblebee colonies, or manual/mechanical assistance',
            ],
            [
              'Pest management',
              'Biological control agents and monitoring, alongside approved treatments',
            ],
            [
              'Humidity',
              'Ventilation and dehumidification to limit fungal disease pressure',
            ],
          ],
        },
      ],
    },
    {
      id: 'benefits-and-trade-offs',
      heading: 'Benefits and trade-offs',
      body: [
        {
          type: 'list',
          items: [
            'Extends the growing season beyond the local open-field window',
            'Can improve yield consistency and produce quality',
            'Protects crops from weather extremes and some pests',
            'Enables efficient, targeted input use through drip irrigation and fertigation',
          ],
        },
        {
          type: 'list',
          items: [
            'Higher capital and energy costs than open-field production',
            'Dependence on climate-control systems and, in some cases, a reliable power supply',
            'Enclosed, humid conditions can favor certain diseases if not well managed',
            'Economically viable mainly for higher-value crops that justify the added cost',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not provide universal cost, energy, or yield figures for greenhouse farming. These depend heavily on structure type, climate, crop, and local energy prices.',
        },
      ],
    },
    {
      id: 'where-it-is-used',
      heading: 'Where greenhouse farming is used',
      body: [
        {
          type: 'paragraph',
          text: 'Greenhouse and protected cultivation is widespread in regions with harsh, cold, or highly seasonal climates where it extends an otherwise short growing season, and near urban markets where it supports fresh, perishable produce supply. Scale ranges from small tunnels on smallholder farms to large clusters of commercial glasshouses.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'hydroponics' },
    { type: 'farming-system', slug: 'vertical-farming' },
  ],
  connections: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'sweet-pepper' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'nutrient', slug: 'potassium' },
  ],
  glossaryTerms: ['agronomy', 'yield'],
  geographicScope:
    'Greenhouse and protected cultivation is used worldwide, with structure type and reliance on supplemental heating, cooling, or lighting depending strongly on local climate and energy costs.',
  climateContext:
    'The degree of environmental control needed — and its cost — depends heavily on how far the local outdoor climate departs from the crop’s requirements.',
  limitations: [
    'Greenhouse structures and technology vary enormously, from simple tunnels to fully automated glasshouses; this entry describes general principles rather than any one design.',
    'Energy, water, and cost trade-offs depend on climate, structure type, and crop, so figures are not generalized here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Protected cultivation and greenhouse production overview',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Controlled-environment and greenhouse crop research',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Greenhouse vegetable production guidance',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Policy context for protected and horticultural production',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Greenhouse Farming',
    description:
      'Greenhouse farming explained: structure types, environmental control, crop management inside a greenhouse, and honest benefits and trade-offs.',
    keywords: [
      'greenhouse farming',
      'protected cultivation',
      'greenhouse production',
      'polytunnel',
    ],
  },
  structuredData: { article: true },
};
