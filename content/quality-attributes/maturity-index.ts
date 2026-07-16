import type { QualityAttributeContent } from '@/types/content';

export const maturityIndex: QualityAttributeContent = {
  id: 'quality-attribute-maturity-index',
  slug: 'maturity-index',
  contentType: 'quality-attribute',
  title: 'Maturity Index',
  alternativeNames: ['Harvest maturity index', 'Maturity standard'],
  category: 'Quality attribute',
  subcategory: 'Fresh produce',
  attributeClass: 'composite',
  qualityDomain: 'quality-measurement',
  notAnIndicatorOf: [
    'A statement of ripeness or current eating quality: a mature fruit at harvest is very often unripe, sometimes hard, and the index does not describe that separate stage.',
    'A guarantee of eating quality: an index selects fruit capable of becoming good — whether it actually does depends on handling, temperature, and time after harvest, none of which the index measures.',
    'A value transferable across cultivars, districts, or seasons: an index is calibrated locally, and the same numeric index can correspond to a different physiological stage in a different orchard or a different year.',
    'A grade: maturity determines whether a lot is fit to pick and ship, which is a separate question from the commercial grade it is later assigned.',
  ],
  typicalUnits: ['Index value (dimensionless)'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
  ],
  summary:
    'A maturity index is a commodity-specific standard used to decide whether produce has reached the stage at which it can be harvested and still complete its development to acceptable eating quality. It is computed from separately measured component attributes, and it is not the same question as ripeness.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A maturity index exists to answer one narrow question: has this lot reached the stage at which it can be detached from the plant and still go on to complete its development to acceptable eating quality? That is a different question from ripeness, which asks whether the commodity is at its eating stage right now. Harvest maturity is a threshold for picking; ripeness is a threshold for eating. Conflating the two is the single most consequential error in fresh-produce handling, because it governs a decision — when to pick — that cannot be undone once the commodity has left the plant.',
    },
    {
      type: 'paragraph',
      text: 'A maturity index is a composite: no single instrument reads it directly. It is built from one or more component attributes that are each measured on their own — firmness, soluble solids content, colour, dry matter content, and, for some commodities, a starch-conversion pattern — combined according to a rule set by a regional maturity guide, a marketing standard, or a maturity regulation. Because the underlying physiology differs by commodity, the index itself is necessarily commodity-specific, and the single distinction that determines how it is used is whether the commodity is climacteric or non-climacteric.',
    },
  ],
  keyFacts: [
    {
      label: 'What it answers',
      value:
        'Whether a lot has reached the stage at which it can be detached and still complete development to acceptable eating quality',
      note: 'Not whether it is ripe or ready to eat now',
    },
    {
      label: 'Composite property',
      value:
        'Computed from several separately measured component attributes rather than read from a single instrument',
      note: 'See Firmness, Soluble Solids Content, Colour, and Dry Matter Content',
    },
    {
      label: 'Climacteric commodities',
      value:
        'Apple, banana, mango, tomato, avocado, and pear can be harvested mature-but-unripe and ripen after detachment',
      note: 'Maturity and ripeness are separable — see Fruit Ripening',
    },
    {
      label: 'Non-climacteric commodities',
      value:
        'Citrus, grape, strawberry, and pineapple do not ripen meaningfully after harvest',
      note: 'Eating quality is essentially fixed at picking',
    },
    {
      label: 'Not transferable',
      value:
        'An index is calibrated to a local cultivar, district, and season, and does not carry over unchanged elsewhere',
    },
    {
      label: 'Where the applicable index is set',
      value:
        'Regional maturity guidance, marketing standards, or a maturity regulation set the index used for a given commodity and district',
    },
    {
      label: 'Not a guarantee',
      value:
        'An index selects fruit capable of reaching good eating quality; handling, temperature, and time after harvest decide whether it actually does',
    },
  ],
  sections: [
    {
      id: 'harvest-maturity-is-not-ripeness',
      heading: 'Harvest maturity is not ripeness',
      body: [
        {
          type: 'paragraph',
          text: 'Harvest maturity and ripeness answer different questions, and the distinction determines how an entire supply chain is run. Harvest maturity is the stage at which a commodity can be removed from the plant and still be relied upon to develop acceptable eating quality afterward, whether at the pack house, in transit, or on the shelf. Ripeness is the eating stage itself: soft, sweet, coloured, and aromatic in whatever combination defines that commodity’s edible peak. A fruit can be mature without being ripe, and picking it at the right maturity is what allows it to be handled, shipped, and sold before it needs to be ripe.',
        },
        {
          type: 'callout',
          tone: 'note',
          title:
            'Maturity is a picking decision; ripeness is an eating decision',
          text: 'Every downstream operation — grading, packing, transport, storage — is built around commodities that are mature but not yet ripe. Treating a maturity index as a ripeness reading misreads what the number was designed to do.',
        },
      ],
    },
    {
      id: 'climacteric-and-non-climacteric',
      heading: 'Climacteric and non-climacteric commodities',
      body: [
        {
          type: 'paragraph',
          text: 'Whether maturity and ripeness are separable depends on whether the commodity is climacteric. Climacteric fruit — apple, banana, mango, tomato, avocado, and pear among them — undergo a distinct respiratory rise after harvest, driven by autocatalytic ethylene, that allows them to continue ripening once detached. That makes it possible to harvest them mature but firm and unripe, ship them hard, and let them ripen closer to the point of sale. See Respiration Rate and Ethylene Production for the physiology, and Fruit Ripening and Ethylene Management for how it is managed in practice.',
        },
        {
          type: 'paragraph',
          text: 'Non-climacteric fruit — citrus, grape, strawberry, and pineapple among them — do not undergo that post-harvest rise and do not ripen meaningfully once removed from the plant. Their eating quality is essentially fixed at the moment of picking. A lot harvested too early or too late cannot be corrected afterward: there is no window in transit or storage during which the missing sweetness, colour, or acidity balance will develop.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Shipping decision versus final verdict',
          text: 'For climacteric commodities, a maturity index governs a shipping decision — the fruit still has room to ripen after it is made. For non-climacteric commodities, the same kind of index is close to a final verdict on eating quality, because there is no meaningful post-harvest ripening to fall back on.',
        },
      ],
    },
    {
      id: 'how-indices-are-built',
      heading: 'How a maturity index is built',
      body: [
        {
          type: 'paragraph',
          text: 'A maturity index is computed, not measured directly, because no single instrument reads "maturity." It is assembled from component attributes that are each measured by their own method: firmness by penetrometer, soluble solids content by refractometer, colour by colorimeter, and dry matter content by oven drying or near-infrared spectroscopy. For some commodities, an additional signal comes from cutting a cross-section and reading the pattern left by an iodine stain applied to the starch remaining in the flesh, a pattern that shifts as starch converts to sugar during maturation.',
        },
        {
          type: 'list',
          items: [
            'Firmness — measured by penetrometer',
            'Soluble solids content — measured by refractometer',
            'Colour — measured by colorimeter',
            'Dry matter content — measured by oven drying or near-infrared spectroscopy',
            'Starch-conversion pattern — read visually from an iodine-stained cross-section, for commodities where this signal applies',
          ],
        },
      ],
    },
    {
      id: 'why-indices-are-commodity-specific',
      heading: 'Why indices are commodity-specific',
      body: [
        {
          type: 'paragraph',
          text: 'Because no single physiological signal serves every commodity equally well, the basis of a maturity index varies widely: days from full bloom, accumulated heat units, a starch-conversion pattern, dry matter content, a combination of firmness, soluble solids, and titratable acidity, or simply the calendar for some crops with a well-established harvest window. None of these bases is universal, and none is stated here as a value — the regional maturity guidance, marketing standard, or maturity regulation applicable to a given commodity, cultivar, and district sets the specific index and the value that counts as ready.',
        },
      ],
    },
    {
      id: 'what-a-maturity-index-does-not-tell-you',
      heading: 'What a maturity index does not tell you',
      body: [
        {
          type: 'paragraph',
          text: 'A maturity index is frequently, and incorrectly, read as a statement about eating quality rather than about pickability.',
        },
        {
          type: 'list',
          items: [
            'It is not ripeness or current eating quality — a mature commodity, especially a climacteric one, is very often still unripe at harvest.',
            'It is not a guarantee of eating quality — it selects fruit capable of becoming good; handling, temperature, and time after harvest decide whether it actually does.',
            'It is not transferable across cultivars, districts, or seasons — an index is calibrated locally, and the same numeric value can mean a different physiological stage elsewhere.',
            'It is not a grade — maturity is a fitness-to-pick decision, separate from the commercial grade a lot is later assigned.',
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'firmness' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
    { type: 'quality-attribute', slug: 'colour' },
    { type: 'quality-attribute', slug: 'dry-matter-content' },
    { type: 'quality-attribute', slug: 'respiration-rate' },
    { type: 'quality-attribute', slug: 'ethylene-production' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'ethylene-management' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Harvest maturity indices and climacteric versus non-climacteric ripening physiology',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Commodity-specific maturity standards and harvest timing guidance',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Maturity assessment methods and post-harvest handling guidance',
    },
    {
      sourceId: 'fao',
      citedFor: 'Maturity indices and post-harvest quality principles',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. What counts as harvest maturity, and which index is used to assess it, is set by regional maturity guidance, marketing standards, or maturity regulations that vary by commodity, cultivar, district, and season.',
  limitations: [
    'This entry states no index values, days-from-bloom counts, or heat-unit thresholds. The applicable regional maturity guidance, marketing standard, or maturity regulation sets them for a given commodity, cultivar, and district.',
    'A maturity index is calibrated locally; the same numeric index value does not necessarily indicate the same physiological stage in a different orchard, cultivar, or season.',
    'Meeting a maturity index is not a guarantee of eating quality — handling, temperature, and time after harvest all still determine whether mature fruit actually reaches acceptable quality.',
    'For non-climacteric commodities, a poorly timed harvest cannot be corrected afterward, because these commodities do not ripen meaningfully once detached from the plant.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Maturity Index: Harvest Stage vs Ripeness',
    description:
      'A maturity index shows when produce can be picked, not how ripe it is. Learn why climacteric and non-climacteric commodities are judged so differently.',
    keywords: [
      'maturity index',
      'harvest maturity',
      'climacteric fruit',
      'non-climacteric fruit',
      'fruit ripening',
    ],
  },
  structuredData: { article: true },
};
