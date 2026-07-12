import type { SoilTopicContent } from '@/types/content';

export const soilMicroorganisms: SoilTopicContent = {
  id: 'soil-topic-soil-microorganisms',
  slug: 'soil-microorganisms',
  contentType: 'soil-topic',
  title: 'Soil Microorganisms',
  topicClass: 'biological',
  alternativeNames: ['Soil microbes', 'Soil microbiota'],
  category: 'Soil biological property',
  subcategory: 'Microbial community',
  summary:
    'Soil microorganisms — bacteria, fungi, archaea, and protozoa — are the most numerous and diverse living component of soil. They drive decomposition and nutrient cycling, form key symbioses with plant roots, and help suppress some soil-borne pathogens.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A single handful of healthy soil can contain an immense number of microorganisms across a huge diversity of species, most of which remain uncharacterized. This microbial community forms the base of the soil food web, mediating nearly every chemical transformation that organic residues and minerals undergo.',
    },
    {
      type: 'paragraph',
      text: 'Beyond free-living decomposers, some soil microorganisms form close symbioses with plant roots — most notably mycorrhizal fungi and nitrogen-fixing rhizobia — that directly enhance plant nutrition, while others act as pathogens or as natural antagonists of pathogens.',
    },
  ],
  keyFacts: [
    {
      label: 'Major groups',
      value: 'Bacteria, fungi, archaea, protozoa, and soil algae',
    },
    {
      label: 'Key symbioses',
      value:
        'Mycorrhizal fungi (nutrient/water uptake) and rhizobia (nitrogen fixation with legumes)',
    },
    {
      label: 'Functions',
      value:
        'Decomposition, nutrient mineralization, disease suppression via competition/antagonism, aggregate stabilization',
    },
    {
      label: 'Diversity',
      value:
        'An enormous and diverse community, most of which remains uncharacterized',
    },
    {
      label: 'Assessed via',
      value:
        'Microbial biomass carbon, soil respiration, and DNA/RNA-based sequencing methods',
    },
    {
      label: 'Supported by',
      value:
        'Organic matter inputs, diverse plant rotations, reduced tillage and disturbance',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil microorganisms are',
      body: [
        {
          type: 'paragraph',
          text: 'Soil microorganisms include bacteria (the most numerous group by cell count), fungi (which can dominate microbial biomass through extensive hyphal networks), archaea, and protozoa. Each group occupies different ecological niches, from rapid decomposition of simple compounds by many bacteria to the breakdown of more resistant organic material by fungi.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Mycorrhizal fungi',
              description:
                'Fungi that form symbiotic associations with plant roots, extending the root’s effective reach for water and nutrients, especially phosphorus.',
            },
            {
              term: 'Rhizobia',
              description:
                'Bacteria that form nodules on the roots of legumes and fix atmospheric nitrogen into plant-available forms.',
            },
            {
              term: 'Antagonistic microorganisms',
              description:
                'Microbes that suppress pathogens through competition, antibiosis, or direct parasitism, contributing to natural disease suppression.',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why soil microorganisms matter',
      body: [
        {
          type: 'paragraph',
          text: 'Microbial decomposition and mineralization release nutrients locked in organic matter into forms plants can absorb, making microorganisms central to nutrient cycling. Mycorrhizal and rhizobial symbioses can substantially improve plant nutrient and water acquisition. Some microbial communities also suppress soil-borne pathogens through competition for resources, production of antagonistic compounds, or direct parasitism, contributing to natural disease resistance in well-managed soils.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How the microbial community is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Microbial biomass carbon estimates the total living microbial mass in a sample, while soil respiration (carbon dioxide release) reflects overall metabolic activity. Phospholipid fatty acid (PLFA) analysis can characterize broad community composition, and DNA- or RNA-based sequencing methods provide detailed identification of which organisms are present and, in some cases, active.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Microbial measures are sensitive to recent moisture, temperature, and disturbance, so results are best interpreted as part of a time series rather than a single snapshot.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Supporting beneficial soil microorganisms',
      body: [
        {
          type: 'paragraph',
          text: 'Because microorganisms depend on organic carbon as an energy source, management that maintains a steady supply of residues and living roots, while minimizing unnecessary disturbance, tends to support a more active and diverse microbial community.',
        },
        {
          type: 'list',
          items: [
            'Maintain organic matter inputs through residues, cover crops, and organic amendments',
            'Rotate diverse crops, including legumes, to support varied microbial symbioses',
            'Reduce tillage intensity to protect fungal networks and microbial habitat',
            'Consider microbial inoculants (such as rhizobial or mycorrhizal products) where appropriate for the crop and soil, following supplier and regional guidance',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  connections: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'crop', slug: 'pea' },
    { type: 'crop', slug: 'chickpea' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'vermicompost' },
    { type: 'fertilizer', slug: 'compost' },
  ],
  glossaryTerms: ['inoculum', 'crop-rotation'],
  geographicScope:
    'General soil-science overview applicable worldwide; the composition and function of microbial communities vary greatly by climate, soil type, and management.',
  climateContext:
    'Temperature and moisture regulate microbial activity rates and seasonal community dynamics.',
  limitations: [
    'The soil microbial community is highly diverse and site-specific; most species remain uncharacterized, and general statements cannot capture local variation.',
    'Microbial measurements are sensitive to recent conditions and are best interpreted as trends over repeated sampling rather than single results.',
    'Microbial inoculant performance varies with soil conditions, existing microbial populations, and crop, and is not guaranteed across all contexts.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil microorganisms and microbial indicators',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil microbial diversity and function',
    },
    { sourceId: 'isric', citedFor: 'Global soil biological property context' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Soil microbial community assessment',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Microorganisms',
    description:
      'Soil microorganisms explained: bacteria, fungi, archaea, and protozoa, their roles in nutrient cycling and symbioses, and how to assess and support them.',
    keywords: [
      'soil microorganisms',
      'soil microbes',
      'mycorrhizal fungi',
      'rhizobia',
    ],
  },
  structuredData: { article: true },
};
