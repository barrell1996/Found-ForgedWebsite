import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { curatedGoods } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Curated Goods",
  description: "Vintage finds, resale pieces, restored items, and practical home, shop, and property goods curated by Found & Forged.",
  alternates: {
    canonical: "/curated-goods"
  },
  openGraph: {
    title: "Curated Goods | Found & Forged",
    description: "Vintage finds, resale pieces, restored items, and practical home, shop, and property goods curated by Found & Forged.",
    url: "/curated-goods",
    type: "website"
  }
};

export default function CuratedGoodsPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-tight">
        <SectionHeader eyebrow="Curated Goods" title="Found, cleaned up, restored, and put back to work.">
          <p>Curated Goods is the Found & Forged lane for vintage finds, resale pieces, restored items, and durable goods with practical value.</p>
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {curatedGoods.map((item) => (
            <div key={item} className="border border-forged-concrete bg-forged-smoke p-5">
              <h2 className="text-xl font-black uppercase tracking-[0.04em]">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-forged-steel">Selected for utility, character, and a place in real homes, shops, and properties.</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="button-primary mt-8">Ask About Current Finds</Link>
      </div>
    </section>
  );
}
