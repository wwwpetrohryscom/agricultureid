import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import {
  HeaderSearch,
  type SearchItem,
} from '@/components/navigation/HeaderSearch';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { contentUrlPath, PUBLISHED_CONTENT } from '@/lib/content/registry';
import { CONTENT_TYPE_LABEL, HEADER_NAV, PRIMARY_NAV } from '@/lib/site';

/** Global site header with desktop navigation and a mobile disclosure menu. */
export function SiteHeader() {
  const searchItems: SearchItem[] = [
    ...PRIMARY_NAV.map((item) => ({
      title: item.label,
      href: item.href,
      type: 'Section',
    })),
    ...PUBLISHED_CONTENT.map((item) => ({
      title: item.title,
      href: contentUrlPath(item),
      type: CONTENT_TYPE_LABEL[item.contentType],
    })),
  ];

  return (
    <header className="relative z-40 border-b border-ink-100 bg-white">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {HEADER_NAV.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-[#FAFAF7] hover:text-forest-800"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <HeaderSearch items={searchItems} />
          <Link
            href="/#explore"
            className="hidden rounded-md bg-forest-800 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-900 lg:inline-block"
          >
            Explore Agriculture
          </Link>
          <MobileMenu sections={PRIMARY_NAV} />
        </div>
      </Container>
    </header>
  );
}
