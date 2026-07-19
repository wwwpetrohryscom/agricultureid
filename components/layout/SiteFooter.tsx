import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BrandMark } from '@/components/ui/Logo';
import { PrivacySettingsButton } from '@/components/consent/PrivacySettingsButton';
import {
  HEADER_NAV,
  SITE,
  FOOTER_ABOUT_LINKS as ABOUT_LINKS,
  FOOTER_RESOURCE_LINKS as RESOURCE_LINKS,
  FOOTER_LEGAL_LINKS as LEGAL_LINKS,
} from '@/lib/site';

/** Global footer: category navigation, editorial/legal links, honest note. */
export function SiteFooter() {
  return (
    <footer className="bg-forest-950 text-parchment-100">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <BrandMark className="h-8 w-8" />
              <span className="font-serif text-lg font-bold text-white">
                Agriculture<span className="text-[#c7a44a]">ID</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-parchment-200">
              An independent, evidence-based reference for global agriculture.
              Every article cites the authoritative sources it draws on.
            </p>
            <p className="mt-4 text-xs leading-5 text-parchment-300">
              General educational information only — not a substitute for local,
              professional, or regulatory advice.
            </p>
          </div>

          <FooterColumn title="Explore" links={HEADER_NAV} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
          <FooterColumn title="About" links={ABOUT_LINKS} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-parchment-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {SITE.name} · {SITE.domain}
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="rounded hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <PrivacySettingsButton className="rounded hover:text-white" />
            </li>
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
      <h2 className="text-xs font-semibold uppercase tracking-wider text-[#c7a44a]">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="rounded text-sm text-parchment-200 hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
