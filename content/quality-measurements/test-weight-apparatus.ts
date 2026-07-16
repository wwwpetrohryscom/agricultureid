import type { QualityMeasurementContent } from '@/types/content';

export const testWeightApparatus: QualityMeasurementContent = {
  id: 'quality-measurement-test-weight-apparatus',
  slug: 'test-weight-apparatus',
  contentType: 'quality-measurement',
  title: 'Test-Weight Apparatus',
  alternativeNames: ['Chondrometer', 'Kern apparatus', 'Bushel-weight tester'],
  category: 'Quality measurement',
  subcategory: 'Instrumental method',
  measurementClass: 'instrumental',
  measures: [
    { type: 'quality-attribute', slug: 'test-weight' },
    { type: 'quality-attribute', slug: 'bulk-density' },
  ],
  principle:
    'Grain is delivered into a container of defined volume from a defined height through a defined funnel, and the surface is stroked off level. The contained mass is then weighed and reported as mass per unit volume.',
  sampleRequirement:
    'A representative sample of the lot, presented to the apparatus in the condition — moisture, cleanliness, temperature — specified by the applicable procedure, since the reading changes with the state of the sample.',
  destructive: false,
  referenceMethodNote:
    "The apparatus, filling procedure, and calculation are prescribed by the grading authority responsible for the standard being applied — in the United States, apparatus approved by USDA's Federal Grain Inspection Service for official inspection; elsewhere, apparatus meeting the relevant ISO or national kilograms-per-hectolitre standard. Conversion between kg/hL and lb/bu figures is by published table rather than a simple arithmetic factor, because the underlying procedures differ.",
  measurementLimitations: [
    'The procedure IS the measurement. Drop height, funnel geometry, filling rate, and the stroking action all change how the grain packs and therefore the figure obtained, which is why an informal "bucket and scale" determination does not produce a test weight in any standard\'s sense — it produces only a bulk density, a related but distinct quantity (see Bulk Density).',
    'Results from lb/bu apparatus and kg/hL apparatus are not interchangeable, and a converted figure is not the same thing as a value obtained by direct measurement in the target system. This is a real, persistent friction point in international grain trade, where contracts should state which system and apparatus a specified test weight refers to.',
    'It is sensitive to moisture and to fines or dockage content. Wetter grain and grain carrying more fines pack differently in the apparatus, so a test weight taken from an uncleaned or undried sample is not the test weight of the same lot after cleaning and drying — a routine and well-documented source of dispute between buyer and seller.',
    'It responds to kernel shape and surface characteristics as much as to true kernel density, so it does not reveal what is inside the kernel; treating test weight as a proxy for internal composition or quality is a documented misreading — see what Test Weight is not an indicator of.',
    'Small or non-representative samples give figures that do not describe the lot as a whole; the apparatus reports only the condition of the sample actually poured into it.',
    'Vibration during filling or during transport of a filled sample compacts the grain further and can raise the apparent figure above what a fresh, undisturbed fill would show.',
  ],
  summary:
    'Test-weight apparatus fills a container of defined volume from a defined height and funnel, strikes the surface level, and weighs the contents to report mass per unit volume. The result is defined entirely by the prescribed procedure — a different apparatus or filling method gives a different figure on the same grain, and converted figures between measurement systems are not equivalent to direct measurements.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Test-weight apparatus determines test weight and bulk density by a controlled filling procedure rather than by any chemical or electronic sensing. Grain flows from a hopper through a funnel of prescribed geometry, falls a prescribed height into a container of known volume, and the excess above the rim is stroked off level with a straightedge. The mass of grain now filling that fixed volume is weighed and reported as mass per unit volume — kilograms per hectolitre in most of the world, pounds per bushel in the United States. Because it requires only simple, inexpensive mechanical apparatus and can be completed in minutes, it has been used as a grading factor for well over a century.',
    },
    {
      type: 'paragraph',
      text: "The central fact to understand about this apparatus is that the procedure is the measurement. Test weight is not an intrinsic physical constant of the grain the way, say, kernel density alone would be; it is the outcome of pouring grain in a specific, prescribed way into a specific, prescribed container. Change the drop height, the funnel, the filling rate, or the stroking action, and the same grain produces a different number. This is precisely why grading standards specify the apparatus and procedure in detail, and precisely why an ad hoc determination made with different equipment or a different technique is not a test weight in the standard's sense at all.",
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'Mass of grain filling a container of defined volume, delivered by a prescribed filling procedure',
    },
    {
      label: 'The procedure is the measurement',
      value:
        'Drop height, funnel geometry, filling rate, and stroking action all change the reading',
    },
    {
      label: 'Two measurement systems',
      value: 'kg/hL apparatus and lb/bu apparatus, using different procedures',
      note: 'Converted figures are not equivalent to figures measured directly in the target system',
    },
    {
      label: 'Sensitive to',
      value: 'Moisture content and the level of fines or dockage in the sample',
    },
    {
      label: 'Does not reveal',
      value:
        'Kernel internal composition; the reading responds to shape and packing as much as to density',
    },
    {
      label: 'Where the procedure is set',
      value:
        'The grading authority responsible for the applicable standard prescribes the apparatus, filling method, and calculation',
    },
    {
      label: 'Non-destructive',
      value: 'The sample can typically be reused after weighing',
    },
  ],
  sections: [
    {
      id: 'the-procedure-is-the-measurement',
      heading: 'Why the procedure defines the result',
      body: [
        {
          type: 'paragraph',
          text: 'Test-weight apparatus produces a packing-density measurement, and packing density depends on exactly how the material was packed. A fixed funnel geometry controls how the grain stream spreads as it falls; a fixed drop height controls the momentum the kernels carry as they land; a fixed filling rate avoids either rushing the fill or letting it settle unevenly; and the stroking action removes the excess in a standardised way rather than leaving an arbitrary heaped or compacted surface. Each of these choices measurably changes the mass that ends up filling the container, which is why grading standards specify apparatus design and filling technique in close detail rather than leaving them to operator discretion.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A bucket-and-scale determination is not a test weight',
          text: 'Because the standard result depends on prescribed apparatus and procedure, an informal determination made by pouring grain into any convenient container and weighing it does not produce a test weight comparable to a graded figure. At best it produces a rough bulk density — a related but distinct measurement — that cannot be substituted for an official or contractual test-weight determination.',
        },
      ],
    },
    {
      id: 'kg-hl-vs-lb-bu',
      heading:
        'kg/hL and lb/bu are not the same measurement in different units',
      body: [
        {
          type: 'paragraph',
          text: "Kilograms-per-hectolitre apparatus, used across most of the world, and pounds-per-bushel apparatus, used in the United States, employ different container volumes, different funnel and drop-height specifications, and different filling conventions. As a result, a figure obtained on one system is not simply the same physical quantity expressed in different units — the two procedures do not measure identically, and the relationship between them is captured in a published conversion table rather than a straightforward arithmetic factor. A converted figure carries additional uncertainty relative to a figure obtained by direct measurement on the target system's own apparatus.",
        },
        {
          type: 'paragraph',
          text: 'This distinction is a genuine, practical friction in international grain trade: contracts that specify a test-weight requirement should state which measurement system and apparatus the figure refers to, since a converted number and a directly measured number are not interchangeable for contractual purposes.',
        },
      ],
    },
    {
      id: 'sensitivity-to-condition',
      heading: 'Sensitivity to moisture, fines, and handling',
      body: [
        {
          type: 'list',
          items: [
            'Wetter grain packs differently than drier grain of the same variety and condition, so a test weight taken before drying is not the test weight the same lot will show after drying, independent of any change in the grain itself.',
            'Fines and dockage — small particles, broken material, and foreign matter — fill the interstitial space between whole kernels differently than whole kernels do, so an uncleaned sample can read differently from the same lot after cleaning.',
            'Vibration during filling, or during transport of a filled measure before weighing, can further compact the grain and raise the apparent figure above what an undisturbed fill would show.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because of this sensitivity, a test-weight figure is only comparable to another figure, or to a contractual specification, when both were determined on samples in a comparably specified condition — a routine and well-documented source of buyer–seller dispute when that condition is not made explicit.',
        },
      ],
    },
    {
      id: 'what-it-does-not-reveal',
      heading: 'What the reading does not reveal',
      body: [
        {
          type: 'paragraph',
          text: 'Because the apparatus responds to how kernels of a given shape and surface texture pack together, as much as to the intrinsic density of the kernel material itself, the resulting figure does not disclose what is happening inside the kernel. Two lots can share the same test weight while differing in protein, starch, or internal soundness, and a shrivelled but otherwise sound lot can pack, and therefore weigh, differently from a plump lot of similar internal composition. The reading is a physical-condition screen, not a composition measurement — see Test Weight for what it is commonly, and incorrectly, assumed to indicate.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'test-weight' },
    { type: 'quality-attribute', slug: 'bulk-density' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Official test-weight apparatus and procedure requirements for US grain grading',
    },
    {
      sourceId: 'fao',
      citedFor:
        'General principles of grain physical-quality measurement including test weight',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Test-weight measurement practice and sensitivity to moisture and dockage',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Research on test-weight measurement and its relationship to grain condition',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Approved apparatus design, units (kg/hL or lb/bu), and the grading authority responsible for the procedure differ by country and standard.',
  limitations: [
    'This entry states no test-weight values or conversion factors between kg/hL and lb/bu; the applicable published conversion table and grading standard set these.',
    'This entry describes the general principle of the apparatus, not the operating specification of any particular instrument; consult the applicable official grading manual for exact apparatus and procedure requirements.',
    'A reading is only comparable to another reading, or to a contract specification, when both samples were in a comparably specified moisture and cleanliness condition.',
    'This entry does not address apparatus calibration or verification procedures, which are set by the responsible grading or standards authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Test-Weight Apparatus: The Procedure Is the Result',
    description:
      'Test-weight apparatus fills a defined container by a prescribed procedure and weighs it — the filling method itself defines the figure obtained.',
    keywords: [
      'test weight apparatus',
      'chondrometer',
      'bushel weight tester',
      'grain bulk density measurement',
      'kg/hL test weight',
    ],
  },
  structuredData: { article: true },
};
