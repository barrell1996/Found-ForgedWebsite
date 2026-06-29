import { buildPropertyServiceMetadata, PropertyServicePage } from "@/components/PropertyServicePage";

export const metadata = buildPropertyServiceMetadata({
  title: "Gravel Redistribution in Western Ohio | Driveway Gravel Maintenance",
  description: "Gravel redistribution for western Ohio driveways. Pull displaced stone back into the travel path, restore edges, smooth lanes, and improve surface shape.",
  path: "/gravel-redistribution"
});

export default function GravelRedistributionPage() {
  return (
    <PropertyServicePage
      eyebrow="Gravel Redistribution"
      h1="Gravel Redistribution for Driveways, Lanes & Pads"
      serviceName="Gravel Redistribution"
      slug="gravel-redistribution"
      intro="When good gravel has been pushed into the shoulders, center ridge, entrance, or low-use areas, redistribution can reclaim material and improve the driving surface."
      sections={[
        { title: "Use Existing Material", body: "Many driveways have usable gravel sitting where tires no longer travel. Redistribution pulls that material back into practical service before buying more stone." },
        { title: "Improve Travel Lanes", body: "Box blade and grading work can blend loose stone, reduce ridges, and put gravel back where it supports daily driving." },
        { title: "Pair With Spreading", body: "If existing stone is not enough, redistribution can be paired with fresh gravel spreading for a cleaner finish." }
      ]}
      bullets={["Gravel pushed to edges", "Center ridge cleanup", "Loose stone recovery", "Driveway shoulders", "Travel lane repair", "Maintenance grading"]}
      photos={["Wide photos showing where gravel has migrated", "Close-up of shoulders or center ridges", "Photos of low spots and thin areas", "Approximate driveway length", "Photos of drainage or washout areas", "Any planned new gravel delivery details"]}
      faqs={[
        { question: "Is gravel redistribution cheaper than new gravel?", answer: "It can be, especially when usable stone is already on site. The best answer depends on current gravel depth and how much material has migrated." },
        { question: "Can redistribution fix thin spots?", answer: "It can improve thin spots if enough loose gravel exists nearby. If the drive lacks material overall, fresh gravel may still be needed." },
        { question: "Is this the same as grading?", answer: "It overlaps with grading, but the focus is specifically pulling displaced stone back into useful areas and blending the surface." }
      ]}
      related={[{ label: "Gravel Spreading", href: "/gravel-spreading" }, { label: "Gravel Delivery", href: "/gravel-delivery" }, { label: "Driveway Grading", href: "/driveway-grading" }, { label: "Gravel Driveway Repair", href: "/gravel-driveway-repair" }]}
      ctaLabel="Request Gravel Redistribution"
    />
  );
}
