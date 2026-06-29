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
            Premium practical-property services, guides, calculators, and durable ideas for the work around home.
          </p>
          <a href={`mailto:${contactEmail}`} className="mt-5 inline-block text-sm font-black text-white underline decoration-forged-rust underline-offset-4 hover:text-forged-rust">
            {contactEmail}
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterGroup title="Headquarters" links={[["Services", "/services"], ["Digital Products", "/digital-products"], ["Quote Request", "/contact"]]} />
          <FooterGroup title="Brand Lanes" links={[["Curated Goods", "/curated-goods"], ["Custom Goods", "/custom-goods"], ["Gravel Rehab", "/gravel-driveway-rehabilitation"]]} />
          <FooterGroup title="Resources" links={[["Knowledge Center", "/blog"], ["Learning Center", "/learning"], ["Calculators", "/calculators"]]} />
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-forged-silver">
        Built for Home. Property. Life. · <a href={`mailto:${contactEmail}`} className="hover:text-white">{contactEmail}</a>
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
