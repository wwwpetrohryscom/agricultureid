import type { QualityAttributeContent } from '@/types/content';

export const firmness: QualityAttributeContent = {
  id: 'quality-attribute-firmness',
  slug: 'firmness',
  contentType: 'quality-attribute',
  title: 'Firmness',
  alternativeNames: ['Flesh firmness', 'Fruit firmness'],
  category: 'Quality attribute',
  subcategory: 'Fresh produce',
  attributeClass: 'physical',
  qualityDomain: 'quality-measurement',
  notAnIndicatorOf: [
    'Not eating quality — firmness measures resistance to deformation or penetration, not flavour, sweetness, or aroma. A hard fruit is not necessarily a good fruit: an immature apple can be very firm and essentially flavourless, while a fruit that has developed excellent eating quality may already have begun to soften.',
    'Not a maturity index on its own — firmness is one component that feeds into composite maturity indices, which commonly combine firmness with soluble solids content and, in starch-accumulating fruit, a starch-conversion pattern. A firmness reading alone does not establish maturity (cross-reference maturity-index).',
    'Not comparable across cultivars, probe sizes, or instruments — different cultivars have structurally different flesh, and a value produced with one probe diameter and penetration depth is not comparable to a value produced with another; the probe geometry and depth are part of the method, not incidental detail.',
    'Not a measure of internal condition — a fruit can read firm at the surface while carrying internal browning, breakdown, or other internal disorders that a penetrometer reading cannot detect (cross-reference internal-quality).',
    'Not turgor alone — a fruit that has lost water through wilting or dehydration can give a firmness reading that does not reflect the state of its cell walls, so dehydration confounds the reading rather than simply lowering it in a predictable way.',
  ],
  measurementBasis:
    'Force to penetrate pared flesh with a probe of stated diameter to a stated depth, at a stated fruit temperature',
  typicalUnits: ['N (newtons)', 'kgf (kilogram-force)', 'lbf (pounds-force)'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-lemons' },
  ],
  measuredBy: [{ type: 'quality-measurement', slug: 'penetrometer' }],
  summary:
    "Firmness is the resistance of a fruit or vegetable's flesh to deformation or penetration, conventionally reported as the maximum force needed to drive a probe of specified diameter a specified depth into the pared flesh. It is the workhorse ripeness and shelf-life indicator for apples, pears, stone fruit, kiwifruit, and tomatoes, because softening tracks the ripening process more reliably than almost any other single property — but a firmness figure without its probe size, penetration depth, and fruit temperature stated is not a comparable figure.",
  introduction: [
    {
      type: 'paragraph',
      text: "Firmness describes how strongly a fruit or vegetable's flesh resists being deformed or penetrated. The conventional way of expressing it is the peak force required to push a probe of a defined diameter to a defined depth into flesh that has been pared of its skin, and that pairing of probe diameter and penetration depth is not incidental detail — it is part of the definition of the measurement itself. A firmness value reported without stating the probe used and the depth it was driven to cannot be meaningfully compared with another value, even for the same commodity, because a wider probe or a deeper penetration reads differently against the same flesh.",
    },
    {
      type: 'paragraph',
      text: 'Firmness is used so widely as a ripeness and storability indicator because softening is one of the most reliable physical correlates of the ripening process across a wide range of fruit, and because remaining shelf life is bound up closely with how much softening has already occurred and how much is still to come. Firmness readings taken at harvest, at intake, and through a storage or marketing period are a standard way of tracking how a lot is progressing and how much handling life it likely has left, which is why the attribute sits under quality measurement rather than under a grading or safety domain: it answers a texture question, not a commercial or safety one.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value: 'Resistance of flesh to deformation or penetration',
    },
    {
      label: 'Conventional expression',
      value:
        'Peak force to drive a probe of stated diameter a stated depth into pared flesh',
      note: 'Probe diameter and penetration depth are part of the method, not optional detail',
    },
    {
      label: 'Primary role',
      value:
        'Ripeness and shelf-life tracking for apples, pears, stone fruit, kiwifruit, and tomatoes',
    },
    {
      label: 'Underlying mechanism',
      value:
        'Enzymatic disassembly of the cell wall and middle lamella, plus loss of cell turgor',
    },
    {
      label: 'Temperature sensitivity',
      value:
        'Cold flesh reads firmer than the same flesh at a warmer, equilibrated temperature',
      note: 'Readings should be taken at a stated, equilibrated temperature',
    },
    {
      label: 'Not comparable across',
      value: 'Cultivars, probe sizes, penetration depths, and instrument types',
    },
    {
      label: 'Related but distinct attribute',
      value:
        'Internal condition — a firm fruit can still carry internal disorders (cross-reference internal-quality)',
    },
  ],
  sections: [
    {
      id: 'how-firmness-is-defined',
      heading: 'How a firmness figure is defined',
      body: [
        {
          type: 'paragraph',
          text: "A firmness figure is only meaningful alongside the method that produced it. The probe diameter changes how much flesh area is engaged and therefore the force needed; the penetration depth changes how far into the flesh — through the skin-adjacent tissue and into the deeper cortex — the reading is sampling; and the fruit temperature at the time of the reading changes the flesh's mechanical response independent of any real change in ripeness. Reporting a firmness value without these three elements stated is the single most common reporting failure with this attribute, because the same fruit can produce meaningfully different numbers under different probe and depth choices.",
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A number without its method is not comparable',
          text: 'A firmness figure is only interpretable alongside the probe diameter, penetration depth, and fruit temperature it was taken under. Comparing figures from different methods, or from fruit at different temperatures, as though they were on a common scale is a routine and consequential misreading.',
        },
      ],
    },
    {
      id: 'why-firmness-tracks-ripening',
      heading: 'Why firmness tracks ripening',
      body: [
        {
          type: 'paragraph',
          text: 'Softening during ripening is driven by enzymatic disassembly of the cell wall and the middle lamella that cements adjacent cells together, alongside a loss of the cell turgor pressure that keeps tissue firm and crisp. As these structural changes proceed, flesh becomes progressively easier to deform and penetrate, which is why a declining firmness trend is such a widely used proxy for how far ripening has advanced and how much shelf life a lot has left before it becomes too soft for its intended market.',
        },
        {
          type: 'paragraph',
          text: "Because this softening process runs at a broadly predictable rate for a given cultivar under given storage conditions, firmness measured at intake, partway through storage, and again near dispatch is a practical way to monitor a lot's progression without needing to taste it or wait for visible signs of over-ripeness to appear.",
        },
      ],
    },
    {
      id: 'what-firmness-is-not',
      heading: 'What a firmness reading does not tell you',
      body: [
        {
          type: 'list',
          items: [
            'It does not tell you whether the fruit tastes good: flavour, sweetness, and aroma are governed by separate chemistry and are not captured by a texture-resistance reading.',
            'It does not by itself establish maturity: composite maturity indices commonly combine firmness with soluble solids content and, in starch-accumulating fruit, a starch-conversion pattern, precisely because firmness alone is an incomplete picture.',
            'It does not tell you about internal condition: a fruit can read firm at the probe site while carrying internal browning or breakdown elsewhere in the flesh.',
            'It does not isolate turgor from dehydration: water-stressed or wilted fruit can give readings that reflect moisture loss rather than the state of the underlying cell-wall chemistry.',
          ],
        },
      ],
    },
    {
      id: 'temperature-and-comparability',
      heading: 'Temperature and comparability',
      body: [
        {
          type: 'paragraph',
          text: 'Firmness readings are temperature-dependent: cold flesh mechanically resists penetration more than the same flesh at a warmer temperature, independent of any underlying change in cell-wall chemistry. Fruit pulled directly from cold storage and measured immediately will typically read firmer than fruit that has been allowed to equilibrate to a stated ambient temperature first, which is why comparable firmness monitoring programmes fix the temperature the fruit is measured at rather than leaving it to vary with when in the cold chain the sample was pulled.',
        },
        {
          type: 'paragraph',
          text: 'Cultivar differences compound the comparability problem further: two cultivars of the same commodity can have structurally different flesh that responds differently to the same probe, so a firmness threshold that is meaningful for one cultivar is not automatically meaningful for another. This is why buyers, packers, and researchers specify firmness targets per cultivar and per method rather than as a single figure for a commodity as a whole.',
        },
      ],
    },
  ],
  connections: [{ type: 'post-harvest', slug: 'fruit-ripening' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'ethylene-management' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Firmness as a post-harvest ripeness and quality measurement in fresh produce research',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Firmness measurement practice and interpretation in fresh produce handling',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Produce quality guidance distinguishing firmness from other ripeness and quality attributes',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest quality principles for fresh fruit and vegetables',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The physical principle is universal; probe geometry, penetration depth, and firmness targets used commercially vary by commodity, cultivar, and buyer or market specification.',
  limitations: [
    'A firmness value is not interpretable without the probe diameter, penetration depth, and fruit temperature it was measured under; figures lacking this method detail should not be compared.',
    'Firmness targets and interpretation differ by cultivar; a value that indicates good condition in one cultivar can indicate over- or under-maturity in another.',
    'Firmness says nothing about flavour, internal condition, or safety; it must be read alongside other attributes such as soluble solids content, internal quality, and maturity indices, not in isolation.',
    'This entry describes general measurement principles; commodity- and cultivar-specific firmness practice is set by the applicable grade standard, buyer specification, or extension guidance.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Firmness: What It Measures in Fresh Produce',
    description:
      'Firmness measures flesh resistance to penetration and tracks ripening, but it is not eating quality, maturity alone, or internal condition.',
    keywords: [
      'fruit firmness',
      'penetrometer',
      'ripeness indicator',
      'post-harvest quality',
      'flesh firmness measurement',
    ],
  },
  structuredData: { article: true },
};
