import type { Metadata } from "next";
import Link from "next/link";

const causes = ["Standing water", "No crown", "Loose gravel displacement", "Soft base areas", "Heavy traffic", "Washouts near slopes or culverts"];

export const metadata: Metadata = {
  title: "Gravel Driveway Pothole Repair in Western Ohio",
  description: "Pothole repair for gravel driveways in western Ohio. Fix ruts, low spots, washouts, soft areas, and recurring driveway potholes.",
  openGraph: { title: "Gravel Driveway Pothole Repair | Found & Forged", description: "Repair recurring gravel driveway potholes by addressing drainage, shape, gravel movement, and rough travel lanes." }
};

export default function PotholeRepairPage() {
  const schema = { "@context": "https://schema.org", "@type": "Service", name: "Gravel Driveway Pothole Repair", provider: { "@type": "LocalBusiness", name: "Found & Forged Property Services" }, areaServed: "Western Ohio", serviceType: "Pothole repair for gravel driveways", url: "https://foundforgedco.com/pothole-repair" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="section-pad bg-[#15120f] text-white"><div className="container-tight"><p className="eyebrow text-[#d4b07b]">Gravel Driveway Pothole Repair</p><h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight sm:text-6xl">Fix Potholes, Ruts & Washouts</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">Recurring potholes are usually a shape and drainage problem. Found & Forged repairs gravel driveway potholes by cutting, reshaping, redistributing stone, and improving how water moves off the surface.</p><Link href="/contact" className="button-secondary mt-8 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request Pothole Repair</Link></div></section>
      <section className="section-pad bg-white"><div className="container-tight grid gap-8 lg:grid-cols-2"><div><p className="eyebrow">Why potholes come back</p><h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">A filled hole is not always a repaired hole.</h2><p className="mt-5 leading-8 text-stone-700">If water sits in the same spot, loose gravel gets pushed out and the pothole returns. A stronger repair looks at crown, runoff, compacted lows, base softness, and gravel depth before deciding whether the area needs reshaped, filled, or reworked.</p></div><div className="grid gap-3 sm:grid-cols-2">{causes.map((item) => <div key={item} className="border border-stone-200 bg-[#fbf7ef] p-4 text-sm font-black uppercase tracking-[0.08em]">{item}</div>)}</div></div></section>
      <section className="section-pad bg-[#f6f1e8]"><div className="container-tight grid gap-6 md:grid-cols-3">{[["Cut", "Break up the pothole edges and surrounding rough area so the repair can blend."], ["Shape", "Restore a better surface profile so water is less likely to sit in the same spot."], ["Finish", "Redistribute or add gravel where needed for a cleaner travel lane."]].map(([title, text]) => <div key={title} className="border border-stone-200 bg-white p-6"><h2 className="text-xl font-black uppercase">{title}</h2><p className="mt-3 leading-7 text-stone-700">{text}</p></div>)}</div></section>
      <section className="section-pad bg-white"><div className="container-tight border border-stone-200 bg-[#15120f] p-6 text-white"><h2 className="text-2xl font-black uppercase">Tired of the same potholes coming back?</h2><p className="mt-2 text-stone-200">Send photos of the pothole area and note whether water sits there after rain.</p><Link href="/contact" className="button-secondary mt-5 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request an Estimate</Link></div></section>
    </>
  );
}
