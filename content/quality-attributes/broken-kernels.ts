import type { QualityAttributeContent } from '@/types/content';

export const brokenKernels: QualityAttributeContent = {
  id: 'quality-attribute-broken-kernels',
  slug: 'broken-kernels',
  contentType: 'quality-attribute',
  title: 'Broken Kernels',
  alternativeNames: [
    'Broken grain',
    'Grain fragments',
    'Broken corn and foreign material (BCFM)',
  ],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'physical',
  qualityDomain: 'commercial-grading',
  notAnIndicatorOf: [
    "Not, by itself, a complete measure of a lot's storability — broken-kernel content is one contributor to storage risk among several, and a low reading does not by itself guarantee a lot will store well, since moisture, temperature, and pest pressure act independently.",
    'Not evidence of what caused the breakage — combine and thresher settings, over-drying, rough handling through augers and drops, and inherent kernel brittleness can all produce broken kernels that look identical once separated out; the fragments themselves do not reveal their cause.',
    'Not a food-safety indicator — broken-kernel content describes physical condition, not the presence or absence of contamination, mycotoxins, or pest infestation, though broken kernels can indirectly raise those risks over time.',
    'Not comparable across grading standards that define "broken" differently — the sieve size and procedure that determines what counts as broken is set by each standard, so a broken-kernel figure from one standard is not directly comparable to a figure from another.',
  ],
  measurementBasis:
    'Fraction of the sample passing the sieve size prescribed by the applicable grading standard',
  typicalUnits: ['% by mass'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'dry-beans' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'sieve-analysis' },
    { type: 'quality-measurement', slug: 'visual-defect-inspection' },
  ],
  summary:
    'Broken kernels are grain fragments smaller than the size defined by the sieve a grading standard prescribes — a procedural definition, not a natural category. Broken material raises storage risk and reduces milling yield, but the figure does not reveal what caused the breakage and is not comparable between standards with different sieve definitions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Broken kernels are kernel fragments that fall below a size threshold defined by the sieve a particular grading standard prescribes for separating whole kernels from broken material. This is a procedural definition rather than a description of a natural, fixed category: what counts as "broken" is whatever passes through the specific sieve the applicable standard names, using the specific screening procedure that standard sets out. Change the sieve or the standard, and the measured broken-kernel percentage for the identical sample of grain can change, even though nothing about the grain itself has changed.',
    },
    {
      type: 'paragraph',
      text: 'This procedural character is made explicit in some standards. United States corn grading, for example, assesses broken corn together with foreign material as a single combined factor, commonly referred to as BCFM (broken corn and foreign material), rather than reporting broken kernels alone — a clear illustration that what gets measured and how it is grouped is a decision the standard makes, not a fact imposed by the grain itself. Despite this procedural definition, broken kernels matter for real, physical reasons: they behave differently from whole kernels in storage and they yield less usable product in milling.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value:
        'Fragments passing the sieve size prescribed by the applicable grading standard',
    },
    {
      label: 'Nature of the definition',
      value:
        'Procedural, not a natural category — set by the standard, not by the grain itself',
    },
    {
      label: 'US corn grading example',
      value:
        'Assessed jointly with foreign material as a combined factor (BCFM)',
    },
    {
      label: 'Storage consequence',
      value:
        'Fines pack together, restrict airflow, and concentrate during bin filling',
    },
    {
      label: 'Milling consequence',
      value: 'Reduces usable milling yield relative to intact kernels',
    },
    {
      label: 'Not evidence of',
      value:
        'The specific cause of breakage — many causes produce indistinguishable fragments',
    },
    {
      label: 'Comparability',
      value:
        'Figures from different standards with different sieve definitions are not directly comparable',
    },
  ],
  sections: [
    {
      id: 'a-procedural-definition',
      heading: 'Why "broken" is a procedural definition',
      body: [
        {
          type: 'paragraph',
          text: 'Grain does not sort itself naturally into "whole" and "broken" categories; a fragment sits somewhere on a continuum of size, and the grading standard draws the line by specifying a sieve of a particular size and mesh, together with a defined screening procedure — how long to sieve, how vigorously, and how to handle borderline particles. A fragment that counts as broken under one standard\'s sieve might pass as intact under a coarser sieve used elsewhere. This is precisely why the figure is standard-specific: it reports what the named procedure captured, not an intrinsic property of the grain independent of how it was measured.',
        },
        {
          type: 'paragraph',
          text: 'United States corn grade standards illustrate this well by not even isolating broken corn as its own reported figure in the standard grading table: broken corn and foreign material are assessed together as a single combined factor. That combination is itself a procedural choice — a decision about what is efficient and meaningful to report jointly — rather than a reflection of any physical similarity between a corn fragment and, say, a piece of chaff.',
        },
      ],
    },
    {
      id: 'why-it-matters-storage',
      heading: 'Why broken kernels and fines matter in storage',
      body: [
        {
          type: 'list',
          items: [
            'Broken kernels and fines pack more tightly than whole kernels, reducing the void space through which air moves during aeration and drying.',
            'Restricted airflow makes it harder to cool or dry a bulk evenly, which can allow localised hot spots to develop undetected.',
            'During bin filling, spout segregation concentrates broken material and fines toward the centre of the pile rather than distributing them evenly, creating a dense, poorly ventilated core exactly where problems are hardest to spot.',
            'Broken surfaces expose more of the kernel interior, which tends to pick up moisture faster than an intact kernel and offers easier entry for insects and storage moulds.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Together, these effects mean that a bulk with a higher broken-kernel content is generally at greater risk of localised spoilage than an equivalent bulk of intact kernels at the same average moisture, even though broken-kernel content alone does not determine whether a lot will actually spoil.',
        },
      ],
    },
    {
      id: 'why-it-matters-milling-and-grading',
      heading: 'Why it matters for milling yield and commercial grading',
      body: [
        {
          type: 'paragraph',
          text: 'Broken kernels generally translate into lower usable output in milling: a fragment cannot be processed into the same higher-value fraction that an intact kernel can, so a higher broken-kernel content tends to reduce overall milling yield. This is one of the reasons broken-kernel content is written into grading standards as a commercial grading factor: buyers who intend to mill the grain have a direct financial interest in the proportion of the lot that survived handling intact.',
        },
      ],
    },
    {
      id: 'cause-is-not-recoverable-from-the-fragments',
      heading: 'Cause is not recoverable from the fragments themselves',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title: 'Broken kernels do not reveal how they were broken',
          text: 'A measured broken-kernel percentage tells you how much material fell below the sieve threshold; it does not tell you why. Combine or thresher cylinder speed and concave clearance, over-aggressive or over-fast drying that embrittles kernels, rough handling through augers, elevators, and drop points, and simple inherent brittleness of the variety or lot can all produce broken kernels, and the resulting fragments generally look the same regardless of cause. Diagnosing the source of breakage requires examining the handling chain and conditions the lot passed through, not just the broken-kernel figure itself.',
        },
        {
          type: 'paragraph',
          text: 'Repeated handling adds up: every additional pass through an auger, elevator leg, or drop point is another opportunity for impact damage, so a lot that has been moved and re-moved several times between harvest and final destination commonly carries more broken material than the same grain handled fewer times, independent of how carefully it was harvested.',
        },
      ],
    },
  ],
  connections: [
    { type: 'commodity-grade', slug: 'usda-corn-grades' },
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
    { type: 'commodity-grade', slug: 'usda-rice-grades' },
    { type: 'machinery', slug: 'grain-auger' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Broken kernel and BCFM definitions in US grain grading standards',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Effects of broken kernels and fines on stored-grain condition and storage risk',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain handling practices affecting kernel breakage and fines generation',
    },
    {
      sourceId: 'iastate-extension',
      citedFor:
        'Spout segregation, fines concentration, and airflow effects in stored grain',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. What counts as a broken kernel, and how it is reported, is set by the applicable national or contractual grading standard and varies between them.',
  limitations: [
    'The definition of a broken kernel depends on the sieve size and procedure named by the applicable grading standard; figures from different standards are not directly comparable.',
    'A broken-kernel measurement does not identify the cause of breakage; combine settings, drying practice, handling, and inherent brittleness can all produce similar-looking fragments.',
    "Broken-kernel content is one contributor to storage risk among several and is not a complete measure of a lot's storability on its own.",
    'This entry describes general principles; the applicable grade standard or buyer contract sets the specific sieve, procedure, and limit that apply to a given lot.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Broken Kernels: A Standard-Defined Grading Factor',
    description:
      "Why broken kernels are defined by each grading standard's sieve procedure, how they raise storage risk, and why they do not reveal the cause of breakage.",
    keywords: [
      'broken kernels',
      'broken corn foreign material',
      'BCFM',
      'grain fines storage',
      'sieve analysis grain',
    ],
  },
  structuredData: { article: true },
};
