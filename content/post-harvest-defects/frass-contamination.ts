import type { PostHarvestDefectContent } from '@/types/content';

export const frassContamination: PostHarvestDefectContent = {
  id: 'post-harvest-defect-frass-contamination',
  slug: 'frass-contamination',
  contentType: 'post-harvest-defect',
  title: 'Frass Contamination',
  defectClass: 'entomological',
  alternativeNames: [
    'Insect frass',
    'Insect filth',
    'Excreta and cast-skin contamination',
    'Insect debris',
  ],
  category: 'Post-harvest defect',
  subcategory: 'Storage insect residue',
  summary:
    'Frass contamination is the accumulation of insect excreta, cast skins, webbing, body fragments, and associated dust in a stored commodity; it is simultaneously an indicator that an infestation occurred and a contaminant in its own right, but it dates nothing — frass persists long after the insects are gone, and cleaning removes it without removing the history it recorded.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Storage insects leave more behind than holes. Feeding in a dry commodity produces frass — the fine powdery excreta and abraded meal generated as insects tunnel and eat — together with cast larval skins, pupal cases, webbing spun by moth larvae, dead bodies, and fragments of bodies, all mixed with the dust and fines of the commodity itself. In a working store this material sifts through the mass, concentrates in the fines, and gathers at surfaces, in corners, and around infestation foci. It is the most commonly noticed sign of storage insects, because unlike the insects themselves it does not move, hide, or die.',
    },
    {
      type: 'paragraph',
      text: 'Frass has to be understood in two registers at once, and conflating them causes most of the confusion around it. As an indicator, frass is evidence that insects fed in this material — useful, but silent on when, on what species, and above all on whether anything is still alive. As a contaminant, frass is objectionable on its own terms: excreta, insect fragments, and webbing in a food or feed commodity are extraneous matter regardless of the state of the population that produced them, and are regulated as such. A lot can be clean of insects and dirty with frass, or full of live insects and nearly free of visible frass because it was recently cleaned. Neither observation is the other.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value:
        'Entomological — insect excreta, cast skins, webbing, body fragments, and associated dust in a stored commodity',
    },
    {
      label: 'Dual character',
      value:
        'An indicator of infestation and a contaminant in its own right — the two are separate questions and must be judged separately',
    },
    {
      label: 'What it indicates',
      value:
        'That insects fed in this material at some point; it does not indicate that they are still present, and it does not identify the species',
    },
    {
      label: 'What it cannot do',
      value:
        'Date the infestation — frass persists indefinitely after the insects are dead or removed, so its presence carries no information about currency',
    },
    {
      label: 'The reverse failure',
      value:
        'Cleaning and aspiration remove frass, so a previously infested lot can look clean after processing; absence of frass is not evidence of absence of infestation',
    },
    {
      label: 'Association with mould',
      value:
        'Insect activity raises localised moisture and temperature and moves spores through the mass, so a frass-contaminated lot carries an elevated mould question',
      note: 'Frass and mould are associated; neither establishes that a mycotoxin is present or absent',
    },
    {
      label: 'Where the limits are set',
      value:
        'Filth and extraneous-matter limits are set by food-safety regulation and by grade standards, and are jurisdiction-, commodity-, and use-specific',
      note: 'This entry states none; see EFSA, FAO, and the applicable national regulation and standard',
    },
  ],
  sections: [
    {
      id: 'indicator-and-contaminant',
      heading: 'Two questions, one material',
      body: [
        {
          type: 'paragraph',
          text: 'When frass is found in a lot, two entirely different questions are usually asked at once and answered as though they were one. The first is diagnostic: does this lot have an insect problem? The second is compositional: does this lot contain extraneous matter it should not? Frass speaks to both, but with different reliability, and the answers do not follow from each other.',
        },
        {
          type: 'paragraph',
          text: 'As a contaminant, frass is straightforward. It is material that is not the commodity, it is present, and it is measurable by appropriate laboratory methods on a drawn sample. Whether the amount present is acceptable is not a matter of judgement at the store door: filth and extraneous-matter limits are set by food-safety regulation and by the grade standard that applies to the commodity and the market. This entry states no limit, and no inspection experience substitutes for the applicable framework.',
        },
        {
          type: 'paragraph',
          text: 'As an indicator, frass is much weaker than its prominence suggests, and it fails in both directions. Frass is inert. It does not decay on any relevant timescale, it is not consumed, and it does not disappear when the insects do. A lot fumigated, sold, moved, and re-stored still carries the frass of the infestation that preceded all of that, looking exactly as it did when the insects were alive. Conversely, frass is fine, light, and dusty — which is to say it is precisely what cleaning, aspiration, and sieving are designed to remove. A lot that was heavily infested and has since been cleaned may present as visibly clean while carrying whatever live stages remain inside kernels, where no aspirator reaches them.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Frass dates nothing, and its absence proves nothing',
          text: 'Visible frass shows that an infestation occurred, not that one is current — the material persists long after the insects are dead or removed. Absence of frass after cleaning is not evidence that a lot was never infested, and is not evidence that it is not infested now. Whether insects are present is established by looking for live insects, by appropriate sampling and detection, not by looking for their residue.',
        },
      ],
    },
    {
      id: 'what-it-is-mistaken-for',
      heading: 'What frass is mistaken for, and what is mistaken for frass',
      body: [
        {
          type: 'paragraph',
          text: 'Frass is fine, pale-to-dark powdery material in a commodity that is itself full of fine powdery material. That is the whole of the identification problem. Grain dust, chaff, broken-kernel meal, soil, and the abraded fines of ordinary handling all present as dust in the sample pan, and the presence of dust is not the presence of frass. Judging by eye that dust is insect-derived overstates what the eye can do; separating and quantifying filth in a commodity is a laboratory task with defined methods, not a visual one.',
        },
        {
          type: 'list',
          items: [
            'Normal handling dust and broken-kernel meal — every conveyed, augered, or dropped lot generates fines, and the shared cue of "dust in the sample" does not distinguish insect frass from the commodity abrading against itself.',
            'Soil, chaff, and field trash — carried in from harvest, also fine and dark, and also extraneous matter, but of a different origin with different implications for what went wrong and where.',
            'Rodent contamination — droppings, hair, and urine staining are a different, more serious, and separately regulated contamination matter; conflating the two misdirects both the investigation and the regulatory response.',
            'Mould growth and its debris — often present in the same lot for related reasons, so a dusty, musty sample raises insect and mould questions simultaneously and answers neither.',
            'Webbing versus other fibrous material — moth webbing is a real and specific sign, but jute fibres, packaging debris, and fungal growth can present as fibrous matting in a lot.',
          ],
        },
      ],
    },
    {
      id: 'mould-and-mycotoxin',
      heading: 'The mould question frass raises and does not answer',
      body: [
        {
          type: 'paragraph',
          text: 'Insect activity and mould development are associated in stored commodities, and the association is mechanistic rather than coincidental. Feeding insects respire, and respiration releases moisture and heat into a mass whose whole protection depends on being dry and cool. Insects also move through the commodity carrying spores on their bodies and in their frass, distributing inoculum into material that was previously isolated from it. The result is that a frass-contaminated lot is, on the evidence, a lot in which conditions favourable to storage moulds were locally created — so the discovery of frass properly raises a mould question alongside the insect question.',
        },
        {
          type: 'paragraph',
          text: 'What frass cannot do is answer that question, and here the reasoning that governs all mould findings applies in full. Visible frass or visible mould does not establish that a mycotoxin is present: toxin production depends on the fungal species involved, on the substrate, and on the conditions growth occurred under, and a visibly dirty lot is not automatically a contaminated one. More importantly, and this is the direction that causes actual harm, the absence of visible mould or frass does not establish the absence of mycotoxin. Toxin persists after the fungus that produced it is gone. It occurs in material adjacent to growth that has itself been removed. It is distributed unevenly through a lot in a way no visual assessment could reveal. It is invisible and odourless. Cleaning, aspiration, sieving, and sorting neither detect it nor remove it — they remove the signs that might have prompted someone to ask.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Cleaning removes the evidence, not the hazard',
          text: 'Aspirating frass out of a lot improves its appearance and its extraneous-matter position. It does not make the lot free of mycotoxin, and it must never be recorded or relied upon as a safety measure. Mycotoxins are invisible and odourless; presence or absence is established only by appropriate laboratory analysis on a properly drawn sample. Any applicable limit is set by food-safety regulation for the specific commodity, jurisdiction, and intended use — this entry states none. See EFSA and FAO for the assessment and management framework.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Frass is a product of insect feeding, so preventing frass means preventing infestation; there is no meaningful control of frass as such. Cleaning removes what is there, which addresses the contaminant question and is worth doing, but a cleaning programme that runs alongside a live infestation simply removes the evidence at intervals while the population continues to work.',
        },
        {
          type: 'list',
          items: [
            'Prevent the infestation that produces frass: store dry to the moisture the applicable sourced guidance specifies for the commodity and duration, clean and treat the empty store before loading, and keep new commodity away from old residues.',
            'Clean the commodity to remove fines, dust, and frass — recognising that this addresses composition, not the population, and that a clean-looking lot after aspiration has not been assessed for insects.',
            'Consider hermetic storage, which restricts the atmosphere within a sealed mass and limits the insect development that generates frass in the first place, provided the seal is genuinely maintained.',
            'Monitor for live insects by appropriate sampling and detection, and treat a frass finding as a prompt to look for the population rather than as a measure of it.',
            'Treat a frass finding as a prompt to consider the mould status of the lot, and refer any mycotoxin question to laboratory testing under the applicable food-safety framework rather than to inspection.',
            'Maintain packaging and store integrity, since infestation of packaged commodity generates frass inside the pack where cleaning cannot reach it at all.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'dry-beans' },
    { type: 'commodity', slug: 'cowpeas' },
    { type: 'commodity', slug: 'lentils' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'dried-chillies' },
    { type: 'commodity', slug: 'black-pepper-corns' },
    { type: 'commodity', slug: 'tea-leaf' },
  ],
  causedByConditions: [
    'Storage insect feeding within the commodity, which generates excreta, abraded meal, cast skins, and webbing as a direct by-product',
    'Storage moisture and temperature permitting insect development, most often where drying was incomplete or the mass rewetted at a surface or wall',
    'Residual infested material in stores, conveyors, pits, and cracks, which seeds a clean lot and its frass into it',
    'Extended storage duration, over which successive generations accumulate residue far beyond the initial population',
    'Infestation of packaged or bagged commodity, where frass accumulates inside the pack and cannot be cleaned out',
    'Uncleaned commodity carrying fines and broken kernels, which supports external feeders and blends with their residue',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  confusableWith: [
    'Handling dust and broken-kernel meal — both present as fine powder in the sample, and the shared cue of dust does not separate insect excreta from the commodity abrading against itself during conveying and dropping',
    'Soil, chaff, and field trash — also fine, dark extraneous matter carried in from harvest; the shared cue is dirt in the pan, which says nothing about whether an insect made it',
    'Rodent contamination — droppings and hair are also animal residue in the commodity and are noticed the same way, but constitute a different and separately regulated matter that a frass record can obscure',
    'Mould growth and its debris — commonly present in the same lot for related reasons, giving a dusty musty sample whose two possible causes share every visible cue',
    'Live infestation itself — frass is routinely read as the infestation, when it is only the residue of one that may be long dead; the shared cue is that both are found by looking at the lot',
    'Webbing versus fibrous packaging debris or fungal matting — matted fibrous material in a lot has several possible origins that look alike in a sample',
  ],
  diagnosticLimitations: [
    'Frass indicates that an infestation occurred, not that one is current. It is inert and persists indefinitely after the insects are dead or removed, so it dates nothing: a lot treated, moved, and re-stored carries the frass of the infestation that preceded all of it, looking exactly as it did when the population was alive.',
    'Absence of frass is not evidence of absence of infestation. Frass is fine and light, which is precisely what cleaning, aspiration, and sieving remove; a previously infested lot can present as visibly clean after processing while carrying live stages inside kernels that no aspirator reaches.',
    'Frass is not visually separable from other fines. Grain dust, broken-kernel meal, soil, and chaff present identically as dust in the sample; separating and quantifying filth is a laboratory task with defined methods, not a visual judgement.',
    'Frass does not identify the species, the number of insects, or the extent of feeding damage. Residue accumulates over generations and concentrates in fines and at surfaces, so the amount found reflects sampling position and lot history at least as much as it reflects any population.',
    'Frass raises a mould question and does not answer it. Insect activity raises localised moisture and temperature and moves spores, so a frass-contaminated lot has an elevated mould risk — but the presence of frass or mould does not establish that a mycotoxin is present.',
    'Critically, the absence of visible frass or mould does not establish the absence of mycotoxin. Toxin persists after the fungus is gone, occurs in material next to growth that was removed, distributes unevenly, and is invisible and odourless; cleaning and sorting neither detect nor remove it. Presence or absence is established only by appropriate laboratory analysis on a properly drawn sample, against limits set by food-safety regulation (see EFSA and FAO).',
  ],
  connections: [{ type: 'pest', slug: 'weevils' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'pest', slug: 'weevils' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment framework, and the principle that visible contamination and mycotoxin presence are distinct questions',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Storage insect residues in stored commodities, and mycotoxin prevention and management in storage',
    },
    {
      sourceId: 'cabi',
      citedFor:
        'Stored-product insect biology, residues, and signs of infestation in stored commodities',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain store hygiene, monitoring for storage insects, and management of dust and fines',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global wherever dry commodities are stored, since the insects that generate frass are cosmopolitan in stores even where the species mix differs by climate. Filth and extraneous-matter limits, and the methods used to determine them, are jurisdiction- and commodity-specific.',
  limitations: [
    'This entry states no filth, extraneous-matter, insect-fragment, or mycotoxin limits. Those limits are set by food-safety regulation and by grade standards, are jurisdiction-, commodity-, and use-specific, and must be taken from the applicable framework; consult EFSA, FAO, and national regulators.',
    'Nothing here supports assessing a lot by the presence or absence of visible residue. Frass does not date an infestation, its absence does not exclude one, and neither frass nor visible mould answers the mycotoxin question, which only appropriate laboratory analysis on a properly drawn sample can address.',
    'Visual identification of frass against other fines is not reliable; determination of filth in a commodity requires defined laboratory methods on a drawn sample.',
    'No fumigant, insecticide, dose, or treatment procedure is described here; chemical control of storage insects is governed by product labels and national registration and requires qualified or licensed personnel.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Frass Contamination: Insect Residue in Stored Grain',
    description:
      'Frass, cast skins, and webbing show an infestation happened but never date it. Why cleaning erases the evidence, and why no visible frass is not no mycotoxin.',
    keywords: [
      'frass contamination',
      'insect frass',
      'insect filth grain',
      'extraneous matter',
      'stored product insects',
    ],
  },
  structuredData: { article: true },
};
