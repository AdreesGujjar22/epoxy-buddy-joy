import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs, breadcrumbSchema } from "@/components/Breadcrumbs";
import { services, serviceGroups, SITE_URL } from "@/lib/site";
import { serviceImage } from "@/lib/service-images";

const TITLE = "Epoxy Flooring Services in Surrey, BC | Pacific Floors";
const DESCRIPTION =
  "Explore epoxy, polyaspartic, and concrete coating services for garages, kitchens, warehouses, and parkades. Free on-site estimates in Surrey & Metro Vancouver.";

export const Route = createFileRoute("/services/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Epoxy flooring and concrete coating services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `${SITE_URL}/services/${s.slug}`,
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const featured = services.slice(0, 6);

  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-[1170px] px-5 pt-10">
          <Breadcrumbs
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-3xl px-5 py-12 text-center">
          <p className="eyebrow">Our services</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Flooring built around how you use the room</h1>
          <p className="mt-5 leading-7 text-muted-foreground">
            We install epoxy, polyaspartic, polyurethane, and polished concrete systems across Surrey and
            Metro Vancouver — garages and basements at home, kitchens and warehouses at work, and the
            concrete repair that has to happen first.
          </p>
        </section>

        <section className="mx-auto grid max-w-[1170px] gap-6 px-5 pb-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group overflow-hidden rounded-xl border border-border bg-card"
            >
              <img
                src={serviceImage(s)}
                alt={`${s.title} in Surrey, BC`}
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h2 className="text-lg font-bold">{s.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.short}</p>
              </div>
            </Link>
          ))}
        </section>

        <section className="border-y border-border bg-surface py-16">
          <div className="mx-auto max-w-[1170px] px-5">
            <h2 className="text-2xl font-extrabold">Every service we offer</h2>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {serviceGroups.map((group) => (
                <div key={group}>
                  <p className="eyebrow">{group}</p>
                  <ul className="mt-4 space-y-3">
                    {services
                      .filter((s) => s.group === group)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            className="block border-l-2 border-border pl-3 transition hover:border-primary"
                          >
                            <span className="text-sm font-semibold">{s.title}</span>
                            <span className="mt-1 block text-xs leading-5 text-muted-foreground">{s.short}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1170px] gap-8 px-5 py-16 md:grid-cols-2">
          <h2 className="text-3xl font-extrabold">
            Not sure which system your floor needs? We will tell you straight.
          </h2>
          <QuoteForm heading="Get your free quote" />
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
