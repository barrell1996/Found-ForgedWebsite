import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, canonicalUrl } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";

const contactEmail = "hello@foundforgedco.com";

export const metadata: Metadata = {
  title: "Contact Found & Forged | Request a Gravel Driveway or Property Services Quote",
  description: "Request a quote from Found & Forged for gravel driveway rehabilitation, grading, gravel spreading, box blade work, light tractor services, and property projects in western Ohio.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact Found & Forged | Request a Quote",
    description: "Send photos and project details for gravel driveway repair, grading, gravel spreading, box blade work, and property services.",
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
      <section className="section-pad blueprint bg-forged-smoke">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-6">
            <SectionHeader eyebrow="Quote request" title="Tell us what needs built, fixed, graded, or planned.">
              <p>
                Send project details through the form, or email us directly at{" "}
                <a href={`mailto:${contactEmail}`} className="font-black text-forged-black underline decoration-forged-rust underline-offset-4">
                  {contactEmail}
                </a>
                .
              </p>
            </SectionHeader>
            <div className="panel p-5 sm:p-6">
              <p className="eyebrow">Direct Contact</p>
              <a href={`mailto:${contactEmail}`} className="mt-3 block text-xl font-black text-forged-black hover:text-forged-rust">
                {contactEmail}
              </a>
              <p className="mt-3 text-sm leading-7 text-forged-charcoal">
                Use this address for general questions, quote requests, custom goods, curated finds, and digital product support.
              </p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
