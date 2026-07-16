import type { PostHarvestDefectContent } from '@/types/content';

export const storageRot: PostHarvestDefectContent = {
  id: 'post-harvest-defect-storage-rot',
  slug: 'storage-rot',
  contentType: 'post-harvest-defect',
  title: 'Storage Rot',
  defectClass: 'pathological',
  alternativeNames: ['Storage decay', 'Store rot', 'Stored-product rot'],
  category: 'Post-harvest defect',
  subcategory: 'Pathological disorder',
  summary:
    'Storage rot is a collective term for the microbial breakdown of stored grain and produce by a large number of unrelated fungi and bacteria; it names an outcome rather than an organism, the responsible agent cannot be read from the rot itself, and neither the presence nor the absence of visible decay settles whether a mycotoxin is present.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Storage rot is not a disease. It is a category — a convenient label for what happens when a stored commodity is broken down by micro-organisms during the period it is meant to be held stable. The organisms gathered under the label have almost nothing in common with one another: Penicillium and Botrytis on fruit, Aspergillus and Fusarium in grain, Geotrichum on citrus, Erwinia and other soft-rot bacteria on tubers and bulbs, and a long tail of opportunists that arrive on tissue already failing. They differ in biology, in the conditions they need, in the commodities they attack, and in whether they present any toxicological question at all. What unites them is only the observation that the lot has rotted in store.',
    },
    {
      type: 'paragraph',
      text: 'That distinction is the whole point of this entry, because the label invites a mistake. A record that says "storage rot" describes a result and asserts nothing about a cause, and the temptation to treat the two as the same thing produces two failures at once: the wrong intervention, because the agent was never identified; and a false sense of resolution on food safety, because rotting is assumed to be the visible face of contamination when the relationship between what can be seen and what is present is unreliable in both directions. Storage rot is where that misconception is most often formed, so it is stated here in full rather than deferred to the individual rot entries.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value:
        'Pathological — an umbrella outcome produced by many unrelated fungi and bacteria, not a single disease',
    },
    {
      label: 'What the term names',
      value:
        'An outcome, not an organism: the causal agent cannot be determined from the rot',
      note: 'A "storage rot" record carries no identification and should not be read as one',
    },
    {
      label: 'Organisms involved',
      value:
        'Field fungi carried in from the crop, storage fungi that establish in store, soft-rot bacteria, and secondary colonisers of already-damaged tissue',
    },
    {
      label: 'Governing conditions',
      value:
        'Moisture, temperature, and duration act together rather than separately — none of the three sets the risk on its own',
      note: 'Safe holding conditions are commodity- and duration-specific and are set by sourced storage guidance; this entry gives no values',
    },
    {
      label: 'Mycotoxin relationship',
      value:
        'Some fungi found in rotting lots can produce mycotoxins under some conditions — rotting does not confirm a toxin, and sound appearance does not exclude one',
      note: 'No limits or thresholds appear here; see EFSA and FAO for the applicable framework',
    },
    {
      label: 'Entry routes',
      value:
        'Wounds, insect damage, senescing or over-mature tissue, and infections established in the field before the lot ever entered store',
    },
    {
      label: 'Where the limits are set',
      value:
        'Any applicable mycotoxin limit is jurisdiction-, commodity-, and use-specific and is fixed by food-safety regulation, never by inspection of the lot',
    },
  ],
  sections: [
    {
      id: 'outcome-not-organism',
      heading: 'A name for a result, not for a cause',
      body: [
        {
          type: 'paragraph',
          text: 'The organisms capable of rotting a stored commodity are drawn from across the fungal and bacterial world, and they reach the lot by routes that have no relation to one another. Some are field fungi that infected the crop while it was still growing and travelled into store inside apparently sound tissue. Some are storage fungi that were never a field problem and establish only under the conditions a store creates. Some are wound pathogens that needed a handling injury to get in. Some are soft-rot bacteria that need free water and a break in the skin. And a large share of what is finally visible on a rotted unit is secondary — organisms that colonised tissue another agent had already killed.',
        },
        {
          type: 'paragraph',
          text: 'Because these routes differ, the interventions differ. A rot that entered as a latent field infection is not prevented by store hygiene; a rot that followed a bruise is not prevented by drying; a rot driven by grain moisture is not prevented by cooling a fruit store. The label offers no guidance on which of these applies, and a decision made from the label alone is a guess dressed as a diagnosis. Establishing what actually caused a rot means investigating the lot: its history, its handling, its condition on intake, and — where it matters — laboratory identification of the organism rather than an inference from the lesion.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The rot does not name the organism',
          text: 'Naming the fungus or bacterium from the appearance of decayed tissue is not diagnosis. Different organisms converge on similar presentations, secondary colonisers routinely dominate the visible surface, and the initiating agent may be undetectable by the time the lot is examined. Identification requires culture or molecular confirmation by a competent laboratory.',
        },
      ],
    },
    {
      id: 'mycotoxin',
      heading: 'Rotting and mycotoxin are two separate questions',
      body: [
        {
          type: 'paragraph',
          text: 'The most consequential error made about stored commodities is the assumption that the eye can answer the safety question. It cannot, and the reason is that the link between visible decay and mycotoxin contamination fails in both directions. In one direction the failure is merely wasteful: a conspicuously rotted lot may carry no mycotoxin at all, because whether a toxin was produced depends on which organisms were involved, on the substrate they grew in, and on the conditions the colony developed under. Many rots are caused by organisms that produce no mycotoxin whatever. Rotting is not, by itself, evidence of contamination.',
        },
        {
          type: 'paragraph',
          text: 'The other direction is the one that causes harm. A lot that looks entirely clean — no visible mould, no off odour, nothing an inspector could point to — may still carry mycotoxin. There are four independent reasons, and each is sufficient on its own. Mycotoxins are chemically stable and persist in the commodity long after the fungus that made them has died or been removed, so a lot cleaned of mould is not thereby cleaned of toxin. Toxin diffuses into tissue surrounding a lesion, so removing the visibly affected part leaves contaminated material behind in what looks sound. Contamination is distributed unevenly through a lot, so a clean-looking sample says little about the lot it came from. And the toxins themselves are invisible, odourless, and tasteless — there is no sensory cue to find.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No visible mould does not mean no mycotoxin',
          text: 'Sorting, cleaning, and washing improve the appearance of a lot and reduce the organisms present. None of them detects a mycotoxin and none of them removes one from tissue that has already absorbed it. These are quality and spread-control operations; recording them as food-safety measures misrepresents what they do. Whether a mycotoxin is present, and at what concentration, is established only by appropriate laboratory analysis on a properly drawn representative sample. Any applicable limit is set by food-safety regulation for the specific commodity, jurisdiction, and intended use — this entry states none.',
        },
        {
          type: 'paragraph',
          text: 'What follows practically is that rot control and mycotoxin control overlap without being the same programme. Managing moisture, temperature, insects, and damage suppresses the conditions under which toxigenic fungi grow, and that work is worth doing on its own merits — prevention is where the leverage genuinely is. But it does not substitute for testing, and a lot cannot be released on the basis that it looks acceptable. Sampling is itself the hard part: because contamination is patchy, an unrepresentative sample can return a reassuring result from a lot that is not acceptable, which is why sampling plans are specified rather than improvised. EFSA and FAO publish the assessment and management framework; handlers should work to that and to their national regulation, not to appearance.',
        },
      ],
    },
    {
      id: 'conditions',
      heading: 'What governs it, without numbers',
      body: [
        {
          type: 'paragraph',
          text: 'Storage rot is governed by moisture, temperature, and time, and the essential point is that they interact rather than add. Moisture determines whether micro-organisms can grow at all; what matters biologically is the water available to the organism, which is a relationship between the commodity and the air around it rather than a property of either alone. Temperature sets how fast growth proceeds once moisture permits it, and also shifts which organisms are favoured — cold does not simply slow every rot equally, it selects for the ones that tolerate it. Duration is the multiplier: conditions that are harmless over a short hold become progressively less so as the hold extends, which is why a store that performed well over one season may fail over a longer one.',
        },
        {
          type: 'list',
          items: [
            'Moisture and temperature cannot be assessed separately: a moisture condition that is safe when cool may not be when warm, and the reverse.',
            'Duration converts a marginal condition into a failing one; the intended length of hold is part of the specification, not an afterthought.',
            'Stored bulk is not uniform — moisture migrates and temperature gradients form, so a lot can develop a rotting pocket while average readings look acceptable.',
            'Insect activity and mechanical damage generate both entry wounds and localised heat and moisture, coupling pest control to rot control.',
            'Material entering store already infected or already damaged sets a ceiling on what any storage condition can achieve.',
          ],
        },
        {
          type: 'paragraph',
          text: 'No safe moisture content, temperature, or holding period is given here, and none should be inferred. Those values are specific to the commodity, to the intended duration of storage, to the climate the store sits in, and to the standard being worked to; a figure lifted from one context and applied to another is a defect rather than a fact. The applicable conditions are set by sourced storage guidance for the specific commodity — consult FAO, AHDB, USDA-ARS, and the relevant national or extension references before setting a store.',
        },
      ],
    },
    {
      id: 'grain-and-produce',
      heading: 'Two different worlds under one label',
      body: [
        {
          type: 'paragraph',
          text: 'The term spans two storage problems that share a name and little else. In stored grain, oilseeds, and pulses, the commodity is dry and biologically quiet, and rot is a question of whether it was dried adequately and kept dry — driven by moisture entering or migrating within the bulk, by respiring insects and their damage, and by fungi that are storage organisms rather than field ones. It is here that the mycotoxin question is most prominent, because several of the fungi that colonise stored grain are toxigenic. The relevant levers are drying, cleaning to remove damaged and infected material, sound store management, and where appropriate sealed systems.',
        },
        {
          type: 'paragraph',
          text: 'In stored fruit, roots, tubers, and bulbs, the commodity is alive, wet, and respiring, and rot is a question of wounding, senescence, and temperature. Infection follows handling injury or arrives as a field infection that was latent at harvest; the tissue defends itself while it is sound and stops doing so as it ages. The levers are gentle handling, wound healing where the commodity allows it, prompt and consistent cooling, removal of decaying units, and appropriate packaging. Assuming that what is true of a grain store is true of a fruit store — or the reverse — is a recurring source of error, and the single label is part of why.',
        },
      ],
    },
    {
      id: 'confusion',
      heading: 'Why it cannot be resolved by looking',
      body: [
        {
          type: 'paragraph',
          text: 'Every rot in this section of the reference converges on the same early appearance. Before any sporulation develops, a lesion caused by Penicillium, by Botrytis, by Geotrichum, by Colletotrichum emerging from latency, or by a soft-rot bacterium presents as soft, watery, darkening tissue, and at that stage they are not separable by eye. Sporulation, when it eventually arrives, is a weaker cue than it appears: its colour shifts as a lesion ages, varies with the substrate, and is frequently produced by an organism that arrived after the rot was already established. The most visible fungus on a decayed unit is often not the one that caused the decay.',
        },
        {
          type: 'list',
          items: [
            'Early lesions of unrelated rots are indistinguishable — soft watery decay is a shared endpoint, not a signature.',
            'Secondary colonisers overgrow failing tissue and dominate what is seen, masking the initiating organism.',
            'Latent field infections express in store and are routinely misrecorded as storage failures the handler caused.',
            'Physiological disorders and freezing damage produce water-soaked tissue that is then colonised, so the rot obscures a non-pathological origin.',
            'Confident identification requires culture or molecular confirmation on appropriate material; a name assigned from a photograph, a carton, or a store floor is not a diagnosis.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
    { type: 'commodity', slug: 'fresh-apples' },
  ],
  causedByConditions: [
    'Moisture, temperature, and holding duration acting in combination to permit microbial growth in the stored commodity',
    'Moisture migration and temperature gradients within a bulk, creating local pockets that support rot while average readings appear acceptable',
    'Wounds from harvest, handling, threshing, or grading that expose tissue to organisms already present in the environment',
    'Latent infections established in the field before harvest, carried into store inside apparently sound material',
    'Insect activity in stored grain, which damages kernels and generates localised heat and moisture',
    'Damaged, immature, over-mature, or already-infected material admitted at intake, which no storage condition can fully compensate for',
    'Extended holding beyond the duration the storage conditions were specified for',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  confusableWith: [
    'Blue mould — a Penicillium wound rot that is one specific member of this category; its early soft watery lesion is not separable from any other rot, and the blue-green sporulation that would suggest it develops only later',
    'Grey mould rot — a Botrytis rot within this category; it shares the soft watery decay of every other rot in its early stage, and its grey-brown sporulation arrives too late to inform an intake decision',
    'Sour rot — a Geotrichum decay within this category whose fermented odour is its most distinctive cue, yet odour is subjective, unrecorded, and shared with other fermentative spoilage',
    'Crown rot of banana — a rot of the dehanding wound caused by a fungal complex; it is one specific case of this label, and calling it storage rot conceals that no single organism is responsible',
    'Post-harvest anthracnose — a Colletotrichum rot expressing from latent field infection; recording it as storage rot misattributes a pre-harvest problem to the store',
    'Soft-rot bacteria in tubers and bulbs — bacterial breakdown gives soft, wet, collapsing tissue closely resembling fungal decay, and the two are not separated by appearance',
    'Physiological disorders followed by decay — chilling injury, freezing injury, and internal browning weaken tissue that is then colonised, so a rot is recorded and the predisposing disorder is never examined',
  ],
  diagnosticLimitations: [
    '"Storage rot" identifies no organism. It is a description of an outcome produced by many unrelated fungi and bacteria, and the causal agent cannot be determined from the rot; a record using this term should never be read as a diagnosis.',
    'Visible rotting does not establish that a mycotoxin is present. Many rots are caused by organisms that produce no mycotoxin at all, and toxin production depends on the species involved, the substrate, and the conditions the colony developed under.',
    'Critically, the absence of visible rot or mould does not establish the absence of mycotoxin. Toxin is chemically stable and persists after the fungus is dead or removed; it occurs in sound-looking tissue adjacent to lesions that were cut out; it is distributed unevenly through a lot; and it is invisible, odourless, and tasteless. No inspection, sorting, cleaning, or washing step detects or removes it. Presence and concentration are established only by appropriate laboratory analysis on a properly drawn representative sample, against limits set by food-safety regulation (see EFSA and FAO).',
    'Early lesions of unrelated rots are visually identical — soft, watery, darkening tissue is a shared endpoint rather than a signature — and sporulation colour, when it eventually appears, shifts with lesion age and substrate and is a weak discriminator.',
    'Secondary colonisers routinely overgrow tissue that another organism killed, so the fungus dominating the visible surface is frequently not the one that initiated the rot.',
    'A rot appearing in store did not necessarily originate there: latent field infections, harvest wounds, and physiological damage all express as decay during storage, and the visible endpoint carries no information about when or where the lot was compromised.',
    'Bulk-average moisture and temperature readings do not exclude rot: gradients and moisture migration create local conditions that differ from the recorded average, and a rotting pocket can develop in a store whose instrumentation reads normally.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  glossaryTerms: ['inoculum'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Storage of grain and perishable produce, deterioration in store, and mycotoxin prevention and management in stored commodities',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment framework, sampling considerations, and the separation of visible mould from contamination as distinct questions',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain store management, moisture and temperature interaction, and storage fungi',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Post-harvest decay of stored fruit, roots, tubers, and bulbs',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Post-harvest decay identification and store management for fresh produce',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Every stored commodity is subject to microbial deterioration wherever it is held, though which organisms dominate depends on the commodity, the climate, and the store type; mycotoxin limits, sampling plans, and testing requirements are jurisdiction-specific and set by national or regional food-safety regulation.',
  limitations: [
    'This entry gives no moisture, temperature, or duration values and no mycotoxin limits. Safe storage conditions are commodity-, climate-, duration-, and standard-specific, and applicable mycotoxin limits are set by food-safety regulation; consult FAO, AHDB, USDA-ARS, EFSA, and national regulators.',
    'Because the term covers many unrelated organisms, nothing here identifies the cause of any particular rot; the entry describes a category and is not a diagnostic key.',
    'Nothing here supports assessing the safety of a lot by appearance. Rotting does not confirm contamination, and a sound appearance does not exclude it; only appropriate laboratory analysis on a properly drawn sample can answer that question.',
    'No fungicide, fumigant, treatment, dose, or store-entry procedure is described here; chemical control and store operation are governed by product labels, national registration, and facility safety procedures, and require qualified advice.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Storage Rot: An Outcome, Not an Organism',
    description:
      'Storage rot names an outcome, not an organism. Why the causal agent cannot be read from the decay, and why clean-looking grain can still carry mycotoxin.',
    keywords: [
      'storage rot',
      'stored grain decay',
      'post-harvest decay',
      'storage fungi',
      'mycotoxin',
    ],
  },
  structuredData: { article: true },
};
