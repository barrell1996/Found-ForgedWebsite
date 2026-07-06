import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd, breadcrumbJsonLd, canonicalUrl } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Found & Forged | Western Ohio Property Services & Practical Goods",
  description: "Learn about Found & Forged, a western Ohio brand built around gravel driveway services, property work, curated goods, custom goods, digital plans, and practical resources.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Found & Forged",
    description: "A practical-property brand built around dependable work, useful resources, curated goods, and goods made with care.",
    url: "/about",
    type: "website"
  }
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${canonicalUrl("/about")}#about`,
    name: "About Found & Forged",
    url: canonicalUrl("/about"),
    about: { "@id": `${canonicalUrl()}#business` }
  };

  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }
  ]);

  return (
    <>
      <JsonLd data={[aboutSchema, breadcrumbSchema]} />
      <section className="section-pad bg-white">
        <div className="container-tight grid items-center gap-10 lg:grid-cols-[320px_1fr]">
          <Image src="/brand/found-forged-logo.jpeg" alt="Found & Forged logo" width={420} height={420} className="w-full border border-forged-concrete bg-white p-4 shadow-industrial" />
          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-6xl">A practical-property brand with a forged standard.</h1>
            <p className="mt-6 text-lg leading-8 text-forged-steel">
              Found & Forged exists to make home and property work clearer, tougher, and more useful. It combines hands-on services with learning resources, calculators, guides, and future digital products.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
