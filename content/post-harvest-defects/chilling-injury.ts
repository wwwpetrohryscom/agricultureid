import type { PostHarvestDefectContent } from '@/types/content';

export const chillingInjury: PostHarvestDefectContent = {
  id: 'post-harvest-defect-chilling-injury',
  slug: 'chilling-injury',
  contentType: 'post-harvest-defect',
  title: 'Chilling Injury',
  defectClass: 'physiological',
  alternativeNames: ['Low-temperature injury', 'Cold injury (non-freezing)'],
  category: 'Post-harvest defect',
  subcategory: 'Physiological disorder',
  summary:
    'Chilling injury is physiological damage that develops in chilling-sensitive commodities held at temperatures above their freezing point but below the temperature they tolerate — a distinct mechanism from freezing injury, and one whose symptoms usually appear only after the produce is returned to warmer conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chilling injury is damage caused by cold that is not cold enough to freeze. Commodities of tropical and subtropical origin — banana, avocado, mango, tomato, cucumber, sweet pepper, pineapple, sweet potato among them — evolved without exposure to low temperatures and are progressively disordered by them. The affected tissue is not frozen: no ice forms, and the produce may look entirely sound while it is in the cold room. The injury accumulates as a disturbance of membranes and metabolism, and its severity depends on how cold the produce was held and for how long, in combination.',
    },
    {
      type: 'paragraph',
      text: "The practical difficulty is that chilling injury is usually invisible at the temperature that caused it. Symptoms characteristically express only after the produce is moved back to ambient temperature — in transit, at the depot, on the retail shelf, or in the consumer's kitchen. A lot can therefore pass an inspection at the cold-store door and fail conspicuously days later, with the damage already irreversible and the responsible temperature excursion long past. This latency is the single most important thing to understand about the disorder, because it is why chilling injury is so often discovered too late to act on.",
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Physiological disorder of chilling-sensitive commodities',
    },
    {
      label: 'Temperature relationship',
      value: 'Occurs ABOVE the freezing point of the tissue — no ice forms',
      note: 'A different mechanism from freezing injury, which is ice-crystal damage',
    },
    {
      label: 'Susceptible commodities',
      value:
        'Chiefly tropical and subtropical produce: banana, avocado, mango, tomato, cucumber, sweet pepper, pineapple, sweet potato',
      note: 'Apples and pears are not chilling-sensitive in this sense and are routinely held near their freezing point',
    },
    {
      label: 'When symptoms appear',
      value:
        'Typically only after return to warm temperature, not during cold holding',
    },
    {
      label: 'Common symptoms',
      value:
        'Surface pitting, water-soaked lesions, uneven or failed ripening, internal browning, dull colour, loss of aroma, and unusually rapid decay',
    },
    {
      label: 'Dose relationship',
      value:
        'Severity reflects both how far below the tolerated temperature and how long — a brief excursion and a long mild one are not equivalent',
    },
    {
      label: 'Where the tolerance is set',
      value:
        'The lowest safe holding temperature is commodity- and often cultivar-specific and is set by sourced post-harvest guidance',
      note: 'See FAO, USDA-ARS, and UC-IPM post-harvest handling references for the applicable commodity',
    },
  ],
  sections: [
    {
      id: 'mechanism',
      heading: 'What chilling injury is, and what it is not',
      body: [
        {
          type: 'paragraph',
          text: 'Chilling injury and freezing injury are frequently spoken of together and are not the same event. Freezing injury is a physical process: water in the tissue crystallises, ice ruptures cell structure, and on thawing the tissue collapses into a translucent, water-soaked, leaking state. Chilling injury involves no ice at all. It is a progressive physiological disturbance — membrane function, respiration, and ripening metabolism are disrupted — occurring at temperatures well above freezing in commodities that cannot tolerate them.',
        },
        {
          type: 'paragraph',
          text: 'The distinction matters operationally because the two have different remedies. Freezing injury is prevented by keeping the produce above its freezing point; chilling injury is prevented by keeping chilling-sensitive produce above a much higher threshold that varies by commodity. A cold room running correctly for apples can be actively injuring bananas in the same building. Chilling sensitivity is a property of the commodity, not a fault of the equipment, and the temperature that is good practice for one commodity is a defect-generating condition for another.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Symptoms are delayed by design of the mechanism',
          text: 'Chilling-injured produce commonly looks acceptable while cold and expresses symptoms only on warming. Absence of symptoms at the cold-store door is not evidence that the lot was held correctly, and a lot that looks sound on despatch can arrive visibly damaged.',
        },
      ],
    },
    {
      id: 'symptoms',
      heading: 'How it presents',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Surface pitting',
              description:
                'Sunken depressions in the skin where groups of cells have collapsed; common in cucumber, sweet pepper, and citrus.',
            },
            {
              term: 'Failure to ripen normally',
              description:
                'Chilled fruit may soften unevenly, fail to develop colour or aroma, or ripen to a poor eating quality; banana, mango, avocado, and tomato are characteristic.',
            },
            {
              term: 'Internal discolouration',
              description:
                'Browning or greying of flesh or vascular tissue that is invisible from outside and found only on cutting.',
            },
            {
              term: 'Water-soaked lesions',
              description:
                'Translucent, sodden areas of tissue — a presentation shared with freezing injury and with several rots, which is why it is not diagnostic on its own.',
            },
            {
              term: 'Secondary decay',
              description:
                'Chilling-weakened tissue is readily colonised by pathogens, so the visible endpoint is often a rot rather than the underlying disorder that permitted it.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: "Because the endpoint is so often decay, chilling injury is systematically under-recorded: the lot is written off as a rot problem and the temperature history that predisposed it is never examined. Where a commodity shows disproportionate decay after a normal-looking cold chain, the holding temperature relative to the commodity's own tolerance is worth reviewing.",
        },
      ],
    },
    {
      id: 'conditions',
      heading: 'Conditions that produce it',
      body: [
        {
          type: 'list',
          items: [
            'Holding a chilling-sensitive commodity at a temperature below its tolerance — most often because a store, vehicle, or display is set for a generic "cold" target rather than the commodity\'s own.',
            'Mixed loads in which commodities with incompatible temperature requirements share a single controlled space.',
            'Cumulative exposure across several links of the chain, where no single leg is clearly at fault but the total dose is injurious.',
            'Cold spots within an otherwise correctly set store — near evaporator discharge, against walls, or in poorly stacked pallets.',
            'Pre-existing field or maturity condition: immature fruit is generally more sensitive than mature fruit of the same commodity.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The applicable lowest safe temperature for any given commodity — and, for some, the cultivar and maturity stage that modify it — is not a universal figure and is not given here. It is set by sourced post-harvest guidance for that commodity; consult FAO, USDA-ARS, or the relevant extension handling references before setting a store.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'There is no treatment for chilling injury once it has occurred; the damage is not reversible and the affected lot cannot be recovered. Management is entirely preventive and consists of holding each commodity within its own tolerated range through every link of the chain, which requires knowing that range per commodity rather than per cold room.',
        },
        {
          type: 'list',
          items: [
            'Set holding temperature by commodity against sourced guidance, not by what the room is capable of reaching.',
            'Segregate chilling-sensitive commodities from those that tolerate near-freezing holding rather than compromising on a single intermediate setting.',
            'Monitor and record temperature through the whole chain, including transport and display, so that a delayed symptom can be traced to the leg that caused it.',
            'Treat unexplained decay or ripening failure after cold holding as a prompt to review temperature history, not only sanitation.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'cucumbers' },
    { type: 'commodity', slug: 'sweet-peppers' },
    { type: 'commodity', slug: 'fresh-pineapples' },
    { type: 'commodity', slug: 'sweet-potatoes' },
  ],
  causedByConditions: [
    'Holding a chilling-sensitive commodity below its tolerated temperature but above its freezing point',
    'Cumulative cold exposure across multiple links of the chain, with no single leg obviously at fault',
    'Mixed loads combining commodities with incompatible temperature requirements in one controlled space',
    'Cold spots within a correctly set store, near evaporator discharge or in poorly stacked pallets',
    'Immature fruit, which is generally more sensitive than mature fruit of the same commodity',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  confusableWith: [
    'Freezing injury — a different mechanism (ice-crystal damage below the freezing point); both give water-soaked tissue, but chilling injury occurs above freezing and no ice ever forms',
    'Senescence — normal end-of-life deterioration also produces dull colour, softening, and loss of aroma, and a lot may be simply old rather than chilled',
    'Internal browning from other causes — controlled-atmosphere injury and cultivar-specific storage disorders produce similar internal discolouration',
    'Pathological rots — chilling-weakened tissue is colonised secondarily, so the visible endpoint is often a rot that masks the predisposing disorder',
    'Superficial scald — another storage disorder appearing after cold holding, but a disorder of apples and pears, which are not chilling-sensitive in this sense',
    'Ripening failure from immaturity — fruit picked too early also ripens poorly, without any cold involvement',
  ],
  diagnosticLimitations: [
    'Symptoms characteristically appear only after return to warm temperature, so appearance while the produce is cold is not evidence that it was held correctly; the injury is often confirmed only once it is too late to act.',
    'Water-soaked tissue is shared with freezing injury and with several rots, and cannot by itself distinguish a non-freezing chilling event from an actual freeze or from infection.',
    'Internal browning seen on cutting does not identify chilling as the cause: controlled-atmosphere injury, cultivar-specific storage disorders, and senescence produce overlapping internal symptoms.',
    'Because chilled tissue decays readily, the disorder is frequently recorded as a rot problem, and the temperature history that predisposed the lot is never examined.',
    'Attributing an observed injury to a particular leg of the chain requires recorded temperature history; symptoms carry no information about where or when the exposure occurred.',
    'Confirming chilling injury rather than an alternative disorder requires the commodity-specific tolerance from sourced guidance plus temperature records, and in contested cases qualified post-harvest assessment.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Chilling sensitivity and post-harvest temperature management of tropical and subtropical produce',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Chilling injury symptoms and commodity-specific storage recommendations',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Post-harvest physiological disorders of fresh produce',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Chilling injury physiology and symptom expression on warming',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Chilling sensitivity is a property of the commodity and cultivar rather than of a region, but exposure risk depends on local chain design, ambient conditions, and the mix of commodities held together.',
  limitations: [
    'This entry describes the disorder in general terms and gives no temperature thresholds; the lowest safe holding temperature is commodity-, cultivar-, and maturity-specific and must be taken from sourced post-harvest guidance.',
    'Susceptibility varies within a commodity by cultivar, growing conditions, and maturity at harvest, so guidance written for a commodity may not describe a particular lot.',
    'Symptom descriptions are indicative only; they do not confirm a cause and do not distinguish chilling injury from disorders with overlapping presentations.',
    'Chilling injury is irreversible once established; nothing described here recovers an affected lot, and the entry is not a basis for accepting or rejecting a consignment.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Chilling Injury: Cold Damage Above Freezing',
    description:
      'Chilling injury damages sensitive produce above freezing, and symptoms show only on warming. How it differs from freezing injury, and why it is found too late.',
    keywords: [
      'chilling injury',
      'chilling sensitive produce',
      'post-harvest disorder',
      'cold storage damage',
      'low temperature injury',
    ],
  },
  structuredData: { article: true },
};
