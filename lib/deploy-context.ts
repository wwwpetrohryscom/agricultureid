/**
 * Hosting-context detection, kept platform-neutral and in ONE place.
 *
 * Netlify sets `CONTEXT` on every build: `production` for the production
 * deploy, and `deploy-preview` / `branch-deploy` / `dev` otherwise. Deploy
 * Previews and branch deploys are served on public `*.netlify.app` URLs, so
 * they should not be crawled — but production must never be de-indexed by
 * accident.
 *
 * The check is therefore an explicit ALLOW-LIST of non-production contexts,
 * deliberately not `CONTEXT !== 'production'`. If `CONTEXT` is unset (local
 * dev, CI, any other host) or holds an unrecognised value, the answer is
 * `false` and the site stays indexable. The failure mode is a crawlable
 * preview — never a de-indexed production site.
 *
 * This is read at BUILD time (app/robots.ts is a statically generated route),
 * which is correct: every Netlify context is a separate build.
 */

/** The complete set of non-production context values Netlify emits. */
export const NON_PRODUCTION_CONTEXTS = [
  'deploy-preview',
  'branch-deploy',
  'dev',
] as const;

/**
 * True only when the build is a known non-production hosting context.
 * Defaults to `false` — indexable — for every unknown or absent value.
 *
 * The parameter is a plain string map rather than `NodeJS.ProcessEnv` (which
 * Next.js augments to require `NODE_ENV`) so tests can pass an object literal
 * holding only `CONTEXT`.
 */
export function isNonProductionDeploy(
  env: Record<string, string | undefined> = process.env,
): boolean {
  const context = env.CONTEXT;
  return (
    typeof context === 'string' &&
    (NON_PRODUCTION_CONTEXTS as readonly string[]).includes(context)
  );
}
