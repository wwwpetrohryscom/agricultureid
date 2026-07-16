import type { QualityMeasurementContent } from '@/types/content';

export const thousandKernelWeightCount: QualityMeasurementContent = {
  id: 'quality-measurement-thousand-kernel-weight-count',
  slug: 'thousand-kernel-weight-count',
  contentType: 'quality-measurement',
  title: 'Thousand Kernel Weight Count',
  alternativeNames: ['TKW count', 'Thousand-seed count and weigh'],
  category: 'Quality measurement',
  subcategory: 'Laboratory method',
  measurementClass: 'laboratory',
  measures: [{ type: 'quality-attribute', slug: 'thousand-kernel-weight' }],
  principle:
    'A counted number of whole, sound kernels — counted by hand or by an electronic seed counter — is weighed, and the result is scaled to a thousand kernels and adjusted to a stated moisture basis.',
  sampleRequirement:
    'Whole, sound kernels drawn from a representative sample of the lot, with the moisture content of the same sample determined in parallel so the result can be reported on a stated moisture basis.',
  destructive: false,
  referenceMethodNote:
    'Seed testing procedures — the International Seed Testing Association rules and equivalent national seed testing standards — prescribe the counting method, sample size, and reporting requirements, including the requirement to state the moisture basis alongside the result.',
  measurementLimitations: [
    'The result is meaningless without its stated moisture basis. The same physical kernels weighed at two different moisture contents give two different, equally legitimate-looking figures, and neither is wrong on its own terms — but a thousand kernel weight quoted without its moisture basis cannot be used in a calculation or compared against any other figure.',
    'Electronic seed counters miscount broken kernels, doubled kernels passing together, and light chaff mixed with the sample. A counter that miscounts by only a small number out of a thousand shifts the reported weight silently, with no indication in the output that a miscount occurred.',
    'What counts as a "kernel" for the purpose of the count is itself a decision, not a given: including or excluding broken, shrivelled, or immature kernels changes the result substantially, and different laboratories and standards can decide this differently — see Broken Kernels.',
    'It reports a mean, and a mean hides the underlying distribution. A lot of uniform, mid-size kernels and a lot mixing plump and shrivelled kernels can return the identical thousand kernel weight while behaving completely differently at sowing and in milling — see Size Uniformity.',
    "Small counted samples carry real sampling error, and thousand kernel weight varies with the kernel's position on the ear or head and with its position within the wider lot, so the counted sub-sample may not represent the whole lot as closely as its apparent precision suggests.",
    'It is a purely physical measure of mass and says nothing about whether the counted seed is alive; a heavy kernel can fail to germinate and a lighter one can germinate normally — see Germination Capacity.',
  ],
  summary:
    'Thousand kernel weight count determines the attribute by counting a defined number of whole, sound kernels — by hand or electronic counter — weighing them, and scaling and adjusting the result to a stated moisture basis. The figure is meaningless without that moisture basis, and both the counting step and the definition of "kernel" used are sources of real, hidden error.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Thousand kernel weight is determined by counting out whole, sound kernels from a representative sample — using either manual counting or an electronic seed counter — weighing the counted kernels, and scaling the result mathematically to the mass of a thousand kernels. Because water adds mass, the moisture content of the same sample is determined in parallel so the final figure can be reported on a stated moisture basis. Seed testing procedures such as the International Seed Testing Association rules, and equivalent national seed testing standards, prescribe how the counting, weighing, and reporting are to be carried out.',
    },
    {
      type: 'paragraph',
      text: 'The method looks simple, and in one sense it is: count, weigh, scale. But two decisions embedded in that apparently mechanical process carry most of the method\'s real uncertainty. The first is what counts as a "kernel" to include in the count — a decision about broken, shrivelled, or immature material that different laboratories can make differently. The second is the moisture basis the result is reported on, without which the resulting figure cannot be meaningfully used or compared at all. Neither decision is visible in the final number itself.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'The mass of a counted number of whole kernels, scaled to a thousand and adjusted to a stated moisture basis',
    },
    {
      label: 'Counting method',
      value: 'By hand or by an electronic seed counter',
    },
    {
      label: 'Moisture basis',
      value: 'Determined in parallel and required alongside the result',
      note: 'A figure without its moisture basis cannot be used or compared',
    },
    {
      label: '"Kernel" is a decision',
      value:
        'Whether broken, shrivelled, or immature material is included changes the result',
    },
    {
      label: 'Reports a mean',
      value:
        'Hides whether the lot is size-uniform or a mix of plump and shrivelled kernels',
    },
    {
      label: 'Does not indicate',
      value:
        'Seed viability or germination capacity — it is a physical mass measurement only',
    },
    {
      label: 'Where the procedure is set',
      value:
        'International and national seed testing standards prescribe counting method, sample size, and reporting',
    },
  ],
  sections: [
    {
      id: 'the-counting-step',
      heading: 'Counting: hand versus electronic, and the miscount problem',
      body: [
        {
          type: 'paragraph',
          text: 'Manual counting is slow but allows the operator to judge each kernel as it is set aside, catching obvious breakage or debris as it goes. Electronic seed counters work far faster, typically by singulating kernels as they pass a sensor, but they are prone to specific, predictable errors: two kernels passing the sensor together can be counted as one, a badly broken kernel can be missed or double-counted, and light chaff or foreign material mixed into the sample can be counted as if it were a kernel.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A small miscount produces no warning',
          text: 'Because the final figure is simply the weighed mass scaled by the count, a counter that miscounts by only a handful of kernels out of a thousand shifts the reported thousand kernel weight without any signal in the output that anything went wrong. The result looks exactly as precise as a correctly counted determination.',
        },
      ],
    },
    {
      id: 'what-counts-as-a-kernel',
      heading: 'What counts as a kernel is a decision',
      body: [
        {
          type: 'paragraph',
          text: 'Before any counting begins, a working definition of "kernel" has to be applied: does a broken kernel count, and if so, at what threshold of breakage? Does a visibly shrivelled or immature kernel count on the same basis as a plump one? Different laboratories and different standards answer these questions differently, and the answer chosen changes the resulting weight substantially, because excluding light, damaged material raises the average weight of what remains while including it lowers the average. Two laboratories analysing splits of the same lot under different inclusion rules can legitimately report different thousand kernel weights — see Broken Kernels for how that same material is separately assessed as a defect factor.',
        },
      ],
    },
    {
      id: 'the-moisture-basis-requirement',
      heading: 'Why the moisture basis is part of the result, not a footnote',
      body: [
        {
          type: 'paragraph',
          text: "Water adds mass, so the same physical kernels weigh more when wetter and less when drier, independent of any change in kernel size, composition, or quality. A thousand kernel weight is therefore not a single fixed number for a given batch of kernels — it is a number tied to the moisture content at which the kernels happened to be weighed. Determining the sample's moisture content in parallel, and adjusting or at minimum reporting the result against that stated basis, is what makes the figure usable at all; without it, a reported thousand kernel weight cannot be compared with another figure or used reliably in any downstream calculation.",
        },
      ],
    },
    {
      id: 'a-mean-hides-the-distribution',
      heading: 'A mean hides the distribution, and sampling error is real',
      body: [
        {
          type: 'paragraph',
          text: 'The reported figure is an average over the counted kernels, and an average by construction discards information about how the individual kernel weights are spread. A lot made up of uniformly mid-size kernels and a lot mixing genuinely plump kernels with shrivelled ones can return the same thousand kernel weight while performing very differently at sowing — where uniform kernel size supports even emergence — and in milling, where a uniform lot mills more predictably than a mixed one. See Size Uniformity for the attribute that captures this distinction directly.',
        },
        {
          type: 'paragraph',
          text: "The counted sub-sample also carries ordinary sampling error, and thousand kernel weight is known to vary systematically with a kernel's position on the ear or head as well as with its position within the wider lot. A small counted sample, however carefully counted and weighed, is therefore an estimate of the lot's thousand kernel weight, not an exact statement of it — and it says nothing at all about whether the counted seed would germinate; that is a separate property assessed by a germination test.",
        },
      ],
    },
  ],
  connections: [{ type: 'quality-attribute', slug: 'thousand-kernel-weight' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Thousand kernel weight determination as a standard seed and grain quality measurement',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Thousand kernel weight counting and weighing practice in wheat and maize breeding programmes',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Practical thousand kernel weight determination and its use in seeding rate calculation',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Seed counting and weighing conventions in grain and seed testing',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The prescribed counting method, sample size, and moisture-basis reporting requirement are set by the applicable seed testing standard and can differ by country and laboratory.',
  limitations: [
    'This entry states no thousand kernel weight values, sample counts, or moisture bases; the applicable seed testing standard or laboratory procedure sets these.',
    "This entry does not cover the operating procedure for any specific electronic counter model; consult the manufacturer's documentation and the applicable seed testing standard.",
    'The definition of which kernels are counted (whole, broken, shrivelled, immature) is set by the applicable standard or laboratory protocol and is not fixed by this entry.',
    'A result from this method describes the counted sample only; representing a heterogeneous lot reliably requires sampling according to an appropriate seed testing sampling plan.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Thousand Kernel Weight Count: Method & Pitfalls',
    description:
      'How thousand kernel weight is determined by counting and weighing kernels, why the moisture basis is essential, and where the count itself can mislead.',
    keywords: [
      'thousand kernel weight count',
      'TKW measurement method',
      'seed counting method',
      'kernel weight moisture basis',
      'seed testing procedure',
    ],
  },
  structuredData: { article: true },
};
