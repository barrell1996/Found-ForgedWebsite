import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, canonicalUrl } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";

const contactEmail = "hello@foundforgedco.com";
const phoneDisplay = "(937) 572-8109";

export const metadata: Metadata = {
  title: "Request a Free Property-Service Estimate | Found & Forged",
  description: "Request a free estimate for garden-bed cleanup, mulching, junk removal, driveway work, grading, and light tractor services in Miami County and nearby western Ohio communities.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Request a Free Property-Service Estimate | Found & Forged",
    description: "Send photos and project details for garden-bed cleanup, mulching, junk removal, driveway work, and practical property services.",
    url: "/contact",
    type: "website"
  }
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${canonicalUrl("/contact")}#contact`,
    name: "Contact Found & Forged",
    url: canonicalUrl("/contact"),
    about: { "@id": `${canonicalUrl()}#business` }
  };

  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" }
  ]);

  return (
    <>
      <JsonLd data={[contactSchema, breadcrumbSchema]} />
      <section className="section-pad bg-forged-smoke">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-6">
            <SectionHeader eyebrow="Free estimate" title="Tell us what is happening on the property.">
              <p>
                Send your location, a short description, and a few useful photos. You can also email us directly at{" "}
                <a href={`mailto:${contactEmail}`} className="font-black text-forged-black underline decoration-forged-rust underline-offset-4">
                  {contactEmail}
                </a>
                . We normally respond within one business day.
              </p>
            </SectionHeader>
            <div className="panel p-5 sm:p-6">
              <p className="eyebrow">Call or text</p>
              <a href="tel:+19375728109" className="mt-3 block text-2xl font-black text-forged-black hover:text-forged-rust">{phoneDisplay}</a>
              <p className="mt-3 text-sm leading-7 text-forged-charcoal">For the fastest start, text your name, service location, a short description, and a few photos of the driveway or work area.</p>
            </div>
            <div className="panel p-5 sm:p-6">
              <p className="eyebrow">Email directly</p>
              <a href={`mailto:${contactEmail}`} className="mt-3 block text-xl font-black text-forged-black hover:text-forged-rust">
                {contactEmail}
              </a>
              <p className="mt-3 text-sm leading-7 text-forged-charcoal">
                Include the service location, approximate project size, what you want completed, and photos showing the full work area, access, garden beds, unwanted items, driveway, or other concerns.
              </p>
            </div>
            <div className="panel p-5 sm:p-6">
              <p className="eyebrow">Primary coverage</p>
              <p className="mt-3 text-sm leading-7 text-forged-charcoal">Troy, Piqua, Tipp City, Covington, Pleasant Hill, West Milton, Casstown, and selected nearby projects in Shelby, Champaign, and northern Montgomery counties.</p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
