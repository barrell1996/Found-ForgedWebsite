import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd, breadcrumbJsonLd, canonicalUrl } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Brennan, Taylor & Found & Forged | Miami County, Ohio",
  description: "Meet Brennan and Taylor, the Miami County owners behind Found & Forged property services, gravel driveway repair, grading, and practical property work.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Found & Forged", description: "A locally owned Miami County property-service company built around honest communication and practical work.", url: "/about", type: "website", images: [{ url: "/brand/FounderPhoto.jpg", width: 1536, height: 1024, alt: "Brennan and Taylor, owners of Found & Forged" }] }
};

export default function AboutPage() {
  const aboutSchema = { "@context": "https://schema.org", "@type": "AboutPage", "@id": `${canonicalUrl("/about")}#about`, name: "About Found & Forged", url: canonicalUrl("/about"), about: { "@id": `${canonicalUrl()}#business` } };
  const breadcrumbSchema = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]);

  return (
    <>
      <JsonLd data={[aboutSchema, breadcrumbSchema]} />
      <section className="section-pad bg-[#15120f] text-white">
        <div className="container-tight grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-[440px] overflow-hidden border border-white/15"><Image src="/brand/FounderPhoto.jpg" alt="Brennan and Taylor, owners of Found & Forged" fill priority className="object-cover" sizes="(min-width:1024px) 48vw, 100vw" /></div>
          <div><p className="eyebrow text-[#d4b07b]">Locally owned in Miami County</p><h1 className="display-serif mt-4 text-5xl font-black leading-tight sm:text-6xl">Practical work with a service-first standard.</h1><p className="mt-6 text-lg leading-8 text-stone-200">Found &amp; Forged is owned by Brennan and Taylor. We built the company to provide useful property services with clear expectations, honest communication, and care for the people and properties we serve.</p><Link href="/contact" className="button-primary mt-8 bg-white text-[#15120f] hover:bg-[#d4b07b]">Request a Free Estimate</Link></div>
        </div>
      </section>
      <section className="section-pad bg-[#fbf7ef]">
        <div className="container-tight grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow">Why Found &amp; Forged</p><h2 className="display-serif mt-3 text-4xl font-black leading-tight">Built to serve. Equipped to solve practical problems.</h2></div>
          <div className="grid gap-6 text-base leading-8 text-stone-700"><p>Brennan is a firefighter and paramedic, and that service background shapes how Found &amp; Forged operates: listen first, assess the actual problem, explain the options, and follow through on the work.</p><p>Our property-services focus is gravel driveway repair, grading, gravel spreading, light tractor work, and appropriately sized improvements for rural homes, small acreages, lanes, entrances, and utility areas.</p><p>We are deliberate about project fit. If a job requires equipment or capabilities beyond our scope, we would rather say so clearly than promise the wrong solution.</p></div>
        </div>
      </section>
      <section className="section-pad border-y border-stone-200 bg-white">
        <div className="container-tight grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[["Local", "Based in Miami County and familiar with rural western Ohio properties."], ["Straightforward", "Clear conversations about scope, access, materials, and realistic outcomes."], ["Right-sized", "Compact tractor and box-blade work suited to driveways and small-property projects."], ["Respectful", "Care for your property, your time, and the condition in which the work area is left."]].map(([title, copy]) => <div key={title} className="border border-stone-200 bg-[#fbf7ef] p-6"><h3 className="text-sm font-black uppercase tracking-[.12em]">{title}</h3><p className="mt-3 leading-7 text-stone-700">{copy}</p></div>)}
        </div>
      </section>
      <section className="section-pad bg-[#eee4d5]"><div className="container-tight flex flex-col justify-between gap-6 lg:flex-row lg:items-center"><div><p className="eyebrow">Service area</p><h2 className="display-serif mt-2 text-4xl font-black">Miami County and nearby western Ohio communities.</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Troy, Piqua, Tipp City, Covington, Pleasant Hill, West Milton, Casstown, and selected projects in nearby Shelby, Champaign, and northern Montgomery counties.</p></div><Link href="/services" className="button-secondary shrink-0">Explore Services</Link></div></section>
    </>
  );
}
