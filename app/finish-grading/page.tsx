import type { Metadata } from "next";
import Link from "next/link";

const projects = ["Gravel pads", "Driveway tie-ins", "Small lanes", "Parking areas", "Utility spaces", "Property access improvements"];

export const metadata: Metadata = {
  title: "Finish Grading Services in Western Ohio",
  description: "Finish grading for gravel pads, lanes, driveway tie-ins, small parking areas, and practical property improvements in western Ohio.",
  openGraph: { title: "Finish Grading in Western Ohio | Found & Forged", description: "Fine-grade small property surfaces, gravel pads, driveways, and access areas for cleaner drainage and better usability." }
};

export default function FinishGradingPage() {
  const schema = { "@context": "https://schema.org", "@type": "Service", name: "Finish Grading", provider: { "@type": "LocalBusiness", name: "Found & Forged Property Services" }, areaServed: "Western Ohio", serviceType: "Finish grading for small property projects", url: "https://foundforgedco.com/finish-grading" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="section-pad bg-[#15120f] text-white"><div className="container-tight"><p className="eyebrow text-[#d4b07b]">Finish Grading</p><h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight sm:text-6xl">Finish Grading for Small Property Projects</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">Found & Forged provides practical finish grading for gravel pads, lanes, driveway tie-ins, small parking areas, and work surfaces that need to drain cleanly and look finished.</p><Link href="/contact" className="button-secondary mt-8 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request Finish Grading</Link></div></section>
      <section className="section-pad bg-white"><div className="container-tight grid gap-8 lg:grid-cols-2"><div><p className="eyebrow">Clean practical surfaces</p><h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">The last pass matters.</h2><p className="mt-5 leading-8 text-stone-700">Finish grading is about making a surface usable, consistent, and easier to maintain. The goal is not decorative landscaping. It is clean slope, practical drainage, and a surface that works for daily use.</p></div><div className="grid gap-3 sm:grid-cols-2">{projects.map((item) => <div key={item} className="border border-stone-200 bg-[#fbf7ef] p-4 text-sm font-black uppercase tracking-[0.08em]">{item}</div>)}</div></div></section>
      <section className="section-pad bg-[#f6f1e8]"><div className="container-tight grid gap-6 md:grid-cols-3">{[["Shape", "Set the grade so water moves in the right direction."], ["Blend", "Tie new or repaired areas into existing driveways, lanes, pads, or edges."], ["Finish", "Leave a cleaner, more usable surface suited to the property." ]].map(([title, text]) => <div key={title} className="border border-stone-200 bg-white p-6"><h2 className="text-xl font-black uppercase">{title}</h2><p className="mt-3 leading-7 text-stone-700">{text}</p></div>)}</div></section>
      <section className="section-pad bg-white"><div className="container-tight border border-stone-200 bg-[#15120f] p-6 text-white"><h2 className="text-2xl font-black uppercase">Need a small area graded cleanly?</h2><p className="mt-2 text-stone-200">Send photos and explain how you use the area so the estimate matches the real property need.</p><Link href="/contact" className="button-secondary mt-5 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request an Estimate</Link></div></section>
    </>
  );
}
