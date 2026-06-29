import { buildPropertyServiceMetadata, PropertyServicePage } from "@/components/PropertyServicePage";

export const metadata = buildPropertyServiceMetadata({
  title: "Gravel Driveway Grading in Western Ohio | Found & Forged",
  description: "Gravel driveway grading in western Ohio for ruts, washboards, crown restoration, drainage improvement, gravel redistribution, and rough country drives.",
  path: "/gravel-driveway-grading"
});

export default function GravelDrivewayGradingPage() {
  return (
    <PropertyServicePage
      eyebrow="Gravel Driveway Grading"
      h1="Gravel Driveway Grading in Western Ohio"
      serviceName="Gravel Driveway Grading"
      slug="gravel-driveway-grading"
      intro="Restore a smoother, better-draining gravel driveway with practical grading, crown restoration, box blade work, and gravel redistribution for rural and small-property access."
      sections={[
        { title: "Crown Restoration", body: "A gravel driveway needs shape so water leaves the travel path. Grading rebuilds or improves the crown so water sheds toward the sides instead of creating potholes and ruts." },
        { title: "Ruts and Washboards", body: "Rough sections are cut, blended, and reshaped to reduce washboards, high spots, tire-path ruts, and loose gravel ridges." },
        { title: "Maintenance Timing", body: "Grading is often best before adding new stone, after heavy rutting, or when gravel has migrated away from the usable drive surface." }
      ]}
      bullets={["Crown repair", "Washboard smoothing", "Rutted lanes", "Water shedding", "Box blade work", "Driveway entrances"]}
      photos={["Wide photo from the road looking up the driveway", "Close-up of ruts, washboards, or low spots", "Photo after rain showing water flow", "Photo of the driveway entrance", "Approximate driveway length and width", "Any culverts, ditches, or drainage problem areas"]}
      faqs={[
        { question: "Is grading better than adding more gravel?", answer: "Often, yes. If the driveway shape is wrong, new gravel may disappear into the same low spots. Grading helps restore shape before material is added." },
        { question: "Can grading fix potholes?", answer: "Grading can help potholes when they are caused by surface shape, water, and loose gravel movement. Severe base failure may need more material or additional repair." },
        { question: "How often should a gravel driveway be graded?", answer: "It depends on traffic, slope, drainage, and gravel depth. Many rural drives benefit from grading when ruts, washboards, or recurring potholes start to return." }
      ]}
      related={[{ label: "Driveway Grading", href: "/driveway-grading" }, { label: "Gravel Driveway Repair", href: "/gravel-driveway-repair" }, { label: "Pothole Repair", href: "/pothole-repair" }, { label: "Gravel Redistribution", href: "/gravel-redistribution" }]}
      ctaLabel="Request Driveway Grading"
    />
  );
}
