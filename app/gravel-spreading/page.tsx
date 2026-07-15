import type { Metadata } from "next";
import Link from "next/link";

const uses = ["New gravel top-dressing", "Driveway touch-ups", "Gravel redistribution", "Parking pads", "Utility lanes", "Small property access areas"];

export const metadata: Metadata = {
  title: "Gravel Spreading & Redistribution in Western Ohio",
  description: "Gravel spreading and redistribution for driveways, lanes, pads, and small-property access areas in western Ohio.",
  alternates: { canonical: "/gravel-spreading" },
  openGraph: { title: "Gravel Spreading in Western Ohio | Found & Forged", description: "Spread new gravel or redistribute existing stone for cleaner driveways, pads, and property access.", url: "/gravel-spreading", type: "website" }
};

export default function GravelSpreadingPage() {
  const schema = { "@context": "https://schema.org", "@type": "Service", name: "Gravel Spreading", provider: { "@type": "LocalBusiness", name: "Found & Forged Property Services" }, areaServed: "Western Ohio", serviceType: "Gravel spreading and gravel redistribution", url: "https://foundforgedco.com/gravel-spreading" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="section-pad bg-[#15120f] text-white"><div className="container-tight"><p className="eyebrow text-[#d4b07b]">Gravel Spreading</p><h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight sm:text-6xl">Gravel Spreading & Redistribution</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">Found & Forged spreads new gravel and redistributes displaced stone for gravel driveways, lanes, pads, and small-property access areas across western Ohio.</p><Link href="/contact" className="button-secondary mt-8 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request a Gravel Estimate</Link></div></section>
      <section className="section-pad bg-white"><div className="container-tight grid gap-8 lg:grid-cols-2"><div><p className="eyebrow">Practical Gravel Work</p><h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Put stone where it actually helps.</h2><p className="mt-5 leading-8 text-stone-700">A good gravel job is not just dumping material. The surface needs to be shaped, existing stone pulled back into useful areas when possible, and new gravel placed where it improves access, drainage, and daily use.</p></div><div className="grid gap-3 sm:grid-cols-2">{uses.map((item) => <div key={item} className="border border-stone-200 bg-[#fbf7ef] p-4 text-sm font-black uppercase tracking-[0.08em]">{item}</div>)}</div></div></section>
      <section className="section-pad bg-[#f6f1e8]"><div className="container-tight grid gap-6 md:grid-cols-3">{[["Assess", "Look at thickness, low areas, existing gravel, traffic patterns, and drainage."], ["Spread", "Place gravel for useful coverage across driveways, pads, lanes, or access areas."], ["Shape", "Blend and finish the surface so the gravel is easier to drive on and maintain."]].map(([title, text]) => <div key={title} className="border border-stone-200 bg-white p-6"><h2 className="text-xl font-black uppercase">{title}</h2><p className="mt-3 leading-7 text-stone-700">{text}</p></div>)}</div></section>
      <section className="section-pad bg-white"><div className="container-tight border border-stone-200 bg-[#15120f] p-6 text-white"><h2 className="text-2xl font-black uppercase">Need gravel spread or pulled back into place?</h2><p className="mt-2 text-stone-200">Send driveway dimensions, photos, and the gravel type if you already have a supplier in mind.</p><Link href="/contact" className="button-secondary mt-5 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request an Estimate</Link></div></section>
    </>
  );
}
