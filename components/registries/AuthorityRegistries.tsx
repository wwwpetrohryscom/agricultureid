import Link from 'next/link';
import {
  registriesForAuthority,
  publishedRegistries,
  registryPath,
  REGISTRIES_HUB_PATH,
} from '@/lib/registries/registry';
import { humanizeToken } from '@/lib/authorities/registry';

/**
 * "Registries & databases" on an authority page.
 *
 * Entirely data-driven from the registry records' `responsibleAuthorityIds`,
 * so an authority page never hardcodes a registry link and cannot go stale when
 * a ministry is renamed. Renders nothing when the authority administers no
 * recorded system.
 */
export function AuthorityRegistries({ authorityId }: { authorityId: string }) {
  const items = registriesForAuthority(authorityId);
  if (items.length === 0) return null;

  const published = new Set(publishedRegistries().map((r) => r.slug));

  return (
    <section className="mt-10">
      <h2 className="font-serif text-xl text-forest-900">
        Registries and databases
      </h2>
      <p className="mt-1 text-sm text-ink-600">
        Official systems this authority administers, as recorded in the
        AgricultureID registry corpus.
      </p>
      <ul className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
        {items.map((r) => (
          <li key={r.id} className="py-3">
            <p className="font-medium text-ink-900">
              {published.has(r.slug) ? (
                <Link
                  href={registryPath(r.slug)}
                  className="text-forest-800 hover:underline"
                >
                  {r.officialName}
                </Link>
              ) : (
                r.officialName
              )}
              <span className="ml-2 text-xs text-ink-500">
                {humanizeToken(r.registryType)}
              </span>
            </p>
            <p className="mt-0.5 text-sm text-ink-600">{r.scope[0]}</p>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-sm">
        <Link
          href={REGISTRIES_HUB_PATH}
          className="text-forest-700 hover:underline"
        >
          All official registries
        </Link>
      </p>
    </section>
  );
}
