import Link from 'next/link';
import {
  authoritiesForCountry,
  authorityPath,
  publishedAuthorities,
  humanizeToken,
  AUTHORITIES_HUB_PATH,
} from '@/lib/authorities/registry';

/**
 * The "Agricultural authorities" section on a country page.
 *
 * Renders nothing at all when no verified authority exists for the country —
 * an empty heading would imply that one is missing rather than that none has
 * been verified. Grouping is derived from the data, never hardcoded, so a group
 * only appears when it has real entries.
 */
export function CountryAuthorities({ countryCode }: { countryCode: string }) {
  const items = authoritiesForCountry(countryCode);
  if (items.length === 0) return null;

  const publishedSlugs = new Set(publishedAuthorities().map((a) => a.slug));

  return (
    <section id="agricultural-authorities" className="mt-10">
      <h2 className="font-serif text-xl text-forest-900">
        Agricultural authorities
      </h2>
      <p className="mt-1 text-sm text-ink-600">
        Official public bodies verified against government sources.
        AgricultureID is independent and not affiliated with them.
      </p>
      <ul className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
        {items.map((a) => {
          const hasPage = publishedSlugs.has(a.slug);
          return (
            <li key={a.id} className="py-3">
              <p className="font-medium text-ink-900">
                {hasPage ? (
                  <Link
                    href={authorityPath(a.slug)}
                    className="text-forest-800 hover:underline"
                  >
                    {a.officialName}
                  </Link>
                ) : (
                  a.officialName
                )}
                <span className="ml-2 text-xs text-ink-500">
                  {humanizeToken(a.authorityType)}
                </span>
              </p>
              <p className="mt-0.5 text-sm text-ink-600">{a.summary}</p>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-sm">
        <Link
          href={AUTHORITIES_HUB_PATH}
          className="text-forest-700 hover:underline"
        >
          All agricultural authorities
        </Link>
      </p>
    </section>
  );
}
