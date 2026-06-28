import Link from "next/link";

const propertyServices = [
  ["Gravel Driveways & Repair", "Driveway repair, reshaping, pothole correction, and fresh gravel planning.", "▦", "bg-[linear-gradient(rgba(0,0,0,.08),rgba(0,0,0,.18)),linear-gradient(135deg,#2f3d26,#6d6648_50%,#17130f)]"],
  ["Property Cleanup & Detailing", "Loader work, brush cleanup, hard edges, and property touch-ups with a John Deere 2032R.", "☘", "bg-[linear-gradient(rgba(0,0,0,.08),rgba(0,0,0,.18)),linear-gradient(135deg,#314a25,#6f7a3e_48%,#21160f)]"],
  ["Grading & Land Improvement", "Surface improvement, leveling, drainage help, and rough-area cleanup.", "⚒", "bg-[linear-gradient(rgba(0,0,0,.08),rgba(0,0,0,.18)),linear-gradient(135deg,#493722,#7b674b_52%,#17110c)]"]
];

const vintageFinds = [
  ["Furniture & Decor", "Browse", "card-image-furniture"],
  ["Vintage Tools", "Browse", "card-image-tools"],
  ["Primitives & Crocks", "Browse", "card-image-crocks"],
  ["Americana & Collectibles", "Browse", "card-image-americana"]
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
      <section className="relative overflow-hidden border-b border-[#e8dece] bg-[#15120f] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,9,8,.94),rgba(10,9,8,.78)_34%,rgba(10,9,8,.22)_72%),radial-gradient(circle_at_74%_45%,rgba(184,133,78,.34),transparent_28%),linear-gradient(135deg,#18120d,#3d3025_48%,#78634b_70%,#1a120c)]" />
        <div className="absolute inset-y-0 right-0 hidden w-[66%] opacity-95 lg:block">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,#2a2119_18%,#5e4b3a_55%,#16100c)]" />
          <div className="absolute left-[18%] top-[16%] w-[48%] border border-[#9a7146]/50 bg-[#d4c0a1]/25 px-8 py-6 text-center shadow-2xl backdrop-blur-[1px]">
            <div className="display-serif text-5xl font-black uppercase leading-none text-[#15120f]/75">Found & Forged</div>
            <div className="mt-2 text-xl font-black uppercase tracking-[0.18em] text-[#15120f]/70">Trading Co.</div>
          </div>
          <div className="absolute bottom-[17%] left-[12%] h-[29%] w-[42%] bg-[#2a2119] shadow-2xl ring-1 ring-white/10" />
          <div className="absolute bottom-[33%] left-[52%] h-28 w-10 rounded-full bg-[#f6b45e]/80 blur-sm" />
          <div className="absolute bottom-[15%] right-[12%] h-[30%] w-[23%] rounded-t-full bg-[#5c3921] shadow-2xl ring-1 ring-white/10" />
          <div className="absolute right-[7%] top-[25%] h-[26%] w-[14%] border border-white/10 bg-[#211711]/80" />
        </div>
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <h1 className="display-serif text-6xl font-black uppercase leading-[0.95] text-[#fbf7ef] sm:text-7xl lg:text-8xl">
              Built On<br />Hard Work.
            </h1>
            <p className="script-line mt-4 text-4xl sm:text-5xl">Fueled by purpose.</p>
            <p className="mt-6 max-w-md text-base leading-8 text-[#f4eadb] sm:text-lg">
              Property services, custom goods, digital plans and vintage finds — all under one roof.
            </p>
            <Link href="/services" className="button-secondary mt-8 border-white text-white hover:bg-white hover:text-[#15120f]">
              Explore What We Do →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e8dece] bg-[#fbf7ef] px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[300px_1fr]">
          <div>
            <p className="eyebrow">Property Services</p>
            <h2 className="display-serif mt-3 text-4xl font-black leading-tight text-[#15120f]">We work so your property works for you.</h2>
            <div className="mt-5 h-px w-16 bg-[#9a7146]" />
            <p className="mt-5 text-sm leading-7 text-[#40362d]">
              From driveways to property cleanup and detailing, we handle the work that keeps your property looking its best.
            </p>
            <Link href="/services" className="button-primary mt-7">View All Services →</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {propertyServices.map(([title, description, icon, image]) => (
              <Link key={title} href="/services" className="group overflow-hidden border border-[#ded2bf] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`flex aspect-[4/2.6] items-end p-5 ${image}`}>
                  <span className="text-3xl text-[#fbf7ef]">{icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-black uppercase tracking-[0.14em] text-[#15120f]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5f5143]">{description}</p>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#9a7146]">Learn More →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e8dece] bg-[#fbf7ef] px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[300px_1fr]">
          <div>
            <p className="eyebrow">Vintage & Curated Finds</p>
            <h2 className="display-serif mt-3 text-5xl font-black leading-none text-[#15120f]">Timeless pieces.<br />Real stories.</h2>
            <div className="mt-5 h-px w-16 bg-[#9a7146]" />
            <p className="mt-5 text-sm leading-7 text-[#40362d]">
              We hand pick unique, vintage and antique treasures with character and history. Each piece is carefully selected and ready for its next chapter.
            </p>
            <Link href="/curated-goods" className="button-primary mt-7">Explore The Collection →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vintageFinds.map(([title, subtitle, imageClass]) => (
              <Link key={title} href="/curated-goods" className="group overflow-hidden border border-[#ded2bf] bg-[#f6f1e8] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`aspect-[4/3] ${imageClass}`} />
                <div className="p-5">
                  <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[#15120f]">{title}</h3>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#9a7146]">{subtitle} →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e8dece] bg-[#f3eadc] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([icon, title, text]) => (
            <div key={title} className="flex gap-4 border-[#ded2bf] lg:border-r lg:pr-6 last:border-r-0">
              <div className="text-4xl leading-none text-[#9a7146]">{icon}</div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#15120f]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5143]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid border-b border-[#e8dece] bg-[#fbf7ef] lg:grid-cols-3">
        <div className="bg-[#e9ddca] px-8 py-12 lg:px-14">
          <p className="text-4xl text-[#9a7146]">▣</p>
          <h2 className="mt-4 text-xl font-black uppercase tracking-[0.14em] text-[#15120f]">New Finds Added Weekly</h2>
          <p className="mt-3 text-sm leading-7 text-[#40362d]">Check back often — you never know what we’ll find next.</p>
          <Link href="/curated-goods" className="mt-6 inline-block text-xs font-black uppercase tracking-[0.16em] text-[#15120f]">View Newest Finds →</Link>
        </div>
        <div className="px-8 py-12 lg:px-14">
          <p className="eyebrow">Our Story</p>
          <h2 className="display-serif mt-3 text-4xl font-black leading-tight text-[#15120f]">More than a business.</h2>
          <p className="script-line mt-1 text-3xl">It’s a way of life.</p>
          <p className="mt-5 text-sm leading-7 text-[#40362d]">
            We’re Brennan & Taylor. This company is built on faith, family, and hard work. Every service we provide, every product we make, and every item we find is done with purpose and a standard you can count on.
          </p>
          <Link href="/about" className="button-secondary mt-7">Meet Brennan & Taylor →</Link>
        </div>
        <div className="min-h-[320px] bg-[radial-gradient(circle_at_45%_35%,rgba(186,133,73,.35),transparent_24%),linear-gradient(135deg,#1d140f,#4b3423_48%,#0f0c09)]" />
      </section>

      <section className="bg-[#15120f] px-5 py-7 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[["Built With Integrity", "We do what we say and stand behind our work."], ["Quality You Can Count On", "From materials to craftsmanship, quality is never an afterthought."], ["Rooted In Community", "Proudly serving our neighbors and our local community."], ["Built For Home. Property. Life.", "One brand for practical work, useful plans, custom goods, and real finds."]].map(([title, text]) => (
            <div key={title}>
              <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#d7bea0]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#e8dece]">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
