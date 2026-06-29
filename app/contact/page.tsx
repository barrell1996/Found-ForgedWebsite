import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";

const contactEmail = "hello@foundforgedco.com";

export const metadata: Metadata = {
  title: "Contact / Request a Quote",
  description: "Request a quote from Found & Forged for gravel driveway rehabilitation, grading, gravel spreading, box blade work, and property projects."
};

export default function ContactPage() {
  return (
    <section className="section-pad blueprint bg-forged-smoke">
      <div className="container-tight grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-6">
          <SectionHeader eyebrow="Quote request" title="Tell us what needs built, fixed, graded, or planned.">
            <p>
              Send project details through the form, or email us directly at{" "}
              <a href={`mailto:${contactEmail}`} className="font-black text-forged-black underline decoration-forged-rust underline-offset-4">
                {contactEmail}
              </a>
              .
            </p>
          </SectionHeader>
          <div className="panel p-5 sm:p-6">
            <p className="eyebrow">Direct Contact</p>
            <a href={`mailto:${contactEmail}`} className="mt-3 block text-xl font-black text-forged-black hover:text-forged-rust">
              {contactEmail}
            </a>
            <p className="mt-3 text-sm leading-7 text-forged-charcoal">
              Use this address for general questions, quote requests, custom goods, curated finds, and digital product support.
            </p>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
