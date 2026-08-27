import { describe, expect, it } from 'vitest';
import {
  CHANGE_ENTITY_TYPES,
  EVENT_PROVENANCES,
  EVENT_VERIFICATION_STATUSES,
} from '@/types/history';
import {
  allChangeEvents,
  authorityEvents,
  inputAuthorizationEvents,
  varietyRegistrationEvents,
} from '@/lib/history/derive';
import {
  CHANGE_HUB_PATH,
  eventsForEntity,
  historyGroups,
  officiallyDated,
  detectionOnly,
} from '@/lib/history/registry';
import { AUTHORITY_CHANGES } from '@/data/history';
import {
  HISTORY_DATE_CONTRACTS,
  HISTORY_DATE_CONTRACT_MAP,
} from '@/lib/history/contracts';
import { VARIETY_REGISTRATIONS } from '@/data/varieties';
import { isCurrent as isCurrentRegistration } from '@/lib/varieties/registry';
import {
  allAuthorizations,
  isCurrent as isCurrentAuthorization,
} from '@/lib/inputs/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const EVENTS = allChangeEvents();
const CORPUS_DATE = '2026-08-27';
const DOCS = buildSearchDocuments();

describe('history — a detection date is not an effective date', () => {
  it('never uses a retrieval date as the date a change took effect', () => {
    // The failure this layer exists to prevent: an EU approval that ended in
    // 2021, read in 2026, reported as having ended in 2026.
    const substituted = EVENTS.filter(
      (e) => e.occurredAt && e.occurredAt === e.detectedAt,
    ).map((e) => e.id);
    expect(substituted).toEqual([]);
    const mislabelled = EVENTS.filter(
      (e) => e.occurredAt && e.provenance !== 'source-dated',
    ).map((e) => e.id);
    expect(mislabelled).toEqual([]);
  });

  it('says so, rather than guessing, when the source publishes no date', () => {
    const undatedButClaimed = EVENTS.filter(
      (e) => !e.occurredAt && e.provenance === 'source-dated',
    ).map((e) => e.id);
    expect(undatedButClaimed).toEqual([]);
    const silent = EVENTS.filter(
      (e) => !e.occurredAt && e.limitations.length === 0,
    ).map((e) => e.id);
    expect(silent).toEqual([]);
    expect(detectionOnly().length).toBeGreaterThan(0);
    expect(officiallyDated().length).toBeGreaterThan(0);
  });

  it('publishes no change dated in the future', () => {
    // Canada records 19 products as Phase-Out or Emergency Registration with an
    // end date still to come. Those authorisations are in force; listing them
    // as past changes would say a product had been withdrawn while on sale.
    const future = EVENTS.filter(
      (e) => e.occurredAt && e.occurredAt > CORPUS_DATE,
    ).map((e) => e.id);
    expect(future).toEqual([]);
  });

  it('reads a grant date as a grant, never as an expiry', () => {
    // Kronos holds a United States certificate issued 1996-06-28 and now
    // expired. The register publishes the issue date and no expiry date, and
    // using the first as the second would date the expiry to the grant.
    const us = eventsForEntity('variety-registration', 'kronos-durum').find(
      (e) => e.jurisdictionName === 'United States',
    )!;
    expect(us.occurredAt).toBeUndefined();
    expect(us.explanation).toContain('Granted 1996-06-28');
    expect(us.currentValue).toBe('Certificate Expired');
  });
});

describe('history — what a date MEANS is pinned, not inferred', () => {
  it('lets no entity type carry an occurrence date its sources do not publish', () => {
    // A gate can check a date is well formed, past, and not the retrieval date.
    // It cannot see that Kronos's 1996 certificate date is when the right
    // BEGAN. Read as an ending, it is a valid-looking date wrong by thirty
    // years, so the meaning is declared per entity type.
    const violations = EVENTS.filter((e) => {
      const c = HISTORY_DATE_CONTRACT_MAP.get(e.entityType);
      return !c || (c.occurrenceField === null && e.occurredAt !== undefined);
    }).map((e) => e.id);
    expect(violations).toEqual([]);
  });

  it('covers every entity type, and every contract is reached', () => {
    for (const t of CHANGE_ENTITY_TYPES)
      expect(HISTORY_DATE_CONTRACT_MAP.get(t), t).toBeDefined();
    for (const c of HISTORY_DATE_CONTRACTS)
      expect(
        EVENTS.some((e) => e.entityType === c.entityType),
        c.entityType,
      ).toBe(true);
  });

  it('takes an input authorisation’s date only from the field that is an ending', () => {
    const c = HISTORY_DATE_CONTRACT_MAP.get('input-authorization')!;
    expect(c.occurrenceField).toBe('validUntil');
    const dated = EVENTS.filter(
      (e) => e.entityType === 'input-authorization' && e.occurredAt,
    );
    expect(dated.length).toBeGreaterThan(0);
  });
});

