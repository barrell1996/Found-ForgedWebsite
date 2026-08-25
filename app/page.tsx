import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property Services in Miami County | Cleanup, Mulch, Junk & Driveways",
  description: "Garden-bed cleanup, mulching, junk removal, gravel driveway repair, grading, and light tractor work in Troy, Piqua, Tipp City, and surrounding Miami County communities.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Local Property Services in Miami County | Found & Forged",
    description: "Garden-bed cleanup, mulching, junk removal, driveway repair, grading, and practical property work in western Ohio.",
    url: "/",
    images: [{ url: "/brand/service-cleanup.jpg", width: 1536, height: 1024, alt: "Property cleanup equipment" }]
  }
};

const services = [
  { number: "01", title: "Garden-Bed Cleanup", href: "/garden-bed-cleanup", copy: "Clear weeds, leaves, dead growth, small debris, and tired bed edges so planting areas look maintained and are ready for mulch." },
  { number: "02", title: "Mulching", href: "/mulching", copy: "Prepare beds and install an even mulch layer for a cleaner appearance, better moisture retention, and easier ongoing maintenance." },
  { number: "03", title: "Junk Removal", href: "/junk-removal", copy: "Remove unwanted household, garage, yard, and property clutter with straightforward estimates and responsible disposal." },
  { number: "04", title: "Driveway & Tractor Work", href: "/gravel-driveway-repair", copy: "Repair and grade gravel drives, spread material, improve surface drainage, and handle right-sized tractor projects." }
];

