export function SectionHeader({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-[0.02em] text-forged-black sm:text-4xl">
        {title}
      </h2>
      {children && <div className="mt-4 text-base leading-8 text-forged-steel">{children}</div>}
    </div>
  );
}
