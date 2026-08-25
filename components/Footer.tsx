import Image from "next/image";
import Link from "next/link";

const contactEmail = "hello@foundforgedco.com";

export function Footer() {
  return (
    <footer className="fine-grid bg-forged-black text-white">
      <div className="container-tight grid gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_2fr] lg:px-12">
        <div>
          <Image
            src="/brand/found-forged-logo.jpeg"
            alt="Found & Forged logo"
            width={90}
            height={90}
            className="mb-5 h-20 w-20 rounded-full border border-forged-steel object-cover"
          />
          <p className="max-w-sm text-sm leading-7 text-forged-concrete">
            Gravel driveway repair, grading, gravel spreading, and light tractor services for Miami County and nearby western Ohio properties.
          </p>
          <a href={`mailto:${contactEmail}`} className="mt-5 inline-block text-sm font-black text-white underline decoration-forged-rust underline-offset-4 hover:text-forged-rust">
            {contactEmail}
          </a>
          <a href="tel:+19375728109" className="mt-3 block text-lg font-black text-white hover:text-forged-rust">(937) 572-8109</a>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterGroup title="Property Services" links={[["Driveway Repair", "/gravel-driveway-repair"], ["Driveway Grading", "/gravel-driveway-grading"], ["Free Estimate", "/contact"]]} />
          <FooterGroup title="Service Area" links={[["Miami County", "/gravel-driveway-repair-miami-county-ohio"], ["Troy", "/gravel-driveway-repair-troy-ohio"], ["Piqua", "/gravel-driveway-repair-piqua-ohio"], ["Tipp City", "/gravel-driveway-repair-tipp-city-ohio"]]} />
          <FooterGroup title="More From Found & Forged" links={[["Knowledge Center", "/blog"], ["Calculators", "/calculators"], ["Vintage & Custom Goods", "/curated-goods"]]} />
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-forged-silver">
        Locally owned in Miami County, Ohio · <a href="tel:+19375728109" className="hover:text-white">(937) 572-8109</a> · <a href={`mailto:${contactEmail}`} className="hover:text-white">{contactEmail}</a>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-white">{title}</h3>
      <div className="grid gap-3">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="text-sm text-forged-concrete hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
