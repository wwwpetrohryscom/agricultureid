import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { HEADER_NAV } from '@/lib/site';

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="font-serif text-6xl font-bold text-forest-700">404</p>
      <h1 className="mt-4 font-serif text-3xl font-bold text-ink-900">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-ink-600">
        The page you are looking for doesn’t exist or may have moved. Try one of
        the knowledge sections below, or return to the homepage.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Link
          href="/"
          className="rounded-md bg-forest-700 px-4 py-2 text-sm font-semibold text-white hover:bg-forest-800"
        >
          Go to homepage
        </Link>
      </div>
      <ul className="mt-8 flex flex-wrap justify-center gap-2">
        {HEADER_NAV.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="inline-flex rounded-full border border-parchment-200 bg-white px-3 py-1.5 text-sm font-medium text-ink-700 hover:border-forest-200 hover:text-forest-700"
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
