/**
 * Which published field, if any, may supply an event's occurrence date.
 *
 * A gate can check that a date is well formed, in the past, and different from
 * the retrieval date. It cannot check what the date MEANS — and that is where
 * this layer's worst error lives.
 *
 * Every variety register in this corpus publishes a decision date: the United
 * States an issue date, Canada a registration date, the United Kingdom a
 * listing decision. None of them publishes an END date. Read carelessly, Kronos's
 * expired certificate acquires the date it was granted, and the page says a
 * right ended in 1996 that in fact BEGAN in 1996 — a well-formed, past,
 * non-retrieval date that is wrong by thirty years and looks perfectly valid.
 *
 * So the meaning is pinned per entity type rather than inferred, in the same
 * shape Waves 15, 18 and 19 arrived at: a source-specific invariant lives in an
 * explicit table, an entity type without an entry fails closed, and a register
 * that starts publishing end dates has to be reviewed rather than silently
 * absorbed.
 */
import type { ChangeEntityType } from '@/types/history';

export interface HistoryDateContract {
  entityType: ChangeEntityType;
  /**
   * The published field whose value may be an event's `occurredAt`, or null
   * where the sources for this entity type publish no date for a change at all.
   */
  occurrenceField: string | null;
  why: string;
}

export const HISTORY_DATE_CONTRACTS: readonly HistoryDateContract[] = [
  {
    entityType: 'input-authorization',
    occurrenceField: 'validUntil',
    why: 'The pesticide registers publish the date an authorisation ceased to be valid. That is the ending itself, and it is the only field here that is one.',
  },
  {
    entityType: 'variety-registration',
    occurrenceField: null,
    why: 'These registers publish a grant or listing date and no end date. The grant date describes the beginning, so no event of this type may carry an occurrence date; it is shown as context instead.',
  },
  {
    entityType: 'authority',
    occurrenceField: null,
    why: 'A rename was established by reading the body’s current material. That establishes THAT it was renamed, never when, and a verification date is not an effective date.',
  },
];

export const HISTORY_DATE_CONTRACT_MAP: ReadonlyMap<
  ChangeEntityType,
  HistoryDateContract
> = new Map(HISTORY_DATE_CONTRACTS.map((c) => [c.entityType, c]));
