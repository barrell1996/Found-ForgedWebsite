import Image from "next/image";
import Link from "next/link";

const navItems = [
  ["Driveway Services", "/services"],
  ["Service Area", "/gravel-driveway-repair-miami-county-ohio"],
  ["About", "/about"],
  ["Resources", "/blog"],
  ["More", "/curated-goods"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8dece] bg-[#fbf7ef]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Found & Forged home">
          <Image
            src="/brand/found-forged-logo.jpeg"
            alt="Found & Forged logo"
            width={92}
            height={92}
            className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="text-[11px] font-black uppercase tracking-[0.2em] text-[#15120f] transition hover:text-[#9a7146]">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 sm:flex">
          <a href="tel:+19375728109" className="text-xs font-black text-[#15120f] hover:text-[#9a7146]">(937) 572-8109</a>
          <Link href="/contact" className="button-primary">Free Estimate</Link>
        </div>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-[#e8dece] px-4 py-2 lg:hidden">
        {[...navItems, ["Free Estimate", "/contact"]].map(([label, href]) => (
          <Link key={href} href={href} className="shrink-0 px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#15120f]">
            {label}
          </Link>
        ))}
      </nav>
      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-2 sm:hidden">
        <a href="tel:+19375728109" className="inline-flex min-h-12 items-center justify-center border border-[#15120f] bg-white px-4 text-xs font-black uppercase tracking-[.14em] text-[#15120f] shadow-xl">Call / Text</a>
        <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-[#15120f] px-4 text-xs font-black uppercase tracking-[.14em] text-white shadow-xl">Free Estimate</Link>
      </div>
    </header>
  );
}
