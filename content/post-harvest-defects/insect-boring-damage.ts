import type { PostHarvestDefectContent } from '@/types/content';

export const insectBoringDamage: PostHarvestDefectContent = {
  id: 'post-harvest-defect-insect-boring-damage',
  slug: 'insect-boring-damage',
  contentType: 'post-harvest-defect',
  title: 'Insect Boring Damage',
  defectClass: 'entomological',
  alternativeNames: [
    'Insect-damaged kernels',
    'Bored grain',
    'Exit-hole damage',
    'Weevil holes',
  ],
  category: 'Post-harvest defect',
  subcategory: 'Storage insect damage',
  summary:
    'Insect boring damage is the tunnelling, hollowing, and holing of stored grain, pulses, and nuts by storage insects such as weevils, borers, and bruchids; much of it develops entirely inside the kernel and is invisible from outside, and a hole in a kernel identifies neither what made it nor whether the infestation is still alive.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Storage insects feed on the kernel itself rather than on the growing plant, and the damage they leave is the most familiar entomological defect of dry stored commodities. Weevils, grain borers, and bruchid beetles bore into wheat, maize, rice, sorghum, beans, cowpeas, chickpeas, lentils, groundnuts, and tree nuts, excavating the endosperm or cotyledon and leaving tunnels, hollowed kernels, and characteristic holes where an adult has emerged. The loss is simultaneously in weight, in germination, in milling and processing quality, and in grade — and it is accompanied by the excreta, cast skins, and dust that make an infested lot objectionable well beyond the material the insects actually consumed.',
    },
    {
      type: 'paragraph',
      text: 'The difficulty with boring damage is that the evidence and the event are separated in both space and time. The most destructive storage insects are internal feeders: the egg is laid in or on the kernel, and the entire larval development happens inside it, out of sight, with no external sign until the adult chews its way out. A sample can look clean and be substantially infested. And once a hole does appear, it is a record of an insect that was there — not proof of an insect that still is. Neither the presence of a hole nor the absence of one answers the question that matters, which is whether this lot is infested now.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value:
        'Entomological — feeding damage by storage insects in dry stored commodities',
    },
    {
      label: 'Principal groups involved',
      value:
        'Weevils, grain and grain-borer beetles, and bruchid beetles of pulses; moth larvae also bore, feeding more often at the germ and surface',
    },
    {
      label: 'Internal versus external feeders',
      value:
        'Internal feeders develop wholly inside the kernel and leave no external sign until emergence; external feeders damage the surface, germ, and broken material and are more readily seen',
      note: 'This distinction, not the hole, is what determines whether damage is detectable by eye',
    },
    {
      label: 'What an exit hole indicates',
      value:
        'That an insect completed development in that kernel and left — it does not identify the species, and does not establish that the infestation is current',
    },
    {
      label: 'Visible cleanliness',
      value:
        'A sample with no visible holes can carry a substantial hidden infestation of immature stages inside apparently sound kernels',
    },
    {
      label: 'Accompanying signs',
      value:
        'Frass, cast skins, webbing, dust, live or dead insects, and localised warming or caking of the grain mass',
    },
    {
      label: 'Where the tolerance is set',
      value:
        'Any allowance for insect-damaged kernels is commodity- and standard-specific and is set by the applicable grade standard and food-safety regulation, not by inspection judgement',
      note: 'This entry states no tolerance; see the relevant grade standard and FAO storage guidance',
    },
  ],
  sections: [
    {
      id: 'how-it-develops',
      heading: 'How boring damage develops',
      body: [
        {
          type: 'paragraph',
          text: 'Storage insects divide, usefully, into those that develop inside the kernel and those that do not. Internal feeders — the grain weevils, the grain borers, and the bruchids of pulses — place the egg in or against the kernel and seal it in. The larva hatches into its food supply and eats outward from the centre, so all of its development, all of its damage, and all of its growth occur within a kernel whose outside remains intact and normal-looking. Only the emerging adult breaks the surface, and by then the kernel is hollow and the next generation is already established elsewhere in the lot. External feeders, by contrast, work on the surface, the germ, and broken or already-damaged material, and are correspondingly easier to detect.',
        },
        {
          type: 'paragraph',
          text: 'This matters because it inverts the usual relationship between inspection and damage. For most defects, looking harder finds more. For internal feeders, looking harder finds only what has already emerged — the completed generations — while the current, active, growing infestation is by definition invisible. The lot is judged on the insects that have finished with it, not on the insects that are eating it now. Damage also compounds: feeding raises localised moisture and temperature within the grain mass, which favours further insect development and mould growth, so an infestation that begins in one part of a bulk does not stay proportionate to its starting point.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Absence of holes is not absence of infestation',
          text: 'A visually clean sample can be substantially infested with immature stages inside apparently sound kernels. Boring damage becomes visible when insects emerge, which is late. Judging a lot free of storage insects because no holes are seen is a systematic error, not a conservative one.',
        },
      ],
    },
    {
      id: 'reading-a-hole',
      heading: 'What a hole does and does not tell you',
      body: [
        {
          type: 'paragraph',
          text: 'Insect exit holes and mechanical punctures are routinely confused, and the cues used to separate them are weaker than their confident use suggests. An insect exit hole tends to be round and clean-edged, and is typically associated with internal tunnelling, a hollowed or partly consumed interior, and frass. Mechanical damage from threshing, augering, or handling tends to produce more irregular breaks, splits, and chips. These tendencies are real, and they are suggestive. They are not diagnostic.',
        },
        {
          type: 'list',
          items: [
            'Hole shape and size vary with the species, the life stage that made it, and the commodity — a "typical" round exit hole is a generalisation across insects that do not all behave the same way.',
            'Mechanical damage from threshing, conveying, and handling can produce round or round-seeming perforations that mimic exit holes, particularly in pulses and in kernels that were already weakened.',
            'Tunnelling and frass strengthen an insect interpretation, but a kernel can be both mechanically damaged and insect-damaged, and one route of injury commonly invites the other.',
            'Different species produce indistinguishable holes in the same commodity; naming the insect from the hole is not identification, and species-level attribution requires specimens and competent entomological determination.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The second and more consequential limit is temporal. A hole is a permanent mark on an inert kernel. It persists unchanged through cleaning, transport, sale, and re-storage, and it looks exactly the same whether the insect that made it emerged last week or several handlings ago in a lot that has since been treated and is now entirely free of live insects. Old holes from a previous, now-dead infestation are indistinguishable from holes made by a thriving one. Counting holes therefore measures accumulated historical damage; it cannot establish whether an infestation is active. That question is answered by looking for the insects — live stages, by appropriate sampling and detection methods — not by looking at the kernels they left behind.',
        },
      ],
    },
    {
      id: 'what-it-costs',
      heading: 'What the damage amounts to',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Weight and substance loss',
              description:
                'The consumed endosperm or cotyledon is gone; hollowed kernels are light, and heavily bored lots lose test weight and yield disproportionately to the number of holes visible.',
            },
            {
              term: 'Germination loss',
              description:
                'Feeding at or through the germ destroys viability, so a lot intended for seed can be commercially acceptable as feed and worthless as seed.',
            },
            {
              term: 'Processing and milling quality',
              description:
                'Tunnelled kernels break during milling, shift the yield of whole to broken material, and carry dust and fragments into the product stream.',
            },
            {
              term: 'Contamination in its own right',
              description:
                'Frass, cast skins, webbing, and insect fragments accompany the feeding and are objectionable independently of the substance eaten.',
            },
            {
              term: 'Mould and moisture consequences',
              description:
                'Insect activity raises localised moisture and temperature and moves spores through the mass, so an insect-damaged lot carries a mould question that the boring damage itself does not answer.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Because these consequences are unequal across end uses, the same lot is damaged to different degrees depending on what it is for. Seed and malting uses are unforgiving of germination loss that a feed buyer would not notice. Any allowance for insect-damaged kernels in a traded lot is set by the applicable grade standard for that commodity and market, and any limit on insect fragments or extraneous matter is set by food-safety regulation. This entry states neither; consult the standard and the regulation that apply.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: "Boring damage is cumulative and irreversible: a bored kernel is not recoverable, and management is therefore about preventing infestation and limiting its development rather than about repairing an affected lot. The controls that matter act on the conditions storage insects need — access to the commodity, moisture, warmth, and time — and on the residual populations that carry infestation from one season's grain to the next.",
        },
        {
          type: 'list',
          items: [
            'Store dry: drying the commodity to the moisture the applicable sourced guidance specifies for that commodity and storage duration removes a condition storage insects and storage moulds both depend on.',
            'Clean the store and the equipment before loading, since residual grain in conveyors, pits, corners, and cracks carries the infestation into a clean lot.',
            'Clean the commodity: removing broken kernels, dust, and fines takes away the material that external feeders exploit first.',
            'Consider hermetic storage, which restricts the atmosphere available to insects within a sealed mass — an approach whose effect depends on the seal actually being maintained.',
            'Monitor for live insects by appropriate sampling and detection rather than by inspecting kernels for holes, since holes describe the past and live stages describe the present.',
            'Segregate new grain from old, and do not load fresh commodity onto residues of a previous, possibly infested, lot.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Chemical control is regulated and is not described here',
          text: 'No fumigant, insecticide, dose, exposure, or application procedure is given on this page. Chemical control of storage insects is governed by product labels and national registration, is restricted in most jurisdictions to qualified or licensed personnel, and involves hazards to people that are not addressed by anything written here. Where chemical control is contemplated, it is a matter for the label, the applicable regulation, and a qualified professional.',
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'brown-rice' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'dry-beans' },
    { type: 'commodity', slug: 'cowpeas' },
    { type: 'commodity', slug: 'chickpeas' },
    { type: 'commodity', slug: 'lentils' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'cashew-nuts' },
    { type: 'commodity', slug: 'almonds' },
    { type: 'commodity', slug: 'dried-chillies' },
  ],
  causedByConditions: [
    'Infestation carried into a lot from residual grain left in stores, pits, conveyors, and structural cracks between seasons',
    'Field infestation of the standing or drying crop that is loaded into store with the commodity, already inside apparently sound kernels',
    'Storage moisture and temperature that permit storage insects to complete development, most often where drying was incomplete or where the mass rewetted',
    'Extended storage duration, over which successive generations compound the damage from a small initial population',
    'Broken kernels, dust, and fines in an uncleaned lot, which external feeders exploit and which support population build-up',
    'Loss of seal integrity in hermetic storage, restoring the atmosphere insects need inside a mass presumed protected',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  confusableWith: [
    'Mechanical puncture from threshing, augering, or handling — both leave a perforation in the kernel, and the shared cue of "a hole" does not separate them; the tendency of insect holes to be round and of mechanical damage to be irregular is suggestive only, and mechanical damage can mimic an exit hole outright',
    'Old, inactive boring damage — holes from a previous infestation that is now entirely dead are visually identical to holes from a live one, so the shared cue of a hole cannot date the event or establish that anything is alive',
    'Damage by a different storage insect species — different species leave indistinguishable holes in the same commodity, so a hole supports "an insect" and never "this insect"',
    'External-feeder and moth damage — surface grazing, germ feeding, and webbing arise from different insects with different implications, but present in the same lot alongside boring damage and are commonly recorded together as one defect',
    'Broken and chipped kernels from handling — heavily tunnelled kernels shatter in conveying, so what is finally seen is breakage whose insect origin has been destroyed along with the evidence',
    'Rodent or bird damage — gnawing and pecking also remove substance from grain, on a coarser scale, and are a different and separately regulated contamination matter',
  ],
  diagnosticLimitations: [
    'A hole does not identify what made it. Insect exit holes tend to be round and clean-edged with internal tunnelling and frass, and mechanical punctures tend to be irregular, but these are tendencies, not diagnoses: hole character varies with species, life stage, and commodity, and threshing and handling damage can mimic an exit hole closely.',
    'Much boring damage is internal and invisible. Internal feeders develop entirely inside the kernel, which looks sound from outside until the adult emerges, so a visually clean sample can carry a substantial infestation. Absence of holes is not absence of infestation.',
    'A hole is evidence that an insect was there, not that it is still there. Holes persist unchanged through cleaning, transport, and treatment, and old holes from a dead infestation are indistinguishable from those of an active one; hole counts cannot establish whether an infestation is current.',
    'Species cannot be determined from the damage. Different storage insects produce indistinguishable holes and tunnels in the same commodity; identification requires specimens and competent entomological determination, not inspection of kernels.',
    'Damage counts on a sample describe the sample, not the lot. Storage insect infestation is characteristically uneven within a bulk, concentrating in hot spots and near surfaces, so attribution to the lot depends on how the sample was drawn.',
    'Boring damage says nothing about the mould or mycotoxin status of the lot. Insect activity raises localised moisture and temperature and moves spores, so an insect-damaged lot carries a separate mould question that only appropriate laboratory analysis on a properly drawn sample can answer.',
  ],
  connections: [{ type: 'pest', slug: 'weevils' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'pest', slug: 'weevils' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Storage insect damage to grain and pulses, and prevention through drying, store hygiene, and hermetic storage',
    },
    {
      sourceId: 'cabi',
      citedFor:
        'Biology and host range of stored-product weevils, grain borers, and bruchid beetles',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Stored-product insect behaviour, internal feeding, and detection of hidden infestation in grain',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain store management, monitoring for storage insects, and store hygiene between seasons',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global wherever dry commodities are stored, though the species mix differs markedly by climate: some destructive grain borers and bruchids are principally tropical and subtropical, while grain weevils are cosmopolitan in stores. Chemical control options and any grade tolerance for insect-damaged kernels are jurisdiction-specific.',
  limitations: [
    'This entry gives no tolerances, damage thresholds, moisture figures, or incidence values. Any allowance for insect-damaged kernels is commodity- and standard-specific and is set by the applicable grade standard; any limit on insect fragments is set by food-safety regulation.',
    'No fumigant, insecticide, dose, exposure period, or treatment procedure is described. Chemical control of storage insects is governed by product labels and national registration and requires qualified or licensed personnel.',
    'Symptom descriptions are indicative only. They do not confirm a cause, do not identify a species, and do not distinguish an active infestation from a historical one.',
    'Boring damage is irreversible; nothing described here recovers a damaged lot, and this entry is not a basis for accepting, rejecting, or valuing a consignment.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Insect Boring Damage: Holes That Do Not Name a Cause',
    description:
      'Exit holes and tunnelling in stored grain, pulses, and nuts. Why a hole cannot name what made it, or say whether the infestation is still alive.',
    keywords: [
      'insect boring damage',
      'insect damaged kernels',
      'storage insect damage',
      'weevil damage grain',
      'hidden infestation',
    ],
  },
  structuredData: { article: true },
};
