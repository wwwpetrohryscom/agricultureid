import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { HEADER_NAV, PRIMARY_NAV } from '@/lib/site';

/** Global site header with desktop navigation and a mobile disclosure menu. */
export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-parchment-200 bg-parchment-50/95 backdrop-blur supports-[backdrop-filter]:bg-parchment-50/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {HEADER_NAV.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-parchment-100 hover:text-forest-700"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/sources"
            className="hidden rounded-md border border-forest-200 px-3 py-2 text-sm font-semibold text-forest-700 transition-colors hover:bg-forest-50 lg:inline-block"
          >
            Sources
          </Link>
          <MobileMenu sections={PRIMARY_NAV} />
        </div>
      </Container>
    </header>
  );
}
