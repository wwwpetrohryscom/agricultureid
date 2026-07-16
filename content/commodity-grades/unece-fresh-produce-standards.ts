import type { CommodityGradeContent } from '@/types/content';

export const uneceFreshProduceStandards: CommodityGradeContent = {
  id: 'commodity-grade-unece-fresh-produce-standards',
  slug: 'unece-fresh-produce-standards',
  contentType: 'commodity-grade',
  title: 'UNECE Standards for Fresh Fruit and Vegetables',
  alternativeNames: [
    'UNECE agricultural quality standards',
    'UNECE marketing standards',
    'UNECE standard for apples',
  ],
  category: 'Commodity grading standard',
  subcategory: 'Fresh produce',
  standardBody:
    'United Nations Economic Commission for Europe — Working Party on Agricultural Quality Standards (WP.7)',
  standardIdentifier:
    'UNECE Standards for Fresh Fruit and Vegetables, including the UNECE Standard for Apples',
  jurisdiction:
    'International — developed in the UNECE region and applied wherever governments or trading parties adopt them',
  edition:
    'As maintained and periodically revised by the UNECE Working Party on Agricultural Quality Standards; consult the current official text for the edition in force.',
  legalStatus: 'voluntary',
  gradedCommodity: { type: 'commodity', slug: 'fresh-apples' },
  gradeNames: ['Extra Class', 'Class I', 'Class II'],
  summary:
    'The UNECE standards for fresh fruit and vegetables set a common international structure for describing produce quality: a minimum quality requirement all produce must meet, three classes above it, plus rules on sizing, tolerances, presentation, and marking. They are voluntary unless a jurisdiction adopts them into law.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The UNECE standards for fresh fruit and vegetables are developed by the Working Party on Agricultural Quality Standards, a body under the United Nations Economic Commission for Europe. Each covers one produce type — apples, tomatoes, table grapes, and many others — and each follows the same architecture, which is what makes the family useful: learn the structure once and it reads across the whole set. The standard for apples is the reference example on this page.',
    },
    {
      type: 'paragraph',
      text: 'These are marketing standards, not food-safety law. They exist so that a buyer and a seller in different countries can describe a consignment in the same terms and agree on what was promised. Their legal weight comes from adoption: they are voluntary in themselves, and they bite only where a government has written them into national or regional law, or where trading parties have written them into a contract.',
    },
  ],
  keyFacts: [
    {
      label: 'Issuing body',
      value: 'UNECE Working Party on Agricultural Quality Standards (WP.7)',
    },
    {
      label: 'Scope',
      value:
        'International — one standard per produce type, sharing a common structure',
    },
    {
      label: 'Legal status',
      value:
        'Voluntary unless adopted into national or regional law, or into contract',
    },
    { label: 'Reference commodity here', value: 'Fresh apples' },
    {
      label: 'Classes',
      value:
        'Extra Class, Class I, and Class II, above a minimum quality requirement',
    },
    {
      label: 'Also covers',
      value: 'Sizing, tolerances, uniformity, packaging, and marking',
    },
    {
      label: 'Availability',
      value:
        'Published openly by UNECE — the official text is freely accessible',
    },
  ],
  sections: [
    {
      id: 'the-common-architecture',
      heading: 'The common architecture',
      body: [
        {
          type: 'paragraph',
          text: 'Every UNECE fresh produce standard is laid out in the same sequence of parts, and understanding that sequence is most of what a reader needs. It defines the produce covered; sets provisions concerning quality, beginning with a minimum requirement and then the classes; sets provisions concerning sizing; sets tolerances for quality and for size; sets provisions concerning uniformity and packaging; and sets provisions concerning marking.',
        },
        {
          type: 'list',
          items: [
            'Definition of produce — what the standard applies to',
            'Provisions concerning quality — minimum requirements, then Extra Class, Class I, Class II',
            'Provisions concerning sizing — how size is expressed and what uniformity is required',
            'Provisions concerning tolerances — for quality and for size, per class',
            'Provisions concerning presentation — uniformity of the package and how produce is packed',
            'Provisions concerning marking — identification, origin, class, and size',
          ],
        },
        {
          type: 'paragraph',
          text: 'The minimum requirement is the floor. Produce that does not meet it is outside the standard entirely rather than sitting in a lower class — the classes describe gradations above the floor, not a scale that reaches down to anything at all. Minimum requirements typically cover things like being intact, sound, clean, and free from foreign smell or taste, and the produce must be in a condition to withstand transport and handling and arrive in satisfactory condition, which is a genuinely commercial criterion: it looks forward to the consignment’s journey rather than only at the moment of inspection.',
        },
      ],
    },
    {
      id: 'the-three-classes',
      heading: 'The three classes',
      body: [
        {
          type: 'paragraph',
          text: 'Extra Class describes produce of superior quality, with the characteristic shape and colour of the variety and effectively free from defects. Class I describes good quality with slight defects permitted, provided they do not affect the general appearance, keeping quality, or presentation of the package. Class II is a broader category that admits produce with defects that would exclude it from the higher classes, provided it still meets the minimum requirements and remains suitable for its intended use.',
        },
        {
          type: 'paragraph',
          text: 'The classes are not judgements about whether the produce is good to eat. Class II apples are entirely ordinary apples; the class describes appearance and defect load against a marketing specification, and much Class II produce differs from Class I in ways a consumer would struggle to notice. This is worth being plain about, since the class system is regularly misread as a quality-of-food ranking rather than the marketing description it is.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Classes describe defects, not edibility',
          text: 'A lower class means more or larger permitted defects against the specification. It is not a statement that the produce is less wholesome, less safe, or less nutritious.',
        },
      ],
    },
    {
      id: 'tolerances-and-sizing',
      heading: 'Tolerances and sizing',
      body: [
        {
          type: 'paragraph',
          text: 'Tolerances are the feature that makes these standards workable in the real world. Produce is biological and packed at speed, so no consignment is perfect: the standards therefore permit a specified proportion of produce in a package to fall short of the class it is marked as, and a further, narrower allowance for produce falling below the class beneath. A consignment is compliant if it is within tolerance — not if every fruit is flawless.',
        },
        {
          type: 'paragraph',
          text: 'Sizing is a separate provision from quality, expressed by diameter or by weight depending on the produce, and paired with uniformity rules limiting how much sizes may vary within a package. For apples the standard also addresses matters specific to the fruit, including russeting, which is treated by variety since it is characteristic of some and a defect in others — a good example of how these standards accommodate biological reality rather than imposing a single rule.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Values are not reproduced here',
          text: 'Tolerance percentages, size limits, and the detailed defect provisions for each class are set in the official UNECE text. The standards are published openly and are freely accessible — this page summarises their structure and directs readers to the source rather than restating its numbers.',
        },
      ],
    },
    {
      id: 'adoption-and-relationship-to-law',
      heading: 'Adoption, and the relationship to law',
      body: [
        {
          type: 'paragraph',
          text: 'A UNECE standard has no force of its own. It becomes binding where a jurisdiction adopts it — most prominently in the European Union, whose marketing standards for fresh produce are aligned with UNECE texts, so what is voluntary at the UNECE becomes a legal requirement in the EU market. Elsewhere, adoption may be partial, indirect through contract, or absent. The same standard can therefore be law in one market and a reference document in another.',
        },
        {
          type: 'paragraph',
          text: 'This means the practical question is never only "what does the UNECE standard say?" but "which text applies to this consignment, in which market, in which edition?" Standards are revised, adopting jurisdictions may lag or diverge, and a contract may specify a class while modifying its terms. Conformity assessment is carried out by national inspection bodies in the adopting jurisdictions.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Not an inspection authority',
          text: 'AgricultureID does not inspect, class, or certify fresh produce and cannot determine the class of any consignment. Conformity is assessed by the national inspection bodies of the jurisdictions that have adopted the standard.',
        },
      ],
    },
  ],
  gradeCriteria: [
    {
      attribute: 'Minimum quality requirements',
      limitType: 'descriptive',
      basis: 'Applies to all classes as a floor',
      note: 'Covers intactness, soundness, cleanliness, freedom from foreign smell or taste, and fitness to withstand transport; specified in the official standard.',
    },
    {
      attribute: 'Class (Extra, I, II)',
      limitType: 'descriptive',
      basis: 'Permitted defects in shape, colour, skin, and development',
      note: 'The defect provisions attaching to each class are set in the official standard.',
    },
    {
      attribute: 'Sizing',
      limitType: 'range',
      basis: 'Diameter or weight, depending on the produce',
      note: 'Size limits and uniformity requirements are set in the official standard.',
    },
    {
      attribute: 'Quality tolerances',
      limitType: 'maximum',
      basis:
        'Proportion of produce in a package permitted to fall short of the marked class',
      note: 'Tolerance percentages are set in the official standard.',
    },
    {
      attribute: 'Size tolerances',
      limitType: 'maximum',
      note: 'Tolerance percentages are set in the official standard.',
    },
    {
      attribute: 'Uniformity and presentation',
      limitType: 'descriptive',
      note: 'Requirements on package contents, packing, and presentation are set in the official standard.',
    },
    {
      attribute: 'Marking',
      limitType: 'descriptive',
      note: 'Identification, nature of produce, origin, class, and size marking requirements are set in the official standard.',
    },
  ],
  measurementBasis:
    'Conformity is assessed on produce in the package as presented, against the class marked on it, with specified tolerances applied to the package or lot rather than to each individual fruit.',
  defectsConsidered: [
    'Defects of shape',
    'Defects of colour and development',
    'Skin defects and blemishes',
    'Russeting, treated by variety',
    'Bruising and handling damage',
    'Foreign smell or taste',
  ],
  samplingContext:
    'Conformity checks are carried out on consignments by national inspection bodies in adopting jurisdictions, applying the standard’s tolerances at package or lot level.',
  reproductionLimitations: [
    'This page summarises the structure of the UNECE standards for fresh fruit and vegetables; it does not reproduce any standard, its tolerances, its size limits, or its class defect provisions.',
    'UNECE standards are published openly and freely accessible — consult the official UNECE text rather than relying on this summary.',
    'The standards are revised over time, and adopting jurisdictions may apply a different edition; confirm which text and edition apply to a given consignment.',
    'Class names are listed for reference only; AgricultureID is not an inspection or certification body and makes no determination about any consignment.',
    'Apples are used here as the reference example; each produce type has its own standard with its own specific provisions.',
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  relatedTopics: [
    { type: 'commodity-grade', slug: 'codex-standards-overview' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'International agricultural quality standards and their role in produce trade',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'EU marketing standards for fresh produce and their alignment with UNECE texts',
    },
    { sourceId: 'faostat', citedFor: 'Fresh produce trade context' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'International. Developed under UNECE and applied wherever adopted into law or contract; adoption, edition, and enforcement differ by jurisdiction.',
  limitations: [
    'The standards are voluntary in themselves; whether they bind depends entirely on adoption into law or into contract in the relevant market.',
    'Structure and classes are summarised without tolerances, size limits, or class defect provisions, which are set in the official text.',
    'Apples serve as the reference example; provisions differ between produce types even though the architecture is shared.',
    'A class describes appearance and defect load against a marketing specification — not wholesomeness, safety, or nutritional value.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'UNECE Standards for Fresh Fruit and Vegetables',
    description:
      'How UNECE fresh produce standards work: minimum quality, Extra Class, Class I and II, sizing, tolerances, and why they bind only where adopted into law.',
    keywords: [
      'UNECE standards',
      'fresh produce marketing standards',
      'Extra Class',
      'Class I apples',
      'produce tolerances',
    ],
  },
  structuredData: { article: true },
};
