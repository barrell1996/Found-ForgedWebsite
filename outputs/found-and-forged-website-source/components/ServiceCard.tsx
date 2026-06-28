import Link from "next/link";

export function ServiceCard({ title, summary, href }: { title: string; summary: string; href: string }) {
  return (
    <Link href={href} className="group border border-forged-concrete bg-white p-5 transition hover:border-forged-black hover:shadow-industrial">
      <span className="mb-8 block h-px w-16 bg-forged-silver transition group-hover:w-24 group-hover:bg-forged-black" />
      <h3 className="text-lg font-black uppercase tracking-[0.04em] text-forged-black">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-forged-steel">{summary}</p>
      <span className="mt-5 inline-block text-xs font-black uppercase tracking-[0.18em] text-forged-black">View</span>
    </Link>
  );
}
