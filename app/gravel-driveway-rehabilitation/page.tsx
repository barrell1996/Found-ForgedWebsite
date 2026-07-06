import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbJsonLd, canonicalUrl } from "@/components/JsonLd";

const signs = ["Recurring potholes", "Standing water", "Rutted travel lanes", "Washed-out edges", "Loose aggregate pushed aside", "No visible crown", "Soft spots near the entrance", "Rough ride after heavy rain"];
const related = [
  ["Driveway Grading", "/driveway-grading"],
  ["Gravel Spreading", "/gravel-spreading"],
  ["Pothole Repair", "/pothole-repair"],
  ["Culvert Repair", "/culvert-repair"]
];

export const metadata: Metadata = {
  title: "Gravel Driveway Repair & Maintenance in Western Ohio",
  description:
    "Gravel driveway repair, maintenance, grading, pothole repair, gravel redistribution, washout repair, and drainage help for western Ohio properties.",
  alternates: {
    canonical: "/gravel-driveway-rehabilitation"
  },
  openGraph: {
    title: "Gravel Driveway Repair & Maintenance | Found & Forged",
    description:
      "Repair potholes, ruts, washouts, drainage problems, and loose gravel migration with practical gravel driveway rehabilitation.",
    url: "/gravel-driveway-rehabilitation",
    type: "website"
  }
};

export default function GravelDrivewayPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl("/gravel-driveway-rehabilitation")}#service`,
    name: "Gravel Driveway Repair and Maintenance",
    provider: { "@id": `${canonicalUrl()}#business` },
    areaServed: "Western Ohio",
    serviceType: "Gravel driveway repair, grading, pothole repair, gravel redistribution, washout repair, and maintenance",
    url: canonicalUrl("/gravel-driveway-rehabilitation"),
    description:
      "Repair potholes, ruts, washouts, drainage issues, loose gravel migration, and rough gravel driveway surfaces with practical grading and maintenance.",
    offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD" }
  };
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gravel Driveway Repair", path: "/gravel-driveway-rehabilitation" }
  ]);

  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema]} />
      <section className="section-pad bg-[#15120f] text-white">
        <div className="container-tight">
          <p className="eyebrow text-[#d4b07b]">Core Property Service</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight sm:text-6xl">Gravel Driveway Repair & Maintenance in Western Ohio</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">
            A practical reset for tired gravel drives: repair potholes, cut ruts, restore crown, improve drainage, redistribute loose gravel, and prepare the surface for the right aggregate where needed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="button-secondary border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request a Driveway Estimate</Link>
            <Link href="/services" className="button-secondary border-white text-white hover:bg-white hover:text-[#15120f]">View Property Services</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight grid gap-8 lg:grid-cols-3">
          {[
            ["Assess", "Ruts, potholes, crown, low spots, runoff, aggregate condition, entrance wear, culvert issues, and access constraints."],
            ["Rebuild", "Box blade and grading work to restore shape, cut high areas, blend low spots, and improve how the surface handles water."],
            ["Maintain", "Guidance for gravel depth, future touch-ups, drainage upkeep, seasonal care, and when new aggregate is actually worth adding."]
          ].map(([title, text]) => (
            <div key={title} className="border border-stone-200 bg-[#fbf7ef] p-6">
              <h2 className="text-xl font-black uppercase text-[#15120f]">{title}</h2>
              <p className="mt-3 leading-7 text-stone-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[#f6f1e8]">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Signs it is time</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">When the drive stops working for you.</h2>
            <p className="mt-5 leading-8 text-stone-700">
              If the same potholes return after every storm, the driveway probably needs reshaped instead of patched. Gravel repair works best when crown, drainage, surface shape, and stone placement are handled together.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {signs.map((item) => (
              <div key={item} className="border border-stone-200 bg-white p-4 text-sm font-black uppercase tracking-[0.08em] text-[#15120f]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Repair approach</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Do not pay for gravel before the surface is ready.</h2>
            <p className="mt-5 leading-8 text-stone-700">
              New gravel can help, but only after the existing driveway shape is addressed. If the base is uneven, water is trapped, or gravel has been pushed into the shoulders, fresh stone may disappear into the same problem areas. The goal is to use grading and redistribution first, then add material where it creates value.
            </p>
          </div>
          <div className="border border-stone-200 bg-[#15120f] p-6 text-white">
            <h2 className="text-xl font-black uppercase">Good fit for</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-stone-200">
              <li>• Long gravel driveways with rough travel lanes</li>
              <li>• Rural homes with potholes after storms</li>
              <li>• Gravel pushed to the sides or center ridge</li>
              <li>• Driveway entrances washing out near culverts</li>
              <li>• Owners preparing for new gravel delivery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f6f1e8]">
        <div className="container-tight">
          <div className="mb-6 max-w-3xl">
            <p className="eyebrow">Related Property Services</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Driveway repair often overlaps with these services.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map(([title, href]) => (
              <Link key={href} href={href} className="border border-stone-200 bg-white p-5 text-sm font-black uppercase tracking-[0.12em] text-[#15120f] transition hover:border-[#15120f]">{title} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight border border-stone-200 bg-[#15120f] p-6 text-white">
          <h2 className="text-2xl font-black uppercase">Ready to fix the driveway instead of fighting it?</h2>
          <p className="mt-2 max-w-2xl text-stone-200">Send photos of the rough areas, entrance, low spots, and any drainage problems. Clear photos help estimate whether the job is grading, gravel redistribution, pothole repair, culvert work, or a combination.</p>
          <Link href="/contact" className="button-secondary mt-5 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request an Estimate</Link>
        </div>
      </section>
    </>
  );
}
