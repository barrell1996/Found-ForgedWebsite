import type { Metadata } from "next";
import Link from "next/link";
import { learningHubs } from "@/lib/site-data";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Learning Center",
  description: "Found & Forged learning hubs for gravel driveways, DIY property projects, equipment, and digital plans.",
  alternates: {
    canonical: "/learning"
  },
  openGraph: {
    title: "Learning Center | Found & Forged",
    description: "Found & Forged learning hubs for gravel driveways, DIY property projects, equipment, and digital plans.",
    url: "/learning",
    type: "website"
  }
};

export default function LearningPage() {
  return (
    <section className="section-pad blueprint bg-forged-smoke">
      <div className="container-tight">
        <SectionHeader eyebrow="Learning Center" title="Organized hubs for practical property knowledge." />
        <div className="grid gap-5 md:grid-cols-2">
          {learningHubs.map((hub) => (
            <article key={hub.title} className="panel p-6">
              <h2 className="text-2xl font-black uppercase tracking-[0.03em]">{hub.title}</h2>
              <p className="mt-4 leading-8 text-forged-steel">{hub.summary}</p>
              <Link href="/blog" className="button-secondary mt-6">Explore Articles</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
