import type { QualityAttributeContent } from '@/types/content';

export const sugarAcidRatio: QualityAttributeContent = {
  id: 'quality-attribute-sugar-acid-ratio',
  slug: 'sugar-acid-ratio',
  contentType: 'quality-attribute',
  title: 'Sugar-Acid Ratio',
  alternativeNames: [
    'Brix-acid ratio',
    'Sugar-to-acid ratio',
    'Maturity ratio',
  ],
  category: 'Quality attribute',
  subcategory: 'Fresh produce',
  attributeClass: 'composite',
  qualityDomain: 'quality-measurement',
  notAnIndicatorOf: [
    "Not a flavour verdict — aroma volatiles, texture, and juiciness are not part of the ratio at all, so an aromatic fruit's contribution to overall eating quality is largely invisible to a sugar-acid ratio, however favourable that ratio looks.",
    'Not a measure of either component — the same ratio can arise from a high-sugar, high-acid fruit and from a low-sugar, low-acid fruit, and the two taste nothing alike. This ambiguity is inherent to any ratio calculation and is the central caution attached to this attribute: the ratio alone cannot tell you which of those two fruit you are looking at.',
    'Not comparable across commodities, or across the different acid conventions used to express titratable acidity — a ratio computed against acidity expressed as citric acid is not on the same footing as one computed against acidity expressed as malic acid (cross-reference titratable-acidity).',
    'Not a safety or storability measure — the ratio speaks to flavour balance at the moment of measurement, not to how safely or how long a lot can be stored.',
  ],
  measurementBasis:
    'Soluble solids content divided by titratable acidity, both measured on the same juice sample',
  typicalUnits: ['Ratio (dimensionless)'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-lemons' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'wine-grapes' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
  ],
  summary:
    'The sugar-acid ratio is a computed attribute, not a measured one: soluble solids content divided by titratable acidity, each determined separately on the same juice sample. It tracks the flavour balance consumers actually respond to better than either component alone and underpins citrus maturity regulation in several jurisdictions, but as a ratio of two proxies it inherits every limitation of both, and it cannot distinguish a high-sugar/high-acid fruit from a low-sugar/low-acid one that produces the same number.',
  introduction: [
    {
      type: 'paragraph',
      text: "The sugar-acid ratio is not measured directly by any instrument; it is calculated by dividing a fruit's soluble solids content by its titratable acidity, with both quantities determined separately on juice from the same sample. Because it is a computed quantity rather than a direct measurement, it has no `measuredBy` method of its own — it exists only as the arithmetic combination of two attributes that are each measured independently, and it should be read as such.",
    },
    {
      type: 'paragraph',
      text: 'The ratio is used because flavour balance — how sweet a fruit tastes relative to how sour it is — correlates better with the relationship between sugars and acids than with either quantity alone, and it has become the basis for maturity regulation for citrus in a number of jurisdictions precisely because it captures more of what a consumer actually perceives than a soluble solids or acidity figure taken in isolation. That practical usefulness comes with an important structural limitation: because the ratio is built from two proxy measurements, it compounds the uncertainty and limitations of both rather than cancelling them out.',
    },
  ],
  keyFacts: [
    {
      label: 'How it is obtained',
      value:
        'Computed as soluble solids content divided by titratable acidity — not directly measured',
    },
    {
      label: 'Why it is used',
      value:
        'Tracks flavour balance more closely than either soluble solids content or acidity alone',
    },
    {
      label: 'Regulatory role',
      value: 'Basis of citrus maturity regulation in several jurisdictions',
    },
    {
      label: 'Central ambiguity',
      value:
        'The same ratio can arise from very different sugar and acid combinations that taste nothing alike',
    },
    {
      label: 'Inherits component limitations',
      value:
        'Every limitation of soluble solids content and of titratable acidity carries into the ratio',
    },
    {
      label: 'Acid-convention sensitivity',
      value:
        'Depends on which acid the titratable-acidity component was expressed as',
    },
    {
      label: 'Where minimums are set',
      value:
        'The applicable citrus maturity regulation, marketing standard, or contract, not a universal figure',
    },
  ],
  sections: [
    {
      id: 'a-derived-not-measured-attribute',
      heading: 'A derived attribute, not a measured one',
      body: [
        {
          type: 'paragraph',
          text: 'Unlike most quality attributes, the sugar-acid ratio has no instrument or method that observes it directly. It is arithmetic: soluble solids content, obtained by refractometer or near-infrared instrument, divided by titratable acidity, obtained by titration, using juice from the same sample so the two figures describe the same material. Because both inputs are themselves proxy measurements — soluble solids content is a refractive-index proxy for dissolved solids, and titratable acidity is a total-acid figure expressed by a chosen convention — the ratio does not cancel their individual limitations. Dividing two proxies compounds the error each one carries rather than eliminating it, which is worth stating plainly because a computed ratio can look more precise than either component alone while actually being less certain.',
        },
      ],
    },
    {
      id: 'why-the-ratio-is-used',
      heading: 'Why the ratio is used despite its limits',
      body: [
        {
          type: 'paragraph',
          text: 'Consumers respond to the balance of sweet and sour, not to either sensation alone, and the sugar-acid ratio is a reasonable numeric stand-in for that balance in a way that neither soluble solids content nor titratable acidity achieves by itself. This practical usefulness is why the ratio has become the basis of citrus maturity regulation in a number of jurisdictions: regulators use it as a proxy for whether fruit has developed acceptable flavour balance for harvest and sale, rather than relying on a soluble solids or acidity figure alone.',
        },
        {
          type: 'paragraph',
          text: 'The ratio also carries genuine value in variety and orchard-management decisions, where tracking how the ratio develops over the growing season gives growers a sense of how flavour balance is progressing toward harvest, complementing rather than replacing direct soluble solids and acidity monitoring.',
        },
      ],
    },
    {
      id: 'the-central-ambiguity',
      heading: 'The central ambiguity: a ratio hides its components',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title: 'Two very different fruit can share one ratio',
          text: 'A high-soluble-solids, high-acidity fruit and a low-soluble-solids, low-acidity fruit can produce an identical sugar-acid ratio, yet they do not taste alike — the first typically reads as more intensely flavoured and the second as blander, even at the same computed ratio. This ambiguity is inherent to any ratio: dividing two numbers destroys the information about their individual magnitudes. A sugar-acid ratio should never be read as though it told you the intensity of either sweetness or sourness, only their relative balance, and even that reading is incomplete without knowing the underlying soluble solids and acidity figures.',
        },
        {
          type: 'paragraph',
          text: 'This is the reason a sugar-acid ratio is best reported alongside, not instead of, its two component figures: the ratio communicates balance, the components communicate intensity, and neither substitutes for the other.',
        },
      ],
    },
    {
      id: 'comparability-limits',
      heading: 'Comparability across commodities and conventions',
      body: [
        {
          type: 'list',
          items: [
            'The ratio is not comparable across different commodities, which have different characteristic soluble solids and acidity ranges and different flavour expectations.',
            'The ratio is not comparable across the different acid conventions used to express titratable acidity; a ratio built on acidity expressed as citric acid is not on the same numeric footing as one built on acidity expressed as malic acid.',
            'The ratio inherits the temperature-dependence, within-fruit sampling variation, and instrument-calibration sensitivities of both its soluble solids and titratable acidity inputs.',
            'The ratio says nothing about aroma, texture, or juiciness, which contribute substantially to how a fruit is actually experienced.',
          ],
        },
      ],
    },
  ],
  connections: [{ type: 'post-harvest', slug: 'fruit-ripening' }],
  relatedTopics: [{ type: 'post-harvest', slug: 'sorting-and-grading' }],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Sugar-acid ratio as a basis for citrus maturity and marketing standards',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest quality principles covering composite ripeness and flavour-balance indices',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'Regulatory use of sugar-acid ratio in citrus maturity requirements',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Interpretation of sugar-acid ratio alongside soluble solids and acidity in fresh produce quality',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The calculation is universal; minimum sugar-acid ratio requirements used in citrus maturity regulation and marketing standards vary by commodity, cultivar, and jurisdiction.',
  limitations: [
    'The sugar-acid ratio is computed, not directly measured, and inherits every limitation of its two components — soluble solids content and titratable acidity — without cancelling them.',
    'Two fruit with very different sugar and acid levels can produce an identical ratio and taste noticeably different; the ratio alone cannot distinguish this.',
    'The ratio is not comparable across commodities or across the different acid conventions used to express titratable acidity.',
    'The ratio omits aroma, texture, and juiciness, which materially affect eating quality but are not captured by any sugar-to-acid calculation.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sugar-Acid Ratio: A Computed Flavour-Balance Index',
    description:
      'The sugar-acid ratio divides soluble solids by titratable acidity to track flavour balance, but the same ratio can hide very different fruit.',
    keywords: [
      'sugar acid ratio',
      'brix acid ratio',
      'citrus maturity index',
      'flavour balance fruit',
      'post-harvest quality',
    ],
  },
  structuredData: { article: true },
};
