import type { Metadata } from "next";
import Link from "next/link";
import { customGoods } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Custom Goods",
  description: "Leather patch hats, apparel, laser-made goods, and custom branded products from Found & Forged.",
  alternates: {
    canonical: "/custom-goods"
  },
  openGraph: {
    title: "Custom Goods | Found & Forged",
    description: "Leather patch hats, apparel, laser-made goods, and custom branded products from Found & Forged.",
    url: "/custom-goods",
    type: "website"
  }
};

export default function CustomGoodsPage() {
  return (
    <section className="section-pad fine-grid bg-forged-black text-white">
      <div className="container-tight">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-forged-silver">Custom Goods</p>
          <h1 className="mt-3 text-3xl font-black uppercase leading-tight tracking-[0.02em] text-white sm:text-5xl">
            Made goods with a rugged, practical brand standard.
          </h1>
          <p className="mt-4 text-base leading-8 text-forged-concrete">
            Custom Goods gives Found & Forged a product lane for hats, apparel, laser work, and branded pieces that feel durable and intentional.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {customGoods.map((item) => (
            <div key={item} className="border border-white/15 bg-white/5 p-5">
              <span className="mb-8 block h-px w-16 bg-forged-silver" />
              <h2 className="text-xl font-black uppercase tracking-[0.04em]">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-forged-concrete">Designed for practical use, strong identity, and clean industrial presentation.</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="button-secondary mt-8 border-white bg-white text-forged-black">Start a Custom Request</Link>
      </div>
    </section>
  );
}
