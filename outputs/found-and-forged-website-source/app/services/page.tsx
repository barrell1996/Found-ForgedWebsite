import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Found & Forged property services for gravel driveway rehabilitation, driveway grading, gravel spreading, box blade work, and small property projects."
};

export default function ServicesPage() {
  return (
    <section className="section-pad blueprint bg-forged-smoke">
      <div className="container-tight">
        <SectionHeader eyebrow="Property Services" title="Built for useful property improvements.">
          <p>The hands-on service side of Found & Forged: focused improvements for driveways, access, grading, gravel, and small property projects.</p>
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
        <Link href="/contact" className="button-primary mt-8">Request a Quote</Link>
      </div>
    </section>
  );
}
