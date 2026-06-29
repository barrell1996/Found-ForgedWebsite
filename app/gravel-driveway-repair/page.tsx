import { buildPropertyServiceMetadata, PropertyServicePage } from "@/components/PropertyServicePage";

export const metadata = buildPropertyServiceMetadata({
  title: "Gravel Driveway Repair in Western Ohio | Potholes, Ruts & Washouts",
  description: "Gravel driveway repair in western Ohio for potholes, ruts, washouts, soft spots, drainage issues, loose gravel, and rough driveway entrances.",
  path: "/gravel-driveway-repair"
});

export default function GravelDrivewayRepairPage() {
  return (
    <PropertyServicePage
      eyebrow="Gravel Driveway Repair"
      h1="Gravel Driveway Repair for Potholes, Ruts & Washouts"
      serviceName="Gravel Driveway Repair"
      slug="gravel-driveway-repair"
      intro="Repair rough gravel driveways by addressing the surface problems that create potholes, ruts, washouts, loose gravel migration, and poor drainage."
      sections={[
        { title: "Repair the Cause", body: "A lasting repair looks at crown, runoff, gravel depth, soft spots, and traffic patterns rather than simply filling the same hole again." },
        { title: "Restore Usability", body: "The goal is a driveway that drives better, sheds water more cleanly, and is easier to maintain after storms and seasonal wear." },
        { title: "Plan Material Wisely", body: "Fresh gravel can help, but it performs better after the existing drive is shaped and loose stone is redistributed where useful." }
      ]}
      bullets={["Pothole repair", "Rut repair", "Washout repair", "Soft spots", "Rough entrances", "Loose gravel"]}
      photos={["Photos of every pothole or rough section", "Wide photo showing driveway slope", "Photo of the entrance from the road", "Photos after rain if water stands or crosses the drive", "Close-up of existing gravel depth", "Notes about delivery trucks, trailers, or heavy traffic"]}
      faqs={[
        { question: "Can gravel driveway potholes be fixed without new stone?", answer: "Sometimes. If enough existing gravel is available, grading and redistribution may improve the surface before new material is needed." },
        { question: "Why do my driveway potholes keep coming back?", answer: "Most recurring potholes come from water sitting in the travel lane, a flat driveway profile, soft base areas, or gravel being pushed out of the repair area." },
        { question: "Do you repair long rural driveways?", answer: "Yes, when the project is a good fit for light tractor and grading work. Photos and approximate length help determine scope." }
      ]}
      related={[{ label: "Gravel Driveway Rehabilitation", href: "/gravel-driveway-rehabilitation" }, { label: "Pothole Repair", href: "/pothole-repair" }, { label: "Culvert Repair", href: "/culvert-repair" }, { label: "Gravel Delivery", href: "/gravel-delivery" }]}
      ctaLabel="Request Driveway Repair"
    />
  );
}
