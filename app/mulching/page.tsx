import { buildPropertyServiceMetadata, PropertyServicePage } from "@/components/PropertyServicePage";

export const metadata = buildPropertyServiceMetadata({
  title: "Mulching Services in Miami County, Ohio",
  description: "Garden-bed preparation and mulch installation in Troy, Piqua, Tipp City, and Miami County for cleaner, easier-to-maintain planting areas.",
  path: "/mulching"
});

export default function MulchingPage() {
  return <PropertyServicePage
    eyebrow="Mulching"
    h1="Garden-Bed Mulching in Miami County, Ohio"
    serviceName="Mulching Services"
    slug="mulching"
    intro="Prepare and refresh garden beds with an even mulch installation planned around the bed condition, existing material, desired depth, access, and the finished appearance you want."
    sections={[
      { title: "Measure", body: "Estimate the bed area and mulch volume so material planning reflects the actual square footage and intended installation depth." },
      { title: "Prepare", body: "Address weeds, debris, heavy buildup, and bed edges included in the estimate before new mulch is spread." },
      { title: "Install", body: "Distribute mulch evenly around plants and features without piling material against trunks, siding, or other sensitive surfaces." }
    ]}
    bullets={["New mulch installation", "Mulch refreshing", "Bed preparation", "Existing mulch redistribution", "Material quantity planning", "Cleanup after spreading"]}
    photos={["Wide photo of each bed", "Approximate bed dimensions", "Current mulch condition", "Preferred mulch color or product", "Delivery and wheelbarrow access", "Trees, plants, siding, or utilities near the beds"]}
    faqs={[
      { question: "How much mulch will I need?", answer: "The amount depends on total bed area and installation depth. Measurements and current mulch condition are reviewed before final material quantities are recommended." },
      { question: "Does the bed need cleaned before mulching?", answer: "Usually. Weeds, leaves, debris, and excessive old material should be addressed so the finished bed looks cleaner and is easier to maintain." },
      { question: "Can mulch delivery be included?", answer: "Material sourcing or delivery coordination can be discussed during the estimate. Availability, product choice, and delivery access affect the final scope." }
    ]}
    related={[{ label: "Garden-Bed Cleanup", href: "/garden-bed-cleanup" }, { label: "Junk Removal", href: "/junk-removal" }, { label: "Mulch Calculator", href: "/calculators" }, { label: "All Services", href: "/services" }]}
    ctaLabel="Request a Mulch Estimate"
  />;
}
