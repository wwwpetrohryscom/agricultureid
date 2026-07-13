import type { SoilTopicContent } from '@/types/content';

export const soilClassification: SoilTopicContent = {
  id: 'soil-topic-soil-classification',
  slug: 'soil-classification',
  contentType: 'soil-topic',
  title: 'Soil Classification',
  topicClass: 'management',
  alternativeNames: ['Soil taxonomy', 'Soil survey classification'],
  category: 'Soil survey and management',
  subcategory: 'Classification systems',
  summary:
    'Soil classification groups soils into named units based on measurable, observable properties such as horizons, texture, colour, and chemistry, so that knowledge and management guidance can be transferred between similar soils and mapped across the landscape.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil classification is the systematic grouping of soils into categories defined by properties that can be observed or measured in the field and laboratory, including the sequence of horizons in the profile, texture, colour, structure, organic matter, and chemical characteristics. By placing a soil into a named class, surveyors and land managers can relate it to other soils with similar behaviour and transfer management knowledge between them.',
    },
    {
      type: 'paragraph',
      text: 'Two widely used systems dominate international practice: the World Reference Base for Soil Resources (WRB), coordinated internationally and organised around Reference Soil Groups, and USDA Soil Taxonomy, which uses a hierarchy from orders down to series. Many countries also maintain their own national classifications, so the same soil may carry more than one name depending on the system applied.',
    },
  ],
  keyFacts: [
    {
      label: 'Purpose',
      value:
        'Group soils by shared properties so management knowledge transfers between similar soils',
    },
    {
      label: 'Based on',
      value:
        'Diagnostic horizons and properties: profile morphology, texture, colour, chemistry, organic matter',
    },
    {
      label: 'Major international systems',
      value:
        'World Reference Base (WRB) Reference Soil Groups and USDA Soil Taxonomy',
    },
    {
      label: 'WRB structure',
      value:
        'Reference Soil Groups modified by principal and supplementary qualifiers',
    },
    {
      label: 'USDA structure',
      value:
        'Hierarchy of orders, suborders, great groups, subgroups, families, and series',
    },
    {
      label: 'Practical use',
      value:
        'Soil survey, land evaluation, mapping, and transfer of management guidance',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil classification is',
      body: [
        {
          type: 'paragraph',
          text: 'Classification assigns a soil to a named unit using diagnostic features: distinctive horizons and specific properties whose presence, absence, or degree of expression defines each class. Because the criteria are explicit and measurable, two surveyors examining the same profile should reach the same classification, which is what allows soils to be compared consistently across regions and over time.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Diagnostic horizon',
              description:
                'A layer with defined properties (such as a specific surface horizon or a subsurface clay-enriched horizon) used to place a soil in a class.',
            },
            {
              term: 'Reference Soil Group',
              description:
                'The top-level unit of the World Reference Base, such as Chernozem, Ferralsol, Gleysol, or Histosol, refined by qualifiers.',
            },
            {
              term: 'Soil order',
              description:
                'The broadest level of USDA Soil Taxonomy, subdivided in a hierarchy down to the highly specific soil series.',
            },
          ],
        },
      ],
    },
    {
      id: 'major-systems',
      heading: 'Major classification systems',
      body: [
        {
          type: 'paragraph',
          text: 'The World Reference Base for Soil Resources provides a common international language of Reference Soil Groups modified by qualifiers, and is widely used for correlating soils between countries. USDA Soil Taxonomy is a hierarchical system used extensively in the United States and elsewhere, organising soils from broad orders to narrowly defined series. National systems remain in use in many countries and are often correlated back to WRB.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because systems use different criteria, the same profile can carry more than one name; a soil described as a Luvisol under WRB may fall under a different order in USDA Soil Taxonomy.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why classification matters',
      body: [
        {
          type: 'paragraph',
          text: 'A soil name is a compact summary of expected behaviour. Knowing that a soil is a Vertisol, a Podzol, or a Fluvisol immediately signals likely drainage, workability, fertility, and management constraints, which supports land evaluation, soil mapping, and the transfer of research and management guidance from studied soils to similar unstudied ones.',
        },
        {
          type: 'list',
          items: [
            'Supports soil survey and mapping so land units can be delineated and described consistently',
            'Underpins land evaluation and suitability assessment for crops and other uses',
            'Enables management guidance developed on one soil to be applied to similar soils elsewhere',
            'Provides a common vocabulary for research, extension, and policy across regions',
          ],
        },
      ],
    },
    {
      id: 'limitations-in-practice',
      heading: 'Using classification in practice',
      body: [
        {
          type: 'paragraph',
          text: 'Classification places a soil in a group but does not remove the need for site-specific assessment. Soils vary within a mapped unit, and properties important for a particular decision, such as compaction, nutrient status, or salinity, still require direct testing. Classification is best treated as a framework that guides investigation rather than a substitute for it.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-profile' },
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'soil-topic', slug: 'soil-structure' },
  ],
  connections: [
    { type: 'soil', slug: 'chernozem' },
    { type: 'soil', slug: 'luvisol' },
    { type: 'soil', slug: 'gleysol' },
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'histosol' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  glossaryTerms: ['soil-texture', 'soil-ph'],
  geographicScope:
    'Global. Classification principles apply worldwide, but the specific system and unit names depend on the framework used (World Reference Base, USDA Soil Taxonomy, or national systems) and on local soil survey coverage.',
  limitations: [
    'The same soil can carry different names under different classification systems, so cross-system correlation is required to compare studies.',
    'Classification groups soils by shared properties but soils vary within any mapped unit, so site-specific testing is still needed for decisions.',
    'This entry outlines general principles; authoritative placement of a specific soil requires formal survey and diagnostic criteria.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-soils',
      citedFor: 'World Reference Base Reference Soil Groups and classification',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'USDA Soil Taxonomy and soil survey framework',
    },
    {
      sourceId: 'isric',
      citedFor: 'Global soil classification and correlation',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General overview of soil classification',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Classification',
    description:
      'Soil classification explained: how WRB Reference Soil Groups and USDA Soil Taxonomy group soils by diagnostic horizons and properties, and why it matters.',
    keywords: [
      'soil classification',
      'soil taxonomy',
      'world reference base',
      'reference soil groups',
    ],
  },
  structuredData: { article: true },
};
