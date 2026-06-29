import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

const problems = [
  "Recurring driveway potholes",
  "Ruts and washboard sections",
  "Water running down the drive",
  "Gravel pushed into the shoulders",
  "Soft spots near culverts or entrances",
  "Uneven pads, lanes, and work areas"
];

const serviceAreas = ["western Ohio", "rural homes", "small acreages", "farm lanes", "country driveways", "private gravel roads"];

export const metadata: Metadata = {
  title: "Gravel Driveway Repair, Grading & Light Tractor Services in Western Ohio",
  description:
    "Found & Forged provides gravel driveway maintenance, repair, grading, pothole repair, gravel spreading, culvert repair, finish grading, and light tractor services in western Ohio.",
  openGraph: {
    title: "Western Ohio Gravel Driveway Repair & Property Services | Found & Forged",
    description:
      "Request an estimate for gravel driveway repair, grading, pothole repair, gravel redistribution, culvert repair, finish grading, and light tractor services."
  }
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Found & Forged Property Services",
    url: "https://foundforgedco.com/services",
    image: "https://foundforgedco.com/brand/service-gravel.jpg",
    areaServed: "Western Ohio",
    description:
      "Gravel driveway maintenance, gravel driveway repair, driveway grading, pothole repair, gravel spreading, culvert repair, finish grading, and light tractor services.",
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `https://foundforgedco.com${service.href}`
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <section className="section-pad bg-[#15120f] text-white">
        <div className="container-tight grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="eyebrow text-[#d4b07b]">Property Services in Western Ohio</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight sm:text-6xl">
              Gravel Driveway Repair, Grading & Light Tractor Services
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">
              Found & Forged helps homeowners and property owners repair, maintain, and improve gravel driveways, lanes, culverts, pads, and small-property surfaces with practical grading and tractor work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="button-secondary border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">
                Request an Estimate
              </Link>
              <Link href="/gravel-driveway-rehabilitation" className="button-secondary border-white text-white hover:bg-white hover:text-[#15120f]">
                Gravel Driveway Repair
              </Link>
            </div>
          </div>
          <div className="border border-white/15 bg-white/5 p-5">
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#d4b07b]">Best-fit projects</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-stone-200">
              {problems.slice(0, 4).map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#fbf7ef]">
        <div className="container-tight">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-[0.02em] text-[#15120f] sm:text-4xl">
              What we fix, shape, spread, and maintain.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-700">
              Each service page is built around a real property problem: potholes, rutting, drainage, gravel loss, culvert washouts, rough travel lanes, and small grading needs.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-stone-200 bg-white">
        <div className="container-tight grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Common Problems</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Driveway problems usually start with water and shape.</h2>
            <p className="mt-5 leading-8 text-stone-700">
              Most gravel driveway failures come from the same pattern: water sits where it should shed, traffic pounds the weak spot, and loose aggregate migrates out of the travel lane. The right repair starts with reshaping the surface, not just dumping more stone on top.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((item) => (
              <div key={item} className="border border-stone-200 bg-[#fbf7ef] p-4 text-sm font-black uppercase tracking-[0.08em] text-[#15120f]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f6f1e8]">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Service Area</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Built for western Ohio properties.</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-stone-700">
              Found & Forged focuses on practical property work for {serviceAreas.join(", ")}. The best projects are close enough for efficient mobilization, clear in scope, and suited for light tractor, grading, box blade, and gravel work.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {serviceAreas.map((area) => <span key={area} className="border border-stone-300 bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#15120f]">{area}</span>)}
            </div>
            <Link href="/contact" className="button-primary mt-8">Request a Property Services Estimate</Link>
          </div>
        </div>
      </section>

      <section id="property-projects" className="section-pad bg-white">
        <div className="container-tight grid gap-8 lg:grid-cols-3">
          {[
            ["1. Send photos", "Share driveway, culvert, pothole, or grading photos so the first conversation is grounded in the actual site."],
            ["2. Scope the fix", "We look for the practical cause: drainage, crown, base failure, gravel loss, soft spots, traffic wear, or access constraints."],
            ["3. Schedule the work", "Small property jobs are planned around efficient mobilization, clear expectations, and useful results." ]
          ].map(([title, text]) => (
            <div key={title} className="border border-stone-200 bg-[#fbf7ef] p-6">
              <h2 className="text-lg font-black uppercase tracking-[0.06em] text-[#15120f]">{title}</h2>
              <p className="mt-3 leading-7 text-stone-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