const problems = ["Overgrown or neglected garden beds", "Old mulch and weeds", "Seasonal property cleanup", "Garage or household clutter", "Yard debris and unwanted items", "Rough gravel drives and small grading needs"];
const areas = ["Troy", "Piqua", "Tipp City", "Covington", "Pleasant Hill", "West Milton", "Casstown", "Vandalia", "Sidney"];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[660px] overflow-hidden border-b border-stone-200 bg-[#15120f]">
        <Image src="/brand/service-cleanup.jpg" alt="Equipment supporting property cleanup work" fill className="object-cover object-center" priority fetchPriority="high" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,.96)_0%,rgba(8,7,6,.82)_46%,rgba(8,7,6,.28)_82%)]" />
        <div className="relative container-tight flex min-h-[660px] items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d4b07b]">Miami County · Western Ohio</p>
            <h1 className="display-serif mt-5 text-5xl font-black leading-[.98] sm:text-6xl lg:text-7xl">Local Property Services That Get the Work Done</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">Garden-bed cleanup, mulching, junk removal, gravel driveway work, and practical small-property projects in Troy, Piqua, Tipp City, and nearby communities.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="button-primary bg-[#d4b07b] text-[#15120f] hover:bg-white">Request a Free Estimate</Link>
              <a href="tel:+19375728109" className="button-secondary border-white text-white hover:bg-white hover:text-[#15120f]">Call / Text (937) 572-8109</a>
              <Link href="/services" className="button-secondary border-white text-white hover:bg-white hover:text-[#15120f]">Explore All Services</Link>
            </div>
            <p className="mt-6 text-sm font-bold text-stone-200">Send a few photos and your service location to get started.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-[#eee4d5] px-5 py-5 sm:px-8 lg:px-12">
        <div className="container-tight flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-xs font-black uppercase tracking-[0.15em] text-[#3b3027]">
          <span>Locally owned</span><span aria-hidden="true">•</span><span>Free estimates</span><span aria-hidden="true">•</span><span>Property cleanup</span><span aria-hidden="true">•</span><span>Responsible removal</span>
        </div>
      </section>

      <section className="section-pad bg-[#fbf7ef]">
        <div className="container-tight">
          <div className="max-w-3xl">
            <p className="eyebrow">Property services</p>
            <h2 className="display-serif mt-3 text-4xl font-black leading-tight sm:text-5xl">One local contact for the work piling up around your property.</h2>
            <p className="mt-5 text-base leading-8 text-stone-700">From restoring overgrown beds to hauling away unwanted items or reshaping a rough driveway, we build each estimate around the actual scope and the result you need.</p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-[#9a7146]">{service.number}</p><h3 className="mt-8 text-xl font-black uppercase tracking-[0.04em]">{service.title}</h3><p className="mt-3 leading-7 text-stone-700">{service.copy}</p><Link href={service.href} className="mt-5 inline-flex text-xs font-black uppercase tracking-[0.16em] text-[#7b5a38]">Explore service →</Link>
              </article>
            ))}
          </div>
          <Link href="/services" className="button-secondary mt-7">View All Property Services</Link>
        </div>
      </section>

      <section className="section-pad border-y border-stone-200 bg-white">
        <div className="container-tight grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow">Common projects</p><h2 className="display-serif mt-3 text-4xl font-black leading-tight">When the property needs attention and the list keeps growing.</h2><p className="mt-5 leading-8 text-stone-700">Send photos of the work area, unwanted material, access, and the finished result you have in mind. Clear photos help us quote efficiently.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{problems.map((problem) => <div key={problem} className="border border-stone-200 bg-[#fbf7ef] p-5 text-sm font-black uppercase tracking-[.07em]">{problem}</div>)}</div>
        </div>
      </section>

      <section className="section-pad bg-[#f6f1e8]">
        <div className="container-tight grid gap-10 lg:grid-cols-2">
          <div><p className="eyebrow">A straightforward estimate process</p><h2 className="display-serif mt-3 text-4xl font-black leading-tight">Start with the property, not a sales pitch.</h2></div>
          <div className="grid gap-5">
            {[["01", "Send the basics", "Share your city, a short description, approximate dimensions or load size, and clear photos of the work area."], ["02", "Define the scope", "We review access, labor, material, disposal needs, equipment fit, and what should remain or be removed."], ["03", "Agree on the work", "You receive a clear scope for cleanup, mulch installation, junk removal, driveway work, or another practical property service."]].map(([number, title, copy]) => (
              <div key={number} className="grid grid-cols-[48px_1fr] gap-4 border-t border-stone-300 pt-5"><span className="text-lg font-black text-[#9a7146]">{number}</span><div><h3 className="text-lg font-black uppercase">{title}</h3><p className="mt-2 leading-7 text-stone-700">{copy}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#15120f] text-white">
        <div className="container-tight grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div><p className="eyebrow text-[#d4b07b]">Local service area</p><h2 className="display-serif mt-3 text-4xl font-black leading-tight sm:text-5xl">Serving Miami County and nearby western Ohio properties.</h2><p className="mt-5 max-w-2xl leading-8 text-stone-200">Primary coverage includes Miami County, with selected projects in nearby Shelby, Champaign, and northern Montgomery County communities.</p><div className="mt-6 flex flex-wrap gap-2">{areas.map((area) => <span key={area} className="border border-white/25 px-3 py-2 text-xs font-black uppercase tracking-[.12em]">{area}</span>)}</div></div>
          <div className="border border-white/20 bg-white/5 p-7"><h3 className="text-2xl font-black uppercase">Not sure if you are in range?</h3><p className="mt-3 leading-7 text-stone-200">Send the service address and a few photos. Travel, access, scope, and equipment fit all factor into scheduling.</p><Link href="/contact" className="button-primary mt-6 bg-white text-[#15120f] hover:bg-[#d4b07b]">Check Your Project</Link></div>
        </div>
      </section>

      <section className="bg-[#fbf7ef]">
        <div className="container-tight grid lg:grid-cols-2">
          <div className="relative min-h-[380px] bg-[#211913]"><Image src="/brand/FounderPhoto.jpg" alt="Brennan and Taylor, owners of Found & Forged" fill className="object-cover object-center" sizes="(min-width: 1024px) 50vw, 100vw" /></div>
          <div className="p-8 sm:p-12 lg:p-16"><p className="eyebrow">Meet the owners</p><h2 className="display-serif mt-3 text-4xl font-black leading-tight">Local people. Clear communication. Useful work.</h2><p className="mt-5 leading-8 text-stone-700">Found &amp; Forged is owned by Brennan and Taylor and built around dependable service, honest expectations, and taking care of the property as if it were our own. Brennan brings a firefighter-paramedic’s service mindset and a hands-on approach to every project.</p><Link href="/about" className="button-secondary mt-7">About Found &amp; Forged</Link></div>
        </div>
      </section>

      <section className="section-pad border-t border-stone-200 bg-[#eee4d5]">
        <div className="container-tight flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center"><div><p className="eyebrow">Ready to start?</p><h2 className="display-serif mt-2 text-4xl font-black">Request a free property-service estimate.</h2></div><div className="flex flex-wrap gap-3"><a href="tel:+19375728109" className="button-secondary">Call / Text (937) 572-8109</a><Link href="/contact" className="button-primary">Send Project Details &amp; Photos</Link></div></div>
      </section>

      <section className="border-t border-stone-200 bg-[#fbf7ef] px-5 py-8 sm:px-8 lg:px-12">
        <div className="container-tight flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="eyebrow">More from Found &amp; Forged</p><p className="mt-2 text-sm text-stone-700">Vintage finds, custom goods, digital plans, and practical property resources.</p></div><div className="flex flex-wrap gap-4 text-xs font-black uppercase tracking-[.13em]"><Link href="/curated-goods">Vintage finds</Link><Link href="/custom-goods">Custom goods</Link><Link href="/digital-products">Digital plans</Link><Link href="/blog">Learning center</Link></div></div>
      </section>
    </>
  );
}
