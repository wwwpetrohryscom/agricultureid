import type { SoilTopicContent } from '@/types/content';

export const soilBiology: SoilTopicContent = {
  id: 'soil-topic-soil-biology',
  slug: 'soil-biology',
  contentType: 'soil-topic',
  title: 'Soil Biology',
  topicClass: 'biological',
  alternativeNames: ['Soil food web', 'Soil biological activity'],
  category: 'Soil biological property',
  subcategory: 'Living component of soil',
  summary:
    'Soil biology encompasses the full community of organisms living in soil — from bacteria and fungi to earthworms and arthropods — and the processes they drive, including decomposition, nutrient cycling, structure formation, and disease suppression.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil hosts an enormous diversity of life spanning many size scales: microscopic bacteria, fungi, protozoa, and nematodes; larger soil fauna such as earthworms, mites, and insects; and the roots of plants themselves, which continually shape the biological environment around them.',
    },
    {
      type: 'paragraph',
      text: 'These organisms interact in a food web of predation, decomposition, and symbiosis that drives most of the transformations soil undergoes — from breaking down residues to building stable aggregates and cycling nutrients between organic and plant-available forms.',
    },
  ],
  keyFacts: [
    {
      label: 'Includes',
      value:
        'Bacteria, fungi, protozoa, nematodes, earthworms, arthropods, and other soil fauna',
    },
    {
      label: 'Key roles',
      value:
        'Decomposition, nutrient cycling, aggregate/structure formation, some disease suppression',
    },
    {
      label: 'Key symbioses',
      value:
        'Mycorrhizal fungi and nitrogen-fixing bacteria in association with plant roots',
    },
    {
      label: 'Assessed via',
      value:
        'Soil respiration (CO2 flux), microbial biomass assays, earthworm counts, DNA-based profiling',
    },
    {
      label: 'Favoured by',
      value:
        'Organic matter inputs, plant diversity, reduced tillage and pesticide disturbance',
    },
    {
      label: 'Suppressed by',
      value:
        'Excessive tillage, compaction, waterlogging, and some chemical inputs',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil biology is',
      body: [
        {
          type: 'paragraph',
          text: 'Soil biology refers to the living organisms in soil and the ecological relationships among them, often described collectively as the soil food web. It spans microorganisms too small to see individually, mesofauna such as mites and springtails, and macrofauna such as earthworms and larger insects, plus the plant roots that supply much of the food web’s energy.',
        },
        {
          type: 'list',
          items: [
            'Decomposers (bacteria, fungi) break down organic residues',
            'Grazers (protozoa, nematodes, mites) consume decomposers and release nutrients',
            'Ecosystem engineers (earthworms, some arthropods) physically rework soil structure',
            'Root-associated organisms (mycorrhizal fungi, rhizobia) form symbioses that benefit plant nutrition',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why soil biology matters',
      body: [
        {
          type: 'paragraph',
          text: 'Biological activity drives the decomposition of organic residues and the mineralization of nutrients into forms plants can use. Organisms such as earthworms and fungal hyphae physically bind particles into stable aggregates, improving structure and water infiltration. Some soil organisms also compete with or directly antagonize plant pathogens, contributing to natural disease suppression, and symbioses such as those between legumes and nitrogen-fixing bacteria supply substantial nitrogen without synthetic fertilizer.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How soil biological activity is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Soil respiration, measured as carbon dioxide release from a moistened sample, gives a general indication of overall microbial activity. Microbial biomass assays estimate the living mass of microorganisms present, while simple field counts of earthworms per unit area offer an accessible macrofauna indicator. DNA- and RNA-based sequencing methods increasingly allow detailed profiling of which organisms are present and active, though these methods are more specialized and costly.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Biological indicators can shift quickly with recent weather, moisture, and disturbance, so single measurements are best interpreted alongside repeated sampling over a season or longer.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Supporting soil biology',
      body: [
        {
          type: 'paragraph',
          text: 'Management that favors soil biology generally centers on providing a steady food supply of organic residues, maintaining habitat through reduced physical disturbance, and avoiding conditions — such as prolonged waterlogging or compaction — that suppress most beneficial organisms.',
        },
        {
          type: 'list',
          items: [
            'Maintain organic matter inputs (residues, cover crops, composts) as a food source for soil organisms',
            'Diversify crop rotations to support a broader range of organisms and root associations',
            'Reduce tillage intensity to protect fungal networks and soil fauna habitat',
            'Limit unnecessary broad-spectrum chemical inputs that can non-selectively harm soil organisms',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-microorganisms' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-structure' },
  ],
  connections: [
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'pea' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
  ],
  glossaryTerms: ['cover-crop', 'crop-rotation'],
  geographicScope:
    'General soil-science overview applicable worldwide; the composition and activity of soil biological communities vary greatly by climate, soil type, and management.',
  climateContext:
    'Temperature and moisture strongly regulate the activity levels and seasonal dynamics of soil organisms.',
  limitations: [
    'Biological indicators are sensitive to recent weather and disturbance, so single-point measurements provide only a limited snapshot.',
    'The specific organisms present and their activity vary greatly by region, soil type, and land-use history and are not generalized here.',
    'DNA-based community profiling is a specialized method not routinely available to most growers.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil biology, the soil food web, and biological indicators',
    },
    { sourceId: 'fao-soils', citedFor: 'Soil biodiversity and function' },
    { sourceId: 'isric', citedFor: 'Global soil biological property context' },
    { sourceId: 'cornell-cals', citedFor: 'Soil biological health assessment' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Biology',
    description:
      'Soil biology explained: the organisms that make up the soil food web, their roles in decomposition and nutrient cycling, and how to support them.',
    keywords: [
      'soil biology',
      'soil food web',
      'soil organisms',
      'soil health',
    ],
  },
  structuredData: { article: true },
};
