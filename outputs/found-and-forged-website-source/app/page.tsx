import Image from "next/image";
import Link from "next/link";

const propertyServices = [
  {
    title: "Gravel Driveways & Repair",
    href: "/gravel-driveway-rehabilitation",
    image: "linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.18)), linear-gradient(135deg, #39513b, #1f261c 55%, #8b7a60)",
    icon: "▤"
  },
  {
    title: "Property Cleanup & Detailing",
    href: "/services",
    image: "linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.18)), linear-gradient(135deg, #2f4e2d, #6f5b35 50%, #15120f)",
    icon: "⌁"
  },
  {
    title: "Grading & Land Improvement",
    href: "/services",
    image: "linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.18)), linear-gradient(135deg, #4c3f2d, #17120d 58%, #86755e)",
    icon: "⚒"
  }
];

const vintageFinds = [
  { title: "Furniture & Decor", href: "/curated-goods", imageClass: "card-image-furniture" },
  { title: "Vintage Tools", href: "/curated-goods", imageClass: "card-image-tools" },
  { title: "Primitives & Crocks", href: "/curated-goods", imageClass: "card-image-crocks" },
  { title: "Americana & Collectibles", href: "/curated-goods", imageClass: "card-image-americana" }
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
      <section className="relative overflow-hidden border-b border-stone-200 bg-[#15120f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(154,113,70,.45),transparent_28%),linear-gradient(90deg,#080706_0%,#16120e_38%,#3b2f24_100%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-2/3 opacity-70 lg:block">
          <div className="h-full w-full bg-[linear-gradient(90deg,rgba(8,7,6,0)_0%,rgba(8,7,6,.2)_55%,rgba(8,7,6,.45)_100%)]" />
        </div>
        <div className="relative container-tight grid min-h-[520px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
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
          <div className="hidden lg:block">
            <div className="relative ml-auto max-w-2xl rounded-none border border-white/10 bg-black/20 p-6 shadow-2xl backdrop-blur-[1px]">
              <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_55%_35%,#806144,#231912_55%,#0f0c09_100%)]">
                <Image src="/brand/found-forged-logo.svg" alt="Found & Forged" fill className="object-contain p-10 opacity-25" priority />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.35),rgba(0,0,0,0)),radial-gradient(circle_at_72%_50%,rgba(255,216,153,.18),transparent_32%)]" />
                <div className="absolute bottom-6 left-6 right-6 border border-white/15 bg-black/30 p-5 text-white backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d4b07b]">Found & Forged Trading Co.</p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-stone-200">A practical brand for home, property, curated finds, and goods made with care.</p>
                </div>
              </div>
            </div>
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
                <div className="aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: service.image }} />
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
                <div className={`${find.imageClass} aspect-[4/3] bg-cover bg-center`} />
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
            <p className="script-line mt-1 text-2xl">It’s a way of life.</p>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              We’re Brennan & Taylor. This company is built on faith, family, and hard work. Every service we provide, every product we make, and every item we find is done with purpose and a standard you can count on.
            </p>
            <Link href="/about" className="button-secondary mt-6">Meet Brennan & Taylor →</Link>
          </div>
          <div className="relative min-h-72 bg-[radial-gradient(circle_at_50%_35%,#8b6747,#211712_68%)]">
            <Image src="/brand/found-forged-logo.svg" alt="Found & Forged leather mark" fill className="object-contain p-16 opacity-35" />
          </div>
        </div>
      </section>
    </>
  );
}
