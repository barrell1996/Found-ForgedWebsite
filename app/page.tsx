import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { brandPillars, calculators, services } from "@/lib/site-data";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="blueprint section-pad min-h-[calc(100svh-112px)] border-b border-forged-concrete bg-forged-smoke">
        <div className="container-tight grid items-center gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="eyebrow">Digital headquarters</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-normal text-forged-black sm:text-7xl">
              Found & Forged
            </h1>
            <p className="mt-5 max-w-2xl text-2xl font-black uppercase leading-tight text-forged-charcoal">
              Built for Home. Property. Life.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-forged-steel">
              Found & Forged helps homeowners, DIYers, and property owners improve, maintain, and restore what matters through practical services, digital tools, curated goods, and custom-made products.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">Request a Quote</Link>
              <Link href="/learning" className="button-secondary">Explore Headquarters</Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs border border-forged-concrete bg-white p-5 shadow-industrial">
            <Image src="/brand/found-forged-logo.jpeg" alt="Found & Forged logo" width={420} height={420} className="w-full object-contain" priority />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight">
          <SectionHeader eyebrow="Headquarters" title="One Brand. Four Ways to Create Value.">
            <p>Found & Forged is a practical brand for improving property, planning projects, finding durable goods, and making custom products with a rugged standard.</p>
          </SectionHeader>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {brandPillars.map((pillar) => (
              <Link key={pillar.title} href={pillar.href} className="group border border-forged-concrete bg-forged-smoke p-5 transition hover:border-forged-black hover:bg-white hover:shadow-industrial">
                <span className="mb-8 block h-px w-16 bg-forged-steel transition group-hover:w-24 group-hover:bg-forged-black" />
                <h2 className="text-xl font-black uppercase tracking-[0.04em]">{pillar.title}</h2>
                <p className="mt-4 min-h-28 text-sm leading-7 text-forged-steel">{pillar.summary}</p>
                <span className="button-secondary mt-6 w-full text-[11px]">Explore</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight">
          <SectionHeader eyebrow="Property Services" title="Hands-on property work with an industrial standard.">
            <p>Field services are one part of the brand: durable planning, clean execution, and improvements that make a property more usable.</p>
          </SectionHeader>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <section className="section-pad fine-grid bg-forged-black text-white">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-forged-silver">Featured service</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-5xl">Gravel Driveway Rehabilitation</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-forged-concrete">
              Gravel driveway rehabilitation is the featured service: restore shape, improve drainage, reduce potholes, and bring a worn drive back into working order without making it the entire identity of the company.
            </p>
            <Link href="/gravel-driveway-rehabilitation" className="button-secondary mt-6 border-white bg-white text-forged-black">
              View Service
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-forged-smoke">
        <div className="container-tight">
          <SectionHeader eyebrow="Knowledge Center" title="Field notes for better property decisions." />
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="panel p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-forged-steel">{post.category} / {post.readingTime}</p>
                <h3 className="mt-4 text-xl font-black uppercase leading-tight">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-forged-steel">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Digital Products" title="Plans, templates, and tools built to reduce guesswork.">
              <p>Downloadable DIY plans, deck and patio planning resources, driveway guides, maintenance templates, calculators, and future planning tools.</p>
            </SectionHeader>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/digital-products" className="button-primary">View Digital Products</Link>
              <Link href="/calculators" className="button-secondary">Open Calculators</Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {calculators.slice(0, 6).map((calculator) => (
              <a key={calculator.id} href={`/calculators#${calculator.id}`} className="border border-forged-concrete bg-forged-smoke p-4 text-sm font-black uppercase tracking-[0.08em]">
                {calculator.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-forged-smoke">
        <div className="container-tight grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Why Found & Forged" title="Rugged, modern, trustworthy.">
              <p>Found & Forged is built around practical services, useful education, downloadable tools, reclaimed goods, and custom products that help homeowners build a more capable life around home and property.</p>
            </SectionHeader>
          </div>
          <div className="grid gap-4">
            {["Property-first services", "Downloadable planning products", "Curated and restored goods", "Custom-made brand goods"].map((item) => (
              <div key={item} className="border-l-4 border-forged-black bg-white p-5 text-lg font-black uppercase tracking-[0.04em]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight">
          <SectionHeader eyebrow="Gallery" title="Before and after workbench." />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Before", "After"].map((label) => (
              <div key={label} className="flex aspect-[4/3] items-end border border-dashed border-forged-steel bg-forged-smoke p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-forged-steel">{label} placeholder</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad blueprint bg-forged-smoke">
        <div className="container-tight panel p-6 sm:p-8">
          <p className="eyebrow">Newsletter</p>
          <h2 className="mt-3 text-3xl font-black uppercase">Get the field notes.</h2>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Email address" className="min-h-12 flex-1 border border-forged-concrete bg-white px-4 font-bold outline-none focus:border-forged-black" />
            <button type="button" className="button-primary">Sign Up</button>
          </form>
        </div>
      </section>
    </>
  );
}
