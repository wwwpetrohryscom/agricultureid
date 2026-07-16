import type { QualityAttributeContent } from '@/types/content';

export const colour: QualityAttributeContent = {
  id: 'quality-attribute-colour',
  slug: 'colour',
  contentType: 'quality-attribute',
  title: 'Colour',
  category: 'Quality attribute',
  subcategory: 'Cross-cutting',
  attributeClass: 'physical',
  qualityDomain: 'quality-measurement',
  notAnIndicatorOf: [
    'Not a maturity or ripeness verdict — the flagship caution for this attribute. Colour change and eating quality are governed by different physiological processes and are routinely decoupled by cultivar and by handling: ethylene-degreened citrus is fully coloured without being any riper than before treatment, a red-skinned apple cultivar develops its colour on a schedule largely independent of when it is picked, and many mangoes and pears ripen to full eating quality with little or no useful external colour change.',
    'Not a measure of internal condition — skin or surface colour says nothing about internal browning, breakdown, or hollowing; a well-coloured unit can be compromised inside.',
    'Not a measure of nutritional content — colour intensity is not a reliable proxy for the level of any specific nutrient, even when the same pigment class is loosely associated with a nutrient of interest.',
    'Not a defect count — colour is a continuous physical reading, not a tally of blemishes, and a uniform colour reading does not mean a unit is free of physical defects.',
  ],
  measurementBasis:
    'Under a specified illuminant and observer geometry, as defined by the measurement method used',
  typicalUnits: [
    'CIE L*a*b* coordinates',
    'Hue angle (degrees)',
    'Chroma (dimensionless)',
  ],
  appliesToCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'maize-grain' },
  ],
  measuredBy: [{ type: 'quality-measurement', slug: 'colorimeter' }],
  summary:
    'Colour, measured instrumentally, is a set of coordinates in a defined colour space read under a specified illuminant and observer. It is the attribute consumers rely on most heavily when judging produce, but colour change and eating quality are governed by different mechanisms and are frequently decoupled — colour is not a ripeness verdict.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Instrumentally, colour is expressed as coordinates in a defined colour space — most commonly the CIE L*a*b* system, or its derived hue angle and chroma — captured under a specified illuminant and a specified observer geometry. The specification is not a formality: a colour reading taken under one illuminant is not the same measurement as one taken under another, and readings produced by instruments with different measurement geometries are not directly interchangeable even when both are nominally reporting the same colour space.',
    },
    {
      type: 'paragraph',
      text: 'Colour is also, more than any other single attribute, the property that drives a consumer’s purchase decision at the point of sale — it is judged instantly, without cutting, tasting, or handling the unit, and it does so more strongly than any internally measured attribute a buyer cannot see. That commercial weight is exactly why the gap between what colour actually indicates and what buyers assume it indicates matters so much: colour change is produced by a specific set of physiological and chemical mechanisms, and those mechanisms do not always track eating quality or maturity.',
    },
  ],
  keyFacts: [
    {
      label: 'How it is expressed',
      value:
        'Coordinates in a defined colour space (CIE L*a*b*, hue angle, chroma) under a specified illuminant and observer',
    },
    {
      label: 'Why the specification matters',
      value:
        'Readings taken under different illuminants or instrument geometries are not directly interchangeable',
    },
    {
      label: 'Commercial weight',
      value:
        'Drives purchase decisions more strongly than any internally measured quality attribute',
    },
    {
      label: 'Key mechanisms',
      value:
        'Chlorophyll loss, carotenoid and anthocyanin accumulation, enzymatic browning at wounds, non-enzymatic (Maillard) browning',
    },
    {
      label: 'Flagship caution',
      value:
        'Not a ripeness verdict — colour change and eating quality are decoupled by cultivar and by handling',
    },
    {
      label: 'Not a proxy for',
      value:
        'Internal condition, nutritional content, or a count of physical defects',
    },
    {
      label: 'Sampling sensitivity',
      value:
        'Colour varies across a single unit (sun-exposed versus shaded side), so where the instrument is pointed changes the reading',
    },
  ],
  sections: [
    {
      id: 'what-colour-measures',
      heading: 'What colour measures, instrumentally',
      body: [
        {
          type: 'paragraph',
          text: 'Instrumental colour measurement reports a position in a defined colour space, most commonly CIE L*a*b*, where lightness, and the red-green and yellow-blue axes together locate a colour, or the derived hue angle and chroma, which describe the same information as an angle and a saturation. Both the illuminant used to light the sample and the geometry of the measuring instrument are part of the specification, because both change the reading obtained from an identical physical sample.',
        },
        {
          type: 'paragraph',
          text: 'This is why a colour figure is only meaningful alongside the method that produced it. A reading taken under one standard illuminant is not the same measurement as one taken under a different illuminant, and figures from instruments with different measurement geometries should not be compared as though they were equivalent.',
        },
      ],
    },
    {
      id: 'why-colour-matters',
      heading: 'Why colour matters commercially',
      body: [
        {
          type: 'paragraph',
          text: 'Colour is the attribute consumers actually use to judge fresh produce at the point of purchase, ahead of any internal quality attribute they cannot see or assess without buying the unit first. This makes colour disproportionately influential in purchase decisions relative to its actual predictive power over eating quality, and it is why colour is graded, monitored, and in some cases deliberately manipulated — through practices such as ethylene degreening of citrus — independent of what is happening to the commodity’s internal condition.',
        },
      ],
    },
    {
      id: 'mechanisms-of-colour-change',
      heading: 'Mechanisms of colour change',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Chlorophyll loss',
              description:
                'Breakdown of green chlorophyll pigment, unmasking underlying pigments as many fruit ripen.',
            },
            {
              term: 'Carotenoid accumulation',
              description:
                'Synthesis of yellow, orange, and red carotenoid pigments during ripening in many fruit.',
            },
            {
              term: 'Anthocyanin accumulation',
              description:
                'Synthesis of red, purple, and blue anthocyanin pigments, often concentrated in the skin and influenced by light exposure.',
            },
            {
              term: 'Enzymatic browning',
              description:
                'Oxidation reactions at a cut, bruise, or other wound, catalysed by enzymes released when tissue is damaged.',
            },
            {
              term: 'Non-enzymatic (Maillard) browning',
              description:
                'Chemical browning between sugars and amino compounds during drying and storage, distinct from enzymatic browning at a wound.',
            },
          ],
        },
      ],
    },
    {
      id: 'the-ripeness-misreading',
      heading: 'The ripeness misreading',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title: 'Colour and ripeness are decoupled more often than assumed',
          text: 'Colour change and eating quality are controlled by different processes, and cultivar and handling routinely decouple them. Citrus that has been ethylene-degreened is fully coloured but no riper than it was before treatment. A red-skinned apple cultivar colours on a schedule that runs largely independent of when the fruit is actually picked. Many mangoes and pears reach full eating quality with little or no useful change in external colour to signal it. Treating colour as a ripeness verdict, in any of these cases, leads directly to buying or selling decisions that misjudge the fruit.',
        },
        {
          type: 'paragraph',
          text: 'Because of this, colour should be read alongside — never in place of — attributes that more directly track ripening, and it says nothing about internal condition: a well-coloured unit can still carry internal browning or breakdown that only cutting the unit would reveal.',
        },
      ],
    },
    {
      id: 'sampling-and-heterogeneity',
      heading: 'Sampling and heterogeneity within a single unit',
      body: [
        {
          type: 'paragraph',
          text: 'Colour is rarely uniform across a single unit. The sun-exposed side of a fruit typically differs in colour from its shaded side, and colour can vary between the stem end and the blossom end, or across a kernel surface. Because of this, where the instrument is pointed changes the reading obtained from the very same unit, and a single point measurement should not be presented as though it characterises the whole unit.',
        },
        {
          type: 'paragraph',
          text: 'A colour figure reported for a lot, rather than a single unit, is only meaningful if it comes from a defined sampling pattern — a stated number of units, a stated number of readings per unit, and stated measurement locations — applied consistently. An undocumented sampling approach undermines the comparability of the resulting figure just as much as an undocumented illuminant or instrument geometry does.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'maturity-index' },
    { type: 'quality-attribute', slug: 'internal-quality' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'ethylene-management' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor: 'Colour as a graded and measured factor in commodity standards',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Postharvest colour development, degreening, and colour-ripeness relationships in fresh produce',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Postharvest physiology of pigment change, including chlorophyll loss and carotenoid and anthocyanin accumulation',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'EU marketing standards referencing colour as a produce quality characteristic',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Colour is assessed and graded across most fresh produce and many grain commodities; the specific colour targets, degreening practices, and grading tolerances applied differ by commodity, cultivar, and market.',
  limitations: [
    'Colour measurements are only comparable when the illuminant and instrument geometry used to obtain them are the same or documented.',
    'Colour change is not a reliable ripeness or maturity verdict; it is decoupled from eating quality by cultivar and by handling practices such as degreening.',
    'Colour is heterogeneous across a single unit, so a single-point reading does not necessarily represent the whole unit or the whole lot.',
    'This entry describes the attribute in general terms; the applicable grade standard or buyer specification sets the exact colour requirements and tolerances that apply to a given lot.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Colour: What It Measures, and What It Does Not',
    description:
      'How colour is measured instrumentally in produce and grain, why it drives purchase decisions, and why colour is not a reliable ripeness or maturity verdict.',
    keywords: [
      'colour measurement',
      'produce colour',
      'colorimeter',
      'ripeness',
      'ethylene degreening',
      'CIE Lab colour space',
    ],
  },
  structuredData: { article: true },
};
