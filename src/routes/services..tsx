import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs, breadcrumbSchema } from "@/components/Breadcrumbs";
import { findService, services, metaTitle, metaDescription, sameAs, site, SITE_URL } from "@/lib/site";
import { serviceImage } from "@/lib/service-images";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    const title = metaTitle(service.title);
    const description = metaDescription(service.short);
    const url = `${SITE_URL}/services/${params.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: site.name },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            serviceType: service.title,
            description: service.short,
            url,
            areaServed: [
              { "@type": "City", name: "Surrey, British Columbia" },
              { "@type": "AdministrativeArea", name: "Metro Vancouver, British Columbia" },
            ],
            provider: {
              "@type": "LocalBusiness",
              name: site.name,
              telephone: "+1-236-878-3386",
              email: site.email,
              url: SITE_URL,
              address: {
                "@type": "PostalAddress",
                streetAddress: "7304 138 Street",
                addressLocality: "Surrey",
                addressRegion: "BC",
                postalCode: "V3W 5H2",
                addressCountry: "CA",
              },
              sameAs,
            },
            offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "CAD" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-black">Service not found</h1>
        <Button asChild variant="link" className="mt-6">
          <Link to="/services">View all services →</Link>
        </Button>
      </main>
      <Footer />
    </>
  ),
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center" role="alert">
      {error.message}
    </main>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.group === service.group && s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-[1170px] px-5 py-12">
          <Breadcrumbs
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-pretty">
              <p className="eyebrow">{service.group}</p>
              <h1 className="mt-3 text-4xl font-black leading-tight sm:text-[44px]">{service.title}</h1>
              <p className="mt-5 leading-7 text-muted-foreground">{service.intro}</p>
              <ul className="mt-7 space-y-2.5 text-sm text-muted-foreground">
                {service.bullets.map((b) => (
                  <li key={b} className="border-l-2 border-primary pl-3">
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-7 text-sm">
                <span className="eyebrow">Best for</span>
                <span className="mt-1 block text-muted-foreground">{service.best}</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider">
                  <a href={site.phoneHref}>Call {site.phone}</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider">
                  <Link to="/contact">Book a free estimate</Link>
                </Button>
              </div>
            </div>
            <img
              src={serviceImage(service)}
              alt={`${service.title} installed by Pacific Floors and Coatings in Surrey, BC`}
              loading="lazy"
              decoding="async"
              width={1200}
              height={800}
              className="h-full max-h-[460px] w-full rounded-xl border border-border object-cover shadow-xl"
            />
          </div>
        </section>

        <section className="border-y border-border bg-surface py-14">
          <div className="mx-auto grid max-w-[1170px] gap-8 px-5 md:grid-cols-2">
            <div className="panel p-7">
              <h2 className="text-xl font-bold">How we install it</h2>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>1. Free on-site assessment of the slab, moisture, and how you use the space.</li>
                <li>2. Dust-extracted diamond grinding to open the concrete profile.</li>
                <li>3. Crack, spall, and low-spot repair, plus joint detailing.</li>
                <li>4. Primer and base build, with broadcast where the system calls for it.</li>
                <li>5. Clear top coat, cure, and a walkthrough before we hand it back.</li>
              </ol>
            </div>
            <QuoteForm heading={`Quote for ${service.title.toLowerCase()}`} />
          </div>
        </section>

        <section className="mx-auto max-w-[1170px] px-5 py-14">
          <h2 className="text-2xl font-black">{service.title} questions we get asked</h2>
          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {service.faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border bg-background/40 px-5 transition-colors data-[state=open]:bg-background/60">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline py-4">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-6 text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mx-auto max-w-[1170px] px-5 pb-16">
            <h2 className="text-2xl font-black">Related {service.group.toLowerCase()} services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="panel block p-5 transition hover:border-primary group"
                >
                  <h3 className="text-base font-bold group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
