import type { PostHarvestContent } from '@/types/content';

export const washingAndSanitising: PostHarvestContent = {
  id: 'post-harvest-washing-and-sanitising',
  slug: 'washing-and-sanitising',
  contentType: 'post-harvest',
  title: 'Washing and Sanitising',
  postHarvestClass: 'handling',
  processStage: 'preparation',
  alternativeNames: [
    'Produce washing',
    'Wash-water sanitation',
    'Dump-tank and flume handling',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Cleaning & separation',
  summary:
    'Washing removes soil and field debris from produce. It also puts every unit in a lot in contact with the same water, which makes wash water the most efficient contamination-spreading mechanism in a packhouse — and explains why the sanitiser is there to treat the water, not the produce.',
  introduction: [
    {
      type: 'paragraph',
      text: "Washing is the removal of soil, dust, plant debris, and surface residues from harvested produce, usually by immersion in a tank, passage along a flume, or a spray over rollers or a belt. It is often the first thing that happens to produce at a packhouse, and it is the operation most likely to be described in terms of what it obviously does — making dirty produce look clean — rather than what it actually does to the lot's microbiology.",
    },
    {
      type: 'paragraph',
      text: 'The uncomfortable fact at the centre of this operation is that water is an excellent vector. A dump tank takes hundreds or thousands of individual units, each carrying its own field microflora, and gives them all a shared bath. If one unit in the lot carries a pathogen, the water now carries it, and every subsequent unit is exposed. Washing therefore has an inherent capacity to convert a localised contamination into a lot-wide one — and it does this while producing produce that looks better than it did before. This is not an argument against washing; it is the reason wash-water management is a food-safety control in its own right, treated far more seriously than the cleaning it enables.',
    },
  ],
  keyFacts: [
    {
      label: 'What it does',
      value:
        'Removes soil, debris, and surface residues; often also cools and hydrates',
    },
    {
      label: 'What the sanitiser is for',
      value:
        'Keeping the water from transferring contamination between units — not disinfecting the produce',
    },
    {
      label: 'Central risk',
      value:
        'One contaminated unit can contaminate the whole batch through shared water',
    },
    {
      label: 'Water quality',
      value:
        'Wash water must be fit for purpose; contaminated water contaminates the crop',
    },
    {
      label: 'Infiltration',
      value:
        'Water can be drawn into produce through stems, scars, and cracks, carrying what it holds',
    },
    {
      label: 'Hard limit',
      value:
        'Washing cannot remove contamination that has entered the tissue, and cannot make unsafe produce safe',
    },
    {
      label: 'Drying afterwards',
      value: 'Free surface water left on produce promotes decay in storage',
    },
  ],
  sections: [
    {
      id: 'the-vector',
      heading: 'Why water is the problem and the tool',
      body: [
        {
          type: 'paragraph',
          text: "Consider what a dump tank is, structurally. It is a shared, recirculating, organically enriched volume of water at a temperature convenient for microbial growth, into which an entire day's harvest is sequentially placed. Soil, plant sap, and microorganisms accumulate in it through the run. Nothing about this is unusual or improper — it is what immersion handling is — but it means the water is the connective tissue of the operation, and whatever enters it reaches everything that follows.",
        },
        {
          type: 'paragraph',
          text: 'This reframes the role of a wash-water sanitiser, and the reframing is the single most important point in this entry. A sanitiser in wash water is not there to disinfect produce. It is there to maintain the water in a condition where it does not act as a vector — to kill what is shed into the water so that it is not delivered to the next unit. Judged as a produce-disinfection step it performs poorly: microorganisms sheltered in stem scars, in surface irregularities, in biofilms, or inside the tissue are not reached by a brief contact with a dilute solution. Judged as water management it is essential. Treating it as the former is the classic error, and it produces a false sense that washed produce has been made safe.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Washing does not make contaminated produce safe',
          text: 'Surface washing achieves only a limited reduction in microbial load and cannot reach organisms that have internalised into the tissue or lodged in protected surface sites. Produce that was contaminated in the field is not made safe by a wash, and a clean appearance is not evidence of microbial safety.',
        },
      ],
    },
    {
      id: 'water-quality',
      heading: 'The water has to be fit before it touches the crop',
      body: [
        {
          type: 'paragraph',
          text: 'Water applied to produce that will not be cooked is, functionally, an ingredient. Where the source water is itself contaminated — surface water, an unprotected well, a compromised supply — washing does not clean produce; it inoculates it, uniformly and thoroughly. This has been a recurring factor in produce-associated outbreaks, and it is why source-water suitability, its testing, and its protection are foundational rather than incidental.',
        },
        {
          type: 'paragraph',
          text: 'Recirculation makes the same question a continuous one rather than a one-off. Water that was fit at the start of a run accumulates soil and organic matter through the day, and organic load consumes sanitiser, so a system dosed correctly at the outset can be running with no effective residual by the afternoon while looking identical. Managing this — monitoring, replenishment, turnover, and end-of-run change-out — is where wash-water control actually lives, and it is why sanitiser concentration is monitored continuously rather than set once.',
        },
        {
          type: 'paragraph',
          text: "AgricultureID does not publish sanitiser types, concentrations, contact times, or water-quality thresholds. Permitted substances differ between jurisdictions, their approved uses and limits are set in food-safety and pesticide regulation, and the correct concentration depends on the water chemistry, the organic load, and the system. These are matters for the applicable regulation, the product label, and the facility's validated food-safety plan.",
        },
      ],
    },
    {
      id: 'infiltration',
      heading: 'Infiltration: when produce drinks the water',
      body: [
        {
          type: 'paragraph',
          text: 'Produce is not a sealed object. Water can be drawn into it through the stem scar, the calyx, cracks, punctures, and the natural openings of the surface — and when it is, it takes whatever it holds with it. Two mechanisms drive this. A temperature difference is one: warm produce immersed in cooler water contains gases that contract, creating an internal pressure drop that pulls water inward. Immersion depth is another, since hydrostatic pressure pushes water in at the bottom of a deep tank.',
        },
        {
          type: 'paragraph',
          text: 'Infiltration matters because it defeats every surface control simultaneously. Organisms carried inside the tissue are beyond the reach of any wash, any sanitiser, and any surface treatment applied afterwards, and they are beyond the reach of inspection too. It is also the mechanism by which the interaction between two ordinary decisions — bringing warm produce in from the field and immersing it in cold water — produces a hazard that neither decision creates alone. This is why temperature differential across immersion steps is managed rather than left to chance, and why the specific arrangements are set by validated food-safety plans for the commodity and facility.',
        },
      ],
    },
    {
      id: 'the-quality-side',
      heading: 'What washing does to keeping quality',
      body: [
        {
          type: 'paragraph',
          text: 'Beyond safety, wetting has consequences for how the produce then stores, and they are not all favourable. Free water left on a surface is exactly what decay organisms need to germinate and establish, so produce packed wet decays faster than produce packed dry — which is why washing is generally followed by a deliberate drying step, and why that step is part of the operation rather than an afterthought.',
        },
        {
          type: 'list',
          items: [
            'Some commodities should not be washed at all: bulb onions and garlic are dried and cured rather than wetted, and re-wetting a cured bulb undoes the seal that curing produced.',
            'Washing can remove natural surface waxes and bloom, increasing water loss afterwards — one of the reasons some washed commodities are subsequently waxed.',
            'Mechanical action in flumes, brushes, and roller beds abrades and bruises soft produce, creating the wounds that decay enters through.',
            'Washing does remove field heat where the water is cooler than the produce, which is a genuine benefit, but that is hydrocooling and it belongs to a cooling plan, not to a cleaning one.',
            'For root crops, removing adhering soil is what makes the crop saleable and what allows defects to be seen at grading, so the trade is usually worth making.',
          ],
        },
      ],
    },
  ],
  applicableCommodityClasses: ['fruit', 'vegetable', 'root-tuber'],
  applicableCommodities: [
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'fresh-carrots' },
    { type: 'commodity', slug: 'fresh-lettuce' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'cucumbers' },
  ],
  measurableInputs: [
    'Source-water suitability and its testing record',
    'Sanitiser concentration and its continuous monitoring',
    'Organic load accumulating in recirculated water',
    'Water pH, where it governs sanitiser effectiveness',
    'Temperature difference between produce and water',
    'Water turnover and change-out frequency',
  ],
  measurableOutputs: [
    'Soil and debris removed from the produce surface',
    'Microbial load on the washed produce',
    'Microbial and organic load in the wash water through the run',
    'Free surface water remaining after the drying step',
    'Mechanical damage introduced by flumes, brushes, and rollers',
  ],
  qualityEffects: [
    'Removes soil and debris, making the lot saleable and allowing defects to be seen at grading',
    'Removes field heat where the water is cooler than the produce',
    'Can spread contamination lot-wide through shared water if the water is not managed',
    'Leaves free surface water that promotes decay unless the produce is dried afterwards',
    'Abrades and bruises soft produce, and can strip natural surface waxes',
  ],
  environmentalContext:
    'Washing is water-intensive, and packhouses in water-scarce regions face a direct tension between recirculating water to conserve it and changing it to control contamination. Wash water leaves carrying soil, organic matter, and any sanitiser residue, so its discharge is regulated in most jurisdictions. Where a reliable supply of suitable water does not exist, dry cleaning — brushing or air — is sometimes the safer choice, because washing with unsuitable water is worse than not washing at all.',
  safetyLimitations: [
    "No sanitiser type, concentration, contact time, or water-quality threshold is given here. Permitted substances and their approved uses and limits are set by jurisdiction-specific food-safety and pesticide regulation, by the product label, and by the facility's validated food-safety plan.",
    'A sanitiser in wash water is a water-treatment control, not a produce-disinfection step; washing achieves only a limited reduction in microbial load on produce and cannot be relied on to make contaminated produce safe.',
    'Contamination that has internalised into the tissue, through infiltration or in the field, is beyond the reach of washing, sanitising, and inspection alike.',
    'Wash water that is not fit for purpose contaminates the crop uniformly; source-water suitability, testing, and protection are prerequisites, not refinements.',
  ],
  relevantStandards: [
    { type: 'commodity-grade', slug: 'codex-standards-overview' },
    { type: 'commodity-grade', slug: 'unece-fresh-produce-standards' },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'carrot' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'tomato' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'onion-and-garlic-curing' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Water use, washing, and hygiene in fresh produce post-harvest handling',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Microbiological hazards associated with fresh produce and wash water',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Wash-water management and infiltration research in produce handling',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Produce wash-water sanitation and packhouse hygiene context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Permitted wash-water treatments, water-quality requirements, and discharge rules are jurisdiction-specific, and the availability of suitable water varies enormously between producing regions.',
  limitations: [
    'No sanitiser, concentration, contact time, water-quality limit, or temperature differential is given here; all are set by jurisdiction-specific regulation, product labels, and validated facility food-safety plans.',
    'Washing is a cleaning operation with food-safety consequences, not a food-safety kill step; it does not sterilise, and no produce wash should be treated as one.',
    'Whether a commodity should be washed at all is commodity-specific: cured bulbs, some nuts, and produce destined for long dry storage are damaged by wetting.',
    "This entry describes principles and hazards, not procedures; wash-system design, monitoring, and corrective action belong to the facility's own validated plan and the applicable regulation.",
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Washing and Sanitising: Water as a Vector',
    description:
      'Why wash water is the most efficient contamination route in a packhouse, why the sanitiser treats the water and not the produce, and what infiltration defeats.',
    keywords: [
      'produce washing',
      'wash water sanitation',
      'dump tank',
      'water infiltration produce',
      'packhouse hygiene',
    ],
  },
  structuredData: { article: true },
};
