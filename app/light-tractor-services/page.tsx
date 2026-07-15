import type { Metadata } from "next";
import Link from "next/link";

const work = ["Box blade grading", "Driveway touch-ups", "Gravel movement", "Small pad prep", "Lane cleanup", "Light property improvements"];

export const metadata: Metadata = {
  title: "Light Tractor Services & Box Blade Work in Western Ohio",
  description: "Light tractor services, box blade work, gravel driveway touch-ups, grading, gravel movement, and small-property improvements in western Ohio.",
  alternates: { canonical: "/light-tractor-services" },
  openGraph: { title: "Light Tractor Services in Western Ohio | Found & Forged", description: "Practical light tractor work for gravel drives, lanes, pads, box blade grading, and small property projects.", url: "/light-tractor-services", type: "website" }
};

export default function LightTractorServicesPage() {
  const schema = { "@context": "https://schema.org", "@type": "Service", name: "Light Tractor Services", provider: { "@type": "LocalBusiness", name: "Found & Forged Property Services" }, areaServed: "Western Ohio", serviceType: "Light tractor services and box blade work", url: "https://foundforgedco.com/light-tractor-services" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="section-pad bg-[#15120f] text-white"><div className="container-tight"><p className="eyebrow text-[#d4b07b]">Light Tractor Services</p><h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight sm:text-6xl">Light Tractor Services & Box Blade Work</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">Found & Forged handles practical light tractor work for gravel driveways, lanes, pads, rough access areas, box blade grading, gravel movement, and small property improvements.</p><Link href="/contact" className="button-secondary mt-8 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request Tractor Work</Link></div></section>
      <section className="section-pad bg-white"><div className="container-tight grid gap-8 lg:grid-cols-2"><div><p className="eyebrow">Right-sized equipment</p><h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Built for small property jobs that still need real equipment.</h2><p className="mt-5 leading-8 text-stone-700">Not every job needs a large contractor. Light tractor work is a fit for practical property improvements where a box blade, loader, and careful grading can make the area cleaner, safer, and more useful.</p></div><div className="grid gap-3 sm:grid-cols-2">{work.map((item) => <div key={item} className="border border-stone-200 bg-[#fbf7ef] p-4 text-sm font-black uppercase tracking-[0.08em]">{item}</div>)}</div></div></section>
      <section className="section-pad bg-[#f6f1e8]"><div className="container-tight grid gap-6 md:grid-cols-3">{[["Driveways", "Grading, gravel touch-ups, potholes, ruts, and surface maintenance."], ["Access", "Small lanes, work areas, pads, and rough property routes."], ["Property", "Focused improvements that make a property more usable without overbuilding the scope." ]].map(([title, text]) => <div key={title} className="border border-stone-200 bg-white p-6"><h2 className="text-xl font-black uppercase">{title}</h2><p className="mt-3 leading-7 text-stone-700">{text}</p></div>)}</div></section>
      <section className="section-pad bg-white"><div className="container-tight border border-stone-200 bg-[#15120f] p-6 text-white"><h2 className="text-2xl font-black uppercase">Have a small property job that needs a tractor?</h2><p className="mt-2 text-stone-200">Send photos, access details, and the result you want. Clear scope keeps the estimate practical.</p><Link href="/contact" className="button-secondary mt-5 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request an Estimate</Link></div></section>
    </>
  );
}
