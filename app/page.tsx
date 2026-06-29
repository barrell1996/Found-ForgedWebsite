import Image from "next/image";
import Link from "next/link";

const propertyServices = [
  {
    title: "Gravel Driveways & Repair",
    href: "/gravel-driveway-rehabilitation",
    image: "/brand/service-gravel.jpg",
    icon: "▤"
  },
  {
    title: "Property Cleanup & Detailing",
    href: "/services",
    image: "/brand/service-cleanup.jpg",
    icon: "⌁"
  },
  {
    title: "Grading & Land Improvement",
    href: "/services",
    image: "/brand/service-grading.jpg",
    icon: "⚒"
  }
];

const vintageFinds = [
  { title: "Furniture & Decor", href: "/curated-goods", image: "/brand/vintage-furniture.jpg" },
  { title: "Vintage Tools", href: "/curated-goods", image: "/brand/vintage-tools.jpg" },
  { title: "Primitives & Crocks", href: "/curated-goods", image: "/brand/vintage-crocks.jpg" },
  { title: "Americana & Collectibles", href: "/curated-goods", image: "/brand/vintage-americana.jpg" }
];

const values = [
  ["◇", "Hand Picked", "Unique pieces with character and history."],
  ["◎", "Quality Over Quantity", "Carefully sourced. Carefully cleaned. Carefully chosen."],
  ["⌂", "Vintage With Purpose", "We believe in giving quality pieces a second life."],
  ["♡", "Pieces That Last", "Built to stand the test of time."]
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[620px] overflow-hidden border-b border-stone-200 bg-[#15120f]">
        <Image src="/brand/hero-approved.jpg" alt="Found & Forged trading room with curated vintage goods" fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,.92)_0%,rgba(8,7,6,.76)_38%,rgba(8,7,6,.32)_68%,rgba(8,7,6,.62)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.38)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,.42)_100%)]" />
        <div className="relative container-tight flex min-h-[620px] items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-xl text-white">
            <h1 className="display-serif text-6xl font-black uppercase leading-[0.92] sm:text-7xl lg:text-8xl">
              Built On<br />Hard Work.
            </h1>
            <p className="script-line mt-5 text-3xl sm:text-4xl">Fueled by purpose.</p>
            <div className="mt-5 h-px w-20 bg-[#9a7146]" />
            <p className="mt-6 max-w-sm text-base leading-7 text-stone-100">
              Property services, custom goods, digital plans and vintage finds — all under one roof.
            </p>
            <Link href="#services" className="button-secondary mt-8 border-white text-white hover:bg-white hover:text-[#15120f]">
              Explore What We Do →
            </Link>
          </div>
          <div className="absolute bottom-6 left-5 right-5 border-t border-white/20 pt-4 text-white sm:left-8 sm:right-8 lg:left-auto lg:right-12 lg:max-w-md">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d4b07b]">Found & Forged Trading Co.</p>
            <p className="mt-2 text-sm leading-6 text-stone-200">A practical brand for home, property, curated finds, and goods made with care.</p>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad bg-[#fbf7ef]">
        <div className="container-tight grid gap-8 lg:grid-cols-[300px_1fr]">
          <div>
            <p className="eyebrow">Property Services</p>
            <h2 className="display-serif mt-3 text-4xl font-black leading-tight text-[#15120f] sm:text-5xl">
              We work so your property works for you.
            </h2>
            <div className="mt-5 h-px w-16 bg-[#9a7146]" />
            <p className="mt-5 text-sm leading-7 text-stone-700">
              From driveways to property cleanup and detailing, we handle the work that keeps your property looking its best.
            </p>
            <Link href="/services" className="button-primary mt-7">View All Services →</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {propertyServices.map((service) => (
              <Link key={service.title} href={service.href} className="group overflow-hidden border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/9] overflow-hidden bg-cover bg-center" style={service.image.startsWith("/") ? undefined : { backgroundImage: service.image }}>
                  {service.image.startsWith("/") ? (
                    <Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
                  ) : null}
                </div>
                <div className="grid grid-cols-[44px_1fr] gap-3 p-5">
                  <div className="text-3xl leading-none text-[#9a7146]">{service.icon}</div>
                  <div>
                    <h3 className="text-sm font-black uppercase leading-5 tracking-[0.12em] text-[#15120f]">{service.title}</h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#7b5a38]">Learn More →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-stone-200 bg-[#f6f1e8]">
        <div className="container-tight grid gap-8 lg:grid-cols-[300px_1fr]">
          <div>
            <p className="eyebrow">Vintage & Curated Finds</p>
            <h2 className="display-serif mt-3 text-4xl font-black leading-tight text-[#15120f] sm:text-5xl">
              Timeless pieces.<br />Real stories.
            </h2>
            <div className="mt-5 h-px w-16 bg-[#9a7146]" />
            <p className="mt-5 text-sm leading-7 text-stone-700">
              We hand pick unique, vintage and antique treasures with character and history. Each piece is carefully selected and ready for its next chapter.
            </p>
            <Link href="/curated-goods" className="button-primary mt-7">Explore The Collection →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vintageFinds.map((find) => (
              <Link key={find.title} href={find.href} className="group overflow-hidden border border-stone-200 bg-[#fbf7ef] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#211913]">
                  <Image src={find.image} alt={find.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[#15120f]">{find.title}</h3>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[#7b5a38]">Browse →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-[#eee4d5] px-5 py-8 sm:px-8 lg:px-12">
        <div className="container-tight grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([icon, title, copy]) => (
            <div key={title} className="grid grid-cols-[48px_1fr] gap-4 border-stone-300 lg:border-r lg:last:border-r-0">
              <div className="text-4xl text-[#7b5a38]">{icon}</div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#15120f]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-700">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fbf7ef]">
        <div className="container-tight grid lg:grid-cols-3">
          <div className="border-r border-stone-200 p-8 lg:p-12">
            <p className="eyebrow">New Finds Added Weekly</p>
            <p className="mt-3 text-sm leading-7 text-stone-700">Check back often — you never know what we’ll find next.</p>
            <Link href="/curated-goods" className="mt-5 inline-block text-xs font-black uppercase tracking-[0.18em] text-[#15120f]">View Newest Finds →</Link>
          </div>
          <div className="p-8 lg:p-12">
            <p className="eyebrow">Our Story</p>
            <h2 className="display-serif mt-3 text-3xl font-black leading-tight text-[#15120f]">More than a business.</h2>
            <p className="script-line mt-1 text-2xl">Built to serve.</p>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              Found & Forged was created with a simple mission: provide dependable property services, thoughtfully curated goods, and handcrafted products with a level of care that's becoming harder to find. We believe quality work, honest communication, and lasting relationships never go out of style—and that's the standard we bring to everything we do.
            </p>
            <Link href="/about" className="button-secondary mt-6">Meet Brennan & Taylor →</Link>
          </div>
          <div className="relative min-h-72 bg-[#211913]">
            <Image src="/brand/FounderPhoto.jpg" alt="Brennan and Taylor, founders of Found & Forged" fill className="object-cover object-center" sizes="(min-width: 1024px) 33vw, 100vw" />
          </div>
        </div>
      </section>
    </>
  );
}
