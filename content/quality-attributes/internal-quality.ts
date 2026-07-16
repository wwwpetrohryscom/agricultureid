import type { QualityAttributeContent } from '@/types/content';

export const internalQuality: QualityAttributeContent = {
  id: 'quality-attribute-internal-quality',
  slug: 'internal-quality',
  contentType: 'quality-attribute',
  title: 'Internal Quality',
  alternativeNames: ['Internal condition', 'Internal disorders'],
  category: 'Quality attribute',
  subcategory: 'Fresh produce',
  attributeClass: 'composite',
  qualityDomain: 'quality-measurement',
  notAnIndicatorOf: [
    'External quality or grade: a fruit or tuber can be flawless externally and unsaleable inside, so an external grade does not certify internal condition.',
    'A food-safety verdict: internal browning and similar disorders are physiological, not hazards, while some genuine safety hazards leave no internal sign at all.',
    'A single measurable property: internal quality is an umbrella over disorders with different causes, and a single score flattens distinctions that matter for diagnosis and prevention.',
    'Diagnostic of cause: several internal disorders look alike on a cut face, and confirming which one is present typically requires knowing the lot’s history and, often, laboratory work.',
  ],
  typicalUnits: [
    '% of cut units showing a disorder',
    'Severity score (dimensionless)',
  ],
  appliesToCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'fresh-pineapples' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'table-grapes' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'visual-defect-inspection' },
  ],
  summary:
    'Internal quality is the condition of tissue beneath the skin — flesh colour and texture, internal browning, breakdown, cavities, hollow heart, translucency, seed or core condition, granulation, and internal decay. Because external appearance and internal condition are decoupled, internal disorders routinely escape the grading line and reach the buyer.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Internal quality covers everything about a commodity that lies beneath the skin: flesh colour and texture, internal browning, breakdown, cavities, hollow heart, translucency, seed or core condition, granulation, and internal decay. It exists as its own category because external appearance and internal condition are decoupled — a fruit or tuber can look flawless from the outside and still be unsaleable once opened. That gap is precisely why internal disorders are able to escape a grading line built around visual inspection of the exterior, and why they so often generate rejections after a lot has already been accepted, shipped, and paid for.',
    },
    {
      type: 'paragraph',
      text: 'Internal quality is a composite, not a single measurable property: it bundles together disorders that arise from different causes — pre-harvest nutrition, harvest maturity, chilling exposure, storage duration, and storage atmosphere among them — under one umbrella term. Assessing it is almost always destructive on the units examined, because the only routine way to see inside a commodity is to cut it open, and that fact shapes both how the assessment is done and how much confidence can be placed in the result.',
    },
  ],
  keyFacts: [
    {
      label: 'What it covers',
      value:
        'Flesh colour and texture, internal browning, breakdown, cavities, hollow heart, translucency, seed or core condition, granulation, and internal decay',
    },
    {
      label: 'Why it matters',
      value:
        'External appearance and internal condition are decoupled — a lot can look flawless outside and be unsaleable inside',
    },
    {
      label: 'How it is assessed',
      value:
        'Cut-sample examination: units are cut open and scored against a defined scheme',
      note: 'Destructive on the sampled units — an inference about the lot, not a claim visible from outside',
    },
    {
      label: 'Sampling uncertainty',
      value:
        'Incidence is often clustered by orchard block, canopy position, or storage location, so small samples can miss disorders that still generate complaints',
    },
    {
      label: 'Non-destructive alternatives',
      value:
        'Near-infrared transmission, X-ray, and acoustic methods exist, but each detects only what its own calibration or contrast mechanism supports',
    },
    {
      label: 'Causes span the chain',
      value:
        'Pre-harvest mineral nutrition, maturity at harvest, chilling exposure, storage duration, and storage atmosphere all contribute',
    },
    {
      label: 'Not diagnostic alone',
      value:
        'Several internal disorders look alike on a cut face; confirming which one is present often requires the lot’s history and laboratory work',
    },
  ],
  sections: [
    {
      id: 'why-internal-quality-needs-its-own-page',
      heading: 'Internal condition is not visible from outside',
      body: [
        {
          type: 'paragraph',
          text: 'A commodity that scores well against every external grading criterion — colour, size, shape, absence of surface blemish — can still be unsaleable once cut open. That decoupling between external appearance and internal condition is the entire reason internal quality is tracked as a category of its own: it names a class of failure that a purely visual, exterior-only grading line cannot catch, and it explains why internal disorders so often surface only after a lot has cleared inspection, been shipped, and been paid for.',
        },
      ],
    },
    {
      id: 'cut-sample-examination',
      heading: 'How internal quality is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Internal quality is assessed by cut-sample examination: a subset of units is cut open and the exposed tissue is examined against a defined scoring scheme for the disorders relevant to that commodity. This method is destructive on every unit it is applied to, which means the result is necessarily an inference about the whole lot drawn from a small number of sacrificed units — it is not, and should never be read as, a claim that internal condition can be seen from outside without cutting.',
        },
      ],
    },
    {
      id: 'sampling-uncertainty-and-alternatives',
      heading: 'Sampling uncertainty and non-destructive alternatives',
      body: [
        {
          type: 'paragraph',
          text: 'Internal disorders are often heterogeneous in their distribution through a lot, clustering by orchard block, canopy position within a tree, or location within a store rather than occurring uniformly. A cut-sample estimate therefore carries real sampling uncertainty, and a small sample can easily miss a low-incidence disorder that is nonetheless large enough, once the whole lot is considered, to generate complaints from buyers.',
        },
        {
          type: 'paragraph',
          text: 'Non-destructive alternatives do exist — near-infrared transmission, X-ray imaging, and acoustic testing among them — and each can detect certain internal disorders without cutting the unit open. But each depends on a specific calibration or physical contrast mechanism that only picks up what it was built to detect, and none of them functions as a general-purpose internal-quality instrument capable of catching every disorder that a cut sample would reveal.',
        },
      ],
    },
    {
      id: 'causes-span-the-whole-chain',
      heading: 'Causes span the whole chain',
      body: [
        {
          type: 'list',
          items: [
            'Pre-harvest mineral nutrition — calcium status in particular underlies several storage disorders.',
            'Maturity at harvest — see Maturity Index.',
            'Chilling exposure — see Chilling Sensitivity.',
            'Storage duration.',
            'Storage atmosphere — including carbon dioxide injury that can arise in controlled-atmosphere storage.',
          ],
        },
      ],
    },
    {
      id: 'what-internal-quality-does-not-tell-you',
      heading: 'What internal quality does not tell you',
      body: [
        {
          type: 'list',
          items: [
            'Not external quality or grade — a flawless exterior does not certify internal condition.',
            'Not a food-safety verdict — internal disorders are physiological, and some genuine safety hazards leave no internal sign at all.',
            'Not a single measurable property — it is an umbrella over disorders with different causes that a single score flattens.',
            'Not diagnostic of cause — several disorders look alike on a cut face, and confirming which one is present usually requires the lot’s history and often laboratory work.',
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'chilling-sensitivity' },
    { type: 'quality-attribute', slug: 'maturity-index' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'potato-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Internal disorder physiology and cut-sample assessment research',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Post-harvest internal quality assessment guidance',
    },
    {
      sourceId: 'cip',
      citedFor: 'Internal disorder assessment in potato storage',
    },
    {
      sourceId: 'fao',
      citedFor: 'Internal quality and post-harvest disorder principles',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Internal disorders and their acceptable incidence are commodity- and market-specific; the applicable grade standard or buyer contract sets tolerances, and this entry states none.',
  limitations: [
    'This entry states no incidence limits or scoring values. The applicable grade standard or buyer contract sets the acceptable incidence for a given commodity and market.',
    'Internal quality is an umbrella over disorders with different causes; a single score or percentage flattens distinctions that matter for diagnosis and prevention.',
    'Cut-sample examination is destructive on the units sampled and is an inference about the lot from a small number of sacrificed units, not an exhaustive inspection.',
    'Non-destructive methods — near-infrared transmission, X-ray, and acoustic testing — each detect only what their own calibration or contrast mechanism supports and are not general-purpose internal-quality instruments.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Internal Quality: Hidden Beneath the Skin',
    description:
      'Internal quality covers disorders beneath the skin that external grading cannot catch. Learn how cut-sample examination works and where it falls short.',
    keywords: [
      'internal quality',
      'internal browning',
      'hollow heart',
      'cut sample examination',
      'postharvest disorders',
    ],
  },
  structuredData: { article: true },
};
