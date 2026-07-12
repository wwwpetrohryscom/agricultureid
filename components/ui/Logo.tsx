import Link from 'next/link';

interface LogoProps {
  /** Render as a link to the homepage (default) or a plain mark. */
  href?: string | null;
  className?: string;
  showWordmark?: boolean;
}

/** The AgricultureID brand mark: a flat circular plant-and-field glyph. */
export function BrandMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="AgricultureID logo"
    >
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="#fdfcf8"
        stroke="#c7a44a"
        strokeWidth="4"
      />
      <path
        d="M15.5 45.5c8.2-7 19.8-10.1 33-8.1"
        fill="none"
        stroke="#234a34"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M19 50.5c7.5-5 17.1-7.2 28.6-5.9"
        fill="none"
        stroke="#c7a44a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M25.4 54.2c5.8-3 12.4-4.2 20-3.3"
        fill="none"
        stroke="#234a34"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M31.9 41.2V20.4"
        fill="none"
        stroke="#234a34"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <path
        d="M32 31.7c-8.1-.4-13.9-6.2-14.2-14.4 8.8.2 14.4 5.7 14.2 14.4z"
        fill="#7d9440"
        stroke="#234a34"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32 27.4c7.8-.6 13.2-6.1 13.5-13.7-8.4.2-13.8 5.4-13.5 13.7z"
        fill="#a8ad50"
        stroke="#234a34"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24.1 20.7c3.7 2.1 6.1 5.2 7.2 9.2"
        fill="none"
        stroke="#f3e7b8"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M39.6 17.6c-3.4 2-5.7 4.8-6.8 8.5"
        fill="none"
        stroke="#f3e7b8"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
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
        <span className="font-serif text-xl font-bold tracking-tight text-forest-950">
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
