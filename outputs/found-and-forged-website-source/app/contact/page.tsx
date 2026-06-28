import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contact / Request a Quote",
  description: "Request a quote from Found & Forged for gravel driveway rehabilitation, grading, gravel spreading, box blade work, and property projects."
};

export default function ContactPage() {
  return (
    <section className="section-pad blueprint bg-forged-smoke">
      <div className="container-tight grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="Quote request" title="Tell us what needs built, fixed, graded, or planned.">
          <p>For now this form logs submissions in the browser console. Email, database, and CRM connections are marked in the code for the next phase.</p>
        </SectionHeader>
        <QuoteForm />
      </div>
    </section>
  );
}
