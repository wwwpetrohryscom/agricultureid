import Link from 'next/link';
import {
  registrationsForCultivar,
  isCurrent,
  VARIETY_REGISTRATION_HUB_PATH,
} from '@/lib/varieties/registry';
import { eventsForEntity } from '@/lib/history/registry';
import { EntityChangeHistory } from '@/components/history/EntityChangeHistory';
import {
  CULTIVAR_MATCH_CAVEAT,
  INSTRUMENT_KIND,
  INSTRUMENT_KIND_CAVEAT,
  VARIETY_REGISTRATION_CAVEAT,
  type VarietyRegistrationEntry,
} from '@/types/variety';

const INSTRUMENT_LABEL: Record<string, string> = {
  'national-list': 'National list entry',
  'community-plant-variety-right': 'Community plant variety right',
  'plant-breeders-right': 'Plant breeder’s right',
  'plant-variety-protection-certificate':
    'Certificate of plant variety protection',
  'variety-registration': 'Variety registration',
};

/**
 * Official register entries on a cultivar page.
 *
 * Renders nothing when none is recorded — silence is correct, because a
 * cultivar with no entry is one whose registration AgricultureID has not
 * established, not one that is unregistered. "Not registered" would be a claim;
 * saying nothing is not.
 *
 * Current entries are a table; entries that are no longer current are a dated
 * history below it. One mixed table would be read as "registered in 10
 * countries" when three of those countries surrendered the listing years ago,
 * and a second table of past rows would say what changed without saying when —
 * which for these registers is usually "the register does not publish a date",
 * a fact worth stating rather than hiding behind a blank column.
 *
 * Nor are the two KINDS of instrument summed. Permission to market a variety
 * and ownership of it are different facts, so each table names the instrument
 * behind every row: a reader who counts eight entries should not come away
 * believing a variety may be sold in eight places when three of those rows are
 * ownership grants that say nothing about selling anything.
 */
function RegistrationTable({
  caption,
  entries,
}: {
  caption: string;
  entries: VarietyRegistrationEntry[];
}) {
  if (entries.length === 0) return null;
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <caption className="mb-2 text-left text-sm font-medium text-ink-900">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
            <th scope="col" className="py-2 pr-3 font-medium">
              Register
            </th>
            <th scope="col" className="py-2 pr-3 font-medium">
              Status
            </th>
            <th scope="col" className="py-2 pr-3 font-medium">
              Species as published
            </th>
            <th scope="col" className="py-2 font-medium">
              Register reference
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.id} className="border-b border-ink-100 align-top">
              <th scope="row" className="py-2 pr-3 font-normal text-ink-900">
                {e.countryOrOrganisation}
                <span className="block text-xs text-ink-500">
                  {INSTRUMENT_LABEL[e.instrument] ?? e.instrument}
                  {e.publishedSubTypeWording
                    ? ` — ${e.publishedSubTypeWording.toLowerCase()}`
                    : ''}
                </span>
                <span className="block text-xs text-ink-400">
                  {INSTRUMENT_KIND[e.instrument] === 'variety-registration'
                    ? 'Permission to market'
                    : 'Ownership of the variety'}
                </span>
              </th>
              <td className="py-2 pr-3 text-ink-700">
                {e.publishedStatusWording}
              </td>
              <td className="py-2 pr-3 italic text-ink-700">
                {e.registerSpeciesName}
                {e.registerSpeciesSubGroup ? (
                  <span className="block text-xs not-italic text-ink-500">
                    {e.registerSpeciesSubGroup} — the register publishes a crop
                    kind, not a botanical name
                  </span>
                ) : null}
              </td>
              <td className="py-2 font-mono text-xs text-ink-500">
                {e.registerEntryId ?? '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CultivarRegistrations({
  cultivarRef,
}: {
  cultivarRef: string;
}) {
  const entries = registrationsForCultivar(cultivarRef);
  if (entries.length === 0) return null;

  const current = entries.filter(isCurrent);
  const history = eventsForEntity('variety-registration', cultivarRef);

  return (
    <section className="mt-8 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <h2 className="font-serif text-lg text-forest-900">
        Official variety registration
      </h2>
      <p className="mt-1 text-sm text-ink-600">
        Entries recorded for this denomination in official variety registers.
        Registration is a legal fact about marketing or ownership, separate from
        where the variety is grown or whether seed is available.
      </p>

      <RegistrationTable
        caption={`Current entries (${current.length})`}
        entries={current}
      />
      {current.length === 0 ? (
        <p className="mt-3 text-sm text-ink-600">
          No entry for this cultivar is currently listed in the registers
          AgricultureID reads.
        </p>
      ) : null}

      <EntityChangeHistory
        events={history}
        heading="Entries that are no longer current"
        intro="Each register decides separately, so these are grouped by instrument and jurisdiction and never combined into one timeline."
      />

      <p className="mt-4 text-xs text-ink-500">{INSTRUMENT_KIND_CAVEAT}</p>
      <p className="mt-2 text-xs text-ink-500">{CULTIVAR_MATCH_CAVEAT}</p>
      <p className="mt-2 text-xs text-ink-500">
        {VARIETY_REGISTRATION_CAVEAT}{' '}
        <Link
          href={VARIETY_REGISTRATION_HUB_PATH}
          className="underline hover:text-forest-800"
        >
          How registration is recorded
        </Link>
        .
      </p>
    </section>
  );
}
