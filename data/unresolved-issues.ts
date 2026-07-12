/**
 * Explicit, machine-readable registry of unresolved scientific/taxonomic issues
 * surfaced by the Phase 2.1 audit. This is a first-class data artifact (not only
 * narrative docs): it is validated (`content:validate`) and tested.
 *
 * Rule enforced by the validator: an issue whose current public claim is NOT
 * safe (`publicClaimSafe: false`) may not remain `status: 'open'` — it must be
 * mitigated (wording narrowed, uncertainty noted, relationship removed, or the
 * claim suppressed) before it can ship.
 */

export type IssueSeverity = 'critical' | 'major' | 'minor';
export type IssueStatus = 'open' | 'mitigated' | 'resolved';

export interface UnresolvedIssue {
  /** Stable id. */
  id: string;
  /** Affected page/entity (and relationship, where relevant). */
  entity: string;
  /** Short topic title. */
  topic: string;
  /** The current PUBLIC wording or structural state after mitigation. */
  currentWording: string;
  /** Why the issue remains unresolved. */
  whyUnresolved: string;
  severity: IssueSeverity;
  /** Is the current public claim safe (not misleading / not a definitive error)? */
  publicClaimSafe: boolean;
  /** The source or content work required to fully resolve it. */
  requiredWork: string;
  status: IssueStatus;
  /** What was changed publicly to make the claim safe (if anything). */
  mitigation?: string;
}

export const UNRESOLVED_ISSUES: UnresolvedIssue[] = [
  {
    id: 'blueberry-fly-pest-taxonomy',
    entity: 'crop:blueberry (relationship → pest:fruit-flies)',
    topic: 'Blueberry fly-pest taxonomy — Tephritidae vs Drosophilidae',
    currentWording:
      'Blueberry lists "fruit-flies" as a common pest. Page text now reads: "…blueberry maggot is a true fruit fly (family Tephritidae), whereas the most damaging modern fly pest in many regions, spotted-wing drosophila, belongs to a different fly family (Drosophilidae) and is not profiled separately here."',
    whyUnresolved:
      'The corpus has no spotted-wing drosophila (Drosophila suzukii, Drosophilidae) entry; the existing fruit-flies entry is scoped to Tephritidae. Blueberry maggot (Rhagoletis mendax) is a genuine tephritid host, so the relationship is defensible, but SWD — the dominant modern fly pest of blueberry — is not represented.',
    severity: 'minor',
    publicClaimSafe: true,
    requiredWork:
      'Add a spotted-wing-drosophila (Drosophilidae) pest entry in a future content wave and link it from blueberry and other soft-fruit crops.',
    status: 'mitigated',
    mitigation:
      'Added an explicit uncertainty note distinguishing Tephritidae (blueberry maggot) from Drosophilidae (SWD); kept the defensible tephritid relationship.',
  },
  {
    id: 'cassava-bacterial-disease-pathogen',
    entity:
      'crop:cassava and plant-disease:bacterial-wilt (relationship removed both ways)',
    topic:
      'Cassava bacterial disease — bacterial blight (Xanthomonas) vs bacterial wilt (Ralstonia)',
    currentWording:
      'The cassava↔bacterial-wilt relationship has been REMOVED. Cassava page text retains the accurate prose "Cassava bacterial blight causes wilting and dieback…" with no dedicated disease slug and no pathogen misattribution.',
    whyUnresolved:
      "Cassava's classic bacterial disease is cassava bacterial blight (Xanthomonas axonopodis pv. manihotis), not the bacterial wilt (Ralstonia solanacearum) profiled by the bacterial-wilt entry. No dedicated cassava-bacterial-blight page exists yet.",
    severity: 'major',
    publicClaimSafe: true,
    requiredWork:
      'Create a dedicated cassava-bacterial-blight (Xanthomonas) plant-disease entry and link it from cassava.',
    status: 'mitigated',
    mitigation:
      'Removed the cassava↔bacterial-wilt relationship in both directions so cassava disease is not attributed to Ralstonia; ginger (a genuine Ralstonia host) is retained.',
  },
  {
    id: 'honey-bee-worker-sterility',
    entity: 'livestock:honey-bees',
    topic: 'Honey-bee worker "sterile" wording',
    currentWording:
      '"Functionally sterile (non-reproductive) female bees that forage, nurse brood, build comb, and defend the hive…"',
    whyUnresolved:
      'The full reproductive nuance (workers are facultatively sterile; laying workers can develop in a queenless colony, with queen pheromone normally suppressing ovary activation) is not fully expanded; the shorthand is now qualified but not exhaustively explained.',
    severity: 'minor',
    publicClaimSafe: true,
    requiredWork:
      'Optionally expand honey-bee reproductive biology (laying workers, pheromonal suppression) if the entry is deepened.',
    status: 'mitigated',
    mitigation:
      'Narrowed the definitive "sterile female bees" to "functionally sterile (non-reproductive) female bees".',
  },
];