describe('history — current state stays canonical', () => {
  it('never puts a current registration in history', () => {
    const historical = new Set(varietyRegistrationEvents().map((e) => e.id));
    for (const r of VARIETY_REGISTRATIONS)
      if (isCurrentRegistration(r))
        expect(historical.has(`variety-registration:${r.id}`), r.id).toBe(
          false,
        );
  });

  it('never puts a current authorisation in history', () => {
    // Keyed on the authorisation id and asserted once. Spreading the event set
    // inside a loop over 22,542 current authorisations is 470 million string
    // comparisons, and it told you no more than the list of offenders does.
    const covered = new Set(
      inputAuthorizationEvents().map((e) => e.id.split(':')[1]),
    );
    const leaked = allAuthorizations()
      .filter((a) => isCurrentAuthorization(a) && covered.has(a.id))
      .map((a) => a.id);
    expect(leaked).toEqual([]);
  });
});

describe('history — instruments and jurisdictions never merge', () => {
  it('keeps a cultivar’s registers apart', () => {
    // Kronos: a surrendered Greek listing, a withdrawn Australian right and an
    // expired United States certificate. Three histories, not one timeline.
    const groups = historyGroups(
      eventsForEntity('variety-registration', 'kronos-durum'),
    );
    expect(groups.length).toBe(3);
    expect(new Set(groups.map((g) => g.jurisdictionName))).toEqual(
      new Set(['Greece', 'Australia', 'United States']),
    );
    for (const g of groups) {
      expect(new Set(g.events.map((e) => e.instrument)).size).toBe(1);
      expect(new Set(g.events.map((e) => e.jurisdictionName)).size).toBe(1);
    }
  });
});

describe('history — an alias is not a former name', () => {
  it('stores a rename only where the body’s own material established one', () => {
    expect(AUTHORITY_CHANGES).toHaveLength(2);
    for (const e of AUTHORITY_CHANGES) {
      expect(e.previousValue, e.id).toBeTruthy();
      expect(e.explanation, e.id).toBeTruthy();
      // No rename date is established anywhere in this corpus.
      expect(e.occurredAt, e.id).toBeUndefined();
    }
  });

  it('gives the other 78 authorities no rename event', () => {
    const renamed = new Set(authorityEvents().map((e) => e.entityId));
    expect(renamed).toEqual(new Set(['ca-on-omafa', 'nga-fmafs']));
  });
});

describe('history — shape and wiring', () => {
  it('uses only vocabulary members, and reaches every entity type', () => {
    const types = new Set(EVENTS.map((e) => e.entityType));
    for (const t of CHANGE_ENTITY_TYPES) expect(types, t).toContain(t);
    const bad = EVENTS.filter(
      (e) =>
        !EVENT_PROVENANCES.includes(e.provenance) ||
        !EVENT_VERIFICATION_STATUSES.includes(e.verificationStatus) ||
        e.sourceIds.length === 0,
    ).map((e) => e.id);
    expect(bad).toEqual([]);
  });

  it('publishes one hub and no page per event', () => {
    // 21,000 event pages would each be thinner than the entity they describe.
    const paths = allRoutes().map((r) => r.path);
    expect(paths).toContain(CHANGE_HUB_PATH);
    expect(
      paths.filter((p) => p.startsWith(`${CHANGE_HUB_PATH}/`)),
    ).toHaveLength(0);
  });

  it('indexes change history as one low-weight hub document', () => {
    const docs = DOCS.filter((d) => d.type === 'change-history');
    expect(docs).toHaveLength(1);
    expect(docs[0]!.route).toBe(CHANGE_HUB_PATH);
    // Entity names belong to entity pages. A page ABOUT change must not carry
    // the names of the things that changed at name weight.
    expect(
      docs[0]!.names.some((n) => /france|canada|glyphosate/i.test(n)),
    ).toBe(false);
  });
});
