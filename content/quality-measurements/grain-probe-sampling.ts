import type { QualityMeasurementContent } from '@/types/content';

export const grainProbeSampling: QualityMeasurementContent = {
  id: 'quality-measurement-grain-probe-sampling',
  slug: 'grain-probe-sampling',
  contentType: 'quality-measurement',
  title: 'Grain Probe Sampling',
  alternativeNames: ['Grain trier sampling', 'Bulk grain probing'],
  category: 'Quality measurement',
  subcategory: 'Field and store monitoring',
  measurementClass: 'instrumental',
  measures: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'insect-damage' },
  ],
  principle:
    'A probe — a compartmented or open-handle trier, a slotted spear, or a pneumatic or vacuum probe — is inserted into a static bulk at prescribed points and depths to withdraw increments, which are combined into a composite sample and then divided down by a mechanical divider to the working sample size. For grain moving on a conveyor or being loaded or unloaded, a diverter-type mechanical sampler that cuts the full stream at intervals is the preferred approach and is more representative than probing a static bulk.',
  sampleRequirement:
    'A composite sample built from multiple increments drawn at the points, depths, and frequency the applicable sampling standard or grading authority procedure prescribes, then divided down without bias to the working sample size.',
  destructive: false,
  referenceMethodNote:
    'The probing pattern, the number and location of increments, the compositing, and the division method are all prescribed by the applicable sampling standard or grading authority procedure. For mycotoxin sampling specifically, the prescribed sampling plan is a legal requirement in many jurisdictions, not simply good practice.',
  measurementLimitations: [
    'Grain bulks are not homogeneous, and the ways they are heterogeneous are systematic rather than random. Filling a bin spouts fine material, broken kernels, and light material into a core beneath the fill point, while sound kernels tend to roll outward toward the periphery as the pile forms. Probe increments drawn from different positions therefore differ from each other in a predictable, not a random, way — a probing pattern that misses the central core misses exactly the part of the bulk most likely to concentrate a problem.',
    "A probe reaches where it reaches. The centre and the bottom of a deep bulk, and the far reaches of a loaded container or ship's hold, are commonly beyond what a hand probe can access, so the unsampled volume is often precisely the volume most likely to have spoiled or concentrated a hazard, simply because it is the hardest part of the bulk to reach and therefore also the part least likely to have been noticed or turned.",
    'Contamination is often clustered, which breaks the logic that a small sample can safely stand in for a large lot. Mycotoxin contamination especially can concentrate in a very small proportion of kernels within an otherwise clean lot, so a genuinely compliant lot and a genuinely failing lot can both return a clean small sample by chance. The increment count prescribed by a sampling plan exists to fight this risk; it reduces it substantially but does not eliminate it.',
    'Compositing and dividing are part of the measurement, and they are done incorrectly on a routine basis. Scooping a "representative" handful directly out of a composite sample instead of running it through a proper divider reintroduces exactly the bias the increment-based sampling plan was designed to remove, and it can happen at a point in the process that looks, superficially, like it is following the plan.',
    'Probing a static bulk cannot match cutting a moving stream for representativeness. Where a diverter-type stream sampler is available — during loading, unloading, or conveying — it is the better instrument, because it samples the entire cross-section of the flow at intervals rather than relying on a probe reaching into a fixed pile from outside.',
    "Sample handling after drawing changes the result. A sample left open, sitting in the sun, or held in a warm vehicle cab exchanges moisture with the surrounding air before it ever reaches a moisture meter or laboratory, so the moisture figure eventually reported can describe the sample's recent history rather than the lot's actual condition at the moment of sampling.",
  ],
  summary:
    'Grain probe sampling draws increments from a bulk with a trier, spear, or pneumatic probe — or, for moving grain, cuts the stream with a diverter sampler — and composites and divides them to a working sample. Sampling determines what value a lot is ultimately assigned, and sampling error usually exceeds the error of whatever instrument later analyses the sample.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Grain probe sampling is the step that draws a working sample from a bulk lot for every downstream test this corpus describes — moisture measurement, foreign material assessment, insect-damage inspection, and mycotoxin analysis all start from a sample this step produced. A probe, which may be a compartmented or open-handle trier, a slotted spear, or a pneumatic or vacuum device, is inserted into a static bulk at points and depths a sampling plan prescribes, and each insertion withdraws an increment. Increments are combined into a single composite sample and then reduced, using a mechanical divider rather than by hand, to the working sample size the downstream test requires. Where grain is moving — being loaded, unloaded, or conveyed — a diverter-type mechanical sampler that cuts the entire stream at intervals is the preferred method and is inherently more representative than probing a static pile from the outside.',
    },
    {
      type: 'paragraph',
      text: 'The point this entry exists to make is that sampling, not the instrument that later analyses the sample, is usually where the largest source of error in a reported result actually enters. A moisture meter, a laboratory test, or a mycotoxin assay each has its own analytical error, but every one of those results is a statement about the sample handed to it — and it is a statement about the lot only to the extent that the sample genuinely represents the lot. Because grain bulks segregate predictably during filling and are rarely uniform, drawing that representative sample is a harder and more consequential problem than most of the analytical steps that follow it.',
    },
  ],
  keyFacts: [
    {
      label: 'What it does',
      value:
        'Draws increments from a bulk using a probe, or cuts a moving stream with a diverter sampler, to build a composite working sample',
    },
    {
      label: 'Central thesis',
      value: 'Sampling determines what value a lot is ultimately assigned',
      note: 'Sampling error usually exceeds the error of the instrument that later analyses the sample',
    },
    {
      label: 'Bulks segregate predictably',
      value:
        'Filling spouts fines and light material toward the centre while sound kernels roll to the edges',
      note: 'A probing pattern that misses the core misses the problem',
    },
    {
      label: 'Reach is limited',
      value:
        'A hand probe often cannot reach the centre, bottom, or far corners of a deep or loaded bulk',
    },
    {
      label: 'Contamination clusters',
      value:
        'Mycotoxin especially can concentrate in a small proportion of kernels, so small samples can mislead in either direction',
    },
    {
      label: 'Moving grain is easier to sample well',
      value:
        'A diverter-type stream sampler cutting a moving flow is more representative than probing a static pile',
    },
    {
      label: 'Where the plan is set',
      value:
        'The applicable sampling standard or grading authority procedure prescribes points, depths, increments, and division; mycotoxin sampling plans are a legal requirement in many jurisdictions',
    },
  ],
  sections: [
    {
      id: 'how-sampling-is-carried-out',
      heading: 'How sampling is carried out',
      body: [
        {
          type: 'paragraph',
          text: 'A trier or spear-type probe is inserted into a static bulk — a bin, a bag stack, a truck, or a hold — at a series of points and depths a sampling plan sets out, and each insertion withdraws a small increment of grain. Every increment collected across the bulk is combined into a single composite sample. That composite is then reduced to the working sample size a downstream test actually requires using a mechanical divider, which splits the composite systematically rather than by hand-selecting a portion of it.',
        },
        {
          type: 'paragraph',
          text: 'For grain in motion — being loaded onto or off a vessel, conveyed between stores, or moving on a belt — a diverter-type mechanical sampler that periodically cuts the entire cross-section of the moving stream is the preferred approach wherever it is available. Because it samples the full stream rather than reaching into a static pile from outside, it avoids the segregation problems that probing a settled bulk cannot fully overcome.',
        },
      ],
    },
    {
      id: 'why-bulks-defeat-a-simple-probe',
      heading: 'Why grain bulks defeat a simple probing pattern',
      body: [
        {
          type: 'callout',
          tone: 'important',
          title: 'Segregation is predictable, not random',
          text: 'Filling a bin or store spouts fine material, broken kernels, and lighter material preferentially into a core beneath the fill point, while sound, heavier kernels roll outward toward the walls as the pile forms. This is a systematic, repeatable pattern, not random noise — which means a probing pattern designed without accounting for it will systematically under-sample exactly the part of the bulk most likely to concentrate fine material, broken kernels, or a developing problem.',
        },
        {
          type: 'paragraph',
          text: "Physical reach compounds the problem. A hand probe often cannot reach the centre or the bottom of a deep bulk, or the far corners of a fully loaded container or ship's hold, and that unreachable volume is frequently the same volume most likely to have spoiled, precisely because it is also the hardest part of the bulk to inspect, turn, or aerate.",
        },
      ],
    },
    {
      id: 'clustering-and-the-composite-step',
      heading: 'Clustered contamination and the composite-and-divide step',
      body: [
        {
          type: 'paragraph',
          text: 'Contamination in a bulk lot, mycotoxin above all, is often concentrated in a small number of kernels rather than spread evenly through the mass. This defeats the intuition that a small sample safely represents a large lot: both a genuinely compliant lot and a genuinely failing one can return a clean small sample purely by chance, which is exactly why sampling plans prescribe a specific number of increments rather than a single grab sample — more increments reduce this risk substantially, though they cannot eliminate it entirely.',
        },
        {
          type: 'paragraph',
          text: 'The composite-and-divide step that follows collection is itself part of the measurement, and it is a common point of failure. Once increments are combined into a composite, reducing that composite to a working sample by scooping out a "representative" handful reintroduces exactly the bias the increment plan was designed to eliminate; a proper mechanical divider is required for the reduction to preserve what the increments achieved.',
        },
      ],
    },
    {
      id: 'sample-handling-and-access-hazards',
      heading: 'Sample handling and access hazards',
      body: [
        {
          type: 'paragraph',
          text: 'A sample continues to change after it is drawn. Left open to the air, exposed to sun, or held in a warm vehicle cab, a sample exchanges moisture with its surroundings before it ever reaches a meter or a laboratory, so a delayed or poorly handled sample can report its own recent history rather than the true condition of the lot at the moment it was drawn. Good sampling practice seals and protects a sample immediately and analyses it promptly.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Entering a bin or store to sample is a serious access hazard',
          text: "Entering a grain bin, silo, or on-farm store to draw a sample is a confined-space and engulfment hazard, and it is governed by facility procedures and applicable occupational safety regulation. This entry describes sampling principles only; it does not describe entry procedures. Follow the facility's documented entry procedure and applicable regulation, and never enter a bin or store without the training, equipment, and authorisation those procedures require.",
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-measurement', slug: 'oven-drying-method' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'United States official grain sampling procedures, probing, compositing, and dividing practice',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest sampling principles and representativeness in bulk grain lots',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin sampling plans and the effect of clustered contamination on sampling reliability',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain intake sampling practice and hazards of on-farm and store sampling in the United Kingdom',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Sampling patterns, increment counts, and divider procedures are set by the applicable national or international sampling standard or grading authority and differ by commodity, jurisdiction, and the factor being sampled for; mycotoxin sampling plans are frequently a distinct legal requirement.',
  limitations: [
    'This entry names no increment counts, sample masses, probing depths, or sampling intervals. The applicable sampling standard or grading authority procedure prescribes these, and they differ by commodity and jurisdiction.',
    'This entry gives high-level framing on access hazards only and does not describe a confined-space entry procedure; entry into a bin, silo, or store is governed by facility procedures and applicable occupational safety regulation.',
    'This entry does not cover the operating steps for any specific probe, trier, or diverter sampler; consult the applicable official method and equipment documentation.',
    'A sample drawn to this method still requires an appropriate downstream test — a moisture meter, a laboratory method, or a mycotoxin assay — to produce a usable result; this entry covers the sampling step only.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Grain Probe Sampling: Where Lot Values Are Set',
    description:
      'Grain probe sampling draws the sample every later test relies on. Bulk segregation and clustering mean sampling error usually exceeds instrument error.',
    keywords: [
      'grain probe sampling',
      'grain trier sampling',
      'bulk grain sample',
      'mycotoxin sampling plan',
      'representative grain sample',
    ],
  },
  structuredData: { article: true },
};
