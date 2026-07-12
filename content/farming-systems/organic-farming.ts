import type { FarmingSystemContent } from '@/types/content';

export const organicFarming: FarmingSystemContent = {
  id: 'system-organic-farming',
  slug: 'organic-farming',
  contentType: 'farming-system',
  title: 'Organic Farming',
  systemClass: 'production-approach',
  alternativeNames: ['Organic agriculture', 'Organic production'],
  category: 'Farming system',
  subcategory: 'Production approach',
  summary:
    'Organic farming is a production approach governed by certification standards that restrict synthetic pesticides, synthetic fertilizers, and genetically modified inputs, relying instead on crop rotation, organic soil amendments, and biological pest management.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Organic farming is a system of crop and livestock production defined less by a single technique than by a certification standard: it restricts or prohibits synthetic pesticides, synthetic fertilizers, and genetically modified organisms, and requires practices such as crop rotation, cover cropping, and organic soil amendments to maintain fertility and manage pests. What counts as “organic” is set by national or regional regulations, so the specific rules a farm must follow depend on where it is certified and where it intends to sell.',
    },
    {
      type: 'paragraph',
      text: 'Because organic standards are regulatory rather than purely agronomic, organic farming spans a wide range of practical intensities, from diversified smallholder systems to large, mechanized operations that meet certification rules while still relying substantially on purchased organic-approved inputs. It is one of several production approaches — alongside conventional, regenerative, and integrated systems — that farms adopt depending on markets, resources, and goals.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Certification standard restricting synthetic pesticides, synthetic fertilizers, and GMOs',
    },
    {
      label: 'Who sets the rules',
      value:
        'National or regional regulatory bodies; standards vary by country',
    },
    {
      label: 'Core practices',
      value:
        'Crop rotation, cover cropping, composting, biological and cultural pest management',
    },
    {
      label: 'Transition to certification',
      value:
        'Typically a multi-year conversion period before land can be certified organic',
    },
    {
      label: 'Yield relative to conventional',
      value:
        'Varies by crop, soil, and region — not universally higher or lower',
    },
    {
      label: 'Market identifier',
      value: 'Certified-organic labeling, often carrying a price premium',
    },
  ],
  sections: [
    {
      id: 'what-organic-farming-is',
      heading: 'What organic farming is',
      body: [
        {
          type: 'paragraph',
          text: 'Organic farming is best understood as production carried out under a specific regulatory standard rather than as one fixed technique. Certifying bodies define an approved and a prohibited list of inputs and practices, and a farm must follow those rules and pass inspection to market its output as “organic.”',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Certified organic',
              description:
                'Produce or livestock grown under an approved standard and verified by inspection or audit.',
            },
            {
              term: 'Organic-approved input',
              description:
                'A fertilizer, pesticide, or other input permitted under a given organic standard, distinct from a synthetic equivalent.',
            },
            {
              term: 'Conversion period',
              description:
                'The multi-year period a farm must operate under organic rules before its output can be certified.',
            },
          ],
        },
      ],
    },
    {
      id: 'standards-and-certification',
      heading: 'Standards and certification',
      body: [
        {
          type: 'paragraph',
          text: 'Organic standards are set and enforced by national or regional authorities, and the detailed rules — permitted inputs, conversion periods, record-keeping, and inspection requirements — differ between jurisdictions. A practice or input allowed under one country’s organic regulation may not be allowed under another’s.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rules are set regionally',
          text: 'AgricultureID does not publish a universal organic rulebook. Producers and buyers should consult the specific standard that applies in their country or target market before assuming a practice or product qualifies as organic.',
        },
      ],
    },
    {
      id: 'core-practices',
      heading: 'Core practices',
      body: [
        {
          type: 'list',
          items: [
            'Multi-year crop rotations to break pest and disease cycles and diversify nutrient demand',
            'Cover cropping and green manures to protect and build soil organic matter',
            'Composted or raw animal manures and other organic amendments for fertility',
            'Biological, cultural, and mechanical pest and weed control in place of most synthetic pesticides',
            'Use of resistant or locally adapted varieties and diversified plantings',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because synthetic pesticide and fertilizer options are restricted, organic systems lean heavily on preventive strategies — rotation, timing, and biological processes — rather than on a single corrective input applied after a problem appears.',
        },
      ],
    },
    {
      id: 'pest-and-fertility-management',
      heading: 'Pest and fertility management',
      body: [
        {
          type: 'paragraph',
          text: 'Fertility in organic systems is built mainly through biological cycling — compost, manures, green manures, and rotations that include nitrogen-fixing legumes — rather than through readily soluble synthetic fertilizer. Pest and weed management similarly relies on prevention, biological control agents, and cultural practices, since most synthetic pesticides are excluded.',
        },
        {
          type: 'table',
          caption: 'Typical organic approaches by input category',
          columns: ['Input category', 'Typical organic approach'],
          rows: [
            [
              'Soil fertility',
              'Compost, manures, green manures, legume rotations',
            ],
            ['Weeds', 'Mechanical cultivation, mulching, rotation, timing'],
            [
              'Insect pests',
              'Biological control agents, approved botanical or microbial products, cultural controls',
            ],
            [
              'Disease',
              'Resistant varieties, rotation, sanitation, approved biological or mineral products',
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
            'Reduces reliance on synthetic pesticides and fertilizers on certified land',
            'Practices such as composting and rotation can support soil biological activity over time',
            'Often accesses markets willing to pay a price premium for certified organic products',
            'Diversified rotations can support on-farm biodiversity',
          ],
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Yield can be more variable and, for some crops and regions, lower than intensive conventional systems',
            'Weed and pest management without synthetic options can require more labor or skilled management',
            'Certification involves cost, record-keeping, and inspection',
            'Sourcing enough organic-approved fertility inputs can be a constraint in some regions',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Yield and profitability outcomes vary widely by crop, region, soil, and management. This entry makes no claim that organic farming is universally more or less productive or profitable than other systems.',
        },
      ],
    },
    {
      id: 'where-organic-farming-is-used',
      heading: 'Where organic farming is used',
      body: [
        {
          type: 'paragraph',
          text: 'Organic production is found worldwide, from certified smallholder plots supplying local markets to large mechanized farms and processors supplying export markets. It is most established in horticultural and fruit crops, dairy, and diversified mixed farms, and least common where certification infrastructure, input access, or market demand is limited.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  connections: [
    { type: 'crop', slug: 'aloe-vera' },
    { type: 'crop', slug: 'okra' },
    { type: 'crop', slug: 'cinnamon' },
    { type: 'crop', slug: 'tobacco' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'fertilizer', slug: 'green-manure' },
  ],
  glossaryTerms: ['crop-rotation', 'cover-crop', 'agronomy'],
  geographicScope:
    'Organic farming is practiced worldwide, but the legal definition of "organic" and its certification requirements are set by national or regional authorities and differ between jurisdictions.',
  climateContext:
    'Pest pressure, disease risk, and cover-crop options under organic management vary strongly with regional climate.',
  limitations: [
    'This entry describes organic farming in general terms; it is not a certification guide and does not replace the specific standard that applies in a given country.',
    'It makes no yield, profitability, or environmental-impact comparisons with other systems, since outcomes vary too widely by crop, region, and management to generalize.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Organic agriculture within sustainable production systems',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil health practices used in organic and other systems',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'EU organic farming regulation and policy context',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on organic and low-input production systems',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Organic Farming',
    description:
      'Organic farming explained: certification standards, core practices like rotation and composting, and honest benefits and trade-offs.',
    keywords: [
      'organic farming',
      'organic agriculture',
      'organic certification',
      'crop rotation',
    ],
  },
  structuredData: { article: true },
};
