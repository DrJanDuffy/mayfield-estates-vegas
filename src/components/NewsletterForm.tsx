'use client';

import { CalendlySection } from './CalendlySection';

/** Replaced with Calendly scheduling. Renders "Want to learn more? Schedule time with our team now" + inline Calendly widget. */
export function NewsletterForm() {
  return (
    <div className="mt-12">
      <CalendlySection height={700} />
    </div>
  );
}
