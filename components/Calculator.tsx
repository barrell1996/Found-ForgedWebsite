"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { calculators } from "@/lib/site-data";

const labels: Record<string, string> = {
  length: "Length (ft)",
  width: "Width (ft)",
  depth: "Depth (in)",
  boardWidth: "Board width (in)",
  spacing: "Post spacing (ft)",
  paverArea: "Paver area (sq ft)",
  height: "Height (ft)",
  blockLength: "Block length (in)",
  blockHeight: "Block height (in)"
};

export function CalculatorGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {calculators.map((calculator) => (
        <CalculatorCard key={calculator.id} calculator={calculator} />
      ))}
    </div>
  );
}

function CalculatorCard({ calculator }: { calculator: (typeof calculators)[number] }) {
  const [values, setValues] = useState<Record<string, number>>({
    length: 40,
    width: 12,
    depth: 4,
    boardWidth: 5.5,
    spacing: 8,
    paverArea: 1,
    height: 3,
    blockLength: 16,
    blockHeight: 8
  });

  const result = useMemo(() => {
    const { length, width, depth, boardWidth, spacing, paverArea, height, blockLength, blockHeight } = values;
    try {
      const calculated = Function(
        "length",
        "width",
        "depth",
        "boardWidth",
        "spacing",
        "paverArea",
        "height",
        "blockLength",
        "blockHeight",
        `return ${calculator.formula}`
      )(length, width, depth, boardWidth, spacing, paverArea, height, blockLength, blockHeight);
      return Number.isFinite(calculated) ? Math.max(0, calculated).toFixed(calculated > 20 ? 0 : 2) : "0";
    } catch {
      return "0";
    }
  }, [calculator.formula, values]);

  return (
    <article id={calculator.id} className="panel p-5">
      <h2 className="text-xl font-black uppercase tracking-[0.03em]">{calculator.title}</h2>
      <p className="mt-3 min-h-14 text-sm leading-7 text-forged-steel">{calculator.explanation}</p>
      <div className="mt-5 grid gap-3">
        {calculator.fields.map((field) => (
          <label key={field} className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-forged-charcoal">
            {labels[field]}
            <input
              type="number"
              min="0"
              step="0.1"
              value={values[field]}
              onChange={(event) => setValues((current) => ({ ...current, [field]: Number(event.target.value) }))}
              className="min-h-12 border border-forged-concrete bg-forged-smoke px-3 text-base font-bold text-forged-black outline-none focus:border-forged-black"
            />
          </label>
        ))}
      </div>
      <div className="my-5 border-y border-forged-concrete py-4">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-forged-steel">Estimated result</p>
        <p className="mt-1 text-3xl font-black text-forged-black">
          {result} <span className="text-base text-forged-steel">{calculator.unit}</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href="/blog" className="button-secondary text-[11px]">Related Posts</Link>
        <Link href="/services" className="button-secondary text-[11px]">Services</Link>
        <Link href="/contact" className="button-primary text-[11px]">Request a Quote</Link>
      </div>
    </article>
  );
}
