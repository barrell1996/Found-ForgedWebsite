import type { Metadata } from "next";
import Link from "next/link";

const issues = ["Washed-out culvert ends", "Rough driveway entrance", "Water crossing the drive", "Ditch line buildup", "Soft gravel near pipes", "Erosion after heavy rain"];

export const metadata: Metadata = {
  title: "Driveway Culvert Repair & Drainage Help in Western Ohio",
  description: "Driveway culvert repair and drainage improvement in western Ohio for washed-out entrances, erosion, ditch flow, and gravel driveway water problems.",
  alternates: { canonical: "/culvert-repair" },
  openGraph: { title: "Driveway Culvert Repair in Western Ohio | Found & Forged", description: "Improve driveway entrances, culvert approaches, gravel washouts, and water movement around rural driveways.", url: "/culvert-repair", type: "website" }
};

export default function CulvertRepairPage() {
  const schema = { "@context": "https://schema.org", "@type": "Service", name: "Driveway Culvert Repair", provider: { "@type": "LocalBusiness", name: "Found & Forged Property Services" }, areaServed: "Western Ohio", serviceType: "Driveway culvert and drainage repair", url: "https://foundforgedco.com/culvert-repair" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="section-pad bg-[#15120f] text-white"><div className="container-tight"><p className="eyebrow text-[#d4b07b]">Culvert & Drainage Repair</p><h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight sm:text-6xl">Driveway Culvert Repair & Drainage Help</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">Washed-out culvert approaches and poor drainage can destroy a gravel drive fast. Found & Forged helps reshape gravel, improve approaches, clean up rough transitions, and restore practical access around driveway culverts.</p><Link href="/contact" className="button-secondary mt-8 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request Culvert Help</Link></div></section>
      <section className="section-pad bg-white"><div className="container-tight grid gap-8 lg:grid-cols-2"><div><p className="eyebrow">Drainage-first repairs</p><h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Water decides how long the repair lasts.</h2><p className="mt-5 leading-8 text-stone-700">When water is trapped, redirected, or moving too fast, gravel gets carried away. Culvert and drainage work focuses on the approach, slope, side flow, and gravel shape so the entrance is more usable after storms.</p></div><div className="grid gap-3 sm:grid-cols-2">{issues.map((item) => <div key={item} className="border border-stone-200 bg-[#fbf7ef] p-4 text-sm font-black uppercase tracking-[0.08em]">{item}</div>)}</div></div></section>
      <section className="section-pad bg-[#f6f1e8]"><div className="container-tight grid gap-6 md:grid-cols-3">{[["Assess flow", "Look at how water reaches the driveway, culvert, ditch, and gravel surface."], ["Rebuild approach", "Shape and restore gravel near entrances, pipe ends, and rough transitions."], ["Protect access", "Improve the practical driving surface so it is safer and easier to maintain."]].map(([title, text]) => <div key={title} className="border border-stone-200 bg-white p-6"><h2 className="text-xl font-black uppercase">{title}</h2><p className="mt-3 leading-7 text-stone-700">{text}</p></div>)}</div></section>
      <section className="section-pad bg-white"><div className="container-tight border border-stone-200 bg-[#15120f] p-6 text-white"><h2 className="text-2xl font-black uppercase">Have a washed-out culvert or rough entrance?</h2><p className="mt-2 text-stone-200">Send photos from both sides of the drive and after-rain water flow if you have them.</p><Link href="/contact" className="button-secondary mt-5 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request an Estimate</Link></div></section>
    </>
  );
}
