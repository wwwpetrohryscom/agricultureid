/** Standard, always-visible calculator safety disclaimer (Phase 3C). */
export function ToolDisclaimer() {
  return (
    <section
      className="mt-10 rounded-card border border-clay-200 bg-[#FAFAF7] p-5"
      aria-labelledby="disclaimer-h"
    >
      <h2
        id="disclaimer-h"
        className="font-serif text-lg font-bold text-ink-900"
      >
        Educational reference — not a prescription
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-ink-700">
        <li>
          These calculators are for <strong>education and reference</strong>.
          The quality of any result depends entirely on the accuracy of the
          values you enter.
        </li>
        <li>
          Local agronomic conditions, legal requirements, product labels, and
          professional advice may override a general calculation.
        </li>
        <li>
          Results are <strong>not</strong> pesticide, fertilizer, irrigation, or
          veterinary prescriptions, and are not a substitute for advice from a
          qualified agronomist or your local extension service.
        </li>
      </ul>
    </section>
  );
}
