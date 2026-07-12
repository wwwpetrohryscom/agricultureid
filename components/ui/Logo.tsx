import Link from 'next/link';

interface LogoProps {
  /** Render as a link to the homepage (default) or a plain mark. */
  href?: string | null;
  className?: string;
  showWordmark?: boolean;
}

/** The AgricultureID brand mark: an original geometric sprout-in-tile glyph. */
export function BrandMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="AgricultureID logo"
    >
      <rect x="0" y="0" width="64" height="64" rx="14" fill="#234a34" />
      <path
        d="M9 50 H55"
        stroke="#3c7351"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M32 51 V25"
        stroke="#f7f3e8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M32 41 C24 41 18 35 18 26 C27 26 32 33 32 41 Z" fill="#aca552" />
      <path d="M32 35 C40 35 46 29 46 20 C37 20 32 27 32 35 Z" fill="#8db69a" />
      <circle cx="32" cy="53" r="2.4" fill="#e2d7ba" />
    </svg>
  );
}

/** Brand lockup used in the header and footer. */
export function Logo({
  href = '/',
  className = '',
  showWordmark = true,
}: LogoProps) {
  const inner = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMark className="h-9 w-9 shrink-0" />
      {showWordmark && (
        <span className="font-serif text-xl font-bold tracking-tight text-ink-900">
          Agriculture<span className="text-olive-700">ID</span>
        </span>
      )}
    </span>
  );

  if (href === null) return inner;
  return (
    <Link href={href} className="rounded-md" aria-label="AgricultureID home">
      {inner}
    </Link>
  );
}
