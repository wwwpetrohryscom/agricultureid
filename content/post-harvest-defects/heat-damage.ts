import type { PostHarvestDefectContent } from '@/types/content';

export const heatDamage: PostHarvestDefectContent = {
  id: 'post-harvest-defect-heat-damage',
  slug: 'heat-damage',
  contentType: 'post-harvest-defect',
  title: 'Heat Damage',
  defectClass: 'chemical',
  alternativeNames: [
    'Heat-damaged kernels',
    'Thermal damage',
    'Scorching',
    'Dryer damage',
    'Storage heating damage',
  ],
  category: 'Post-harvest defect',
  subcategory: 'Thermal and chemical injury',
  summary:
    'Heat damage is thermal injury to grain and seed caused either by over-rapid or over-hot drying or by self-heating in store, expressed as darkening, scorching, and loss of germination and processing quality; its two most important effects — loss of viability and loss of processing quality — occur before any discolouration is visible, so a sound-looking lot can already be damaged.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Grain and oilseed are biological material, and the proteins, enzymes, starches, and lipids that make them useful are all heat-labile. Heat damage arises when a lot is taken beyond what its constituents tolerate, and it reaches that point by two quite different routes. The first is drying: air that is too hot, or drying that is too rapid for the moisture to leave the kernel in step with the heat entering it, cooks the outside and stresses the structure. The second is self-heating in store, which needs no dryer at all — moist grain respires, respiration releases heat, mould and insect activity release more, and because a grain mass is an excellent insulator the heat does not escape. Warmth accelerates the respiration that produced it, and a hot spot develops that reinforces itself.',
    },
    {
      type: 'paragraph',
      text: 'The defect is conventionally recognised by appearance — darkened, scorched, caramelised, or roasted-looking kernels — and that convention is the problem. Discolouration is a late symptom. Germination is lost, and malting, milling, baking, and oil quality are degraded, at thermal exposures that leave the kernel looking entirely normal. A lot can therefore pass a visual assessment, be sold as sound, and be worthless as seed or unusable for malting, with the damage already complete and irreversible. For the end uses where heat damage matters most, the appearance of the lot is the last thing to change and the least informative thing to look at.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value:
        'Chemical — thermal injury to the constituents of grain, seed, and oilseed',
    },
    {
      label: 'Two distinct routes',
      value:
        'Over-hot or over-rapid drying, and self-heating in store from respiration plus mould and insect activity — different causes, indistinguishable in the kernel',
    },
    {
      label: 'Self-heating is self-reinforcing',
      value:
        'Moist grain respires and releases heat; a grain mass insulates, so the heat accumulates, accelerating the respiration that produced it into a developing hot spot',
    },
    {
      label: 'Visible symptoms',
      value:
        'Darkening and dull colour, scorched or blistered surfaces, caramelised or roasted appearance, and in severe cases charring and caking of the mass',
    },
    {
      label: 'Invisible symptoms come first',
      value:
        'Loss of germination and loss of milling, malting, baking, and oil quality occur before any visible discolouration',
      note: 'A visually sound lot can already be dead as seed and degraded for processing',
    },
    {
      label: 'End use decides sensitivity',
      value:
        'Seed and malting uses, which depend on a living embryo, are damaged by exposures a feed buyer would never detect',
    },
    {
      label: 'Where the limits are set',
      value:
        'The applicable drying air-temperature limit depends on the commodity, its moisture, and its intended end use, and is set by sourced guidance and equipment manuals',
      note: 'Heat damage is also a defined factor in some grade standards; this entry states no temperature, rate, or duration',
    },
  ],
  sections: [
    {
      id: 'two-routes',
      heading: 'Two routes to the same kernel',
      body: [
        {
          type: 'paragraph',
          text: 'Dryer damage is an event. Air above what the commodity tolerates, or a drying rate that pulls moisture from the surface faster than it can migrate from the interior, imposes a thermal and mechanical stress on the kernel: proteins denature, the embryo is killed, starch and oil are altered, and the kernel may case-harden, stress-crack, or scorch. It is bounded in time, it is attributable to a machine and a setting, and it affects the material that passed through the dryer while that setting applied.',
        },
        {
          type: 'paragraph',
          text: 'Self-heating is a process. Grain that is too moist for its storage duration continues to respire, and so do the moulds and insects its moisture permits. Respiration is exothermic. A bulk of grain conducts heat poorly, so what is released stays where it was released, and the warming mass respires faster — which releases more heat. The loop tightens on itself. A hot spot develops, usually where the moisture was highest or the aeration worst: near a wall, under a leak, at the peak of a bin, in a pocket of fines that resists airflow. Left alone it progresses through musty, caking, darkening grain to severely damaged grain, and in extreme cases to charring. It is a storage-management failure spread over time and hidden inside a bulk that looks, from the top, exactly like grain.',
        },
        {
          type: 'paragraph',
          text: 'Once the kernel is damaged, the two routes are not distinguishable in it. Darkened, scorched grain from a dryer running too hot and darkened, scorched grain from a hot spot in a bin present the same way, because the same constituents were degraded by the same physics. The distinction between them is made by records — drying logs, moisture at loading, aeration and temperature monitoring history, where in the store the damage was concentrated — and never by appearance.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Self-heating is a hazard, not only a quality problem',
          text: "A self-heating mass involves real dangers: elevated temperatures, dust, spore loads, oxygen-depleted or otherwise hazardous atmospheres, unstable and bridged material that can collapse without warning, and in severe cases fire. This entry gives no entry, inspection, or intervention procedure. Suspected self-heating is a matter for the facility's own written procedures, its emergency arrangements, and qualified professionals — not for improvisation.",
        },
      ],
    },
    {
      id: 'invisible-first',
      heading: 'What is lost before anything shows',
      body: [
        {
          type: 'paragraph',
          text: 'The single most important fact about heat damage is that its ordering is counterintuitive. The properties that fail first are the ones no one can see, and the property that fails last — colour — is the one the defect is named and graded by. Germination depends on an intact living embryo, which is among the most thermally fragile things in the kernel; it can be destroyed at exposures that leave every visible characteristic of the grain unchanged. Malting depends on that same embryo germinating on demand and on an enzyme complement that heat degrades. Baking quality depends on proteins whose functionality is diminished by thermal exposure long before they are visibly altered. Oil quality in oilseeds is degraded by heat that changes nothing about how the seed looks in the hand.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Germination and vigour',
              description:
                'Lost first, and lost invisibly. A lot can be commercially normal in appearance and dead as seed; the only way to know is a germination test, not an inspection.',
            },
            {
              term: 'Malting quality',
              description:
                'Requires a living, uniformly germinating embryo and an intact enzyme complement, both degraded by thermal exposure that produces no visible cue.',
            },
            {
              term: 'Milling and baking quality',
              description:
                'Protein functionality and starch behaviour shift with heat exposure; the flour performs differently from a grain that looked no different.',
            },
            {
              term: 'Oil quality in oilseeds',
              description:
                'Heat promotes changes in the oil and its stability that are measured in the laboratory and are not apparent in the intact seed.',
            },
            {
              term: 'Colour and scorching',
              description:
                'The visible endpoint, and the last to appear. By the time a lot is visibly heat-damaged, the invisible losses are long complete and severe.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A sound-looking lot can already be damaged',
          text: 'Loss of germination and loss of processing quality precede visible discolouration. Absence of darkening is not evidence that a lot was dried or stored within tolerance, and a lot that passes a visual assessment may be unusable for seed or malting. Those properties are established by testing them, not by looking at the grain.',
        },
      ],
    },
    {
      id: 'confusion',
      heading: 'Why darkening does not identify heat',
      body: [
        {
          type: 'paragraph',
          text: 'Grain darkens for many reasons, and heat is only one of them. Mould growth discolours kernels. Weather in the field stains and dulls them. Grain that stood too long before harvest, or matured under stress, darkens through ordinary senescence. Kernels wetted and re-dried in store are discoloured without ever having been hot. And varietal and lot-to-lot colour differences are wide enough that a comparison against an expectation is not a measurement. The characteristic that identifies heat damage in a grade standard is a defined factor assessed against defined reference material by trained inspectors — it is not the general impression that a lot looks dark.',
        },
        {
          type: 'list',
          items: [
            'Mould discolouration — both darken kernels and both are associated with moist, poorly managed grain; they occur together for the same reasons, so the shared cue of dark kernels cannot separate a heated lot from a mouldy one, and a lot is frequently both.',
            'Weather and field staining — rain, dew cycling, and pre-harvest weathering darken and dull grain before it ever reaches a dryer, giving discolouration with no thermal history at all.',
            'Senescent darkening — grain that matured under stress or stood late darkens as a normal end-of-development change, sharing the appearance without sharing the cause.',
            'Dryer damage versus self-heating — the two are indistinguishable in the kernel, because the same constituents were degraded by the same physics; only records separate them.',
            'Varietal and lot colour variation — normal differences between cultivars and lots are wide, so "darker than expected" is a comparison to an assumption, not evidence of heat.',
          ],
        },
      ],
    },
    {
      id: 'mould-question',
      heading: 'The mould question a heated lot carries',
      body: [
        {
          type: 'paragraph',
          text: 'Self-heating and mould growth are not alternative explanations for a warm bin; they are companions. The moisture that permits respiration permits storage moulds, mould growth is itself exothermic and contributes to the heating, and the warm moist conditions inside a developing hot spot are close to ideal for the fungi that matter most in storage. A lot that self-heated is, on the evidence, a lot in which storage moulds had favourable conditions — so the discovery of heat damage properly raises a mould and mycotoxin question alongside it.',
        },
        {
          type: 'paragraph',
          text: "Heat damage's appearance does not answer that question, and neither does mould's. Visible mould does not establish that a mycotoxin is present: toxin production depends on the species, the substrate, and the conditions growth occurred under. More importantly, the absence of visible mould does not establish the absence of mycotoxin — toxin persists after the fungus that produced it is dead, occurs in material next to growth that was removed, distributes unevenly through a bulk, and is invisible and odourless. Cleaning, sorting, and inspection neither detect nor remove it. Presence or absence is established only by appropriate laboratory analysis on a properly drawn sample, against limits set by food-safety regulation for the specific commodity, jurisdiction, and intended use. This entry states none; EFSA and FAO publish the applicable assessment and management framework.",
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Heat damage is irreversible. A killed embryo does not recover, degraded protein does not re-fold, and a scorched kernel is not restored by anything done afterwards. Management is preventive on both routes: drying within what the commodity and its end use tolerate, and storing at a moisture and under a monitoring regime that does not permit self-heating to begin.',
        },
        {
          type: 'list',
          items: [
            'Set drying air temperature and rate against sourced guidance for the commodity and, critically, for the intended end use — seed and malting tolerate markedly less than feed, so a single dryer setting cannot serve every lot passing through it.',
            "Follow the equipment manufacturer's manual for the dryer in use; drying limits are a function of the machine and the commodity together, and no universal figure applies across either.",
            'Dry to the storage moisture the applicable sourced guidance specifies for that commodity and storage duration, since residual moisture is the fuel for self-heating.',
            'Aerate and monitor stored grain so that a developing hot spot is detected while it is a temperature reading rather than a caked, damaged mass.',
            'Attend to the places hot spots start: wet pockets, fines accumulations that resist airflow, leaks, wall condensation, and the peak of a filled bin.',
            'Load uniformly moist material where possible, since a wet pocket in an otherwise dry bulk is a self-heating focus regardless of the average moisture of the lot.',
            'Treat a heat-damage finding as a prompt to consider mould status, and refer any mycotoxin question to laboratory testing under the applicable framework.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No operating procedure is given here',
          text: "This entry describes no dryer operating steps, no bin entry, and no intervention in a heating mass. Grain facilities present hazards — engulfment, bridged and unstable material, dust, hazardous atmospheres, and fire — that are addressed by the facility's own written procedures, training, and equipment, and by qualified professionals. Nothing here substitutes for those.",
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'rapeseed' },
    { type: 'commodity', slug: 'sunflower-seed' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
  ],
  causedByConditions: [
    'Drying air temperature above what the commodity and its intended end use tolerate, the tolerance being lower for seed and malting than for feed',
    'Drying too rapidly for moisture to migrate out of the kernel in step with the heat entering it, stressing and case-hardening the grain',
    'Storing at a moisture too high for the storage duration, so respiration continues and releases heat into an insulating mass',
    'Mould and insect activity within the mass, which generate additional heat and accelerate a developing hot spot',
    'Wet pockets, fines accumulations, leaks, and wall condensation, which create localised moisture in an otherwise acceptable bulk',
    'Inadequate aeration or monitoring, which allows a hot spot to progress undetected from a temperature rise to caked and damaged grain',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  confusableWith: [
    'Mould discolouration — both darken kernels, and both arise in moist, poorly managed grain, so they occur together for the same reasons; dark kernels cannot separate a heated lot from a mouldy one, and heavily heated lots are commonly both',
    'Weather and field staining — pre-harvest rain, dew cycling, and weathering darken and dull grain before it reaches a dryer, giving the same visible cue with no thermal history whatsoever',
    'Senescent darkening — grain that matured under stress or stood late in the field darkens as a normal end-of-development change, sharing the appearance without the cause',
    'Dryer damage versus self-heating in store — indistinguishable in the kernel, since the same constituents are degraded by the same physics; the distinction is made by drying and storage records, not by looking at the grain',
    'Varietal and lot-to-lot colour variation — normal colour differences between cultivars and lots are wide enough that "darker than expected" compares a lot to an assumption rather than to evidence of heat',
    'Wetting and re-drying in store — grain discoloured by a leak or condensation and subsequently dried is darkened without ever having been hot',
  ],
  diagnosticLimitations: [
    'The most important effects precede any visible sign. Loss of germination and loss of milling, malting, baking, and oil quality occur at thermal exposures that leave the kernel looking entirely normal, so a visually sound lot can already be dead as seed and degraded for processing. Absence of discolouration is not evidence that a lot was dried or stored within tolerance.',
    'Darkening does not identify heat as the cause. Mould, weather and field staining, senescent darkening, wetting and re-drying, and ordinary varietal colour variation all produce discoloured grain, and the visible cue is shared across every one of them.',
    'Dryer damage and self-heating cannot be distinguished in the kernel — the same constituents are degraded by the same physics. Which route caused an observed injury is established by drying logs, loading moisture, and monitoring records, not by appearance.',
    "Heat damage in a grade standard is a defined factor assessed against defined reference material by trained inspectors, and is not the same thing as a general impression that a lot looks dark; a standard's determination and an informal visual judgement are not interchangeable.",
    'Self-heating damage is characteristically localised in a hot spot rather than distributed through a bulk, so a sample drawn away from the focus can be entirely sound while the lot is not; attribution depends on how the sample was drawn.',
    'Heat damage carries no information about the mould or mycotoxin status of the lot. Self-heating and mould growth co-occur, so a heated lot has an elevated mould risk — but neither the presence nor the absence of visible mould establishes whether a mycotoxin is present, which only appropriate laboratory analysis on a properly drawn sample can answer.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'commodity-grade', slug: 'usda-corn-grades' },
    { type: 'commodity-grade', slug: 'usda-soybean-grades' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Grain drying and storage principles, self-heating of moist grain, and prevention of thermal damage in storage',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Thermal damage to grain and oilseed during drying, and effects on germination and processing quality',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain drying and store management, aeration, and monitoring for developing hot spots',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment framework, and the principle that visible condition does not establish mycotoxin presence or absence',
    },
    {
      sourceId: 'irri',
      citedFor: 'Paddy and rice drying, and heat-related quality loss in rice',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global wherever grain and oilseed are dried and stored, though the balance of the two routes differs by climate: dryer damage dominates where crops are harvested wet and must be dried mechanically, while self-heating risk is governed by harvest moisture, ambient conditions, and storage duration. Grade-standard treatment of heat damage is jurisdiction-specific.',
  limitations: [
    "This entry gives no temperatures, drying rates, durations, or moisture figures. The applicable air-temperature limit depends on the commodity, its moisture, and its intended end use, and is set by sourced guidance and by the equipment manufacturer's manual for the dryer in use.",
    "No dryer operating steps, bin entry procedure, or intervention in a heating mass is described. Self-heating involves hazards including unstable material, hazardous atmospheres, dust, and fire, which are matters for the facility's written procedures and qualified professionals.",
    'Symptom descriptions are indicative only. Discolouration does not confirm heat as the cause, does not distinguish dryer damage from self-heating, and appears only after the most consequential losses have already occurred.',
    'Heat damage is irreversible; nothing described here recovers an affected lot, and this entry is not a basis for accepting, rejecting, or grading a consignment, nor a substitute for the applicable grade standard.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Heat Damage: Thermal Injury in Dried and Stored Grain',
    description:
      'Over-hot drying and self-heating in store damage grain before any darkening shows. Why germination and processing quality fail while the lot still looks sound.',
    keywords: [
      'heat damage grain',
      'heat damaged kernels',
      'self-heating grain',
      'grain drying damage',
      'germination loss',
    ],
  },
  structuredData: { article: true },
};
