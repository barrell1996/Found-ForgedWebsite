import { buildPropertyServiceMetadata, PropertyServicePage } from "@/components/PropertyServicePage";

export const metadata = buildPropertyServiceMetadata({
  title: "Property Maintenance Plans in Western Ohio | Gravel Driveway Upkeep",
  description: "Property maintenance plans for western Ohio homeowners needing gravel driveway upkeep, seasonal grading, pothole prevention, culvert checks, and small property improvements.",
  path: "/property-maintenance-plans"
});

export default function PropertyMaintenancePlansPage() {
  return (
    <PropertyServicePage
      eyebrow="Property Maintenance Plans"
      h1="Property Maintenance Plans for Driveways & Small Properties"
      serviceName="Property Maintenance Plans"
      slug="property-maintenance-plans"
      intro="Plan seasonal gravel driveway upkeep, pothole prevention, culvert checks, grading touch-ups, and practical small-property maintenance before small problems become expensive repairs."
      sections={[
        { title: "Seasonal Driveway Checks", body: "A spring or fall review can catch potholes, ruts, drainage issues, and gravel migration before they turn into larger repairs." },
        { title: "Practical Maintenance Scope", body: "Plans can focus on driveway grading, gravel touch-ups, culvert areas, lanes, pads, and small access improvements that matter to daily property use." },
        { title: "Owner-Friendly Planning", body: "The goal is not unnecessary work. It is a clear maintenance rhythm that helps you budget and prioritize the property projects that actually reduce headaches." }
      ]}
      bullets={["Seasonal grading", "Pothole prevention", "Culvert checks", "Gravel planning", "Small property upkeep", "Photo-based reviews"]}
      photos={["Current driveway photos from both directions", "Known recurring potholes or washouts", "Culverts, ditches, and drainage paths", "Parking pads, lanes, or gravel work areas", "Problem areas after heavy rain", "A short list of yearly property priorities"]}
      faqs={[
        { question: "Is this a subscription plan?", answer: "It can start as a practical maintenance conversation. The right cadence depends on driveway length, traffic, drainage, and how much seasonal upkeep the property needs." },
        { question: "What does a maintenance visit include?", answer: "Typical work may include light grading, gravel redistribution, pothole prevention, culvert-area review, and small property surface touch-ups." },
        { question: "Who is this best for?", answer: "Property owners who know the same driveway or access problems return every season and want a more planned approach than emergency repairs." }
      ]}
      related={[{ label: "Gravel Driveway Repair", href: "/gravel-driveway-repair" }, { label: "Gravel Driveway Grading", href: "/gravel-driveway-grading" }, { label: "Pothole Repair", href: "/pothole-repair" }, { label: "Light Tractor Services", href: "/light-tractor-services" }]}
      ctaLabel="Request a Maintenance Plan"
    />
  );
}
