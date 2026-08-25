import { buildPropertyServiceMetadata, PropertyServicePage } from "@/components/PropertyServicePage";

export const metadata = buildPropertyServiceMetadata({
  title: "Junk Removal in Miami County, Ohio",
  description: "Junk removal in Troy, Piqua, Tipp City, and Miami County for household clutter, garage items, yard debris, furniture, and small property cleanouts.",
  path: "/junk-removal"
});

export default function JunkRemovalPage() {
  return <PropertyServicePage
    eyebrow="Junk Removal"
    h1="Junk Removal in Miami County, Ohio"
    serviceName="Junk Removal"
    slug="junk-removal"
    intro="Clear unwanted household, garage, yard, and property items with a straightforward estimate based on volume, weight, labor, access, disposal requirements, and the number of loads."
    sections={[
      { title: "Show Us the Load", body: "Clear photos of every item or pile help estimate space, weight, labor, stairs, distance to the trailer, and any special handling." },
      { title: "Confirm What Goes", body: "The agreed scope identifies what should be removed, what stays, and whether loose items need bagged, broken down, or carried from inside a structure." },
      { title: "Haul and Dispose", body: "Accepted material is loaded and taken to an appropriate transfer, recycling, donation, or disposal destination when practical." }
    ]}
    bullets={["Garage clutter", "Unwanted furniture", "Yard debris", "Small cleanouts", "Bagged household items", "Property cleanup loads"]}
    photos={["One wide photo showing the full load", "Close-ups of heavy or bulky items", "Doorways, stairs, gates, or narrow access", "Distance from items to parking", "Appliances, mattresses, tires, or special items", "Anything unusually heavy or requiring disassembly"]}
    faqs={[
      { question: "How is junk removal priced?", answer: "Pricing depends on volume, weight, labor, access, disposal fees, special items, and the number of trailer loads. Complete photos make the initial estimate more accurate." },
      { question: "What items are not accepted?", answer: "Hazardous chemicals, fuels, asbestos, medical or biohazardous waste, explosives, and other regulated materials are not accepted. Paint, tires, appliances, electronics, and refrigerant-containing items must be disclosed because special fees or disposal rules may apply." },
      { question: "Can yard debris be removed?", answer: "Yes, many brush, limb, bagged yard-waste, and general outdoor cleanup loads can be quoted. Very large logs, stumps, dirt, concrete, and unusually heavy material require separate review." }
    ]}
    related={[{ label: "Garden-Bed Cleanup", href: "/garden-bed-cleanup" }, { label: "Mulching", href: "/mulching" }, { label: "Light Tractor Work", href: "/light-tractor-services" }, { label: "All Services", href: "/services" }]}
    ctaLabel="Request Junk Removal"
  />;
}
