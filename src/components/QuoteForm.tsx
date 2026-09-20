import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

export function QuoteForm({ heading = "Reach out for a Free Quote!" }: { heading?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "w-full rounded-md border border-border bg-background/55 px-3 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

  return (
    <div className="panel p-5 sm:p-7">
      <h2 className="text-base font-bold">{heading}</h2>
      {sent ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Thanks — your request was received. We usually reply within one business day.
        </p>
      ) : (
        <form className="mt-5 grid gap-x-3 gap-y-4 sm:grid-cols-2" onSubmit={onSubmit}>
          <div>
            <label className="eyebrow" htmlFor="qf-name">Name</label>
            <input id="qf-name" name="name" required placeholder="Your name" className={`mt-1 ${field}`} />
          </div>
          <div>
            <label className="eyebrow" htmlFor="qf-phone">Phone</label>
            <input id="qf-phone" name="phone" type="tel" required placeholder="(236) 555-0123" className={`mt-1 ${field}`} />
          </div>
          <div>
            <label className="eyebrow" htmlFor="qf-email">Email</label>
            <input id="qf-email" name="email" type="email" required placeholder="you@email.com" className={`mt-1 ${field}`} />
          </div>
          <div>
            <label className="eyebrow" htmlFor="qf-service">Service type</label>
            <select id="qf-service" name="service" className={`mt-1 ${field}`} defaultValue="">
              <option value="" disabled>Select service type</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>{s.title}</option>
              ))}
              <option value="other">Something else</option>
            </select>
          </div>
          <p className="sm:col-span-2 text-[9px] leading-relaxed text-muted-foreground">
            By submitting this form you agree that Pacific Floors and Coatings may contact you by phone, text or email
            about your request. Consent is not a condition of purchase.
          </p>
          <button
            type="submit"
            className="sm:col-span-2 rounded-md bg-primary px-6 py-3 text-xs font-bold text-primary-foreground transition hover:brightness-110"
          >
            Get My Free Quote
          </button>
        </form>
      )}
    </div>
  );
}
