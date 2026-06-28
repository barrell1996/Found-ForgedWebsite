import type { Metadata } from "next";
import { CalculatorGrid } from "@/components/Calculator";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Free Calculators",
  description: "Free calculators for gravel, driveway gravel, deck materials, concrete, mulch, topsoil, fencing, pavers, and retaining walls."
};

export default function CalculatorsPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-tight">
        <SectionHeader eyebrow="Free calculators" title="Estimate materials without the guesswork.">
          <p>Quick planning tools for common home and property projects. Results are estimates; confirm final quantities with supplier specs and job-site conditions.</p>
        </SectionHeader>
        <CalculatorGrid />
      </div>
    </section>
  );
}
