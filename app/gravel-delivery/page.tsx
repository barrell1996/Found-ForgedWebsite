import { buildPropertyServiceMetadata, PropertyServicePage } from "@/components/PropertyServicePage";

export const metadata = buildPropertyServiceMetadata({
  title: "Driveway Gravel Delivery Planning in Western Ohio | Found & Forged",
  description: "Driveway gravel delivery planning in western Ohio. Estimate gravel needs, prepare the driveway, coordinate material timing, and spread gravel after delivery.",
  path: "/gravel-delivery"
});

export default function GravelDeliveryPage() {
  return (
    <PropertyServicePage
      eyebrow="Gravel Delivery Planning"
      h1="Driveway Gravel Delivery Planning & Spreading"
      serviceName="Driveway Gravel Delivery Planning"
      slug="gravel-delivery"
      intro="Get practical help estimating gravel needs, preparing the driveway before material arrives, and spreading or shaping gravel after delivery for western Ohio properties."
      sections={[
        { title: "Estimate Before Ordering", body: "Length, width, desired depth, existing gravel, and repair needs all affect how much stone makes sense. Planning helps avoid buying too little or burying unresolved problems." },
        { title: "Prepare the Surface", body: "If the driveway is rutted, flat, or full of potholes, grading before delivery can make new gravel work harder and last longer." },
        { title: "Spread and Finish", body: "After material is on site, gravel can be spread, blended, and shaped for a cleaner driving surface." }
      ]}
      bullets={["Gravel quantity planning", "Pre-delivery grading", "Material placement", "Driveway spreading", "Surface finishing", "Repair-first planning"]}
      photos={["Full driveway length from multiple angles", "Areas where new gravel is needed", "Existing potholes, ruts, or low spots", "Delivery access and turnaround space", "Desired gravel depth if known", "Any quote or material type from your gravel supplier"]}
      faqs={[
        { question: "Do I need grading before gravel delivery?", answer: "Often, yes. If the existing surface is rutted or flat, grading before delivery helps new gravel sit where it is useful instead of filling old problem areas." },
        { question: "Can you help estimate how much gravel I need?", answer: "Yes. Photos, driveway dimensions, and desired depth help estimate material needs before ordering." },
        { question: "Do you supply the gravel?", answer: "This page focuses on planning, preparation, and spreading. Material sourcing can be discussed during the estimate based on project location and supplier options." }
      ]}
      related={[{ label: "Gravel Spreading", href: "/gravel-spreading" }, { label: "Gravel Redistribution", href: "/gravel-redistribution" }, { label: "Gravel Driveway Grading", href: "/gravel-driveway-grading" }, { label: "Gravel Driveway Repair", href: "/gravel-driveway-repair" }]}
      ctaLabel="Request Gravel Planning"
    />
  );
}
