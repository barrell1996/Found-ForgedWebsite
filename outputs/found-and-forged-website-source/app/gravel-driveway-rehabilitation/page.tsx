import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Gravel Driveway Rehabilitation",
  description: "Gravel driveway rehabilitation for ruts, potholes, washouts, crown restoration, drainage, grading, and fresh aggregate planning."
};

export default function GravelDrivewayPage() {
  return (
    <>
      <section className="section-pad fine-grid bg-forged-black text-white">
        <div className="container-tight">
          <p className="eyebrow text-forged-silver">Core service</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight sm:text-6xl">Gravel Driveway Rehabilitation</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-forged-concrete">
            A practical reset for tired gravel drives: reshape the surface, address drainage patterns, smooth rough travel lanes, and prepare for the right aggregate.
          </p>
          <Link href="/contact" className="button-secondary mt-8 border-white bg-white text-forged-black">Request a Quote</Link>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-tight grid gap-8 lg:grid-cols-3">
          {[
            ["Assess", "Ruts, potholes, crown, low spots, runoff, aggregate condition, and access constraints."],
            ["Rebuild", "Box blade and grading work to restore shape, cut high areas, and improve surface behavior."],
            ["Maintain", "Guidance for gravel depth, future touch-ups, drainage upkeep, and seasonal care."]
          ].map(([title, text]) => (
            <div key={title} className="panel p-6">
              <h2 className="text-xl font-black uppercase">{title}</h2>
              <p className="mt-3 leading-7 text-forged-steel">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-pad bg-forged-smoke">
        <div className="container-tight">
          <SectionHeader eyebrow="Signs it is time" title="When the drive stops working for you." />
          <div className="grid gap-3 sm:grid-cols-2">
            {["Recurring potholes", "Standing water", "Rutted travel lanes", "Washed-out edges", "Loose aggregate pushed aside", "No visible crown"].map((item) => (
              <div key={item} className="border border-forged-concrete bg-white p-4 font-black uppercase tracking-[0.06em]">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
