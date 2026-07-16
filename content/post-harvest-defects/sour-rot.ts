import type { PostHarvestDefectContent } from '@/types/content';

export const sourRot: PostHarvestDefectContent = {
  id: 'post-harvest-defect-sour-rot',
  slug: 'sour-rot',
  contentType: 'post-harvest-defect',
  title: 'Sour Rot',
  defectClass: 'pathological',
  alternativeNames: [
    'Geotrichum rot',
    'Geotrichum sour rot',
    'Watery sour rot',
  ],
  category: 'Post-harvest defect',
  subcategory: 'Pathological disorder',
  summary:
    'Sour rot is a soft, watery, disintegrating decay caused chiefly by Geotrichum candidum, most familiar in citrus and tomato, distinguished by a sour fermented odour and by the absence of the dry powdery spore mass that the blue and green moulds produce; it enters through wounds and is both spread by and attractive to fruit flies.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sour rot is caused chiefly by Geotrichum candidum, a fungus that is common in soil and effectively unavoidable in the environments where fruit is grown and packed. It is a wound pathogen: intact skin holds it out, and infection follows a puncture, a split, a stem-end injury, or contact with contaminated soil or water through a break in the surface. What it produces is not a firm lesion but a collapse — the affected tissue turns soft, watery, and structurally formless, and an advanced lesion leaks. Fruit at the end of a sour rot is not so much decayed as disintegrated, and the liquid it releases carries the fungus onward to whatever it touches.',
    },
    {
      type: 'paragraph',
      text: 'Two things set it apart from its neighbours in this section. The first is the odour: sour rot smells distinctly sour and fermented, and this is the cue people reach for when naming it. The second is an insect association that is not incidental but part of how the disease works. Fruit flies and vinegar flies are drawn to fermenting fruit, feed and breed in it, and carry the fungus on their bodies to the next wound, so the flies are simultaneously attracted by the rot and responsible for spreading it. Managing sour rot without addressing the flies addresses only half the problem.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Pathological — fungal rot caused chiefly by Geotrichum candidum',
    },
    {
      label: 'Route of entry',
      value:
        'Wounds only: punctures, splits, stem-end injuries, and breaks in the skin contacting contaminated soil or water',
      note: 'Intact skin is an effective barrier, tying this rot to mechanical damage and to soil contact upstream',
    },
    {
      label: 'Appearance',
      value:
        'Soft, watery, disintegrating decay that loses structure and leaks; no dry powdery spore mass forms on the surface',
    },
    {
      label: 'Odour',
      value:
        'Distinctly sour and fermented — the most characteristic cue available, and still not diagnostic',
      note: 'Odour is subjective, rarely recorded, and shared with other fermentative spoilage',
    },
    {
      label: 'Insect association',
      value:
        'Fruit flies and vinegar flies are attracted to the rot and carry the fungus to fresh wounds, making the insects part of the disease cycle rather than a coincidence',
    },
    {
      label: 'Predisposing condition',
      value:
        'Over-mature fruit and fruit that has been in contact with soil are markedly more affected',
    },
    {
      label: 'Mycotoxin relationship',
      value:
        'Rotting tissue may be colonised by other fungi, some toxigenic — the rot does not confirm a toxin, and clean appearance does not exclude one',
      note: 'This entry gives no limits or thresholds; see EFSA and FAO for the applicable framework',
    },
  ],
  sections: [
    {
      id: 'how-it-establishes',
      heading: 'Wounds, over-maturity, and soil',
      body: [
        {
          type: 'paragraph',
          text: 'Geotrichum is present in soil and in the water and surfaces that fruit meets, so the fungus is rarely the limiting factor — access is. The skin of a sound fruit excludes it, and almost every sour rot lesion can be traced back to a break in that skin: a harvest puncture, a split from rain or irrigation, an injury at grading, or an abrasion that met contaminated soil or dump-tank water. Fruit that touched the ground, and fruit handled in wet conditions, carries a substantially higher load into the packhouse. Sour rot is therefore, like several rots, a mechanical and hygiene problem presenting as a disease.',
        },
        {
          type: 'paragraph',
          text: 'Maturity is the second axis. Over-mature fruit is far more readily colonised, because the tissue has softened, its defences have relaxed, and its sugars are available; the same wound on a firm, properly mature fruit and on a fruit held too long are not equivalent events. This is why sour rot tends to concentrate at the end of a season, at the end of a hold, and in lots that were picked late, and why a lot can pass through packing acceptably and fail once it has aged another week. Cold holding slows the fungus, but it does not stop the fruit ageing into susceptibility.',
        },
      ],
    },
    {
      id: 'insect-link',
      heading: 'The flies are part of the disease',
      body: [
        {
          type: 'paragraph',
          text: 'Most post-harvest rots have a straightforward relationship to insects: damage creates wounds, wounds admit fungi. Sour rot has a tighter one, and it runs as a loop. The fermenting tissue produces volatiles that attract fruit flies and vinegar flies from a distance. Those flies land, feed on the leaking fruit, and breed in it. They then leave carrying the fungus on their bodies and in their gut, and they are drawn preferentially to exactly the damaged and over-ripe fruit that offers the fungus its next entry point. The rot recruits its own vector, and the vector finds the rot its ideal target.',
        },
        {
          type: 'paragraph',
          text: 'The practical consequence is that a sour rot problem in a packhouse or store is not fully described as a fungal problem. A population of flies sustained by a few leaking fruit will distribute inoculum across a room continuously, and removing the decayed fruit removes both the source of spores and the breeding substrate at once. This is one of the few places in post-harvest pathology where insect management and decay management are genuinely the same intervention, and it is the reason this entry links to the fruit fly and vinegar fly pest references rather than treating them as unrelated topics.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Attraction and transmission run in both directions',
          text: 'Flies are drawn to sour rot and also cause it to spread. A leaking fruit left in a store is therefore both a spore source and a breeding site, and its removal acts on the fungus and the vector simultaneously. No insecticide, bait, or dose is described here; any such use is governed by product labels and national registration and requires qualified advice.',
        },
      ],
    },
    {
      id: 'mycotoxin',
      heading: 'Decay and mycotoxin are separate questions',
      body: [
        {
          type: 'paragraph',
          text: 'Geotrichum is a spoilage organism rather than one discussed principally for toxin production, and it might seem that the mycotoxin question can be set aside on this page. It cannot, for a reason independent of the fungus being named. Tissue that has collapsed into a wet, sugar-rich, fermenting mass is an excellent substrate for other organisms, some of which are toxigenic, and the conditions that permitted sour rot permit them too. Whether a mycotoxin is present in a lot showing sour rot depends on which organisms were actually involved, on the substrate, and on the conditions they developed under — and the visible decay answers none of those. Visible rot does not confirm that a mycotoxin has been produced.',
        },
        {
          type: 'paragraph',
          text: 'The more important failure is the opposite one, and it does not depend on which rot is being discussed. A lot with no visible decay and no off odour at all may still carry mycotoxin. The toxins are chemically stable and persist after the fungus that produced them has died or been discarded; they diffuse into the tissue surrounding a lesion, so cutting out the visible rot leaves contaminated material in flesh that looks perfectly sound; they are distributed unevenly through a lot, so an unaffected-looking portion is not evidence about the rest; and they are invisible, odourless, and tasteless. The sour smell that makes this rot recognisable is produced by the spoilage, not by any toxin — a mycotoxin gives no odour at all, and inferring safety from the absence of a smell inverts the logic completely.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No visible rot and no smell does not mean no mycotoxin',
          text: 'Sorting out leaking fruit and washing a lot improve its appearance and interrupt spread. Neither detects a mycotoxin, and neither removes one from tissue that has absorbed it. Whether a mycotoxin is present is established only by appropriate laboratory analysis on a properly drawn representative sample. Any applicable limit is set by food-safety regulation for the specific commodity, jurisdiction, and intended use — this entry states none. EFSA and FAO publish the applicable framework.',
        },
      ],
    },
    {
      id: 'confusion',
      heading: 'Why the smell is not enough',
      body: [
        {
          type: 'paragraph',
          text: 'Sour rot has the most distinctive sensory cue of any rot in this section, and it is still not a diagnosis. The odour is real and it is informative, but it fails as evidence for three reasons that compound each other. It is subjective: what one assessor calls sour another calls fermented or simply off, and there is no scale. It is unrecorded: no consignment document carries a smell, so an odour noted at intake cannot be re-examined, disputed, or audited afterwards. And it is not specific: any fermentative spoilage smells broadly similar, because the volatiles come from sugars breaking down rather than from any particular organism, and bacterial soft rots, yeast spoilage, and simple over-ripeness can all present a sour fermented note.',
        },
        {
          type: 'paragraph',
          text: 'The absence of a dry powdery spore mass is the other cue commonly used, and it deserves a more careful statement than it usually gets. Blue and green moulds build a conspicuous surface layer of dry spores; sour rot does not produce a comparable structure, so a wet disintegrating lesion with no powdery sporulation is genuinely more consistent with sour rot than with a Penicillium rot. But this is suggestive, not confirmatory. Early Penicillium lesions have not sporulated yet and are also just soft wet decay; a lesion of any kind may be too young, too wet, or too heavily overgrown by secondary organisms to show what it otherwise would; and secondary colonisers can add sporulation to a lesion sour rot began. Naming this rot on odour plus a missing spore mass is an informed guess, and it should be recorded as one.',
        },
        {
          type: 'list',
          items: [
            'Odour is subjective, unrecorded, and shared with any fermentative spoilage — it cannot separate sour rot from bacterial soft rot, yeast spoilage, or over-ripeness.',
            'The absence of dry powdery sporulation is suggestive of sour rot rather than of a blue or green mould, but early Penicillium lesions have not sporulated either.',
            'Secondary colonisers can add visible sporulation to a lesion that sour rot initiated, removing even the negative cue.',
            'Advanced sour rot destroys the structure of the tissue, so the lesion character that might have distinguished it is gone by the time the rot is obvious.',
            'Confirmation requires culture or molecular identification by a competent laboratory; a name assigned from smell and appearance is not a diagnosis.',
          ],
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Because sour rot needs a wound, needs a susceptible fruit, and travels with flies, the levers act on all three. Handling that avoids punctures and splits removes the entry courts. Harvesting at appropriate maturity rather than late reduces the tissue susceptibility the fungus depends on. Keeping fruit out of contact with soil, and maintaining hygiene where fruit meets water, reduces the load reaching any wound that does occur. Prompt cooling and consistent cold holding slow the rot and slow the ageing that predisposes fruit to it. And removing leaking fruit promptly acts on the fungus and its vector at the same time.',
        },
        {
          type: 'list',
          items: [
            'Minimise punctures, splits, and stem-end injury at every transfer, since intact skin is the principal barrier this fungus must overcome.',
            'Avoid soil contact and maintain hygiene where fruit meets water, which is where the inoculum load is picked up.',
            'Harvest at appropriate maturity: over-mature fruit is markedly more susceptible, and cold does not stop fruit ageing into susceptibility.',
            'Cool promptly and hold consistently to slow both the fungus and the senescence it exploits.',
            'Remove leaking and decayed fruit without delay — this interrupts spread and removes fly breeding sites at once, but it is an appearance and spread measure, not a toxin measure.',
            'Where a mycotoxin question arises, refer it to laboratory testing under the applicable food-safety framework rather than to appearance or smell.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-lemons' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'table-grapes' },
  ],
  causedByConditions: [
    'Wounds from harvest, handling, grading, or splitting that break the skin and admit a fungus common in soil and water',
    'Contact with soil, or with contaminated water and wet handling surfaces, through a break in the skin',
    'Over-mature or late-picked fruit, whose softened tissue and relaxed defences are readily colonised',
    'Fruit fly and vinegar fly activity, which transports the fungus to fresh wounds and breeds in the fermenting tissue',
    'Leaking decayed fruit left in a store or packhouse, acting simultaneously as a spore source and a fly breeding site',
    'Warm, humid conditions and delayed cooling, which accelerate both the rot and the fly population sustaining it',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  confusableWith: [
    'Blue mould — both give soft watery decay, and although sour rot lacks the dry powdery blue-green spore mass, an early Penicillium lesion has not sporulated either, so the negative cue does not separate them at the stage that matters',
    'Green mould on citrus — the same problem as blue mould: the distinguishing spore mass is absent in sour rot but also absent in a young green mould lesion',
    'Grey mould rot — another soft watery decay of the same commodities; its grey-brown sporulation arrives only as the lesion matures, and before that the two are not separable',
    'Bacterial soft rot — bacterial breakdown also produces wet, collapsing, foul tissue with a fermentative odour, and appearance and smell do not distinguish it from a fungal sour rot',
    'Yeast and fermentative spoilage — any sugar-rich tissue breaking down smells sour, so the odour that names this rot is shared with processes that are not sour rot at all',
    'Over-maturity and senescence — very ripe fruit softens, leaks, and develops fermentative notes without any Geotrichum involvement, and the two arrive together',
    'Storage rot in general — sour rot is one specific member of that umbrella category, and its early lesion is the same soft watery decay as every other member',
  ],
  diagnosticLimitations: [
    'The sour fermented odour is the most distinctive cue this rot offers and is still not diagnostic: it is subjective, it is never recorded on any document, and it is shared with bacterial soft rot, yeast spoilage, and simple over-ripeness, because the volatiles arise from sugars breaking down rather than from a particular organism.',
    'The absence of a dry powdery spore mass is suggestive of sour rot rather than a blue or green mould, but it is not confirmatory — young Penicillium lesions have not sporulated either, and secondary colonisers can add sporulation to a lesion that sour rot began.',
    'Advanced sour rot disintegrates the tissue, so by the time the lesion is unmistakable the structural detail that might have distinguished it has been destroyed.',
    'Visible rot does not establish that a mycotoxin is present: Geotrichum is a spoilage organism, but decaying tissue is commonly colonised by other fungi, some toxigenic, and toxin production depends on species, substrate, and conditions.',
    'Critically, the absence of visible rot and of any off odour does not establish the absence of mycotoxin. Mycotoxins are invisible, odourless, and tasteless — the sour smell here comes from spoilage, not from a toxin — and they persist after the fungus is gone, occur in sound-looking tissue next to lesions that were removed, and distribute unevenly through a lot. No inspection, sorting, or washing detects or removes them; only appropriate laboratory analysis on a properly drawn representative sample can answer the question, against limits set by food-safety regulation (see EFSA and FAO).',
    'Fly activity around a lot is consistent with sour rot but does not identify it: fruit flies and vinegar flies are attracted to any fermenting tissue, whatever caused it.',
    'Confirmation of the causal organism requires culture or molecular identification by a competent laboratory; a name assigned from smell and lesion appearance is an informed inference, not a diagnosis.',
  ],
  relatedTopics: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'spotted-wing-drosophila' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  glossaryTerms: ['inoculum', 'integrated-pest-management'],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment framework, and the separation of visible decay from contamination as distinct questions',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling of citrus and tomato, decay control principles, and mycotoxin prevention and management in stored commodities',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Geotrichum candidum sour rot of citrus and tomato after harvest',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Post-harvest decay identification, packhouse hygiene, and the fruit fly association with sour rot',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global wherever citrus, tomato, and grape are grown, packed, and stored, with pressure highest in warm and humid production and handling environments and where fruit fly populations are active; mycotoxin limits and testing requirements are jurisdiction-specific and set by national or regional food-safety regulation.',
  limitations: [
    'This entry gives no temperatures, durations, maturity indices, or mycotoxin limits. Holding conditions and maturity standards are commodity- and cultivar-specific and set by sourced post-harvest guidance; mycotoxin limits are set by food-safety regulation. Consult FAO, USDA-ARS, EFSA, and national regulators.',
    'Identification of the causal organism from odour and appearance is not reliable; sour rot overlaps with bacterial soft rot, yeast spoilage, and other fungal rots, and confirmation requires a competent laboratory.',
    'Nothing here supports assessing the safety of a lot by appearance or smell. Visible decay does not confirm contamination, and its absence does not exclude it; only appropriate laboratory analysis on a properly drawn sample can answer that question.',
    'No fungicide, insecticide, bait, treatment, dose, or application procedure is described here; chemical decay and fly control are governed by product labels and national registration and require qualified advice.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sour Rot: Geotrichum Decay and Fruit Flies',
    description:
      'Sour rot collapses citrus and tomato into wet fermenting tissue and travels with fruit flies. Why the sour smell names it but never confirms it.',
    keywords: [
      'sour rot',
      'Geotrichum candidum',
      'post-harvest decay',
      'citrus rot',
      'fruit flies',
    ],
  },
  structuredData: { article: true },
};
