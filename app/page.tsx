import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gravel Driveway Repair & Grading in Miami County, Ohio",
  description: "Gravel driveway repair, grading, pothole repair, gravel spreading, and light tractor work in Troy, Piqua, Tipp City, and surrounding Miami County communities.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gravel Driveway Repair in Miami County | Found & Forged",
    description: "Practical driveway repair, grading, drainage improvement, and gravel spreading for western Ohio properties.",
    url: "/",
    images: [{ url: "/brand/service-gravel.jpg", width: 1536, height: 1024, alt: "Tractor grading a gravel driveway" }]
  }
};

const services = [
  { title: "Driveway Repair", href: "/gravel-driveway-repair", image: "/brand/service-gravel.jpg", copy: "Address potholes, ruts, washboards, soft spots, and washed-out edges by fixing the surface shape—not simply covering the problem." },
  { title: "Driveway Grading", href: "/gravel-driveway-grading", image: "/brand/service-grading.jpg", copy: "Restore crown, improve water shedding, smooth rough travel lanes, and prepare an existing drive for fresh stone when needed." },
  { title: "Gravel & Tractor Work", href: "/light-tractor-services", image: "/brand/service-cleanup.jpg", copy: "Spread or redistribute gravel and complete practical light-tractor work for lanes, pads, entrances, and small property projects." }
];

const problems = ["Potholes that return after rain", "Ruts and washboard sections", "Water running down the driveway", "Gravel pushed into the shoulders", "Rough or washed-out entrances", "Pads and lanes that do not drain"];
const areas = ["Troy", "Piqua", "Tipp City", "Covington", "Pleasant Hill", "West Milton", "Casstown", "Vandalia", "Sidney"];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[660px] overflow-hidden border-b border-stone-200 bg-[#15120f]">
        <Image src="/brand/service-gravel.jpg" alt="Tractor grading a gravel driveway in a rural setting" fill className="object-cover object-center" priority fetchPriority="high" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,.96)_0%,rgba(8,7,6,.82)_46%,rgba(8,7,6,.28)_82%)]" />
        <div className="relative container-tight flex min-h-[660px] items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d4b07b]">Miami County · Western Ohio</p>
            <h1 className="display-serif mt-5 text-5xl font-black leading-[.98] sm:text-6xl lg:text-7xl">Gravel Driveway Repair &amp; Grading</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">Practical repair for potholes, washboards, poor crown, drainage problems, and displaced gravel in Troy, Piqua, Tipp City, and nearby communities.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="button-primary bg-[#d4b07b] text-[#15120f] hover:bg-white">Request a Free Estimate</Link>
              <Link href="/gravel-driveway-repair" className="button-secondary border-white text-white hover:bg-white hover:text-[#15120f]">See How We Repair Drives</Link>
            </div>
            <p className="mt-6 text-sm font-bold text-stone-200">Send a few photos and your service location to get started.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-[#eee4d5] px-5 py-5 sm:px-8 lg:px-12">
        <div className="container-tight flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-xs font-black uppercase tracking-[0.15em] text-[#3b3027]">
          <span>Locally owned</span><span aria-hidden="true">•</span><span>Free estimates</span><span aria-hidden="true">•</span><span>Clear, practical scopes</span><span aria-hidden="true">•</span><span>Right-sized tractor work</span>
        </div>
      </section>

      <section className="section-pad bg-[#fbf7ef]">
        <div className="container-tight">
          <div className="max-w-3xl">
            <p className="eyebrow">Property services</p>
            <h2 className="display-serif mt-3 text-4xl font-black leading-tight sm:text-5xl">Fix the cause before buying another load of gravel.</h2>
            <p className="mt-5 text-base leading-8 text-stone-700">The best repair starts by looking at crown, drainage, gravel movement, traffic wear, and base conditions. We recommend the work that fits the actual driveway problem.</p>
          </div>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="overflow-hidden border border-stone-200 bg-white shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#211913]"><Image src={service.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" /></div>
                <div className="p-6"><h3 className="text-xl font-black uppercase tracking-[0.04em]">{service.title}</h3><p className="mt-3 leading-7 text-stone-700">{service.copy}</p><Link href={service.href} className="mt-5 inline-flex text-xs font-black uppercase tracking-[0.16em] text-[#7b5a38]">Explore service →</Link></div>
              </article>
            ))}
          </div>
          <Link href="/services" className="button-secondary mt-7">View All Property Services</Link>
        </div>
      </section>

      <section className="section-pad border-y border-stone-200 bg-white">
        <div className="container-tight grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow">Common problems</p><h2 className="display-serif mt-3 text-4xl font-black leading-tight">When the driveway stops working for you.</h2><p className="mt-5 leading-8 text-stone-700">Recurring damage usually points to water, shape, traffic, or a weak area beneath the surface. Photos after rain are especially helpful.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{problems.map((problem) => <div key={problem} className="border border-stone-200 bg-[#fbf7ef] p-5 text-sm font-black uppercase tracking-[.07em]">{problem}</div>)}</div>
        </div>
      </section>

      <section className="section-pad bg-[#f6f1e8]">
        <div className="container-tight grid gap-10 lg:grid-cols-2">
          <div><p className="eyebrow">A straightforward estimate process</p><h2 className="display-serif mt-3 text-4xl font-black leading-tight">Start with the property, not a sales pitch.</h2></div>
          <div className="grid gap-5">
            {[["01", "Send the basics", "Share your city, approximate driveway size, a short description, and clear photos of the overall drive and problem areas."], ["02", "Identify the likely cause", "We review crown, drainage, ruts, gravel depth, culverts, access, and whether the job fits light tractor equipment."], ["03", "Agree on the work", "You receive a clear scope for grading, repair, redistribution, spreading, or the next practical step."]].map(([number, title, copy]) => (
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
        <div className="container-tight flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center"><div><p className="eyebrow">Ready to start?</p><h2 className="display-serif mt-2 text-4xl font-black">Request a free property-service estimate.</h2></div><Link href="/contact" className="button-primary">Send Project Details &amp; Photos</Link></div>
      </section>

      <section className="border-t border-stone-200 bg-[#fbf7ef] px-5 py-8 sm:px-8 lg:px-12">
        <div className="container-tight flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="eyebrow">More from Found &amp; Forged</p><p className="mt-2 text-sm text-stone-700">Vintage finds, custom goods, digital plans, and practical property resources.</p></div><div className="flex flex-wrap gap-4 text-xs font-black uppercase tracking-[.13em]"><Link href="/curated-goods">Vintage finds</Link><Link href="/custom-goods">Custom goods</Link><Link href="/digital-products">Digital plans</Link><Link href="/blog">Learning center</Link></div></div>
      </section>
    </>
  );
}
