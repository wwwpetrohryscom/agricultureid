import type { FarmingSystemContent } from '@/types/content';

export const agroecology: FarmingSystemContent = {
  id: 'farming-system-agroecology',
  slug: 'agroecology',
  contentType: 'farming-system',
  title: 'Agroecology',
  systemClass: 'production-approach',
  alternativeNames: ['Agroecological farming'],
  category: 'Farming system',
  subcategory: 'Production approach',
  summary:
    'Agroecology applies ecological principles to the design and management of farming and food systems, seeking to work with natural processes — nutrient cycling, biodiversity, and biological regulation — rather than relying primarily on external inputs.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Agroecology is commonly understood in three overlapping senses: as a scientific discipline that studies farms and food systems as ecological systems, as a set of farming practices that harness ecological processes, and as a social movement concerned with equity and the way food is produced. In agronomic terms, it emphasises diversity, recycling of nutrients and energy, healthy soils, and biological regulation of pests, so that ecological functions substitute for some external inputs.',
    },
    {
      type: 'paragraph',
      text: 'Rather than a fixed recipe, agroecology is a framework that shapes how systems are designed — favouring crop and livestock diversity, integration of components, and use of local knowledge and resources. It overlaps with organic, regenerative, and conservation approaches but is distinguished by its explicit grounding in ecological science and its systems-wide scope.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining idea',
      value: 'Applying ecological principles to farming and food systems',
    },
    {
      label: 'Three senses',
      value: 'A science, a set of practices, and a social movement',
    },
    {
      label: 'Core practices',
      value:
        'Diversification, nutrient recycling, soil care, and biological pest regulation',
    },
    {
      label: 'Input philosophy',
      value:
        'Ecological functions substitute for some external inputs rather than replacing management',
    },
    {
      label: 'Relationship to other systems',
      value: 'Overlaps with organic, regenerative, and conservation approaches',
    },
    {
      label: 'Scope',
      value: 'Extends from the field and farm to the wider food system',
    },
  ],
  sections: [
    {
      id: 'what-agroecology-is',
      heading: 'What agroecology is',
      body: [
        {
          type: 'paragraph',
          text: 'Agroecology treats a farm as an ecosystem and asks how ecological processes — the cycling of nutrients, the flow of energy, interactions among organisms, and the regulation of pests and diseases by natural enemies — can be strengthened to support production. Where conventional intensification often addresses a limiting factor with a purchased input, agroecology looks first to redesign the system so that the underlying function is provided ecologically.',
        },
        {
          type: 'paragraph',
          text: 'It is frequently described through sets of principles or elements covering diversity, synergies between system components, efficiency, recycling, and resilience, alongside social and economic dimensions such as fairness and the value of local and traditional knowledge.',
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
            'Diversifying crops and integrating livestock to spread risk and create beneficial interactions',
            'Recycling nutrients and organic matter within the farm, for example through manures, composts, and residues',
            'Building soil health to underpin nutrient supply and water regulation',
            'Encouraging natural enemies and habitat to help regulate pests and diseases',
            'Using rotations, cover crops, and intercrops to break pest cycles and improve resource use',
          ],
        },
        {
          type: 'paragraph',
          text: 'These practices are combined in ways that suit the local environment and community rather than applied as a uniform package, which is why agroecological systems look different from place to place.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why it matters',
      body: [
        {
          type: 'paragraph',
          text: 'Agroecology is promoted internationally as a pathway toward more sustainable and resilient food systems, particularly where reducing dependence on costly external inputs, conserving biodiversity, and strengthening the position of smallholder farmers are priorities. Its systems perspective connects farming practice with wider questions of food security, livelihoods, and environmental stewardship.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because agroecology spans science, practice, and social movement, different organisations emphasise different aspects; there is no single universal checklist that defines it.',
        },
      ],
    },
    {
      id: 'considerations-and-trade-offs',
      heading: 'Considerations and trade-offs',
      body: [
        {
          type: 'paragraph',
          text: 'Redesigning systems to rely more on ecological functions can require knowledge, labour, and a transition period, and outcomes depend heavily on context. Agroecology is debated in terms of how it balances productivity, sustainability, and social goals across different settings, and this entry presents it as a framework and approach rather than asserting universal outcomes.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not claim specific yield, input-saving, or environmental figures for agroecology. Results are highly context-dependent and are not generalised here.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'farming-system', slug: 'permaculture' },
  ],
  connections: [
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  glossaryTerms: [
    'crop-rotation',
    'cover-crop',
    'integrated-pest-management',
    'agronomy',
  ],
  geographicScope:
    'Agroecology is applied across many regions and farming contexts worldwide; the specific practices and priorities are strongly shaped by local ecology, culture, and economy.',
  climateContext:
    'Agroecological diversification and soil care are often promoted as ways to build resilience to climate variability, though effectiveness depends on the specific system and setting.',
  limitations: [
    'Definitions and emphases of agroecology vary between organisations; this entry describes commonly cited principles rather than one universal standard.',
    'This entry does not provide yield, input-saving, or environmental figures, since outcomes are highly context-dependent.',
    'Agroecology spans practice and social movement; this entry focuses on its agronomic and systems dimensions.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Principles and elements of agroecology in food systems',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on agroecological practices and outcomes',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Policy context for agroecological approaches',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Agroecology',
    description:
      'Agroecology explained: applying ecological principles to farming through diversity, nutrient recycling, soil health, and biological pest regulation.',
    keywords: [
      'agroecology',
      'agroecological farming',
      'ecological farming',
      'sustainable agriculture',
    ],
  },
  structuredData: { article: true },
};
