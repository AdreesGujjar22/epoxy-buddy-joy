import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Contact Pacific Floors & Coatings | Epoxy Quotes Surrey BC" },
      {
        name: "description",
        content:
          "Request a free on-site epoxy flooring estimate in Surrey, BC. Call (236) 878-3386 or send Pacific Floors & Coatings your project details for a fast quote.",
      },
      { property: "og:title", content: "Contact Pacific Floors & Coatings | Epoxy Quotes Surrey BC" },
      {
        property: "og:description",
        content: "Request a free on-site epoxy flooring estimate in Surrey, BC. Call (236) 878-3386 or send Pacific Floors & Coatings your project details for a fast quote.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://epoxy-clone-pro.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Pacific Floors & Coatings | Epoxy Quotes Surrey BC" },
      {
        name: "twitter:description",
        content: "Request a free on-site epoxy flooring estimate in Surrey, BC. Call (236) 878-3386 or send Pacific Floors & Coatings your project details for a fast quote.",
      },
    ],
    links: [{ rel: "canonical", href: "https://epoxy-clone-pro.lovable.app/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 text-pretty">
          <div>
            <p className="eyebrow">Contact us</p>
            <h1 className="mt-3 text-4xl font-black">Let's talk about your floor</h1>
            <p className="mt-5 text-muted-foreground leading-7">
              Tell us a bit about the space and we'll arrange a free on-site estimate anywhere in
              Surrey, BC or Metro Vancouver.
            </p>
            <ul className="mt-8 space-y-6 text-sm">
              <li>
                <span className="eyebrow block">Phone</span>
                <a href={site.phoneHref} className="text-base font-bold text-muted-foreground hover:text-primary transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="eyebrow block">Email</span>
                <a href={`mailto:${site.email}`} className="text-base font-bold text-muted-foreground hover:text-primary transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="eyebrow block">Address</span>
                <span className="text-base font-bold text-muted-foreground">{site.address}</span>
              </li>
            </ul>
          </div>
          <QuoteForm heading="Request a free quote" />
        </section>
        <section className="border-y border-border bg-surface py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="eyebrow">Find us</p>
            <h2 className="mt-3 text-3xl font-black">Pacific Floors and Coatings in Surrey</h2>
            <div className="mt-7 overflow-hidden rounded-md border border-border shadow-xl">
              <iframe
                title="Pacific Floors and Coatings Google Business Profile map"
                src="https://www.google.com/maps?q=Pacific%20Floors%20and%20Coatings%2C%207304%20138%20Street%2C%20Surrey%2C%20BC%20V3W%205H2%2C%20Canada&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
