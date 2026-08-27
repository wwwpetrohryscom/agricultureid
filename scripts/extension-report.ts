/**
 * Advisory report on the extension index. Offline, never blocking.
 *
 * Surfaces what the gate cannot judge: how much of the index carries a real
 * publisher date, how narrow its geography is, which entities it reaches, and —
 * most usefully — what was found and deliberately NOT indexed. An index that
 * reports only what it contains reads as coverage; what it excluded is the more
 * honest number.
 */
import { EXTENSION_RESOURCES } from '../data/extension';
import { EXTENSION_INSTITUTIONS } from '../data/extension/institutions';
import {
  isDated,
  statedDate,
  resourcesByTopic,
  entitiesWithResources,
} from '../lib/extension/registry';
import { TOPIC_LABEL, EXTENSION_TOPICS } from '../types/extension';
import { PUBLISHED_CONTENT } from '../lib/content/registry';

const R = EXTENSION_RESOURCES;
console.log('\nExtension resource report\n');
console.log(`  Resources:                ${R.length}`);
console.log(`  Publishers:               ${EXTENSION_INSTITUTIONS.length}`);
console.log(
  `  Entities reached:         ${entitiesWithResources().length} of ${PUBLISHED_CONTENT.length}`,
);

console.log('\n  By publisher');
for (const i of EXTENSION_INSTITUTIONS) {
  const own = R.filter((r) => r.institutionId === i.id);
  const dated = own.filter(isDated).length;
  console.log(
    `    ${i.officialName.slice(0, 28).padEnd(30)} ${String(own.length).padStart(4)}  dated ${String(dated).padStart(3)}/${String(own.length).padEnd(3)}  ${i.jurisdictionId ?? i.countryCode}  ${i.mandate}`,
  );
}

console.log('\n  Vintage — the publisher’s own date, never inferred');
const dated = R.filter(isDated);
console.log(`    stated:                 ${dated.length}`);
console.log(`    none stated:            ${R.length - dated.length}`);
const years = new Map<string, number>();
for (const r of dated) {
  const y = (statedDate(r) ?? '').slice(0, 4);
  years.set(y, (years.get(y) ?? 0) + 1);
}
for (const [y, n] of [...years].sort()) {
  const age = 2026 - Number(y);
  console.log(
    `    ${y}  ${String(n).padStart(4)}${age >= 5 ? `   <- ${age} years old; vintage is labelled, not hidden` : ''}`,
  );
}

console.log('\n  By topic');
const byTopic = resourcesByTopic();
for (const t of EXTENSION_TOPICS) {
  const n = byTopic.get(t)?.length ?? 0;
  if (n)
    console.log(`    ${TOPIC_LABEL[t].padEnd(24)} ${String(n).padStart(4)}`);
}
const unused = EXTENSION_TOPICS.filter((t) => !byTopic.get(t)?.length);
if (unused.length)
  console.log(
    `    unused topics: ${unused.map((t) => TOPIC_LABEL[t]).join(', ')}`,
  );

console.log('\n  By resource type');
const types = new Map<string, number>();
for (const r of R)
  types.set(r.resourceType, (types.get(r.resourceType) ?? 0) + 1);
for (const [t, n] of [...types].sort((a, b) => b[1] - a[1]))
  console.log(`    ${t.padEnd(24)} ${String(n).padStart(4)}`);

console.log('\n  Entity coverage');
for (const [label, field] of [
  ['crops', 'cropRefs'],
  ['livestock', 'livestockRefs'],
  ['pests', 'pestRefs'],
  ['diseases', 'diseaseRefs'],
  ['other topics', 'topicRefs'],
] as const) {
  const set = new Set(R.flatMap((r) => r[field]));
  console.log(
    `    ${label.padEnd(16)} ${String(set.size).padStart(4)} entities linked`,
  );
}

console.log('\n  Geographic reach, stated plainly');
console.log(
  '    Pennsylvania, North Carolina and Great Britain only. This index does\n' +
    '    NOT cover most US states, Canada, Australia or the EU. A resource here\n' +
    '    applies where it was written and nowhere else, and absence of guidance\n' +
    '    for a place is absence from this index, not absence of guidance.',
);

console.log('\n  Found and deliberately not indexed');
console.log(
  '    - Resources whose page yielded fewer than two content headings after\n' +
    '      site furniture ("Related Publications", "Ask Tilva", "You may also be\n' +
    '      interested in") was removed: too thin to describe honestly.\n' +
    '    - AHDB pages outside the Knowledge Library: research-project records,\n' +
    '      not agronomic guidance, and indexing them as advice would misrepresent\n' +
    '      both.\n' +
    '    - Candidates whose title and headings matched no topic in the closed\n' +
    '      vocabulary. A resource that cannot be classified is not filed under a\n' +
    '      guessed topic.\n' +
    '    - NC State search URLs (/*?keywords*), which its robots.txt disallows.',
);
console.log('');
