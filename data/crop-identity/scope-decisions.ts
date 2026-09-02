/**
 * Decisions about what a crop concept covers, and the research behind them.
 *
 * Wave 33 found three published scope sentences that claimed corpus coverage
 * that did not exist. Two of them — macadamia and yam — were left as open debt
 * because correcting the sentence was not the same as answering the question it
 * raised. This file is where those questions get answered, or are explicitly
 * recorded as not answerable yet.
 *
 * A decision here is not a summary of a conversation. It names the question, the
 * sources consulted, what they said, what was decided and what would change the
 * decision — so that a later wave inherits the reasoning rather than the
 * conclusion.
 */

export const SCOPE_OUTCOMES = [
  'KEEP_GENUS_CONCEPT_ONLY',
  'ADD_VERIFIED_DATA_ONLY_TAXA',
  'PROMOTE_SPECIES',
  'REWRITE_SCOPE',
  'DEFER_TAXONOMIC_COMPLEXITY',
] as const;
export type ScopeOutcome = (typeof SCOPE_OUTCOMES)[number];

export interface ScopeDecision {
  /** The concept or identity the decision is about. */
  slug: string;
  question: string;
  outcome: ScopeOutcome;
  /** What the sources actually said. */
  finding: string;
  /** What would make this decision wrong. */
  wouldChangeIf: string;
  /** Identity slugs added as a result. */
  taxaAdded?: string[];
  sourceIds: string[];
  decidedAt: string;
}

export const SCOPE_DECISIONS: readonly ScopeDecision[] = [
  {
    slug: 'macadamia',
    question:
      'The macadamia concept claimed two species were verified separately and the corpus held neither. Should those species be added, should either be promoted, or should the concept stay at genus level?',
    outcome: 'ADD_VERIFIED_DATA_ONLY_TAXA',
    finding:
      'Only Macadamia integrifolia, M. tetraphylla and hybrids between them are grown for nuts; the rest of the genus is not a nut crop. Both names were checked against both authorities and both agree: World Flora Online places Macadamia integrifolia Maiden & Betche and Macadamia tetraphylla L.A.S.Johnson in Proteaceae, and the Plants of the World Online checklist holds both as accepted species in the same family. The identities were added on that basis. Promotion was considered and declined: most commercial plantings are interspecific hybrids rather than either pure species — the M. integrifolia cultivars developed in Hawaii account for the majority of world production, and only a few pure M. tetraphylla cultivars are grown commercially — so a page for either species alone would describe a minority of the crop while the genus page continued to describe the rest.',
    wouldChangeIf:
      'The balance of commercial plantings shifted decisively towards pure-species material, or enough species-level agronomy became available that a page could say something the genus page cannot.',
    taxaAdded: ['smooth-shell-macadamia', 'rough-shell-macadamia'],
    sourceIds: ['cabi', 'fao'],
    decidedAt: '2026-09-02',
  },
  {
    slug: 'yam',
    question:
      'Both authorities place white yam under yellow yam, while the agricultural literature treats them as distinct crops. Should AgricultureID model one broader cayenensis concept, separate agricultural forms under one botanical concept, separate rank-aware identities, or keep only the yam umbrella?',
    outcome: 'DEFER_TAXONOMIC_COMPLEXITY',
    finding:
      'The authorities agree, and they agree on something inconvenient. Plants of the World Online treats Dioscorea rotundata Poir. as a synonym of Dioscorea cayenensis subsp. rotundata (Poir.) J.Miege, holding Dioscorea cayenensis Lam. as the accepted species with subsp. cayenensis and subsp. rotundata both accepted beneath it. World Flora Online places rotundata in the same position and marks the bare binomial as a synonym, differing only in spelling the species epithet cayennensis. So there is no authority dispute to resolve — botanically, white yam is an infraspecific taxon of yellow yam. The tension is between that treatment and agricultural convention, which handles white yam and yellow yam as different crops with different season lengths, tuber form and storage behaviour. The corpus already models this correctly and rank-awarely: white yam at subspecies rank, yellow yam at species rank, both held as taxa inside the yam species-complex concept. Nothing about the structure needs changing. What remains open is whether the cayenensis group as a whole should be promoted, and that is a research question about evidence depth rather than about taxonomy, so it belongs to the crop research campaign rather than here.',
    wouldChangeIf:
      'An authority reinstated Dioscorea rotundata at species rank, or the research campaign found enough species-level agronomic evidence to carry pages for the cayenensis group as a whole.',
    sourceIds: ['fao', 'iita', 'cabi'],
    decidedAt: '2026-09-02',
  },
];
