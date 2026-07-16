import type { PostHarvestDefectContent } from '@/types/content';

export const offOdour: PostHarvestDefectContent = {
  id: 'post-harvest-defect-off-odour',
  slug: 'off-odour',
  contentType: 'post-harvest-defect',
  title: 'Off-Odour',
  defectClass: 'chemical',
  alternativeNames: [
    'Off-odor',
    'Taint',
    'Foreign odour',
    'Musty odour',
    'Off-smell',
  ],
  category: 'Post-harvest defect',
  subcategory: 'Sensory defect',
  summary:
    'Off-odour is any foreign, musty, sour, fermented, rancid, or chemical smell in a commodity; it is a sensory attribute rather than a measurement, it is a symptom shared by several unrelated causes including some that originate outside the lot entirely, and — because mycotoxins are odourless — a lot that smells perfectly sound may still carry one.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Odour is the oldest quality assessment there is, and it remains commercially decisive: a lot that smells wrong is rejected, discounted, or diverted, often before any other assessment is made. Its authority is understandable, because smell is genuinely sensitive to changes nothing else notices at that stage. Its weakness is that it is a symptom with no allegiance to a cause. A musty smell, a sour smell, a fermented smell, a rancid smell, and a chemical smell arise from entirely different chemistry with entirely different implications, and the only thing they share is that an assessor noticed something and called it "off".',
    },
    {
      type: 'paragraph',
      text: "Two things make off-odour harder to reason about than it first appears. The first is that it is not a measurement. It is a perception, it varies between assessors, it is rarely recorded in any form that can be checked later, and the nose adapts — an assessor who walks into a store and smells something will stop smelling it within minutes, which means the assessment cannot be repeated by the person best placed to repeat it. The second is that a great deal of off-odour is not the lot's own. Commodities absorb taints readily from fuels, solvents, packaging, vehicles, and adjacent cargo, so the odour a buyer objects to is frequently something that happened to the lot in transit rather than something the lot did.",
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value:
        'Chemical — volatile compounds in or absorbed by the commodity, perceived as a sensory attribute',
    },
    {
      label: 'A symptom, not a cause',
      value:
        'Musty, sour, fermented, rancid, and chemical odours arise from unrelated chemistry; "off" is one word covering several different problems',
    },
    {
      label: 'Principal origins',
      value:
        'Fermentative metabolism, mould growth, lipid rancidity in oilseeds and nuts, absorbed taint from outside the lot, and senescence',
    },
    {
      label: 'Odour is not a measurement',
      value:
        'Perception is subjective, varies between assessors, and is seldom recorded; adaptation means an assessor stops perceiving an odour within minutes of entering a store',
    },
    {
      label: 'Mycotoxins are odourless',
      value:
        'A lot that smells sound can carry a mycotoxin, and a musty lot may carry none — odour answers the mould question weakly and the toxin question not at all',
      note: 'This entry gives no thresholds; see EFSA and FAO for the applicable framework',
    },
    {
      label: 'Taint is often acquired elsewhere',
      value:
        "Commodities readily absorb odours from fuels, solvents, packaging, vehicles, and adjacent cargo, so the origin is frequently outside the lot's own history",
    },
    {
      label: 'Controls can be causes',
      value:
        'Hermetic and controlled-atmosphere storage prevent musty odours by suppressing mould, and can generate fermentative off-odours by restricting the atmosphere too far',
    },
  ],
  sections: [
    {
      id: 'one-word-many-causes',
      heading: 'One word covering several unrelated problems',
      body: [
        {
          type: 'paragraph',
          text: 'The category "off-odour" is a description of an assessor\'s reaction, not of the commodity. Grouped under it are processes that share nothing except the fact of being noticed by the nose, and treating them as one defect obscures the only useful question, which is what actually happened to this lot.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Fermentative and anaerobic odours',
              description:
                'Where oxygen is restricted — in an over-restrictive controlled atmosphere, in a sealed hermetic store, in waterlogged or wet material, or in a dense mass of moist commodity — respiration shifts to anaerobic pathways and produces alcoholic, sour, and fermented volatiles. The commodity is metabolising, not decaying.',
            },
            {
              term: 'Musty and mouldy odours',
              description:
                'Fungal growth produces volatile metabolites perceived as musty, earthy, or mouldy. This suggests mould; it does not confirm it, and it says nothing about mycotoxin.',
            },
            {
              term: 'Rancidity',
              description:
                'Lipid oxidation and hydrolysis in oilseeds, nuts, and their products give painty, cardboard-like, soapy, or stale odours. This is chemistry acting on the oil, with no organism involved at all.',
            },
            {
              term: 'Absorbed taint',
              description:
                'Volatiles from fuel, exhaust, solvents, paint, cleaning chemicals, treated timber, packaging materials, or an adjacent cargo, taken up by the commodity. The odour is real and the commodity is affected, but nothing went wrong within the lot itself.',
            },
            {
              term: 'Senescent and stale odours',
              description:
                'Ordinary ageing changes the volatile profile of a commodity. Loss of the fresh, characteristic aroma and its replacement by a flat or stale one is often just time.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'These have different remedies and different consequences, and they are not reliably separated by the description an assessor gives. Rancidity and fermentation are both routinely reported as "sour" or "off". A musty note and a mildly tainted note are readily confused by an assessor unfamiliar with the commodity. The word does not carry the chemistry.',
        },
      ],
    },
    {
      id: 'odour-is-not-measurement',
      heading: 'Why odour is not a measurement',
      body: [
        {
          type: 'paragraph',
          text: 'An odour assessment produces a word, not a value, and the word comes from a person. Olfactory sensitivity varies substantially between individuals, including specific insensitivities to particular compounds that leave one assessor detecting nothing where another finds the odour obvious. Vocabulary varies too: what one person calls musty another calls earthy, stale, or simply off, and the record — where a record exists at all — preserves the word rather than the perception.',
        },
        {
          type: 'paragraph',
          text: 'Adaptation compounds this. The olfactory system responds to change, and a continuous odour fades from perception within minutes of exposure. The assessor who enters a store and immediately notices something is, within a short time, the least able person present to describe it — and someone who has worked in that store all day may honestly report nothing wrong. This is not carelessness; it is how the sense works. It means the strongest odour assessment is the first one, made by someone who has just arrived, and that it cannot be verified by staying to check.',
        },
        {
          type: 'list',
          items: [
            'Sensitivity, including specific insensitivity to individual compounds, differs between assessors, so agreement between two people is not confirmation and disagreement is not contradiction.',
            'Descriptive vocabulary is not standardised in ordinary practice; the same perception is recorded as musty, earthy, stale, or off by different people.',
            'Adaptation removes the odour from perception within minutes, so the assessment is not repeatable by the assessor who made it.',
            'Expectation shapes perception: an assessor who knows a lot is suspect finds the odour, and one who knows the commodity well distinguishes taint from its characteristic aroma more reliably than one who does not.',
            'Odour assessments are rarely recorded in a form that can be re-examined, so a dispute about a lot is often a dispute about a remembered word.',
          ],
        },
      ],
    },
    {
      id: 'mycotoxin',
      heading: 'Musty smell and mycotoxin are different questions',
      body: [
        {
          type: 'paragraph',
          text: 'A musty odour is the cue that most often stands in for a safety judgement, and it cannot bear that weight. It suggests mould growth, which is worth acting on: it is a reasonable prompt to examine the lot, its moisture, and its storage history. But it does not confirm mould — musty and earthy notes have other origins, including absorbed taint from damp structures and packaging — and the step from "smells musty" to "is contaminated" skips the fact that decides the matter.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Mycotoxins are odourless',
          text: 'A lot that smells perfectly sound can carry a mycotoxin, and a musty lot may carry none. Odour is not a mycotoxin test in either direction. Visible mould does not establish that a toxin is present, and — the direction that causes actual harm — the absence of visible mould or of any musty smell does not establish its absence. Toxin persists after the fungus that produced it is dead, occurs in material next to growth that was removed, distributes unevenly through a lot, and is invisible as well as odourless. Cleaning, sorting, washing, and inspection neither detect nor remove it. Presence or absence is established only by appropriate laboratory analysis on a properly drawn sample, against limits set by food-safety regulation for the specific commodity, jurisdiction, and use. This entry states none; see EFSA and FAO.',
        },
        {
          type: 'paragraph',
          text: 'The practical consequence is that smelling a lot and testing a lot are not alternatives at different levels of rigour; they answer different questions. Odour may prompt a mycotoxin question. It cannot answer one, and a lot passed on the basis that it smelled fine has not been assessed for mycotoxin at all. Where the question arises, it goes to laboratory testing under the framework that applies to the commodity and market, and never to the nose.',
        },
      ],
    },
    {
      id: 'taint-from-outside',
      heading: 'Taint that the lot did not create',
      body: [
        {
          type: 'paragraph',
          text: "Odour transfer is real, routine, and frequently underestimated. Dry commodities, oilseeds, and nuts have large surface areas and lipid fractions that take up volatile compounds from the air around them, and once absorbed those compounds are not readily driven off. The sources are ordinary: fuel and exhaust in a vehicle or a store, solvents and paint in recent maintenance work, cleaning chemicals, treated timber in a hold or on a pallet, the packaging itself, and — most commonly — a previous or adjacent cargo whose own perfectly acceptable odour is a defect once it is in someone else's coffee.",
        },
        {
          type: 'paragraph',
          text: "This matters for how an off-odour finding is interpreted, because the natural response is to look at the lot's own storage history — its moisture, its drying, its age — and that history may be entirely blameless. A tainted lot is often a well-handled lot that shared a space with something. It also matters for responsibility and for prevention: the control is segregation, container and vehicle inspection before loading, and packaging choice, not anything done to the commodity itself.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hermetic and controlled atmospheres both prevent and cause',
          text: 'Restricting the atmosphere in a sealed store suppresses the mould and insect activity that generate musty odours — and, taken too far for the commodity, drives the tissue into anaerobic metabolism and generates fermentative, alcoholic, and sour odours of its own. The same process is a control for one off-odour and a cause of another. Which applies depends on the commodity and the atmosphere it tolerates, which is set by sourced guidance, not by a general rule.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Because off-odour has several unrelated causes, there is no single control for it. What each cause needs is different, and the first useful step is nearly always to work out which of them is in play rather than to treat "off-odour" as a condition to be managed.',
        },
        {
          type: 'list',
          items: [
            'Dry and store to the moisture the applicable sourced guidance specifies for the commodity and duration, which addresses the mould growth behind musty odours and the moist conditions behind fermentative ones.',
            'Set any controlled or modified atmosphere against sourced guidance for that specific commodity, since an atmosphere restrictive enough to cause fermentative off-odour in one commodity is appropriate for another.',
            "Maintain hermetic seal integrity and understand the commodity's tolerance, given that sealed storage both suppresses musty odours and can create fermentative ones.",
            'Cool where the commodity calls for it: temperature governs the rate of both fermentative metabolism and lipid oxidation.',
            'Protect oilseeds and nuts from the conditions that drive rancidity — heat, air, light, and time — through appropriate packaging and stock rotation.',
            'Segregate against taint: inspect vehicles and containers before loading, keep commodities away from fuels, solvents, and strong-smelling cargo, and choose packaging that does not itself contribute odour.',
            'Treat a musty finding as a prompt for the mould and mycotoxin question to go to laboratory testing under the applicable framework, not as an answer to it.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'almonds' },
    { type: 'commodity', slug: 'walnuts' },
    { type: 'commodity', slug: 'sunflower-seed' },
    { type: 'commodity', slug: 'rapeseed' },
    { type: 'commodity', slug: 'tea-leaf' },
    { type: 'commodity', slug: 'dried-tobacco-leaf' },
    { type: 'commodity', slug: 'black-pepper-corns' },
  ],
  causedByConditions: [
    'Restricted oxygen driving anaerobic and fermentative metabolism — in an over-restrictive controlled atmosphere, a sealed hermetic store, or waterlogged and wet material',
    'Mould growth producing volatile metabolites perceived as musty or earthy, following storage at a moisture too high for the duration',
    'Lipid oxidation and hydrolysis in oilseeds, nuts, and their products, promoted by heat, air, light, and time',
    'Absorbed taint from fuels, exhaust, solvents, paint, cleaning chemicals, treated timber, packaging, vehicles, or an adjacent or previous cargo',
    'Senescence, which alters the volatile profile and replaces characteristic aroma with a flat or stale one',
    'Insect activity and its residues, which contribute their own odours and raise localised moisture favouring mould',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  confusableWith: [
    'Sour rot — decay and fermentative metabolism both present as a sour, sometimes alcoholic smell, and the shared cue of sourness does not distinguish an infected lot from an intact one metabolising anaerobically',
    'Storage rot in general — a musty or foul odour accompanies many unrelated rots, so the odour establishes that something is decaying without indicating what or where',
    'Rancidity versus fermentation — both are habitually reported as "off" or "sour", but one is lipid oxidation with no organism involved and the other is metabolism under restricted oxygen; the shared word conceals entirely different chemistry and entirely different remedies',
    'Normal varietal or commodity aroma read as taint — fermented cocoa, cured tobacco, and many spices smell strong and strange to an assessor unfamiliar with them, and the shared cue of an unexpected smell is not evidence of a defect',
    "Absorbed taint versus a fault of the lot — a taint acquired from a vehicle or adjacent cargo smells like a problem with the commodity, and the odour gives no indication that its origin lies outside the lot's own history",
    'Musty mould odour versus damp structural or packaging odour — damp timber, sacking, and buildings smell musty in their own right, and the commodity may simply be carrying the smell of where it was kept',
  ],
  diagnosticLimitations: [
    'Odour is a perception, not a measurement. It varies between assessors in both sensitivity and vocabulary, including specific insensitivities that leave one person detecting nothing where another finds the odour obvious, and it is seldom recorded in a form that can be re-examined later.',
    'Adaptation makes the assessment unrepeatable. A continuous odour fades from perception within minutes of exposure, so the assessor who first noticed it is quickly the least able to describe it, and someone who has worked in the store all day may honestly report nothing wrong.',
    'A musty odour suggests mould but does not confirm it — damp structures, sacking, and packaging smell musty in their own right — and crucially it says nothing about mycotoxin. Mycotoxins are odourless: a lot that smells perfectly sound can carry one, and a musty lot may carry none. Presence or absence is established only by appropriate laboratory analysis on a properly drawn sample, against limits set by food-safety regulation (see EFSA and FAO).',
    "The odour does not identify its own cause. Fermentation, rancidity, mould, taint, and senescence are distinct chemistry with distinct remedies, and they are routinely reported with the same words; separating them requires the lot's history and, where it matters, laboratory analysis.",
    "The odour need not have originated in the lot. Commodities readily absorb taints from fuels, solvents, packaging, vehicles, and adjacent cargo, so an off-odour is frequently acquired in transport and carries no information about the lot's own drying or storage history.",
    'Familiarity with the commodity governs the assessment. Fermented cocoa, cured tobacco, and strongly aromatic spices are readily called tainted by an unfamiliar assessor, so a report of an off-odour partly measures the assessor.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment framework, and the principle that mycotoxins are not detectable by sensory assessment',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Odour taint and quality deterioration in stored commodities, and mycotoxin prevention and management in storage',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Off-odour development in stored grain and oilseed, and rancidity in nuts and oil-bearing commodities',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain store management, taint prevention, and odour as a sign of storage problems',
    },
    {
      sourceId: 'irri',
      citedFor:
        'Odour and staleness development in stored paddy and milled rice',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Off-odour arises wherever commodities are stored and moved, and taint in particular is a feature of transport and shared storage rather than of any region. The sensory vocabulary used, the assessment protocols applied, and any contractual consequence of an odour finding are market- and standard-specific.',
  limitations: [
    'This entry gives no thresholds, sensory scores, atmosphere compositions, moisture figures, or storage durations. Any applicable limit or protocol is commodity-, market-, and standard-specific, and any mycotoxin limit is set by food-safety regulation; consult EFSA, FAO, and national regulators.',
    'Nothing here supports assessing the safety of a lot by smell. Mycotoxins are odourless and invisible: a sound-smelling lot may carry one and a musty lot may not, and only appropriate laboratory analysis on a properly drawn sample answers that question.',
    'Odour descriptions are indicative only. They do not identify a cause, do not distinguish fermentation from rancidity or mould from taint, and reflect the assessor and the conditions of assessment as well as the commodity.',
    'Some off-odours are irreversible once absorbed or developed; nothing described here restores an affected lot, and this entry is not a basis for accepting or rejecting a consignment.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Off-Odour: A Symptom With Many Unrelated Causes',
    description:
      'Musty, sour, rancid, and tainted smells in stored commodities. Why odour is subjective, and why mycotoxins are odourless in a sound-smelling lot.',
    keywords: [
      'off-odour',
      'odour taint',
      'musty smell grain',
      'rancidity',
      'sensory defect',
    ],
  },
  structuredData: { article: true },
};
