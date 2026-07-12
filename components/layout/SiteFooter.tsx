import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BrandMark } from '@/components/ui/Logo';
import { HEADER_NAV, REFERENCE_NAV, SITE } from '@/lib/site';

const ABOUT_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Editorial Policy', href: '/editorial-policy' },
  { label: 'Sources & Methodology', href: '/methodology' },
  { label: 'Corrections', href: '/corrections' },
  { label: 'Contact', href: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

/** Global footer: category navigation, editorial/legal links, honest note. */
export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-parchment-200 bg-parchment-100">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <BrandMark className="h-8 w-8" />
              <span className="font-serif text-lg font-bold text-ink-900">
                Agriculture<span className="text-olive-700">ID</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-ink-600">
              An independent, evidence-based reference for global agriculture.
              Every article cites the authoritative sources it draws on.
            </p>
            <p className="mt-4 text-xs leading-5 text-ink-500">
              General educational information only — not a substitute for local,
              professional, or regulatory advice.
            </p>
          </div>

          <FooterColumn title="Knowledge" links={HEADER_NAV} />
          <FooterColumn title="Reference" links={REFERENCE_NAV} />
          <FooterColumn title="About &amp; policies" links={ABOUT_LINKS} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-parchment-200 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {SITE.name} · {SITE.domain}
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="rounded hover:text-forest-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="rounded text-sm text-ink-700 hover:text-forest-700"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
