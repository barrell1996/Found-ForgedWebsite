import Image from "next/image";
import Link from "next/link";

const navItems = [
  ["Services", "/services"],
  ["Digital Products", "/digital-products"],
  ["Curated Goods", "/curated-goods"],
  ["Custom Goods", "/custom-goods"],
  ["Learning Center", "/learning"],
  ["Blog", "/blog"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forged-concrete bg-white/94 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Found & Forged home">
          <Image
            src="/brand/found-forged-logo.jpeg"
            alt="Found & Forged logo"
            width={52}
            height={52}
            className="h-11 w-11 rounded-full border border-forged-concrete object-cover"
            priority
          />
          <span className="leading-none">
            <span className="block text-sm font-black uppercase tracking-[0.16em]">Found & Forged</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-forged-steel">
              Est. 2026
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="text-[11px] font-black uppercase tracking-[0.12em] text-forged-charcoal hover:text-forged-black xl:text-xs xl:tracking-[0.16em]">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button-primary hidden sm:inline-flex">
          Request a Quote
        </Link>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-forged-concrete px-4 py-2 lg:hidden">
        {[...navItems, ["Request a Quote", "/contact"]].map(([label, href]) => (
          <Link key={href} href={href} className="shrink-0 px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-forged-charcoal">
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
