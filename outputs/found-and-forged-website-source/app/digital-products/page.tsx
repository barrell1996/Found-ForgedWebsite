import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { digitalProducts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Digital Products",
  description: "Downloadable DIY plans, deck plans, patio plans, driveway guides, property maintenance templates, calculators, and planning tools from Found & Forged."
};

export default function DigitalProductsPage() {
  return (
    <section className="section-pad blueprint bg-forged-smoke">
      <div className="container-tight">
        <SectionHeader eyebrow="Digital Products" title="Plans, guides, templates, and tools for practical property work.">
          <p>Found & Forged digital products help homeowners and DIYers plan cleaner projects before the work begins.</p>
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {digitalProducts.map((item) => (
            <div key={item} className="panel p-5">
              <span className="mb-8 block h-px w-16 bg-forged-silver" />
              <h2 className="text-xl font-black uppercase tracking-[0.04em]">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-forged-steel">Built to be clear, useful, and field-ready for home, shop, and property decisions.</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/calculators" className="button-primary">Use Free Calculators</Link>
          <Link href="/blog/category/digital-plans-and-guides" className="button-secondary">Read Related Guides</Link>
        </div>
      </div>
    </section>
  );
}
