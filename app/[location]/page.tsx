import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, breadcrumbJsonLd, canonicalUrl } from "@/components/JsonLd";
import { locationPages } from "@/lib/location-pages";

type PageProps = { params: Promise<{ location: string }> };

export function generateStaticParams() {
  return locationPages.map((page) => ({ location: page.slug }));
}

function getLocationPage(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location } = await params;
  const page = getLocationPage(location);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`
    },
    openGraph: {
      title: `${page.title} | Found & Forged`,
      description: page.description,
      url: `/${page.slug}`,
      type: "website",
      images: [
        {
          url: "/brand/service-gravel.jpg",
          width: 1200,
          height: 630,
          alt: `${page.title} by Found & Forged`
        }
      ]
    }
  };
}

export default async function LocationLandingPage({ params }: PageProps) {
  const { location } = await params;
  const page = getLocationPage(location);
  if (!page) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl(`/${page.slug}`)}#service`,
    name: page.title,
    description: page.description,
    url: canonicalUrl(`/${page.slug}`),
    image: canonicalUrl("/brand/service-gravel.jpg"),
    serviceType: "Gravel driveway repair, driveway grading, pothole repair, gravel spreading, and light tractor work",
    areaServed: {
      "@type": "AdministrativeArea",
      name: page.serviceArea
    },
    provider: { "@id": `${canonicalUrl()}#business` },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: canonicalUrl("/contact")
    }
  };

  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: page.title, path: `/${page.slug}` }
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Do you repair gravel driveways in ${page.serviceArea}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Found & Forged serves ${page.serviceArea} and nearby rural properties with gravel driveway repair, grading, pothole repair, gravel redistribution, and light tractor work.`
        }
      },
      {
        "@type": "Question",
        name: "Is adding new gravel always the first step?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. Many driveways need reshaping, grading, drainage improvement, or gravel redistribution before new stone is worth adding."
        }
      },
      {
        "@type": "Question",
        name: "What should I send for an estimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Photos of the driveway, potholes, ruts, low spots, entrances, culverts, drainage issues, and approximate driveway length are the best starting point."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <section className="section-pad bg-[#15120f] text-white">
        <div className="container-tight">
          <p className="eyebrow text-[#d4b07b]">Local Gravel Driveway Services</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight sm:text-6xl">{page.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="button-secondary border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request an Estimate</Link>
            <Link href="/services" className="button-secondary border-white text-white hover:bg-white hover:text-[#15120f]">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#fbf7ef]">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">What we help with</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Practical driveway repair before wasted gravel.</h2>
            <p className="mt-5 leading-8 text-stone-700">
              The goal is not just to cover the problem. We look at surface shape, crown, drainage, gravel movement, entrance wear, and soft spots so the driveway is easier to use and easier to maintain.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.fit.map((item) => (
              <div key={item} className="border border-stone-200 bg-white p-4 text-sm font-black uppercase tracking-[0.08em] text-[#15120f]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight grid gap-8 lg:grid-cols-3">
          {[
            ["1. Send photos", "Send photos of potholes, ruts, low areas, washed edges, culverts, and the overall driveway."],
            ["2. Identify the cause", "We look for water problems, crown issues, gravel migration, base weakness, and access constraints."],
            ["3. Grade, repair, or spread", "The work may include box blade grading, gravel redistribution, pothole repair, spreading, or drainage-related cleanup."]
          ].map(([title, text]) => (
            <div key={title} className="border border-stone-200 bg-[#fbf7ef] p-6">
              <h2 className="text-lg font-black uppercase tracking-[0.06em] text-[#15120f]">{title}</h2>
              <p className="mt-3 leading-7 text-stone-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[#f6f1e8]">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Nearby service area</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Serving {page.serviceArea} and nearby properties.</h2>
          </div>
          <div>
            <p className="leading-8 text-stone-700">
              Local property work depends on practical travel, clear scope, and the right fit for light tractor and grading equipment. These nearby areas are included as common service-area references, not a guarantee that every job is the right fit.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {page.nearby.map((area) => (
                <span key={area} className="border border-stone-300 bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#15120f]">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight border border-stone-200 bg-[#15120f] p-6 text-white">
          <h2 className="text-2xl font-black uppercase">Need gravel driveway help in {page.serviceArea}?</h2>
          <p className="mt-2 max-w-2xl text-stone-200">Send the driveway photos and a short description of what is happening. That gives us a realistic starting point before scheduling or pricing the work.</p>
          <Link href="/contact" className="button-secondary mt-5 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request an Estimate</Link>
        </div>
      </section>
    </>
  );
}
