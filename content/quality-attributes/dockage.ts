import type { QualityAttributeContent } from '@/types/content';

export const dockage: QualityAttributeContent = {
  id: 'quality-attribute-dockage',
  slug: 'dockage',
  contentType: 'quality-attribute',
  title: 'Dockage',
  alternativeNames: ['Screenings'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'physical',
  qualityDomain: 'commercial-grading',
  notAnIndicatorOf: [
    'Not the same as foreign material and not interchangeable with it — a lot can be low in dockage and high in foreign material, or the reverse; the two are assessed at different stages and by different rules.',
    'Not a safety indicator — the cleaning device that removes dockage takes out bulk chaff, straw, and weed seed, not mycotoxin, and the removed screenings concentrate weed seed, mould, and toxin rather than eliminating them, so cleaned grain should never be assumed to be safe grain.',
    'Not a measure of grain quality in general — a low-dockage lot can still be unsound, out of condition, or otherwise defective on factors dockage does not touch.',
    'Not defined identically from one national grade standard to another, so a dockage figure obtained under one country’s procedure is not a portable, universal number.',
  ],
  measurementBasis:
    'As determined using the cleaning device and procedure prescribed by the applicable grade standard',
  typicalUnits: ['% by mass'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'durum-wheat-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'oat-grain' },
    { type: 'commodity', slug: 'rye-grain' },
    { type: 'commodity', slug: 'flaxseed' },
  ],
  measuredBy: [{ type: 'quality-measurement', slug: 'sieve-analysis' }],
  summary:
    'Dockage is material readily removable from a grain lot by a prescribed cleaning device — chaff, straw, weed seeds, dust, and other fine material. Unlike most quality factors, its defining feature is procedural: it is determined with specified equipment, reported separately from the grade, and deducted directly from the weight the seller is paid for.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dockage is the portion of a delivered grain lot that consists of material other than the grain itself — chaff, straw fragments, weed seeds, dust, and other fine matter — and that can be removed by running a representative sample through a cleaning device specified for the purpose. It is not assessed by eye or by a general defect count; it is assessed by actually running the sample through the prescribed mechanical separation and weighing what comes out.',
    },
    {
      type: 'paragraph',
      text: 'What sets dockage apart from most other quality attributes is where its consequence lands. In grain standards such as those administered by the United States Department of Agriculture, dockage is determined separately from the numerical grade and is deducted from the gross weight of the delivered lot before payment is calculated. A buyer does not pay for dockage; a seller is not compensated for hauling and delivering it. The mechanism is a direct weight loss at the point of sale, not a discount applied to an otherwise-graded lot.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'Chaff, straw, weed seeds, dust, and other fine material readily removable from grain by a prescribed cleaning device',
    },
    {
      label: 'How it is determined',
      value:
        'By running a representative sample through the specified cleaning device and weighing the material removed',
    },
    {
      label: 'Commercial consequence',
      value:
        'Reported separately from the grade and deducted directly from the delivered weight the seller is paid for',
      note: 'A direct weight loss to the seller, not a grade discount',
    },
    {
      label: 'Not the same as',
      value:
        'Foreign material, which is what remains with the grain after dockage removal',
    },
    {
      label: 'Not a safety signal',
      value:
        'Removing dockage removes bulk trash, not mycotoxin; screenings concentrate contamination rather than eliminating it',
    },
    {
      label: 'Portability',
      value:
        'Definitions and procedures differ between national standards; figures are not directly interchangeable',
    },
    {
      label: 'Disposition',
      value:
        'Screenings can have feed value where regulation allows, but their use is regulated',
    },
  ],
  sections: [
    {
      id: 'what-dockage-is',
      heading: 'What dockage is',
      body: [
        {
          type: 'paragraph',
          text: 'Dockage consists of the material that arrives with a grain delivery but is not the grain being sold: chaff and straw fragments left by threshing, weed seeds picked up in the field, soil and dust, and other fine matter light or small enough to separate from sound kernels by mechanical cleaning. It is defined functionally rather than by a fixed list of substances — the operative test is whether the prescribed device removes it, not what it is made of.',
        },
        {
          type: 'paragraph',
          text: 'Because the test is procedural, dockage is only meaningful in reference to the specific cleaning device and settings the applicable standard prescribes. A general-purpose grain cleaner run at different settings, or a different make of dockage tester, will not reproduce the same figure. This is why grade standards specify the apparatus in detail rather than leaving the determination to inspector judgement.',
        },
      ],
    },
    {
      id: 'determination-and-the-weight-deduction',
      heading: 'How dockage is determined and why the deduction matters',
      body: [
        {
          type: 'paragraph',
          text: 'A representative sample is drawn from the lot and passed through the cleaning device specified by the applicable grade standard. What the device removes is weighed and expressed as a share of the sample, and that share is applied to the whole delivered lot. The figure is then reported alongside — but separately from — the numerical grade.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Dockage is deducted from weight, not scored against grade',
          text: 'This is the point that distinguishes dockage from almost every other grading factor: it is not converted into a grade penalty. It is subtracted directly from the delivered weight before the seller is paid, so a high-dockage load costs the seller in tonnage regardless of what grade the cleaned grain achieves.',
        },
      ],
    },
    {
      id: 'dockage-versus-foreign-material',
      heading: 'Dockage versus foreign material',
      body: [
        {
          type: 'paragraph',
          text: 'Dockage and foreign material are frequently confused because both describe non-grain content, but they are assessed at different stages and have different consequences. Dockage is removed first, by the prescribed cleaning device, and is deducted from weight. Foreign material is what remains mixed with the grain after that dockage removal — finer or more tightly associated matter that the cleaning step does not take out — and it is treated as a grade factor rather than a weight deduction.',
        },
        {
          type: 'paragraph',
          text: 'A lot can therefore be low in dockage but high in foreign material, or the reverse, and the two figures should never be read as interchangeable or averaged together. Buyers and sellers relying on a contract that specifies one when the other is meant risk a genuine commercial dispute.',
        },
      ],
    },
    {
      id: 'not-a-safety-measure',
      heading: 'Why dockage is not a safety measure',
      body: [
        {
          type: 'paragraph',
          text: 'Removing dockage cleans a lot of bulk trash — chaff, straw, weed seed, dust — but this is a physical separation, not a decontamination step. Cleaning does not remove mycotoxins that have already formed within the grain itself, and the material screened out is often where contamination concentrates: weed seeds, mould-affected fines, and insect-damaged fragments tend to be exactly the kind of light, small material a cleaner separates out. Treating a cleaned lot as a safe lot conflates a commercial weight adjustment with a food- or feed-safety determination, which it is not.',
        },
        {
          type: 'list',
          items: [
            'Dockage material is not necessarily worthless: screenings can have recognised feed value where permitted.',
            'Because screenings concentrate weed seed, mould, and toxin from the original lot, their feed use is regulated rather than unrestricted.',
            'Confirming safety requires appropriate testing, not an inference from the fact that a lot has been cleaned.',
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
    { type: 'commodity-grade', slug: 'usda-corn-grades' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Dockage determination procedure and its deduction from delivered weight in US grain standards',
    },
    {
      sourceId: 'fao',
      citedFor:
        'General principles of grain cleaning and separation of non-grain material after harvest',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'UK grain assurance and cleaning guidance distinguishing removable trash from grade factors',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Screenings and secondary grain fractions as a route by which contaminants can concentrate',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Dockage is a formally defined, procedurally determined factor in several national grain standards; its exact definition, apparatus, and treatment differ by country and are not universal.',
  limitations: [
    'Dockage is meaningful only in reference to the specific cleaning device and procedure prescribed by the applicable standard; figures obtained by other means are not comparable.',
    'Dockage is not interchangeable with foreign material; the two are determined differently and have different commercial consequences.',
    'A dockage figure says nothing about food or feed safety; contamination and mycotoxin status must be assessed separately.',
    'Definitions and treatment of dockage vary between national grading systems, so a figure from one jurisdiction is not automatically portable to another.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Dockage: A Weight Deduction, Not a Grade Score',
    description:
      'What dockage is, how it is determined by a prescribed cleaning device, why it is deducted from delivered weight, and how it differs from foreign material.',
    keywords: [
      'dockage',
      'grain dockage',
      'foreign material',
      'grain cleaning',
      'grain grading',
      'screenings',
    ],
  },
  structuredData: { article: true },
};
