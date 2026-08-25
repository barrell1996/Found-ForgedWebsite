import { buildPropertyServiceMetadata, PropertyServicePage } from "@/components/PropertyServicePage";

export const metadata = buildPropertyServiceMetadata({
  title: "Garden-Bed Cleanup in Miami County, Ohio",
  description: "Garden-bed cleanup in Troy, Piqua, Tipp City, and Miami County for weeds, leaves, dead growth, debris, tired edges, and mulch preparation.",
  path: "/garden-bed-cleanup"
});

export default function GardenBedCleanupPage() {
  return <PropertyServicePage
    eyebrow="Garden-Bed Cleanup"
    h1="Garden-Bed Cleanup in Miami County, Ohio"
    serviceName="Garden-Bed Cleanup"
    slug="garden-bed-cleanup"
    intro="Reset overgrown, neglected, or seasonally tired planting beds by clearing unwanted growth and debris, defining the work area, and preparing the surface for mulch or ongoing maintenance."
    sections={[
      { title: "Clear", body: "Remove weeds, leaves, dead annual growth, small fallen branches, loose debris, and other unwanted material identified in the estimate." },
      { title: "Cut Back", body: "Trim appropriate dead or overgrown plant material when included in the agreed scope, while clearly identifying anything that should remain untouched." },
      { title: "Prepare", body: "Rake and smooth the bed surface, clean visible edges, and leave the area ready for mulch, planting, or easier routine care." }
    ]}
    bullets={["Weed removal", "Leaf and debris cleanup", "Dead growth removal", "Light plant cutback", "Bed-edge cleanup", "Mulch preparation"]}
    photos={["Wide photo of every garden bed", "Close-ups of heavy weeds or growth", "Plants that must remain untouched", "Bed edges and nearby structures", "Access from the driveway or street", "Any debris that should be hauled away"]}
    faqs={[
      { question: "Can cleanup and mulching be quoted together?", answer: "Yes. Garden-bed cleanup is often the first phase of a mulch installation, and both can be included in one project scope." },
      { question: "Do you remove all plants from the bed?", answer: "Only plants and material clearly identified for removal. Photos and an on-site walkthrough help prevent wanted plants from being disturbed." },
      { question: "Do you haul away the cleanup debris?", answer: "Hauling and disposal can be included when identified in the estimate. The amount and type of material affect pricing." }
    ]}
    related={[{ label: "Mulching", href: "/mulching" }, { label: "Junk Removal", href: "/junk-removal" }, { label: "Light Tractor Work", href: "/light-tractor-services" }, { label: "All Services", href: "/services" }]}
    ctaLabel="Request Bed Cleanup"
  />;
}
