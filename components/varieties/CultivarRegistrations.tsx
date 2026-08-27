import Link from 'next/link';
import {
  registrationsForCultivar,
  isCurrent,
  VARIETY_REGISTRATION_HUB_PATH,
} from '@/lib/varieties/registry';
import {
  CULTIVAR_MATCH_CAVEAT,
  VARIETY_REGISTRATION_CAVEAT,
  type VarietyRegistrationEntry,
} from '@/types/variety';

/**
 * Official register entries on a cultivar page.
 *
 * Renders nothing when none is recorded — silence is correct, because a
 * cultivar with no entry is one whose registration AgricultureID has not
 * established, not one that is unregistered. "Not registered" would be a claim;
 * saying nothing is not.
 *
 * Current and historical entries are shown in SEPARATE tables rather than one
 * table with a status column, because a reader skimming a mixed list reads the
 * row count as "registered in 10 countries" when three of those countries
 * surrendered the listing years ago.
 *
 * National list entries and plant breeders' rights are likewise never summed:
 * they are different legal instruments, granted by different bodies.
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
                  {e.instrument === 'community-plant-variety-right'
                    ? 'Community plant variety right'
                    : `National list — ${e.publishedSubTypeWording.toLowerCase()}`}
                </span>
              </th>
              <td className="py-2 pr-3 text-ink-700">
                {e.publishedStatusWording}
              </td>
              <td className="py-2 pr-3 italic text-ink-700">
                {e.upovSpeciesName}
              </td>
              <td className="py-2 font-mono text-xs text-ink-500">
                {e.registerUuid}
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
  const historical = entries.filter((e) => !isCurrent(e));

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
      <RegistrationTable
        caption={`No longer listed (${historical.length})`}
        entries={historical}
      />

      <p className="mt-4 text-xs text-ink-500">{CULTIVAR_MATCH_CAVEAT}</p>
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
