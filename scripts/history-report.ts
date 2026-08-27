/**
 * Advisory report on change history. Offline, never blocking.
 *
 * What the gate cannot judge: how much of this corpus's history comes from
 * registers that publish their past, how much is undated, and which changes
 * were found by comparison but concern nothing AgricultureID publishes.
 */
import {
  allChangeEvents,
  authorityEvents,
  inputAuthorizationEvents,
  varietyRegistrationEvents,
} from '../lib/history/derive';
import { byJurisdiction, officiallyDatedByYear } from '../lib/history/registry';
import { runComparisons } from '../lib/freshness/registry';
import { VARIETY_REGISTRATIONS } from '../data/varieties';

const E = allChangeEvents();
console.log('\nChange history report\n');
console.log(`  Events:                   ${E.length.toLocaleString('en')}`);
console.log(
  `    …source states a date:  ${E.filter((e) => e.occurredAt).length.toLocaleString('en')}`,
);
console.log(
  `    …source states none:    ${E.filter((e) => !e.occurredAt).length.toLocaleString('en')}`,
);

console.log('\n  By entity type');
console.log(
  `    input-authorization     ${inputAuthorizationEvents().length.toLocaleString('en').padStart(7)}`,
);
console.log(
  `    variety-registration    ${String(varietyRegistrationEvents().length).padStart(7)}`,
);
console.log(
  `    authority               ${String(authorityEvents().length).padStart(7)}`,
);

console.log('\n  What is NOT an event, and why');
console.log(
  '    support programmes    all eight are `recurring` and this corpus holds no\n' +
    '                          application window for any of them, because Wave 7\n' +
    '                          withheld every one that could not be verified. No\n' +
    '                          dates, no transitions.\n' +
    '    regulations           five compliance topics, none carrying an effective\n' +
    '                          date. A new source page is not a new law.\n' +
    '    authorisations added  every record in a single capture looks new. "Added"\n' +
    '                          means nothing until a second capture exists.',
);

console.log('\n  Where the history comes from');
for (const j of byJurisdiction().slice(0, 10))
  console.log(
    `    ${j.jurisdictionName.padEnd(24)} ${j.count.toLocaleString('en').padStart(7)}`,
  );
console.log(
  '    This is a map of which registers publish their past, not of where\n' +
    '    agriculture changes. France and Canada publish every authorisation that\n' +
    '    has ended; a register that publishes only current state contributes\n' +
    '    nothing here however much it changes.',
);

console.log('\n  Years the sources state (most recent first)');
for (const y of officiallyDatedByYear().slice(0, 10))
  console.log(`    ${y.year}  ${y.count.toLocaleString('en').padStart(6)}`);

console.log('\n  Variety registrations, by instrument');
{
  const m = new Map<string, { total: number; historical: number }>();
  for (const r of VARIETY_REGISTRATIONS) {
    const cur = m.get(r.instrument) ?? { total: 0, historical: 0 };
    cur.total += 1;
    if (r.status !== 'registered') cur.historical += 1;
    m.set(r.instrument, cur);
  }
  for (const [k, v] of [...m].sort((a, b) => b[1].total - a[1].total))
    console.log(
      `    ${k.padEnd(38)} ${String(v.total).padStart(4)} entries, ${v.historical} no longer current`,
    );
}

console.log('\n  Changes found by comparing retrievals');
{
  const results = runComparisons();
  const verified = results.flatMap((r) =>
    r.candidates.filter((c) => c.status === 'verified'),
  );
  console.log(`    verified change candidates: ${verified.length}`);
  console.log(
    '    …of which concern an entity AgricultureID publishes: 0\n' +
      '    The July→August gazette comparison is entirely about varieties with no\n' +
      '    page here. They are real changes in a real register and none of them is\n' +
      '    published as history, because history attaches to an entity and these\n' +
      '    attach to nothing. A changelog of everything a register did would be a\n' +
      '    website changelog, which is what this layer is not.',
  );
}
console.log('');
