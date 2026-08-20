import Link from 'next/link';
import {
  authoritiesForJurisdiction,
  authorityPath,
  publishedAuthorities,
  humanizeToken,
  AUTHORITIES_HUB_PATH,
} from '@/lib/authorities/registry';

/**
 * The "Agricultural authority" section on a state/province/territory page.
 *
 * Registry-driven: nothing is hardcoded per jurisdiction, and the section
 * renders nothing at all when no verified authority exists — an empty heading
 * would imply a jurisdiction is missing one rather than that none is verified.
 *
 * Directory-only records appear here with their official link but no internal
 * link, because they have no detail page. That is the whole point of the
 * two-tier model: useful on the region page without a thin route.
 */
export function RegionAuthorities({
  jurisdictionId,
}: {
  jurisdictionId: string;
}) {
  const items = authoritiesForJurisdiction(jurisdictionId);
  if (items.length === 0) return null;

  const published = new Set(publishedAuthorities().map((a) => a.slug));
  const heading =
    items.length === 1 ? 'Agricultural authority' : 'Agricultural authorities';

  return (
    <section id="agricultural-authorities" className="mt-10">
      <h2 className="font-serif text-xl text-forest-900">{heading}</h2>
      <p className="mt-1 text-sm text-ink-600">
        Verified against official government sources. AgricultureID is
        independent and not affiliated with these bodies.
      </p>
      <ul className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
        {items.map((a) => {
          const hasPage = published.has(a.slug);
          return (
            <li key={a.id} className="py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
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
                </p>
                <span className="text-xs text-ink-500">
                  {humanizeToken(a.governmentLevel)} ·{' '}
                  {humanizeToken(a.authorityType)}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-600">{a.summary}</p>
              <p className="mt-1 text-xs">
                <a
                  href={a.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-700 underline-offset-2 hover:underline"
                >
                  Official website
                </a>
                <Link
                  href={AUTHORITIES_HUB_PATH}
                  className="ml-3 text-ink-500 hover:underline"
                >
                  All agricultural authorities
                </Link>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
