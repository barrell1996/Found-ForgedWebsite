import type { Metadata } from "next";
import Link from "next/link";

type Faq = { question: string; answer: string };
type RelatedLink = { label: string; href: string };

type PropertyServicePageProps = {
  eyebrow: string;
  h1: string;
  intro: string;
  serviceName: string;
  slug: string;
  sections: Array<{ title: string; body: string }>;
  bullets: string[];
  photos: string[];
  faqs: Faq[];
  related: RelatedLink[];
  ctaLabel?: string;
};

export function buildPropertyServiceMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path }
  };
}

export function PropertyServicePage({
  eyebrow,
  h1,
  intro,
  serviceName,
  slug,
  sections,
  bullets,
  photos,
  faqs,
  related,
  ctaLabel = "Request an Estimate"
}: PropertyServicePageProps) {
  const url = `https://foundforgedco.com/${slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      provider: { "@type": "LocalBusiness", name: "Found & Forged Property Services" },
      areaServed: ["Miami County, Ohio", "Troy, Ohio", "Piqua, Ohio", "Tipp City, Ohio", "Western Ohio"],
      serviceType: serviceName,
      url
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="section-pad bg-[#15120f] text-white">
        <div className="container-tight">
          <p className="eyebrow text-[#d4b07b]">{eyebrow}</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight sm:text-6xl">{h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="button-secondary border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">{ctaLabel}</Link>
            <a href="tel:+19375728109" className="button-secondary border-white text-white hover:bg-white hover:text-[#15120f]">Call / Text (937) 572-8109</a>
            <Link href="/services" className="button-secondary border-white text-white hover:bg-white hover:text-[#15120f]">View All Property Services</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Service Details</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Built around the actual property problem.</h2>
            <div className="mt-6 grid gap-5">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-xl font-black uppercase text-[#15120f]">{section.title}</h3>
                  <p className="mt-2 leading-8 text-stone-700">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {bullets.map((item) => (
              <div key={item} className="border border-stone-200 bg-[#fbf7ef] p-4 text-sm font-black uppercase tracking-[0.08em] text-[#15120f]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f6f1e8]">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Suggested Photos</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Send the photos that help quote the job.</h2>
            <p className="mt-5 leading-8 text-stone-700">Clear photos reduce back-and-forth and help determine whether the job needs grading, gravel, drainage work, or a smaller maintenance visit.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {photos.map((photo) => (
              <div key={photo} className="border border-stone-200 bg-white p-4 text-sm font-bold leading-6 text-stone-700">{photo}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#15120f]">Common questions before requesting an estimate.</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="border border-stone-200 bg-[#fbf7ef] p-5">
                <summary className="cursor-pointer text-sm font-black uppercase tracking-[0.08em] text-[#15120f]">{faq.question}</summary>
                <p className="mt-3 leading-7 text-stone-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f6f1e8]">
        <div className="container-tight">
          <p className="eyebrow">Related Services</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((link) => (
              <Link key={link.href} href={link.href} className="border border-stone-200 bg-white p-5 text-sm font-black uppercase tracking-[0.12em] text-[#15120f] transition hover:border-[#15120f]">{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight border border-stone-200 bg-[#15120f] p-6 text-white">
          <h2 className="text-2xl font-black uppercase">Ready to look at the property?</h2>
          <p className="mt-2 max-w-2xl text-stone-200">Send photos, location, and a short description of the problem. The fastest estimates start with clear driveway, culvert, gravel, and access photos.</p>
          <Link href="/contact" className="button-secondary mt-5 border-white bg-white text-[#15120f] hover:bg-transparent hover:text-white">{ctaLabel}</Link>
        </div>
      </section>
    </>
  );
}
