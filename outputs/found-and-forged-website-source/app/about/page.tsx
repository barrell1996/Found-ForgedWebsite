import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "About Found & Forged, a premium practical-property brand built for home, property, and life."
};

export default function AboutPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-tight grid items-center gap-10 lg:grid-cols-[320px_1fr]">
        <Image src="/brand/found-forged-logo.jpeg" alt="Found & Forged logo" width={420} height={420} className="w-full border border-forged-concrete bg-white p-4 shadow-industrial" />
        <div>
          <p className="eyebrow">About</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-6xl">A practical-property brand with a forged standard.</h1>
          <p className="mt-6 text-lg leading-8 text-forged-steel">
            Found & Forged exists to make home and property work clearer, tougher, and more useful. It combines hands-on services with learning resources, calculators, guides, and future digital products.
          </p>
        </div>
      </div>
    </section>
  );
}
