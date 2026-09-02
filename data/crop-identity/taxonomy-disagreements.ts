/**
 * Where the two authorities do not agree, and what kind of disagreement it is.
 *
 * The identity layer records `agreement: 'disagreed' | 'single-source'` and a
 * prose note. That is enough to know something is unsettled and not enough to
 * know how much it matters. Six of the eleven are simply a gap in one
 * authority's coverage; two are live disputes about which genus a plant belongs
 * to; one is a spelling. Flattening those into one word tells a reader to
 * distrust all of them equally, which is wrong in both directions.
 */
import type { TaxonomyDisagreement } from '@/types/crop-concepts';

export const TAXONOMY_DISAGREEMENTS: readonly TaxonomyDisagreement[] = [
  {
    identitySlug: 'mustard',
    kind: 'placement',
    wfo: 'Brassica juncea',
    powo: '× Brassarda juncea',
    corpusTakes:
      'Brassica juncea. The nothogenus reflects a recircumscription of the Brassiceae that is not yet followed by the agricultural literature, the seed trade or the variety registers this corpus links to.',
    resolvedBy:
      'Adoption or rejection of the Brassiceae recircumscription by the wider taxonomic community.',
  },
  {
    identitySlug: 'phacelia',
    kind: 'placement',
    wfo: 'Ramosissimae tanacetifolia',
    powo: 'Phacelia tanacetifolia',
    corpusTakes:
      'Phacelia tanacetifolia, the name under which the plant is sold as a cover crop and listed in every seed catalogue.',
    resolvedBy: 'Agreement between the authorities on the generic placement.',
  },
  {
    identitySlug: 'rabbiteye-blueberry',
    kind: 'sinking',
    wfo: 'Vaccinium corymbosum',
    powo: 'Vaccinium virgatum',
    corpusTakes:
      'Vaccinium virgatum. Rabbiteye blueberry differs from highbush in chilling requirement, heat tolerance and harvest season, and sinking it into V. corymbosum would erase a distinction the crop turns on.',
    resolvedBy:
      'A decision on whether V. virgatum is a distinct species or a form of V. corymbosum.',
  },
  {
    identitySlug: 'turnip-rape',
    kind: 'rank',
    wfo: 'Brassica rapa subsp. oleifera',
    powo: 'Brassica rapa',
    corpusTakes:
      'The subspecies. Brassica rapa also covers pak choi, Chinese cabbage and turnip; publishing the oilseed at species rank would put four unrelated crops on one identity.',
    resolvedBy:
      'Nothing needs to be resolved. Both readings are correct at their own rank; the corpus needs the finer one.',
  },
  {
    identitySlug: 'white-yam',
    kind: 'orthography',
    wfo: 'Dioscorea cayennensis subsp. rotundata',
    powo: 'Dioscorea cayenensis subsp. rotundata',
    corpusTakes:
      'The single-n spelling, following Plants of the World Online. The authorities agree completely on the plant and on its rank; they spell the epithet differently.',
    resolvedBy:
      'An orthographic correction by one authority. This is not a dispute about the plant.',
  },
  {
    identitySlug: 'triticale',
    kind: 'coverage',
    wfo: '(no placement returned)',
    powo: '×Triticosecale Wittm. ex A.Camus',
    corpusTakes:
      'The Plants of the World Online reading. World Flora Online’s matcher does not resolve nothogenera at all, so its silence is a property of the tool rather than a judgement about triticale.',
    resolvedBy: 'World Flora Online extending coverage to nothogenera.',
  },
  {
    identitySlug: 'emmer',
    kind: 'coverage',
    wfo: '(no placement returned)',
    powo: 'Triticum turgidum subsp. dicoccum',
    corpusTakes: 'The Plants of the World Online reading.',
    resolvedBy: 'World Flora Online resolving the name.',
  },
  {
    identitySlug: 'yellow-yam',
    kind: 'coverage',
    wfo: '(no placement returned)',
    powo: 'Dioscorea cayenensis',
    corpusTakes: 'The Plants of the World Online reading.',
    resolvedBy: 'World Flora Online resolving the name.',
  },
  {
    identitySlug: 'corn-salad',
    kind: 'coverage',
    wfo: '(no placement returned)',
    powo: 'Valeriana locusta',
    corpusTakes:
      'The Plants of the World Online reading, which sinks Valerianella into Valeriana.',
    resolvedBy: 'World Flora Online resolving the name.',
  },
  {
    identitySlug: 'strawberry',
    kind: 'coverage',
    wfo: '(no placement returned for the hybrid)',
    powo: 'Fragaria × ananassa',
    corpusTakes:
      'The Plants of the World Online reading. World Flora Online returns no placement for the hybrid name.',
    resolvedBy: 'World Flora Online placing the hybrid.',
  },
  {
    identitySlug: 'blackberry',
    kind: 'coverage',
    wfo: '(no placement returned for the aggregate)',
    powo: 'Rubus fruticosus agg.',
    corpusTakes:
      'Neither. The corpus publishes the genus rather than the aggregate, because an aggregate is not a taxon and the microspecies are contested.',
    resolvedBy:
      'A settled treatment of the apomictic Rubus microspecies, which is not in prospect.',
  },
];

export const DISAGREEMENT_BY_SLUG = new Map(
  TAXONOMY_DISAGREEMENTS.map((d) => [d.identitySlug, d]),
);
