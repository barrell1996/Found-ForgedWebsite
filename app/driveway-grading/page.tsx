import type { Metadata } from "next";
import Link from "next/link";

const signs = ["Washboard bumps", "Flat driveway with no crown", "Water running down the tire paths", "Loose gravel pushed to the edges", "Rough entrances and low spots", "Ruts after storms or freeze-thaw cycles"];

export const metadata: Metadata = {
  title: "Driveway Grading in Western Ohio | Gravel Crown Restoration",
  description: "Driveway grading and gravel crown restoration in western Ohio for ruts, washboards, drainage problems, gravel migration, and rough country driveways.",
  openGraph: {
    title: "Driveway Grading & Crown Restoration | Found & Forged",
    description: "Smooth rough gravel driveways, restore crown, improve drainage, and reduce pothole problems with practical driveway grading."
  }
};

export default function DrivewayGradingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Driveway Grading",
    provider: { "@type": "LocalBusiness", name: "Found & Forged Property Services" },
    areaServed: "Western Ohio",
    serviceType: "Gravel driveway grading and crown restoration",
    url: "https://foundforgedco.com/driveway-grading"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="section-pad bg-[#15120f] text-white">
        <div className="container-tight">
          <p className="eyebrow text-[#d4b07b]">Western Ohio Driveway Grading</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight sm:text-6xl">Driveway Grading & Crown Restoration</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">A gravel driveway should shed water, hold its shape, and drive smoothly. Found & Forged grades rough gravel drives, restores crown, cuts washboards, and redistributes displaced stone so the surface works again.</p>
          <Link href="/contact" className="button-secondary mt-8 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request a Grading Estimate</Link>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">When grading helps</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Grading fixes the shape, not just the symptom.</h2>
            <p className="mt-5 leading-8 text-stone-700">Dumping fresh gravel on a flat or rutted drive often buries the problem for a short time. Grading reshapes the surface so water can move off the drive instead of sitting in the travel path and creating potholes.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {signs.map((item) => <div key={item} className="border border-stone-200 bg-[#fbf7ef] p-4 text-sm font-black uppercase tracking-[0.08em]">{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f6f1e8]">
        <div className="container-tight grid gap-6 md:grid-cols-3">
          {[["Crown", "Rebuild or improve the high center section so water sheds toward the sides."], ["Cut", "Knock down washboards, high spots, ridges, and uneven areas where gravel has migrated."], ["Finish", "Blend the surface for a cleaner, more usable drive that is easier to maintain."]].map(([title, text]) => (
            <div key={title} className="border border-stone-200 bg-white p-6"><h2 className="text-xl font-black uppercase">{title}</h2><p className="mt-3 leading-7 text-stone-700">{text}</p></div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight flex flex-col gap-4 border border-stone-200 bg-[#15120f] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="text-2xl font-black uppercase">Need your gravel driveway graded?</h2><p className="mt-2 text-stone-200">Send photos and a short description for a practical western Ohio property services estimate.</p></div>
          <Link href="/contact" className="button-secondary border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">Request an Estimate</Link>
        </div>
      </section>
    </>
  );
}
